// import {
//   PebContextSchema,
//   PebContextSchemaId,
//   PebDocument,
//   PebLayoutId,
//   PebPageData,
//   PebPageId,
//   PebShopId,
//   PebStylesheet,
//   PebStylesheetId,
//   UniqueId,
// } from './result.interfaces';
// import { PebShopEffect } from '../../../../../modules/core/src/actions/effects/shop.effects';
// import { PebPageEffect } from '../../../../../modules/core/src/actions/effects/page.effects';
// import { PebLayoutEffect } from '../../../../../modules/core/src/actions/effects/template.effects';
// import { PebStylesheetEffect } from '../../../../../modules/core/src/actions/effects/stylesheet.effects';
// import { PebContextSchemaEffect } from '../../../../../modules/core/src/actions/effects/context-schema.effects';
//
// // TODO: Think about consistent naming
// export interface PebShopEntity {
//   id: PebShopId;
//   data: { [key: string]: any };
//   context: PebContextSchemaId;
//   pages: PebPageId[];
// }
//
// export interface PebPageEntity {
//   data: PebPageData;
//   layout: PebLayoutId;
//   stylesheets: {
//     [screen: string]: PebStylesheetId;
//   };
//   context: PebContextSchemaId;
// }
//
// export interface PebShopSnapshot {
//   shop: PebShopEntity;
//   pages: Map<PebPageId, PebPageEntity>;
//   layouts: Map<PebLayoutId, PebDocument>;
//   stylesheets: Map<PebStylesheetId, PebStylesheet>;
//   contexts: Map<PebContextSchemaId, PebContextSchema>;
// }
//
// // TODO: Add payload type for each effect
// export interface PebEffect {
//   type: PebShopEffect|PebPageEffect|PebLayoutEffect|PebStylesheetEffect|PebContextSchemaEffect;
//   target: string; // format: entityType:entityId
//   payload: any;
// }
//
// export interface PebAction {
//   id: UniqueId;
//   effects: PebEffect[];
//   timestamp: number;
// }
