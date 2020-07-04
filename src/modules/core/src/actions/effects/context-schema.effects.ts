import { merge, omit } from 'lodash-es';

import { PebContextSchemaEffect } from '../../models/action';
import { PebContextSchema } from '../../models/client';

export const pebContextSchemaEffectHandlers: {
  [effectName in PebContextSchemaEffect]: (schema: null | PebContextSchema, payload: PebContextSchema | string) => PebContextSchema | null
} = {
  [PebContextSchemaEffect.Init]: pebContextSchemaEffectInitHandler,
  [PebContextSchemaEffect.Update]: pebContextSchemaEffectUpdateHandler,
  [PebContextSchemaEffect.Delete]: pebContextSchemaEffectDeleteHandler,
};

export function pebContextSchemaEffectInitHandler(_: null, payload: PebContextSchema): PebContextSchema {
  return payload;
}

export function pebContextSchemaEffectUpdateHandler(prevSchema: PebContextSchema, payload: PebContextSchema): PebContextSchema {
  return merge({}, prevSchema, payload);
}

export function pebContextSchemaEffectDeleteHandler(prevSchema: PebContextSchema, payload: string): PebContextSchema {
  return null;
}
