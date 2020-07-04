import { TestBed } from '@angular/core/testing';

import { SelectionHelper } from '../helpers/selection.helper';
import { TextEditorSelection } from './selection.service';

describe('Selection Service', () => {
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

  const createMockHelper = () => {
    const get = (element: HTMLElement) => {
      const range = selectElementContents(element, canvasComponent).getRangeAt(0);

      return {
        start: 0,
        end: 0,
        container: element,
        range,
        parentElement: element,
      };
    };

    const restore = () => {};
    const findParentTag = () => null;

    const mock = jasmine.createSpyObj('SelectionHelper', [
      'get',
      'restore',
      'findParentTag',
    ]);

    mock.get.and.callFake(get);
    mock.restore.and.callFake(restore);
    mock.findParentTag.and.callFake(findParentTag);

    return mock;
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
      ],
    });

    canvasComponent = document.createElement('pe-editor-canvas');
    shadow = canvasComponent.attachShadow({ mode: 'open' });
    document.body.appendChild(canvasComponent);
  });

  afterEach(() => {
    document.body.removeChild(canvasComponent);
  });

  it('Should save the selection', () => {
    const textComponent = crateTextComponent();
    shadow.appendChild(textComponent);
    const selection = selectElementContents(textComponent, canvasComponent);

    const textEditorSelection: TextEditorSelection = TestBed.get(TextEditorSelection);

    const editorSelection = {
      start: 0,
      end: 1,
      container: textComponent,
      range: selection.getRangeAt(0),
      parentElement: textComponent,
    };

    textEditorSelection.saveSelection(editorSelection);

    const result = textEditorSelection.savedValue;

    expect(result).toEqual(editorSelection);
  });

  it('Should call restore from SelectionHelper', () => {
    const textComponent = crateTextComponent();
    shadow.appendChild(textComponent);

    const selectionHelperMock = createMockHelper();

    TestBed.overrideProvider(SelectionHelper, { useValue: selectionHelperMock });

    const textEditorSelection: TextEditorSelection = TestBed.get(TextEditorSelection);

    textEditorSelection.restore();

    expect(selectionHelperMock.restore).toHaveBeenCalledWith(textEditorSelection.savedValue);
  });

  it('Should return null when there-s no saved selection', () => {
    const textComponent = crateTextComponent();
    shadow.appendChild(textComponent);

    const textEditorSelection: TextEditorSelection = TestBed.get(TextEditorSelection);

    const result = textEditorSelection.findParentTag('DIV');

    expect(result).toBeNull();
  });

  it('Should find parent tag', () => {
    const textComponent = crateTextComponent();
    shadow.appendChild(textComponent);

    const selection = selectElementContents(textComponent, canvasComponent);

    const textEditorSelection: TextEditorSelection = TestBed.get(TextEditorSelection);

    const editorSelection = {
      start: 0,
      end: 1,
      container: textComponent,
      range: selection.getRangeAt(0),
      parentElement: textComponent,
    };

    textEditorSelection.saveSelection(editorSelection);

    const result = textEditorSelection.findParentTag('DIV');

    expect(result).toEqual(textComponent);
  });
});
