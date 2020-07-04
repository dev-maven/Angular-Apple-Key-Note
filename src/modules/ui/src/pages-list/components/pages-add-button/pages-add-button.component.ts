import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CreatePageEvent, CreateReplicaPageEvent, PebPageId, PebPageShort, PebPageType, parseTestAttribute } from '@pe/builder-core';

@Component({
  selector: 'peb-ui-pages-add-button',
  templateUrl: 'pages-add-button.component.html',
  styleUrls: ['./pages-add-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebPagesSidebarAddButtonComponent {
  PageTypes = PebPageType;

  @Input()
  pages: PebPageShort[];

  @Input()
  activeType: PebPageType;

  @Output()
  createPage = new EventEmitter<CreatePageEvent>();

  getTestingAttribute(page: PebPageShort): string {
    return parseTestAttribute(page.name);
  }

  createMasterPage() {
    this.createPage.next({ type: PebPageType.Master });
  }

  createReplicaPage(masterId: null| PebPageId) {
    this.createPage.next({ type: PebPageType.Replica, masterId } as CreateReplicaPageEvent);
  }
}
