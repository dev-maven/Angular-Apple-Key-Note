import { Injectable } from '@angular/core';

// import { PebLinkDatasetRouteKey } from '../../text-editor.constants';
import { ExecCommand } from '../../text-editor.interface';
import { Transform } from '../../types/transform';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';

@Injectable()
export class ExternalLinkTransform extends BaseTransform implements Transform {

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

    const parentElement = this.getParentLinkElement();

    return parentElement && parentElement.hasAttribute('href') ? parentElement.getAttribute('href') : null;
  }

  private link(link: string) {
    // const anchorTag = this.selection.findParentTag('A');
    // if (anchorTag) {
    //   this.selection.expandToTag(anchorTag);
    // }

    this.execCommand(ExecCommand.CreateLink, this.getLinkWithHttps(link));

    // Update selection
    this.selection.saveSelection(
      this.selection.getSelection(this.selection.savedValue.container)
    );

    const parentElement = this.getParentLinkElement();
    parentElement.setAttribute('target', '_blank');

    // this.execCommand(ExecCommand.CreateLink);
  }

  getParentLinkElement(): HTMLElement {
    let parentElement: HTMLElement = this.selection.savedValue.parentElement;

    while (parentElement && parentElement.tagName !== 'A') {
      parentElement = parentElement.parentElement;
    }

    return parentElement;
  }

  getLinkWithHttps(link: string): string {
    return ((link.indexOf('://') === -1) && (link.indexOf('mailto:') === -1) ) ? `https://${link}` : link
  }

  private unlink(): void {
    this.execCommand(ExecCommand.Unlink);
  }

}
