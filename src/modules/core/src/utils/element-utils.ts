import { isArray, isFunction, merge } from 'lodash-es';

import { PebTemplate } from '../models/client';
import { PebElement, PebElementId, PebElementWithParent } from '../models/element';

export function pebMapElementDeep(
  element: PebElement,
  handler: (el: PebElement) => PebElement,
): PebElement {
  const { children: children = [], ...elementProps } = handler(element);

  return {
    ...merge({}, elementProps),
    children: children.map(child => pebMapElementDeep(child, handler)),
  };
}

export function pebFilterElementDeep(
  element: PebElement,
  handler: (el: PebElement) => boolean,
): PebTemplate | PebElement {
  const nextChildren = element.children?.filter(handler);

  return {
    ...merge({}, element),
    children: nextChildren?.map(child => pebFilterElementDeep(child, handler)),
  };
}

export function pebTraverseElementDeep(
  element: PebElement,
  handler: (el: PebElement) => any,
): void {
  handler(merge({}, element));

  if (isArray(element.children)) {
    element.children.forEach(el => pebTraverseElementDeep(el, handler));
  }
}

export function pebFindElementParents(document: PebElement, id: PebElementId): PebElement[] {
  const stack = [{ node: document, i: 0 }];
  while (stack.length) {
    let current = stack[stack.length - 1];
    while (current.i < current.node.children.length) {
      const node = current.node.children[current.i];

      if (node.id === id) {
        return stack
          .filter(el => el.node.id !== document.id)
          .map(el => el.node);
      }

      stack.push({ node, i: 0 });
      current.i++;
      current = stack[stack.length - 1];
    }

    stack.pop();
  }

  return null;
}

export function pebFindElementChildren(
  element: PebElement,
  predicate?: ((e: PebElement) => boolean),
): PebElement[] {
  if (predicate && !isFunction(predicate)) {
    throw new Error('Unsupported selector');
  }

  predicate = predicate || (() => true); // tslint:disable-line

  const result = [];

  pebTraverseElementDeep(element, el => {
    if (predicate(el)) {
      result.push(el);
    }
  });

  return result;
}

export function pebTraverseElementDeepWithParent(
  element: PebElement,
  handler: (el: any) => any,
  parentId: null | string = null,
  priority: any = -1,
): void {
  const nextPriority = parseInt(priority, 10) + 1;
  handler({ ...element, parentId, priority: nextPriority });

  if (isArray(element.children)) {
    element.children.forEach(el => pebTraverseElementDeepWithParent(el, handler, element.id, nextPriority));
  }
}

export function pebFindElementChildrenWithParent(
  element: PebElement,
  predicate: ((e: PebElement) => boolean) = (() => true),
): PebElementWithParent[] {
  if (predicate && !isFunction(predicate)) {
    throw new Error('Unsupported selector');
  }

  const result = [];

  pebTraverseElementDeepWithParent(element, el => {
    if (predicate(el)) {
      result.push(el);
    }
  });

  return result;
}
