import { ElementRef, AfterViewInit } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { Product } from '../../../../renderer.types';
import { PebElementContextState, PebElementContext } from '@pe/builder-core';
import * as i0 from "@angular/core";
declare type CategoryProductContext = PebElementContext<Product>;
export declare class PebShopCategoryProductElement extends PebAbstractElement implements AfterViewInit {
    context: CategoryProductContext;
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
    static ɵfac: i0.ɵɵFactoryDef<PebShopCategoryProductElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebShopCategoryProductElement, "peb-element-shop-category-product", never, { "context": "context"; }, {}, never>;
}
export {};
