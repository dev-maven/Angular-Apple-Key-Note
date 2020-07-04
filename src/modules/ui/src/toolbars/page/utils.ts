import { intersection } from 'lodash-es';
import { Observable, of } from 'rxjs';

import { PebPage, PebTheme, PebThemeStore } from '@pe/builder-core';
import { PebPageToolabrData } from '../../interfaces';

export function pickPageInfo(theme: PebTheme, page: PebPage): PebPageToolabrData {
  const pageRoute = theme.routing.find(r => r.pageId === page.id);

  return {
    name: page.name,
    default: pageRoute && pageRoute.default || false,
    variant: page.variant,
  };
}

export function pebSavePageToolbarData(
  themeStore: PebThemeStore,
  page: PebPage,
  changes: PebPageToolabrData,
): Observable<any> {
  const changeKeys = Object.keys(changes);

  return intersection(changeKeys, ['name', 'variant', 'default']).length
    ? themeStore.updatePageData(page.id, changes)
    : of(null);
}
