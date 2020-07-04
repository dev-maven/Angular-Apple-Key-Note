import { Injectable } from '@angular/core';

import { ExecCommand } from '../../text-editor.interface';
import { Transform } from '../../types/transform';
import { BaseTransform } from './base.transform';

@Injectable()
export class ColorTransform extends BaseTransform implements Transform {

  set value(value: string) {
    this.execCommand(ExecCommand.ForeColor, value);
  }

  get value(): string {
    return document.queryCommandValue(ExecCommand.ForeColor);
  }

}
