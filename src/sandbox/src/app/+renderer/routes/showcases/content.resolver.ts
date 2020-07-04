import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { parse as parseYml } from 'yaml';

@Injectable({ providedIn: 'root' })
export class SandboxRendererShowcaseContentResolver implements Resolve<any> {
  constructor(
    private http: HttpClient,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const showcaseName = state.url.split('/').pop();
    const dataPath = `renderer/showcases/${showcaseName}/${showcaseName}.data.yml`;
    return this.http.get(dataPath, { responseType: 'text' }).pipe(
      map(parseYml),
    );
  }
}
