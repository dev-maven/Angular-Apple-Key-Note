import { Component, HostBinding, Input, ViewChildren, QueryList, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { Product } from '../../../renderer.types';
import { PebShopProductElement } from './product/product.element';
import { PebElement, PebElementStyles, PebElementContextState, PebElementContext } from '@pe/builder-core';

interface ProductElement extends PebElement {
  variant: 'link'|'purchase';
}

type ProductsContext = PebElementContext<Product[]>;

@Component({
  selector: 'peb-element-shop-products',
  templateUrl: './products.element.html',
  styleUrls: ['./products.element.scss']
})
export class PebShopProductsElement extends PebAbstractElement implements AfterViewInit {
  @Input() element: ProductElement;
  @Input() styles: PebElementStyles;
  @Input() context: ProductsContext;

  @ViewChild('productsGridRef') productsGridRef: ElementRef;
  @ViewChildren(PebShopProductElement, { read: ElementRef }) productElements: QueryList<ElementRef>;

  PebElementContextState = PebElementContextState;

  get elements(): { [key: string]: HTMLElement | HTMLElement[]} {
    return {
      host: this.nativeElement,
      productsGrid: this.productsGridRef?.nativeElement,
      products: this.productElements?.toArray().map(a => a.nativeElement) || [],
    };
  }

  get mappedStyles() {
    const { scale } = this.options;

    return {
      host: {
        position: 'relative',
        width: this.context.state === PebElementContextState.Ready ?
          `${+this.styles.itemWidth * Math.ceil(this.context.data.length / +this.styles.rows) * scale}px` :
          null,
        height: this.context.state === PebElementContextState.Ready ?
          `${+this.styles.itemHeight * Math.ceil(this.context.data.length / +this.styles.columns) * scale}px` :
          null,
        left: this.styles.left
          ? (this.styles.left as number * scale) + 'px'
          : null,
        top: this.styles.to
          ? (this.styles.top as number * scale) + 'px'
          : null,
      },
      products: {
        width: `${+this.styles.itemWidth * scale}px`,
        height: `${+this.styles.itemHeight * scale}px`,
      },
      productsGrid: {
        gridTemplateColumns: `repeat(${this.styles.columns}, minmax(${+this.styles.itemWidth * scale}px, 1fr))`
      },
    };
  }

  addToCart() {
    this.interact({
      type: 'product.add-to-cart',
      product: (this.context as any).data,
    });
  }

  // @HostListener('click')
  // openProductPage() {
  //   if ((this.element as any).variant && this.context.state === 'ready') {
  //     this.interact({
  //       type: 'product.navigate-to-page',
  //       product: (this.context as any).data
  //     });
  //   }
  // }

  @HostBinding('class')
  get hostClass() {
    return 'state-' + this.context?.state;
  }

  // TODO: clean up after fix
  ngAfterViewInit() {
    this.applyStyles();
  }
}
