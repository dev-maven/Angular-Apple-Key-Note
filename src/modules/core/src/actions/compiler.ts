import { omit } from 'lodash-es';

import { PebAction, PebEffectTarget } from '../models/action';
import { PebShopThemeSnapshotEntity } from '../models/database';
import { pebContextSchemaEffectHandlers } from './effects/context-schema.effects';
import { pebPageEffectHandler } from './effects/page.effects';
import { pebShopEffectHandlers } from './effects/shop.effects';
import { pebStylesheetEffectHandlers } from './effects/stylesheet.effects';
import { pebLayoutEffectHandlers } from './effects/template.effects';

const createInitialShopSnapshot = (): PebShopThemeSnapshotEntity => ({
  // TODO: is hash needed???
  id: null,
  shop: null,
  pages: {},
  templates: {},
  stylesheets: {},
  contextSchemas: {},
});

const effectHandlers = {
  ...pebShopEffectHandlers,
  ...pebPageEffectHandler,
  ...pebLayoutEffectHandlers,
  ...pebStylesheetEffectHandlers,
  ...pebContextSchemaEffectHandlers,
};

export function pebActionHandler(input: PebShopThemeSnapshotEntity, action: PebAction): PebShopThemeSnapshotEntity {
  return action.effects.reduce((prevState, effect) => {
    const [areaName, areaId] = effect.target.split(':') as [ string, string ];
    const handler = effectHandlers[effect.type];

    if (!handler) {
      throw new Error('Invalid effect type');
    }

    const collectionNames = Object.values(PebEffectTarget) as string[];

    // TODO: Check if Maps are deeply copied
    if (areaName === PebEffectTarget.Shop) {
      // debugger;
      return {
        ...prevState,
        shop: handler(prevState.shop as any, effect.payload),
      } as any; // FIXME: Type??
    } else if (collectionNames.includes(areaName)) {
      const prevUnit = prevState[areaName][areaId] || null;
      const nextUnit = handler(prevUnit, effect.payload);

      const nextArea = Boolean(nextUnit)
        ? { ...prevState[areaName], [areaId]: nextUnit }
        : omit(prevState[areaName], areaId) as any;

      return {
        ...prevState,
        [areaName]: nextArea,
      };
    }

    throw new Error('Invalid effect target');
  }, input);
}

export const pebCompileActions = (actions: PebAction[]): PebShopThemeSnapshotEntity =>
  actions.reduce(pebActionHandler, createInitialShopSnapshot());
