import { Injectable, Renderer2 } from '@angular/core';
import { EmptyChar, ExecuteCommands } from '../constants';
import { LinksInterface, TextOptionsInterface } from '../interfaces';
import * as Utils from '../utils';

@Injectable({
  providedIn: 'root'
})
export class CommandExecutorService {
  /** saves the selection from the editor when focussed out */
  shadowRoot: Document;
  savedRange: Range;

  get selection(): Selection {
    return window.getSelection ? window.getSelection() : null;
  }
  /**
   * executes command from the toolbar
   *
   * @param command command to be executed
   * @param value command value to be executed
   */
  execute(command: string, value?: string): void {
    document.execCommand(command, false, value || null);
  }

  insertLink(url: string, newTab: boolean, renderer: Renderer2): void {
    if (this.savedRange && Utils.isValidURL(url)) {
      url = Utils.parseUrl(url);
      Utils.restoreSelection(this.savedRange, this.selection);
      if (newTab) {
        const selectedText: string = this.deleteAndGetElement().trim();

        const newUrl: HTMLElement = renderer.createElement('a');
        // renderer.setAttribute(newUrl, 'href', url);
        renderer.setAttribute(newUrl, 'target', '_blank');
        newUrl.innerText = selectedText;
        this.savedRange.insertNode(newUrl);
        this.savedRange.setStartAfter(newUrl);
        this.savedRange.collapse(true);
        Utils.restoreSelection(this.savedRange, this.selection);
      } else {
        document.execCommand('createLink', false, url);
      }
    }
  }

  insertInternalLink(link: LinksInterface, newTab: boolean, renderer: Renderer2): void {
    if (this.savedRange && link.id) {
      let linkElement: HTMLElement = Utils.getLinkElement(this.savedRange);
      if (!linkElement) {
        Utils.restoreSelection(this.savedRange, this.selection);
        const selectedText: string = this.deleteAndGetElement().trim();
        linkElement = renderer.createElement('a');
        linkElement.innerText = selectedText;
        this.savedRange.insertNode(linkElement);
      }
      renderer.setAttribute(linkElement, 'href', '#');
      renderer.setAttribute(linkElement, 'data-id', link.id);
      if (newTab) {
        renderer.setAttribute(linkElement, 'data-target', 'blank');
      } else if (linkElement.hasAttribute('data-target')) {
        renderer.removeAttribute(linkElement, 'data-target');
      }
      this.savedRange.selectNode(linkElement);
      Utils.restoreSelection(this.savedRange, this.selection);
    }
  }

  toggleLinkUnderline(renderer: Renderer2): void {
    const links: HTMLElement[] = Utils.getSelectionLinks(this.savedRange);
    if (links && links.length) {
      for (const linkElement of links) {
        renderer.setAttribute(linkElement, 'data-underline', linkElement.dataset.underline === 'true' ? 'false' : 'true');
        renderer.setStyle(linkElement, 'textDecoration', linkElement.dataset.underline !== 'false' ? 'none' : 'underline');
      }
    }
  }

  setListColor(range: Range, color: string, renderer: Renderer2): void {
    if (this.selection && range && Utils.hasList()) {
      const container: HTMLElement = Utils.isHtmlElement(range.commonAncestorContainer) && (range.commonAncestorContainer as HTMLElement);
      let list: HTMLElement;
      if (container
        && (container.tagName.toLowerCase() === 'ul'
          || container.tagName.toLowerCase() === 'ol')) {
        list = container;
      } else if (container
        && container.hasAttribute('contenteditable')
        && (container.children[0].tagName.toLowerCase() === 'ul'
          || container.children[0].tagName.toLowerCase() === 'ol')) {
        list = container.children[0] as HTMLElement;
      }
      if (list) {
        for (let i = 0; i < list.childNodes.length; i++) {
          const li = list.childNodes[i] as HTMLElement;
          renderer.setStyle(li, 'color', color);
          this.removeLiColorDuplicate(li, renderer);
        }
      } else {
        const text: string = range.toString();
        let target: HTMLElement = Utils.isHtmlElement(range.startContainer)
          ? range.startContainer as HTMLElement
          : range.startContainer.parentElement;
        while (target.tagName.toUpperCase() !== 'LI' && target.parentElement) {
          if (target.hasAttribute('color')) {
            target.setAttribute('color', color);
          }
          target = target.parentElement;
        }
        if (Utils.compareByChars(target.innerText.trim(), text.trim()) || text.length === 0) {
          if (target.parentElement.childNodes.length === 1) {
            renderer.removeAttribute(target, 'style');
            this.removeLiColorDuplicate(target, renderer);
            target = target.parentElement;
          }
          renderer.setStyle(target, 'color', color);
          this.selection.removeAllRanges();
          this.selection.addRange(range);
        } else {
          Utils.restoreSelection(range, this.selection);
          this.execute(ExecuteCommands.TEXT_COLOR, color);
          this.setListColorInRange(range, color, renderer);
        }
      }
    }
  }

  setListColorInRange(range: Range, color: string, renderer: Renderer2): void {
    if (range) {
      const parent: HTMLElement = Utils.isHtmlElement(range.commonAncestorContainer)
        && range.commonAncestorContainer as HTMLElement
        || range.commonAncestorContainer.parentElement;
      const lists = parent.querySelectorAll('li');
      for (let i = 0; i < lists.length; i++) {
        renderer.setStyle(lists[i], 'color', color);
        this.removeLiColorDuplicate(lists[i], renderer);
      }
    }
  }

  setSelectionLinksColor(color: string, range: Range, selection: Selection, renderer: Renderer2): void {
    this.savedRange = range;
    const fragment: DocumentFragment = this.deleteAndGetContent();
    if (fragment && typeof fragment.querySelectorAll === 'function') {
      const links: NodeListOf<Element> = fragment.querySelectorAll('a');
      for (let i = 0; i < links.length; i++) {
        renderer.setStyle(links[i], 'color', color);
      }
    }
    this.savedRange.insertNode(fragment);
    Utils.restoreSelection(this.savedRange, selection);
  }

  setFontSize(fontSize: number, renderer: Renderer2, root: HTMLElement, parentFontSize?: number): HTMLElement {
    const span: HTMLElement = renderer.createElement('span');
    if (this.savedRange) {
      const node: Node = this.savedRange.commonAncestorContainer.parentElement;
      let parent: HTMLElement;
      if (Utils.isHtmlElement(node)) {
        parent = node as HTMLElement;
      }
      if (!parentFontSize && parent) {
        parentFontSize = Utils.fontSizeToNumber(getComputedStyle(parent).fontSize);
      }
      let embeddedSize: number = Utils.roundTo2(fontSize / parentFontSize);
      if (parent &&
        !this.handleLitsItemsFontSize(parent, renderer, embeddedSize, root)
        && Utils.compareByChars(parent.innerText, this.savedRange.toString())
        && !Utils.compareByChars(root.innerText, this.savedRange.toString())
        && !parent.hasAttribute('contenteditable')
      ) {
        this.cleanNodeChildsFontSize(parent, renderer);
        parentFontSize = Utils.fontSizeToNumber(getComputedStyle(parent.parentElement).fontSize);
        embeddedSize = Utils.roundTo2(fontSize / parentFontSize);
        renderer.setStyle(parent, 'fontSize', `${embeddedSize}em`);
      } else if (parent && parent.hasAttribute('contenteditable')
        && root.innerText === parent.innerText) {
        this.cleanNodeChildsFontSize(root, renderer);
      } else {
        renderer.setStyle(span, 'fontSize', `${embeddedSize}em`);
        const selectedFragment: DocumentFragment = this.deleteAndGetContent();
        if (selectedFragment && selectedFragment.textContent.length) {
          this.cleanNodeChildsFontSize(selectedFragment, renderer);
          span.appendChild(selectedFragment);
          this.savedRange.insertNode(span);
          this.savedRange.selectNode(span);
        } else {
          span.innerHTML = EmptyChar;
          this.savedRange.insertNode(span);
          this.savedRange.setStart(span.firstChild, 1);
          this.savedRange.collapse(true);
        }
        Utils.restoreSelection(this.savedRange, this.selection);
      }
    }
    return span;
  }


  setCaretToEnd(element: HTMLElement): Range {
    if (this.selection) {
      const textNodes = Utils.textNodesUnder(element);
      const range = new Range();
      const node = textNodes.pop();
      range.setStart(node, (node as Text).length);
      range.collapse(true);
      this.selection.removeAllRanges();
      this.selection.addRange(range);
      return range;
    }
  }

  isActiveElement(): boolean {
    return document.activeElement && document.activeElement.getAttribute('contenteditable') === 'true';
  }

  insertText(text: string, options: TextOptionsInterface, renderer: Renderer2, root: HTMLElement): void {
    let range: Range;
    if (this.selection && this.selection.rangeCount) {
      range = this.selection.getRangeAt(0);
      range.setStart(range.startContainer, range.startOffset - 1);
      let target: Node | HTMLElement = range.endContainer;
      if (options[ExecuteCommands.BOLD] !== undefined) {
        this.execute(ExecuteCommands.BOLD, `${options[ExecuteCommands.BOLD]}`);
        target = range.endContainer;
        if (Utils.isHtmlElement(target)) {
          target = target.lastChild;
        }
      }
      if (options[ExecuteCommands.ITALIC] !== undefined) {
        this.execute(ExecuteCommands.ITALIC, `${options[ExecuteCommands.ITALIC]}`);
        target = range.endContainer;
        if (Utils.isHtmlElement(target)) {
          target = target.lastChild;
        }
      }
      if (options[ExecuteCommands.UNDERLINE] !== undefined) {
        this.execute(ExecuteCommands.UNDERLINE, `${options[ExecuteCommands.UNDERLINE]}`);
        target = range.endContainer;
        if (Utils.isHtmlElement(target)) {
          target = target.lastChild;
        }
      }
      if (options.color) {
        if (Utils.hasList()) {
          this.setListColor(range, options.color, renderer);
        } else {
          this.execute(ExecuteCommands.TEXT_COLOR, options.color);
        }
        target = range.endContainer;
        if (Utils.isHtmlElement(target)) {
          target = target.lastChild;
        }
      }
      if (options.fontSize) {
        this.savedRange = range;
        const rootSize: number = Utils.fontSizeToNumber(getComputedStyle(root).fontSize);
        target = this.setFontSize(options.fontSize, renderer, root, rootSize);
        target = target.lastChild;
      }
      while (target.lastChild) {
        target = target.lastChild;
      }
      const textLength: number = (target as Text).length;
      range.setStart(target, textLength === 1 ? 1 : range.startOffset + 1);
      range.setEnd(target, range.startOffset);
      this.selection.removeAllRanges();
      this.selection.addRange(range);
    }
  }

  insertTextAtRange(text: string, range: Range, selection: Selection): void {
    if (!range.collapsed) {
      range.deleteContents();
    }
    if (text.length) {
      const textNode: Node = document.createTextNode(text);
      range.insertNode(textNode);
      range.setStartAfter(textNode);
      range.collapse();
    }
    Utils.restoreSelection(range, selection);
  }

  isInLastPosition(): boolean {
    return this.savedRange &&
      this.savedRange.endContainer &&
      (this.savedRange.endContainer as Text).length === this.savedRange.endOffset;
  }

  private cleanNodeChildsFontSize(node: DocumentFragment | HTMLElement, renderer: Renderer2): void {
    const styledElements: NodeListOf<Node> =  node.querySelectorAll('[style*="font-size"]');
    for (let i = 0; i <  styledElements.length; i++) {
      renderer.setStyle(styledElements[i], 'fontSize', '');
    }
  }

  private handleLitsItemsFontSize(parent: HTMLElement, renderer: Renderer2, embeddedSize: number, root: HTMLElement): boolean {
    if (parent.tagName.toUpperCase() === 'UL'
      || parent.tagName.toUpperCase() === 'OL'
    ) {
      renderer.setStyle(parent, 'fontSize', `${embeddedSize}em`);
      return true;
    } else if (parent.innerHTML.includes('</ul>')
      || parent.innerHTML.includes('</ol>')
    ) {
      this.execute(ExecuteCommands.FONT_SIZE, '3'); // Temporary size
      const fonts: HTMLCollectionOf<Element> = root.getElementsByTagName('font');
      if (fonts.length) {
        for (let i = 0; i < fonts.length; i++) {
          if (fonts[i].hasAttribute('size')) {
            fonts[i].removeAttribute('size');
            renderer.setStyle(fonts[i], 'fontSize', `${embeddedSize}em`);
          }
        }
      }
      const lis: HTMLCollectionOf<Element> = root.getElementsByTagName('li');
      if (lis.length) {
        for (let i = 0; i < lis.length; i++) {
          lis[i].removeAttribute('size');
          renderer.setStyle(lis[i], 'fontSize', `${embeddedSize}em`);
        }
      }
      return true;
    }
    return false;
  }

  /** delete the text at selected range and return the value */
  private deleteAndGetElement(): string {
    let selectedText: string;

    if (this.savedRange) {
      selectedText = this.savedRange.toString();
      this.savedRange.deleteContents();
    }

    return selectedText;
  }

  private deleteAndGetContent(): DocumentFragment {
    let content: DocumentFragment;
    if (this.savedRange && !this.savedRange.collapsed) {
      content = this.savedRange.cloneContents();
      this.savedRange.deleteContents();
    }
    return content;
  }

  private removeLiColorDuplicate(li: HTMLElement, renderer: Renderer2) {
    const fonts = li.querySelectorAll('font');
    for (let i = 0; i < fonts.length; i++) {
      renderer.removeAttribute(fonts[i], 'color');
    }
    const spans = li.querySelectorAll('[style*="color"]');
    for (let i = 0; i < spans.length; i++) {
      renderer.removeStyle(spans[i], 'color');
    }
  }
}
