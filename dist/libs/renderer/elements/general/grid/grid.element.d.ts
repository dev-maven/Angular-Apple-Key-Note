import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererChildrenSlotDirective } from '../../../selectors/children-slot.directive';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElementStyles, PebElement } from '@pe/builder-core';
import * as i0 from "@angular/core";
export interface GridStyles extends PebElementStyles {
    display: 'horizontal' | 'vertical';
    cells: string;
    height?: number;
    gridGap: number;
}
export declare class PebGridElement extends PebAbstractElement {
    element: PebElement;
    styles: GridStyles;
    options: PebRendererOptions;
    slots: PebRendererChildrenSlotDirective;
    get elements(): {
        [key: string]: HTMLElement;
    };
    get cells(): string[];
    get mappedStyles(): {
        host: {
            display: string;
            margin: string;
            gridTemplateColumns: any;
            gridTemplateRows: any;
            gridGap: string;
        };
    };
    static ɵfac: i0.ɵɵFactoryDef<PebGridElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebGridElement, "peb-element-grid", never, { "element": "element"; "styles": "styles"; "options": "options"; }, {}, never>;
}
