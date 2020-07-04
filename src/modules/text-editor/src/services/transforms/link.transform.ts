import { Injectable } from '@angular/core';

import { PebLinkDatasetRouteKey } from '../../text-editor.constants';
import { ExecCommand } from '../../text-editor.interface';
import { Transform } from '../../types/transform';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';

@Injectable()
export class LinkTransform extends BaseTransform implements Transform {

  constructor(
    private selection: TextEditorSelection,
  ) {
    super();
  }

  set value(value: string) {
    value ? this.link(value) : this.unlink();
  }

  get value(): string {
    if (!this.selection.savedValue) {
      return null;
    }
    let parentElement: HTMLElement = this.selection.savedValue.parentElement;

    while (parentElement && parentElement.tagName !== 'A') {
      parentElement = parentElement.parentElement;
    }

    return parentElement && parentElement.dataset ? parentElement.dataset[PebLinkDatasetRouteKey] : null;
  }

  private link(link: string): void {
    const anchorTag = this.selection.findParentTag('A');
    if (anchorTag) {
      this.selection.expandToTag(anchorTag);
    }

    this.execCommand(ExecCommand.CreateLink, '#');

    // Update selection
    this.selection.saveSelection(
      this.selection.getSelection(this.selection.savedValue.container),
    );

    this.selection.savedValue.parentElement.dataset[PebLinkDatasetRouteKey] = link;

    this.execCommand(ExecCommand.CreateLink);
  }

  private unlink(): void {
    this.execCommand(ExecCommand.Unlink);
  }

}
