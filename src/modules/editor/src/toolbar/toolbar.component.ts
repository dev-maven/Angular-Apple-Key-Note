import { Component, HostBinding, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PebEditorPublishDialogComponent } from './dialogs/publish/publish.dialog';
import { ComponentType } from '@angular/cdk/portal';
import { PebEditorSectionsDialogComponent } from './dialogs/sections/sections.dialog';
import { PebEditorMediaDialogComponent } from './dialogs/media/media.dialog';
import { PebEditorScreenDialogComponent } from './dialogs/screen/screen.dialog';
import { PebEditorZoomDialogComponent } from './dialogs/zoom/zoom.dialog';
import { PebEditorState } from '../services/editor.state';
import { PebEditorSeoDialogComponent } from './dialogs/seo/seo.dialog';
import { first, tap, filter } from 'rxjs/operators';
import { PebScreen } from '@pe/builder-core';
import { PebElementType } from '../../../core/src/models/element';
import { PebEditorStore } from '../services/editor.store';

enum ToolsDialogType {
  Sections = 'sections',
  Media = 'media',
  Objects = 'objects',
  Product = 'product',
  Publish = 'publish',
  Screen = 'screen',
  Seo = 'seo',
  Zoom = 'zoom',
}

@Component({
  selector: 'peb-editor-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebEditorToolbarComponent {
  @Input() loading: boolean;

  @Output() createElement = new EventEmitter<PebElementType>();

  scales = [33, 50, 75, 100, 150, 200, 300];
  screens = Object.values(PebScreen);

  ToolsDialogType = ToolsDialogType;

  constructor(
    public editorState: PebEditorState,
    private matDialog: MatDialog,
    private store: PebEditorStore,
  ) {}

  @HostBinding('class.skeleton')
  get hostSkeletonClass(): boolean {
    return this.loading;
  }

  openSections(event: MouseEvent) {
    const dialog = this.openDialog(event, PebEditorSectionsDialogComponent);
  }

  openMedia(event: MouseEvent) {
    const dialog = this.openDialog(event, PebEditorMediaDialogComponent);
  }

  openObjects(event: MouseEvent) {
    // const dialog = this.openDialog(event, PebEditorObjectsDialogComponent);

    this.createElement.emit(PebElementType.Block);
  }

  openProduct(event: MouseEvent) {
    // this.editorComponent.appendProductElement();
    // const dialog = this.openDialog(event, PebEditorProductDialogComponent);
  }

  openPublish(event: MouseEvent) {
    this.openDialog(event, PebEditorPublishDialogComponent, this.store);
  }

  openScreen(event: MouseEvent) {
    const dialog = this.openDialog(event, PebEditorScreenDialogComponent);
    dialog.afterClosed().pipe(
      first(),
      filter(screen => !!screen),
      tap((screen: PebScreen) => this.editorState.screen = screen),
    ).subscribe();
  }

  openSeo(event: MouseEvent) {
    const dialog = this.openDialog(event, PebEditorSeoDialogComponent);
  }

  openZoom(event: MouseEvent) {
    const dialog = this.openDialog(event, PebEditorZoomDialogComponent);
    dialog.afterClosed().pipe(
      first(),
      filter(scale => !!scale),
      tap((scale: number) => this.editorState.scale = scale / 100),
    ).subscribe();
  }

  private openDialog<T>(event: MouseEvent, component: ComponentType<T>, data?: any): MatDialogRef<T> {
    const buttonNode: HTMLElement = this.findParentButtonNode(event);
    const buttonRect = buttonNode.getBoundingClientRect();
    return this.matDialog.open(component, {
      position: {
        top: `${buttonRect.top + buttonRect.height - 17}px`,
        right: `${document.body.clientWidth - buttonRect.right}px`,
      },
      backdropClass: 'dialog-backdrop',
      panelClass: 'dialog-publish-panel',
      data,
    });
  }

  private findParentButtonNode(value: MouseEvent | HTMLElement): HTMLElement {
    const target: HTMLElement = ((value as MouseEvent).target ? (value as MouseEvent).target : value) as HTMLElement;
    if (target.nodeName !== 'BUTTON') {
      return this.findParentButtonNode(target.parentElement);
    }

    return target;
  }
}
