import { Injectable } from '@angular/core';

import { ExecCommand } from '../../text-editor.interface';
import { Transform } from '../../types/transform';
import { BaseTransform } from './base.transform';

@Injectable()
export class JustifyCenterTransform extends BaseTransform implements Transform {
  justify(): void {
    this.execCommand(ExecCommand.JustifyCenter);
  }

  get value(): boolean {
    if (!this.isSelectionExist) {
      return false;
    }

    return document.queryCommandState(ExecCommand.JustifyCenter);
  }
}
