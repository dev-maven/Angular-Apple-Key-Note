import { Component, HostBinding, Input, ViewChild, ElementRef, ChangeDetectionStrategy, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { Product } from '../../../renderer.types';
import { PebShopCategoryProductElement } from './category-product/category-product.element';
import { PebShopCategoryHeaderElement } from './category-header/category-header.element';
import { PebShopCategoryNavbarElement } from './category-navbar/category-navbar.element';
import { PebShopCategoryFiltersElement } from './category-filters/category-filters.element';
import { PebElementStyles, PebElement, PebElementContext, PebElementContextState } from '@pe/builder-core';

interface ShopCategory extends PebElement {
  variant: 'link'|'purchase';
}

interface ShopCategoryFilter {
  name: string;
  active: boolean;
  disabled: boolean;
  children: ShopCategoryFilter[];
}

interface ProductElementData {
  title: string;
  image: string;
  shownFilters: boolean;
  filters: ShopCategoryFilter[];
  products: Product[];
}

export type ProductContext = PebElementContext<ProductElementData>;

const HEADER_STYLES = {
  height: {
    desktop: 225,
    tablet: 225,
    mobile: 225,
  },
  fontSize: {
    desktop: 40,
    tablet: 40,
    mobile: 40,
  },
};

const NAVBAR_STYLES = {
  height: {
    desktop: 60,
    tablet: 60,
    mobile: 60,
  },
  fontSize: {
    desktop: 12,
    tablet: 12,
    mobile: 12,
  },
};

const FILTERS_STYLES = {
  fontSize: {
    desktop: 14,
    tablet: 14,
    mobile: 14,
  },
};

const PRODUCT_STYLES = {
  height: {
    desktop: 500,
    tablet: 500,
    mobile: 500,
  },
  fontSize: {
    desktop: 17,
    tablet: 16,
    mobile: 14,
  },
};

const COLUMNS = 3;

@Component({
  selector: 'peb-element-shop-category',
  templateUrl: './category.element.html',
  styleUrls: ['./category.element.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebShopCategoryElement extends PebAbstractElement implements AfterViewInit {
  @Input() element: ShopCategory;
  @Input() styles: PebElementStyles;
  @Input() context: ProductContext;

  @ViewChild(PebShopCategoryHeaderElement, { read: ElementRef }) headerRef: ElementRef;
  @ViewChild(PebShopCategoryNavbarElement, { read: ElementRef }) navbarRef: ElementRef;
  @ViewChild(PebShopCategoryFiltersElement, { read: ElementRef }) filtersRef: ElementRef;
  @ViewChild('productsGridRef') productsGridRef: ElementRef;
  @ViewChildren(PebShopCategoryProductElement, { read: ElementRef }) productElements: QueryList<ElementRef>;

  PebElementContextState = PebElementContextState;

  onToggleShownFilters(): void {
    this.interact({type: 'category.toggle-filters'});
  }

  onToggleFilter(value): void {
    this.interact({type: 'category.toggle-filter', value});
  }

  onProductClick(): void {
  }

  get elements(): { [key: string]: HTMLElement | HTMLElement[]} {
    return {
      host: this.nativeElement,
      header: this.headerRef?.nativeElement,
      navbar: this.navbarRef?.nativeElement,
      filters: this.filtersRef?.nativeElement,
      productsGrid: this.productsGridRef?.nativeElement,
      products: this.productElements?.toArray().map(a => a.nativeElement) || [],
    };
  }

  get mappedStyles() {
    const { screen, scale } = this.options;

    return {
      host: {
        position: 'relative',
        width: this.styles.width
          ? `${+this.styles.width * scale}px`
          : `${100 * scale}%`,
        height: this.styles.height
          ? `${+this.styles.height * scale}px`
          : null,
        left: this.styles.left
          ? `${+this.styles.left * scale}px`
          : null,
        top: this.styles.top
          ? `${+this.styles.top * scale}px`
          : null,
        background: this.styles?.mode === 'dark' ? '#333' : '#fff',
        color: this.styles?.mode === 'dark' ? '#fff' : '#333',
      },
      header: {
        height: `${HEADER_STYLES.height[screen] * scale}px`,
        fontSize: `${HEADER_STYLES.fontSize[screen] * scale}px`
      },
      navbar: {
        background: this.styles?.mode === 'dark' ? '#333' : '#fff',
        borderColor: this.styles?.borderColor,
        height: `${NAVBAR_STYLES.height[screen] * scale}px`,
        fontSize: `${NAVBAR_STYLES.fontSize[screen] * scale}px`,
      },
      filters: {
        display: this.context.state === PebElementContextState.Ready && this.context.data.shownFilters ? 'block' : 'none',
        fontSize: `${FILTERS_STYLES.fontSize[screen] * scale}px`,
      },
      productsGrid: {
        gridTemplateColumns: `repeat(${this.styles?.columns || COLUMNS}, 1fr)`,
        boxShadow: `inset 1px 0 0 0 ${this.styles?.borderColor || '#d6d6d6'}`,
      },
      products: {
        height: `${PRODUCT_STYLES.height[screen] * scale}px`,
        fontSize: `${PRODUCT_STYLES.fontSize[screen] * scale}px`,
      }
    };
  }

  @HostBinding('class')
  get hostClass() {
    return 'screen-' + this.options?.screen;
  }

    // TODO: clean up after fix
  ngAfterViewInit() {
    this.applyStyles();
  }
}
