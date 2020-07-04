import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { PebRendererModule } from '@pe/builder-renderer';

import { SandboxRendererRootComponent } from './routes/_root/renderer-root.component';
import { SandboxRendererSettingsPanelComponent } from './shared/settings-panel/settings-panel.component';
import { SandboxRendererShowcaseRoute } from './routes/showcases/_TR: old-root/showcase.route';
import { SandboxRendererPerformanceRoute } from './routes/performance/performance.route';
import { SandboxRendererPreviewComponent } from './shared/preview/preview.component';
import { SandboxRendererShowcaseGeneralBasicRoute } from './routes/showcases/general-basic/general-basic.route';
import { SandboxRendererShowcaseContentResolver } from './routes/showcases/content.resolver';
import { SandboxRendererShowcaseShopCategoryRoute } from './routes/showcases/shop-category/shop-category.route';
import { SandboxRendererShowcaseCompanyNavbarRoute } from './routes/showcases/company-navbar/company-navbar.route';
import { SandboxRendererShowcaseShopProductsRoute } from './routes/showcases/shop-products/shop-products.route';
import { SandboxRendererShowcaseGeneralButtonRoute } from './routes/showcases/general-button/general-button.route';
import { SandboxRendererPerfomanceChessRoute } from './routes/performance/chess/chess.route';
import { SandboxPerformanceStatsComponent } from './shared/performance-stats/performance-stats.component';
import { SandboxRendererPerformanceJumperRoute } from './routes/performance/jumper/jumper.route';
import { SandboxRendererShowcaseGeneralImageRoute } from './routes/showcases/image/image.route';
import { SandboxRendererShowcaseGeneralVideoRoute } from './routes/showcases/video/video.route';
import { SandboxRendererShowcaseLineRoute } from './routes/showcases/general-line/general-line.route';

const routes: Routes = [
  {
    path: '',
    component: SandboxRendererRootComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'showcases/general-basic'
      },
      {
        path: 'showcases/general-basic',
        component: SandboxRendererShowcaseGeneralBasicRoute,
        resolve: {
          content: SandboxRendererShowcaseContentResolver,
        },
      },
      {
        path: 'showcases/general-line',
        component: SandboxRendererShowcaseLineRoute,
        resolve: {
          content: SandboxRendererShowcaseContentResolver,
        },
      },
      {
        path: 'showcases/general-button',
        component: SandboxRendererShowcaseGeneralButtonRoute,
        resolve: {
          content: SandboxRendererShowcaseContentResolver,
        },
      },
      {
        path: 'showcases/image',
        component: SandboxRendererShowcaseGeneralImageRoute,
        resolve: {
          content: SandboxRendererShowcaseContentResolver,
        },
      },
      {
        path: 'showcases/video',
        component: SandboxRendererShowcaseGeneralVideoRoute,
        resolve: {
          content: SandboxRendererShowcaseContentResolver,
        },
      },
      {
        path: 'showcases/company-navbar',
        component: SandboxRendererShowcaseCompanyNavbarRoute,
        resolve: {
          content: SandboxRendererShowcaseContentResolver,
        },
      },
      {
        path: 'showcases/shop-category',
        component: SandboxRendererShowcaseShopCategoryRoute,
        resolve: {
          content: SandboxRendererShowcaseContentResolver,
        },
      },
      {
        path: 'showcases/shop-products',
        component: SandboxRendererShowcaseShopProductsRoute,
        resolve: {
          content: SandboxRendererShowcaseContentResolver,
        },
      },
      {
        path: 'showcases/:area',
        component: SandboxRendererShowcaseRoute,
      },
      {
        path: 'performance/chess',
        component: SandboxRendererPerfomanceChessRoute,
      },
      {
        path: 'performance/jumper',
        component: SandboxRendererPerformanceJumperRoute,
      },
      {
        path: 'performance/chaotic',
        component: SandboxRendererPerformanceRoute,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatIconModule,
    PebRendererModule,
  ],
  providers: [],
  declarations: [
    SandboxRendererRootComponent,
    SandboxRendererSettingsPanelComponent,
    SandboxRendererShowcaseRoute,
    SandboxRendererPerformanceRoute,
    SandboxRendererPreviewComponent,
    SandboxRendererShowcaseShopCategoryRoute,
    SandboxRendererShowcaseGeneralBasicRoute,
    SandboxRendererShowcaseCompanyNavbarRoute,
    SandboxRendererShowcaseShopProductsRoute,
    SandboxRendererShowcaseGeneralButtonRoute,
    SandboxRendererPerfomanceChessRoute,
    SandboxPerformanceStatsComponent,
    SandboxRendererPerformanceJumperRoute,
    SandboxRendererShowcaseGeneralImageRoute,
    SandboxRendererShowcaseGeneralVideoRoute,
    SandboxRendererShowcaseLineRoute
  ],
})
export class SandboxRendererModule {}
