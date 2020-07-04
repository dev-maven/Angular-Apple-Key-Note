import { PebShopEffect } from '../../models/action';
import { PebPageId } from '../../models/client';
import { PebShopShort } from '../../models/editor';
export declare const pebShopEffectHandlers: {
    [effectName in PebShopEffect]: (prevShop: null | PebShopShort, payload: any) => PebShopShort;
};
export declare function pebShopEffectCreateHandler(prevShop: null, payload: PebShopShort): PebShopShort;
export declare function pebShopEffectUpdateDataHandler(prevShop: PebShopShort, payload: {
    [key: string]: any;
}): PebShopShort;
export declare function pebShopEffectUpdatePagesHandler(prevShop: PebShopShort, payload: PebPageId[]): PebShopShort;
export declare function pebShopEffectAppendPagesHandler(prevShop: PebShopShort, payload: PebPageId): PebShopShort;
export declare function pebShopEffectDeletePagesHandler(prevShop: PebShopShort, payload: PebPageId): PebShopShort;
