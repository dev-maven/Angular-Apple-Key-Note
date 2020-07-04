import { NgModule } from '@angular/core';
import { SandboxApiService } from './../dev/mock.api';
import { PebApiService } from '@pe/builder-core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatMenuModule } from '@angular/material';

import { PebTextMaker } from './../../../../modules/renderer/src/makers/text/text.maker';

import {
  PebEditorModule,
  PebEditorBehaviourMarkHovered,
  PebEditorBehaviourMarkActivedElement,
  PebEditorBehaviourMarkSingleSelected,
  PebEditorBehaviourEditSection,

} from '@pe/builder-editor';

import { SandboxCreateShopGuard } from './shop.guard';
import { SandboxEditorRootComponent } from './root.component';
import { SandboxEditorCreateShopDialog } from './dialogs/create-shop/create-shop.dialog';
import { SandboxShopResolver } from './shop.resolver';
import { PebEditorBehaviourAddElement } from '../../../../modules/editor/src/behaviors/add-element.behavior';
import { PebEditorBehaviourEditLine } from 'src/modules/editor/src/behaviors/utils/edit-line.behavior';

const routes: Routes = [
  {
    path: '',
    canActivate: [ SandboxCreateShopGuard ],
    resolve: {
      shop: SandboxShopResolver,
    },
    component: SandboxEditorRootComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatMenuModule,
    PebEditorModule.forRoot({
      behaviours: [
        PebEditorBehaviourMarkHovered,
        PebEditorBehaviourMarkSingleSelected,
        PebEditorBehaviourEditSection,
        PebEditorBehaviourAddElement,
        PebEditorBehaviourMarkActivedElement,
        PebEditorBehaviourEditLine
      ],
      makers: [
        PebTextMaker
      ]
    }),
  ],
  providers: [
    SandboxCreateShopGuard,
    SandboxShopResolver,
    { provide: PebApiService, useClass: SandboxApiService }
  ],
  declarations: [
    PebTextMaker,
    SandboxEditorRootComponent,
    SandboxEditorCreateShopDialog,
  ],
})
export class SandboxEditorModule {}
