import { PebTemplateEffect } from '../../models/action';
import { PebTemplate } from '../../models/client';
import { PebElement } from '../../models/element';
import { pebFilterElementDeep, pebMapElementDeep } from '../../utils/element-utils';

export const layoutsScopeName = 'layouts';

export interface PebAppendElementPayload {
  to: string;
  after?: string;
  element: PebElement;
}

export const pebLayoutEffectHandlers: {
  [effectName in PebTemplateEffect]: (prevLayout: null| PebTemplate, payload: any) => PebTemplate | null
} = {
  [PebTemplateEffect.Init]: pebLayoutInitHandler,
  [PebTemplateEffect.Destroy]: pebLayoutDestroyHandler,
  [PebTemplateEffect.AppendElement]: pebLayoutAppendElementHandler,
  [PebTemplateEffect.UpdateElement]: pebLayoutUpdateElementHandler,
  [PebTemplateEffect.RelocateElement]: pebLayoutRelocateElementHandler,
  [PebTemplateEffect.DeleteElement]: pebLayoutDeleteElementHandler,
};

export function pebLayoutInitHandler(prevLayout: null, payload: PebTemplate) {
  return payload;
}

export function pebLayoutDestroyHandler(prevLayout: null | PebTemplate) {
  return null;
}

export function pebLayoutAppendElementHandler(prevLayout: PebTemplate, payload: PebAppendElementPayload): PebTemplate {
  return pebMapElementDeep(
    prevLayout,
    el => (el.id === payload.to ? { ...el, children: [...el.children, payload.element] } : el),
  ) as PebTemplate;
}

export function pebLayoutUpdateElementHandler(prevLayout: PebTemplate, payload: any) {
  throw new Error('To implement');
  return prevLayout;
}

export function pebLayoutRelocateElementHandler(prevLayout: PebTemplate, payload: any) {
  throw new Error('To implement');
  return prevLayout;
}

export function pebLayoutDeleteElementHandler(prevLayout: PebTemplate, payload: string): PebTemplate {
  return pebFilterElementDeep(prevLayout, c => c.id !== payload) as PebTemplate;
}
