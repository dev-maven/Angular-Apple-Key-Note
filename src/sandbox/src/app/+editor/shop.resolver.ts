import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { PebApiService } from '@pe/builder-core';

@Injectable({ providedIn: 'root' })
export class SandboxShopResolver implements Resolve<any> {
  // TODO: If theme has been just created it can be passed in route data to
  //  prevent reloading
  constructor(
    @Inject(PebApiService) private api: PebApiService,
  ) {}


  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.api.getShopThemeById(route.params.shopId).pipe(
    );
  }
}
