import { ElementRef, AfterViewInit } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { ProductContext } from '../category.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare class PebShopCategoryHeaderElement extends PebAbstractElement implements AfterViewInit {
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
        image: {
            backgroundImage: string;
        };
    };
    ngAfterViewInit(): void;
    get hostClass(): string;
    static ɵfac: i0.ɵɵFactoryDef<PebShopCategoryHeaderElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebShopCategoryHeaderElement, "peb-element-shop-category-header", never, { "context": "context"; }, {}, never>;
}
