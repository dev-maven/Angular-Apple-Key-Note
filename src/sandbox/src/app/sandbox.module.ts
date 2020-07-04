import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { MockDatabaseConfig, SandboxMockBackend } from './dev/mock.backend';
import { SandboxApiService } from './dev/mock.api';
import { SandboxSettingsDialog } from './shared/settings/settings.dialog';

import { SandboxRootComponent } from './root/root.component';
import { SandboxRouting } from './sandbox.routing';
import { SandboxFrontRoute } from './root/front.route';
import { MockProductsService } from './+editor/mock-services/mock-products.service';
import { PebApiService, CONTEXT_SERVICES, ContextService } from '@pe/builder-core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    SandboxRouting,
    NgxIndexedDBModule.forRoot(MockDatabaseConfig),
  ],
  declarations: [
    SandboxRootComponent,
    SandboxFrontRoute,
    SandboxSettingsDialog,
  ],
  providers: [
    {
      provide: PebApiService,
      useClass: SandboxApiService,
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [SandboxMockBackend],
      useFactory: () => () => {},
    },
    {
      provide: CONTEXT_SERVICES[ContextService.Products],
      useClass: MockProductsService,
    },
  ],
  bootstrap: [SandboxRootComponent],
})
export class SandboxModule { }
