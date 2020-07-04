import { UnderlineTransform } from './underline.transform';

describe('UnderLine Transform', () => {
  const selectElementContents = (el: Node) => {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const createParagraphNode = (content?: Node, withoutText?: boolean): Node => {
    const paragraph = document.createElement('p');
    paragraph.setAttribute('contenteditable', 'true');

    if (!withoutText) {
      paragraph.innerHTML = 'This is a sample Text';
    }
    if (content) {
      paragraph.appendChild(content);
    }

    return paragraph;
  };

  const createUnderlineNode = (): Node => {
    const underline = document.createElement('u');
    underline.innerHTML = 'This is a sample underline Text';

    return underline;
  };

  it('should not change when text is not selected', () => {
    const paragraph = createParagraphNode();
    const body = document.body;
    body.appendChild(paragraph);

    const transform = new UnderlineTransform();
    transform.toggle();

    expect(transform.value).toBe(false);
    expect(paragraph.firstChild.nodeName).toEqual('#text');

    body.removeChild(paragraph);
  });

  it('should underline the normal text', () => {
    const paragraph = createParagraphNode();
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new UnderlineTransform();
    transform.toggle();

    expect(transform.value).toBe(true);
    expect(paragraph.firstChild.nodeName).toEqual('U');

    body.removeChild(paragraph);
  });

  it('should underline the normal text with part underline', () => {
    const paragraph = createParagraphNode(createUnderlineNode());
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new UnderlineTransform();
    transform.toggle();

    expect(transform.value).toBe(true);
    expect(paragraph.firstChild.nodeName).toEqual('U');

    body.removeChild(paragraph);
  });

  it('should normalize the underline text', () => {
    const paragraph = createParagraphNode(createUnderlineNode(), true);
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new UnderlineTransform();
    transform.toggle();

    expect(transform.value).toBe(false);
    expect(paragraph.firstChild.nodeName).toEqual('#text');

    body.removeChild(paragraph);
  });

  it('should normalize the underline text with underline part selected', () => {
    const undeline = createUnderlineNode();
    const paragraph = createParagraphNode(undeline, true);
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(undeline);

    const transform = new UnderlineTransform();
    transform.toggle();

    expect(transform.value).toBe(false);
    expect(paragraph.firstChild.nodeName).toEqual('#text');

    body.removeChild(paragraph);
  });
});
