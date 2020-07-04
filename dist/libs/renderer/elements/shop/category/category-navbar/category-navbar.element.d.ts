import { ElementRef, AfterViewInit } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { ProductContext } from '../category.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare class PebShopCategoryNavbarElement extends PebAbstractElement implements AfterViewInit {
    context: ProductContext;
    imageRef: ElementRef;
    PebElementContextState: typeof PebElementContextState;
    get elements(): {
        [key: string]: HTMLElement | HTMLElement[];
    };
    get mappedStyles(): {
        host: {
            borderColor: string | number;
        };
    };
    onToggleShownFilters(): void;
    ngAfterViewInit(): void;
    get hostClass(): string;
    static ɵfac: i0.ɵɵFactoryDef<PebShopCategoryNavbarElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebShopCategoryNavbarElement, "peb-element-shop-category-navbar", never, { "context": "context"; }, {}, never>;
}
