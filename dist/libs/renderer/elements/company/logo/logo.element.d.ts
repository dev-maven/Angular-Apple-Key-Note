import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElement, PebElementStyles, PebElementContext, PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare type LogoContext = PebElementContext<{
    logoUrl: string;
    name: string;
}>;
export declare class PebBusinessLogoElement extends PebAbstractElement {
    element: PebElement;
    styles: PebElementStyles;
    context: LogoContext;
    PebElementContextState: typeof PebElementContextState;
    get elements(): {
        [key: string]: HTMLElement;
    };
    get mappedStyles(): {
        host: {
            position: string;
            color: string | number;
            fontSize: string;
            left: string;
            right: string;
            top: string;
            bottom: string;
        };
    };
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<PebBusinessLogoElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebBusinessLogoElement, "peb-element-business-logo", never, { "element": "element"; "styles": "styles"; "context": "context"; }, {}, never>;
}
