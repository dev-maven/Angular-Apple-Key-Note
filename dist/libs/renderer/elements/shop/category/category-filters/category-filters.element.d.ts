import { AfterViewInit } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { ProductContext } from '../category.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare class PebShopCategoryFiltersElement extends PebAbstractElement implements AfterViewInit {
    context: ProductContext;
    PebElementContextState: typeof PebElementContextState;
    get elements(): {
        [key: string]: HTMLElement | HTMLElement[];
    };
    get mappedStyles(): {
        host: {
            borderColor: string | number;
        };
    };
    onToggleFilter(): void;
    onToggleShownFilters(): void;
    ngAfterViewInit(): void;
    get hostClass(): string;
    static ɵfac: i0.ɵɵFactoryDef<PebShopCategoryFiltersElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebShopCategoryFiltersElement, "peb-element-shop-category-filters", never, { "context": "context"; }, {}, never>;
}
