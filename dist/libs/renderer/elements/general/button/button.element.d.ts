import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElement, PebElementStyles } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare class PebButtonElement extends PebAbstractElement {
    element: PebElement;
    styles: PebElementStyles;
    options: PebRendererOptions;
    get elements(): {
        [key: string]: HTMLElement;
    };
    get mappedStyles(): any;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<PebButtonElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebButtonElement, "peb-element-button", never, { "element": "element"; "styles": "styles"; "options": "options"; }, {}, never>;
}
