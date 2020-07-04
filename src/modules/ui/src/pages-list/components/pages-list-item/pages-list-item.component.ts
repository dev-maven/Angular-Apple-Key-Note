import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { parseTestAttribute, PebPageId, PebPageShort, PebPageVariant, PebThemeRoute } from '@pe/builder-core';

@Component({
  selector: 'peb-ui-pages-list-item',
  templateUrl: 'pages-list-item.component.html',
  styleUrls: ['./pages-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebPagesSidebarItemComponent {
  @Input()
  page: PebPageShort;

  @Input()
  active: boolean;

  @Input()
  route: PebThemeRoute;

  @Output()
  selectPage = new EventEmitter<PebPageId>();

  @Output()
  copyPage = new EventEmitter<PebPageId>();

  @Output()
  deletePage = new EventEmitter<PebPageId>();

  PebPageVariant = PebPageVariant;

  constructor() { }

  getTestingAttribute(val: string): string {
    return parseTestAttribute(val);
  }

  onDeletePage() {
    if (this.page) {
      this.deletePage.emit(this.page.id);
    }
  }

}
