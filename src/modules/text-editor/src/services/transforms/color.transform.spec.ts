import { ColorTransform } from './color.transform';

describe('Font Color Transform', () => {
  const primaryColor = 'rgb(255, 0, 0)';
  const secondaryColor = 'rgb(0, 0, 255)';

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

  const createColorNode = (): HTMLFontElement => {
    const font = document.createElement('font');
    font.innerHTML = 'This is a sample colored Text';
    font.setAttribute('color', secondaryColor);

    return font;
  };

  it('should not change when text is not selected', () => {
    const font = createColorNode();
    const body = document.body;
    body.appendChild(font);

    const transform = new ColorTransform();
    transform.value = primaryColor;

    expect(transform.value).not.toEqual(primaryColor);
    expect(font.firstChild.nodeName).toEqual('#text');

    body.removeChild(font);
  });

  it('should color the normal text', () => {
    const paragraph = createParagraphNode();
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new ColorTransform();
    transform.value = primaryColor;

    expect(transform.value).toEqual(primaryColor);
    expect(paragraph.firstChild.nodeName).toEqual('FONT');

    body.removeChild(paragraph);
  });

  it('should color the all text with part colored', () => {
    const paragraph = createParagraphNode(createColorNode());
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new ColorTransform();
    transform.value = primaryColor;

    expect(transform.value).toEqual(primaryColor);
    expect(paragraph.firstChild.nodeName).toEqual('FONT');

    body.removeChild(paragraph);
  });

  it('should change color for a colored element', () => {
    const paragraph = createParagraphNode(createColorNode(), true);
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new ColorTransform();
    transform.value = primaryColor;

    expect(transform.value).toEqual(primaryColor);
    expect(paragraph.firstChild.nodeName).toEqual('FONT');

    body.removeChild(paragraph);
  });

  it('should change color only for part selected', () => {
    const font = createColorNode();
    const paragraph = createParagraphNode(font);
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(font);

    const transform = new ColorTransform();
    transform.value = primaryColor;

    expect(transform.value).toEqual(primaryColor);
    expect(paragraph.firstChild.nodeName).toEqual('#text');

    body.removeChild(paragraph);
  });
});
