import { TestBed } from '@angular/core/testing';

import { SelectionHelper } from './selection.helper';

describe('Selection Helper', () => {
  const crateTextComponent = (content?: string): HTMLParagraphElement => {
    const div = document.createElement('div');
    div.setAttribute('contenteditable', 'true');

    div.innerHTML = content ? content : 'This is a sample Text';

    return div;
  };

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
      providers: [SelectionHelper],
    });

    canvasComponent = document.createElement('pe-editor-canvas');
    shadow = canvasComponent.attachShadow({ mode: 'open' });
    document.body.appendChild(canvasComponent);
  });

  afterEach(() => {
    document.body.removeChild(canvasComponent);
  });

  it('Should return the selection as EditorSelection', () => {
    const textComponent = crateTextComponent();
    shadow.appendChild(textComponent);

    const start = 2;
    const end = 12;

    const selection = selectElementContents(textComponent.firstChild, canvasComponent, start, end);

    const selectionHelper = TestBed.get(SelectionHelper);
    const result = selectionHelper.get(textComponent);
    const range = selection.getRangeAt(0);

    expect(result).not.toBeNull();
    expect(result).toEqual({
      parentElement: range.endContainer.parentElement,
      range,
      container: textComponent,
      start,
      end,
    });
  });

  it('Should restore selection', () => {
    const textComponent = crateTextComponent();
    shadow.appendChild(textComponent);
    const start = 2;
    const end = 12;

    const selection = selectElementContents(textComponent.firstChild, canvasComponent, start, end);

    const savedSelection = {
      parentElement: textComponent,
      range: selection.getRangeAt(0),
      container: textComponent,
      start,
      end,
    };

    shadow.getSelection().removeAllRanges();

    const selectionHelper = TestBed.get(SelectionHelper);
    selectionHelper.restore(savedSelection);

    expect(shadow.getSelection().rangeCount).toEqual(1);
  });

  it('Should retun undefined with empty selection for restore', () => {
    const selectionHelper = TestBed.get(SelectionHelper);
    const result = selectionHelper.restore(null);

    expect(result).toBeUndefined();
    expect(shadow.getSelection().rangeCount).toEqual(0);
  });

  it('Should find parent tag', () => {
    const textComponent = crateTextComponent();
    shadow.appendChild(textComponent);
    const start = 2;
    const end = 12;

    const selection = selectElementContents(textComponent.firstChild, canvasComponent, start, end);

    const selectionHelper = TestBed.get(SelectionHelper);
    const result = selectionHelper.findParentTag(selection);

    expect(result.nodeName).toEqual('#text');

  });

  it('Should find parent tag with tagName', () => {
    const textComponent = crateTextComponent();
    shadow.appendChild(textComponent);
    const start = 2;
    const end = 12;
    const tagName = 'DIV';

    const selection = selectElementContents(textComponent.firstChild, canvasComponent, start, end);

    const selectionHelper = TestBed.get(SelectionHelper);
    const result = selectionHelper.findParentTag(selection, tagName);

    expect(result.nodeName).toEqual(tagName);
  });

  it('Should find parent tag with tagName and className', () => {
    const tagName = 'DIV';
    const textComponent = crateTextComponent();
    const className = 'className';
    textComponent.className = className;
    shadow.appendChild(textComponent);

    const start = 2;
    const end = 12;

    const selection = selectElementContents(textComponent.firstChild, canvasComponent, start, end);

    const selectionHelper = TestBed.get(SelectionHelper);
    const result = selectionHelper.findParentTag(selection, tagName, className);

    expect(result.nodeName).toEqual(tagName);
    expect(result.className).toEqual(className);
  });

  it('Should return null with empty selection for find parent tag', () => {
    const selectionHelper = TestBed.get(SelectionHelper);
    expect(selectionHelper.findParentTag(null)).toBeNull();

    expect(shadow.getSelection().rangeCount).toEqual(0);
  });
});
