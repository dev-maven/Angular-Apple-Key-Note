import { Injectable, OnDestroy } from '@angular/core';
import {
  PebAction,
  pebActionHandler,
  PebApiService,
  PebContextSchemaEffect,
  pebCreateEmptyPage,
  PebEffectTarget,
  pebGenerateId,
  PebPageEffect,
  PebPageId,
  PebPageShort,
  PebScreen,
  PebShopEffect,
  PebShopTheme,
  PebShopThemeSnapshotEntity,
  PebShopThemeSource,
  PebStylesheetEffect,
  PebTemplateEffect
} from '../../../core/src';
import { BehaviorSubject, combineLatest, EMPTY, Observable, of, Subject, timer } from 'rxjs';
import { delay, map, share, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PebElementId } from '../../../core/src/models/element';
import { PebElementKit } from '../../../core/src/fixtures/element.fixtures';
import { PebPage, PebPageType, PebPageVariant, PebStylesheet } from '../../../core/src/models/client';
import { fromPairs } from 'lodash-es';
import { pebCompileActions } from '../../../core/src/actions/compiler';

@Injectable()
export class PebEditorStore implements OnDestroy {
  constructor(
    private api: PebApiService,
  ) {}

  ngOnDestroy() {
    this.snapshotSubject$.next(null);
    this.snapshotSubject$.complete();

    this.sourceSubject$.next(null);
    this.sourceSubject$.complete();

    this.destroyedSubject$.next(true);
    this.destroyedSubject$.complete();
  }

  private nextActions = [];

  // TODO(@dmlukichev): Check if it would be more convenient to use theme$, source$ and snapshot$
  //  after piping it through existence filter
  private readonly themeSubject$ = new BehaviorSubject<PebShopTheme>(null);
  readonly theme$ = this.themeSubject$.asObservable();

  private readonly sourceSubject$ = new BehaviorSubject<PebShopThemeSource>(null);
  readonly source$ = this.sourceSubject$.asObservable();
  private get source() {
    return this.sourceSubject$.value;
  }

  private readonly snapshotSubject$ = new BehaviorSubject<PebShopThemeSnapshotEntity>(null);
  readonly snapshot$ = this.snapshotSubject$.asObservable();
  private get snapshot() {
    // TODO: Dirty hack. To remove all attempts to modify snapshot directly use deepFreeze
    return JSON.parse(JSON.stringify(this.snapshotSubject$.value));
  }

  private readonly activePageIdSubject$ = new BehaviorSubject<PebPageId>(null);
  readonly activePageId$ = this.activePageIdSubject$.asObservable();
  get activePageId() {
    return this.activePageIdSubject$.value;
  }

  private readonly destroyedSubject$ = new Subject();
  readonly destroyed$ = this.destroyedSubject$.asObservable();

  openTheme(theme: PebShopTheme, initialPageId: PebPageId): Observable<null> {
    if (!theme) {
      throw new Error('Attempt to initiate store for empty theme');
    }

    const mockApiGetSource = (t) => of(t.source).pipe(delay(200));

    const mockApiGetSnapshot = (t) => of(t.source.snapshot).pipe(delay(200));

    this.themeSubject$.next(theme);

    return combineLatest([
      mockApiGetSource(theme),
      mockApiGetSnapshot(theme),
    ]).pipe(
      tap(([source, snapshot]) => {
        this.sourceSubject$.next(source);
        this.snapshotSubject$.next(snapshot);

        this.activePageIdSubject$.next(
          initialPageId || (theme.source.snapshot.shop as any).data.frontPageId
        );
      }),
      map(() => null),
      takeUntil(this.destroyed$),
      share(), // TODO: Check if this should go before `takeUntil()`
    );
  }

  activatePage(pageId): Observable<null> {
    this.activePageIdSubject$.next(null);

    const page = this.snapshot.pages[pageId];
    if (page.master) {
      const masterActions = extractPageActionsFromSnapshot(this.source, this.snapshot, page.master.id)
      const lastMasterActionId = masterActions[masterActions.length - 1].id;

      if (page.master.lastActionId !== lastMasterActionId) {
        const confirmation = confirm(
          'Page\'s master has been changed.\n' +
          'Do you want to apply this changes?'
        );

        if (confirmation) {
          this.applyMasterChangesInReplica(pageId).pipe(
            tap(() => this.activePageIdSubject$.next(pageId)),
          );
        }
      }
    }

    return timer(200).pipe(
      tap(() => this.activePageIdSubject$.next(pageId)),
      map(() => null),
      takeUntil(this.destroyed$),
      share(),
    );
  }

  createPage(input: {
    name: string,
    variant: PebPageVariant,
    type: PebPageType,
    masterId: PebPageId | null,
  }): Observable<any> {
    let pageSource: PebPage = null;

    if (input.masterId) {
      const masterActions = extractPageActionsFromSnapshot(this.source, this.snapshot, input.masterId);

      pageSource = extractPageFromSnapshot(this.snapshot, input.masterId);
      pageSource.id = pebGenerateId('page');
      pageSource.type = PebPageType.Replica;
      pageSource.master = {
        id: input.masterId,
        lastActionId: masterActions[masterActions.length - 1].id
      };
    } else {
      pageSource = pebCreateEmptyPage(input.name, input.type, input.variant);
    }

    const createPageAction = makeCreatePageAction(input.name, pageSource);

    return this.commitAction(createPageAction);

  }

  deletePage(page: PebPageShort): Observable<any> {
    const deletePageAction = makeDeletePageAction(page);

    return this.commitAction(deletePageAction).pipe(
      switchMap(() =>
        this.activePageId === page.id
          ? this.activatePage(this.snapshot.shop.frontPageId)
          : EMPTY
      ),
    );
  }

  appendElement(parentId: PebElementId, elementDef: any): Observable<any> {
    const page = this.snapshot.pages[this.activePageId];

    const appendAction = makeAppendElementAction(page, parentId, elementDef);

    return this.commitAction(appendAction);
  }

  updateStyles(screen: PebScreen, styles: PebStylesheet) {
    const page = this.snapshot.pages[this.activePageId];
    const stylesheetId = page.stylesheetIds[screen];

    const updateStylesAction: PebAction = {
      id: pebGenerateId('action'),
      createdAt: new Date(),
      effects: [
        {
          type: PebStylesheetEffect.Update,
          target: `${PebEffectTarget.Stylesheets}:${stylesheetId}`,
          payload: styles,
        }
      ]
    };

    return this.commitAction(updateStylesAction);
  }

  // TODO: Clear what should be undone: last action on the page or last action of the theme
  undoAction() {
    const hasActionsBesidesInitial = this.source.actions.length > 1;
    if (!hasActionsBesidesInitial) {
      return false;
    }

    const removedAction = this.source.actions[this.source.actions.length - 1];
    this.nextActions.push(removedAction);

    this.sourceSubject$.next({
      ...this.source,
      actions: this.source.actions.slice(0, this.source.actions.length - 1),
    });
    this.snapshotSubject$.next({
      ...pebCompileActions(this.source.actions),
      id: this.snapshot.id,
    });

    const activePageExists = this.snapshot.pages[this.activePageId];
    if (!activePageExists) {
      this.activePageIdSubject$.next(this.snapshot.pages[0]);
    }

    this.api.undoAction(this.themeSubject$.value.id);
  }

  redoAction() {
    if (this.nextActions.length === 0) {
      return;
    }

    this.commitAction(this.nextActions.pop());
  }

  private commitAction(action): Observable<any> {
    this.sourceSubject$.next({
      ...this.sourceSubject$.value,
      actions: [...(this.sourceSubject$.value as any).actions, action],
    });

    const newSnapshot = pebActionHandler(this.snapshotSubject$.value as any, action);

    this.snapshotSubject$.next(newSnapshot);

    return this.api.addAction(this.themeSubject$.value.id, action);
  }

  private applyMasterChangesInReplica(pageId: PebPageId) {
    const page = this.snapshot.pages[pageId];

    const masterActions = extractPageActionsFromSnapshot(this.source, this.snapshot, page.master.id);
    const replicaActions = extractPageActionsFromSnapshot(this.source, this.snapshot, pageId);

    const prevReplicaInitAction = replicaActions[0];

    const masterSource = extractPageFromSnapshot(this.snapshot, page.master.id);
    masterSource.id = page.id;
    masterSource.type = PebPageType.Replica;
    masterSource.master = {
      id: page.master.id,
      lastActionId: masterActions[masterActions.length - 1].id
    };

    const newReplicaInitAction = makeCreatePageAction(page.name, masterSource, {
      pageId,
      templateId: page.templateId,
      stylesIds: page.stylesheetIds,
      contextId: page.contextId,
    });

    this.sourceSubject$.next({
      ...this.sourceSubject$.value,
      actions: this.sourceSubject$.value.actions.map(
        a => a.id === prevReplicaInitAction.id ? newReplicaInitAction : a
      ),
    });

    this.snapshotSubject$.next({
      ...pebCompileActions(this.source.actions),
      id: this.snapshot.id,
    });

    return this.api.updateReplica(this.themeSubject$.value.id, prevReplicaInitAction, newReplicaInitAction);;
  }
}

export function makeCreatePageAction(pageName, pageSource, ids?: any ): PebAction {
  const templateId = ids?.templateId || pebGenerateId('template');
  const stylesIds = ids?.stylesIds || {
    [PebScreen.Desktop]: pebGenerateId('stylesheet'),
    [PebScreen.Tablet]: pebGenerateId('stylesheet'),
    [PebScreen.Mobile]: pebGenerateId('stylesheet'),
  };
  const contextId = ids?.stylesIds || pebGenerateId('context');

  return  {
    id: pebGenerateId('action'),
    createdAt: new Date(),
    effects: [
      {
        type: PebTemplateEffect.Init,
        target: `${PebEffectTarget.Templates}:${templateId}`,
        payload: pageSource.template,
      },
      ...Object.values(PebScreen).map(screen => ({
        type: PebStylesheetEffect.Init,
        target: `${PebEffectTarget.Stylesheets}:${stylesIds[screen]}`,
        payload: pageSource.stylesheets[screen],
      })),
      {
        type: PebContextSchemaEffect.Init,
        target: `${PebEffectTarget.ContextSchemas}:${contextId}`,
        payload: pageSource.context,
      },
      {
        type: PebPageEffect.Create,
        target: `${PebEffectTarget.Pages}:${pageSource.id}`,
        payload: {
          id: pageSource.id,
          variant: pageSource.variant,
          type: pageSource.type,
          master: pageSource.master,
          name: pageName,
          data: pageSource.data,
          templateId,
          stylesheetIds: {
            [PebScreen.Desktop]: `${stylesIds[PebScreen.Desktop]}`,
            [PebScreen.Tablet]: `${stylesIds[PebScreen.Tablet]}`,
            [PebScreen.Mobile]: `${stylesIds[PebScreen.Mobile]}`,
          },
          contextId,
        },
      },
      ...(ids?.page ? [{
        type: PebShopEffect.AppendPage,
        target: PebEffectTarget.Shop,
        payload: pageSource.id
      }] : []),
    ]
  };
}

export function makeDeletePageAction(page: PebPageShort): PebAction {
  return {
    id: pebGenerateId('action'),
    createdAt: new Date(),
    effects: [
      {
        type: PebTemplateEffect.Destroy, // TODO: Unify naming with other targets
        target: `${PebEffectTarget.Templates}:${page.templateId}`,
        payload: null,
      },
      ...Object.values(PebScreen).map(screen => ({
        type: PebStylesheetEffect.Delete,
        target: `${PebEffectTarget.Stylesheets}:${page.stylesheetIds[screen]}`,
        payload: null,
      })),
      {
        type: PebContextSchemaEffect.Delete,
        target: `${PebEffectTarget.ContextSchemas}:${page.contextId}`,
        payload: null,
      },
      {
        type: PebPageEffect.Delete,
        target: `${PebEffectTarget.Pages}:${page.id}`,
        payload: null,
      },
      {
        type: PebShopEffect.DeletePage,
        target: PebEffectTarget.Shop,
        payload: page.id,
      },
    ]
  };
}

export function makeAppendElementAction(page: PebPageShort, parentId: PebElementId, elementKit: PebElementKit) {
  const elementId = elementKit.element.id;

  return {
    id: pebGenerateId('action'),
    createdAt: new Date(),
    effects: [
      {
        type: PebTemplateEffect.AppendElement,
        target: `${PebEffectTarget.Templates}:${page.templateId}`,
        payload: {
          to: parentId,
          element: elementKit.element,
        }
      },
      ...Object.values(PebScreen).map(screen => ({
        type: PebStylesheetEffect.Update,
        target: `${PebEffectTarget.Stylesheets}:${page.stylesheetIds[screen]}`,
        payload: {
          [elementId]: elementKit.styles[screen]
        },
      })),
      {
        type: PebContextSchemaEffect.Update,
        target: `${PebEffectTarget.ContextSchemas}:${page.contextId}`,
        payload: elementKit.contextSchema ? { [elementId]: elementKit.contextSchema } : null,
      },
    ],
  };
}

export function extractPageFromSnapshot(snapshot: PebShopThemeSnapshotEntity , pageId: PebPageId): PebPage {
  const page = snapshot.pages[pageId];
  const template = snapshot.templates[page.templateId];

  const stylesheets = fromPairs(
    Object.entries(PebScreen).map(([key, screen]) =>
      [screen, snapshot.stylesheets[page.stylesheetIds[screen]]]
    )
  );
  const context = snapshot.contextSchemas[page.contextId];

  return {
    id: page.id,
    name: page.name,
    variant: page.variant,
    type: page.type,
    master: page.master,
    data: page.data,
    template,
    stylesheets,
    context,
  };
}

export function extractPageActionsFromSnapshot(source: PebShopThemeSource, snapshot: PebShopThemeSnapshotEntity, pageId: PebPageId) {
  const page = snapshot.pages[pageId];

  const effectTargets = [
    `${PebEffectTarget.Pages}:${page.id}`,
    `${PebEffectTarget.Templates}:${page.templateId}`,
      ...Object.values(page.stylesheetIds).map(sid =>
        `${PebEffectTarget.Stylesheets}:${sid}`
      ),
    `${PebEffectTarget.ContextSchemas}:${page.contextId}`,
  ];

  return source.actions.filter(a =>
    a.effects.find(e => effectTargets.includes(e.target))
  );
}
