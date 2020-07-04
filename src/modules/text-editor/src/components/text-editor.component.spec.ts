import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SelectionHelper } from '../helpers/selection.helper';
import { TextEditorSelection } from '../services/selection.service';
import { TextEditor } from '../services/text-editor';
import { StateService } from '../services/text-editor-state.service';
import { TextEditorComponent } from './text-editor.component';

@Pipe({ name: 'safeHtml' })
class MockPipe implements PipeTransform {
  transform(value: number): number {
    return value;
  }
}

class StateServiceMock {
  transformationCompletedSubject$ = new BehaviorSubject(null);
  transformationCompleted$ = this.transformationCompletedSubject$.asObservable();

  private currentValue: string;

  get value(): string {
    return this.currentValue;
  }
  set value(value: string) {
    this.currentValue = value;
  }

  saveSelection(): void {
    return;
  }
}

describe('Text Editor Component', () => {
  let comp: TextEditorComponent;
  let fixture: ComponentFixture<TextEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ TextEditorComponent, MockPipe ],
      providers: [
        TextEditor,
        { provide: StateService, useClass: StateServiceMock },
        TextEditorSelection,
        SelectionHelper,
      ],
    });
    const EDITOR_SELECTION = {
      start: 0,
      end: 1,
      range: new Range(),
      container: document.createElement('p'),
      parentElement: document.createElement('p'),
    };
    const selectionHelperService = TestBed.get(SelectionHelper);
    const stateService = TestBed.get(StateService);
    spyOn(selectionHelperService , 'get').and.callFake(() => EDITOR_SELECTION);
    spyOn(stateService , 'saveSelection').and.callFake(() => null);
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TextEditorComponent);
    comp = fixture.componentInstance;
    comp.editing = true;
    fixture.detectChanges();
  });

  describe('Constructor', () => {
    it('Should Create Component', () => expect(comp).toBeDefined());

    it('Should Render Editor', () => {
      fixture.detectChanges();
      const element = fixture.debugElement.childNodes[0];

      expect(element).not.toBeNull();
      expect(element.nativeNode.nodeName).toEqual('DIV');

      expect(element.nativeNode.getAttribute('contenteditable')).toEqual('true');
    });

    it('Should Return TextAreaElement', () => {
      fixture.detectChanges();
      const element = fixture.debugElement.childNodes[0];

      expect(comp.textAreaElement).not.toBeNull();
      expect(element.nativeNode.nodeName).toEqual(
        comp.textAreaElement.nodeName,
      );
      expect(element.nativeNode.getAttribute('contenteditable')).toEqual(
        comp.textAreaElement.getAttribute('contenteditable'),
      );
    });
  });

  describe('Binded events', () => {
    afterEach(() => {
      const selectionHelperService = TestBed.get(SelectionHelper);
      const stateService = TestBed.get(StateService);
      selectionHelperService.get.calls.reset();
      stateService.saveSelection.calls.reset();
    });

    const fromEvents = [
      'keyup',
      'click',
      'mousemove',
    ];

    it('Should save the selection whenever transformationCompleted$ emits', () => {
      const selectionHelperService = TestBed.get(SelectionHelper);
      const stateService = TestBed.get(StateService);

      stateService.transformationCompletedSubject$.next({});

      expect(selectionHelperService.get).toHaveBeenCalledTimes(2);
      expect(stateService.saveSelection).toHaveBeenCalledTimes(1);
    });

    fromEvents.forEach(event => {
      it(`Should save the selection whenever the ${event} sadf is fired`, () => {
        fixture.detectChanges();
        const INPUT_TEXT = 'test';
        const element = fixture.debugElement.query(By.css('#text-editor'));
        element.nativeElement.innerHTML = INPUT_TEXT;
        fixture.detectChanges();

        element.triggerEventHandler(event, {});
        const selectionHelperService = TestBed.get(SelectionHelper);
        const stateService = TestBed.get(StateService);

        expect(selectionHelperService.get).toHaveBeenCalledTimes(1);
        expect(stateService.saveSelection).toHaveBeenCalledTimes(1);
      });
    });
  });

  it('Should set state value on input', () => {
    const INPUT_TEXT = 'test';
    let changesCurrentValue: string;
    comp.changes$.asObservable().pipe(tap(change => changesCurrentValue = change)).subscribe();

    const onInputSpy = spyOn(fixture.componentInstance, 'onInput').and.callThrough();
    const element = fixture.debugElement.query(By.css('#text-editor'));

    element.nativeElement.innerHTML = INPUT_TEXT;
    element.triggerEventHandler('input', {});

    expect(changesCurrentValue).toBe(INPUT_TEXT);
    expect(onInputSpy).toHaveBeenCalled();
  });

  it('Should set state value on blur', () => {
    const INPUT_TEXT = 'test';

    const onBlurSpy = spyOn(fixture.componentInstance, 'onBlur').and.callThrough();
    const element = fixture.debugElement.query(By.css('#text-editor'));

    element.nativeElement.innerHTML = INPUT_TEXT;
    element.triggerEventHandler('blur', {});

    expect(onBlurSpy).toHaveBeenCalled();
  });

  it('Should set state value on paste and strip content', () => {
    const INPUT_TEXT = 'test';
    const INPUT_CONTENT = `<b>${INPUT_TEXT}</b>`;

    const preventDefaultSpy = jasmine.createSpy('preventDefault', () => null);
    const getDataSpy = jasmine.createSpy('getData', () => INPUT_TEXT);
    const onPasteSpy = spyOn(fixture.componentInstance, 'onPaste').and.callThrough();
    const element = fixture.debugElement.query(By.css('#text-editor'));

    element.nativeElement.innerHTML = INPUT_CONTENT;
    element.triggerEventHandler('paste', { preventDefault: preventDefaultSpy, clipboardData: { getData: getDataSpy } });

    expect(onPasteSpy).toHaveBeenCalled();
    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});
