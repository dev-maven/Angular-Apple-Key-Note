import { Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElement, PebElementContext } from '@pe/builder-core';

@Component({
  selector: 'peb-element-text',
  templateUrl: './text.element.html',
  styleUrls: [
    '../../_abstract/abstract.element.scss',
    './text.element.scss'
  ]
})
export class PebTextElement extends PebAbstractElement {
  @Input() element: PebElement;
  @Input() context: PebElementContext<any>;
  @Input() options: PebRendererOptions;

  get elements() {
    return {
      host: this.nativeElement,
    };
  }

  get mappedStyles() {
    const styles = this.styles as any;
    const { scale } = this.options;

    const transformMargin = (str) => ('' + str)
      .split(' ')
      .map(part => +part * scale + 'px')
      .join(' ');

    return  {
      host: {
        width: styles.width
          ? (styles.width).toString().includes('%')
            ? styles.width
            : styles.width * scale + 'px'
          : null,
        position: 'relative',
        display: 'inline-block',
        margin: styles.margin ? transformMargin(styles.margin) : null,
        color: styles.color,
        fontSize: styles.fontSize
          ? scale * styles.fontSize + 'px'
          : scale + 'em',
        fontWeight: styles.fontWeight,
        textAlign: styles.textAlign,
      },
    };
  }
}
