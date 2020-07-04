import { BoldTransform } from './bold.transform';

describe('Bold Transform', () => {
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

  const createBoldNode = (): Node => {
    const b = document.createElement('b');
    b.innerHTML = 'This is a sample bold Text';

    return b;
  };

  it('should not change when text is not selected', () => {
    const paragraph = createParagraphNode();
    const body = document.body;
    body.appendChild(paragraph);

    const transform = new BoldTransform();
    transform.toggle();

    expect(transform.value).toBe(false);
    expect(paragraph.firstChild.nodeName).toEqual('#text');

    body.removeChild(paragraph);
  });

  it('should bold the normal text', () => {
    const paragraph = createParagraphNode();
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new BoldTransform();
    transform.toggle();

    expect(transform.value).toBe(true);
    expect(paragraph.firstChild.nodeName).toEqual('B');

    body.removeChild(paragraph);
  });

  it('should bold the normal text with part bold', () => {
    const paragraph = createParagraphNode(createBoldNode());
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new BoldTransform();
    transform.toggle();

    expect(transform.value).toBe(true);
    expect(paragraph.firstChild.nodeName).toEqual('B');

    body.removeChild(paragraph);
  });

  it('should normalize the bold text', () => {
    const paragraph = createParagraphNode(createBoldNode(), true);
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new BoldTransform();
    transform.toggle();

    expect(transform.value).toBe(false);
    expect(paragraph.firstChild.nodeName).toEqual('#text');

    body.removeChild(paragraph);
  });

  it('should normalize the bold text with bold part selected', () => {
    const b = createBoldNode();
    const paragraph = createParagraphNode(b, true);
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(b);

    const transform = new BoldTransform();
    transform.toggle();

    expect(transform.value).toBe(false);
    expect(paragraph.firstChild.nodeName).toEqual('#text');

    body.removeChild(paragraph);
  });
});
