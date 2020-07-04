import { TestBed } from '@angular/core/testing';
import { tap } from 'rxjs/operators';

import { SelectionHelper } from '../helpers/selection.helper';
import { TextEditorSelection } from './selection.service';
import { StateService } from './text-editor-state.service';
import { BoldTransform } from './transforms/bold.transform';
import { ColorTransform } from './transforms/color.transform';
import { ExternalLinkTransform } from './transforms/external-link.transform';
import { FontFamilyTransform } from './transforms/font-family.transform';
import { FontSizeTransform } from './transforms/font-size.transform';
import { ItalicTransform } from './transforms/italic.transform';
import { JustifyCenterTransform } from './transforms/justify-center.transform';
import { JustifyFullTransform } from './transforms/justify-full.transform';
import { JustifyLeftTransform } from './transforms/justify-left.transform';
import { JustifyRightTransform } from './transforms/justify-right.transform';
import { LinkTransform } from './transforms/link.transform';
import { OrderedTransform } from './transforms/ordered.transform';
import { UnderlineTransform } from './transforms/underline.transform';
import { UnorderedTransform } from './transforms/unordered.transform';

describe('Text Editor State Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StateService,
        TextEditorSelection,
        SelectionHelper,
        TextEditorSelection,
        BoldTransform,
        ColorTransform,
        FontFamilyTransform,
        FontSizeTransform,
        ItalicTransform,
        LinkTransform,
        ExternalLinkTransform,
        UnderlineTransform,
        JustifyLeftTransform,
        JustifyRightTransform,
        JustifyCenterTransform,
        JustifyFullTransform,
        UnorderedTransform,
        OrderedTransform,
      ],
    });
  });

  it('Should call saveSelection on SelectionHelper', () => {
    const textEditorSelection = TestBed.get(TextEditorSelection);
    const saveSelectionSpy = spyOn(textEditorSelection, 'saveSelection').and.callFake(() => null);
    const stateService = TestBed.get(StateService);
    const editorSelection = {
      start: 0,
      end: 0,
      range: new Range(),
      container: {},
      parentElement: {},
    };

    stateService.saveSelection(editorSelection);

    expect(saveSelectionSpy).toHaveBeenCalledTimes(1);
    expect(saveSelectionSpy).toHaveBeenCalledWith(editorSelection);
  });

  it('Should call findParentTag on TextEditorSelection', () => {
    const textEditorSelection = TestBed.get(TextEditorSelection);
    const findParentTagSpy = spyOn(textEditorSelection, 'findParentTag').and.callFake(() => null);

    const stateService = TestBed.get(StateService);
    const tag = 'A';

    stateService.findParentTag(tag);

    expect(findParentTagSpy).toHaveBeenCalledWith(tag);
    expect(findParentTagSpy).toHaveBeenCalledTimes(1);
  });

  it('Bold Transform', () => {
    const selectionHelper = TestBed.get(SelectionHelper);
    const restoreSpy = spyOn(selectionHelper, 'restore').and.callFake(() => null);

    const boldTransform = TestBed.get(BoldTransform);
    const toggleBoldSpy = spyOn(boldTransform, 'toggle').and.callFake(() => null);

    const stateService = TestBed.get(StateService);

    stateService.toggleBold();

    expect(restoreSpy).toHaveBeenCalledTimes(1);
    expect(toggleBoldSpy).toHaveBeenCalledTimes(1);
  });

  it('Underline Transform', () => {
    const selectionHelper = TestBed.get(SelectionHelper);
    const restoreSpy = spyOn(selectionHelper, 'restore').and.callFake(() => null);

    const underlineTransform = TestBed.get(UnderlineTransform);
    const toggleUnderlineSpy = spyOn(underlineTransform, 'toggle').and.callFake(() => null);

    const stateService = TestBed.get(StateService);

    stateService.toggleUnderline();

    expect(restoreSpy).toHaveBeenCalledTimes(1);
    expect(toggleUnderlineSpy).toHaveBeenCalledTimes(1);
  });

  it('Italic Transform', () => {
    const selectionHelper = TestBed.get(SelectionHelper);
    const restoreSpy = spyOn(selectionHelper, 'restore').and.callFake(() => null);

    const italicTransform = TestBed.get(ItalicTransform);
    const toggleItalicSpy = spyOn(italicTransform, 'toggle').and.callFake(() => null);

    const stateService = TestBed.get(StateService);

    stateService.toggleItalic();

    expect(restoreSpy).toHaveBeenCalledTimes(1);
    expect(toggleItalicSpy).toHaveBeenCalledTimes(1);
  });

  it('Justify Left Transform', () => {
    const justifyLeftTransform = TestBed.get(JustifyLeftTransform);
    const toggleJustifyLeftSpy = spyOn(justifyLeftTransform, 'justify').and.callFake(() => null);

    const stateService = TestBed.get(StateService);

    stateService.toggleJustifyLeft();

    expect(toggleJustifyLeftSpy).toHaveBeenCalledTimes(1);
  });

  it('Justify Right Transform', () => {
    const justifyRightTransform = TestBed.get(JustifyRightTransform);
    const toggleJustifyRightSpy = spyOn(justifyRightTransform, 'justify').and.callFake(() => null);

    const stateService = TestBed.get(StateService);

    stateService.toggleJustifyRight();

    expect(toggleJustifyRightSpy).toHaveBeenCalledTimes(1);
  });

  it('Justify Center Transform', () => {
    const justifyCenterTransform = TestBed.get(JustifyCenterTransform);
    const toggleJustifyCenterSpy = spyOn(justifyCenterTransform, 'justify').and.callFake(() => null);

    const stateService = TestBed.get(StateService);

    stateService.toggleJustifyCenter();

    expect(toggleJustifyCenterSpy).toHaveBeenCalledTimes(1);
  });

  it('Justify Full Transform', () => {
    const justifyFullTransform = TestBed.get(JustifyFullTransform);
    const toggleJustifyFullSpy = spyOn(justifyFullTransform, 'justify').and.callFake(() => null);

    const stateService = TestBed.get(StateService);

    stateService.toggleJustifyFull();

    expect(toggleJustifyFullSpy).toHaveBeenCalledTimes(1);
  });

  it('Font family Transform', () => {
    const FONT_FAMILY = 'Comic Sans';
    const selectionHelper = TestBed.get(SelectionHelper);
    const fontFamilyTransform = TestBed.get(FontFamilyTransform);
    const restoreSpy = spyOn(selectionHelper, 'restore').and.callFake(() => null);
    spyOnProperty(fontFamilyTransform, 'value', 'get').and.callFake(() => FONT_FAMILY);
    const fontFamilyTransformValueSetterSpy = spyOnProperty(fontFamilyTransform, 'value', 'set').and.callFake(() => null);

    const stateService = TestBed.get(StateService);

    stateService.fontFamily = FONT_FAMILY;

    expect(restoreSpy).toHaveBeenCalledTimes(1);
    expect(fontFamilyTransformValueSetterSpy).toHaveBeenCalledTimes(1);
    expect(fontFamilyTransformValueSetterSpy).toHaveBeenCalledWith(FONT_FAMILY);
    expect(stateService.fontFamily).toEqual(FONT_FAMILY);
  });

  it('Color Transform', () => {
    const COLOR = '#FFF';
    const selectionHelper = TestBed.get(SelectionHelper);
    const colorTransform = TestBed.get(ColorTransform);
    const restoreSpy = spyOn(selectionHelper, 'restore').and.callFake(() => null);
    spyOnProperty(colorTransform, 'value', 'get').and.callFake(() => COLOR);
    const colorTransformValueSetterSpy = spyOnProperty(colorTransform, 'value', 'set').and.callFake(() => null);

    const stateService = TestBed.get(StateService);

    stateService.color = COLOR;

    expect(restoreSpy).toHaveBeenCalledTimes(1);
    expect(colorTransformValueSetterSpy).toHaveBeenCalledTimes(1);
    expect(colorTransformValueSetterSpy).toHaveBeenCalledWith(COLOR);
    expect(stateService.color).toEqual(COLOR);
  });

  it('Font size Transform', () => {
    const FONT_SIZE = 16;
    const selectionHelper = TestBed.get(SelectionHelper);
    const fontSizeTransform = TestBed.get(FontSizeTransform);
    const restoreSpy = spyOn(selectionHelper, 'restore').and.callFake(() => null);
    spyOnProperty(fontSizeTransform, 'value', 'get').and.callFake(() => FONT_SIZE);
    const fontSizeValueSetterSpy = spyOnProperty(fontSizeTransform, 'value', 'set').and.callFake(() => null);

    const stateService = TestBed.get(StateService);

    stateService.fontSize = FONT_SIZE;

    expect(restoreSpy).toHaveBeenCalledTimes(1);
    expect(fontSizeValueSetterSpy).toHaveBeenCalledTimes(1);
    expect(fontSizeValueSetterSpy).toHaveBeenCalledWith(FONT_SIZE);
    expect(stateService.fontSize).toEqual(FONT_SIZE);
  });

  describe('Link Transform', () => {
    it('should set LinkTransform value and unset ExternalLink value', () => {
      const LINK = '/replica-page-uuid';
      const EXTERNAL_LINK = 'https://instagram.com';
      const selectionHelper = TestBed.get(SelectionHelper);
      const linkTransform = TestBed.get(LinkTransform);
      const externalLinkTransform = TestBed.get(ExternalLinkTransform);

      const restoreSpy = spyOn(selectionHelper, 'restore').and.callFake(() => null);

      spyOnProperty(externalLinkTransform, 'value', 'get').and.callFake(() => EXTERNAL_LINK);
      const externalLinkValueSetterSpy = spyOnProperty(externalLinkTransform, 'value', 'set').and.callFake(() => null);

      spyOnProperty(linkTransform, 'value', 'get').and.callFake(() => LINK);
      const linkValueSetterSpy = spyOnProperty(linkTransform, 'value', 'set').and.callFake(() => null);

      const stateService = TestBed.get(StateService);

      stateService.link = LINK;

      expect(restoreSpy).toHaveBeenCalledTimes(1);

      expect(externalLinkValueSetterSpy).toHaveBeenCalledTimes(1);
      expect(externalLinkValueSetterSpy).toHaveBeenCalledWith(null);

      expect(linkValueSetterSpy).toHaveBeenCalledTimes(1);
      expect(linkValueSetterSpy).toHaveBeenCalledWith(LINK);
      expect(stateService.link).toEqual(LINK);
    });

    it('should set LinkTransform value', () => {
      const LINK = '/replica-page-uuid';
      const selectionHelper = TestBed.get(SelectionHelper);
      const linkTransform = TestBed.get(LinkTransform);
      const externalLinkTransform = TestBed.get(ExternalLinkTransform);

      const restoreSpy = spyOn(selectionHelper, 'restore').and.callFake(() => null);

      spyOnProperty(externalLinkTransform, 'value', 'get').and.callFake(() => null);
      const externalLinkValueSetterSpy = spyOnProperty(externalLinkTransform, 'value', 'set').and.callFake(() => null);

      spyOnProperty(linkTransform, 'value', 'get').and.callFake(() => LINK);
      const linkValueSetterSpy = spyOnProperty(linkTransform, 'value', 'set').and.callFake(() => null);

      const stateService = TestBed.get(StateService);

      stateService.link = LINK;

      expect(restoreSpy).toHaveBeenCalledTimes(1);

      expect(externalLinkValueSetterSpy).not.toHaveBeenCalled();

      expect(linkValueSetterSpy).toHaveBeenCalledTimes(1);
      expect(linkValueSetterSpy).toHaveBeenCalledWith(LINK);
      expect(stateService.link).toEqual(LINK);
    });
  });

  describe('External link Transform', () => {
    it('should set ExternalLinkTransform value and unset LinkTransform value', () => {
      const LINK = '/replica-page-uuid';
      const EXTERNAL_LINK = 'https://instagram.com';
      const selectionHelper = TestBed.get(SelectionHelper);
      const linkTransform = TestBed.get(LinkTransform);
      const externalLinkTransform = TestBed.get(ExternalLinkTransform);

      const restoreSpy = spyOn(selectionHelper, 'restore').and.callFake(() => null);

      spyOnProperty(externalLinkTransform, 'value', 'get').and.callFake(() => EXTERNAL_LINK);
      const externalLinkValueSetterSpy = spyOnProperty(externalLinkTransform, 'value', 'set').and.callFake(() => null);

      spyOnProperty(linkTransform, 'value', 'get').and.callFake(() => LINK);
      const linkValueSetterSpy = spyOnProperty(linkTransform, 'value', 'set').and.callFake(() => null);

      const stateService = TestBed.get(StateService);

      stateService.externalLink = EXTERNAL_LINK;

      expect(restoreSpy).toHaveBeenCalledTimes(1);

      expect(externalLinkValueSetterSpy).toHaveBeenCalledTimes(1);
      expect(externalLinkValueSetterSpy).toHaveBeenCalledWith(EXTERNAL_LINK);

      expect(linkValueSetterSpy).toHaveBeenCalledTimes(1);
      expect(linkValueSetterSpy).toHaveBeenCalledWith(null);
      expect(stateService.externalLink).toEqual(EXTERNAL_LINK);
    });

    it('should set ExternalLinkTransform value', () => {
      const EXTERNAL_LINK = 'https://instagram.com';
      const selectionHelper = TestBed.get(SelectionHelper);
      const linkTransform = TestBed.get(LinkTransform);
      const externalLinkTransform = TestBed.get(ExternalLinkTransform);

      const restoreSpy = spyOn(selectionHelper, 'restore').and.callFake(() => null);

      spyOnProperty(externalLinkTransform, 'value', 'get').and.callFake(() => EXTERNAL_LINK);
      const externalLinkValueSetterSpy = spyOnProperty(externalLinkTransform, 'value', 'set').and.callFake(() => null);

      spyOnProperty(linkTransform, 'value', 'get').and.callFake(() => null);
      const linkValueSetterSpy = spyOnProperty(linkTransform, 'value', 'set').and.callFake(() => null);

      const stateService = TestBed.get(StateService);

      stateService.externalLink = EXTERNAL_LINK;

      expect(restoreSpy).toHaveBeenCalledTimes(1);

      expect(linkValueSetterSpy).not.toHaveBeenCalled();

      expect(externalLinkValueSetterSpy).toHaveBeenCalledTimes(1);
      expect(externalLinkValueSetterSpy).toHaveBeenCalledWith(EXTERNAL_LINK);
      expect(stateService.externalLink).toEqual(EXTERNAL_LINK);
    });
  });

  describe('Unordered List', () => {
    it('newContent is truthy', () => {
      const unorderedTransformService = TestBed.get(UnorderedTransform);
      const applySpy = spyOn(unorderedTransformService, 'apply').and.callFake(() => 'unordered');
      let removeListAlignCurrentValue;
      const stateService = TestBed.get(StateService);

      stateService.removeListAlignSubject$.pipe(tap(value => removeListAlignCurrentValue = value)).subscribe();

      expect(stateService.value).toBeNull();
      expect(removeListAlignCurrentValue).toBeUndefined();
      stateService.toggleUnorderedList();
      expect(stateService.value).toBe('unordered');
      expect(removeListAlignCurrentValue).toBe('unordered');

      expect(applySpy).toHaveBeenCalledTimes(1);
    });

    it('newContent is falsy', () => {
      const unorderedTransformService = TestBed.get(UnorderedTransform);
      const applySpy = spyOn(unorderedTransformService, 'apply').and.callFake(() => null);
      let removeListAlignCurrentValue;
      const stateService = TestBed.get(StateService);

      stateService.removeListAlignSubject$.pipe(tap(value => removeListAlignCurrentValue = value)).subscribe();

      expect(removeListAlignCurrentValue).toBeUndefined();
      stateService.toggleUnorderedList();
      expect(removeListAlignCurrentValue).toBeNull();

      expect(applySpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Ordered List', () => {
    it('newContent is truthy', () => {
      const orderedTransformService = TestBed.get(OrderedTransform);
      const applySpy = spyOn(orderedTransformService, 'apply').and.callFake(() => 'ordered');
      let removeListAlignCurrentValue;
      const stateService = TestBed.get(StateService);

      stateService.removeListAlignSubject$.pipe(tap(value => removeListAlignCurrentValue = value)).subscribe();

      expect(stateService.value).toBeNull();
      expect(removeListAlignCurrentValue).toBeUndefined();
      stateService.toggleOrderedList();
      expect(stateService.value).toBe('ordered');
      expect(removeListAlignCurrentValue).toBe('ordered');

      expect(applySpy).toHaveBeenCalledTimes(1);
    });

    it('newContent is falsy', () => {
      const orderedTransformService = TestBed.get(OrderedTransform);
      const applySpy = spyOn(orderedTransformService, 'apply').and.callFake(() => null);
      let removeListAlignCurrentValue;
      const stateService = TestBed.get(StateService);

      stateService.removeListAlignSubject$.pipe(tap(value => removeListAlignCurrentValue = value)).subscribe();

      expect(removeListAlignCurrentValue).toBeUndefined();
      stateService.toggleOrderedList();
      expect(removeListAlignCurrentValue).toBeNull();

      expect(applySpy).toHaveBeenCalledTimes(1);
    });
  });
});
