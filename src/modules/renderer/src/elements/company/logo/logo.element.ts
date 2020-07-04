import { Component, HostListener, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElement, PebElementStyles, PebElementContext, PebElementContextState } from '@pe/builder-core';

export type LogoContext = PebElementContext<{
  logoUrl: string;
  name: string;
}>;

@Component({
  selector: 'peb-element-business-logo',
  templateUrl: './logo.element.html',
  styleUrls: ['./logo.element.scss']
})
export class PebBusinessLogoElement extends PebAbstractElement {
  @Input() element: PebElement;
  @Input() styles: PebElementStyles;
  @Input() context: LogoContext;

  PebElementContextState = PebElementContextState;

  get elements(): { [key: string]: HTMLElement} {
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
        fontSize: this.styles.fontSize
          ? (this.styles.fontSize as number * scale) + 'px'
          : null,
        left: this.styles.left
          ? (this.styles.left as number * scale) + 'px'
          : null,
        right: this.styles.right
          ? (this.styles.right as number * scale) + 'px'
          : null,
        top: this.styles.to
          ? (this.styles.top as number * scale) + 'px'
          : null,
        bottom: this.styles.bottom
          ? (this.styles.bottom as number * scale) + 'px'
          : null,
      }
    };
  }

  @HostListener('click')
  onClick() {
    this.interact({ type: 'logo.click' });
  }
}
