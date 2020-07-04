import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, AfterViewInit, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { ProductContext } from '../category.element';
import { PebElementContextState } from '@pe/builder-core';

@Component({
  selector: 'peb-element-shop-category-header',
  templateUrl: './category-header.element.html',
  styleUrls: ['./category-header.element.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebShopCategoryHeaderElement extends PebAbstractElement implements AfterViewInit {
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
