import { PebAction, PebActionId } from './action';
import {
  PebContextSchema,
  PebContextSchemaId,
  PebPageId, PebPageType, PebPageVariant,
  PebShop, PebShopId,
  PebStylesheet,
  PebStylesheetId,
  PebTemplate,
  PebTemplateId,
} from './client';

export type PebShopThemeId = string;
export interface PebShopTheme {
  id: PebShopThemeId;
  name: string;
  preview: string;
  source: PebShopThemeSource;
  versions: PebShopThemeVersion[];
  published: null | PebShopThemeVersion;
  // other meta info like businessId, shopId, etc
}

export type PebShopThemeVersionId = string;
export interface PebShopThemeVersion {
  id: PebShopThemeVersionId;
  name: string;
  source: PebShopThemeSource;
  result: PebShop;
  createdAt: Date;
}

export type PebShopThemeSourceId = string;
export interface PebShopThemeSource {
  id: PebShopThemeSourceId;
  actions: PebAction[];
  snapshot: PebShopThemeSnapshot;
}

export type PebShopThemeSnapshotId = string;
export interface PebShopThemeSnapshot {
  id: PebShopThemeSnapshotId;
  shop: {
    frontPageId: PebPageId,
  };
  // shop: {
  //   frontPageId: PebPageId;
  // },
  pageIds: {
    [key: string/*PebPageId*/]: PebPageShort
  };
  templateIds: {
    [key: string/*PebTemplateId*/]: PebTemplate
  };
  stylesheetIds: {
    [key: string/*PebStylesheetId*/]: PebStylesheet
  };
  contextSchemaIds: {
    [key: string/*PebContextSchemaId*/]: PebContextSchema
  };
}

export interface PebShopShort {
  id: PebShopId; // shop theme id??
  data: {
    frontPageId: PebPageId;
    [key: string]: any;
  };
  contextId: PebContextSchemaId;
  pageIds: PebPageId[];
}

export interface PebPageShort {
  id: PebPageId;
  name: string;
  variant: PebPageVariant;
  type: PebPageType;
  master: null | {
    id: PebPageId,
    lastActionId: PebActionId
  };
  data: {
    url?: string;
    mark?: string;
    preview?: string;
  };
  templateId: PebTemplateId;
  stylesheetIds: {
    [screen: string]: PebStylesheetId;
  };
  contextId: PebContextSchemaId;
}
