import { ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { Product } from '../../../renderer.types';
import { PebElementStyles, PebElement, PebElementContext, PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
interface ShopCategory extends PebElement {
    variant: 'link' | 'purchase';
}
interface ShopCategoryFilter {
    name: string;
    active: boolean;
    disabled: boolean;
    children: ShopCategoryFilter[];
}
interface ProductElementData {
    title: string;
    image: string;
    shownFilters: boolean;
    filters: ShopCategoryFilter[];
    products: Product[];
}
export declare type ProductContext = PebElementContext<ProductElementData>;
export declare class PebShopCategoryElement extends PebAbstractElement implements AfterViewInit {
    element: ShopCategory;
    styles: PebElementStyles;
    context: ProductContext;
    headerRef: ElementRef;
    navbarRef: ElementRef;
    filtersRef: ElementRef;
    productsGridRef: ElementRef;
    productElements: QueryList<ElementRef>;
    PebElementContextState: typeof PebElementContextState;
    onToggleShownFilters(): void;
    onToggleFilter(value: any): void;
    onProductClick(): void;
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
            background: string;
            color: string;
        };
        header: {
            height: string;
            fontSize: string;
        };
        navbar: {
            background: string;
            borderColor: string | number;
            height: string;
            fontSize: string;
        };
        filters: {
            display: string;
            fontSize: string;
        };
        productsGrid: {
            gridTemplateColumns: string;
            boxShadow: string;
        };
        products: {
            height: string;
            fontSize: string;
        };
    };
    get hostClass(): string;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<PebShopCategoryElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebShopCategoryElement, "peb-element-shop-category", never, { "element": "element"; "styles": "styles"; "context": "context"; }, {}, never>;
}
export {};
