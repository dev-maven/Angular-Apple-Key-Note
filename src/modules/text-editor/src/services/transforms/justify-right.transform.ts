import { Injectable } from '@angular/core';

import { ExecCommand } from '../../text-editor.interface';
import { Transform } from '../../types/transform';
import { BaseTransform } from './base.transform';

@Injectable()
export class JustifyRightTransform extends BaseTransform implements Transform {
  justify(): void {
    this.execCommand(ExecCommand.JustifyRight);
  }

  get value(): boolean {
    if (!this.isSelectionExist) {
      return false;
    }

    return document.queryCommandState(ExecCommand.JustifyRight);
  }
}
