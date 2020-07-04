/* tslint:disable:member-ordering */
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, share } from 'rxjs/operators';

import { TextEditorComponent } from '../components/text-editor.component';
import { EditorSelection } from '../text-editor.interface';
import { TextEditorSelection } from './selection.service';
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

@Injectable()
export class StateService {
  textEditorComponent: TextEditorComponent;
  lastContentEdited: string;

  private readonly stateSubject$ = new BehaviorSubject<string>(null);
  readonly removeListAlignSubject$ = new Subject<string>();

  private readonly transformationCompletedSubject$ = new EventEmitter();

  transformationCompleted$: Observable<null> = this.transformationCompletedSubject$.asObservable();

  changed$: Observable<any> = merge(
    this.transformationCompletedSubject$,
    this.selection.savedValue$,
  ).pipe(share());

  bold$: Observable<boolean> = this.changed$.pipe(
    map(() => this.bold),
    distinctUntilChanged(),
  );

  color$: Observable<string> = this.changed$.pipe(
    map(() => this.color),
    distinctUntilChanged(),
  );

  fontSize$: Observable<number> = this.changed$.pipe(
    map(() => this.fontSize),
    distinctUntilChanged(),
  );

  fontFamily$: Observable<string> = this.changed$.pipe(
    map(() => this.fontFamily),
    distinctUntilChanged(),
  );

  italic$: Observable<boolean> = this.changed$.pipe(
    map(() => this.italic),
    distinctUntilChanged(),
  );

  link$: Observable<string> = this.changed$.pipe(
    map(() => this.link),
    distinctUntilChanged(),
  );

  externalLink$: Observable<string> = this.changed$.pipe(
    map(() => this.externalLink),
    distinctUntilChanged(),
  );

  justifyCenter$: Observable<boolean> = this.changed$.pipe(
    map(() => this.justifyCenter),
    distinctUntilChanged(),
  );

  justifyLeft$: Observable<boolean> = this.changed$.pipe(
    map(() => this.justifyLeft),
    distinctUntilChanged(),
  );

  justifyRight$: Observable<boolean> = this.changed$.pipe(
    map(() => this.justifyRight),
    distinctUntilChanged(),
  );

  justifyFull$: Observable<boolean> = this.changed$.pipe(
    map(() => this.justifyFull),
    distinctUntilChanged(),
  );

  orderedList$: Observable<boolean> = this.changed$.pipe(
    map(() => this.orderedList),
    distinctUntilChanged(),
  );

  underline$: Observable<boolean> = this.changed$.pipe(
    map(() => this.underline),
    distinctUntilChanged(),
  );

  unorderedList$: Observable<boolean> = this.changed$.pipe(
    map(() => this.unorderedList),
    distinctUntilChanged(),
  );

  value$: Observable<string> = this.stateSubject$.asObservable().pipe(
    distinctUntilChanged(),
  );

  constructor(
    private selection: TextEditorSelection,
    private boldTransform: BoldTransform,
    private colorTransform: ColorTransform,
    private fontFamilyTransform: FontFamilyTransform,
    private fontSizeTransform: FontSizeTransform,
    private italicTransform: ItalicTransform,
    private linkTransform: LinkTransform,
    private externalLinkTransform: ExternalLinkTransform,
    private underlineTransform: UnderlineTransform,
    private justifyLeftTransform: JustifyLeftTransform,
    private justifyRightTransform: JustifyRightTransform,
    private justifyCenterTransform: JustifyCenterTransform,
    private justifyFullTransform: JustifyFullTransform,
    private unorderedTransform: UnorderedTransform,
    private orderedTransform: OrderedTransform,
  ) { }

  set value(value: string) {
    this.stateSubject$.next(value);
  }

  get value(): string {
    return this.stateSubject$.getValue();
  }

  set link(value: string) {
    this.selection.restore();

    if (this.externalLink) {
      this.externalLinkTransform.value = null;
    }

    this.linkTransform.value = value;
    this.transformationCompletedSubject$.next();
  }

  get link(): string {
    return this.linkTransform.value;
  }

  set externalLink(value: string) {
    this.selection.restore();

    if (this.link) {
      this.linkTransform.value = null;
    }

    this.externalLinkTransform.value = value;
    this.transformationCompletedSubject$.next();
  }

  get externalLink(): string {
    return this.externalLinkTransform.value;
  }

  toggleBold(): void {
    this.selection.restore();
    this.boldTransform.toggle();
    this.transformationCompletedSubject$.next();
  }

  get bold(): boolean {
    return this.boldTransform.value;
  }

  toggleItalic(): void {
    this.selection.restore();
    this.italicTransform.toggle();
    this.transformationCompletedSubject$.next();
  }

  get italic(): boolean {
    return this.italicTransform.value;
  }

  toggleUnderline(): void {
    this.selection.restore();
    this.underlineTransform.toggle();
    this.transformationCompletedSubject$.next();
  }

  get underline(): boolean {
    return this.underlineTransform.value;
  }

  set fontSize(value: number) {
    this.selection.restore();
    this.fontSizeTransform.value = value;
    this.transformationCompletedSubject$.next();
  }

  get fontSize(): number {
    const size: number = this.fontSizeTransform.value;

    return typeof size === 'number' ? size : null;
  }

  set color(value: string) {
    this.selection.restore();
    this.colorTransform.value = value;
    this.transformationCompletedSubject$.next();
  }

  get color(): string {
    return this.colorTransform.value;
  }

  set fontFamily(value: string) {
    this.selection.restore();
    this.fontFamilyTransform.value = value;
    this.transformationCompletedSubject$.next();
  }

  get fontFamily(): string {
    return this.fontFamilyTransform.value;
  }

  get justifyLeft(): boolean {
    return this.justifyLeftTransform.value;
  }

  toggleJustifyLeft(): void {
    this.justifyLeftTransform.justify();
    this.transformationCompletedSubject$.next();
  }

  get justifyRight(): boolean {
    return this.justifyRightTransform.value;
  }

  toggleJustifyRight(): void {
    this.justifyRightTransform.justify();
    this.transformationCompletedSubject$.next();
  }

  get justifyCenter(): boolean {
    return this.justifyCenterTransform.value;
  }

  toggleJustifyCenter(): void {
    this.justifyCenterTransform.justify();
    this.transformationCompletedSubject$.next();
  }

  get justifyFull(): boolean {
    return this.justifyFullTransform.value;
  }

  toggleJustifyFull(): void {
    this.justifyFullTransform.justify();
    this.transformationCompletedSubject$.next();
  }

  get unorderedList(): boolean {
    return this.unorderedTransform.value;
  }

  toggleUnorderedList(): void {
    const newContent = this.unorderedTransform.apply(this.value);

    if (newContent) {
      this.value = newContent;
      this.removeListAlignSubject$.next(newContent);
    } else {
      this.removeListAlignSubject$.next(null);
    }

    this.transformationCompletedSubject$.next();
  }

  get orderedList(): boolean {
    return this.orderedTransform.value;
  }

  toggleOrderedList(): void {
    const newContent = this.orderedTransform.apply(this.value);

    if (newContent) {
      this.value = newContent;
      this.removeListAlignSubject$.next(newContent);
    } else {
      this.removeListAlignSubject$.next(null);
    }

    this.transformationCompletedSubject$.next();
  }

  saveSelection(selection: EditorSelection): void {
    this.selection.saveSelection(selection);
  }

  findParentTag(tag: string): HTMLElement {
    return this.selection.findParentTag(tag);
  }

}
