import { Injectable } from '@angular/core';

import { ExecCommand } from '../../text-editor.interface';
import { Transform } from '../../types/transform';
import { BaseTransform } from './base.transform';

@Injectable()
export class UnderlineTransform extends BaseTransform implements Transform {

  toggle(): void {
    this.execCommand(ExecCommand.Underline);
  }

  get value(): boolean {
    if (!this.isSelectionExist) {
      return false;
    }

    return document.queryCommandState(ExecCommand.Underline);
  }

}
