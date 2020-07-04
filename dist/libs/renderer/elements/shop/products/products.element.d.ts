import { QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { Product } from '../../../renderer.types';
import { PebElement, PebElementStyles, PebElementContextState, PebElementContext } from '@pe/builder-core';
import * as i0 from "@angular/core";
interface ProductElement extends PebElement {
    variant: 'link' | 'purchase';
}
declare type ProductsContext = PebElementContext<Product[]>;
export declare class PebShopProductsElement extends PebAbstractElement implements AfterViewInit {
    element: ProductElement;
    styles: PebElementStyles;
    context: ProductsContext;
    productsGridRef: ElementRef;
    productElements: QueryList<ElementRef>;
    PebElementContextState: typeof PebElementContextState;
    get elements(): {
        [key: string]: HTMLElement | HTMLElement[];
    };
    get mappedStyles(): {
        host: {
            position: string;
            width: string;
            height: string;
            left: string;
            top: string;
        };
        products: {
            width: string;
            height: string;
        };
        productsGrid: {
            gridTemplateColumns: string;
        };
    };
    addToCart(): void;
    get hostClass(): string;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<PebShopProductsElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebShopProductsElement, "peb-element-shop-products", never, { "element": "element"; "styles": "styles"; "context": "context"; }, {}, never>;
}
export {};
