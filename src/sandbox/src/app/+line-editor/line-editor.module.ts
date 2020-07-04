import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LineEditorComponent } from './line-editor.component';
import { MatButtonModule, MatDialogModule, MatTabsModule } from '@angular/material';
import { PebRendererModule } from '@pe/builder-renderer';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PebEditorTabsComponent } from 'src/modules/editor/src/sidebars/tabs/tabs.component';
import { PebEditorTabComponent } from 'src/modules/editor/src/sidebars/tabs/tab.component';
import { PebEditorModule } from 'src/modules/editor/src/editor.module';

const routes: Routes = [
  {
    path: '',
    component: LineEditorComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  declarations: [LineEditorComponent],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    PebRendererModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule,
    PebEditorModule
  ]
})
export class LineEditorModule {
}
