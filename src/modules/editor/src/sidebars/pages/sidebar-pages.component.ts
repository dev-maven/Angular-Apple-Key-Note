import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { EditorPageMenu } from './page.menu';
import { PebPageId } from '../../../../core/src/models/client';

type SidebarPage = any;

@Component({
  selector: 'peb-editor-sidebar-pages',
  templateUrl: 'sidebar-pages.component.html',
  styleUrls: ['./sidebar-pages.component.scss'],
})
export class PebEditorSidebarPagesComponent {
  @Input() pages: SidebarPage[];
  @Input() activePageId: PebPageId;

  @Output() select = new EventEmitter<any>();
  @Output() create = new EventEmitter<any>();
  @Output() duplicate = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  constructor(private overlay: Overlay) {
    (window as any).editorSidebarPages = this;
  }

  skeletonPages = Array.from({ length: 6 });

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

    const pageMenu = overlayRef.attach(pageMenuPortal);

    pageMenu.instance.delete.subscribe(() => {
      this.delete.emit(page);
      overlayRef.dispose();
    });
    pageMenu.instance.duplicate.subscribe(() => {
      this.duplicate.emit(page);
      overlayRef.dispose();
    });
  }
}
