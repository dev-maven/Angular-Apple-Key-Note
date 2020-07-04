import { PebScreen } from '../constants';
import {
  PebAction,
  PebContextSchemaEffect,
  PebEffectTarget,
  PebPageEffect,
  PebShopEffect,
  PebStylesheetEffect,
  PebTemplateEffect,
} from '../models/action';
import { PebShop } from '../models/client';
import { pebGenerateId } from '../utils/generate-id';

// TODO: Properly handle shop with multiple pages
export const pebCreateShopInitAction = (shop: PebShop): PebAction => {
  const page = shop.pages[0];

  const shopContextId = pebGenerateId('context');

  const pageTemplateId = pebGenerateId('template');
  const stylesIds = {
    [PebScreen.Desktop]: pebGenerateId('stylesheet'),
    [PebScreen.Tablet]: pebGenerateId('stylesheet'),
    [PebScreen.Mobile]: pebGenerateId('stylesheet'),
  };
  const pageContextId = pebGenerateId('context');

  return {
    id: pebGenerateId('action'),
    createdAt: new Date(),
    effects: [
      {
        type: PebTemplateEffect.Init,
        target: `${PebEffectTarget.Templates}:${pageTemplateId}`,
        payload: page.template,
      },
      ...Object.values(PebScreen).map(screen => ({
        type: PebStylesheetEffect.Init,
        target: `${PebEffectTarget.Stylesheets}:${stylesIds[screen]}`,
        payload: page.stylesheets[screen],
      })),
      {
        type: PebContextSchemaEffect.Init,
        target: `${PebEffectTarget.ContextSchemas}:${pageContextId}`,
        payload: page.context,
      },
      {
        type: PebPageEffect.Create,
        target: `${PebEffectTarget.Pages}:${page.id}`,
        payload: {
          id: page.id,
          type: page.type,
          variant: page.variant,
          master: page.master,
          name: page.name,
          data: page.data,
          templateId: pageTemplateId,
          stylesheetIds: {
            [PebScreen.Desktop]: `${stylesIds[PebScreen.Desktop]}`,
            [PebScreen.Tablet]: `${stylesIds[PebScreen.Tablet]}`,
            [PebScreen.Mobile]: `${stylesIds[PebScreen.Mobile]}`,
          },
          contextId: `${pageContextId}`,
        },
      },
      {
        type: PebContextSchemaEffect.Init,
        target: `${PebEffectTarget.ContextSchemas}:${shopContextId}`,
        payload: {},
      },
      {
        type: PebShopEffect.Init,
        target: PebEffectTarget.Shop,
        payload: {
          data: {
            frontPageId: page.id,
          },
          contextId: shopContextId,
          pageIds: [page.id],
        },
      },
    ],
  };
};
