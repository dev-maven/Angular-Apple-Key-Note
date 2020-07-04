import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';

import { SelectionHelper } from '../helpers/selection.helper';
import { TextEditor } from '../services/text-editor';
import { StateService } from '../services/text-editor-state.service';
import { ExecCommand } from '../text-editor.interface';

@Component({
  selector: 'peb-text-editor-new', // tslint:disable-line
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent implements AfterViewInit, OnDestroy {
  @Input()
  set value(value: string) {
    if (!value) {
      return;
    }

    this.initialValue$.next(value);
  }

  get textAreaElement(): HTMLElement {
    return this.textArea.nativeElement;
  }

  initialValue$ = new BehaviorSubject<string>('');
  changes$ = new Subject<string>();
  destroy$ = new Subject<boolean>();

  @Input()
  editing = false;

  @Output()
  changed = new EventEmitter<string>();

  @ViewChild('textArea', { static: true })
  textArea: ElementRef;
  textEditor: TextEditor = this.injector.get(TextEditor);
  state: StateService = this.injector.get(StateService);

  constructor(
    public injector: Injector,
    private changeDetectorRef: ChangeDetectorRef,
    private selectionHelper: SelectionHelper,
  ) { }

  // init(): void {
  // TODO set state here instead of @input state
  // }

  ngAfterViewInit(): void {
    this.bindEvents();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onInput(): void {
    this.changes$.next(this.textArea.nativeElement.innerHTML);
    this.state.value = this.textArea.nativeElement.innerHTML;
  }

  onBlur(): void {
    this.state.value = this.textArea.nativeElement.innerHTML;
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const strippedText = event.clipboardData.getData('text');
    document.execCommand(ExecCommand.InsertText, false, strippedText);
  }

  private bindEvents(): void {
    this.changes$.pipe(
      tap(value => this.changed.emit(value)),
      takeUntil(this.destroy$),
    ).subscribe();

    /**
     * Safari doesn't recognize fromEvent(document, 'selectionchange')
     * probably the reason is Shadow DOM
     */
    merge(
      fromEvent(this.textArea.nativeElement, 'keyup'),
      fromEvent(this.textArea.nativeElement, 'click'),
      fromEvent(this.textArea.nativeElement, 'mousemove'),
      this.state.transformationCompleted$,
    ).pipe(
      filter(() => this.editing),
      map(() => this.selectionHelper.get(this.textArea.nativeElement)),
      filter(selection => !!selection),
      distinctUntilChanged((prev, next) => JSON.stringify(prev) === JSON.stringify(next)),
      tap(selection => this.state.saveSelection(selection)),
      takeUntil(this.destroy$),
    ).subscribe();
  }
}
