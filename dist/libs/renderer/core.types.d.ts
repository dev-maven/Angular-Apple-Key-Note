import { PebElementType } from '@pe/builder-core';
export interface TreeVariables {
    [id: string]: {
        id: string;
        type: PebElementType;
        children?: PebElement[];
        hashNode: string;
        hashParent: string;
        hashStyle: string;
        executeType: string;
        parentId?: string;
        priority?: number;
    };
}
export interface PebElement {
    id: string;
    type: PebElementType;
    children?: PebElement[];
    text?: string;
    routes?: any[];
}
export interface PebStyles {
    [prop: string]: string | number;
}
export interface PebStylesheet {
    [selector: string]: PebStyles;
}
export interface PebContext {
    [selector: string]: any;
}
