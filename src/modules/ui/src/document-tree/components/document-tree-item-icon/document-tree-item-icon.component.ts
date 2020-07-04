import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PebElementType } from '@pe/builder-core';

@Component({
  selector: 'peb-ui-document-tree-item-icon',
  templateUrl: 'document-tree-item-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebDocumentTreeItemIconComponent {
  @Input()
  type: PebElementType;

  PebElementType = PebElementType;
}
