import { PebAction } from './action';
import { PebContextSchema, PebPage, PebPageId, PebShop, PebShopId, PebStylesheet, PebTemplate } from './client';
import {
  PebPageShort,
  PebShopThemeId,
  PebShopThemeSnapshotId,
  PebShopThemeSourceId,
  PebShopThemeVersionId,
} from './editor';

//
// Data structures required by editor
//
export interface PebShopThemeEntity {
  id: PebShopThemeId;
  name: string;
  picture: string;
  sourceId: PebShopThemeSourceId;
  versionsIds: PebShopThemeVersionId[];
  publishedId: null | PebShopThemeVersionId;
}

export interface PebShopThemeVersionEntity {
  id: PebShopThemeVersionId;
  name: string;
  sourceId: PebShopThemeSourceId;
  result: PebShop;
  createdAt: Date;
}

export interface PebShopThemeSourceEntity {
  id: PebShopThemeSourceId;
  actions: PebAction[];
  snapshotId: PebShopThemeSnapshotId;
}

export interface PebShopThemeSnapshotEntity {
  id: PebShopThemeSnapshotId;
  shop: {
    frontPageId: PebPageId;
  };
  pages: {
    [key: string]: PebPageShort
  };
  templates: {
    [key: string]: PebTemplate
  };
  stylesheets: {
    [key: string]: PebStylesheet
  };
  contextSchemas: {
    [key: string]: PebContextSchema
  };
}

//
// Data required by shop client to actually render shop
//
export interface PebShopEntity {
  id: PebShopId;
  frontPage: PebPageId;
  routing: {
    [url: string]: PebPageId;
  };
  context: PebContextSchema;
  pages: PebPageId[];
}

export type PebPageEntity = PebPage;
