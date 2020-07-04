import { PebEditorSidebarPagesComponent } from './sidebars/pages/sidebar-pages.component';
import { CommonModule } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { OverlayModule as CdkOverlayModule } from '@angular/cdk/overlay';

import { PebApiService } from '@pe/builder-core';
import { PebRendererModule } from '@pe/builder-renderer';

import { PebEditorComponent } from './root/editor.component';
import { PebEditorSidebarSelector } from './selectors/sidebar.selector';
import { PebEditorToolbarSelector } from './selectors/toolbar.selector';
import { PebEditorPagesSidebarComponent } from './sidebars/pages/pages.sidebar';
import { PebEditorToolbarComponent } from './toolbar/toolbar.component';
import { PebEditorPublishDialogComponent } from './toolbar/dialogs/publish/publish.dialog';
import { PebEditorSectionsDialogComponent } from './toolbar/dialogs/sections/sections.dialog';
import { PebEditorMediaDialogComponent } from './toolbar/dialogs/media/media.dialog';
import { PebEditorObjectsDialogComponent } from './toolbar/dialogs/objects/objects.dialog';
import { PebEditorProductDialogComponent } from './toolbar/dialogs/product/product.dialog';
import { PebEditorScreenDialogComponent } from './toolbar/dialogs/screen/screen.dialog';
import { PebEditorSeoDialogComponent } from './toolbar/dialogs/seo/seo.dialog';
import { PebEditorZoomDialogComponent } from './toolbar/dialogs/zoom/zoom.dialog';
import { MatMenuModule, MatButtonModule, MatCheckboxModule, MatSliderModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PebEditorProductsSidebarComponent } from './sidebars/products/products.sidebar';
import { PebEditorSectionSidebarComponent } from './sidebars/section/section.sidebar';
import { PebEditorTabsComponent } from './sidebars/tabs/tabs.component';
import { PebEditorTabComponent } from './sidebars/tabs/tab.component';
import { IconsModule } from './icons/_icons.module';
import { EDITOR_CONFIG, PebEditorConfig } from './editor.constants';
import { SidebarSharedModule } from './sidebars/shared/sidebar-shared.module';
import { PebEditorLineSidebarComponent } from './sidebars/line/line.sidebar';
import { ColorPickerModule } from 'ngx-color-picker';

const dialogs = [
  PebEditorSectionsDialogComponent,
  PebEditorMediaDialogComponent,
  PebEditorObjectsDialogComponent,
  PebEditorProductDialogComponent,
  PebEditorPublishDialogComponent,
  PebEditorScreenDialogComponent,
  PebEditorSeoDialogComponent,
  PebEditorZoomDialogComponent,
];

const sidebars = [
  PebEditorProductsSidebarComponent,
  PebEditorPagesSidebarComponent,
  PebEditorSectionSidebarComponent,
  PebEditorTabsComponent,
  PebEditorTabComponent,
  PebEditorLineSidebarComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CdkOverlayModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSliderModule,
    ColorPickerModule,
    PebRendererModule.forRoot({ some: { renderer: 'config' } }),
    SidebarSharedModule,
    IconsModule,
  ],
  declarations: [
    PebEditorComponent,
    PebEditorSidebarPagesComponent,
    PebEditorSidebarSelector,
    PebEditorToolbarSelector,
    PebEditorToolbarComponent,
    ...dialogs,
    ...sidebars,
  ],
  exports: [
    PebEditorComponent,
    PebEditorSidebarSelector,
    PebEditorToolbarSelector,
    ...sidebars,
  ],
})
export class PebEditorModule {
  static forRoot(config: PebEditorConfig): ModuleWithProviders {
    return {
      ngModule: PebEditorModule,
      providers: [
        {
          provide: EDITOR_CONFIG,
          useValue: config,
        },
      ],
    };
  }

  constructor(
    @Optional() @Inject(PebApiService) api: PebApiService,
  ) {
    if (!api) {
      // TODO: has to be uncommented
      // throw new Error(`
      //   PebEditorModule requires ApiService to be provided.
      //   Please make sure that you've defined it.
      // `);
    }
  }
}
