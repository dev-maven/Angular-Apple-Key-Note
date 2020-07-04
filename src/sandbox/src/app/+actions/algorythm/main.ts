// import { merge } from 'lodash-es';
// import { PebAction, PebPageEntity, PebShopSnapshot } from './source.interfaces';
// import {
//   PebContextSchema, PebContextSchemaId,
//   PebDocument,
//   PebLayoutId, PebPage,
//   PebPageId, PebShop,
//   PebStylesheet,
//   PebStylesheetId
// } from './result.interfaces';
// import { pebShopEffectHandlers, shopScopeName } from '../../../../../modules/core/src/actions/effects/shop';
// import { pagesScopeName,  pebPageEffectHandler } from '../../../../../modules/core/src/actions/effects/page';
// import { layoutsScopeName, pebLayoutEffectHandlers } from '../../../../../modules/core/src/actions/effects/layout';
// import { pebStylesheetEffectHandlers, stylesheetsScopeName } from '../../../../../modules/core/src/actions/effects/stylesheet';
// import { contextSchemaScopeName, pebContextSchemaEffectHandlers } from '../../../../../modules/core/src/actions/effects/context-schema';
//
// const createInitialShopSnapshot = (): PebShopSnapshot => ({
//   // TODO: is hash needed???
//
//   shop: null,
//   pages: new Map<PebPageId, PebPageEntity>(),
//   layouts: new Map<PebLayoutId, PebDocument>(),
//   stylesheets: new Map<PebStylesheetId, PebStylesheet>(),
//   contexts: new Map<PebContextSchemaId, PebContextSchema>()
// });
//
// const effectHandlers = {
//   ...pebShopEffectHandlers,
//   ...pebPageEffectHandler,
//   ...pebLayoutEffectHandlers,
//   ...pebStylesheetEffectHandlers,
//   ...pebContextSchemaEffectHandlers,
// };
//
// export function pebActionHandler(input: PebShopSnapshot, action: PebAction): PebShopSnapshot {
//   return action.effects.reduce((prevState, effect) => {
//     const [areaName, areaId] = effect.target.split(':');
//     const handler = effectHandlers[effect.type];
//
//     if (!handler) {
//       throw new Error('Invalid effect type');
//     }
//
//     const collectionNames = [pagesScopeName, layoutsScopeName, stylesheetsScopeName, contextSchemaScopeName];
//
//     // TODO: Check if Maps are deeply copied
//     if (areaName === 'shop') {
//       return merge(
//         {},
//         prevState,
//         { shop: handler(prevState.shop as any, effect.payload) }
//       );
//     } else if (collectionNames.includes(areaName)){
//       const nextArea = new Map(prevState[areaName]);
//
//       const prevUnit = prevState[areaName].get(areaId) || null;
//       const nextUnit = handler(prevUnit, effect.payload);
//
//       Boolean(nextUnit)
//         ? nextArea.set(areaId, nextUnit)
//         : nextArea.delete(areaId);
//
//       return merge({}, prevState, { [areaName]: nextArea });
//     }
//
//     throw new Error('Invalid effect target');
//   }, input);
// }
//
// export const pebCompileActions = (actions: PebAction[]) => actions.reduce(pebActionHandler, createInitialShopSnapshot());
//
// // TODO: Fix this
// export function snapshotToSource(input: PebShopSnapshot): PebShop {
//   return {
//     id: 'tbd!',
//     data: input.shop.data,
//     routing: {},
//     context: input.contexts.get('SHOP'),
//     pages: input.shop.pages.map(pid => {
//       const pageEntity: PebPageEntity = input.pages.get(pid);
//
//       return {
//         id: pid,
//         data: input.pages.get(pid).data,
//         layout: input.layouts.get(pageEntity.layout),
//         stylesheets: (Object as any).fromEntries(Object
//           .entries(pageEntity.stylesheets)
//           .map(
//             ([screen, sid]) => [screen, input.stylesheets.get(sid)]
//           )),
//         context: input.contexts.get(pageEntity.context),
//       } as any as PebPage;
//     }),
//   };
// }
