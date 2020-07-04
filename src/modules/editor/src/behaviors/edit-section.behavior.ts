import { Injectable, Inject } from '@angular/core';
import { PebEditorBehaviourAbstract } from '../editor.constants';
import { PebEditorState } from '../services/editor.state';
import { merge, Observable, of } from 'rxjs';
import { tap, map, filter, takeUntil, finalize, switchMap } from 'rxjs/operators';
import { PebRendererComponent } from '@pe/builder-renderer';
import { PebElementType } from '@pe/builder-core';
import { PebAbstractElement } from '../../../renderer/src/elements/_abstract/abstract.element';
import { PebEditorSectionSidebarComponent } from '../sidebars/section/section.sidebar';
import { random } from 'lodash-es';
import { PebEditorStore } from '../services/editor.store';
import { element } from 'protractor';


@Injectable({ providedIn: 'any' })
export class PebEditorBehaviourEditSection implements PebEditorBehaviourAbstract {
  constructor(
    @Inject('EDITOR') private editor: any, // TODO: PebAbstractEditor
    private state: PebEditorState,
    @Inject('EVENTS') private events: { [evtName: string]: Observable<Event> },
    private renderer: PebRendererComponent,
    private store: PebEditorStore,
  ) {}

  init(): Observable<any> {
    const sectionFocused$ = this.state.selectedElements$.pipe(
      map((selectedIds) => {
        if (selectedIds.length !== 1) {
          return false;
        }
        const widget = this.renderer.registry.get(selectedIds[0]);

        return widget.element.type === PebElementType.Section ? widget : false;
      }),
    );

    return sectionFocused$.pipe(
      filter(Boolean),
      switchMap((widget: PebAbstractElement) => {

        const sidebarCmpRef = this.editor.openSidebar(PebEditorSectionSidebarComponent);
        sidebarCmpRef.instance.element = widget.element;
        sidebarCmpRef.instance.styles = { some: 'foo' };
        sidebarCmpRef.changeDetectorRef.detectChanges();

        return this.editFlow(widget, sidebarCmpRef.instance).pipe(
          takeUntil(sectionFocused$.pipe(filter(v => !v))),
          finalize(() => {
            sidebarCmpRef.destroy();
          }),
        );
      }),
    );
  }

  editFlow(widget: PebAbstractElement, sidebar: PebEditorSectionSidebarComponent): Observable<any> {
    return merge(
      sidebar.changeBackground.pipe(
        switchMap(() => {
          const backgroundColor = '#' + Number(random(0, 16 ** 6)).toString(16).padStart(6, '0');

          // TODO(@dmlukichev): Start checking for direct overrides of the store here
          widget.styles.backgroundColor = backgroundColor;
          widget.applyStyles();

          return this.store.updateStyles(this.state.screen, {
            [widget.element.id]: { backgroundColor }
          })

          return of();
        }),
      )
    );
  }
}
