import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElement, PebElementStyles } from '@pe/builder-core';
import { PebRendererOptions } from '../../../renderer.types';
import * as i0 from "@angular/core";
export declare class PebImageElement extends PebAbstractElement {
    element: PebElement;
    styles: PebElementStyles;
    options: PebRendererOptions;
    get elements(): {
        [key: string]: HTMLElement | HTMLElement[];
    };
    get mappedStyles(): {
        host: {
            position: string;
            color: string | number;
            width: string;
            height: string;
            left: string;
            right: string;
            top: string;
            bottom: string;
            border: string | number;
        };
    };
    static ɵfac: i0.ɵɵFactoryDef<PebImageElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebImageElement, "peb-element-image", never, { "element": "element"; "styles": "styles"; "options": "options"; }, {}, never>;
}
