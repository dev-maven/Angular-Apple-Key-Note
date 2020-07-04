import { Injectable } from '@angular/core';

import { Transform } from '../../types/transform';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';

@Injectable()
export class FontSizeTransform extends BaseTransform implements Transform {

  constructor(
    private selection: TextEditorSelection,
  ) {
    super();
  }

  set value(value: number) {
    if (!this.selection.savedValue) {
      throw new Error('There is no selection');
    }

    document.execCommand('fontSize', false, '1');
    const fontElements = this.selection.savedValue.container.getElementsByTagName('font');

    Array.from(fontElements).forEach(el => {
      if (el.getAttribute('size') !== '1') {
        return;
      }

      el.removeAttribute('size');
      el.style.fontSize = `${value}px`;
    });
  }

  get value(): number {
    if (!this.selection.savedValue) {
      return null;
    }

    let parentElement: HTMLElement = this.selection.savedValue.parentElement;
    while (parentElement && parentElement.tagName !== 'SPAN' && !parentElement.style.fontSize) {
      parentElement = parentElement.parentElement;
    }

    const size = parentElement ? parentElement.style.fontSize : null;

    return size ? parseInt(size, 10) : null;
  }
}
