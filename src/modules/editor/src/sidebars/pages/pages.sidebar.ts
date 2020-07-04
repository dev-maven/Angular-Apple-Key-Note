import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { EditorPageMenu } from './page.menu';
import { PebPageId } from '@pe/builder-core';
import { PebPageType } from '../../../../core/src/models/client';
import { takeUntil, tap } from 'rxjs/operators';
import { AbstractComponent } from '../../../../core/src/shared/abstract.component';
import { merge } from 'rxjs';

type SidebarPage = any;

@Component({
  selector: 'peb-editor-pages-sidebar',
  templateUrl: 'pages.sidebar.html',
  styleUrls: ['./pages.sidebar.scss'],
})
export class PebEditorPagesSidebarComponent extends AbstractComponent {
  @Input() pages: SidebarPage[];
  @Input() activePageId: PebPageId;

  @Output() select = new EventEmitter<any>();
  @Output() create = new EventEmitter<any>();
  @Output() duplicate = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  constructor(private overlay: Overlay) {
    super();
  }

  skeletonPages = Array.from({ length: 6 });

  onCreate() {
    const pageType = (prompt('Master or Replica') || 'replica').toLowerCase();

    this.create.emit({
      type: pageType === 'master' ? PebPageType.Master : PebPageType.Replica,
      masterId: null,
    });
  }

  onContextMenu(evt, page) {
    if ((window as any).PEB_CONTEXT_MENUS_DISABLED) {
      console.warn(
        'Context menus are disabled.\n'
        + 'Activate them by setting "PEB_CONTEXT_MENUS_DISABLED = false"'
      );
      return;
    }

    evt.preventDefault();
    evt.stopPropagation();

    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(evt)
        .withPositions([{
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        }, {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
        }]),
      hasBackdrop: true,
    });
    const pageMenuPortal = new ComponentPortal(EditorPageMenu);

    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());

    const pageMenuCmpRef = overlayRef.attach(pageMenuPortal);
    const pageMenu = pageMenuCmpRef.instance;

    pageMenu.page = page;

    merge(
      pageMenu.fork.pipe(
        tap((pageId) => this.create.emit({
          type: PebPageType.Replica,
          masterId: pageId,
        }))
      ),
      pageMenu.delete.pipe(
        tap(() => this.delete.emit(page)),
      ),
      pageMenu.duplicate.pipe(
        tap(() => this.duplicate.emit(page))
      )
    ).pipe(
      tap(() => overlayRef.dispose()),
      takeUntil(this.destroyed$),
    ).subscribe();
  }
}
