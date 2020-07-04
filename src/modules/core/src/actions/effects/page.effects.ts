import { PebPageEffect } from '../../models/action';
import { PebPageShort } from '../../models/editor';

export const pebPageEffectHandler: {
  [effectName in PebPageEffect]: (page: null | PebPageShort, payload: any) => PebPageShort | null
} = {
  [PebPageEffect.Create]: pebPageEffectCreateHandler,
  [PebPageEffect.UpdateData]: pebPageEffectUpdateDataHandler,
  [PebPageEffect.Delete]: pebPageEffectDeleteHandler,
};

export function pebPageEffectCreateHandler(_: null, payload: PebPageShort): PebPageShort {
  return payload;
}

export function pebPageEffectUpdateDataHandler(prevPage: PebPageShort, payload: any): PebPageShort {
  return {
    ...prevPage,
    data: { ...prevPage.data, ...payload },
  };
}

export function pebPageEffectDeleteHandler(prevPage: PebPageShort, payload: any): null {
  return null;
}
