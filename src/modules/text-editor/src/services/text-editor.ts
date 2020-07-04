import { Injectable, Injector } from '@angular/core';
import { StateService } from './text-editor-state.service';
import { TextEditorSelection } from './selection.service';

@Injectable()
export class TextEditor {

  constructor(
    public blockManager: StateService,
    public selection: TextEditorSelection,
    protected injector: Injector,
  ) {
  }

  init(): void {
    // super.init();
    // this.injector.get(TextEditorComponent);
    // this.initTransformations();
  }

  // private initTransformations() {
    // this.transformationRegistry.set('italic', new InlineItalic());
  // }
}
