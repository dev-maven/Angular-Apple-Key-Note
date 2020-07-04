import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SandboxFrontRoute } from './root/front.route';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SandboxFrontRoute,
  },
  {
    path: 'renderer',
    loadChildren: () => import('./+renderer/renderer.module').then(
      m => m.SandboxRendererModule
    ),
  },
  // {
  //   path: 'actions',
  //   loadChildren: () => import('./+actions/actions.module').then(
  //     m => m.SandboxActionsModule,
  //   ),
  // },
  {
    path: 'line-editor',
    loadChildren: () => import('./+line-editor/line-editor.module').then(
      m => m.LineEditorModule
    ),
  },
  {
    path: 'editor/:shopId',
    loadChildren: () => import('./+editor/editor.module').then(
      m => m.SandboxEditorModule
    )
  },
  {
    path: 'viewer',
    loadChildren: () => import('./+viewer/viewer.module').then(
      m => m.SandboxViewerModule,
    )
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class SandboxRouting { }
