import { RenderFunction, RenderFunctionType } from './../../renderer.tokens';
import {
  AfterViewInit, ChangeDetectorRef, Component,
  ElementRef, EventEmitter, HostBinding, HostListener,
  Inject,
  Injector,
  Input, OnChanges, OnDestroy, QueryList,
  ViewChildren,
} from '@angular/core';
import { PebRendererChildrenSlotDirective } from '../../selectors/children-slot.directive';
import { ParentElementComponent, RendererInteractionEmitter,  RenderChildsFunctionType, RenderChildsFunction } from '../../renderer.tokens';
import { isArray } from 'lodash-es';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';
import { PebRendererOptions } from '../../renderer.types';
import { PebElement, PebElementStyles, PebStylesheet, PebElementContext } from '@pe/builder-core';

@Component({
  selector: 'peb-element-abstract',
  template: '',
})
export abstract class PebAbstractElement implements AfterViewInit, OnChanges, OnDestroy {
  @Input() element: PebElement;
  @Input() styles: PebElementStyles;
  @Input() context: PebElementContext<any>;

  @Input() options: PebRendererOptions;

  /** @deprecated: dev only. do not use or rely on */
  @Input() selected = false;

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChildren(PebRendererChildrenSlotDirective)
  childSlots: QueryList<PebRendererChildrenSlotDirective>;

  constructor(
    @Inject(RenderFunction) private renderElement: RenderFunctionType,
    @Inject(RenderChildsFunction) private renderElementChilds: RenderChildsFunctionType,
    @Inject(RendererInteractionEmitter) private interactionEmitter: EventEmitter<any>,
    @Inject('STYLESHEET') private stylesheet: PebStylesheet,
    @Inject('PARENT_ELEMENT') private parentCmp: PebAbstractElement,
    protected injector: Injector,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public sanitizer: DomSanitizer,

    // dev
    public cdr: ChangeDetectorRef,
  ) {}

  ngOnChanges() {
    this.applyStyles();
  }

  ngAfterViewInit() {
    this.renderChildren();
    this.applyStyles();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  renderChildren() {
    this.renderElementChilds(this);
  }

  get parent() {
    return this.injector.get(ParentElementComponent);
  }

  get nativeElement() {
    return this.elementRef.nativeElement;
  }

  protected abstract get elements(): { [key: string]: HTMLElement | HTMLElement[]};

  protected abstract get mappedStyles(): any;

  applyStyles() {
    if (this.elements) {
      Object.entries(this.elements).forEach(([name, element]) => {
        if (element) {
          // TODO: add logs if there is no mapped styles for an element
          const elementStyles = this.mappedStyles && this.mappedStyles[name] ? this.mappedStyles[name] : {};
          const elementsArr = isArray(element) ? element : [element];
          elementsArr.forEach(elem => Object.entries(elementStyles).forEach(
            ([prop, value]) => this.renderer.setStyle(elem, prop, value),
          ));
        }
      });
    }
  }

  interact(payload) {
    this.interactionEmitter.emit(payload);
  }

  @HostBinding('attr.peb-element-id')
  get attrElementId() {
    return this.element.id;
  }
}

// FIXME(@ng-packagr/ng-packagr/issues/710): Remove compile warnings
const HIDE_WARNINGS = {
  HostBinding,
  HostListener,
  QueryList,
};
