import { PebElementType, PebElement, PebMakerType } from '@pe/builder-core';
import { EventEmitter, InjectionToken, Type, ViewContainerRef } from '@angular/core';

//
//  Collection of elements that renderer knows how to render
//
type ElementComponentsCollectionType = { [name in PebElementType]: Type<any> };

export const ElementComponentsCollection = new InjectionToken<ElementComponentsCollectionType>(
  'ElementsCollection'
);

//
//  Collection of elements that maker knows how to render
//
type MakerComponentsCollectionType = { [name in PebMakerType]: Type<any> };

export const MakerComponentsCollection = new InjectionToken<MakerComponentsCollectionType>(
  'MakersCollection'
);

//
//  Element render function provided by renderer
//
export type RenderFunctionType = (
  elementDef: PebElement,
  slotRef: ViewContainerRef,
  parentCmp: null|unknown,
) => void;

export type RenderChildsFunctionType = (
  abstractElement: any
) => void;

export const RenderFunction = new InjectionToken<RenderFunctionType>('RenderFunction');

export const RenderChildsFunction = new InjectionToken<RenderChildsFunctionType>('RenderChildsFunction');

export const RendererInteractionEmitter = new InjectionToken<EventEmitter<any>>('RendererInteractionEmitter');

//
//  Element parent
//
export const ParentElementComponent = new InjectionToken<any>('ParentElementComponent');
