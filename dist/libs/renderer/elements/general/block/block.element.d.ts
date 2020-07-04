import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElementStyles, PebElement } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare class PebBlockElement extends PebAbstractElement {
    element: PebElement;
    styles: PebElementStyles;
    options: PebRendererOptions;
    get elements(): {
        [key: string]: HTMLElement;
    };
    get mappedStyles(): {
        host: {
            position: string;
            width: string;
            height: string;
            backgroundColor: string;
        };
    };
    static ɵfac: i0.ɵɵFactoryDef<PebBlockElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebBlockElement, "peb-element-block", never, { "element": "element"; "styles": "styles"; "options": "options"; }, {}, never>;
}
