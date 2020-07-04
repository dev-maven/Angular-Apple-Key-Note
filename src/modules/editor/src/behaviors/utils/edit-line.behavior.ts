import { Inject, Injectable } from '@angular/core';
import { PebEditorBehaviourAbstract } from '../../editor.constants';
import { PebEditorState } from '../../services/editor.state';
import { merge, Observable } from 'rxjs';
import { PebRendererComponent } from '@pe/builder-renderer';
import { filter, finalize, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PebElementType } from '@pe/builder-core';
import { PebAbstractElement } from '../../../../renderer/src/elements/_abstract/abstract.element';
import { random } from 'lodash-es';
import { PebEditorLineSidebarComponent } from '../../sidebars/line/line.sidebar';

@Injectable({providedIn: 'any'})
export class PebEditorBehaviourEditLine implements PebEditorBehaviourAbstract {

  constructor(
    @Inject('EDITOR') private editor: any,
    private editorState: PebEditorState,
    @Inject('EVENTS') private events: { [evtName: string]: Observable<Event> },
    private renderer: PebRendererComponent,
  ) {
  }

  init(): Observable<any> {
    const lineFocused$ = this.editorState.selectedElements$.pipe(
      map((selectedIds) => {
        if (selectedIds.length !== 1) {
          return false;
        }
        const widget = this.renderer.registry.get(selectedIds[0]);

        return widget.element.type === PebElementType.Line ? widget : false;
      })
    );

    return lineFocused$.pipe(
      filter(Boolean),
      switchMap((widget: PebAbstractElement) => {
        const sidebarCmpRef = this.editor.openSidebar(PebEditorLineSidebarComponent);
        sidebarCmpRef.instance.element = widget.element;
        sidebarCmpRef.instance.styles = widget.styles;
        sidebarCmpRef.changeDetectorRef.detectChanges();

        return this.editFlow(widget, sidebarCmpRef.instance).pipe(
          takeUntil(lineFocused$.pipe(filter(v => !v))),
          finalize(() => {
            sidebarCmpRef.destroy();
          }),
        );
      }),
    );
  }

  editFlow(widget: PebAbstractElement, sidebar: PebEditorLineSidebarComponent): Observable<any> {
    return merge(
      sidebar.applyStyles.pipe(
        tap(() => {
          if (sidebar.styleForm.get('stroke').value) {
            widget.styles.color = sidebar.styleForm.get('strokeColor').value;
            // widget.styles.width = sidebar.styleForm.get('width').value;
            widget.styles.backgroundColor = sidebar.styleForm.get('strokeColor').value;
            widget.styles.height = sidebar.styleForm.get('height').value;
          } else {
            widget.styles.color = null;
            widget.styles.backgroundColor = null;
            widget.styles.height = null;
          }
          widget.styles.boxShadow = sidebar.propertiesForm.get('shadow').value ? sidebar.boxShadow : null;
          widget.styles.width = sidebar.propertiesForm.get('width').value;
          widget.styles.transform = 'rotate(-' + sidebar.propertiesForm.get('lineAngle').value + 'deg)';
          widget.styles.opacity = sidebar.lineOpacity;
          widget.styles.float = sidebar.float;
          widget.styles.margin = sidebar.margin;
          widget.styles.top = sidebar.top;
          widget.applyStyles();
        }),
      )
    );
  }

}
