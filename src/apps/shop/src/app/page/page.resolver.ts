import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { parse as parseYml } from 'yaml';
import { MOCK_SHOP, MOCK_SOURCE, PebShop } from '../data.factory';
import { ContextSchema } from '../context.service';
import { PebElement, PebStylesheet } from '../../../../../modules/renderer/src/core.types';

@Injectable({ providedIn: 'root' })
export class PageResolver implements Resolve<{
  document: PebElement,
  styling: { [screen: string]: PebStylesheet },
  context: ContextSchema,
}> {
  constructor(
    @Inject(MOCK_SOURCE) private source: string,
    @Inject(MOCK_SHOP) private theme: PebShop,
    private http: HttpClient,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const pageSource = this.theme.pages.find(page => page.url === state.url);

    const fetchYml = (path) => this.http.get(`${this.source}/${path}.yml`, { responseType: 'text' }).pipe(
      map(yml => parseYml(yml) as any)
    );

    return combineLatest([
      fetchYml(pageSource.layout),
      fetchYml(pageSource.styling),
    ]).pipe(
      map(([document, styling]) => {
        return {
          document,
          styling,
          context: {
            ...this.theme.context,
            ...(pageSource.context || {}),
          },
        };
      }),
    );
  }
}
