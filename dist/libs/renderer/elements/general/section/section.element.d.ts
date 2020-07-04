import { ElementRef } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElement, PebElementStyles } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare class PebSectionElement extends PebAbstractElement {
    element: PebElement;
    styles: PebElementStyles;
    wrapperEl: ElementRef;
    get elements(): {
        [key: string]: HTMLElement;
    };
    get mappedStyles(): {
        host: {
            position: string;
            padding: string | number;
            margin: string | number;
            width: string;
            height: string;
            backgroundImage: string;
            backgroundSize: string | number;
            backgroundPosition: string | number;
            backgroundRepeat: string | number;
            backgroundColor: string | number;
        };
        wrapper: {
            width: string;
        };
    };
    static ɵfac: i0.ɵɵFactoryDef<PebSectionElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebSectionElement, "peb-element-section", never, { "element": "element"; "styles": "styles"; }, {}, never>;
}
