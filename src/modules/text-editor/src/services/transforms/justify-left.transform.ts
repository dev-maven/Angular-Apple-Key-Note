import { Injectable } from '@angular/core';

import { ExecCommand } from '../../text-editor.interface';
import { Transform } from '../../types/transform';
import { BaseTransform } from './base.transform';

@Injectable()
export class JustifyLeftTransform extends BaseTransform implements Transform {
  justify(): void {
    this.execCommand(ExecCommand.JustifyLeft);
  }

  get value(): boolean {
    if (!this.isSelectionExist) {
      return false;
    }

    return document.queryCommandState(ExecCommand.JustifyLeft);
  }
}
