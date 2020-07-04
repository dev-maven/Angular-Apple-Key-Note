import { Type, ɵNG_COMP_DEF as NG_COMP_DEV } from '@angular/core';

export function getIvyComponentSelector(component: Type<any>) {
  return component[NG_COMP_DEV].selectors[0][0];
}
