import { Component, Input } from '@angular/core';

@Component({
  selector: 'peb-editor-sidebar-tab',
  styles: [`
    .tab {
      padding: 15px;
    }
  `],
  template: `
    <div [hidden]="!active" class="tab">
      <ng-content></ng-content>
    </div>
  `
})
export class PebEditorTabComponent {
  @Input() title: string;
  @Input() active = false;
}
