import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PebElement, PebElementStyles } from '@pe/builder-core';

@Component({
  selector: 'peb-editor-section-sidebar',
  templateUrl: 'section.sidebar.html',
  styleUrls: ['./section.sidebar.scss'],
})
export class PebEditorSectionSidebarComponent {
  @Input() element: PebElement;

  @Input() styles: PebElementStyles;

  @Output() changeBackground = new EventEmitter<PebElement>();
}
