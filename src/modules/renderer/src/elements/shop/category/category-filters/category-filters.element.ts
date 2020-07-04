import { Component, ChangeDetectionStrategy, Input, AfterViewInit, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { ProductContext } from '../category.element';
import { PebElementContextState } from '@pe/builder-core';

@Component({
  selector: 'peb-element-shop-category-filters',
  templateUrl: './category-filters.element.html',
  styleUrls: ['./category-filters.element.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebShopCategoryFiltersElement extends PebAbstractElement implements AfterViewInit {
  @Input() context: ProductContext;

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

  onToggleFilter(): void {

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
