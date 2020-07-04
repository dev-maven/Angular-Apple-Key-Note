export declare type PebActionId = string;
export interface PebAction {
    id: PebActionId;
    effects: PebEffect[];
    createdAt: Date;
}
export interface PebEffect {
    type: PebShopEffect | PebPageEffect | PebTemplateEffect | PebStylesheetEffect | PebContextSchemaEffect;
    target: string;
    payload: any;
}
export declare enum PebEffectTarget {
    Shop = "shop",
    Pages = "pages",
    Templates = "templates",
    Stylesheets = "stylesheets",
    ContextSchemas = "contextSchemas"
}
export declare enum PebShopEffect {
    Init = "shop:init",
    UpdateData = "shop:update-data",
    UpdatePages = "shop:update-pages",
    AppendPage = "shop:append-page",
    DeletePage = "shop:delete-page"
}
export declare enum PebPageEffect {
    Create = "page:init",
    UpdateData = "page:update-data",
    Delete = "page:delete"
}
export declare enum PebTemplateEffect {
    Init = "template:init",
    Destroy = "template:destroy",
    AppendElement = "template:append-element",
    UpdateElement = "template:update-element",
    RelocateElement = "template:relocate-element",
    DeleteElement = "template:delete-element"
}
export declare enum PebStylesheetEffect {
    Init = "stylesheet:init",
    Update = "stylesheet:update",
    Delete = "stylesheet:delete"
}
export declare enum PebContextSchemaEffect {
    Init = "context-schema:init",
    Update = "context-schema:update",
    Delete = "context-schema:delete"
}
