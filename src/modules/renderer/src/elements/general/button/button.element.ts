import { Component, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElement, PebElementStyles } from '@pe/builder-core';

@Component({
  selector: 'peb-element-button',
  templateUrl: './button.element.html',
  styleUrls: ['./button.element.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebButtonElement extends PebAbstractElement {
  @Input() element: PebElement;
  @Input() styles: PebElementStyles;
  @Input() options: PebRendererOptions;
  get elements(): { [key: string]: HTMLElement } {
    return {
      host: this.nativeElement,
    };
  }
  get mappedStyles(): any {
    const styles = this.styles;
    const { scale } = this.options;

    return  {
      host: {
        width: styles.width ? +styles.width * scale + 'px' : null,
        position: styles.position || 'relative',
        height: styles.height ? +styles.height * scale + 'px' : null,
        backgroundColor: styles.backgroundColor || null,
        textAlign: styles.textAlign || 'center',
        padding: styles.padding ? +styles.padding * scale + 'px' : null,
        borderRadius: styles.borderRadius ? + styles.borderRadius * scale  + 'px' : null,
        paddingRight: styles.paddingRight ? + styles.paddingRight * scale   + 'px' : null,
        paddingLeft: styles.paddingLeft ? + styles.paddingLeft * scale   + 'px' : null,
        color: styles.color || '#000'
      },
    };
  }

  @HostListener('click')
  onClick() {
    this.interact({ type: 'button.click' });
  }

}
