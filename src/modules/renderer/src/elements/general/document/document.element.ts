import { Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElement } from '@pe/builder-core';

@Component({
  selector: 'peb-element-document',
  templateUrl: './document.element.html',
  styleUrls: [
    '../../_abstract/abstract.element.scss',
    './document.element.scss'
  ]
})
export class PebDocumentElement extends PebAbstractElement {
  @Input() element: PebElement;
  @Input() context: null;
  @Input() options: PebRendererOptions;

  protected get elements() {
    return {
      host: this.nativeElement,
    };
  }

  protected get mappedStyles() {
    return { host: {} };
  }

  applyStyles() {}
}
