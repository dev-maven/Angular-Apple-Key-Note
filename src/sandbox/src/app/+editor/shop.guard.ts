import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material';
import { SandboxEditorCreateShopDialog } from './dialogs/create-shop/create-shop.dialog';
import { Inject, Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { PebApiService, pebCreateEmptyShop } from '@pe/builder-core';

@Injectable()
export class SandboxCreateShopGuard implements CanActivate {
  constructor(
    private dialog: MatDialog,
    @Inject(PebApiService) private apiService: PebApiService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|boolean {
    if (route.params.shopId !== 'new') {
      return true;
    }

    const dialog = this.dialog.open(SandboxEditorCreateShopDialog);

    return dialog.afterClosed().pipe(
      switchMap(data => data
          ? this.apiService.createShopTheme({
            name: data.name,
            content: pebCreateEmptyShop(),
          })
        : of(null)
      ),
      map((shop: any) => {
        return this.router.createUrlTree(shop ? ['editor', shop.id] : ['/']);
      }),
    );
  }

}
