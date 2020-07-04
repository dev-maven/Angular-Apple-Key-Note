import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[pebEditorToolbar]'
})
export class PebEditorToolbarSelector {
  constructor(
    public template: TemplateRef<any>
  ) {
  }
}
