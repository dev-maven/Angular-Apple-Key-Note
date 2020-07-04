export type PebActionId = string;

export interface PebAction {
  id: PebActionId;
  // TODO: add name
  effects: PebEffect[];
  createdAt: Date;
}

export interface PebEffect {
  type: PebShopEffect
    | PebPageEffect
    | PebTemplateEffect
    | PebStylesheetEffect
    | PebContextSchemaEffect;
  target: string; // format: entityType:entityId
  payload: any;
}

export enum PebEffectTarget {
  Shop = 'shop',
  Pages = 'pages',
  Templates = 'templates',
  Stylesheets = 'stylesheets',
  ContextSchemas = 'contextSchemas',
}

export enum PebShopEffect {
  Init = 'shop:init',
  UpdateData = 'shop:update-data',
  UpdatePages = 'shop:update-pages',
  AppendPage = 'shop:append-page',
  DeletePage = 'shop:delete-page',
}

export enum PebPageEffect {
  Create = 'page:init',
  UpdateData = 'page:update-data',
  Delete = 'page:delete',
}

export enum PebTemplateEffect {
  Init              = 'template:init',
  Destroy           = 'template:destroy',
  AppendElement     = 'template:append-element',
  UpdateElement     = 'template:update-element',
  RelocateElement   = 'template:relocate-element',
  DeleteElement     = 'template:delete-element',
}

export enum PebStylesheetEffect {
  Init = 'stylesheet:init',
  Update = 'stylesheet:update',
  Delete = 'stylesheet:delete',
}

export enum PebContextSchemaEffect {
  Init = 'context-schema:init',
  Update = 'context-schema:update',
  Delete = 'context-schema:delete',
}
