import { PebStylesheetEffect } from '../../models/action';
import { PebStylesheet } from '../../models/client';
export declare const pebStylesheetEffectHandlers: {
    [effectName in PebStylesheetEffect]: (stylesheet: null | PebStylesheet, payload: PebStylesheet | string) => PebStylesheet | null;
};
export declare function pebStylesheetInitHandler(_: null, payload: PebStylesheet): PebStylesheet;
export declare function pebStylesheetUpdateHandler(prevState: PebStylesheet, payload: PebStylesheet): PebStylesheet;
export declare function pebStylesheetDeleteHandler(): PebStylesheet;
