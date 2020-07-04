import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from '../../../../renderer.types';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState, PebElementContext } from '@pe/builder-core';

type ProductContext = PebElementContext<Product>;

@Component({
  selector: 'peb-element-shop-product',
  templateUrl: './product.element.html',
  styleUrls: ['./product.element.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebShopProductElement extends PebAbstractElement implements AfterViewInit {
  @Input() context: ProductContext;

  @ViewChild('imageRef') imageRef: ElementRef;

  PebElementContextState = PebElementContextState;

  get elements(): { [key: string]: HTMLElement | HTMLElement[]} {
    return {
      host: this.nativeElement,
      image: this.imageRef?.nativeElement,
    };
  }

  get mappedStyles() {
    return {
      host: {},
      image: {
        backgroundImage: this.context.state === PebElementContextState.Ready ? `url('${this.context.data.image}')` : null,
      },
    };
  }

  ngAfterViewInit() {
    this.applyStyles();
  }

}
