import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parse as parseYml } from 'yaml';
import {  map, switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Injectable()
export class SandboxViewerThemeResolver implements Resolve<unknown> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get('/assets/themes/basic/index.yml', {
      responseType: 'text',
    }).pipe(
      map(parseYml),
      switchMap((theme: any) => {
        return combineLatest(
          theme.routing.map(
            r => this.loadPage(r.pageId)
          )
        ).pipe(
          map((pages) => ({
            pages, routing: theme.routing,
          }))
        );
      })
    );
  }

  loadPage = (pageId) => {
    return this.http.get('/assets/themes/basic/' + pageId + '.yml', {
      responseType: 'text',
    }).pipe(
      map(parseYml)
    );
  }
}
