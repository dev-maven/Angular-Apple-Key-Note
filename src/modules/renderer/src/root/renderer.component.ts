import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Inject,
  Injector,
  Input,
  OnChanges,
  Output,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ElementRef,
  ViewEncapsulation,
  OnInit, HostBinding, SimpleChanges,
} from '@angular/core';

import {
  PebElement as PebElement_OLD,
  PebElementId, PebScreen, pebTraverseElementDeep, pebCreateLogger, PebElement, pebFindElementChildrenWithParent
} from '@pe/builder-core';
import { PebRendererChildrenSlotDirective } from '../selectors/children-slot.directive';
import { PebAbstractElement } from '../elements/_abstract/abstract.element';
import { ElementComponentsCollection, RendererInteractionEmitter, RenderFunction, RenderFunctionType, RenderChildsFunction } from '../renderer.tokens';
import { PebRendererOptions } from '../renderer.types';
import { PebContext, PebStylesheet, TreeVariables } from '../core.types';
import { BehaviorSubject } from 'rxjs';
import { forEach, keys, keyBy, sortBy, union } from 'lodash-es';
import { takeUntil, tap, debounceTime } from 'rxjs/operators';
import { AbstractComponent } from '@pe/builder-core';

const log = pebCreateLogger('renderer:root');

interface ITreeVariablesChanges {
  previous: TreeVariables;
  current: TreeVariables;
}

@Component({
  selector: 'peb-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PebRendererComponent extends AbstractComponent implements OnChanges, AfterViewInit, OnInit {

  @Input() element: PebElement;
  @Input() stylesheet: PebStylesheet;
  @Input() context: PebContext;
  @Input() options: PebRendererOptions = {
    screen: PebScreen.Desktop,
    scale: 1,
    locale: 'en',
  };

  @Input('options.scale')
  set setOptionsScale(scale: number) {
    this.options = { ...this.options, scale };
  }

  @Input('options.screen')
  set setOptionsScreen(screen: PebScreen) {
    this.options = { ...this.options, screen };
  }

  @Input('options.locale')
  set setOptionsLocal(locale: string) {
    this.options = { ...this.options, locale };
  }

  @Input() modifiedElement: BehaviorSubject<{id: string, cmpRef: ComponentRef<PebAbstractElement>}> = new BehaviorSubject(null);
  @Output() rendered = new EventEmitter<any>();
  @Output() interacted = new EventEmitter<any>();

  @ViewChild(PebRendererChildrenSlotDirective, { read: ViewContainerRef })
  mainSlot: ViewContainerRef;

  idsToRender: PebElementId[] = [];
  registrySlot: Map<PebElementId, ViewContainerRef> = new Map();
  registry: Map<PebElementId, PebAbstractElement> = new Map();
  registryAbstract: Map<PebElementId, ComponentRef<PebAbstractElement>> = new Map();

  private treeVariablesChanges$: BehaviorSubject<ITreeVariablesChanges> = new BehaviorSubject({ previous: {}, current: {} });
  private makerId$ = new BehaviorSubject<string>(null);

  screenThresholds = {
    desktop: 1280,
    tablet: 768,
    mobile: 360,
  };

  constructor(
    private elementRef: ElementRef,
    private injector: Injector,
    private cfr: ComponentFactoryResolver,
    @Inject(ElementComponentsCollection) private elementsCollection: any[],
  ) {
    super();
  }

  ngOnInit() {
    this.treeVariablesChanges$
      .pipe(
        debounceTime(100),
        tap((variables) => this.getDifferenceVariables(variables)),
        takeUntil(this.destroyed$)
      ).subscribe();

    this.modifiedElement.pipe(
      tap((modified) => {

        const selectedMaker = this.makerId$.getValue();
        const { current: currentElement } = this.treeVariablesChanges$.getValue();
        let cmpFactory;

        if (selectedMaker) { // todo: fix
          const makerElement = currentElement[selectedMaker];
          const makerType = makerElement.type;
          const elementComponent = this.elementsCollection[makerType];
          cmpFactory = this.cfr.resolveComponentFactory<PebAbstractElement>(elementComponent);
          const cmpInjector = Injector.create({
            providers: [
              {
                provide: 'STYLESHEET',
                useValue: this.stylesheet,
              },
              {
                provide: 'PARENT_ELEMENT',
                useValue: null,
              },
              {
                provide: RenderFunction,
                useValue: this.renderElement,
              },
              {
                provide: RenderChildsFunction,
                useValue: this.renderElementChilds,
              },
              {
                provide: RendererInteractionEmitter,
                useValue: this.interacted,
              }
            ],
            parent: this.injector,
          });
          const cmpRef = cmpFactory.create(cmpInjector);
          cmpRef.instance.element = makerElement;
          cmpRef.instance.styles = this.stylesheet[makerElement.id] || {};
          cmpRef.instance.context = (cmpFactory.componentType as any).contextFetcher
            ? (cmpFactory.componentType as any).contextFetcher(this.context)
            : this.context?.hasOwnProperty(makerElement.id) ? this.context[makerElement.id] : null;

          cmpRef.instance.options = this.options;
          cmpRef.instance.applyStyles();
          this.createSlot(cmpRef, makerElement);
        }

        if (!modified || selectedMaker === modified.id) {
          return;
        }

        const element = currentElement[modified.id];

        modified.cmpRef.instance.element = element;
        modified.cmpRef.instance.styles = this.stylesheet[element.id] || {};
        modified.cmpRef.instance.context = this.context?.hasOwnProperty(element.id) ? this.context[element.id] : null;
        modified.cmpRef.instance.options = this.options;

        this.createSlot(modified.cmpRef, element, true);

      }),
      takeUntil(this.destroyed$)
    ).subscribe();

  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkTreeVariables();
  }

  ngAfterViewInit() {
    this.checkTreeVariables();
  }


  get nativeElement() {
    return this.elementRef.nativeElement;
  }

  private createSlot(cmpRef: ComponentRef<PebAbstractElement>, element: PebElement, isMaker = false) {

    cmpRef.changeDetectorRef.detectChanges();

    const slotRef = this.registrySlot.get(element.id);
    slotRef.clear();

    this.registrySlot.set(element.id, slotRef);
    slotRef.insert(cmpRef.hostView);

    if (isMaker) {
      this.makerId$.next(element.id);
      return;
    }

    this.makerId$.next(null);
  }

  private getDifferenceVariables(variables: ITreeVariablesChanges) {
    const { current: currentVariables, previous: previousVariables } = variables;
    const keysMergeVariables = union([...(keys(currentVariables)), ...(keys(previousVariables))]);
    const differenceVariables = {};
    forEach(keysMergeVariables, (key) => {

      if (
        previousVariables[key] &&
        currentVariables[key] &&
        currentVariables[key].hashParent !== previousVariables[key].hashParent
      ) {
        return differenceVariables[key] = { ...currentVariables[key], executeType: 'move' };
      }

      if (
        previousVariables[key] &&
        !currentVariables[key]
      ) {
        return differenceVariables[key] = { ...previousVariables[key], executeType: 'delete' };
      }

      if (
        !previousVariables[key] &&
        currentVariables[key] &&
        (
          !differenceVariables[currentVariables[key].parentId]
        )
      ) {
        return differenceVariables[key] = { ...currentVariables[key], executeType: 'create' };
      }

      if (
        previousVariables[key] &&
        currentVariables[key] &&
        currentVariables[key].hashStyle !== previousVariables[key].hashStyle
      ) {
        return differenceVariables[key] = { ...currentVariables[key], executeType: 'changeStyle' };
      }

    });

    this.render(differenceVariables);
  }


  private generateHash(hashedObject) {
    let hash = 0;
    if (hashedObject.length === 0) {
      return hash;
    }
    for (let i = 0; i < hashedObject.length; i++) {
      const char = hashedObject.charCodeAt(i);
      // tslint:disable-next-line:no-bitwise
      hash = ((hash << 5) - hash) + char;
      // tslint:disable-next-line:no-bitwise
      hash = hash & hash;
    }
    return hash;
  }


  private checkTreeVariables() {
    const placeElement = pebFindElementChildrenWithParent(this.element, _ => {
      return true;
    }).map(v => {
      const hashNode = v;
      const hashParent = v.parentId;
      const hashStyle = this.stylesheet[v.id] ? this.stylesheet[v.id] : {};
      return {
        hashNode: this.generateHash(JSON.stringify(hashNode)),
        hashParent: this.generateHash(JSON.stringify(hashParent)),
        hashStyle: this.generateHash(JSON.stringify(hashStyle)),
        ...v
      };
    });

    const { current: currentVariables } = this.treeVariablesChanges$.getValue();
    const placeElementToObject: any | TreeVariables = keyBy(placeElement, 'id');
    this.treeVariablesChanges$.next({
      previous: currentVariables,
      current: placeElementToObject,
    });
  }


  private render(difference) {
    log('Rendering started');
    if (!this.mainSlot) {
      log('FIXME: Attempt to render while slot is not created');
      return;
    }
    if (this.element) {

      pebTraverseElementDeep(this.element as PebElement_OLD, (el) => this.idsToRender.push(el.id));
      this.renderElement(this.element as PebElement_OLD, this.mainSlot, null);

      const { current: currentVariables } = this.treeVariablesChanges$.getValue();
      forEach(sortBy(difference, [v => v.priority]), (element) => {
        const currentParentId = element.parentId ? element.parentId : null;

        switch (element.executeType) {
          case 'create':
            if (this.registryAbstract.has(currentParentId)) {
              this.registryAbstract.get(currentParentId).instance.element = currentVariables[currentParentId];
              this.updateStylesAndContext(currentParentId);
              this.registryAbstract.get(currentParentId).instance.renderChildren();
            }
            break;

          case 'move':
            this.registryAbstract.get(element.id).destroy();
            this.registryAbstract.delete(element.id);

            this.registrySlot.get(element.id).clear();

            if (this.registryAbstract.has(currentParentId)) {
              this.registryAbstract.get(currentParentId).instance.element = currentVariables[currentParentId];
            }
            this.updateStylesAndContext(currentParentId);
            this.registryAbstract.get(currentParentId).instance.renderChildren();

            break;

          case 'delete':

            this.registryAbstract.get(element.id).destroy();
            this.registryAbstract.delete(element.id);
            break;

          case 'changeStyle':
            if (this.registryAbstract.has(element.id)) {
              this.updateStylesAndContext(element.id);
            }
            break;
        }
      });
    }
  }

  private updateStylesAndContext(id) {
    if (this.registryAbstract.has(id)) {
      const widgetInstance = this.registryAbstract.get(id).instance;
      const widgetClass = this.registryAbstract.get(id).componentType as any;

      widgetInstance.styles = this.stylesheet[id] || {};
      widgetInstance.context = widgetClass.contextFetcher
        ? widgetClass.contextFetcher(this.context)
        : this.context ? this.context[id] : null;
      widgetInstance.applyStyles();

      this.registryAbstract.get(id).changeDetectorRef.detectChanges();
    }
  }

  private renderElementChilds(abstractElement) {
    if (abstractElement.element.children) {
      abstractElement.childSlots.forEach(slot => {
        const slotName = slot.name === '' ? 'main' : slot.name;
        abstractElement.element.children
          .filter(elDef => {
            const elSlot = (abstractElement.stylesheet[elDef.id] || {}).slot;

            return (!elSlot && slotName === 'main') || (elSlot === slotName);
          })
          .forEach(elDef => {
            this.renderElement(elDef, slot.viewRef, abstractElement);
          });
      });

    }
  }

  private renderElement: RenderFunctionType = (
    elementDef: PebElement,
    slotRef: ViewContainerRef,
    parentCmp: null | PebAbstractElement,
  ) => {

    if (this.registryAbstract.has(elementDef.id)) { return; }

    this.idsToRender.push(elementDef.id);
    const elementComponent = this.elementsCollection[elementDef.type];

    if (!elementComponent) {
      throw new Error(`
        "${elementDef.type}" element component was not found,
        make sure you add it to AVAILABLE_ELEMENTS_MAP in renderer.module.ts
      `);
    }

    // console.log(111, elementDef.type, this.elementsCollection);

    const cmpFactory = this.cfr.resolveComponentFactory<PebAbstractElement>(elementComponent);
    const cmpInjector = Injector.create({
      providers: [
        {
          provide: 'STYLESHEET',
          useValue: this.stylesheet,
        },
        {
          provide: 'PARENT_ELEMENT',
          useValue: parentCmp,
        },
        {
          provide: RenderFunction,
          useValue: this.renderElement,
        },
        {
          provide: RenderChildsFunction,
          useValue: this.renderElementChilds,
        },
        {
          provide: RendererInteractionEmitter,
          useValue: this.interacted,
        }
      ],
      parent: this.injector,
    });

    const cmpRef = cmpFactory.create(cmpInjector);
    cmpRef.instance.element = elementDef;
    cmpRef.instance.styles = this.stylesheet[elementDef.id] || {};
    cmpRef.instance.context = (cmpFactory.componentType as any).contextFetcher
      ? (cmpFactory.componentType as any).contextFetcher(this.context)
      : this.context?.hasOwnProperty(elementDef.id) ? this.context[elementDef.id] : null;

    cmpRef.instance.options = this.options;
    cmpRef.instance.applyStyles();
    cmpRef.changeDetectorRef.detectChanges();
    this.registry.set(elementDef.id, cmpRef.instance);
    this.registryAbstract.set(elementDef.id, cmpRef);
    this.registrySlot.set(elementDef.id, slotRef);

    if (slotRef) {
      slotRef.insert(cmpRef.hostView);
    }

    this.idsToRender = this.idsToRender.filter(id => id !== elementDef.id);
    if (this.idsToRender.length === 0) {
      this.onRenderingComplete();
    }

  }

  private onRenderingComplete() {
    log('Rendering complete!');
    this.rendered.emit(this.registry);
  }


  @HostBinding('style.width')
  get stylesWidth() {
    log(this.screenThresholds);
    log(this.options.screen);
    log(this.options.scale);
    log(this.screenThresholds[this.options.screen] * this.options.scale + 'px')
    return this.screenThresholds[this.options.screen] * this.options.scale + 'px';
  }
}
