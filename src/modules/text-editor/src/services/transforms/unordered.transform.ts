import { Injectable } from '@angular/core';

import { isSafari } from '../../helpers/selection.helper';
import { ExecCommand } from '../../text-editor.interface';
import { Transform } from '../../types/transform';
import { BaseTransform } from './base.transform';

@Injectable()
export class UnorderedTransform extends BaseTransform implements Transform {
  apply(currentValue: string) {
    if (this.value) {
      return this.removeTransformList(currentValue);
    }

    this.execCommand(ExecCommand.InsertUnorderedList);
  }

  get value(): boolean {
    return document.queryCommandState(ExecCommand.InsertUnorderedList);
  }

  /**
   * Remove unordered list needs to be manually (issue on return to the previous value).
   *
   * @param currentValue Current text widget value.
   */
  removeTransformList(currentValue: string): string {
    if (!currentValue) {
      return currentValue;
    }

    const ulList = currentValue.indexOf('<ul>');
    const ulListClosed = currentValue.indexOf('</ul>');
    const listContent = currentValue.slice(ulList + 4, ulListClosed);

    const newListContent = listContent.replace(/<li>/g, '').replace(/<\/li>/g, isSafari ? '' : '<br>');

    const firstPart = currentValue.split('<ul>');
    const secondPart = currentValue.split('</ul>');

    return firstPart[0].concat(newListContent).concat(secondPart[1]);
  }
}
