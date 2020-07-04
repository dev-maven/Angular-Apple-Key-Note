import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElement } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare class PebDocumentElement extends PebAbstractElement {
    element: PebElement;
    context: null;
    options: PebRendererOptions;
    protected get elements(): {
        host: any;
    };
    protected get mappedStyles(): {
        host: {};
    };
    applyStyles(): void;
    static ɵfac: i0.ɵɵFactoryDef<PebDocumentElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebDocumentElement, "peb-element-document", never, { "element": "element"; "context": "context"; "options": "options"; }, {}, never>;
}
