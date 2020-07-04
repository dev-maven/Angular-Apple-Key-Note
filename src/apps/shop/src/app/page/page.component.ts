import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, map, pluck, startWith, switchMap, tap } from 'rxjs/operators';
import { combineLatest, fromEvent, Observable } from 'rxjs';
import { merge } from 'lodash-es';
import { ContextBuilder } from '../context.service';
import { PebScreen } from '@pe/builder-core';
import { PebElement, PebStylesheet } from '../../../../../modules/renderer/src/core.types';
import { ShopRootComponent } from '../root/root.component';
import { MOCK_SHOP, PebShop } from '../data.factory';

const getScreenFromWidth = (width: number): PebScreen => {
  if (width <= 500) {
    return PebScreen.Mobile;
  } else if (width < 1024) {
    return PebScreen.Tablet;
  } else {
    return PebScreen.Desktop;
  }
};

@Component({
  selector: 'peb-shop-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  screen$: Observable<PebScreen> = fromEvent(window, 'resize').pipe(
    pluck('target', 'innerWidth'),
    startWith(window.innerWidth),
    map(getScreenFromWidth),
    distinctUntilChanged(),
  );

  document$: Observable<PebElement> = this.activatedRoute.data.pipe(
    pluck('page', 'document'),
  );

  styling$: Observable<PebStylesheet> = combineLatest([
    this.activatedRoute.data.pipe(pluck('page')),
    this.screen$,
  ]).pipe(
    map(([page, screen]) => {
      return merge({}, page.styling.all, page.styling[screen]);
    }),
  );

  context$ = combineLatest([
    this.activatedRoute.data.pipe(
      pluck('page'),
      switchMap(page => this.contextManager.buildSchema(page.context)),
    ),
    this.rootCmp.state$,
  ]).pipe(
    map(([ctx, state]) => ({
      ...state,
      ...ctx,
    }))
  );

  constructor(
    private router: Router,
    private rootCmp: ShopRootComponent,
    private contextManager: ContextBuilder,
    private activatedRoute: ActivatedRoute,
    @Inject(MOCK_SHOP) private shop: PebShop,
  ) {
    // dev
    combineLatest([
      this.document$,
      this.styling$,
      this.context$,
      this.screen$/*.pipe(tap(console.log.bind(null, 'screen: ')))*/,
    ]).pipe(
      tap(([document, stylesheet, context]) => {
        this.rendererInput = { document, stylesheet, context, screen };
      }),
    ).subscribe();
  }

  // dev
  rendererInput: any;

  onInteraction(payload: any) {
    if (payload.type === 'logo.click') {
      this.router.navigate(['/']).then(/* do nothing */);
    }

    if (payload.type === 'cart.click') {
      // start checkout
    }

    if (payload.type === 'product.add-to-cart') {
      const cart = [
        ...this.rootCmp.state$.value['@cart'],
        { count: 1, product: payload.product },
      ];

      this.rootCmp.state$.next({
        ...this.rootCmp.state$.value,
        '@cart': cart,
      });
      return;
    }

    if (payload.type === 'product.navigate-to-page') {
      const productPage = this.shop.pages.find(page => page.mark === `products:${payload.product.id}`);

      if (productPage) {
        this.router.navigate(productPage.url.split('/')).then(/* do nothing */);
      }
      return;
    }

    if (payload.type === 'navigate') {
      const requiredPage = this.shop.pages.find(page => page.url === payload.url);

      if (requiredPage) {
        this.router.navigate(payload.url.split('/')).then(/* do nothing */);
      }
      return;
    }

    if (payload.type === 'open-burger-menu') {
      // open burger menu
    }

    if (payload.type === 'expand-ling') {
      // show menu for the link
    }

    console.log('Unsupported interaction:');
    console.log(payload);
  }
}
