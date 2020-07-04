import { ContextSchemaItem, PebContextSchema, PebElementStyles } from '../models/client';
import { PebElement, PebElementType } from '../models/element';
declare type ElementPayload = Partial<PebElement> & ({
    type: PebElementType;
});
export interface PebElementKit {
    element: PebElement;
    styles: {
        [screenId: string]: PebElementStyles;
    };
    contextSchema: PebContextSchema;
}
export declare const pebCreateElementKit: (elementPayload: ElementPayload, styles?: {
    [screen: string]: PebElementStyles;
}, contextItem?: ContextSchemaItem) => PebElementKit;
export {};
