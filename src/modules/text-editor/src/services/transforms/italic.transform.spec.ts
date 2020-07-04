import { ItalicTransform } from './italic.transform';

describe('Italic Transform', () => {
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

  const createItalicNode = (): Node => {
    const italic = document.createElement('i');
    italic.innerHTML = 'This is a sample italic Text';

    return italic;
  };

  it('should not change when text is not selected', () => {
    const paragraph = createParagraphNode();
    const body = document.body;
    body.appendChild(paragraph);

    const transform = new ItalicTransform();
    transform.toggle();

    expect(transform.value).toBe(false);
    expect(paragraph.firstChild.nodeName).toEqual('#text');

    body.removeChild(paragraph);
  });

  it('should italic the normal text', () => {
    const paragraph = createParagraphNode();
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new ItalicTransform();
    transform.toggle();

    expect(transform.value).toBe(true);
    expect(paragraph.firstChild.nodeName).toEqual('I');

    body.removeChild(paragraph);
  });

  it('should Italic the normal text with part italic', () => {
    const paragraph = createParagraphNode(createItalicNode());
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new ItalicTransform();
    transform.toggle();

    expect(transform.value).toBe(true);
    expect(paragraph.firstChild.nodeName).toEqual('I');

    body.removeChild(paragraph);
  });

  it('should normalize the italic text', () => {
    const paragraph = createParagraphNode(createItalicNode(), true);
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new ItalicTransform();
    transform.toggle();

    expect(transform.value).toBe(false);
    expect(paragraph.firstChild.nodeName).toEqual('#text');

    body.removeChild(paragraph);
  });

  it('should normalize the italic text with italic part selected', () => {
    const italic = createItalicNode();
    const paragraph = createParagraphNode(italic, true);
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(italic);

    const transform = new ItalicTransform();
    transform.toggle();

    expect(transform.value).toBe(false);
    expect(paragraph.firstChild.nodeName).toEqual('#text');

    body.removeChild(paragraph);
  });
});
