import { Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { BlockStyles } from './block.constants';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElementStyles, PebElement } from '@pe/builder-core';

@Component({
  selector: 'peb-element-block',
  templateUrl: './block.element.html',
  styleUrls: [
    '../../_abstract/abstract.element.scss',
  ]
})
export class PebBlockElement extends PebAbstractElement {
  @Input() element: PebElement;
  @Input() styles: PebElementStyles;
  @Input() options: PebRendererOptions;

  get elements(): { [key: string]: HTMLElement } {
    return {
      host: this.nativeElement,
    };
  }

  get mappedStyles() {
    const styles = this.styles as BlockStyles;
    const { scale } = this.options;

    return  {
      host: {
        position: styles.position || 'relative',
        width: styles.width ? +styles.width * scale + 'px' : null,
        height: styles.height ? +styles.height * scale + 'px' : null,
        backgroundColor: styles.backgroundColor || null,
      },
    };
  }

}
