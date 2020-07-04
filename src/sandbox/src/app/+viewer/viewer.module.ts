import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SandboxViewerComponent } from './viewer.component';
import { SandboxViewerThemeResolver } from './viewer.resolver';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PebRendererModule } from '../../../../modules/renderer/src';

const routes: Routes = [
  {
    path: '',
    component: SandboxViewerComponent,
    resolve: { theme: SandboxViewerThemeResolver }
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    PebRendererModule,
  ],
  providers: [
    SandboxViewerThemeResolver,
  ],
  declarations: [
    SandboxViewerComponent,
  ],
})
export class SandboxViewerModule {

}
