import { InjectionToken } from '@angular/core';

import { PebActionId } from './action';
import { PebElement, PebElementType } from './element';

export type PebTemplateId = string;
export interface PebTemplate extends PebElement {
  type: PebElementType.Document;
}

export type PebStylesheetId = string;
export interface PebStylesheet {
  [selector: string]: PebElementStyles;
}
export interface PebElementStyles {
  [style: string]: string | number;
}

export type PebContextSchemaId = string;
export interface ContextSchemaItem {
  service: string;
  method: string;
  params: any[];
}
export interface PebContextSchema {
  [key: string]: ContextSchemaItem;
}

export enum PebPageType {
  Master = 'master',
  Replica = 'replica',
}

export enum PebPageVariant {
  Front = 'front',
  Default = 'default',
  Category = 'category',
  Product = 'product',
}

export type PebPageId = string;
export interface PebPage {
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
  template: PebTemplate;
  stylesheets: {
    [screen: string]: PebStylesheet;
  };
  context: PebContextSchema;
}

export type PebShopId = string;
export interface PebShop {
  id: PebShopId;
  data: {
    frontPageId: PebPageId;
  };
  routing: {
    [url: string]: PebPageId;
  };
  context: PebContextSchema;
  pages: PebPage[];
}

// TODO: move to a more suitable location
export enum ContextService {
  Company = 'company',
  Products = 'products',
  Shipments = 'shipments',
}

// TODO: move to a more suitable location
export const CONTEXT_SERVICES = {
  [ContextService.Company]: new InjectionToken<any>('ContextServices.Company'),
  [ContextService.Products]: new InjectionToken<any>('ContextServices.Products'),
  [ContextService.Shipments]: new InjectionToken<any>('ContextServices.Shipments'),
};
