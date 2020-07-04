/**
 * check whether the string is a valid url or not
 * @param url url
 */
import { Renderer2 } from '@angular/core';
import { ExecuteCommands, JustifyContent } from './constants';
import { LinksInterface, TextDecorationInterface } from './interfaces';

export function isValidURL(url: string): boolean {
  const urlRegExp: RegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  return urlRegExp.test(url);
}

/**
 * save selection when the editor is focussed out
 */
export function saveSelection(selection: Selection): Range {
  if (selection && selection.rangeCount) {
    return selection.getRangeAt(0);
  }
  return null;
}

/**
 * save selection when the editor is focussed out
 */
export function removeRange(selection: Selection): void {
  if (selection) {
    selection.removeAllRanges();
  }
}
/**
 * Get current range
 */
export function getRange(selection: Selection): Range {
  let range: Range = null;
  if (selection && selection.rangeCount > 0) {
    range = selection.getRangeAt(0);
  }
  return range;
}

/**
 * Is in last position
 */
export function isInLastPosition(range: Range): boolean {
  if (range && range.collapsed ) {
    let length = 0;
    if (isHtmlElement(range.endContainer)) {
      length = (range.endContainer as HTMLElement).innerText.length;
    } else {
      length = (range.endContainer as Text).length;
    }
    return length === range.endOffset;
  }
  return false;
}

/**
 * has selected multiple characters
 */
export function isTextSelected(range: Range): boolean {
  return range && !range.collapsed;
}

export function isHtmlElement(obj: any): boolean {
  try {
    // Using W3 DOM2 (works for FF, Opera and Chrome)
    return obj instanceof HTMLElement;
  } catch (e) {
    // Browsers not supporting W3 DOM2 don't have HTMLElement and
    // an exception is thrown and we end up here. Testing some
    // properties that all elements have (works on IE7)
    return (typeof obj === 'object') &&
      (obj.nodeType === 1) && (typeof obj.style === 'object') &&
      (typeof obj.ownerDocument === 'object');
  }
}

/**
 * restore selection when the editor is focussed in
 *
 * @param range saved selection when the editor is focused out
 */
export function restoreSelection(range: Range, selection: Selection): boolean {
  if (range && selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    return true;
  } else {
    return false;
  }
}

/**
 * Check if range in list
 */
export function hasList(): ExecuteCommands.LIST_UNORDERED | ExecuteCommands.LIST_ORDERED {
  for (const key of [ExecuteCommands.LIST_UNORDERED, ExecuteCommands.LIST_ORDERED]) {
    if (document.queryCommandState(key)) {
      return key as ExecuteCommands.LIST_UNORDERED | ExecuteCommands.LIST_ORDERED;
    }
  }
}

/**
 * Check range justify
 */
export function hasJustify(): JustifyContent {
  const commands = [
    ExecuteCommands.JUSTIFY_FULL,
    ExecuteCommands.JUSTIFY_LEFT,
    ExecuteCommands.JUSTIFY_CENTER,
    ExecuteCommands.JUSTIFY_RIGHT
  ];
  for (const key of commands) {
    if (document.queryCommandState(key)) {
      return key as JustifyContent;
    }
  }
}

/**
 * Check range font size
 */
export function hasFontSize(selection: Selection): string {
  let element: HTMLElement;
  try {
    if (selection && selection.focusNode) {
      element = selection.focusNode.parentElement;
      if (isHtmlElement(selection.focusNode)) {
        element = selection.focusNode as HTMLElement;
      }
      return window.getComputedStyle(element, null).getPropertyValue('font-size');
    }
  } catch (e) {
    return ;
  }
  return ;
}

/**
 * Check range font color
 */
export function hasFontColor(): string {
  return document.queryCommandValue(ExecuteCommands.TEXT_COLOR);
}

/**
 * Check range font color
 */
export function hasLink(range: Range): LinksInterface | string {
  const element: HTMLElement = getLinkElement(range);
  if (element && element.tagName.toLowerCase() === 'a') {
    if (element.dataset.id) {
      return { id: element.dataset.id};
    } else {
      return element.getAttribute('href');
    }
  }
}

/**
 * Check range font color
 */
export function getLinkElement(range: Range): HTMLElement {
  let element: any;
  try {
    if (range && range.commonAncestorContainer) {
      element = range.commonAncestorContainer;
      if (!isHtmlElement(element)) {
        element = element.parentElement;
      }
      while (!element.hasOwnProperty('contenteditable') && element.tagName.toLowerCase() !== 'a') {
        element = element.parentElement;
      }
      if (element.tagName.toLowerCase() === 'a') {
        return element;
      }
    }
  } catch (e) {
    return ;
  }
  return ;
}

export function getSelectionLinks(range: Range): HTMLElement[] {
  let element: any;
  const links: HTMLElement[] = [];
  try {
    if (range && range.commonAncestorContainer) {
      element = range.commonAncestorContainer;
      if (!isHtmlElement(element)) {
        element = element.parentElement;
      }
      links.push(...element.querySelectorAll('a'));
      const outerLink = getLinkElement(range);
      if (outerLink) {
        links.push(outerLink);
      }
    }
  } catch (e) {
    return [];
  }
  return links;
}

export function parseRange(range: Range, renderer: Renderer2): Range {
  if (range && !range.collapsed
    && range.startContainer === range.endContainer
    && range.startContainer.nodeType !== Node.TEXT_NODE) {
    let container = isHtmlElement(range.commonAncestorContainer)
      ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
    container = clean(container, renderer);
    while (container.childNodes.length === 1) {
      container = container.firstChild;
    }
    range.selectNodeContents(container);
  }
  return range;
}

/**
 * Check range decoration styles
 */
export function hasDecoration(): TextDecorationInterface {
  return {
    [ExecuteCommands.BOLD]: document.queryCommandState(ExecuteCommands.BOLD),
    [ExecuteCommands.ITALIC]: document.queryCommandState(ExecuteCommands.ITALIC),
    [ExecuteCommands.UNDERLINE]: document.queryCommandState(ExecuteCommands.UNDERLINE),
  };
}

/**
 * Clean empty elements from text
 */
export function clean(node: Node, renderer: Renderer2): Node {
  try {
    for (let n = 0; n < node.childNodes.length; n++) {
      const child: Node = node.childNodes[n];
      if (isHtmlElement(child) && (child as HTMLElement).style.backgroundColor) {
        renderer.removeStyle(child, 'backgroundColor');
      }
      const isBR = child['tagName'] && child['tagName'].toUpperCase() === 'BR';
      if (!isBR && (child['innerText'] === '' ||
        child.nodeType === Node.COMMENT_NODE ||
        (child.nodeType === Node.TEXT_NODE &&
          (!hasWhitespace(child.nodeValue) || !child.nodeValue.length))
      )
      ) {
        node.removeChild(child);
        n--;
      } else if (child.nodeType === 1) {
        clean(child, renderer);
      }
    }
    return node;
  } catch (e) {
    console.error(e);
  }
}

export function textNodesUnder(root: HTMLElement): Node[] {
  let textNodes: Node[] = [];
  addTextNodes(root);
  [].forEach.call(root.querySelectorAll('*'), addTextNodes);
  return textNodes;

  function addTextNodes(el) {
    textNodes = textNodes.concat(
      [].filter.call(el.childNodes, (k) => {
        return k.nodeType === Node.TEXT_NODE;
      })
    );
  }
}

/**
 * convert RGB to hex
 * @param rgb color value
 */
export function rgbToHex(rgb: string): string {
  const rgbConv: RegExpMatchArray = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgbConv && rgbConv.length === 4) ? '#' +
    ('0' + parseInt(rgbConv[1], 10).toString(16)).slice(-2) +
    ('0' + parseInt(rgbConv[2], 10).toString(16)).slice(-2) +
    ('0' + parseInt(rgbConv[3], 10).toString(16)).slice(-2) : rgb;
}

export function fontSizeToNumber(size: string): number {
  return size ? Number(size.replace(/px|pt|%/, '')) : undefined;
}

export function compareByChars(first: string, second: string): boolean {
  if (first && second) {
    return escape(first).replace(/%0A|%20/g, '') === escape(second).replace(/%0A|%20/g, '');
  }
}

function hasWhitespace(text: string): boolean {
  return /\S/.test(text);
}

// TODO copied from 'elements' folder
export function roundTo2(val) {
  // return round(val, 2);
  return Math.round(val * 100) / 100;
}

// TODO copied from 'editor' module
export function parseUrl(url: string): string {
  if (!/^http/.test(url) && !/^mailto:/.test(url)) {
    url = 'http://' + url;
  }
  return url;
}
