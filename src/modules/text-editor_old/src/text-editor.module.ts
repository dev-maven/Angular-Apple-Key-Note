import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PebTextEditorComponent } from './components/peb-text-editor/peb-text-editor.component';

@NgModule({
  declarations: [PebTextEditorComponent],
  imports: [
    CommonModule,
  ],
  exports: [PebTextEditorComponent]
})
export class PebTextEditorModule_Old { }
