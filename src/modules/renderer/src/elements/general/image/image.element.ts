import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElement, PebElementStyles } from '@pe/builder-core';
import { PebRendererOptions } from '../../../renderer.types';

@Component({
  selector: 'peb-element-image',
  templateUrl: './image.element.html',
  styleUrls: ['./image.element.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebImageElement extends PebAbstractElement {

  @Input() element: PebElement;
  @Input() styles: PebElementStyles;
  @Input() options: PebRendererOptions;

  get elements(): { [key: string]: HTMLElement | HTMLElement[] } {
    return {
      host: this.nativeElement,
    };
  }

  get mappedStyles() {
    const { scale } = this.options;

    // TODO: Filter out nulls
    return {
      host: {
        position: 'relative',
        color: this.styles.color,
        width: this.styles.width
          ? (this.styles.width as number * scale)  + 'px'
          : '100%',
        height: this.styles.height
          ? (this.styles.height as number * scale) + 'px'
          : '100%',
        left: this.styles.left
          ? (this.styles.left as number * scale) + 'px'
          : null,
        right: this.styles.right
          ? (this.styles.right as number * scale) + 'px'
          : null,
        top: this.styles.top
          ? (this.styles.top as number * scale) + 'px'
          : null,
        bottom: this.styles.bottom
          ? (this.styles.bottom as number * scale) + 'px'
          : null,
        border: this.styles.border
          ? this.styles.border
          : null,
      }
    };
  }
}
