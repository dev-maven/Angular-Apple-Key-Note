import { ContextSchemaItem, PebContextSchema, PebElementStyles } from '../models/client';
import { PebElement, PebElementType } from '../models/element';
import { pebGenerateId } from '../utils/generate-id';

type ElementPayload = Partial<PebElement> & ({ type: PebElementType });

export interface PebElementKit {
  element: PebElement;
  styles: { [screenId: string]: PebElementStyles };
  contextSchema: PebContextSchema;
}

// TODO: Delete after 25.04 if not used
export const pebCreateElementKit = (
  elementPayload: ElementPayload,
  styles?: { [screen: string]: PebElementStyles },
  contextItem?: ContextSchemaItem,
): PebElementKit => {
  const element = {
    ...elementPayload,
    id: pebGenerateId(),
  };

  return {
    element,
    styles,
    contextSchema: {
      [element.id]: contextItem,
    },
  };
};
