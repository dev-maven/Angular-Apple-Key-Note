import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, EventEmitter, Inject, Injector, Input, Output, ViewChild, ViewContainerRef, ElementRef, ViewEncapsulation, HostBinding, } from '@angular/core';
import { PebScreen, pebTraverseElementDeep, pebCreateLogger, pebFindElementChildrenWithParent } from '@pe/builder-core';
import { PebRendererChildrenSlotDirective } from '../selectors/children-slot.directive';
import { ElementComponentsCollection, RendererInteractionEmitter, RenderFunction, RenderChildsFunction } from '../renderer.tokens';
import { BehaviorSubject } from 'rxjs';
import { forEach, keys, keyBy, sortBy, union } from 'lodash-es';
import { takeUntil, tap, debounceTime } from 'rxjs/operators';
import { AbstractComponent } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "../selectors/children-slot.directive";
const log = pebCreateLogger('renderer:root');
export class PebRendererComponent extends AbstractComponent {
    constructor(elementRef, injector, cfr, elementsCollection) {
        super();
        this.elementRef = elementRef;
        this.injector = injector;
        this.cfr = cfr;
        this.elementsCollection = elementsCollection;
        this.options = {
            screen: PebScreen.Desktop,
            scale: 1,
            locale: 'en',
        };
        this.modifiedElement = new BehaviorSubject(null);
        this.rendered = new EventEmitter();
        this.interacted = new EventEmitter();
        this.idsToRender = [];
        this.registrySlot = new Map();
        this.registry = new Map();
        this.registryAbstract = new Map();
        this.treeVariablesChanges$ = new BehaviorSubject({ previous: {}, current: {} });
        this.makerId$ = new BehaviorSubject(null);
        this.screenThresholds = {
            desktop: 1280,
            tablet: 768,
            mobile: 360,
        };
        this.renderElement = (elementDef, slotRef, parentCmp) => {
            var _a;
            if (this.registryAbstract.has(elementDef.id)) {
                return;
            }
            this.idsToRender.push(elementDef.id);
            const elementComponent = this.elementsCollection[elementDef.type];
            if (!elementComponent) {
                throw new Error(`
        "${elementDef.type}" element component was not found,
        make sure you add it to AVAILABLE_ELEMENTS_MAP in renderer.module.ts
      `);
            }
            // console.log(111, elementDef.type, this.elementsCollection);
            const cmpFactory = this.cfr.resolveComponentFactory(elementComponent);
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
            cmpRef.instance.context = cmpFactory.componentType.contextFetcher
                ? cmpFactory.componentType.contextFetcher(this.context)
                : ((_a = this.context) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(elementDef.id)) ? this.context[elementDef.id] : null;
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
        };
    }
    set setOptionsScale(scale) {
        this.options = Object.assign(Object.assign({}, this.options), { scale });
    }
    set setOptionsScreen(screen) {
        this.options = Object.assign(Object.assign({}, this.options), { screen });
    }
    set setOptionsLocal(locale) {
        this.options = Object.assign(Object.assign({}, this.options), { locale });
    }
    ngOnInit() {
        this.treeVariablesChanges$
            .pipe(debounceTime(100), tap((variables) => this.getDifferenceVariables(variables)), takeUntil(this.destroyed$)).subscribe();
        this.modifiedElement.pipe(tap((modified) => {
            var _a, _b;
            const selectedMaker = this.makerId$.getValue();
            const { current: currentElement } = this.treeVariablesChanges$.getValue();
            let cmpFactory;
            if (selectedMaker) { // todo: fix
                const makerElement = currentElement[selectedMaker];
                const makerType = makerElement.type;
                const elementComponent = this.elementsCollection[makerType];
                cmpFactory = this.cfr.resolveComponentFactory(elementComponent);
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
                cmpRef.instance.context = cmpFactory.componentType.contextFetcher
                    ? cmpFactory.componentType.contextFetcher(this.context)
                    : ((_a = this.context) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(makerElement.id)) ? this.context[makerElement.id] : null;
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
            modified.cmpRef.instance.context = ((_b = this.context) === null || _b === void 0 ? void 0 : _b.hasOwnProperty(element.id)) ? this.context[element.id] : null;
            modified.cmpRef.instance.options = this.options;
            this.createSlot(modified.cmpRef, element, true);
        }), takeUntil(this.destroyed$)).subscribe();
    }
    ngOnChanges(changes) {
        this.checkTreeVariables();
    }
    ngAfterViewInit() {
        this.checkTreeVariables();
    }
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
    createSlot(cmpRef, element, isMaker = false) {
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
    getDifferenceVariables(variables) {
        const { current: currentVariables, previous: previousVariables } = variables;
        const keysMergeVariables = union([...(keys(currentVariables)), ...(keys(previousVariables))]);
        const differenceVariables = {};
        forEach(keysMergeVariables, (key) => {
            if (previousVariables[key] &&
                currentVariables[key] &&
                currentVariables[key].hashParent !== previousVariables[key].hashParent) {
                return differenceVariables[key] = Object.assign(Object.assign({}, currentVariables[key]), { executeType: 'move' });
            }
            if (previousVariables[key] &&
                !currentVariables[key]) {
                return differenceVariables[key] = Object.assign(Object.assign({}, previousVariables[key]), { executeType: 'delete' });
            }
            if (!previousVariables[key] &&
                currentVariables[key] &&
                (!differenceVariables[currentVariables[key].parentId])) {
                return differenceVariables[key] = Object.assign(Object.assign({}, currentVariables[key]), { executeType: 'create' });
            }
            if (previousVariables[key] &&
                currentVariables[key] &&
                currentVariables[key].hashStyle !== previousVariables[key].hashStyle) {
                return differenceVariables[key] = Object.assign(Object.assign({}, currentVariables[key]), { executeType: 'changeStyle' });
            }
        });
        this.render(differenceVariables);
    }
    generateHash(hashedObject) {
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
    checkTreeVariables() {
        const placeElement = pebFindElementChildrenWithParent(this.element, _ => {
            return true;
        }).map(v => {
            const hashNode = v;
            const hashParent = v.parentId;
            const hashStyle = this.stylesheet[v.id] ? this.stylesheet[v.id] : {};
            return Object.assign({ hashNode: this.generateHash(JSON.stringify(hashNode)), hashParent: this.generateHash(JSON.stringify(hashParent)), hashStyle: this.generateHash(JSON.stringify(hashStyle)) }, v);
        });
        const { current: currentVariables } = this.treeVariablesChanges$.getValue();
        const placeElementToObject = keyBy(placeElement, 'id');
        this.treeVariablesChanges$.next({
            previous: currentVariables,
            current: placeElementToObject,
        });
    }
    render(difference) {
        log('Rendering started');
        if (!this.mainSlot) {
            log('FIXME: Attempt to render while slot is not created');
            return;
        }
        if (this.element) {
            pebTraverseElementDeep(this.element, (el) => this.idsToRender.push(el.id));
            this.renderElement(this.element, this.mainSlot, null);
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
    updateStylesAndContext(id) {
        if (this.registryAbstract.has(id)) {
            const widgetInstance = this.registryAbstract.get(id).instance;
            const widgetClass = this.registryAbstract.get(id).componentType;
            widgetInstance.styles = this.stylesheet[id] || {};
            widgetInstance.context = widgetClass.contextFetcher
                ? widgetClass.contextFetcher(this.context)
                : this.context ? this.context[id] : null;
            widgetInstance.applyStyles();
            this.registryAbstract.get(id).changeDetectorRef.detectChanges();
        }
    }
    renderElementChilds(abstractElement) {
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
    onRenderingComplete() {
        log('Rendering complete!');
        this.rendered.emit(this.registry);
    }
    get stylesWidth() {
        log(this.screenThresholds);
        log(this.options.screen);
        log(this.options.scale);
        log(this.screenThresholds[this.options.screen] * this.options.scale + 'px');
        return this.screenThresholds[this.options.screen] * this.options.scale + 'px';
    }
}
PebRendererComponent.ɵfac = function PebRendererComponent_Factory(t) { return new (t || PebRendererComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(ElementComponentsCollection)); };
PebRendererComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PebRendererComponent, selectors: [["peb-renderer"]], viewQuery: function PebRendererComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PebRendererChildrenSlotDirective, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mainSlot = _t.first);
    } }, hostVars: 2, hostBindings: function PebRendererComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.stylesWidth);
    } }, inputs: { element: "element", stylesheet: "stylesheet", context: "context", options: "options", setOptionsScale: ["options.scale", "setOptionsScale"], setOptionsScreen: ["options.screen", "setOptionsScreen"], setOptionsLocal: ["options.locale", "setOptionsLocal"], modifiedElement: "modifiedElement" }, outputs: { rendered: "rendered", interacted: "interacted" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 0, consts: [["pebRendererChildrenSlot", ""]], template: function PebRendererComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
    } }, directives: [i1.PebRendererChildrenSlotDirective], styles: [":host{display:block;background:#fff}"], encapsulation: 3, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebRendererComponent, [{
        type: Component,
        args: [{
                selector: 'peb-renderer',
                templateUrl: './renderer.component.html',
                styleUrls: ['./renderer.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Injector }, { type: i0.ComponentFactoryResolver }, { type: undefined, decorators: [{
                type: Inject,
                args: [ElementComponentsCollection]
            }] }]; }, { element: [{
            type: Input
        }], stylesheet: [{
            type: Input
        }], context: [{
            type: Input
        }], options: [{
            type: Input
        }], setOptionsScale: [{
            type: Input,
            args: ['options.scale']
        }], setOptionsScreen: [{
            type: Input,
            args: ['options.screen']
        }], setOptionsLocal: [{
            type: Input,
            args: ['options.locale']
        }], modifiedElement: [{
            type: Input
        }], rendered: [{
            type: Output
        }], interacted: [{
            type: Output
        }], mainSlot: [{
            type: ViewChild,
            args: [PebRendererChildrenSlotDirective, { read: ViewContainerRef }]
        }], stylesWidth: [{
            type: HostBinding,
            args: ['style.width']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJyb290L3JlbmRlcmVyLmNvbXBvbmVudC50cyIsInJvb3QvcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUVoQixVQUFVLEVBQ1YsaUJBQWlCLEVBQ1QsV0FBVyxHQUNwQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBRVMsU0FBUyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBYyxnQ0FBZ0MsRUFDL0csTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV4RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsMEJBQTBCLEVBQUUsY0FBYyxFQUFzQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZKLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUVyRCxNQUFNLEdBQUcsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7QUFjN0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGlCQUFpQjtJQStDekQsWUFDVSxVQUFzQixFQUN0QixRQUFrQixFQUNsQixHQUE2QixFQUNRLGtCQUF5QjtRQUV0RSxLQUFLLEVBQUUsQ0FBQztRQUxBLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUEwQjtRQUNRLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBTztRQTlDL0QsWUFBTyxHQUF1QjtZQUNyQyxNQUFNLEVBQUUsU0FBUyxDQUFDLE9BQU87WUFDekIsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFpQk8sb0JBQWUsR0FBNEUsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEgsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFLL0MsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQXdDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDOUQsYUFBUSxHQUEwQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzVELHFCQUFnQixHQUF3RCxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRTFFLDBCQUFxQixHQUEyQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkgsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBRXJELHFCQUFnQixHQUFHO1lBQ2pCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLEVBQUUsR0FBRztTQUNaLENBQUM7UUFrU00sa0JBQWEsR0FBdUIsQ0FDMUMsVUFBc0IsRUFDdEIsT0FBeUIsRUFDekIsU0FBb0MsRUFDcEMsRUFBRTs7WUFFRixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUV6RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQztXQUNYLFVBQVUsQ0FBQyxJQUFJOztPQUVuQixDQUFDLENBQUM7YUFDSjtZQUVELDhEQUE4RDtZQUU5RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFxQixnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFGLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsWUFBWTt3QkFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO3FCQUMxQjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixRQUFRLEVBQUUsU0FBUztxQkFDcEI7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGNBQWM7d0JBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYTtxQkFDN0I7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLG9CQUFvQjt3QkFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7cUJBQ25DO29CQUNEO3dCQUNFLE9BQU8sRUFBRSwwQkFBMEI7d0JBQ25DLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVTtxQkFDMUI7aUJBQ0Y7Z0JBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3RCLENBQUMsQ0FBQztZQUVILE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5RCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBSSxVQUFVLENBQUMsYUFBcUIsQ0FBQyxjQUFjO2dCQUN4RSxDQUFDLENBQUUsVUFBVSxDQUFDLGFBQXFCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2hFLENBQUMsQ0FBQyxPQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRXJGLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM5QixNQUFNLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFOUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakM7WUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDNUI7UUFFSCxDQUFDLENBQUE7SUEvVkQsQ0FBQztJQTNDRCxJQUNJLGVBQWUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxPQUFPLG1DQUFRLElBQUksQ0FBQyxPQUFPLEtBQUUsS0FBSyxHQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQ0ksZ0JBQWdCLENBQUMsTUFBaUI7UUFDcEMsSUFBSSxDQUFDLE9BQU8sbUNBQVEsSUFBSSxDQUFDLE9BQU8sS0FBRSxNQUFNLEdBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFDSSxlQUFlLENBQUMsTUFBYztRQUNoQyxJQUFJLENBQUMsT0FBTyxtQ0FBUSxJQUFJLENBQUMsT0FBTyxLQUFFLE1BQU0sR0FBRSxDQUFDO0lBQzdDLENBQUM7SUFnQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxxQkFBcUI7YUFDdkIsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFDMUQsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDdkIsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O1lBRWYsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxRSxJQUFJLFVBQVUsQ0FBQztZQUVmLElBQUksYUFBYSxFQUFFLEVBQUUsWUFBWTtnQkFDL0IsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNuRCxNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNwQyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDNUQsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQXFCLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3BGLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQ2xDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsWUFBWTs0QkFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO3lCQUMxQjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixRQUFRLEVBQUUsSUFBSTt5QkFDZjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsY0FBYzs0QkFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhO3lCQUM3Qjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsb0JBQW9COzRCQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjt5QkFDbkM7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLDBCQUEwQjs0QkFDbkMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO3lCQUMxQjtxQkFDRjtvQkFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ3RCLENBQUMsQ0FBQztnQkFDSCxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUksVUFBVSxDQUFDLGFBQXFCLENBQUMsY0FBYztvQkFDeEUsQ0FBQyxDQUFFLFVBQVUsQ0FBQyxhQUFxQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNoRSxDQUFDLENBQUMsT0FBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFFekYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDdkM7WUFFRCxJQUFJLENBQUMsUUFBUSxJQUFJLGFBQWEsS0FBSyxRQUFRLENBQUMsRUFBRSxFQUFFO2dCQUM5QyxPQUFPO2FBQ1I7WUFFRCxNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTVDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDM0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwRSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5RyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUVoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWxELENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFaEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFHRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxVQUFVLENBQUMsTUFBd0MsRUFBRSxPQUFtQixFQUFFLE9BQU8sR0FBRyxLQUFLO1FBRS9GLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV6QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0IsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVPLHNCQUFzQixDQUFDLFNBQWdDO1FBQzdELE1BQU0sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQzdFLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlGLE1BQU0sbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBRWxDLElBQ0UsaUJBQWlCLENBQUMsR0FBRyxDQUFDO2dCQUN0QixnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3JCLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsS0FBSyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQ3RFO2dCQUNBLE9BQU8sbUJBQW1CLENBQUMsR0FBRyxDQUFDLG1DQUFRLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFFLFdBQVcsRUFBRSxNQUFNLEdBQUUsQ0FBQzthQUNyRjtZQUVELElBQ0UsaUJBQWlCLENBQUMsR0FBRyxDQUFDO2dCQUN0QixDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUN0QjtnQkFDQSxPQUFPLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxtQ0FBUSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsS0FBRSxXQUFXLEVBQUUsUUFBUSxHQUFFLENBQUM7YUFDeEY7WUFFRCxJQUNFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDO2dCQUN2QixnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3JCLENBQ0UsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FDckQsRUFDRDtnQkFDQSxPQUFPLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxtQ0FBUSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBRSxXQUFXLEVBQUUsUUFBUSxHQUFFLENBQUM7YUFDdkY7WUFFRCxJQUNFLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztnQkFDdEIsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUNyQixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEtBQUssaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUNwRTtnQkFDQSxPQUFPLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxtQ0FBUSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBRSxXQUFXLEVBQUUsYUFBYSxHQUFFLENBQUM7YUFDNUY7UUFFSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR08sWUFBWSxDQUFDLFlBQVk7UUFDL0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxzQ0FBc0M7WUFDdEMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ25DLHNDQUFzQztZQUN0QyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNwQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUdPLGtCQUFrQjtRQUN4QixNQUFNLFlBQVksR0FBRyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3RFLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckUsdUJBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNyRCxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ3pELFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsSUFDcEQsQ0FBQyxFQUNKO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVFLE1BQU0sb0JBQW9CLEdBQXdCLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUM5QixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLE9BQU8sRUFBRSxvQkFBb0I7U0FDOUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdPLE1BQU0sQ0FBQyxVQUFVO1FBQ3ZCLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1lBQzFELE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVoQixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBeUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBeUIsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXhFLE1BQU0sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDNUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3pELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFFbkUsUUFBUSxPQUFPLENBQUMsV0FBVyxFQUFFO29CQUMzQixLQUFLLFFBQVE7d0JBQ1gsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUFFOzRCQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQ2hHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQzs0QkFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7eUJBQ3RFO3dCQUNELE1BQU07b0JBRVIsS0FBSyxNQUFNO3dCQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFFekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUUxQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUU7NEJBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQzt5QkFDakc7d0JBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFFckUsTUFBTTtvQkFFUixLQUFLLFFBQVE7d0JBRVgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QyxNQUFNO29CQUVSLEtBQUssYUFBYTt3QkFDaEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTs0QkFDekMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDekM7d0JBQ0QsTUFBTTtpQkFDVDtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU8sc0JBQXNCLENBQUMsRUFBRTtRQUMvQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDakMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDOUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFvQixDQUFDO1lBRXZFLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEQsY0FBYyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsY0FBYztnQkFDakQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMzQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxlQUFlO1FBQ3pDLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZELGVBQWUsQ0FBQyxPQUFPLENBQUMsUUFBUTtxQkFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNkLE1BQU0sTUFBTSxHQUFHLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUVqRSxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksUUFBUSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDLENBQUM7cUJBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQzNELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FFSjtJQUNILENBQUM7SUEwRU8sbUJBQW1CO1FBQ3pCLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR0QsSUFDSSxXQUFXO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUMzRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNoRixDQUFDOzt3RkFwYVUsb0JBQW9CLGtKQW1EckIsMkJBQTJCO3lEQW5EMUIsb0JBQW9CO3VCQThCcEIsZ0NBQWdDLFFBQVUsZ0JBQWdCOzs7Ozs7O1FDN0V2RSwyQkFBcUQ7O2tERCtDeEMsb0JBQW9CO2NBUGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzthQUMzQzs7c0JBb0RJLE1BQU07dUJBQUMsMkJBQTJCOztrQkFqRHBDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQU1MLEtBQUs7bUJBQUMsZUFBZTs7a0JBS3JCLEtBQUs7bUJBQUMsZ0JBQWdCOztrQkFLdEIsS0FBSzttQkFBQyxnQkFBZ0I7O2tCQUt0QixLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFFTixTQUFTO21CQUFDLGdDQUFnQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztrQkErWHRFLFdBQVc7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT25Jbml0LCBIb3N0QmluZGluZywgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFBlYkVsZW1lbnQgYXMgUGViRWxlbWVudF9PTEQsXG4gIFBlYkVsZW1lbnRJZCwgUGViU2NyZWVuLCBwZWJUcmF2ZXJzZUVsZW1lbnREZWVwLCBwZWJDcmVhdGVMb2dnZXIsIFBlYkVsZW1lbnQsIHBlYkZpbmRFbGVtZW50Q2hpbGRyZW5XaXRoUGFyZW50XG59IGZyb20gJ0BwZS9idWlsZGVyLWNvcmUnO1xuaW1wb3J0IHsgUGViUmVuZGVyZXJDaGlsZHJlblNsb3REaXJlY3RpdmUgfSBmcm9tICcuLi9zZWxlY3RvcnMvY2hpbGRyZW4tc2xvdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUGViQWJzdHJhY3RFbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMvX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudENvbXBvbmVudHNDb2xsZWN0aW9uLCBSZW5kZXJlckludGVyYWN0aW9uRW1pdHRlciwgUmVuZGVyRnVuY3Rpb24sIFJlbmRlckZ1bmN0aW9uVHlwZSwgUmVuZGVyQ2hpbGRzRnVuY3Rpb24gfSBmcm9tICcuLi9yZW5kZXJlci50b2tlbnMnO1xuaW1wb3J0IHsgUGViUmVuZGVyZXJPcHRpb25zIH0gZnJvbSAnLi4vcmVuZGVyZXIudHlwZXMnO1xuaW1wb3J0IHsgUGViQ29udGV4dCwgUGViU3R5bGVzaGVldCwgVHJlZVZhcmlhYmxlcyB9IGZyb20gJy4uL2NvcmUudHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmb3JFYWNoLCBrZXlzLCBrZXlCeSwgc29ydEJ5LCB1bmlvbiB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcCwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcblxuY29uc3QgbG9nID0gcGViQ3JlYXRlTG9nZ2VyKCdyZW5kZXJlcjpyb290Jyk7XG5cbmludGVyZmFjZSBJVHJlZVZhcmlhYmxlc0NoYW5nZXMge1xuICBwcmV2aW91czogVHJlZVZhcmlhYmxlcztcbiAgY3VycmVudDogVHJlZVZhcmlhYmxlcztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLXJlbmRlcmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlbmRlcmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVuZGVyZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbSxcbn0pXG5leHBvcnQgY2xhc3MgUGViUmVuZGVyZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcblxuICBASW5wdXQoKSBlbGVtZW50OiBQZWJFbGVtZW50O1xuICBASW5wdXQoKSBzdHlsZXNoZWV0OiBQZWJTdHlsZXNoZWV0O1xuICBASW5wdXQoKSBjb250ZXh0OiBQZWJDb250ZXh0O1xuICBASW5wdXQoKSBvcHRpb25zOiBQZWJSZW5kZXJlck9wdGlvbnMgPSB7XG4gICAgc2NyZWVuOiBQZWJTY3JlZW4uRGVza3RvcCxcbiAgICBzY2FsZTogMSxcbiAgICBsb2NhbGU6ICdlbicsXG4gIH07XG5cbiAgQElucHV0KCdvcHRpb25zLnNjYWxlJylcbiAgc2V0IHNldE9wdGlvbnNTY2FsZShzY2FsZTogbnVtYmVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi50aGlzLm9wdGlvbnMsIHNjYWxlIH07XG4gIH1cblxuICBASW5wdXQoJ29wdGlvbnMuc2NyZWVuJylcbiAgc2V0IHNldE9wdGlvbnNTY3JlZW4oc2NyZWVuOiBQZWJTY3JlZW4pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLnRoaXMub3B0aW9ucywgc2NyZWVuIH07XG4gIH1cblxuICBASW5wdXQoJ29wdGlvbnMubG9jYWxlJylcbiAgc2V0IHNldE9wdGlvbnNMb2NhbChsb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCBsb2NhbGUgfTtcbiAgfVxuXG4gIEBJbnB1dCgpIG1vZGlmaWVkRWxlbWVudDogQmVoYXZpb3JTdWJqZWN0PHtpZDogc3RyaW5nLCBjbXBSZWY6IENvbXBvbmVudFJlZjxQZWJBYnN0cmFjdEVsZW1lbnQ+fT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBAT3V0cHV0KCkgcmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGludGVyYWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKFBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90RGlyZWN0aXZlLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgbWFpblNsb3Q6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgaWRzVG9SZW5kZXI6IFBlYkVsZW1lbnRJZFtdID0gW107XG4gIHJlZ2lzdHJ5U2xvdDogTWFwPFBlYkVsZW1lbnRJZCwgVmlld0NvbnRhaW5lclJlZj4gPSBuZXcgTWFwKCk7XG4gIHJlZ2lzdHJ5OiBNYXA8UGViRWxlbWVudElkLCBQZWJBYnN0cmFjdEVsZW1lbnQ+ID0gbmV3IE1hcCgpO1xuICByZWdpc3RyeUFic3RyYWN0OiBNYXA8UGViRWxlbWVudElkLCBDb21wb25lbnRSZWY8UGViQWJzdHJhY3RFbGVtZW50Pj4gPSBuZXcgTWFwKCk7XG5cbiAgcHJpdmF0ZSB0cmVlVmFyaWFibGVzQ2hhbmdlcyQ6IEJlaGF2aW9yU3ViamVjdDxJVHJlZVZhcmlhYmxlc0NoYW5nZXM+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7IHByZXZpb3VzOiB7fSwgY3VycmVudDoge30gfSk7XG4gIHByaXZhdGUgbWFrZXJJZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG5cbiAgc2NyZWVuVGhyZXNob2xkcyA9IHtcbiAgICBkZXNrdG9wOiAxMjgwLFxuICAgIHRhYmxldDogNzY4LFxuICAgIG1vYmlsZTogMzYwLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIEBJbmplY3QoRWxlbWVudENvbXBvbmVudHNDb2xsZWN0aW9uKSBwcml2YXRlIGVsZW1lbnRzQ29sbGVjdGlvbjogYW55W10sXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRyZWVWYXJpYWJsZXNDaGFuZ2VzJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICB0YXAoKHZhcmlhYmxlcykgPT4gdGhpcy5nZXREaWZmZXJlbmNlVmFyaWFibGVzKHZhcmlhYmxlcykpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICAgKS5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMubW9kaWZpZWRFbGVtZW50LnBpcGUoXG4gICAgICB0YXAoKG1vZGlmaWVkKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYWtlciA9IHRoaXMubWFrZXJJZCQuZ2V0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjdXJyZW50RWxlbWVudCB9ID0gdGhpcy50cmVlVmFyaWFibGVzQ2hhbmdlcyQuZ2V0VmFsdWUoKTtcbiAgICAgICAgbGV0IGNtcEZhY3Rvcnk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkTWFrZXIpIHsgLy8gdG9kbzogZml4XG4gICAgICAgICAgY29uc3QgbWFrZXJFbGVtZW50ID0gY3VycmVudEVsZW1lbnRbc2VsZWN0ZWRNYWtlcl07XG4gICAgICAgICAgY29uc3QgbWFrZXJUeXBlID0gbWFrZXJFbGVtZW50LnR5cGU7XG4gICAgICAgICAgY29uc3QgZWxlbWVudENvbXBvbmVudCA9IHRoaXMuZWxlbWVudHNDb2xsZWN0aW9uW21ha2VyVHlwZV07XG4gICAgICAgICAgY21wRmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PFBlYkFic3RyYWN0RWxlbWVudD4oZWxlbWVudENvbXBvbmVudCk7XG4gICAgICAgICAgY29uc3QgY21wSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm92aWRlOiAnU1RZTEVTSEVFVCcsXG4gICAgICAgICAgICAgICAgdXNlVmFsdWU6IHRoaXMuc3R5bGVzaGVldCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3ZpZGU6ICdQQVJFTlRfRUxFTUVOVCcsXG4gICAgICAgICAgICAgICAgdXNlVmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm92aWRlOiBSZW5kZXJGdW5jdGlvbixcbiAgICAgICAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5yZW5kZXJFbGVtZW50LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvdmlkZTogUmVuZGVyQ2hpbGRzRnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgdXNlVmFsdWU6IHRoaXMucmVuZGVyRWxlbWVudENoaWxkcyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3ZpZGU6IFJlbmRlcmVySW50ZXJhY3Rpb25FbWl0dGVyLFxuICAgICAgICAgICAgICAgIHVzZVZhbHVlOiB0aGlzLmludGVyYWN0ZWQsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgY21wUmVmID0gY21wRmFjdG9yeS5jcmVhdGUoY21wSW5qZWN0b3IpO1xuICAgICAgICAgIGNtcFJlZi5pbnN0YW5jZS5lbGVtZW50ID0gbWFrZXJFbGVtZW50O1xuICAgICAgICAgIGNtcFJlZi5pbnN0YW5jZS5zdHlsZXMgPSB0aGlzLnN0eWxlc2hlZXRbbWFrZXJFbGVtZW50LmlkXSB8fCB7fTtcbiAgICAgICAgICBjbXBSZWYuaW5zdGFuY2UuY29udGV4dCA9IChjbXBGYWN0b3J5LmNvbXBvbmVudFR5cGUgYXMgYW55KS5jb250ZXh0RmV0Y2hlclxuICAgICAgICAgICAgPyAoY21wRmFjdG9yeS5jb21wb25lbnRUeXBlIGFzIGFueSkuY29udGV4dEZldGNoZXIodGhpcy5jb250ZXh0KVxuICAgICAgICAgICAgOiB0aGlzLmNvbnRleHQ/Lmhhc093blByb3BlcnR5KG1ha2VyRWxlbWVudC5pZCkgPyB0aGlzLmNvbnRleHRbbWFrZXJFbGVtZW50LmlkXSA6IG51bGw7XG5cbiAgICAgICAgICBjbXBSZWYuaW5zdGFuY2Uub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgICBjbXBSZWYuaW5zdGFuY2UuYXBwbHlTdHlsZXMoKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZVNsb3QoY21wUmVmLCBtYWtlckVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtb2RpZmllZCB8fCBzZWxlY3RlZE1ha2VyID09PSBtb2RpZmllZC5pZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjdXJyZW50RWxlbWVudFttb2RpZmllZC5pZF07XG5cbiAgICAgICAgbW9kaWZpZWQuY21wUmVmLmluc3RhbmNlLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBtb2RpZmllZC5jbXBSZWYuaW5zdGFuY2Uuc3R5bGVzID0gdGhpcy5zdHlsZXNoZWV0W2VsZW1lbnQuaWRdIHx8IHt9O1xuICAgICAgICBtb2RpZmllZC5jbXBSZWYuaW5zdGFuY2UuY29udGV4dCA9IHRoaXMuY29udGV4dD8uaGFzT3duUHJvcGVydHkoZWxlbWVudC5pZCkgPyB0aGlzLmNvbnRleHRbZWxlbWVudC5pZF0gOiBudWxsO1xuICAgICAgICBtb2RpZmllZC5jbXBSZWYuaW5zdGFuY2Uub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICB0aGlzLmNyZWF0ZVNsb3QobW9kaWZpZWQuY21wUmVmLCBlbGVtZW50LCB0cnVlKTtcblxuICAgICAgfSksXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKCk7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLmNoZWNrVHJlZVZhcmlhYmxlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2hlY2tUcmVlVmFyaWFibGVzKCk7XG4gIH1cblxuXG4gIGdldCBuYXRpdmVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2xvdChjbXBSZWY6IENvbXBvbmVudFJlZjxQZWJBYnN0cmFjdEVsZW1lbnQ+LCBlbGVtZW50OiBQZWJFbGVtZW50LCBpc01ha2VyID0gZmFsc2UpIHtcblxuICAgIGNtcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICBjb25zdCBzbG90UmVmID0gdGhpcy5yZWdpc3RyeVNsb3QuZ2V0KGVsZW1lbnQuaWQpO1xuICAgIHNsb3RSZWYuY2xlYXIoKTtcblxuICAgIHRoaXMucmVnaXN0cnlTbG90LnNldChlbGVtZW50LmlkLCBzbG90UmVmKTtcbiAgICBzbG90UmVmLmluc2VydChjbXBSZWYuaG9zdFZpZXcpO1xuXG4gICAgaWYgKGlzTWFrZXIpIHtcbiAgICAgIHRoaXMubWFrZXJJZCQubmV4dChlbGVtZW50LmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1ha2VySWQkLm5leHQobnVsbCk7XG4gIH1cblxuICBwcml2YXRlIGdldERpZmZlcmVuY2VWYXJpYWJsZXModmFyaWFibGVzOiBJVHJlZVZhcmlhYmxlc0NoYW5nZXMpIHtcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGN1cnJlbnRWYXJpYWJsZXMsIHByZXZpb3VzOiBwcmV2aW91c1ZhcmlhYmxlcyB9ID0gdmFyaWFibGVzO1xuICAgIGNvbnN0IGtleXNNZXJnZVZhcmlhYmxlcyA9IHVuaW9uKFsuLi4oa2V5cyhjdXJyZW50VmFyaWFibGVzKSksIC4uLihrZXlzKHByZXZpb3VzVmFyaWFibGVzKSldKTtcbiAgICBjb25zdCBkaWZmZXJlbmNlVmFyaWFibGVzID0ge307XG4gICAgZm9yRWFjaChrZXlzTWVyZ2VWYXJpYWJsZXMsIChrZXkpID0+IHtcblxuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91c1ZhcmlhYmxlc1trZXldICYmXG4gICAgICAgIGN1cnJlbnRWYXJpYWJsZXNba2V5XSAmJlxuICAgICAgICBjdXJyZW50VmFyaWFibGVzW2tleV0uaGFzaFBhcmVudCAhPT0gcHJldmlvdXNWYXJpYWJsZXNba2V5XS5oYXNoUGFyZW50XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVuY2VWYXJpYWJsZXNba2V5XSA9IHsgLi4uY3VycmVudFZhcmlhYmxlc1trZXldLCBleGVjdXRlVHlwZTogJ21vdmUnIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXNWYXJpYWJsZXNba2V5XSAmJlxuICAgICAgICAhY3VycmVudFZhcmlhYmxlc1trZXldXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVuY2VWYXJpYWJsZXNba2V5XSA9IHsgLi4ucHJldmlvdXNWYXJpYWJsZXNba2V5XSwgZXhlY3V0ZVR5cGU6ICdkZWxldGUnIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXByZXZpb3VzVmFyaWFibGVzW2tleV0gJiZcbiAgICAgICAgY3VycmVudFZhcmlhYmxlc1trZXldICYmXG4gICAgICAgIChcbiAgICAgICAgICAhZGlmZmVyZW5jZVZhcmlhYmxlc1tjdXJyZW50VmFyaWFibGVzW2tleV0ucGFyZW50SWRdXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZGlmZmVyZW5jZVZhcmlhYmxlc1trZXldID0geyAuLi5jdXJyZW50VmFyaWFibGVzW2tleV0sIGV4ZWN1dGVUeXBlOiAnY3JlYXRlJyB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHByZXZpb3VzVmFyaWFibGVzW2tleV0gJiZcbiAgICAgICAgY3VycmVudFZhcmlhYmxlc1trZXldICYmXG4gICAgICAgIGN1cnJlbnRWYXJpYWJsZXNba2V5XS5oYXNoU3R5bGUgIT09IHByZXZpb3VzVmFyaWFibGVzW2tleV0uaGFzaFN0eWxlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVuY2VWYXJpYWJsZXNba2V5XSA9IHsgLi4uY3VycmVudFZhcmlhYmxlc1trZXldLCBleGVjdXRlVHlwZTogJ2NoYW5nZVN0eWxlJyB9O1xuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmRlcihkaWZmZXJlbmNlVmFyaWFibGVzKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUhhc2goaGFzaGVkT2JqZWN0KSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGlmIChoYXNoZWRPYmplY3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gaGFzaDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYXNoZWRPYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSBoYXNoZWRPYmplY3QuY2hhckNvZGVBdChpKTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaGFyO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuXG4gIHByaXZhdGUgY2hlY2tUcmVlVmFyaWFibGVzKCkge1xuICAgIGNvbnN0IHBsYWNlRWxlbWVudCA9IHBlYkZpbmRFbGVtZW50Q2hpbGRyZW5XaXRoUGFyZW50KHRoaXMuZWxlbWVudCwgXyA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KS5tYXAodiA9PiB7XG4gICAgICBjb25zdCBoYXNoTm9kZSA9IHY7XG4gICAgICBjb25zdCBoYXNoUGFyZW50ID0gdi5wYXJlbnRJZDtcbiAgICAgIGNvbnN0IGhhc2hTdHlsZSA9IHRoaXMuc3R5bGVzaGVldFt2LmlkXSA/IHRoaXMuc3R5bGVzaGVldFt2LmlkXSA6IHt9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzaE5vZGU6IHRoaXMuZ2VuZXJhdGVIYXNoKEpTT04uc3RyaW5naWZ5KGhhc2hOb2RlKSksXG4gICAgICAgIGhhc2hQYXJlbnQ6IHRoaXMuZ2VuZXJhdGVIYXNoKEpTT04uc3RyaW5naWZ5KGhhc2hQYXJlbnQpKSxcbiAgICAgICAgaGFzaFN0eWxlOiB0aGlzLmdlbmVyYXRlSGFzaChKU09OLnN0cmluZ2lmeShoYXNoU3R5bGUpKSxcbiAgICAgICAgLi4udlxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgY3VycmVudDogY3VycmVudFZhcmlhYmxlcyB9ID0gdGhpcy50cmVlVmFyaWFibGVzQ2hhbmdlcyQuZ2V0VmFsdWUoKTtcbiAgICBjb25zdCBwbGFjZUVsZW1lbnRUb09iamVjdDogYW55IHwgVHJlZVZhcmlhYmxlcyA9IGtleUJ5KHBsYWNlRWxlbWVudCwgJ2lkJyk7XG4gICAgdGhpcy50cmVlVmFyaWFibGVzQ2hhbmdlcyQubmV4dCh7XG4gICAgICBwcmV2aW91czogY3VycmVudFZhcmlhYmxlcyxcbiAgICAgIGN1cnJlbnQ6IHBsYWNlRWxlbWVudFRvT2JqZWN0LFxuICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIHJlbmRlcihkaWZmZXJlbmNlKSB7XG4gICAgbG9nKCdSZW5kZXJpbmcgc3RhcnRlZCcpO1xuICAgIGlmICghdGhpcy5tYWluU2xvdCkge1xuICAgICAgbG9nKCdGSVhNRTogQXR0ZW1wdCB0byByZW5kZXIgd2hpbGUgc2xvdCBpcyBub3QgY3JlYXRlZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG5cbiAgICAgIHBlYlRyYXZlcnNlRWxlbWVudERlZXAodGhpcy5lbGVtZW50IGFzIFBlYkVsZW1lbnRfT0xELCAoZWwpID0+IHRoaXMuaWRzVG9SZW5kZXIucHVzaChlbC5pZCkpO1xuICAgICAgdGhpcy5yZW5kZXJFbGVtZW50KHRoaXMuZWxlbWVudCBhcyBQZWJFbGVtZW50X09MRCwgdGhpcy5tYWluU2xvdCwgbnVsbCk7XG5cbiAgICAgIGNvbnN0IHsgY3VycmVudDogY3VycmVudFZhcmlhYmxlcyB9ID0gdGhpcy50cmVlVmFyaWFibGVzQ2hhbmdlcyQuZ2V0VmFsdWUoKTtcbiAgICAgIGZvckVhY2goc29ydEJ5KGRpZmZlcmVuY2UsIFt2ID0+IHYucHJpb3JpdHldKSwgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhcmVudElkID0gZWxlbWVudC5wYXJlbnRJZCA/IGVsZW1lbnQucGFyZW50SWQgOiBudWxsO1xuXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC5leGVjdXRlVHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2NyZWF0ZSc6XG4gICAgICAgICAgICBpZiAodGhpcy5yZWdpc3RyeUFic3RyYWN0LmhhcyhjdXJyZW50UGFyZW50SWQpKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVnaXN0cnlBYnN0cmFjdC5nZXQoY3VycmVudFBhcmVudElkKS5pbnN0YW5jZS5lbGVtZW50ID0gY3VycmVudFZhcmlhYmxlc1tjdXJyZW50UGFyZW50SWRdO1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlc0FuZENvbnRleHQoY3VycmVudFBhcmVudElkKTtcbiAgICAgICAgICAgICAgdGhpcy5yZWdpc3RyeUFic3RyYWN0LmdldChjdXJyZW50UGFyZW50SWQpLmluc3RhbmNlLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgdGhpcy5yZWdpc3RyeUFic3RyYWN0LmdldChlbGVtZW50LmlkKS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5QWJzdHJhY3QuZGVsZXRlKGVsZW1lbnQuaWQpO1xuXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5U2xvdC5nZXQoZWxlbWVudC5pZCkuY2xlYXIoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0cnlBYnN0cmFjdC5oYXMoY3VycmVudFBhcmVudElkKSkge1xuICAgICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5QWJzdHJhY3QuZ2V0KGN1cnJlbnRQYXJlbnRJZCkuaW5zdGFuY2UuZWxlbWVudCA9IGN1cnJlbnRWYXJpYWJsZXNbY3VycmVudFBhcmVudElkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3R5bGVzQW5kQ29udGV4dChjdXJyZW50UGFyZW50SWQpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RyeUFic3RyYWN0LmdldChjdXJyZW50UGFyZW50SWQpLmluc3RhbmNlLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZGVsZXRlJzpcblxuICAgICAgICAgICAgdGhpcy5yZWdpc3RyeUFic3RyYWN0LmdldChlbGVtZW50LmlkKS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5QWJzdHJhY3QuZGVsZXRlKGVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdjaGFuZ2VTdHlsZSc6XG4gICAgICAgICAgICBpZiAodGhpcy5yZWdpc3RyeUFic3RyYWN0LmhhcyhlbGVtZW50LmlkKSkge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlc0FuZENvbnRleHQoZWxlbWVudC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdHlsZXNBbmRDb250ZXh0KGlkKSB7XG4gICAgaWYgKHRoaXMucmVnaXN0cnlBYnN0cmFjdC5oYXMoaWQpKSB7XG4gICAgICBjb25zdCB3aWRnZXRJbnN0YW5jZSA9IHRoaXMucmVnaXN0cnlBYnN0cmFjdC5nZXQoaWQpLmluc3RhbmNlO1xuICAgICAgY29uc3Qgd2lkZ2V0Q2xhc3MgPSB0aGlzLnJlZ2lzdHJ5QWJzdHJhY3QuZ2V0KGlkKS5jb21wb25lbnRUeXBlIGFzIGFueTtcblxuICAgICAgd2lkZ2V0SW5zdGFuY2Uuc3R5bGVzID0gdGhpcy5zdHlsZXNoZWV0W2lkXSB8fCB7fTtcbiAgICAgIHdpZGdldEluc3RhbmNlLmNvbnRleHQgPSB3aWRnZXRDbGFzcy5jb250ZXh0RmV0Y2hlclxuICAgICAgICA/IHdpZGdldENsYXNzLmNvbnRleHRGZXRjaGVyKHRoaXMuY29udGV4dClcbiAgICAgICAgOiB0aGlzLmNvbnRleHQgPyB0aGlzLmNvbnRleHRbaWRdIDogbnVsbDtcbiAgICAgIHdpZGdldEluc3RhbmNlLmFwcGx5U3R5bGVzKCk7XG5cbiAgICAgIHRoaXMucmVnaXN0cnlBYnN0cmFjdC5nZXQoaWQpLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckVsZW1lbnRDaGlsZHMoYWJzdHJhY3RFbGVtZW50KSB7XG4gICAgaWYgKGFic3RyYWN0RWxlbWVudC5lbGVtZW50LmNoaWxkcmVuKSB7XG4gICAgICBhYnN0cmFjdEVsZW1lbnQuY2hpbGRTbG90cy5mb3JFYWNoKHNsb3QgPT4ge1xuICAgICAgICBjb25zdCBzbG90TmFtZSA9IHNsb3QubmFtZSA9PT0gJycgPyAnbWFpbicgOiBzbG90Lm5hbWU7XG4gICAgICAgIGFic3RyYWN0RWxlbWVudC5lbGVtZW50LmNoaWxkcmVuXG4gICAgICAgICAgLmZpbHRlcihlbERlZiA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbFNsb3QgPSAoYWJzdHJhY3RFbGVtZW50LnN0eWxlc2hlZXRbZWxEZWYuaWRdIHx8IHt9KS5zbG90O1xuXG4gICAgICAgICAgICByZXR1cm4gKCFlbFNsb3QgJiYgc2xvdE5hbWUgPT09ICdtYWluJykgfHwgKGVsU2xvdCA9PT0gc2xvdE5hbWUpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZvckVhY2goZWxEZWYgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJFbGVtZW50KGVsRGVmLCBzbG90LnZpZXdSZWYsIGFic3RyYWN0RWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRWxlbWVudDogUmVuZGVyRnVuY3Rpb25UeXBlID0gKFxuICAgIGVsZW1lbnREZWY6IFBlYkVsZW1lbnQsXG4gICAgc2xvdFJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwYXJlbnRDbXA6IG51bGwgfCBQZWJBYnN0cmFjdEVsZW1lbnQsXG4gICkgPT4ge1xuXG4gICAgaWYgKHRoaXMucmVnaXN0cnlBYnN0cmFjdC5oYXMoZWxlbWVudERlZi5pZCkpIHsgcmV0dXJuOyB9XG5cbiAgICB0aGlzLmlkc1RvUmVuZGVyLnB1c2goZWxlbWVudERlZi5pZCk7XG4gICAgY29uc3QgZWxlbWVudENvbXBvbmVudCA9IHRoaXMuZWxlbWVudHNDb2xsZWN0aW9uW2VsZW1lbnREZWYudHlwZV07XG5cbiAgICBpZiAoIWVsZW1lbnRDb21wb25lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgIFwiJHtlbGVtZW50RGVmLnR5cGV9XCIgZWxlbWVudCBjb21wb25lbnQgd2FzIG5vdCBmb3VuZCxcbiAgICAgICAgbWFrZSBzdXJlIHlvdSBhZGQgaXQgdG8gQVZBSUxBQkxFX0VMRU1FTlRTX01BUCBpbiByZW5kZXJlci5tb2R1bGUudHNcbiAgICAgIGApO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKDExMSwgZWxlbWVudERlZi50eXBlLCB0aGlzLmVsZW1lbnRzQ29sbGVjdGlvbik7XG5cbiAgICBjb25zdCBjbXBGYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8UGViQWJzdHJhY3RFbGVtZW50PihlbGVtZW50Q29tcG9uZW50KTtcbiAgICBjb25zdCBjbXBJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdTVFlMRVNIRUVUJyxcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5zdHlsZXNoZWV0LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogJ1BBUkVOVF9FTEVNRU5UJyxcbiAgICAgICAgICB1c2VWYWx1ZTogcGFyZW50Q21wLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUmVuZGVyRnVuY3Rpb24sXG4gICAgICAgICAgdXNlVmFsdWU6IHRoaXMucmVuZGVyRWxlbWVudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFJlbmRlckNoaWxkc0Z1bmN0aW9uLFxuICAgICAgICAgIHVzZVZhbHVlOiB0aGlzLnJlbmRlckVsZW1lbnRDaGlsZHMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBSZW5kZXJlckludGVyYWN0aW9uRW1pdHRlcixcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5pbnRlcmFjdGVkLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgIH0pO1xuXG4gICAgY29uc3QgY21wUmVmID0gY21wRmFjdG9yeS5jcmVhdGUoY21wSW5qZWN0b3IpO1xuICAgIGNtcFJlZi5pbnN0YW5jZS5lbGVtZW50ID0gZWxlbWVudERlZjtcbiAgICBjbXBSZWYuaW5zdGFuY2Uuc3R5bGVzID0gdGhpcy5zdHlsZXNoZWV0W2VsZW1lbnREZWYuaWRdIHx8IHt9O1xuICAgIGNtcFJlZi5pbnN0YW5jZS5jb250ZXh0ID0gKGNtcEZhY3RvcnkuY29tcG9uZW50VHlwZSBhcyBhbnkpLmNvbnRleHRGZXRjaGVyXG4gICAgICA/IChjbXBGYWN0b3J5LmNvbXBvbmVudFR5cGUgYXMgYW55KS5jb250ZXh0RmV0Y2hlcih0aGlzLmNvbnRleHQpXG4gICAgICA6IHRoaXMuY29udGV4dD8uaGFzT3duUHJvcGVydHkoZWxlbWVudERlZi5pZCkgPyB0aGlzLmNvbnRleHRbZWxlbWVudERlZi5pZF0gOiBudWxsO1xuXG4gICAgY21wUmVmLmluc3RhbmNlLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgY21wUmVmLmluc3RhbmNlLmFwcGx5U3R5bGVzKCk7XG4gICAgY21wUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnJlZ2lzdHJ5LnNldChlbGVtZW50RGVmLmlkLCBjbXBSZWYuaW5zdGFuY2UpO1xuICAgIHRoaXMucmVnaXN0cnlBYnN0cmFjdC5zZXQoZWxlbWVudERlZi5pZCwgY21wUmVmKTtcbiAgICB0aGlzLnJlZ2lzdHJ5U2xvdC5zZXQoZWxlbWVudERlZi5pZCwgc2xvdFJlZik7XG5cbiAgICBpZiAoc2xvdFJlZikge1xuICAgICAgc2xvdFJlZi5pbnNlcnQoY21wUmVmLmhvc3RWaWV3KTtcbiAgICB9XG5cbiAgICB0aGlzLmlkc1RvUmVuZGVyID0gdGhpcy5pZHNUb1JlbmRlci5maWx0ZXIoaWQgPT4gaWQgIT09IGVsZW1lbnREZWYuaWQpO1xuICAgIGlmICh0aGlzLmlkc1RvUmVuZGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5vblJlbmRlcmluZ0NvbXBsZXRlKCk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIG9uUmVuZGVyaW5nQ29tcGxldGUoKSB7XG4gICAgbG9nKCdSZW5kZXJpbmcgY29tcGxldGUhJyk7XG4gICAgdGhpcy5yZW5kZXJlZC5lbWl0KHRoaXMucmVnaXN0cnkpO1xuICB9XG5cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgZ2V0IHN0eWxlc1dpZHRoKCkge1xuICAgIGxvZyh0aGlzLnNjcmVlblRocmVzaG9sZHMpO1xuICAgIGxvZyh0aGlzLm9wdGlvbnMuc2NyZWVuKTtcbiAgICBsb2codGhpcy5vcHRpb25zLnNjYWxlKTtcbiAgICBsb2codGhpcy5zY3JlZW5UaHJlc2hvbGRzW3RoaXMub3B0aW9ucy5zY3JlZW5dICogdGhpcy5vcHRpb25zLnNjYWxlICsgJ3B4JylcbiAgICByZXR1cm4gdGhpcy5zY3JlZW5UaHJlc2hvbGRzW3RoaXMub3B0aW9ucy5zY3JlZW5dICogdGhpcy5vcHRpb25zLnNjYWxlICsgJ3B4JztcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciBwZWJSZW5kZXJlckNoaWxkcmVuU2xvdD48L25nLWNvbnRhaW5lcj5cblxuIl19