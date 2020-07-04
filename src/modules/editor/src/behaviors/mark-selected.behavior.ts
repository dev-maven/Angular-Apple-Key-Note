import { Inject, Injectable } from '@angular/core';
import { PebEditorBehaviourAbstract } from '../editor.constants';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { PebEditorState } from '../services/editor.state';
import { getElementAtEvent } from './utils/get-element-at-event.utils';
import { PebAbstractElement } from '../../../renderer/src/elements/_abstract/abstract.element';

@Injectable({ providedIn: 'any' })
export class PebEditorBehaviourMarkSingleSelected implements PebEditorBehaviourAbstract {
  selectedWidget: PebAbstractElement = null;

  constructor(
    private state: PebEditorState,
    @Inject('EVENTS') private events: { [evtName: string]: Observable<Event> },
  ) {}

  init(): Observable<any> {
    return this.events.windowClick$.pipe(
      tap((event: any) => {
        if (event.target.tagName !== 'PEB-RENDERER') { // TODO: Create a constant?
          // TODO: Listen only for clicks in renderer parent area
          // this.state.selectedElements = [];
          return;
        }

        const evtEl = getElementAtEvent(event);
        if (!evtEl) {
          if (this.selectedWidget) {
            this.selectedWidget.selected = false;
            this.selectedWidget.cdr.detectChanges();
            this.selectedWidget = null;
          }
          this.state.selectedElements = [];
          return;
        }

        const cmp = (window as any).ng.getComponent(getElementAtEvent(event)) as PebAbstractElement;
        if (!this.state.selectedElements.find(id => id === cmp.element.id)) {
          if (this.selectedWidget) {
            this.selectedWidget.selected = false;
            this.selectedWidget.cdr.detectChanges();
            this.selectedWidget = null;
          }

          this.selectedWidget = cmp;
          this.selectedWidget.selected = true;
          this.selectedWidget.cdr.detectChanges();

          this.state.selectedElements = [cmp.element.id];
        }
      }),
      finalize(() => this.state.selectedElements = []),
    );
  }

}
