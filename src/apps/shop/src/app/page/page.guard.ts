import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { MOCK_SHOP, PebShop } from '../data.factory';

@Injectable({ providedIn: 'root' })
export class PageGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(MOCK_SHOP) private shop: PebShop,
  ) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.shop.pages.find(page => page.url === state.url)) {
      return true;
    }

    return this.router.createUrlTree(['404']);
  }
}
