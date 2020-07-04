import { Inject, Injectable } from '@angular/core';
import { PebEditorBehaviourAbstract } from '../editor.constants';
import { merge, Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { pebCreateLogger } from '@pe/builder-core';
import { PebEditorState } from '../services/editor.state';
import { getElementAtEvent } from './utils/get-element-at-event.utils';

const log = pebCreateLogger('editor:behaviours:mark-hovered');

@Injectable({ providedIn: 'any' })
export class PebEditorBehaviourMarkHovered implements PebEditorBehaviourAbstract {
  constructor(
    private state: PebEditorState,
    @Inject('EVENTS') private events: { [evtName: string]: Observable<Event> },
  ) {}

  init(): Observable<any> {
    log('initiated');

    return merge(
      this.events.rendererMousemove$.pipe(
        tap(evt => {
          const evtEl = getElementAtEvent(evt);
          if (!evtEl) {
            this.state.hoveredElement = null;
            return;
          }

          const cmp = (window as any).ng.getComponent(getElementAtEvent(evt));

          if (this.state.hoveredElement !== cmp.element.id) {
            // log('new hovered element set');
            this.state.hoveredElement = cmp.element.id;
          }
        })
      ),
      this.events.rendererMouseout$.pipe(
        tap(() => {
          this.state.hoveredElement = null;
        })
      )
    ).pipe(
      finalize(() => {
        this.state.hoveredElement = null;
        log('completed');
      }),
    );
  }

}
