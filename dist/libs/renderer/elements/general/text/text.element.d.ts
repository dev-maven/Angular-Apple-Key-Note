import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElement, PebElementContext } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare class PebTextElement extends PebAbstractElement {
    element: PebElement;
    context: PebElementContext<any>;
    options: PebRendererOptions;
    get elements(): {
        host: any;
    };
    get mappedStyles(): {
        host: {
            width: any;
            position: string;
            display: string;
            margin: string;
            color: any;
            fontSize: string;
            fontWeight: any;
            textAlign: any;
        };
    };
    static ɵfac: i0.ɵɵFactoryDef<PebTextElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebTextElement, "peb-element-text", never, { "element": "element"; "context": "context"; "options": "options"; }, {}, never>;
}
