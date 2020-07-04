import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, AfterViewInit, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { Product } from '../../../../renderer.types';
import { PebElementContextState, PebElementContext } from '@pe/builder-core';

type CategoryProductContext = PebElementContext<Product>;

@Component({
  selector: 'peb-element-shop-category-product',
  templateUrl: './category-product.element.html',
  styleUrls: ['./category-product.element.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebShopCategoryProductElement extends PebAbstractElement implements AfterViewInit {
  @Input() context: CategoryProductContext;

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
      host: {
        borderColor: this.styles?.borderColor,
      },
      image: {
        backgroundImage: this.context.state === PebElementContextState.Ready ? `url('${this.context.data.image}')` : null,
      },
    };
  }

  // TODO: return after checking renderer's styling.
  ngAfterViewInit() {
    this.applyStyles();
  }

  @HostBinding('class')
  get hostClass() {
    return 'screen-' + this.options.screen;
  }

}
