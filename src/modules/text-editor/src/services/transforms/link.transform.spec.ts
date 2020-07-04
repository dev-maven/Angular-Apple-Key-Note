import { TestBed } from '@angular/core/testing';

import { SelectionHelper } from '../../helpers/selection.helper';
import { TextEditorSelection } from '../selection.service';
import { LinkTransform } from './link.transform';

describe('Link Transform', () => {
  const link = 'https://google.com';

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

  const createDivNode = (content?: string): HTMLDivElement => {
    const div = document.createElement('div');
    div.setAttribute('contenteditable', 'true');

    div.innerHTML = content ? content : 'This is a sample Text';

    return div;
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
        LinkTransform,
      ],
    });

    canvasComponent = document.createElement('pe-editor-canvas');
    shadow = canvasComponent.attachShadow({ mode: 'open' });
    document.body.appendChild(canvasComponent);
  });

  afterEach(() => {
    document.body.removeChild(canvasComponent);
  });

  it('should add link', () => {
    const content = 'This is a sample Text';
    const start = 0;
    const length = content.length;
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

    const transform = TestBed.get(LinkTransform);
    transform.value = link;

    expect(transform.value).toEqual(link);
    expect(textComponent.firstChild.nodeName).toEqual('A');
    expect((textComponent.firstChild as HTMLAnchorElement).innerText).toEqual(
      content.substr(start, length),
    );
    expect(
      (textComponent.firstChild as HTMLAnchorElement).getAttribute('data-id'),
    ).toEqual(link);

  });

  it('should remove link', () => {
    const content = 'This is a sample Text';
    const start = 0;
    const length = content.length;
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

    const transform = TestBed.get(LinkTransform);

    transform.value = link;

    expect(transform.value).toEqual(link);
    expect(textComponent.childElementCount).toEqual(1);

    transform.value = null;

    const selectionHelper = TestBed.get(SelectionHelper);
    textEditorSelection.savedValue = selectionHelper.get(textComponent);

    expect(transform.value).toBeNull();
    expect(textComponent.innerText).toEqual(content);
    expect(textComponent.childElementCount).toEqual(0);
  });

  it('should add link to part the text', () => {
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

    const transform = TestBed.get(LinkTransform);

    transform.value = link;

    expect(transform.value).toEqual(link);
    expect(textComponent.firstChild.nodeName).toEqual('#text');
    expect(textComponent.childNodes[1].nodeName).toEqual('A');
    expect((textComponent.childNodes[1] as HTMLAnchorElement).innerText).toEqual(
      content.substr(start, length),
    );
    expect(
      (textComponent.childNodes[1] as HTMLAnchorElement).getAttribute('data-id'),
    ).toEqual(link);

  });

  it('should remove link from part the text', () => {
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

    const transform = TestBed.get(LinkTransform);

    transform.value = link;
    transform.value = null;

    const selectionHelper = TestBed.get(SelectionHelper);
    textEditorSelection.savedValue = selectionHelper.get(textComponent);

    expect(transform.value).toBeNull();
    expect(textComponent.innerText).toEqual(content);
    expect(textComponent.childElementCount).toEqual(0);
  });
});
