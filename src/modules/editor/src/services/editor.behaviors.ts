import { Inject, Injectable, Injector, NgZone, OnInit } from '@angular/core';
import { combineLatest, fromEvent, merge, of, Subject, BehaviorSubject } from 'rxjs';
import { PebEditorState } from './editor.state';
import { EDITOR_CONFIG, PebEditorConfig } from '../editor.constants';
import { PebEditorStore } from './editor.store';
import { catchError, filter, finalize, map, takeUntil, tap } from 'rxjs/operators';
import { PebRendererComponent } from '@pe/builder-renderer';
import { pebCreateLogger } from '@pe/builder-core';

const log = pebCreateLogger('editor:events');

@Injectable({ providedIn: 'any' })
export class PebEditorBehaviors {
  constructor(
    @Inject(EDITOR_CONFIG) private config: PebEditorConfig,
    private store: PebEditorStore,
    private state: PebEditorState,
    private zone: NgZone,
  ) {
    this.state.makers = this.makers$.getValue();
  }

  // TODO: Make it like it was before
  readonly events$ = new Subject();

  readonly commands$ = new Subject<{ command: string; payload: any }>();

  readonly makers$ = new BehaviorSubject(this.config.makers);

  readonly pageEmpty$ = combineLatest([
    this.store.snapshot$,
    this.store.activePageId$,
  ]).pipe(
    filter(([snapshot, activePageId]) =>
      !snapshot || !activePageId
    ),
  );

  initEvents(renderer: PebRendererComponent) {
    const bindOutside = (target, event) => this.zone.runOutsideAngular(
      () => fromEvent(target, event)
    );

    // TODO: check if working outside of angular zone is really necessary
    // const bindOutside = (target, event) => fromEvent(target, event)

    return {
      windowClick$: bindOutside(window, 'click'),
      rendererClick$: bindOutside(renderer.nativeElement, 'click'),
      rendererDblClick$: bindOutside(renderer.nativeElement, 'dblclick'),
      rendererMousemove$: bindOutside(renderer.nativeElement, 'mousemove'),
      rendererMouseout$: bindOutside(renderer.nativeElement, 'mouseout'),
    };
  }

  initBehaviours(editor: any, renderer: PebRendererComponent) {
    const behaviourCtors = this.config.behaviours;

    const behaviourInjector = Injector.create({
      name: 'Behaviours Injector',
      parent: null,
      providers: [
        { provide: PebEditorState, useValue: this.state },
        { provide: PebRendererComponent, useValue: renderer },
        // TODO: Use abstract editor class with only public api
        { provide: 'EDITOR', useValue: editor },
        { provide: 'EVENTS', useValue: this.initEvents(renderer) },
        { provide: PebEditorStore, useValue: this.store },

        ...behaviourCtors.map(ctor => ({
          provide: ctor,
          useClass: ctor,
        })),
      ],
    });

    const behaviourInstances = behaviourCtors.map(
      behaviourCtor => behaviourInjector.get(behaviourCtor)
    );
    const behaviourObservables = behaviourInstances.map(b => (b as any).init().pipe(
      catchError(err => {
        console.error('Behavior threw error: ', err);
        return of(null);
      })
    ));

    log('Behaviours initiated');
    return merge(
      ...behaviourObservables
    ).pipe(
      takeUntil(
        merge(
          this.pageEmpty$,
          this.store.destroyed$,
        ),
      ),
      finalize(() => log('Behaviours terminated')),
    );
  }

}
