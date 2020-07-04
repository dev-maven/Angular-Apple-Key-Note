import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromPairs } from 'lodash-es';

import { PebRendererComponent } from './root/renderer.component';
import { PebRendererChildrenSlotDirective } from './selectors/children-slot.directive';
import { PebDocumentElement } from './elements/general/document/document.element';
import { PebSectionElement } from './elements/general/section/section.element';
import { PebBlockElement } from './elements/general/block/block.element';
import { PebTextElement } from './elements/general/text/text.element';
import { getIvyComponentSelector } from './utils';
import { ElementComponentsCollection, MakerComponentsCollection } from './renderer.tokens';
import { PebGridElement } from './elements/general/grid/grid.element';
import { PebBusinessLogoElement } from './elements/company/logo/logo.element';
import { PebShopCartElement } from './elements/shop/cart/cart.element';
import { PebNavbarElement } from './elements/company/navbar/navbar.component';
import { PebShopCategoryElement } from './elements/shop/category/category.element';
import { PebShopProductsElement } from './elements/shop/products/products.element';
import { PebShopProductElement } from './elements/shop/products/product/product.element';
import { PebShopCategoryHeaderElement } from './elements/shop/category/category-header/category-header.element';
import { PebShopCategoryNavbarElement } from './elements/shop/category/category-navbar/category-navbar.element';
import { PebShopCategoryFiltersElement } from './elements/shop/category/category-filters/category-filters.element';
import { PebShopCategoryProductElement } from './elements/shop/category/category-product/category-product.element';
import { PebProductIcon } from './elements/icons/product.icon';
import { PebPlusIcon } from './elements/icons/plus.icon';
import { PebFiltersIcon } from './elements/icons/filters.icon';
import { PebButtonElement } from './elements/general/button/button.element';
import { PebImageElement } from './elements/general/image/image.element';
import { PebVideoElement } from './elements/general/video/video.element';
import { PebLineElement } from './elements/general/line/line.element';

const AVAILABLE_ELEMENTS_SET = [
  // General
  PebDocumentElement,
  PebSectionElement,
  PebBlockElement,
  PebTextElement,
  PebGridElement,
  PebButtonElement,
  PebImageElement,
  PebVideoElement,
  PebLineElement,

  // Business
  PebBusinessLogoElement,
  PebNavbarElement,

  // Shop
  PebShopCartElement,
  PebShopCategoryElement,
  PebShopCategoryHeaderElement,
  PebShopCategoryNavbarElement,
  PebShopCategoryFiltersElement,
  PebShopCategoryProductElement,
  PebShopProductElement,
  PebShopProductsElement,
];

const ICONS = [
  PebProductIcon,
  PebPlusIcon,
  PebFiltersIcon,
];

// TODO: Add check for element selectors to be unique
// commented because doesn't work with --prod key
// const AVAILABLE_ELEMENTS_MAP = fromPairs(
//   AVAILABLE_ELEMENTS_SET.map(
//     cmp => [
//       getIvyComponentSelector(cmp).replace('peb-element-', '') as PebElementType,
//       cmp,
//     ]
//   )
// );
export const AVAILABLE_ELEMENTS_MAP = {
  document: PebDocumentElement,
  section: PebSectionElement,
  block: PebBlockElement,
  text: PebTextElement,
  line: PebLineElement
  // TODO: add remaining elements
};

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PebRendererComponent,
    PebRendererChildrenSlotDirective,

    ...ICONS,
    ...AVAILABLE_ELEMENTS_SET,
  ],
  providers: [
    {
      provide: ElementComponentsCollection,
      useValue: AVAILABLE_ELEMENTS_MAP,
    },
    {
      provide: 'RENDERER_SETTINGS',
      useValue: {
        dimensions: {
          desktop: 1280,
          tablet: 768,
          mobile: 360,
        }
      }
    }
  ],
  exports: [
    PebRendererComponent
  ],
})
export class PebRendererModule {
  static forRoot(config): ModuleWithProviders<PebRendererModule> {
    return {
      ngModule: PebRendererModule,
      providers: [
        {
          provide: 'RENDERER_CONFIG',
          useValue: config,
        },
      ],
    };
  }
}
