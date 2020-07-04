import { merge } from 'lodash-es';

import { PebStylesheetEffect } from '../../models/action';
import { PebStylesheet } from '../../models/client';

export const pebStylesheetEffectHandlers: {
  [effectName in PebStylesheetEffect]: (
    stylesheet: null | PebStylesheet,
    payload: PebStylesheet | string,
  ) => PebStylesheet | null
} = {
  [PebStylesheetEffect.Init]: pebStylesheetInitHandler,
  [PebStylesheetEffect.Update]: pebStylesheetUpdateHandler,
  [PebStylesheetEffect.Delete]: pebStylesheetDeleteHandler,
};

export function pebStylesheetInitHandler(_: null, payload: PebStylesheet): PebStylesheet {
  return payload;
}

export function pebStylesheetUpdateHandler(prevState: PebStylesheet, payload: PebStylesheet): PebStylesheet {
  return merge(
    {},
    prevState,
    payload,
  );
}

export function pebStylesheetDeleteHandler(): PebStylesheet {
  return null;
}
