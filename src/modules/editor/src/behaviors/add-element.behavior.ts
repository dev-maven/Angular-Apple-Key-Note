import { Inject, Injectable } from '@angular/core';
import { EMPTY, merge, Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { PebEditorBehaviourAbstract } from '../editor.constants';
import { PebEditorState } from '../services/editor.state';
import { PebRendererComponent } from '@pe/builder-renderer';
import { pebGenerateId } from '../../../core/src/utils/generate-id';
import { PebElement, PebElementType } from '../../../core/src/models/element';
import { PebScreen } from '../../../core/src/constants';
import { PebEditorStore } from '../services/editor.store';
import { random } from 'lodash-es';

const { Block } = PebElementType;

@Injectable({ providedIn: 'any' })
export class PebEditorBehaviourAddElement implements PebEditorBehaviourAbstract {
  constructor(
    @Inject('EDITOR') private editor: any, // TODO: PebAbstractEditor
    private state: PebEditorState,
    @Inject('EVENTS') private events: { [evtName: string]: Observable<Event> },
    private renderer: PebRendererComponent,
    private store: PebEditorStore,
  ) {}

  init(): Observable<any> {
    return merge(
      this.addBlock()
    );
  }

  addBlock() {
    return this.editor.toolbar.createElement.pipe(
      filter(elType => elType === Block),
      switchMap((type) => {
        const { scale, screen } = this.state;
        const selIds = this.state.selectedElements;

        if (selIds.length !== 1) {
          alert('You should have only one selected element');
          return EMPTY;
        }
        const parentWidget = this.renderer.registry.get(selIds[0]);
        const parentElement = parentWidget.element;
        const parentNode = parentWidget.nativeElement;
        const parentRect = parentNode.getBoundingClientRect();

        const newElem: PebElement = {
          id: pebGenerateId(),
          type: Block,
          children: [],
        };
        const newStyles = {
          [PebScreen.Desktop]: { display: 'none' },
          [PebScreen.Tablet]: { display: 'none' },
          [PebScreen.Mobile]: { display: 'none' },
          [screen]: {
            position: 'absolute',
            width: 0.6 * parentRect.width / scale,
            height: 0.6 * parentRect.height / scale,
            top: 0.2 * parentRect.height / scale,
            left: 0.2 * parentRect.width / scale,
            backgroundColor: '#' + Number(random(16 ** 6)).toString(16),
          }
        };

        return this.store.appendElement(parentElement.id, {
          element: newElem,
          styles: newStyles,
          contextSchema: null,
        });
      })
    );
  }
}
