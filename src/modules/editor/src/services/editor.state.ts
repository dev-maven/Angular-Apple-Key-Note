import { Injectable } from '@angular/core';
import { PebScreen, PebElementId, PebElementType, PebElement } from '@pe/builder-core';
import { BehaviorSubject } from 'rxjs';
import { PebRendererComponent } from '@pe/builder-renderer';
import { distinctUntilChanged } from 'rxjs/operators';

const initialState = {
  scale: 0.6,
  screen: 'desktop',
  locale: 'en',
  hoveredElement: null,
  activedElement: null,
  selectedElements: [],
  sidebarType: null,
  makers: []
};

@Injectable()
export class PebEditorState {
  constructor() {
  }

  private readonly rendererSubject$ = new BehaviorSubject<PebRendererComponent>(null);
  readonly renderer$ = this.rendererSubject$.asObservable().pipe(
    distinctUntilChanged(),
  );

  set renderer(val: PebRendererComponent) {
    this.rendererSubject$.next(val);
  }

  get renderer() {
    return this.rendererSubject$.value;
  }

  private readonly scaleSubject$ = new BehaviorSubject<number>(initialState.scale);
  readonly scale$ = this.scaleSubject$.asObservable();

  set scale(val: number) {
    this.scaleSubject$.next(val);
  }

  get scale() {
    return this.scaleSubject$.value;
  }

  private readonly screenSubject$ = new BehaviorSubject<PebScreen>(initialState.screen as any);
  readonly screen$ = this.screenSubject$.asObservable();

  set screen(val: PebScreen) {
    this.screenSubject$.next(val);
  }

  get screen() {
    return this.screenSubject$.value;
  }

  private readonly hoveredElementSubject$ = new BehaviorSubject<PebElementId>(initialState.hoveredElement);
  readonly hoveredElement$ = this.hoveredElementSubject$.asObservable();

  set hoveredElement(id: PebElementId) {
    this.hoveredElementSubject$.next(id);
  }

  get hoveredElement() {
    return this.hoveredElementSubject$.value;
  }

  private readonly makersSubject$ = new BehaviorSubject(initialState.makers);
  readonly makers$ = this.makersSubject$.asObservable();

  set makers(makers) {
    this.makersSubject$.next(makers);
  }

  get makers() {
    return this.makersSubject$.value;
  }

  private readonly activedElementSubject$ = new BehaviorSubject(initialState.activedElement);
  readonly activedElement$ = this.activedElementSubject$.asObservable();

  set activedElement(element) {
    this.activedElementSubject$.next(element);
  }

  get activedElement() {
    return this.activedElementSubject$.value;
  }

  private readonly selectedElementsSubject$ = new BehaviorSubject<PebElementId[]>(initialState.selectedElements);
  readonly selectedElements$ = this.selectedElementsSubject$.asObservable();

  set selectedElements(ids: PebElementId[]) {
    this.selectedElementsSubject$.next(ids);
  }

  get selectedElements() {
    return this.selectedElementsSubject$.value;
  }

  private readonly sidebarTypeSubject$ = new BehaviorSubject<PebElementType>(initialState.sidebarType);
  readonly sidebarType$ = this.sidebarTypeSubject$.asObservable();

  set sidebarType(type: PebElementType) {
    this.sidebarTypeSubject$.next(type);
  }

  get sidebarType() {
    return this.sidebarTypeSubject$.value;
  }

  // dev
  selectedId: any;
  selectedCmp: any;
  selectedType: any;
}

