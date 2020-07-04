import { PebAction, PebActionId } from './action';
import { PebContextSchema, PebContextSchemaId, PebPageId, PebPageType, PebPageVariant, PebShop, PebShopId, PebStylesheet, PebStylesheetId, PebTemplate, PebTemplateId } from './client';
export declare type PebShopThemeId = string;
export interface PebShopTheme {
    id: PebShopThemeId;
    name: string;
    preview: string;
    source: PebShopThemeSource;
    versions: PebShopThemeVersion[];
    published: null | PebShopThemeVersion;
}
export declare type PebShopThemeVersionId = string;
export interface PebShopThemeVersion {
    id: PebShopThemeVersionId;
    name: string;
    source: PebShopThemeSource;
    result: PebShop;
    createdAt: Date;
}
export declare type PebShopThemeSourceId = string;
export interface PebShopThemeSource {
    id: PebShopThemeSourceId;
    actions: PebAction[];
    snapshot: PebShopThemeSnapshot;
}
export declare type PebShopThemeSnapshotId = string;
export interface PebShopThemeSnapshot {
    id: PebShopThemeSnapshotId;
    shop: {
        frontPageId: PebPageId;
    };
    pageIds: {
        [key: string]: PebPageShort;
    };
    templateIds: {
        [key: string]: PebTemplate;
    };
    stylesheetIds: {
        [key: string]: PebStylesheet;
    };
    contextSchemaIds: {
        [key: string]: PebContextSchema;
    };
}
export interface PebShopShort {
    id: PebShopId;
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
        id: PebPageId;
        lastActionId: PebActionId;
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
