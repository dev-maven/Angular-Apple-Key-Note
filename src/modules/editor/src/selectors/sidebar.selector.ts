import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[pebEditorSidebar]'
})
export class PebEditorSidebarSelector {
  constructor(
    public template: TemplateRef<any>
  ) {}
}
