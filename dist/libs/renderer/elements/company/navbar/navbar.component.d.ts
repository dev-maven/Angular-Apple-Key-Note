import { AfterViewInit, ElementRef, QueryList } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElement, PebElementStyles } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare class PebNavbarElement extends PebAbstractElement implements AfterViewInit {
    element: PebElement;
    styles: PebElementStyles;
    options: PebRendererOptions;
    wrapper: ElementRef;
    mobileButtonWrapper: ElementRef;
    mobileButton: ElementRef;
    mobileButtonLines: QueryList<ElementRef>;
    get elements(): {
        [key: string]: HTMLElement | HTMLElement[];
    };
    get mappedStyles(): {
        host: {
            color: string | number;
            background: string | number;
            fontSize: string;
        };
        wrapper: {
            height: string;
        };
        mobileButtonWrapper: {
            width: string;
        };
        mobileButton: {
            height: string;
        };
        mobileButtonLine: {
            height: string;
            backgroundColor: string | number;
        };
    };
    openMobileMenu(): void;
    redirectTo(url: string): void;
    showDropdown(element: any, route: any): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<PebNavbarElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebNavbarElement, "peb-element-navbar", never, { "element": "element"; "styles": "styles"; "options": "options"; }, {}, never>;
}
