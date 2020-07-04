import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElement, PebElementStyles } from '@pe/builder-core';
import { PebRendererOptions } from '../../../renderer.types';

@Component({
  selector: 'peb-element-video',
  templateUrl: './video.element.html',
  styleUrls: ['./video.element.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebVideoElement extends PebAbstractElement implements OnInit {
  @Input() element: PebElement;
  @Input() styles: PebElementStyles;
  @Input() options: PebRendererOptions;

  sources: string[] = [];
  videoSettings: {
    autoplay: boolean,
    controls: boolean,
    loop: boolean,
  };

  get elements(): { [key: string]: HTMLElement | HTMLElement[] } {
    return {
      host: this.nativeElement,
    };
  }

  get mappedStyles() {
    const { scale } = this.options;

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

  ngOnInit(): void {
    this.videoSettings = this.element.data.settings;
    this.sources = this.element.data.sources;
  }

}
