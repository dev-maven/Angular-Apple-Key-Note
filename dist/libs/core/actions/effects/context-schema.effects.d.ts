import { PebContextSchemaEffect } from '../../models/action';
import { PebContextSchema } from '../../models/client';
export declare const pebContextSchemaEffectHandlers: {
    [effectName in PebContextSchemaEffect]: (schema: null | PebContextSchema, payload: PebContextSchema | string) => PebContextSchema | null;
};
export declare function pebContextSchemaEffectInitHandler(_: null, payload: PebContextSchema): PebContextSchema;
export declare function pebContextSchemaEffectUpdateHandler(prevSchema: PebContextSchema, payload: PebContextSchema): PebContextSchema;
export declare function pebContextSchemaEffectDeleteHandler(prevSchema: PebContextSchema, payload: string): PebContextSchema;
