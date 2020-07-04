import { InjectionToken } from '@angular/core';
import { PebActionId } from './action';
import { PebElement, PebElementType } from './element';
export declare type PebTemplateId = string;
export interface PebTemplate extends PebElement {
    type: PebElementType.Document;
}
export declare type PebStylesheetId = string;
export interface PebStylesheet {
    [selector: string]: PebElementStyles;
}
export interface PebElementStyles {
    [style: string]: string | number;
}
export declare type PebContextSchemaId = string;
export interface ContextSchemaItem {
    service: string;
    method: string;
    params: any[];
}
export interface PebContextSchema {
    [key: string]: ContextSchemaItem;
}
export declare enum PebPageType {
    Master = "master",
    Replica = "replica"
}
export declare enum PebPageVariant {
    Front = "front",
    Default = "default",
    Category = "category",
    Product = "product"
}
export declare type PebPageId = string;
export interface PebPage {
    id: PebPageId;
    name: string;
    variant: PebPageVariant;
    type: PebPageType;
    master: null | {
        id: PebPageId;
        lastActionId: PebActionId;
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
export declare type PebShopId = string;
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
export declare enum ContextService {
    Company = "company",
    Products = "products",
    Shipments = "shipments"
}
export declare const CONTEXT_SERVICES: {
    [ContextService.Company]: InjectionToken<any>;
    [ContextService.Products]: InjectionToken<any>;
    [ContextService.Shipments]: InjectionToken<any>;
};
