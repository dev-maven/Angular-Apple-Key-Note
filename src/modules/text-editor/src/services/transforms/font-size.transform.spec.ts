import { TestBed } from '@angular/core/testing';

import { SelectionHelper } from '../../helpers/selection.helper';
import { TextEditorSelection } from '../selection.service';
import { FontSizeTransform } from './font-size.transform';

describe('Font Size Transform', () => {
  const primaryFont = 25;

  const selectElementContents = (
    el: Node,
    shadow: HTMLElement,
    start?: number,
    end?: number,
  ): Selection => {
    const range = document.createRange();
    range.selectNodeContents(el);
    if (start !== undefined) {
      range.setStart(el, start);
    }
    if (end !== undefined) {
      range.setEnd(el, end);
    }
    const sel = shadow ? shadow.shadowRoot.getSelection() : window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    return sel;
  };

  const createDivNode = (content?: string): HTMLParagraphElement => {
    const div = document.createElement('div');
    div.setAttribute('contenteditable', 'true');

    div.innerHTML = content ? content : 'This is a sample Text';

    return div;
  };

  const updateSelection = (
      textEditorSelection: TextEditorSelection,
      textComponent: HTMLElement,
  ): void => {
    const selectionHelper = TestBed.get(SelectionHelper);
    textEditorSelection.savedValue = selectionHelper.get(textComponent);
  };

  class CanvasComponentMock extends HTMLElement {}

  beforeAll(() => {
    if (!customElements.get('pe-editor-canvas')) {
      customElements.define('pe-editor-canvas', CanvasComponentMock);
    }
  });

  let shadow: ShadowRoot;
  let canvasComponent: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TextEditorSelection,
        SelectionHelper,
        FontSizeTransform,
      ],
    });

    canvasComponent = document.createElement('pe-editor-canvas');
    shadow = canvasComponent.attachShadow({ mode: 'open' });
    document.body.appendChild(canvasComponent);
  });

  afterEach(() => {
    document.body.removeChild(canvasComponent);
  });

  it('should change size for whole text', () => {
    const textComponent = createDivNode();
    shadow.appendChild(textComponent);

    const selection = selectElementContents(textComponent, canvasComponent);

    const selectionValue = {
        start: 0,
        end: 21,
        container: textComponent,
        range: selection.getRangeAt(0),
        parentElement: textComponent,
    };

    const textEditorSelection = TestBed.get(TextEditorSelection);

    textEditorSelection.savedValue = selectionValue;

    const transform = TestBed.get(FontSizeTransform);

    transform.value = primaryFont;

    updateSelection(textEditorSelection, textComponent);

    expect(transform.value).toEqual(primaryFont);
    expect(textComponent.firstChild.nodeName).toEqual('FONT');

  });

  it('should change size of part the text', () => {
    const content = 'This is a sample Text';
    const start = 5;
    const length = 10;
    const textComponent = createDivNode(content);
    shadow.appendChild(textComponent);

    const selection = selectElementContents(
        textComponent.firstChild,
        canvasComponent,
        start,
        start + length,
      );

    const selectionValue = {
      start: 5,
      end: 15,
      container: textComponent,
      range: selection.getRangeAt(0),
      parentElement: textComponent,
    };

    const textEditorSelection = TestBed.get(TextEditorSelection);

    textEditorSelection.savedValue = selectionValue;

    const transform = TestBed.get(FontSizeTransform);

    transform.value = primaryFont;

    updateSelection(textEditorSelection, textComponent);

    expect(transform.value).toEqual(primaryFont);
    expect(textComponent.firstChild.nodeName).toEqual('#text');
    expect(textComponent.childNodes[1].nodeName).toEqual('FONT');
    expect((textComponent.childNodes[1] as HTMLFontElement).innerText).toEqual(
      content.substr(start, length),
    );
  });
});
