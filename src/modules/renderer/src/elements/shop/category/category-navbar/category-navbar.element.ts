import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, AfterViewInit, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { ProductContext } from '../category.element';
import { PebElementContextState } from '@pe/builder-core';

@Component({
  selector: 'peb-element-shop-category-navbar',
  templateUrl: './category-navbar.element.html',
  styleUrls: ['./category-navbar.element.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebShopCategoryNavbarElement extends PebAbstractElement implements AfterViewInit {
  @Input() context: ProductContext;

  @ViewChild('imageRef') imageRef: ElementRef;

  PebElementContextState = PebElementContextState;

  get elements(): { [key: string]: HTMLElement | HTMLElement[]} {
    return {
      host: this.nativeElement,
    };
  }

  get mappedStyles() {
    return {
      host: {
        borderColor: this.styles?.borderColor,
      },
    };
  }

  onToggleShownFilters(): void {

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
