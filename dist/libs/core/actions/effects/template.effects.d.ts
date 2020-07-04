import { PebTemplateEffect } from '../../models/action';
import { PebTemplate } from '../../models/client';
import { PebElement } from '../../models/element';
export declare const layoutsScopeName = "layouts";
export interface PebAppendElementPayload {
    to: string;
    after?: string;
    element: PebElement;
}
export declare const pebLayoutEffectHandlers: {
    [effectName in PebTemplateEffect]: (prevLayout: null | PebTemplate, payload: any) => PebTemplate | null;
};
export declare function pebLayoutInitHandler(prevLayout: null, payload: PebTemplate): PebTemplate;
export declare function pebLayoutDestroyHandler(prevLayout: null | PebTemplate): any;
export declare function pebLayoutAppendElementHandler(prevLayout: PebTemplate, payload: PebAppendElementPayload): PebTemplate;
export declare function pebLayoutUpdateElementHandler(prevLayout: PebTemplate, payload: any): PebTemplate;
export declare function pebLayoutRelocateElementHandler(prevLayout: PebTemplate, payload: any): PebTemplate;
export declare function pebLayoutDeleteElementHandler(prevLayout: PebTemplate, payload: string): PebTemplate;
