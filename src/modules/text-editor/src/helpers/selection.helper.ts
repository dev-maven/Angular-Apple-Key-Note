import { EditorSelection } from '../text-editor.interface';
import { getRange } from './shadow-dom-selection.helper';

export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
  /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

export class SelectionHelper {
  get(container: Element): EditorSelection {
    if (!container) {
      document.getSelection().removeAllRanges();

      return null;
    }

    const canvas = document.querySelector('pe-editor-canvas');

    const range = getRange(canvas.shadowRoot);

    if (!range) {
      return null;
    }

    const preSelectionRange: Range = range.cloneRange();
    preSelectionRange.selectNodeContents(container);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const start: number = preSelectionRange.toString().length;

    return {
      start,
      end: start + range.toString().length,
      range,
      container,
      parentElement: range.endContainer.parentElement,
    };
  }

  restore(savedSelection: EditorSelection): void {
    if (!savedSelection) {
      return;
    }

    const doc: Document = savedSelection.container.ownerDocument;
    const win: Window = doc.defaultView;
    const range: Range = doc.createRange();
    range.setStart(savedSelection.container, 0);
    range.collapse(true);
    const nodeStack: Element[] = [savedSelection.container];
    let node;
    let foundStart = false;
    let stop = false;
    let charIndex = 0;

    while (!stop && (node = nodeStack.pop())) {
      if (node.nodeType == 3) {
        const nextCharIndex = charIndex + node.length;
        if (
          !foundStart &&
          savedSelection.start >= charIndex &&
          savedSelection.start <= nextCharIndex
        ) {
          range.setStart(node, savedSelection.start - charIndex);
          foundStart = true;
        }
        if (
          foundStart &&
          savedSelection.end >= charIndex &&
          savedSelection.end <= nextCharIndex
        ) {
          range.setEnd(node, savedSelection.end - charIndex);
          stop = true;
        }
        charIndex = nextCharIndex;
      } else {
        let i = node.childNodes.length;
        while (i--) {
          nodeStack.push(node.childNodes[i]);
        }
      }
    }

    const selection = win.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  findParentTag(
    selection: Selection,
    tagName?: string,
    className?: string,
    searchDepth = 10, // tslint:disable-line:typedef
  ): HTMLElement | null {
    let parentTag = null;

    if (!selection || !selection.anchorNode || !selection.focusNode) {
      return null;
    }

    const boundNodes = [
      selection.anchorNode as HTMLElement,
      selection.focusNode as HTMLElement,
    ];

    boundNodes.forEach(parent => {
      let searchDepthIterable = searchDepth;

      while (searchDepthIterable > 0 && parent.parentNode) {
        if (!tagName || parent.tagName === tagName) {
          parentTag = parent;

          if (
            className &&
            parent.classList &&
            !parent.classList.contains(className)
          ) {
            parentTag = null;
          }

          if (parentTag) {
            break;
          }
        }

        parent = parent.parentNode as HTMLElement;
        searchDepthIterable--;
      }
    });

    return parentTag;
  }
}
