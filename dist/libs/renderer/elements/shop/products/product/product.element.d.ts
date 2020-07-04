import { ElementRef, AfterViewInit } from '@angular/core';
import { Product } from '../../../../renderer.types';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState, PebElementContext } from '@pe/builder-core';
import * as i0 from "@angular/core";
declare type ProductContext = PebElementContext<Product>;
export declare class PebShopProductElement extends PebAbstractElement implements AfterViewInit {
    context: ProductContext;
    imageRef: ElementRef;
    PebElementContextState: typeof PebElementContextState;
    get elements(): {
        [key: string]: HTMLElement | HTMLElement[];
    };
    get mappedStyles(): {
        host: {};
        image: {
            backgroundImage: string;
        };
    };
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<PebShopProductElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebShopProductElement, "peb-element-shop-product", never, { "context": "context"; }, {}, never>;
}
export {};
