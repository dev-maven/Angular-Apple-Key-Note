import { PebElementType, PebElement, PebMakerType } from '@pe/builder-core';
import { EventEmitter, InjectionToken, Type, ViewContainerRef } from '@angular/core';
declare type ElementComponentsCollectionType = {
    [name in PebElementType]: Type<any>;
};
export declare const ElementComponentsCollection: InjectionToken<ElementComponentsCollectionType>;
declare type MakerComponentsCollectionType = {
    [name in PebMakerType]: Type<any>;
};
export declare const MakerComponentsCollection: InjectionToken<MakerComponentsCollectionType>;
export declare type RenderFunctionType = (elementDef: PebElement, slotRef: ViewContainerRef, parentCmp: null | unknown) => void;
export declare type RenderChildsFunctionType = (abstractElement: any) => void;
export declare const RenderFunction: InjectionToken<RenderFunctionType>;
export declare const RenderChildsFunction: InjectionToken<RenderChildsFunctionType>;
export declare const RendererInteractionEmitter: InjectionToken<EventEmitter<any>>;
export declare const ParentElementComponent: InjectionToken<any>;
export {};
