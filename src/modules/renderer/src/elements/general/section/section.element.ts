import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElement, PebElementStyles } from '@pe/builder-core';

const SECTION_DESKTOP_WRAPPER_WIDTH = 1024;

@Component({
  selector: 'peb-element-section',
  templateUrl: './section.element.html',
  styleUrls: [
    '../../_abstract/abstract.element.scss',
    './section.element.scss'
  ],
})
export class PebSectionElement extends PebAbstractElement {
  @Input() element: PebElement;
  @Input() styles: PebElementStyles;

  @ViewChild('wrapper') wrapperEl: ElementRef;

  get elements(): { [key: string]: HTMLElement} {
    return {
      host: this.nativeElement,
      wrapper: this.wrapperEl?.nativeElement,
    };
  }

  get mappedStyles() {
    return {
      host: {
        position: 'relative',
        padding: this.styles.padding,
        margin: this.styles.margin,
        width: '100%', // FIXME: depending on screen
        height: this.styles.height
          ? +this.styles.height * this.options.scale + 'px'
          : null,
        // TODO: Think about allowing shorthand
        // background: this.styles.background,
        backgroundImage: this.styles.backgroundImage
          ? 'url("' + this.styles.backgroundImage + '")'
          : null,
        backgroundSize: this.styles.backgroundSize
          ? this.styles.backgroundSize
          : null,
        backgroundPosition: this.styles.backgroundPosition
          ? this.styles.backgroundPosition
          : null,
        backgroundRepeat: this.styles.backgroundRepeat
          ? this.styles.backgroundRepeat
          : null,
        backgroundColor: this.styles.backgroundColor
          ? this.styles.backgroundColor
          : null,
      },
      wrapper: {
        width: this.options.screen === 'desktop'
          ? SECTION_DESKTOP_WRAPPER_WIDTH * this.options.scale + 'px'
          : '100%',
      },
    };
  }
}
