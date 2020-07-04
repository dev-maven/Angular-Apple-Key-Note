import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { SandboxActionsRootRoute } from './root/actions-root.route';
import { SandboxActionsDataResolver } from './root/data.resolver';
import { PebRendererModule } from '../../../../modules/renderer/src';

const routes: Routes = [
  {
    path: '',
    // component: SandboxActionsRootRoute,
    resolve: {
      actions: SandboxActionsDataResolver,
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PebRendererModule,
  ],
  declarations: [
    // SandboxActionsRootRoute,
  ],
})
export class SandboxActionsModule { }
