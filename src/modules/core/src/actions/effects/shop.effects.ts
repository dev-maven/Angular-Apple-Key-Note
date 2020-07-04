import { PebShopEffect } from '../../models/action';
import { PebPageId } from '../../models/client';
import { PebShopShort } from '../../models/editor';

export const pebShopEffectHandlers: {
  [effectName in PebShopEffect]: (prevShop: null | PebShopShort, payload: any) => PebShopShort
} = {
  [PebShopEffect.Init]: pebShopEffectCreateHandler,
  [PebShopEffect.UpdateData]: pebShopEffectUpdateDataHandler,
  [PebShopEffect.UpdatePages]: pebShopEffectUpdatePagesHandler,
  [PebShopEffect.AppendPage]: pebShopEffectAppendPagesHandler,
  [PebShopEffect.DeletePage]: pebShopEffectAppendPagesHandler,
};

export function pebShopEffectCreateHandler(prevShop: null, payload: PebShopShort): PebShopShort {
  return payload;
}
export function pebShopEffectUpdateDataHandler(prevShop: PebShopShort, payload: { [key: string]: any }): PebShopShort {
  // debugger;
  return {
    ...prevShop,
    data: {
      ...prevShop.data,
      ...payload,
    },
  };
}
export function pebShopEffectUpdatePagesHandler(prevShop: PebShopShort, payload: PebPageId[]): PebShopShort {
  return {
    ...prevShop,
    pageIds: payload,
  };
}

export function pebShopEffectAppendPagesHandler(prevShop: PebShopShort, payload: PebPageId): PebShopShort {
  return {
    ...prevShop,
    pageIds: [...prevShop.pageIds, payload],
  };
}

export function pebShopEffectDeletePagesHandler(prevShop: PebShopShort, payload: PebPageId): PebShopShort {
  return {
    ...prevShop,
    pageIds: prevShop.pageIds.filter(id => id !== payload),
  };
}
