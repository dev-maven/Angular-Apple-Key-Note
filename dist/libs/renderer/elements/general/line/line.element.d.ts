import { AfterViewInit, OnInit } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElement, PebStyles } from '../../../core.types';
import { PebRendererOptions } from '../../../renderer.types';
import * as i0 from "@angular/core";
export declare class PebLineElement extends PebAbstractElement implements OnInit, AfterViewInit {
    element: PebElement;
    styles: PebStyles;
    options: PebRendererOptions;
    get elements(): {
        [key: string]: HTMLElement;
    };
    get mappedStyles(): {
        host: {
            position: string;
            width: string;
            height: string;
            backgroundColor: string | number;
            color: string | number;
            fontSize: string;
            margin: string | number;
            boxShadow: string | number;
            opacity: string | number;
            transform: string | number;
            top: string | number;
            float: string | number;
        };
    };
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<PebLineElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebLineElement, "peb-element-line", never, { "element": "element"; "styles": "styles"; "options": "options"; }, {}, never>;
}
