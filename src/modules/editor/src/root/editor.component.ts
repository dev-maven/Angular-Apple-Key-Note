import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ComponentFactoryResolver, ComponentRef, HostListener,
  Inject, Injector,
  Input, NgZone, OnDestroy,
  OnInit, Type, ViewChild, ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PebEditorState } from '../services/editor.state';
import { PebEditorBehaviors } from '../services/editor.behaviors';
import { BehaviorSubject, combineLatest, merge } from 'rxjs';
import {
  filter,
  map,
  takeUntil,
  tap,
  switchMap,
  repeatWhen,
  distinctUntilChanged
} from 'rxjs/operators';
import { ContextBuilder } from '../services/context.service';
import { PebRendererComponent } from '@pe/builder-renderer';
import { extractPageFromSnapshot, PebEditorStore } from '../services/editor.store';
import { PebEditorToolbarComponent } from '../toolbar/toolbar.component';
import { PebPageType, PebPageVariant } from '../../../core/src/models/client';
import { PebMakerType } from './../../../core/src/models/element';
import { pebCreateLogger, AbstractComponent, PebShopTheme, PebPageShort, PebElementType, PebApiService, PebPage} from '@pe/builder-core';
import { PebEditorProductsSidebarComponent } from '../sidebars/products/products.sidebar';
import { fromPairs } from 'lodash-es';
import { getIvyComponentSelector } from 'src/modules/renderer/src/utils';
import { PebAbstractElement } from 'src/modules/renderer/src/elements/_abstract/abstract.element';

const log = pebCreateLogger('editor:root');

@Component({
  selector: 'peb-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [
    PebEditorState,
    PebEditorBehaviors,
    PebEditorStore,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebEditorComponent extends AbstractComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  set theme(value: PebShopTheme) {
    this.store.openTheme(value, this.queryParams.pageId).subscribe();
  }

  @ViewChild(PebRendererComponent)
  set renderer(val: PebRendererComponent) {
    this.rendererSubject$.next(val);
  }

  @ViewChild(PebEditorToolbarComponent)
  toolbar: PebEditorToolbarComponent;

  @ViewChild('sidebarSlot', { read: ViewContainerRef })
  sidebarSlot: ViewContainerRef;

  modifiedElement$ = new BehaviorSubject<{id: string, cmpRef: ComponentRef<PebAbstractElement>}>(null);

  readonly rendererSubject$ = new BehaviorSubject<PebRendererComponent>(null);
  readonly renderer$ = this.rendererSubject$.pipe(distinctUntilChanged());

  // TODO: replace with subject that can have null value
  readonly pages$ = this.store.snapshot$.pipe(
    filter(Boolean),
    map(snapshot => Object.values((snapshot as any).pages)),
  );


  // todo: rename to page
  readonly snapshot$ = combineLatest([
    this.store.snapshot$,
    this.store.activePageId$,
    this.state.screen$.pipe(filter((v) => !!v)),
  ]).pipe(
    map(([snapshot, activePageId, screen]) => {
      console.log('inside');
      if (!snapshot || !activePageId) {
        return null;
      }

      const page = snapshot.pages[activePageId] as PebPageShort;

      if (!page) {
        debugger;
      }

      return {
        page,
        element: snapshot.templates[page.templateId],
        stylesheet: snapshot.stylesheets[page.stylesheetIds[screen]],
        contextSchema: snapshot.contextSchemas[page.contextId]
      };
    }),
  );

  readonly context$ = this.snapshot$.pipe(
    filter(Boolean),
    switchMap((snapshot: any) => this.contextManager.buildSchema(snapshot.contextSchema)),
  );

  readonly scaleSubject$ = new BehaviorSubject<number>(1);

  PebElementType = PebElementType;

  constructor(
    @Inject(PebApiService) private api: any,
    public store: PebEditorStore,
    public state: PebEditorState,
    public events: PebEditorBehaviors,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private contextManager: ContextBuilder,
    private injector: Injector,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    private cfr: ComponentFactoryResolver,
  ) {
    super();
  }

  get queryParams() {
    return (this.activeRoute.queryParams as any).value;
  }

  ngOnInit() {
    // const result = this.ngZone.runOutsideAngular(() => fromEvent(document, 'click'));
    //
    // result.pipe(
    //   tap(console.log)
    // ).subscribe();

    this.state.activedElement$.pipe(
      tap((activedElement) => {

        this.modifiedElement$.next(null);

        if (!activedElement || !activedElement.type) {
          return;
        }

        const AVAILABLE_MAKERS_SET = this.state.makers;
        const AVAILABLE_MAKERS_MAP = fromPairs(
          AVAILABLE_MAKERS_SET.map(
            cmp => [
              getIvyComponentSelector(cmp).replace('peb-maker-', '') as PebMakerType,
              cmp,
            ]
          )
        );

        if (!AVAILABLE_MAKERS_MAP[activedElement.type]) {
          return;
        }

        const elementComponent = AVAILABLE_MAKERS_MAP[activedElement.type];
        const cmpFactory = this.cfr.resolveComponentFactory<PebAbstractElement>(elementComponent);

        const cmpInjector = Injector.create({
          providers: [],
        });

        const cmpRef = cmpFactory.create(cmpInjector);

        this.modifiedElement$.next({
          id: activedElement.id,
          cmpRef
        });

      }),
      takeUntil(this.destroyed$),
    ).subscribe();

    merge(
      this.trackActivePageIdInQuery(),
      this.resetStoreOnPageChange(),
    ).pipe(
      takeUntil(this.destroyed$),
    ).subscribe();

    // dev
    // combineLatest([
    //   this.renderer$,
    //   this.snapshot$,
    // ]).pipe(
    //   filter(([r, s]) => !!r && !!s),
    //   tap(([r, snapshot]) => {
    //     this.state.selectedElements = [snapshot.element.children[1].id];
    //
    //     this.cdr.detectChanges();
    //   })
    // ).subscribe();

    // this.state.selectedElements$.pipe(
    //   tap((sel) => console.log(sel)),
    // ).subscribe();
  }

  ngAfterViewInit() {
    this.initEvents();
  }

  trackActivePageIdInQuery() {
    return combineLatest([
      this.store.snapshot$,
      this.store.activePageId$,
    ]).pipe(
      filter(([snapshot, activePageId]) => !!snapshot && !!activePageId),
      tap(([snapshot, activePageId]) => {
        const pageId = (snapshot.shop as any).data.frontPageId !== activePageId ? activePageId : null;

        this.router.navigate(['./'], {
          relativeTo: this.activeRoute,
          queryParamsHandling: 'merge',
          queryParams: { pageId }
        }).then();
      }),
    );
  }

  resetStoreOnPageChange() {
    return this.store.activePageId$.pipe(
      // distinctUntilChanged((a, b) => {
      //   if (a === b) {
      //     console.warn('Same page emitted');
      //   }
      //   return a === b;
      // }),
      tap((pageId) => {
        this.state.selectedId = null;
        this.state.selectedCmp = null; // derivate
        this.state.selectedType = null; // derivate
      }),
    );
  }

  initEvents() {
    this.renderer$.pipe(
      filter((r) => Boolean(r)),
      switchMap((renderer) => {
        return this.events.initBehaviours(this, renderer);
      }),
      repeatWhen(() => this.renderer$),
    ).subscribe();
  }

  onActivatePage(page: PebPage) {
    this.store.activatePage(page.id).subscribe();
  }

  onCreatePage(input: { type, masterId }) {
    const pageName = prompt('Enter page name:');

    if (!pageName || !pageName.length) {
      return alert('Page name should be provided');
    }

    this.store.createPage({
      name: pageName,
      variant: PebPageVariant.Default,
      type: input.type,
      masterId: input.masterId,
    }).subscribe();
  }

  onDuplicatePage(page) {
    const store = this.store as any;

    console.log(extractPageFromSnapshot(store.snapshot, page.id));
  }

  onDeletePage(page: any) {
    this.store.deletePage(page).subscribe();
  }

  openSidebar<T>(cmpClass: Type<T>): ComponentRef<T> {
    this.sidebarSlot.clear();

    const sidebarFactory = this.cfr.resolveComponentFactory(cmpClass);

    // TODO: consider using behaviors injector
    const sidebarRef = sidebarFactory.create(this.injector);

    this.sidebarSlot.insert(sidebarRef.hostView);

    return sidebarRef;
  }

  private deleteSelectedElement() {
    // if (this.selectedCmp.element.meta?.deletable === false) {
    //   return;
    // }
    //
    // const deleteElementAction = this.createAction([
    //   {
    //     type: PebTemplateEffect.DeleteElement,
    //     target: `${PebEffectTarget.Templates}:${this.page.template}`,
    //     payload: `${this.selectedId}`,
    //   },
    //   ...Object.values(PebScreen).map(screen => ({
    //     type: PebStylesheetEffect.Delete,
    //     target: `${PebEffectTarget.Stylesheets}:${this.page.stylesheets[screen]}`,
    //     payload: `${this.selectedId}`,
    //   })),
    //   {
    //     type: PebContextSchemaEffect.Delete,
    //     target: `${PebEffectTarget.ContextSchemas}:${this.page.context}`,
    //     payload: `${this.selectedId}`,
    //   },
    // ]);
    //
    // this.commitAction(deleteElementAction);
  }

  @HostListener('document:keydown.backspace') onBackspaceHandler(): void {
    this.deleteSelectedElement();
  }

  @HostListener('window:keydown.alt.Escape')
  onClosePage($event) {
    // console.log('page closed', $event);
    this.store.activatePage(null).subscribe();
  }

  @HostListener('window:keydown.control.z')
  onUndo() {
    this.store.undoAction();
  }

  @HostListener('window:keydown.control.shift.z')
  onRedo() {
    this.store.redoAction();
  }
}
