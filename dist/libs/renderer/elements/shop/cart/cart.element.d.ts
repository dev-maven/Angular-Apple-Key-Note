import { PebAbstractElement } from '../../_abstract/abstract.element';
import { Product } from '../../../renderer.types';
import { PebElement, PebElementStyles, PebElementContext, PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
declare type CartContext = PebElementContext<{
    count: number;
    product: Product;
}[]>;
export declare class PebShopCartElement extends PebAbstractElement {
    element: PebElement;
    styles: PebElementStyles;
    context: CartContext;
    PebElementContextState: typeof PebElementContextState;
    onOpenCart(): void;
    get elements(): {
        [key: string]: HTMLElement;
    };
    get mappedStyles(): {
        host: {
            color: string | number;
            fontSize: string;
        };
    };
    get totalItems(): number;
    get totalAmount(): number;
    static ɵfac: i0.ɵɵFactoryDef<PebShopCartElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebShopCartElement, "peb-element-shop-cart", never, { "element": "element"; "styles": "styles"; "context": "context"; }, {}, never>;
}
export {};
