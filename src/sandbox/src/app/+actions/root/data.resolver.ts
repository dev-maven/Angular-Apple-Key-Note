import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { parse as parseYml } from 'yaml';

@Injectable({ providedIn: 'root' })
export class SandboxActionsDataResolver implements Resolve<any> {
  constructor(
    private http: HttpClient,
  ) {}

  // TODO: Add here a dialog that allows to load existing data
  resolve(): Observable<any> | Promise<any> | any {
    const dataPath = '/actions/actions.mocks.yml';

    return this.http.get(dataPath, { responseType: 'text' }).pipe(
      map(parseYml),
    );
  }
}
