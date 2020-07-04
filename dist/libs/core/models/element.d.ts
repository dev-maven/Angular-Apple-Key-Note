export declare type PebElementId = string;
export declare enum PebElementType {
    Document = "document",
    Section = "section",
    Block = "block",
    Text = "text",
    Image = "image",
    Product = "product",
    ProductPage = "productPage",
    Button = "button",
    Cart = "cart",
    Shape = "shape",
    Carousel = "carousel",
    Amount = "amount",
    Logo = "logo",
    Products = "shop-products",
    Line = "line"
}
export declare enum PebMakerType {
    Text = "text"
}
export interface PebElement {
    id: PebElementId;
    type: PebElementType;
    children?: PebElement[];
    data?: {
        text?: string;
        routes?: any[];
        [others: string]: any;
    };
    meta?: {
        deletable: boolean;
    };
}
export declare enum PebElementContextState {
    Loading = "loading",
    Error = "error",
    Ready = "ready",
    Empty = "empty"
}
export interface PebElementWithParent extends PebElement {
    priority: number;
    parentId: string | null;
}
export declare type PebElementContext<T> = {
    state: PebElementContextState.Loading;
} | {
    state: PebElementContextState.Error;
} | {
    state: PebElementContextState.Empty;
} | {
    state: PebElementContextState.Ready;
    data: T;
};
