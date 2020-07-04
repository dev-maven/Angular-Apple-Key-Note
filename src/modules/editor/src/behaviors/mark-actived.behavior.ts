import { Inject, Injectable } from '@angular/core';
import { PebEditorBehaviourAbstract } from '../editor.constants';
import { merge, Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { pebCreateLogger } from '@pe/builder-core';
import { PebEditorState } from '../services/editor.state';
import { getElementAtEvent } from './utils/get-element-at-event.utils';

const log = pebCreateLogger('editor:behaviours:mark-actived');

@Injectable({ providedIn: 'any' })
export class PebEditorBehaviourMarkActivedElement implements PebEditorBehaviourAbstract {
  constructor(
    private state: PebEditorState,
    @Inject('EVENTS') private events: { [evtName: string]: Observable<Event> },
  ) {}

  init(): Observable<any> {
    log('initiated');

    return merge(
      this.events.rendererDblClick$.pipe(
        tap(evt => {
          const evtEl = getElementAtEvent(evt);
          if (!evtEl) {
            this.state.activedElement = null;
            return;
          }

          const cmp = (window as any).ng.getComponent(getElementAtEvent(evt));

          if (!this.state.activedElement || this.state.activedElement.id !== cmp.element.id) {
            this.state.activedElement = cmp.element;
          }
        })
      )
    ).pipe(
      finalize(() => {
        this.state.activedElement = null;
        log('completed');
      }),
    );
  }

}
