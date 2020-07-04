import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShopRootComponent } from './root/root.component';
import { CommonModule } from '@angular/common';
import { MOCK_DATA, MOCK_SOURCE, MOCK_SHOP, mockFiller } from './data.factory';
import { CONTEXT_SERVICES, ContextService } from './context.service';
import { CompanyService } from '../services/company/company.service';
import { MockProductsService } from '../services/products/products.service';
import { MockShipmentsService } from '../services/shipment/shipments.service';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { PageResolver } from './page/page.resolver';
import { PageGuard } from './page/page.guard';
import { PebRendererModule } from '../../../../modules/renderer/src';

@NgModule({
  declarations: [
    ShopRootComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '**',
        component: PageComponent,
        canActivate: [PageGuard],
        resolve: {
          page: PageResolver,
        },
      },
    ]),
    PebRendererModule,
  ],
  providers: [
    {
      provide: MOCK_SOURCE,
      useValue: '/sources/fruits',
    },
    {
      provide: MOCK_DATA,
      useValue: {},
    },
    {
      provide: MOCK_SHOP,
      useValue: {},
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [MOCK_SOURCE, MOCK_SHOP, MOCK_DATA, HttpClient],
      useFactory: mockFiller,
    },
    {
      provide: CONTEXT_SERVICES[ContextService.Company],
      useClass: CompanyService,
    },
    {
      provide: CONTEXT_SERVICES[ContextService.Products],
      useClass: MockProductsService,
    },
    {
      provide: CONTEXT_SERVICES[ContextService.Shipments],
      useClass: MockShipmentsService,
    }
  ],
  bootstrap: [
    ShopRootComponent
  ],
})
export class ShopModule { }
