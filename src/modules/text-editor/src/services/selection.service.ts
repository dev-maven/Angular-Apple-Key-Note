/* tslint:disable:member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { SelectionHelper } from '../helpers/selection.helper';
import { EditorSelection } from '../text-editor.interface';

@Injectable()
export class TextEditorSelection {

  constructor(
    private selectionHelper: SelectionHelper,
  ) {}

  private readonly savedValueSubject = new BehaviorSubject<EditorSelection>(null);

  savedValue$: Observable<EditorSelection> = this.savedValueSubject.asObservable().pipe(
    share(),
  );

  get savedValue(): EditorSelection {
    return this.savedValueSubject.value;
  }

  set savedValue(selection: EditorSelection) {
    this.savedValueSubject.next(selection);
  }

  saveSelection(selection: EditorSelection): void {
    this.savedValue = selection;
  }

  getSelection(container: Element): EditorSelection {
    return this.selectionHelper.get(container);
  }

  restore(): void {
    this.selectionHelper.restore(this.savedValue);
  }

  expandToTag(element: HTMLElement): void {
    // const selection = this.savedValue.data;

    // selection.removeAllRanges();
    // const range = document.createRange();

    // range.selectNodeContents(element);
    // selection.addRange(range);
  }

  findParentTag(tagName: string): HTMLElement | null {
    if (!this.savedValue) {
      return null;
    }

    let parentElement: HTMLElement = this.savedValue.range.endContainer.parentElement;
    while (parentElement && parentElement.tagName !== tagName && parentElement.tagName !== 'DIV') {
      parentElement = parentElement.parentElement;
    }

    return parentElement;
  }

  // private get selection(): Selection {
  //   return window.getSelection();
  // }

}
