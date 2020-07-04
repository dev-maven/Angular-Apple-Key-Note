import { OnInit } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElement, PebElementStyles } from '@pe/builder-core';
import { PebRendererOptions } from '../../../renderer.types';
import * as i0 from "@angular/core";
export declare class PebVideoElement extends PebAbstractElement implements OnInit {
    element: PebElement;
    styles: PebElementStyles;
    options: PebRendererOptions;
    sources: string[];
    videoSettings: {
        autoplay: boolean;
        controls: boolean;
        loop: boolean;
    };
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
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<PebVideoElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebVideoElement, "peb-element-video", never, { "element": "element"; "styles": "styles"; "options": "options"; }, {}, never>;
}
