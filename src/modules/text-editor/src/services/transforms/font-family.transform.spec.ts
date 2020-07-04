import { FontFamilyTransform } from './font-family.transform';

describe('Font Family Transform', () => {
  const primaryFont = 'Tahoma';
  const secondaryFont = 'Arial';

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

  const createStyledNode = (): HTMLFontElement => {
    const font = document.createElement('font');
    font.innerHTML = 'This is a sample colored Text';
    font.setAttribute('face', secondaryFont);

    return font;
  };

  it('should not change when text is not selected', () => {
    const font = createStyledNode();
    const body = document.body;
    body.appendChild(font);

    const transform = new FontFamilyTransform();
    transform.value = primaryFont;

    expect(transform.value).not.toEqual(primaryFont);
    expect(font.firstChild.nodeName).toEqual('#text');

    body.removeChild(font);
  });

  it('Should change font family', () => {
    const paragraph = createParagraphNode();
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new FontFamilyTransform();
    transform.value = primaryFont;

    expect(transform.value).toEqual(primaryFont);
    expect(paragraph.firstChild.nodeName).toEqual('FONT');

    body.removeChild(paragraph);
  });

  it('Should change font family with parts using other font', () => {
    const paragraph = createParagraphNode(createStyledNode());
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new FontFamilyTransform();
    transform.value = primaryFont;

    expect(transform.value).toEqual(primaryFont);
    expect(paragraph.firstChild.nodeName).toEqual('FONT');

    body.removeChild(paragraph);
  });

  it('Should change font family from another font', () => {
    const paragraph = createParagraphNode(createStyledNode(), true);
    const body = document.body;
    body.appendChild(paragraph);
    selectElementContents(paragraph);

    const transform = new FontFamilyTransform();
    transform.value = primaryFont;

    expect(transform.value).toEqual(primaryFont);
    expect(paragraph.firstChild.nodeName).toEqual('FONT');

    body.removeChild(paragraph);
  });
});
