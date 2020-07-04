import { PebPageEffect } from '../../models/action';
import { PebPageShort } from '../../models/editor';
export declare const pebPageEffectHandler: {
    [effectName in PebPageEffect]: (page: null | PebPageShort, payload: any) => PebPageShort | null;
};
export declare function pebPageEffectCreateHandler(_: null, payload: PebPageShort): PebPageShort;
export declare function pebPageEffectUpdateDataHandler(prevPage: PebPageShort, payload: any): PebPageShort;
export declare function pebPageEffectDeleteHandler(prevPage: PebPageShort, payload: any): null;
