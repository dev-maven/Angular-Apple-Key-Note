import { Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { sum } from 'lodash-es';
import { Product } from '../../../renderer.types';
import { PebElement, PebElementStyles, PebElementContext, PebElementContextState } from '@pe/builder-core';

type CartContext = PebElementContext<{
  count: number;
  product: Product;
}[]>;

@Component({
  selector: 'peb-element-shop-cart',
  templateUrl: './cart.element.html',
  styleUrls: ['./cart.element.scss']
})
export class PebShopCartElement extends PebAbstractElement {
  @Input() element: PebElement;
  @Input() styles: PebElementStyles;
  @Input() context: CartContext;

  PebElementContextState = PebElementContextState;

  // TODO: --prod build doesn't work
  // static contextFetcher = ctx => ctx['@cart'];

  onOpenCart(): void {
    this.interact({type: 'cart.click'});
  }

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
        // position: 'absolute',
        color: this.styles.color,
        fontSize: this.styles.fontSize
          ? (this.styles.fontSize as number * scale) + 'px'
          : null,
        // left: this.styles.left
        //   ? (this.styles.left as number * scale) + 'px'
        //   : null,
        // right: this.styles.right
        //   ? (this.styles.right as number * scale) + 'px'
        //   : null,
        // top: this.styles.to
        //   ? (this.styles.top as number * scale) + 'px'
        //   : null,
        // bottom: this.styles.bottom
        //   ? (this.styles.bottom as number * scale) + 'px'
        //   : null,
      }
    };
  }

  get totalItems() {
    if (this.context.state !== this.PebElementContextState.Ready) {
      return;
    }

    return sum(this.context.data.map(i => i.count));
  }

  get totalAmount() {
    if (this.context.state !== this.PebElementContextState.Ready) {
      return;
    }

    return sum(
      this.context.data.map(
        i => i.count * (i.product.prices.sale || i.product.prices.regular)
      )
    );
  }
}
