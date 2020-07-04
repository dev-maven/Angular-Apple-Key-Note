import { PebTemplate } from '../models/client';
import { PebElement, PebElementId, PebElementWithParent } from '../models/element';
export declare function pebMapElementDeep(element: PebElement, handler: (el: PebElement) => PebElement): PebElement;
export declare function pebFilterElementDeep(element: PebElement, handler: (el: PebElement) => boolean): PebTemplate | PebElement;
export declare function pebTraverseElementDeep(element: PebElement, handler: (el: PebElement) => any): void;
export declare function pebFindElementParents(document: PebElement, id: PebElementId): PebElement[];
export declare function pebFindElementChildren(element: PebElement, predicate?: ((e: PebElement) => boolean)): PebElement[];
export declare function pebTraverseElementDeepWithParent(element: PebElement, handler: (el: any) => any, parentId?: null | string, priority?: any): void;
export declare function pebFindElementChildrenWithParent(element: PebElement, predicate?: ((e: PebElement) => boolean)): PebElementWithParent[];
