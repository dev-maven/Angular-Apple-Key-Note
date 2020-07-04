import { Injectable } from '@angular/core';

import { ExecCommand } from '../../text-editor.interface';
import { Transform } from '../../types/transform';
import { BaseTransform } from './base.transform';

@Injectable()
export class FontFamilyTransform extends BaseTransform implements Transform {

  set value(value: string) {
    this.execCommand(ExecCommand.FontName, value);
  }

  get value(): string {
    const fontName: string = document.queryCommandValue(ExecCommand.FontName);

    return fontName ? fontName.replace(/['"]+/g, '') : null;
  }

}
