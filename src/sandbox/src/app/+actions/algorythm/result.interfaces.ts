// export type UniqueId = string;
//
// export interface PebElement {
//   id: UniqueId;
//   type: string; // PebElementType
//   data?: any;
//   children?: PebElement[];
// }
//
// export interface PebDocument extends PebElement {
//   type: 'document';
// }
// export type PebLayoutId = string;
//
// export type PebStylesheetId = string;
// export interface PebStylesheet {
//   [selector: string]: {
//     [styleType: string]: string
//   };
// }
//
// export type PebContextSchemaId = string;
// export interface PebContextSchema {
//   [key: string]: {
//     service: string,
//     method: string,
//     params: any[],
//   };
// }
//
// export type PebPageId = string;
// export interface PebPageData {
//   data: {
//     url: string;
//     mark: string;
//   };
// }
// export interface PebPage {
//   id: UniqueId;
//   data: PebPageData;
//   template: PebDocument;
//   stylesheets: {
//     [screen: string]: PebStylesheet
//   };
//   context: PebContextSchema;
// }
//
// export type PebShopId = string;
// export interface PebShop {
//   id: UniqueId;
//   routing: {
//     [url: string]: PebPageId;
//   },
//   data: any;
//   context: PebContextSchema;
//   pages: PebPage[];
// }
