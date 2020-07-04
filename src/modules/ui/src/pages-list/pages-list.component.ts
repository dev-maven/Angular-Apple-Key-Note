import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CreatePageEvent, PebPageId, PebPageType, PebTheme, PebThemeRoute } from '@pe/builder-core';
import { PagesLists } from './pages-list.interfaces';

const { Master, Replica } = PebPageType;

@Component({
  selector: 'peb-ui-pages-list',
  templateUrl: 'pages-list.component.html',
  styleUrls: ['./pages-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebPagesSidebarComponent implements OnChanges {
  @Input()
  theme: PebTheme;

  @Input()
  activeType: PebPageType = Replica;

  @Input()
  activePage: PebPageId;

  @Input()
  loadingPages: PebPageId[];

  @Input()
  pagesType: PebPageType = PebPageType.Replica;

  @Output()
  createPage = new EventEmitter<CreatePageEvent>();

  @Output()
  selectPage = new EventEmitter<PebPageId>();

  @Output()
  copyPage = new EventEmitter<PebPageId>();

  @Output()
  deletePage = new EventEmitter<PebPageId>();

  pagesLists$ = new BehaviorSubject<PagesLists>(null);

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.theme && changes.theme.currentValue) {
      this.pagesLists$.next(this.getPagesLists(changes.theme.currentValue));
    }
  }

  getRoute(pageId: string): PebThemeRoute {
    return this.theme.routing.find(r => r.pageId === pageId);
  }

  private getPagesLists(theme: PebTheme): PagesLists {
    return {
      master: theme.brief.filter(p => p.type === Master),
      replica: theme.brief.filter(p => p.type === Replica),
    };
  }

}
