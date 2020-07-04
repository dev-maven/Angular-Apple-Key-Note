import { ɵɵdirectiveInject, ViewContainerRef, ɵɵdefineDirective, ɵsetClassMetadata, Directive, Input, InjectionToken, EventEmitter, Injector, ElementRef, ComponentFactoryResolver, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵstyleProp, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵelementContainer, Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, Output, ViewChild, HostBinding, Renderer2, ChangeDetectorRef, ɵɵattribute, ViewChildren, HostListener, QueryList, ɵɵgetInheritedFactory, ɵɵelement, ɵɵtemplate, ɵɵelementStart, ɵɵelementEnd, ɵɵproperty, ɵɵtext, ɵɵtextInterpolate1, ɵɵadvance, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵsanitizeUrl, ɵɵtextInterpolate, ɵɵlistener, ɵɵtextInterpolate2, ɵɵreference, ɵɵpureFunction1, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵnamespaceSVG, ɵɵtemplateRefExtractor, ɵɵclassMap, ɵɵclassProp, ɵɵpureFunction2, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { pebCreateLogger, AbstractComponent, PebScreen, pebFindElementChildrenWithParent, pebTraverseElementDeep, PebElementContextState } from '@pe/builder-core';
import { BehaviorSubject, Subject } from 'rxjs';
import { union, keys, forEach, keyBy, sortBy, isArray, sum } from 'lodash-es';
import { debounceTime, tap, takeUntil } from 'rxjs/operators';
import { NgIf, NgForOf, NgSwitch, NgSwitchCase, NgTemplateOutlet, CommonModule, NgClass, NgComponentOutlet, NgStyle, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

class PebRendererChildrenSlotDirective {
    constructor(viewRef) {
        this.viewRef = viewRef;
        this.name = '';
    }
}
PebRendererChildrenSlotDirective.ɵfac = function PebRendererChildrenSlotDirective_Factory(t) { return new (t || PebRendererChildrenSlotDirective)(ɵɵdirectiveInject(ViewContainerRef)); };
PebRendererChildrenSlotDirective.ɵdir = ɵɵdefineDirective({ type: PebRendererChildrenSlotDirective, selectors: [["", "pebRendererChildrenSlot", ""]], inputs: { name: ["pebRendererChildrenSlot", "name"] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebRendererChildrenSlotDirective, [{
        type: Directive,
        args: [{
                selector: '[pebRendererChildrenSlot]'
            }]
    }], function () { return [{ type: ViewContainerRef }]; }, { name: [{
            type: Input,
            args: ['pebRendererChildrenSlot']
        }] }); })();

const ElementComponentsCollection = new InjectionToken('ElementsCollection');
const MakerComponentsCollection = new InjectionToken('MakersCollection');
const RenderFunction = new InjectionToken('RenderFunction');
const RenderChildsFunction = new InjectionToken('RenderChildsFunction');
const RendererInteractionEmitter = new InjectionToken('RendererInteractionEmitter');
//
//  Element parent
//
const ParentElementComponent = new InjectionToken('ParentElementComponent');

const log = pebCreateLogger('renderer:root');
class PebRendererComponent extends AbstractComponent {
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
PebRendererComponent.ɵfac = function PebRendererComponent_Factory(t) { return new (t || PebRendererComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(ElementComponentsCollection)); };
PebRendererComponent.ɵcmp = ɵɵdefineComponent({ type: PebRendererComponent, selectors: [["peb-renderer"]], viewQuery: function PebRendererComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(PebRendererChildrenSlotDirective, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mainSlot = _t.first);
    } }, hostVars: 2, hostBindings: function PebRendererComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵstyleProp("width", ctx.stylesWidth);
    } }, inputs: { element: "element", stylesheet: "stylesheet", context: "context", options: "options", setOptionsScale: ["options.scale", "setOptionsScale"], setOptionsScreen: ["options.screen", "setOptionsScreen"], setOptionsLocal: ["options.locale", "setOptionsLocal"], modifiedElement: "modifiedElement" }, outputs: { rendered: "rendered", interacted: "interacted" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], decls: 1, vars: 0, consts: [["pebRendererChildrenSlot", ""]], template: function PebRendererComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainer(0, 0);
    } }, directives: [PebRendererChildrenSlotDirective], styles: [":host{display:block;background:#fff}"], encapsulation: 3, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebRendererComponent, [{
        type: Component,
        args: [{
                selector: 'peb-renderer',
                templateUrl: './renderer.component.html',
                styleUrls: ['./renderer.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.ShadowDom,
            }]
    }], function () { return [{ type: ElementRef }, { type: Injector }, { type: ComponentFactoryResolver }, { type: undefined, decorators: [{
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

class PebAbstractElement {
    constructor(renderElement, renderElementChilds, interactionEmitter, stylesheet, parentCmp, injector, elementRef, renderer, sanitizer, 
    // dev
    cdr) {
        this.renderElement = renderElement;
        this.renderElementChilds = renderElementChilds;
        this.interactionEmitter = interactionEmitter;
        this.stylesheet = stylesheet;
        this.parentCmp = parentCmp;
        this.injector = injector;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        /** @deprecated: dev only. do not use or rely on */
        this.selected = false;
        this.destroy$ = new Subject();
    }
    ngOnChanges() {
        this.applyStyles();
    }
    ngAfterViewInit() {
        this.renderChildren();
        this.applyStyles();
    }
    ngOnDestroy() {
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
    applyStyles() {
        if (this.elements) {
            Object.entries(this.elements).forEach(([name, element]) => {
                if (element) {
                    // TODO: add logs if there is no mapped styles for an element
                    const elementStyles = this.mappedStyles && this.mappedStyles[name] ? this.mappedStyles[name] : {};
                    const elementsArr = isArray(element) ? element : [element];
                    elementsArr.forEach(elem => Object.entries(elementStyles).forEach(([prop, value]) => this.renderer.setStyle(elem, prop, value)));
                }
            });
        }
    }
    interact(payload) {
        this.interactionEmitter.emit(payload);
    }
    get attrElementId() {
        return this.element.id;
    }
}
PebAbstractElement.ɵfac = function PebAbstractElement_Factory(t) { return new (t || PebAbstractElement)(ɵɵdirectiveInject(RenderFunction), ɵɵdirectiveInject(RenderChildsFunction), ɵɵdirectiveInject(RendererInteractionEmitter), ɵɵdirectiveInject('STYLESHEET'), ɵɵdirectiveInject('PARENT_ELEMENT'), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ChangeDetectorRef)); };
PebAbstractElement.ɵcmp = ɵɵdefineComponent({ type: PebAbstractElement, selectors: [["peb-element-abstract"]], viewQuery: function PebAbstractElement_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(PebRendererChildrenSlotDirective, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childSlots = _t);
    } }, hostVars: 1, hostBindings: function PebAbstractElement_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵattribute("peb-element-id", ctx.attrElementId);
    } }, inputs: { element: "element", styles: "styles", context: "context", options: "options", selected: "selected" }, features: [ɵɵNgOnChangesFeature()], decls: 0, vars: 0, template: function PebAbstractElement_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebAbstractElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-abstract',
                template: '',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [RenderFunction]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [RenderChildsFunction]
            }] }, { type: EventEmitter, decorators: [{
                type: Inject,
                args: [RendererInteractionEmitter]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ['STYLESHEET']
            }] }, { type: PebAbstractElement, decorators: [{
                type: Inject,
                args: ['PARENT_ELEMENT']
            }] }, { type: Injector }, { type: ElementRef }, { type: Renderer2 }, { type: DomSanitizer }, { type: ChangeDetectorRef }]; }, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], context: [{
            type: Input
        }], options: [{
            type: Input
        }], selected: [{
            type: Input
        }], childSlots: [{
            type: ViewChildren,
            args: [PebRendererChildrenSlotDirective]
        }], attrElementId: [{
            type: HostBinding,
            args: ['attr.peb-element-id']
        }] }); })();
// FIXME(@ng-packagr/ng-packagr/issues/710): Remove compile warnings
const HIDE_WARNINGS = {
    HostBinding,
    HostListener,
    QueryList,
};

class PebDocumentElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        return { host: {} };
    }
    applyStyles() { }
}
PebDocumentElement.ɵfac = function PebDocumentElement_Factory(t) { return ɵPebDocumentElement_BaseFactory(t || PebDocumentElement); };
PebDocumentElement.ɵcmp = ɵɵdefineComponent({ type: PebDocumentElement, selectors: [["peb-element-document"]], inputs: { element: "element", context: "context", options: "options" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["pebRendererChildrenSlot", ""]], template: function PebDocumentElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainer(0, 0);
    } }, directives: [PebRendererChildrenSlotDirective], styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", ""] });
const ɵPebDocumentElement_BaseFactory = ɵɵgetInheritedFactory(PebDocumentElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebDocumentElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-document',
                templateUrl: './document.element.html',
                styleUrls: [
                    '../../_abstract/abstract.element.scss',
                    './document.element.scss'
                ]
            }]
    }], null, { element: [{
            type: Input
        }], context: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();

const _c0 = ["wrapper"];
function PebSectionElement_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 4);
} }
const SECTION_DESKTOP_WRAPPER_WIDTH = 1024;
class PebSectionElement extends PebAbstractElement {
    get elements() {
        var _a;
        return {
            host: this.nativeElement,
            wrapper: (_a = this.wrapperEl) === null || _a === void 0 ? void 0 : _a.nativeElement,
        };
    }
    get mappedStyles() {
        return {
            host: {
                position: 'relative',
                padding: this.styles.padding,
                margin: this.styles.margin,
                width: '100%',
                height: this.styles.height
                    ? +this.styles.height * this.options.scale + 'px'
                    : null,
                // TODO: Think about allowing shorthand
                // background: this.styles.background,
                backgroundImage: this.styles.backgroundImage
                    ? 'url("' + this.styles.backgroundImage + '")'
                    : null,
                backgroundSize: this.styles.backgroundSize
                    ? this.styles.backgroundSize
                    : null,
                backgroundPosition: this.styles.backgroundPosition
                    ? this.styles.backgroundPosition
                    : null,
                backgroundRepeat: this.styles.backgroundRepeat
                    ? this.styles.backgroundRepeat
                    : null,
                backgroundColor: this.styles.backgroundColor
                    ? this.styles.backgroundColor
                    : null,
            },
            wrapper: {
                width: this.options.screen === 'desktop'
                    ? SECTION_DESKTOP_WRAPPER_WIDTH * this.options.scale + 'px'
                    : '100%',
            },
        };
    }
}
PebSectionElement.ɵfac = function PebSectionElement_Factory(t) { return ɵPebSectionElement_BaseFactory(t || PebSectionElement); };
PebSectionElement.ɵcmp = ɵɵdefineComponent({ type: PebSectionElement, selectors: [["peb-element-section"]], viewQuery: function PebSectionElement_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapperEl = _t.first);
    } }, inputs: { element: "element", styles: "styles" }, features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 1, consts: [["class", "selected", 4, "ngIf"], ["id", "main-slot"], ["wrapper", ""], ["pebRendererChildrenSlot", ""], [1, "selected"]], template: function PebSectionElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PebSectionElement_div_0_Template, 1, 0, "div", 0);
        ɵɵelementStart(1, "div", 1, 2);
        ɵɵelementContainer(3, 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.selected);
    } }, directives: [NgIf, PebRendererChildrenSlotDirective], styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", "[_nghost-%COMP%]{position:relative}#main-slot[_ngcontent-%COMP%]{position:relative;height:100%;margin:0 auto}"] });
const ɵPebSectionElement_BaseFactory = ɵɵgetInheritedFactory(PebSectionElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebSectionElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-section',
                templateUrl: './section.element.html',
                styleUrls: [
                    '../../_abstract/abstract.element.scss',
                    './section.element.scss'
                ],
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], wrapperEl: [{
            type: ViewChild,
            args: ['wrapper']
        }] }); })();

function PebBlockElement_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 2);
} }
class PebBlockElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const styles = this.styles;
        const { scale } = this.options;
        return {
            host: {
                position: styles.position || 'relative',
                width: styles.width ? +styles.width * scale + 'px' : null,
                height: styles.height ? +styles.height * scale + 'px' : null,
                backgroundColor: styles.backgroundColor || null,
            },
        };
    }
}
PebBlockElement.ɵfac = function PebBlockElement_Factory(t) { return ɵPebBlockElement_BaseFactory(t || PebBlockElement); };
PebBlockElement.ɵcmp = ɵɵdefineComponent({ type: PebBlockElement, selectors: [["peb-element-block"]], inputs: { element: "element", styles: "styles", options: "options" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [["class", "selected", 4, "ngIf"], ["pebRendererChildrenSlot", ""], [1, "selected"]], template: function PebBlockElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PebBlockElement_div_0_Template, 1, 0, "div", 0);
        ɵɵelementContainer(1, 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.selected);
    } }, directives: [NgIf, PebRendererChildrenSlotDirective], styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}"] });
const ɵPebBlockElement_BaseFactory = ɵɵgetInheritedFactory(PebBlockElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebBlockElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-block',
                templateUrl: './block.element.html',
                styleUrls: [
                    '../../_abstract/abstract.element.scss',
                ]
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();

class PebTextElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const styles = this.styles;
        const { scale } = this.options;
        const transformMargin = (str) => ('' + str)
            .split(' ')
            .map(part => +part * scale + 'px')
            .join(' ');
        return {
            host: {
                width: styles.width
                    ? (styles.width).toString().includes('%')
                        ? styles.width
                        : styles.width * scale + 'px'
                    : null,
                position: 'relative',
                display: 'inline-block',
                margin: styles.margin ? transformMargin(styles.margin) : null,
                color: styles.color,
                fontSize: styles.fontSize
                    ? scale * styles.fontSize + 'px'
                    : scale + 'em',
                fontWeight: styles.fontWeight,
                textAlign: styles.textAlign,
            },
        };
    }
}
PebTextElement.ɵfac = function PebTextElement_Factory(t) { return ɵPebTextElement_BaseFactory(t || PebTextElement); };
PebTextElement.ɵcmp = ɵɵdefineComponent({ type: PebTextElement, selectors: [["peb-element-text"]], inputs: { element: "element", context: "context", options: "options" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, template: function PebTextElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0);
    } if (rf & 2) {
        ɵɵtextInterpolate1("", ctx.element.data.text, "\n");
    } }, styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", ""] });
const ɵPebTextElement_BaseFactory = ɵɵgetInheritedFactory(PebTextElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebTextElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-text',
                templateUrl: './text.element.html',
                styleUrls: [
                    '../../_abstract/abstract.element.scss',
                    './text.element.scss'
                ]
            }]
    }], null, { element: [{
            type: Input
        }], context: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();

function PebGridElement_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementContainer(1, 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const cell_r460 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("pebRendererChildrenSlot", cell_r460);
} }
class PebGridElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get cells() {
        return this.styles.cells.split(' ').map(cdef => cdef.split(':').shift());
    }
    //
    // get cellStyle() {
    //   const direction = getScreenStyle((this.element.style as any).direction, this.options.screen);
    //   const items = getScreenStyle((this.element.style as any).items, this.options.screen);
    //
    //   if (direction === 'column') {
    //     return { height: 100 / items + '%' };
    //   } else if (direction === 'row') {
    //     return { width: 100 / items + '%' };
    //   } else {
    //     throw new Error('Renderer: unsupported direction in Grid element');
    //   }
    // }
    get mappedStyles() {
        const scale = this.options.scale;
        // const thisScreenStyle = (style) => getScreenStyle(style, screen);
        // TODO: Take into account scale
        const cellsDefToGridTemplate = (def) => def
            .split(' ')
            .map(cDef => cDef.split(':').pop())
            .join(' ');
        const transformMargin = (str) => ('' + str)
            .split(' ')
            .map(part => +part * scale + 'px')
            .join(' ');
        // TODO: Filter out nulls
        return {
            host: {
                display: 'grid',
                margin: this.styles.margin ? transformMargin(this.styles.margin) : null,
                gridTemplateColumns: this.styles.direction === 'horizontal'
                    ? cellsDefToGridTemplate(this.styles.cells) : null,
                gridTemplateRows: this.styles.direction === 'vertical'
                    ? cellsDefToGridTemplate(this.styles.cells) : null,
                gridGap: this.styles.gridGap
                    ? this.styles.gridGap * scale + 'px'
                    : null,
            }
        };
    }
}
PebGridElement.ɵfac = function PebGridElement_Factory(t) { return ɵPebGridElement_BaseFactory(t || PebGridElement); };
PebGridElement.ɵcmp = ɵɵdefineComponent({ type: PebGridElement, selectors: [["peb-element-grid"]], viewQuery: function PebGridElement_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(PebRendererChildrenSlotDirective, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slots = _t);
    } }, inputs: { element: "element", styles: "styles", options: "options" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "grid-cell", 4, "ngFor", "ngForOf"], [1, "grid-cell"], [3, "pebRendererChildrenSlot"]], template: function PebGridElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PebGridElement_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.cells);
    } }, directives: [NgForOf, PebRendererChildrenSlotDirective], styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", ".grid-cell[_ngcontent-%COMP%]{position:relative}"] });
const ɵPebGridElement_BaseFactory = ɵɵgetInheritedFactory(PebGridElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebGridElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-grid',
                templateUrl: './grid.element.html',
                styleUrls: [
                    '../../_abstract/abstract.element.scss',
                    './grid.element.scss'
                ]
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }], slots: [{
            type: ViewChildren,
            args: [PebRendererChildrenSlotDirective]
        }] }); })();

function PebBusinessLogoElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Loading...");
    ɵɵelementContainerEnd();
} }
function PebBusinessLogoElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Error");
    ɵɵelementContainerEnd();
} }
function PebBusinessLogoElement_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Empty");
    ɵɵelementContainerEnd();
} }
function PebBusinessLogoElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵelement(2, "img", 3);
    ɵɵelementStart(3, "h1");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r464 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("src", ctx_r464.context.data.logoUrl, ɵɵsanitizeUrl)("alt", ctx_r464.context.data.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r464.context.data.name);
} }
class PebBusinessLogoElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const { scale } = this.options;
        // TODO: Filter out nulls
        return {
            host: {
                position: 'relative',
                color: this.styles.color,
                fontSize: this.styles.fontSize
                    ? (this.styles.fontSize * scale) + 'px'
                    : null,
                left: this.styles.left
                    ? (this.styles.left * scale) + 'px'
                    : null,
                right: this.styles.right
                    ? (this.styles.right * scale) + 'px'
                    : null,
                top: this.styles.to
                    ? (this.styles.top * scale) + 'px'
                    : null,
                bottom: this.styles.bottom
                    ? (this.styles.bottom * scale) + 'px'
                    : null,
            }
        };
    }
    onClick() {
        this.interact({ type: 'logo.click' });
    }
}
PebBusinessLogoElement.ɵfac = function PebBusinessLogoElement_Factory(t) { return ɵPebBusinessLogoElement_BaseFactory(t || PebBusinessLogoElement); };
PebBusinessLogoElement.ɵcmp = ɵɵdefineComponent({ type: PebBusinessLogoElement, selectors: [["peb-element-business-logo"]], hostBindings: function PebBusinessLogoElement_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function PebBusinessLogoElement_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { element: "element", styles: "styles", context: "context" }, features: [ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "wrapper"], [3, "src", "alt"]], template: function PebBusinessLogoElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PebBusinessLogoElement_ng_container_1_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(2, PebBusinessLogoElement_ng_container_2_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(3, PebBusinessLogoElement_ng_container_3_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(4, PebBusinessLogoElement_ng_container_4_Template, 5, 3, "ng-container", 1);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.context.state);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Loading);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Error);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Empty);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
    } }, directives: [NgSwitch, NgSwitchCase], styles: ["[_nghost-%COMP%]{display:inline-block}.wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}h1[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{margin:0}img[_ngcontent-%COMP%]{-webkit-margin-end:.5em;margin-inline-end:.5em}h1[_ngcontent-%COMP%]{font-size:1em;font-weight:inherit;display:inline-block}"] });
const ɵPebBusinessLogoElement_BaseFactory = ɵɵgetInheritedFactory(PebBusinessLogoElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebBusinessLogoElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-business-logo',
                templateUrl: './logo.element.html',
                styleUrls: ['./logo.element.scss']
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], context: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();

class PebShopCartElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    // TODO: --prod build doesn't work
    // static contextFetcher = ctx => ctx['@cart'];
    onOpenCart() {
        this.interact({ type: 'cart.click' });
    }
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const { scale } = this.options;
        // TODO: Filter out nulls
        return {
            host: {
                // position: 'absolute',
                color: this.styles.color,
                fontSize: this.styles.fontSize
                    ? (this.styles.fontSize * scale) + 'px'
                    : null,
            }
        };
    }
    get totalItems() {
        if (this.context.state !== this.PebElementContextState.Ready) {
            return;
        }
        return sum(this.context.data.map(i => i.count));
    }
    get totalAmount() {
        if (this.context.state !== this.PebElementContextState.Ready) {
            return;
        }
        return sum(this.context.data.map(i => i.count * (i.product.prices.sale || i.product.prices.regular)));
    }
}
PebShopCartElement.ɵfac = function PebShopCartElement_Factory(t) { return ɵPebShopCartElement_BaseFactory(t || PebShopCartElement); };
PebShopCartElement.ɵcmp = ɵɵdefineComponent({ type: PebShopCartElement, selectors: [["peb-element-shop-cart"]], inputs: { element: "element", styles: "styles", context: "context" }, features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "wrapper", 3, "click"], ["src", "https://www.apple.com/ac/globalnav/5/en_US/images/globalnav/bag/image_large.svg"]], template: function PebShopCartElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function PebShopCartElement_Template_div_click_0_listener() { return ctx.onOpenCart(); });
        ɵɵelement(1, "img", 1);
        ɵɵelementStart(2, "span");
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate2(" ", ctx.totalItems, " items / ", ctx.totalAmount, " $ ");
    } }, styles: ["[_nghost-%COMP%]{display:inline-block}.wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;cursor:pointer}img[_ngcontent-%COMP%]{width:1em;height:2.5em;-webkit-margin-end:.5em;margin-inline-end:.5em}"] });
const ɵPebShopCartElement_BaseFactory = ɵɵgetInheritedFactory(PebShopCartElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebShopCartElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-cart',
                templateUrl: './cart.element.html',
                styleUrls: ['./cart.element.scss']
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], context: [{
            type: Input
        }] }); })();

const _c0$1 = ["wrapper"];
const _c1 = ["mobileButtonWrapper"];
const _c2 = ["mobileButton"];
const _c3 = ["mobileButtonLine"];
const _c4 = function (a0) { return { route: a0 }; };
function PebNavbarElement_div_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainer(1, 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const route_r475 = ctx.$implicit;
    ɵɵnextContext(3);
    const _r470 = ɵɵreference(6);
    const _r468 = ɵɵreference(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", (route_r475 == null ? null : route_r475.children == null ? null : route_r475.children.length) ? _r470 : _r468)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, route_r475));
} }
function PebNavbarElement_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, PebNavbarElement_div_0_div_2_ng_container_1_Template, 2, 4, "ng-container", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r473 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r473.element.data.routes);
} }
function PebNavbarElement_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4, 5);
    ɵɵtemplate(2, PebNavbarElement_div_0_div_2_Template, 2, 1, "div", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r465 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r465.element.data == null ? null : ctx_r465.element.data.routes);
} }
function PebNavbarElement_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r481 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10, 11);
    ɵɵlistener("click", function PebNavbarElement_ng_template_1_Template_div_click_0_listener() { ɵɵrestoreView(_r481); const ctx_r480 = ɵɵnextContext(); return ctx_r480.openMobileMenu(); });
    ɵɵelementStart(2, "div", 12, 13);
    ɵɵelement(4, "div", 14, 15);
    ɵɵelement(6, "div", 16, 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PebNavbarElement_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r484 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 17);
    ɵɵlistener("click", function PebNavbarElement_ng_template_3_Template_a_click_0_listener() { ɵɵrestoreView(_r484); const route_r482 = ctx.route; const ctx_r483 = ɵɵnextContext(); return ctx_r483.redirectTo(route_r482.route); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const route_r482 = ctx.route;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", route_r482.title, "");
} }
function PebNavbarElement_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r489 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18, 19);
    ɵɵlistener("click", function PebNavbarElement_ng_template_5_Template_div_click_0_listener() { ɵɵrestoreView(_r489); const route_r485 = ctx.route; const _r487 = ɵɵreference(1); const ctx_r488 = ɵɵnextContext(); return ctx_r488.showDropdown(_r487, route_r485); });
    ɵɵelementStart(2, "a", 20);
    ɵɵtext(3);
    ɵɵelementStart(4, "span", 21);
    ɵɵnamespaceSVG();
    ɵɵelementStart(5, "svg", 22);
    ɵɵelement(6, "path", 23);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const route_r485 = ctx.route;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", route_r485.title, " ");
} }
class PebNavbarElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
            wrapper: this.wrapper ? this.wrapper.nativeElement : null,
            mobileButtonWrapper: this.mobileButtonWrapper ? this.mobileButtonWrapper.nativeElement : null,
            mobileButton: this.mobileButton ? this.mobileButton.nativeElement : null,
            mobileButtonLine: this.mobileButtonLines
                ? this.mobileButtonLines.toArray().map(a => a.nativeElement)
                : [],
        };
    }
    get mappedStyles() {
        return {
            host: {
                color: this.styles.color,
                background: this.styles.background,
                fontSize: this.styles.fontSize + 'px',
            },
            wrapper: {
                height: this.styles.height + 'px',
            },
            mobileButtonWrapper: {
                width: this.styles.mobileButtonWidth + 'px',
            },
            mobileButton: {
                height: this.styles.mobileButtonHeight + 'px',
            },
            mobileButtonLine: {
                height: this.styles.mobileButtonElementHeight + 'px',
                backgroundColor: this.styles.mobileButtonElementColor,
            }
        };
    }
    openMobileMenu() {
        this.interact({
            type: 'navigation.showMobileMenu',
            routes: this.element.data.routes,
        });
    }
    redirectTo(url) {
        this.interact({ type: 'navigate', url });
    }
    showDropdown(element, route) {
        this.interact({
            type: 'navigation.showDropdown',
            route,
            element,
        });
    }
    ngAfterViewInit() {
        this.applyStyles();
    }
}
PebNavbarElement.ɵfac = function PebNavbarElement_Factory(t) { return ɵPebNavbarElement_BaseFactory(t || PebNavbarElement); };
PebNavbarElement.ɵcmp = ɵɵdefineComponent({ type: PebNavbarElement, selectors: [["peb-element-navbar"]], viewQuery: function PebNavbarElement_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, true);
        ɵɵviewQuery(_c1, true);
        ɵɵviewQuery(_c2, true);
        ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapper = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mobileButtonWrapper = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mobileButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mobileButtonLines = _t);
    } }, inputs: { element: "element", styles: "styles", options: "options" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 2, consts: [["class", "navigation", 4, "ngIf", "ngIfElse"], ["hamburger", ""], ["simpleLink", ""], ["parentLink", ""], [1, "navigation"], ["wrapper", ""], ["class", "navigation_routes", 4, "ngIf"], [1, "navigation_routes"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "navigation_hamburger", 3, "click"], ["mobileButtonWrapper", ""], [1, "navigation_hamburger__button"], ["mobileButton", ""], [1, "line", "top"], ["mobileButtonLine", ""], [1, "line", "bottom"], [1, "navigation_routes__element", 3, "click"], [1, "expansion-link", 3, "click"], ["dropdownLink", ""], [1, "navigation_routes__element"], [1, "arrow"], ["width", "10", "height", "5", "viewBox", "-2.5 -5 75 60", "preserveAspectRatio", "none"], ["d", "M0,0 l35,50 l35,-50", "fill", "none", "stroke", "white", "stroke-linecap", "round", "stroke-width", "5"]], template: function PebNavbarElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PebNavbarElement_div_0_Template, 3, 1, "div", 0);
        ɵɵtemplate(1, PebNavbarElement_ng_template_1_Template, 8, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PebNavbarElement_ng_template_3_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(5, PebNavbarElement_ng_template_5_Template, 7, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r466 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.options.screen !== "mobile")("ngIfElse", _r466);
    } }, directives: [NgIf, NgForOf, NgTemplateOutlet], styles: [".navigation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%;background:inherit}.navigation_hamburger[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;padding:0 10px}.navigation_hamburger__button[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-content:space-around}.navigation_hamburger__button[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%;background-color:#000;border-radius:1em}.navigation_routes[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;width:100%;height:100%;overflow:hidden}.navigation_routes__element[_ngcontent-%COMP%]{text-align:center;color:inherit;margin:0 16px;text-decoration:none;cursor:pointer;font-size:inherit;width:-webkit-max-content;width:-moz-max-content;width:max-content}.navigation_routes__element[_ngcontent-%COMP%]:hover{opacity:.6}.navigation_routes[_ngcontent-%COMP%]   .expansion-link[_ngcontent-%COMP%]{height:100%;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex}"], changeDetection: 0 });
const ɵPebNavbarElement_BaseFactory = ɵɵgetInheritedFactory(PebNavbarElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebNavbarElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }], wrapper: [{
            type: ViewChild,
            args: ['wrapper']
        }], mobileButtonWrapper: [{
            type: ViewChild,
            args: ['mobileButtonWrapper']
        }], mobileButton: [{
            type: ViewChild,
            args: ['mobileButton']
        }], mobileButtonLines: [{
            type: ViewChildren,
            args: ['mobileButtonLine']
        }] }); })();

const _c0$2 = ["imageRef"];
function PebShopCategoryProductElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Loading...");
    ɵɵelementContainerEnd();
} }
function PebShopCategoryProductElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Error");
    ɵɵelementContainerEnd();
} }
function PebShopCategoryProductElement_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Empty");
    ɵɵelementContainerEnd();
} }
function PebShopCategoryProductElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 2, 3);
    ɵɵelementStart(3, "div", 4);
    ɵɵelementStart(4, "div", 5);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 6);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r493 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx_r493.context.data.title);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r493.context.data.prices.regular, " ");
} }
class PebShopCategoryProductElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    get elements() {
        var _a;
        return {
            host: this.nativeElement,
            image: (_a = this.imageRef) === null || _a === void 0 ? void 0 : _a.nativeElement,
        };
    }
    get mappedStyles() {
        var _a;
        return {
            host: {
                borderColor: (_a = this.styles) === null || _a === void 0 ? void 0 : _a.borderColor,
            },
            image: {
                backgroundImage: this.context.state === PebElementContextState.Ready ? `url('${this.context.data.image}')` : null,
            },
        };
    }
    // TODO: return after checking renderer's styling.
    ngAfterViewInit() {
        this.applyStyles();
    }
    get hostClass() {
        return 'screen-' + this.options.screen;
    }
}
PebShopCategoryProductElement.ɵfac = function PebShopCategoryProductElement_Factory(t) { return ɵPebShopCategoryProductElement_BaseFactory(t || PebShopCategoryProductElement); };
PebShopCategoryProductElement.ɵcmp = ɵɵdefineComponent({ type: PebShopCategoryProductElement, selectors: [["peb-element-shop-category-product"]], viewQuery: function PebShopCategoryProductElement_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imageRef = _t.first);
    } }, hostVars: 2, hostBindings: function PebShopCategoryProductElement_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassMap(ctx.hostClass);
    } }, inputs: { context: "context" }, features: [ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "image"], ["imageRef", ""], [1, "info"], [1, "title"], [1, "price"]], template: function PebShopCategoryProductElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PebShopCategoryProductElement_ng_container_1_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(2, PebShopCategoryProductElement_ng_container_2_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(3, PebShopCategoryProductElement_ng_container_3_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(4, PebShopCategoryProductElement_ng_container_4_Template, 8, 2, "ng-container", 1);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.context.state);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Loading);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Error);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Empty);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
    } }, directives: [NgSwitch, NgSwitchCase], styles: ["[_nghost-%COMP%]{height:500px;border-bottom:1px solid #d6d6d6;border-right:1px solid #d6d6d6;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;cursor:pointer}[_nghost-%COMP%]   .screen-mobile[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:175px}[_nghost-%COMP%]   .price[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:300;width:100%;text-align:center}[_nghost-%COMP%]   .price[_ngcontent-%COMP%]{padding-top:10px}[_nghost-%COMP%]   .image[_ngcontent-%COMP%]{height:60%;background-position:center;background-size:contain;background-repeat:no-repeat}[_nghost-%COMP%]   .image[_ngcontent-%COMP%], [_nghost-%COMP%]   .info[_ngcontent-%COMP%]{width:90%}"], changeDetection: 0 });
const ɵPebShopCategoryProductElement_BaseFactory = ɵɵgetInheritedFactory(PebShopCategoryProductElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebShopCategoryProductElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-category-product',
                templateUrl: './category-product.element.html',
                styleUrls: ['./category-product.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { context: [{
            type: Input
        }], imageRef: [{
            type: ViewChild,
            args: ['imageRef']
        }], hostClass: [{
            type: HostBinding,
            args: ['class']
        }] }); })();

const _c0$3 = ["imageRef"];
function PebShopCategoryHeaderElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 3);
    ɵɵelement(4, "div", 4, 5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r495 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r495.context.data.title);
} }
class PebShopCategoryHeaderElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    get elements() {
        var _a;
        return {
            host: this.nativeElement,
            image: (_a = this.imageRef) === null || _a === void 0 ? void 0 : _a.nativeElement,
        };
    }
    get mappedStyles() {
        var _a;
        return {
            host: {
                borderColor: (_a = this.styles) === null || _a === void 0 ? void 0 : _a.borderColor,
            },
            image: {
                backgroundImage: this.context.state === PebElementContextState.Ready ? `url('${this.context.data.image}')` : null,
            },
        };
    }
    // TODO: return after checking renderer's styling.
    ngAfterViewInit() {
        this.applyStyles();
    }
    get hostClass() {
        return 'screen-' + this.options.screen;
    }
}
PebShopCategoryHeaderElement.ɵfac = function PebShopCategoryHeaderElement_Factory(t) { return ɵPebShopCategoryHeaderElement_BaseFactory(t || PebShopCategoryHeaderElement); };
PebShopCategoryHeaderElement.ɵcmp = ɵɵdefineComponent({ type: PebShopCategoryHeaderElement, selectors: [["peb-element-shop-category-header"]], viewQuery: function PebShopCategoryHeaderElement_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$3, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imageRef = _t.first);
    } }, hostVars: 2, hostBindings: function PebShopCategoryHeaderElement_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassMap(ctx.hostClass);
    } }, inputs: { context: "context" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "title"], [1, "image-container"], [1, "image"], ["imageRef", ""]], template: function PebShopCategoryHeaderElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PebShopCategoryHeaderElement_ng_container_1_Template, 6, 1, "ng-container", 1);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.context.state);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
    } }, directives: [NgSwitch, NgSwitchCase], styles: ["[_nghost-%COMP%]{background-color:#00000005;padding:0 2.18rem;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;overflow:hidden}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:400;text-transform:capitalize}[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;margin-left:auto;width:50%;height:calc(100% - 2rem)}[_nghost-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;height:100%;background-size:contain;background-position:center;background-repeat:no-repeat}"], changeDetection: 0 });
const ɵPebShopCategoryHeaderElement_BaseFactory = ɵɵgetInheritedFactory(PebShopCategoryHeaderElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebShopCategoryHeaderElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-category-header',
                templateUrl: './category-header.element.html',
                styleUrls: ['./category-header.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { context: [{
            type: Input
        }], imageRef: [{
            type: ViewChild,
            args: ['imageRef']
        }], hostClass: [{
            type: HostBinding,
            args: ['class']
        }] }); })();

class PebFiltersIcon {
}
PebFiltersIcon.ɵfac = function PebFiltersIcon_Factory(t) { return new (t || PebFiltersIcon)(); };
PebFiltersIcon.ɵcmp = ɵɵdefineComponent({ type: PebFiltersIcon, selectors: [["peb-icon-filters"]], decls: 10, vars: 0, consts: [["width", "100%", "height", "100%", "viewBox", "0 0 13 10", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["fill-rule", "nonzero"], ["fill", "#666666", "x", "0", "y", "0", "width", "2", "height", "2"], ["fill", "#666666", "x", "0", "y", "4", "width", "2", "height", "2"], ["fill", "#666666", "x", "0", "y", "8", "width", "2", "height", "2"], ["d", "M4,1 L13,1", "stroke", "#666666"], ["d", "M4,5 L13,5", "stroke", "#666666"], ["d", "M4,9 L13,9", "stroke", "#666666"]], template: function PebFiltersIcon_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelementStart(1, "g", 1);
        ɵɵelementStart(2, "g", 2);
        ɵɵelement(3, "rect", 3);
        ɵɵelement(4, "rect", 4);
        ɵɵelement(5, "rect", 5);
        ɵɵelement(6, "rect", 5);
        ɵɵelement(7, "path", 6);
        ɵɵelement(8, "path", 7);
        ɵɵelement(9, "path", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebFiltersIcon, [{
        type: Component,
        args: [{
                selector: 'peb-icon-filters',
                template: `
    <svg width="100%" height="100%" viewBox="0 0 13 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill-rule="nonzero">
                <rect fill="#666666" x="0" y="0" width="2" height="2"></rect>
                <rect fill="#666666" x="0" y="4" width="2" height="2"></rect>
                <rect fill="#666666" x="0" y="8" width="2" height="2"></rect>
                <rect fill="#666666" x="0" y="8" width="2" height="2"></rect>
                <path d="M4,1 L13,1" stroke="#666666"></path>
                <path d="M4,5 L13,5" stroke="#666666"></path>
                <path d="M4,9 L13,9" stroke="#666666"></path>
            </g>
        </g>
    </svg>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();

const _c0$4 = ["imageRef"];
function PebShopCategoryNavbarElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r499 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵlistener("click", function PebShopCategoryNavbarElement_ng_container_1_Template_div_click_1_listener() { ɵɵrestoreView(_r499); const ctx_r498 = ɵɵnextContext(); return ctx_r498.onToggleShownFilters(); });
    ɵɵelementStart(2, "div", 3);
    ɵɵelement(3, "peb-icon-filters");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 4);
    ɵɵtext(5, "Filter");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "label", 5);
    ɵɵelementStart(7, "span");
    ɵɵtext(8, "Sort by:");
    ɵɵelementEnd();
    ɵɵelementStart(9, "select", 6);
    ɵɵelementStart(10, "option");
    ɵɵtext(11, "Price: Low to High");
    ɵɵelementEnd();
    ɵɵelementStart(12, "option");
    ɵɵtext(13, "Price: High to Low");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
class PebShopCategoryNavbarElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        var _a;
        return {
            host: {
                borderColor: (_a = this.styles) === null || _a === void 0 ? void 0 : _a.borderColor,
            },
        };
    }
    onToggleShownFilters() {
    }
    // TODO: return after checking renderer's styling.
    ngAfterViewInit() {
        this.applyStyles();
    }
    get hostClass() {
        return 'screen-' + this.options.screen;
    }
}
PebShopCategoryNavbarElement.ɵfac = function PebShopCategoryNavbarElement_Factory(t) { return ɵPebShopCategoryNavbarElement_BaseFactory(t || PebShopCategoryNavbarElement); };
PebShopCategoryNavbarElement.ɵcmp = ɵɵdefineComponent({ type: PebShopCategoryNavbarElement, selectors: [["peb-element-shop-category-navbar"]], viewQuery: function PebShopCategoryNavbarElement_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$4, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imageRef = _t.first);
    } }, hostVars: 2, hostBindings: function PebShopCategoryNavbarElement_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassMap(ctx.hostClass);
    } }, inputs: { context: "context" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "navbar-button", 3, "click"], [1, "navbar-button__icon"], [1, "navbar-button__label"], [1, "navbar-button", "navbar-button--right"], [1, "navbar-select"]], template: function PebShopCategoryNavbarElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PebShopCategoryNavbarElement_ng_container_1_Template, 14, 0, "ng-container", 1);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.context.state);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
    } }, directives: [NgSwitch, NgSwitchCase, PebFiltersIcon], styles: ["[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;border-top:1px solid #d6d6d6;border-bottom:1px solid #d6d6d6;padding:0 2.18rem;position:-webkit-sticky;position:sticky;top:0;background-color:transparent;z-index:100;overflow:hidden}.navbar-button[_ngcontent-%COMP%]{display:-webkit-box;display:flex;font-size:inherit;font-weight:400;cursor:pointer;color:unset;padding:20px 0;-webkit-box-align:center;align-items:center}.navbar-button--right[_ngcontent-%COMP%]{margin-left:auto}.navbar-button--right[_ngcontent-%COMP%]   .navbar-button__label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.navbar-button--right[_ngcontent-%COMP%]   .navbar-button__label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#888}.navbar-button--right[_ngcontent-%COMP%]   .navbar-button__icon[_ngcontent-%COMP%]{width:10px}.navbar-button__label[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-left:5px}.navbar-button__icon[_ngcontent-%COMP%]{width:1em;height:1em}.navbar-select[_ngcontent-%COMP%]{background-color:transparent;border:none;color:unset;font-size:inherit;height:15px}.close-icon[_ngcontent-%COMP%]{display:block;width:30px;height:30px;cursor:pointer}.close-icon[_ngcontent-%COMP%]::before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close-icon[_ngcontent-%COMP%]::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.close-icon[_ngcontent-%COMP%]::after, .close-icon[_ngcontent-%COMP%]::before{position:absolute;left:15px;content:\" \";height:33px;width:2px;background-color:#888}"], changeDetection: 0 });
const ɵPebShopCategoryNavbarElement_BaseFactory = ɵɵgetInheritedFactory(PebShopCategoryNavbarElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebShopCategoryNavbarElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-category-navbar',
                templateUrl: './category-navbar.element.html',
                styleUrls: ['./category-navbar.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { context: [{
            type: Input
        }], imageRef: [{
            type: ViewChild,
            args: ['imageRef']
        }], hostClass: [{
            type: HostBinding,
            args: ['class']
        }] }); })();

class PebPlusIcon {
}
PebPlusIcon.ɵfac = function PebPlusIcon_Factory(t) { return new (t || PebPlusIcon)(); };
PebPlusIcon.ɵcmp = ɵɵdefineComponent({ type: PebPlusIcon, selectors: [["peb-icon-plus"]], decls: 6, vars: 0, consts: [["width", "7px", "height", "7px", "viewBox", "0 0 7 7", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd", "stroke-linecap", "square"], ["transform", "translate(-188.000000, -547.000000)", "stroke", "#979797"], ["transform", "translate(189.000000, 548.000000)"], ["x1", "2.5", "y1", "0", "x2", "2.5", "y2", "5", "id", "Line-3"], ["x1", "2.5", "y1", "0", "x2", "2.5", "y2", "5", "id", "Line-3", "transform", "translate(2.500000, 2.500000) rotate(-270.000000) translate(-2.500000, -2.500000) "]], template: function PebPlusIcon_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelementStart(1, "g", 1);
        ɵɵelementStart(2, "g", 2);
        ɵɵelementStart(3, "g", 3);
        ɵɵelement(4, "line", 4);
        ɵɵelement(5, "line", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebPlusIcon, [{
        type: Component,
        args: [{
                selector: 'peb-icon-plus',
                template: `
    <svg width="7px" height="7px" viewBox="0 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
        <g transform="translate(-188.000000, -547.000000)" stroke="#979797">
          <g transform="translate(189.000000, 548.000000)">
            <line x1="2.5" y1="0" x2="2.5" y2="5" id="Line-3"></line>
            <line x1="2.5" y1="0" x2="2.5" y2="5" id="Line-3"
              transform="translate(2.500000, 2.500000) rotate(-270.000000) translate(-2.500000, -2.500000) "></line>
          </g>
        </g>
      </g>
    </svg>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();

function PebShopCategoryFiltersElement_ng_container_1_div_7_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r506 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function PebShopCategoryFiltersElement_ng_container_1_div_7_button_6_Template_button_click_0_listener() { ɵɵrestoreView(_r506); const childFilter_r504 = ctx.$implicit; const ctx_r505 = ɵɵnextContext(3); return ctx_r505.onToggleFilter(childFilter_r504); });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const childFilter_r504 = ctx.$implicit;
    ɵɵclassProp("filter-child--active", childFilter_r504 == null ? null : childFilter_r504.active);
    ɵɵproperty("disabled", childFilter_r504 == null ? null : childFilter_r504.disabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(childFilter_r504 == null ? null : childFilter_r504.name);
} }
function PebShopCategoryFiltersElement_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "button", 9);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 10);
    ɵɵelement(5, "peb-icon-plus");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, PebShopCategoryFiltersElement_ng_container_1_div_7_button_6_Template, 3, 4, "button", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const parentFilter_r502 = ctx.$implicit;
    const ctx_r501 = ɵɵnextContext(2);
    ɵɵstyleProp("border-color", ctx_r501.styles == null ? null : ctx_r501.styles.borderColor);
    ɵɵadvance(3);
    ɵɵtextInterpolate(parentFilter_r502 == null ? null : parentFilter_r502.name);
    ɵɵadvance(1);
    ɵɵclassProp("filter-icon--expanded", parentFilter_r502 == null ? null : parentFilter_r502.children == null ? null : parentFilter_r502.children.length);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", parentFilter_r502 == null ? null : parentFilter_r502.children);
} }
function PebShopCategoryFiltersElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r508 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵelementStart(2, "div", 3);
    ɵɵelementStart(3, "button", 4);
    ɵɵlistener("click", function PebShopCategoryFiltersElement_ng_container_1_Template_button_click_3_listener() { ɵɵrestoreView(_r508); const ctx_r507 = ɵɵnextContext(); return ctx_r507.onToggleShownFilters(); });
    ɵɵelement(4, "span", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 6);
    ɵɵlistener("click", function PebShopCategoryFiltersElement_ng_container_1_Template_button_click_5_listener() { ɵɵrestoreView(_r508); const ctx_r509 = ɵɵnextContext(); return ctx_r509.onToggleShownFilters(); });
    ɵɵtext(6, " Done ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(7, PebShopCategoryFiltersElement_ng_container_1_div_7_Template, 7, 6, "div", 7);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r500 = ɵɵnextContext();
    ɵɵadvance(7);
    ɵɵproperty("ngForOf", ctx_r500.context.data.filters);
} }
class PebShopCategoryFiltersElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        var _a;
        return {
            host: {
                borderColor: (_a = this.styles) === null || _a === void 0 ? void 0 : _a.borderColor,
            },
        };
    }
    onToggleFilter() {
    }
    onToggleShownFilters() {
    }
    // TODO: return after checking renderer's styling.
    ngAfterViewInit() {
        this.applyStyles();
    }
    get hostClass() {
        return 'screen-' + this.options.screen;
    }
}
PebShopCategoryFiltersElement.ɵfac = function PebShopCategoryFiltersElement_Factory(t) { return ɵPebShopCategoryFiltersElement_BaseFactory(t || PebShopCategoryFiltersElement); };
PebShopCategoryFiltersElement.ɵcmp = ɵɵdefineComponent({ type: PebShopCategoryFiltersElement, selectors: [["peb-element-shop-category-filters"]], hostVars: 2, hostBindings: function PebShopCategoryFiltersElement_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassMap(ctx.hostClass);
    } }, inputs: { context: "context" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "container"], [1, "mobile-controls"], [1, "mobile-control", 3, "click"], [1, "close-icon"], [1, "mobile-control", "mobile-control--black", 3, "click"], ["class", "filter-container", 3, "borderColor", 4, "ngFor", "ngForOf"], [1, "filter-container"], [1, "filter-parent"], [1, "filter-icon"], ["class", "filter-child", 3, "filter-child--active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "filter-child", 3, "disabled", "click"]], template: function PebShopCategoryFiltersElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PebShopCategoryFiltersElement_ng_container_1_Template, 8, 1, "ng-container", 1);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.context.state);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
    } }, directives: [NgSwitch, NgSwitchCase, NgForOf, PebPlusIcon], styles: ["[_nghost-%COMP%]{display:block;position:-webkit-sticky;position:sticky;top:4.5em;width:159px;height:100%;padding:2.18rem}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{-webkit-transition:.2s;transition:.2s}[_nghost-%COMP%]   .filter-container[_ngcontent-%COMP%]{border-bottom:1px solid #d6d6d6}[_nghost-%COMP%]   .filter-parent[_ngcontent-%COMP%]{font-size:inherit;font-weight:500;padding:10px 5px 10px 0;width:100%;text-align:left;border:none;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;outline:0;cursor:pointer;text-transform:capitalize;background-color:transparent;color:unset}[_nghost-%COMP%]   .filter-parent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:8px}[_nghost-%COMP%]   .filter-child[_ngcontent-%COMP%]{font-size:inherit;font-weight:300;border:none;padding:4px 0;width:100%;text-align:left;outline:0;cursor:pointer;text-transform:capitalize;background-color:transparent;margin-bottom:3px;color:unset;white-space:nowrap}[_nghost-%COMP%]   .filter-child[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:8px}[_nghost-%COMP%]   .filter-child--active[_ngcontent-%COMP%]{background-color:#0000000d;color:#008eff}[_nghost-%COMP%]   .filter-child[_ngcontent-%COMP%]:last-of-type{margin-bottom:15px}[_nghost-%COMP%]   .filter-icon--expanded[_ngcontent-%COMP%]{position:relative;left:1px;-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}[_nghost-%COMP%]   .mobile-controls[_ngcontent-%COMP%]{display:none}.screen-mobile[_nghost-%COMP%]{position:fixed;z-index:999;display:block;background-color:#fff;top:0;left:0;width:calc(100vw - 60px);height:calc(100vh - 60px);border:15px solid #888;padding:15px}.screen-mobile[_nghost-%COMP%]   .filter-parent[_ngcontent-%COMP%]{padding:20px 5px 20px 0}.screen-mobile[_nghost-%COMP%]   .filter-child[_ngcontent-%COMP%]{padding:8px 0}.screen-mobile[_nghost-%COMP%]   .filter-child--last[_ngcontent-%COMP%]{margin-bottom:30px}.screen-mobile[_nghost-%COMP%]   .mobile-controls[_ngcontent-%COMP%]{display:block}.screen-mobile[_nghost-%COMP%]   .mobile-control[_ngcontent-%COMP%]{width:100%;background-color:#fff;font-size:17px;border:none;padding:8px 0}.screen-mobile[_nghost-%COMP%]   .mobile-control--black[_ngcontent-%COMP%]{background-color:#000;border-radius:5px;color:#fff;margin-top:15px;margin-bottom:10px}"], changeDetection: 0 });
const ɵPebShopCategoryFiltersElement_BaseFactory = ɵɵgetInheritedFactory(PebShopCategoryFiltersElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebShopCategoryFiltersElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-category-filters',
                templateUrl: './category-filters.element.html',
                styleUrls: ['./category-filters.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { context: [{
            type: Input
        }], hostClass: [{
            type: HostBinding,
            args: ['class']
        }] }); })();

const _c0$5 = ["productsGridRef"];
function PebShopCategoryElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Loading...");
    ɵɵelementContainerEnd();
} }
function PebShopCategoryElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Error");
    ɵɵelementContainerEnd();
} }
function PebShopCategoryElement_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Empty");
    ɵɵelementContainerEnd();
} }
const _c1$1 = function (a0, a1) { return { state: a0, data: a1 }; };
function PebShopCategoryElement_ng_container_4_peb_element_shop_category_product_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "peb-element-shop-category-product", 2);
} if (rf & 2) {
    const product_r516 = ctx.$implicit;
    const ctx_r515 = ɵɵnextContext(2);
    ɵɵproperty("context", ɵɵpureFunction2(3, _c1$1, ctx_r515.PebElementContextState.Ready, product_r516))("options", ctx_r515.options)("styles", ctx_r515.styles);
} }
function PebShopCategoryElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "peb-element-shop-category-header", 2);
    ɵɵelement(2, "peb-element-shop-category-navbar", 2);
    ɵɵelementStart(3, "div", 3);
    ɵɵelement(4, "peb-element-shop-category-filters", 2);
    ɵɵelementStart(5, "div", 4, 5);
    ɵɵtemplate(7, PebShopCategoryElement_ng_container_4_peb_element_shop_category_product_7_Template, 1, 6, "peb-element-shop-category-product", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r513 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("context", ctx_r513.context)("options", ctx_r513.options)("styles", ctx_r513.styles);
    ɵɵadvance(1);
    ɵɵproperty("context", ctx_r513.context)("options", ctx_r513.options)("styles", ctx_r513.styles);
    ɵɵadvance(2);
    ɵɵproperty("context", ctx_r513.context)("options", ctx_r513.options)("styles", ctx_r513.styles);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r513.context.data.products);
} }
const HEADER_STYLES = {
    height: {
        desktop: 225,
        tablet: 225,
        mobile: 225,
    },
    fontSize: {
        desktop: 40,
        tablet: 40,
        mobile: 40,
    },
};
const NAVBAR_STYLES = {
    height: {
        desktop: 60,
        tablet: 60,
        mobile: 60,
    },
    fontSize: {
        desktop: 12,
        tablet: 12,
        mobile: 12,
    },
};
const FILTERS_STYLES = {
    fontSize: {
        desktop: 14,
        tablet: 14,
        mobile: 14,
    },
};
const PRODUCT_STYLES = {
    height: {
        desktop: 500,
        tablet: 500,
        mobile: 500,
    },
    fontSize: {
        desktop: 17,
        tablet: 16,
        mobile: 14,
    },
};
const COLUMNS = 3;
class PebShopCategoryElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    onToggleShownFilters() {
        this.interact({ type: 'category.toggle-filters' });
    }
    onToggleFilter(value) {
        this.interact({ type: 'category.toggle-filter', value });
    }
    onProductClick() {
    }
    get elements() {
        var _a, _b, _c, _d, _e;
        return {
            host: this.nativeElement,
            header: (_a = this.headerRef) === null || _a === void 0 ? void 0 : _a.nativeElement,
            navbar: (_b = this.navbarRef) === null || _b === void 0 ? void 0 : _b.nativeElement,
            filters: (_c = this.filtersRef) === null || _c === void 0 ? void 0 : _c.nativeElement,
            productsGrid: (_d = this.productsGridRef) === null || _d === void 0 ? void 0 : _d.nativeElement,
            products: ((_e = this.productElements) === null || _e === void 0 ? void 0 : _e.toArray().map(a => a.nativeElement)) || [],
        };
    }
    get mappedStyles() {
        var _a, _b, _c, _d, _e, _f;
        const { screen, scale } = this.options;
        return {
            host: {
                position: 'relative',
                width: this.styles.width
                    ? `${+this.styles.width * scale}px`
                    : `${100 * scale}%`,
                height: this.styles.height
                    ? `${+this.styles.height * scale}px`
                    : null,
                left: this.styles.left
                    ? `${+this.styles.left * scale}px`
                    : null,
                top: this.styles.top
                    ? `${+this.styles.top * scale}px`
                    : null,
                background: ((_a = this.styles) === null || _a === void 0 ? void 0 : _a.mode) === 'dark' ? '#333' : '#fff',
                color: ((_b = this.styles) === null || _b === void 0 ? void 0 : _b.mode) === 'dark' ? '#fff' : '#333',
            },
            header: {
                height: `${HEADER_STYLES.height[screen] * scale}px`,
                fontSize: `${HEADER_STYLES.fontSize[screen] * scale}px`
            },
            navbar: {
                background: ((_c = this.styles) === null || _c === void 0 ? void 0 : _c.mode) === 'dark' ? '#333' : '#fff',
                borderColor: (_d = this.styles) === null || _d === void 0 ? void 0 : _d.borderColor,
                height: `${NAVBAR_STYLES.height[screen] * scale}px`,
                fontSize: `${NAVBAR_STYLES.fontSize[screen] * scale}px`,
            },
            filters: {
                display: this.context.state === PebElementContextState.Ready && this.context.data.shownFilters ? 'block' : 'none',
                fontSize: `${FILTERS_STYLES.fontSize[screen] * scale}px`,
            },
            productsGrid: {
                gridTemplateColumns: `repeat(${((_e = this.styles) === null || _e === void 0 ? void 0 : _e.columns) || COLUMNS}, 1fr)`,
                boxShadow: `inset 1px 0 0 0 ${((_f = this.styles) === null || _f === void 0 ? void 0 : _f.borderColor) || '#d6d6d6'}`,
            },
            products: {
                height: `${PRODUCT_STYLES.height[screen] * scale}px`,
                fontSize: `${PRODUCT_STYLES.fontSize[screen] * scale}px`,
            }
        };
    }
    get hostClass() {
        var _a;
        return 'screen-' + ((_a = this.options) === null || _a === void 0 ? void 0 : _a.screen);
    }
    // TODO: clean up after fix
    ngAfterViewInit() {
        this.applyStyles();
    }
}
PebShopCategoryElement.ɵfac = function PebShopCategoryElement_Factory(t) { return ɵPebShopCategoryElement_BaseFactory(t || PebShopCategoryElement); };
PebShopCategoryElement.ɵcmp = ɵɵdefineComponent({ type: PebShopCategoryElement, selectors: [["peb-element-shop-category"]], viewQuery: function PebShopCategoryElement_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(PebShopCategoryHeaderElement, true, ElementRef);
        ɵɵviewQuery(PebShopCategoryNavbarElement, true, ElementRef);
        ɵɵviewQuery(PebShopCategoryFiltersElement, true, ElementRef);
        ɵɵviewQuery(_c0$5, true);
        ɵɵviewQuery(PebShopCategoryProductElement, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navbarRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filtersRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.productsGridRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.productElements = _t);
    } }, hostVars: 2, hostBindings: function PebShopCategoryElement_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassMap(ctx.hostClass);
    } }, inputs: { element: "element", styles: "styles", context: "context" }, features: [ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [3, "context", "options", "styles"], [1, "category-content"], [1, "category-products"], ["productsGridRef", ""], [3, "context", "options", "styles", 4, "ngFor", "ngForOf"]], template: function PebShopCategoryElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PebShopCategoryElement_ng_container_1_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(2, PebShopCategoryElement_ng_container_2_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(3, PebShopCategoryElement_ng_container_3_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(4, PebShopCategoryElement_ng_container_4_Template, 8, 10, "ng-container", 1);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.context.state);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Loading);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Error);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Empty);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
    } }, styles: ["[_nghost-%COMP%]{width:100%;background-color:#fff;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:block}.category-content[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:flex}.category-products[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr);margin-left:auto;width:100%;-webkit-transition:.2s;transition:.2s;box-shadow:inset 1px 0 0 0 #d6d6d6}"], changeDetection: 0 });
const ɵPebShopCategoryElement_BaseFactory = ɵɵgetInheritedFactory(PebShopCategoryElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebShopCategoryElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-category',
                templateUrl: './category.element.html',
                styleUrls: ['./category.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], context: [{
            type: Input
        }], headerRef: [{
            type: ViewChild,
            args: [PebShopCategoryHeaderElement, { read: ElementRef }]
        }], navbarRef: [{
            type: ViewChild,
            args: [PebShopCategoryNavbarElement, { read: ElementRef }]
        }], filtersRef: [{
            type: ViewChild,
            args: [PebShopCategoryFiltersElement, { read: ElementRef }]
        }], productsGridRef: [{
            type: ViewChild,
            args: ['productsGridRef']
        }], productElements: [{
            type: ViewChildren,
            args: [PebShopCategoryProductElement, { read: ElementRef }]
        }], hostClass: [{
            type: HostBinding,
            args: ['class']
        }] }); })();

const _c0$6 = ["imageRef"];
function PebShopProductElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Loading...");
    ɵɵelementContainerEnd();
} }
function PebShopProductElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Error");
    ɵɵelementContainerEnd();
} }
function PebShopProductElement_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Empty");
    ɵɵelementContainerEnd();
} }
function PebShopProductElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵelement(2, "div", 3, 4);
    ɵɵelementStart(4, "div", 5);
    ɵɵelementStart(5, "div", 6);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 7);
    ɵɵelementStart(8, "div", 8);
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r520 = ɵɵnextContext();
    ɵɵadvance(6);
    ɵɵtextInterpolate(ctx_r520.context == null ? null : ctx_r520.context.data.title);
    ɵɵadvance(3);
    ɵɵtextInterpolate1("$", ctx_r520.context == null ? null : ctx_r520.context.data.prices == null ? null : ctx_r520.context.data.prices.regular, "");
} }
class PebShopProductElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    get elements() {
        var _a;
        return {
            host: this.nativeElement,
            image: (_a = this.imageRef) === null || _a === void 0 ? void 0 : _a.nativeElement,
        };
    }
    get mappedStyles() {
        return {
            host: {},
            image: {
                backgroundImage: this.context.state === PebElementContextState.Ready ? `url('${this.context.data.image}')` : null,
            },
        };
    }
    ngAfterViewInit() {
        this.applyStyles();
    }
}
PebShopProductElement.ɵfac = function PebShopProductElement_Factory(t) { return ɵPebShopProductElement_BaseFactory(t || PebShopProductElement); };
PebShopProductElement.ɵcmp = ɵɵdefineComponent({ type: PebShopProductElement, selectors: [["peb-element-shop-product"]], viewQuery: function PebShopProductElement_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$6, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imageRef = _t.first);
    } }, inputs: { context: "context" }, features: [ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "product"], [1, "product__image"], ["imageRef", ""], [1, "product__content"], [1, "product__title"], [1, "product__price-container"], [1, "product__price"]], template: function PebShopProductElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PebShopProductElement_ng_container_1_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(2, PebShopProductElement_ng_container_2_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(3, PebShopProductElement_ng_container_3_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(4, PebShopProductElement_ng_container_4_Template, 10, 2, "ng-container", 1);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.context.state);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Loading);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Error);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Empty);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
    } }, directives: [NgSwitch, NgSwitchCase], styles: ["[_nghost-%COMP%]{margin:auto}.product[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;height:100%;cursor:pointer}.product__image[_ngcontent-%COMP%]{position:relative;width:calc(100% - 1.5em);min-height:calc(100% - 4.5em);background-size:100% 100%;background-repeat:no-repeat;background-position:center center;margin:0 auto}.product__content[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;flex-shrink:0;padding:10px;color:rgba(17,17,17,.6);display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:justify;justify-content:space-between;flex-wrap:wrap;height:4.5em;font-size:inherit;max-width:100%}.product__title[_ngcontent-%COMP%]{font-weight:600;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-box-flex:1;flex:1 1}.product__price[_ngcontent-%COMP%]{font-weight:300;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-box-flex:1;flex:1 1}.product__sale-price[_ngcontent-%COMP%]{position:absolute;left:0;bottom:1em;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#ce3535;background-color:#fff;font-weight:700}"], changeDetection: 0 });
const ɵPebShopProductElement_BaseFactory = ɵɵgetInheritedFactory(PebShopProductElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebShopProductElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-product',
                templateUrl: './product.element.html',
                styleUrls: ['./product.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { context: [{
            type: Input
        }], imageRef: [{
            type: ViewChild,
            args: ['imageRef']
        }] }); })();

const _c0$7 = ["productsGridRef"];
function PebShopProductsElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Loading...");
    ɵɵelementContainerEnd();
} }
function PebShopProductsElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Error");
    ɵɵelementContainerEnd();
} }
function PebShopProductsElement_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "Empty");
    ɵɵelementContainerEnd();
} }
const _c1$2 = function (a1) { return { state: "ready", data: a1 }; };
function PebShopProductsElement_ng_container_4_peb_element_shop_product_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "peb-element-shop-product", 6);
} if (rf & 2) {
    const product_r529 = ctx.$implicit;
    const ctx_r528 = ɵɵnextContext(2);
    ɵɵproperty("element", ctx_r528.element)("options", ctx_r528.options)("context", ɵɵpureFunction1(3, _c1$2, product_r529));
} }
function PebShopProductsElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3, 4);
    ɵɵtemplate(3, PebShopProductsElement_ng_container_4_peb_element_shop_product_3_Template, 1, 5, "peb-element-shop-product", 5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r525 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r525.context == null ? null : ctx_r525.context.data);
} }
function PebShopProductsElement_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 7);
} }
class PebShopProductsElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    get elements() {
        var _a, _b;
        return {
            host: this.nativeElement,
            productsGrid: (_a = this.productsGridRef) === null || _a === void 0 ? void 0 : _a.nativeElement,
            products: ((_b = this.productElements) === null || _b === void 0 ? void 0 : _b.toArray().map(a => a.nativeElement)) || [],
        };
    }
    get mappedStyles() {
        const { scale } = this.options;
        return {
            host: {
                position: 'relative',
                width: this.context.state === PebElementContextState.Ready ?
                    `${+this.styles.itemWidth * Math.ceil(this.context.data.length / +this.styles.rows) * scale}px` :
                    null,
                height: this.context.state === PebElementContextState.Ready ?
                    `${+this.styles.itemHeight * Math.ceil(this.context.data.length / +this.styles.columns) * scale}px` :
                    null,
                left: this.styles.left
                    ? (this.styles.left * scale) + 'px'
                    : null,
                top: this.styles.to
                    ? (this.styles.top * scale) + 'px'
                    : null,
            },
            products: {
                width: `${+this.styles.itemWidth * scale}px`,
                height: `${+this.styles.itemHeight * scale}px`,
            },
            productsGrid: {
                gridTemplateColumns: `repeat(${this.styles.columns}, minmax(${+this.styles.itemWidth * scale}px, 1fr))`
            },
        };
    }
    addToCart() {
        this.interact({
            type: 'product.add-to-cart',
            product: this.context.data,
        });
    }
    // @HostListener('click')
    // openProductPage() {
    //   if ((this.element as any).variant && this.context.state === 'ready') {
    //     this.interact({
    //       type: 'product.navigate-to-page',
    //       product: (this.context as any).data
    //     });
    //   }
    // }
    get hostClass() {
        var _a;
        return 'state-' + ((_a = this.context) === null || _a === void 0 ? void 0 : _a.state);
    }
    // TODO: clean up after fix
    ngAfterViewInit() {
        this.applyStyles();
    }
}
PebShopProductsElement.ɵfac = function PebShopProductsElement_Factory(t) { return ɵPebShopProductsElement_BaseFactory(t || PebShopProductsElement); };
PebShopProductsElement.ɵcmp = ɵɵdefineComponent({ type: PebShopProductsElement, selectors: [["peb-element-shop-products"]], viewQuery: function PebShopProductsElement_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$7, true);
        ɵɵviewQuery(PebShopProductElement, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.productsGridRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.productElements = _t);
    } }, hostVars: 2, hostBindings: function PebShopProductsElement_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassMap(ctx.hostClass);
    } }, inputs: { element: "element", styles: "styles", context: "context" }, features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "selected", 4, "ngIf"], [1, "products"], ["productsGridRef", ""], [3, "element", "options", "context", 4, "ngFor", "ngForOf"], [3, "element", "options", "context"], [1, "selected"]], template: function PebShopProductsElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, PebShopProductsElement_ng_container_1_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(2, PebShopProductsElement_ng_container_2_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(3, PebShopProductsElement_ng_container_3_Template, 2, 0, "ng-container", 1);
        ɵɵtemplate(4, PebShopProductsElement_ng_container_4_Template, 4, 1, "ng-container", 1);
        ɵɵelementContainerEnd();
        ɵɵtemplate(5, PebShopProductsElement_div_5_Template, 1, 0, "div", 2);
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.context.state);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Loading);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Error);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Empty);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.selected);
    } }, directives: [NgSwitch, NgSwitchCase, NgIf, NgForOf, PebShopProductElement], styles: ["[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:16px;position:relative}.state-loading[_nghost-%COMP%]{-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.products[_ngcontent-%COMP%]{display:-ms-grid;display:grid;width:100%;height:100%}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}.product[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;height:100%;cursor:pointer}.product__image[_ngcontent-%COMP%]{position:relative;width:calc(100% - 1.5em);min-height:calc(100% - 4.5em);background-size:100% 100%;background-repeat:no-repeat;background-position:center center;margin:0 auto}.product__content[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;flex-shrink:0;padding:10px;color:rgba(17,17,17,.6);display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:justify;justify-content:space-between;flex-wrap:wrap;height:4.5em;font-size:inherit;max-width:100%}.product__title[_ngcontent-%COMP%]{font-weight:600;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-box-flex:1;flex:1 1}.product__price[_ngcontent-%COMP%]{font-weight:300;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-box-flex:1;flex:1 1}.product__sale-price[_ngcontent-%COMP%]{position:absolute;left:0;bottom:1em;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#ce3535;background-color:#fff;font-weight:700}"] });
const ɵPebShopProductsElement_BaseFactory = ɵɵgetInheritedFactory(PebShopProductsElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebShopProductsElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-products',
                templateUrl: './products.element.html',
                styleUrls: ['./products.element.scss']
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], context: [{
            type: Input
        }], productsGridRef: [{
            type: ViewChild,
            args: ['productsGridRef']
        }], productElements: [{
            type: ViewChildren,
            args: [PebShopProductElement, { read: ElementRef }]
        }], hostClass: [{
            type: HostBinding,
            args: ['class']
        }] }); })();

class PebProductIcon {
}
PebProductIcon.ɵfac = function PebProductIcon_Factory(t) { return new (t || PebProductIcon)(); };
PebProductIcon.ɵcmp = ɵɵdefineComponent({ type: PebProductIcon, selectors: [["peb-icon-product"]], decls: 4, vars: 0, consts: [["width", "68px", "height", "64px", "viewBox", "0 0 68 64", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["fill", "#E0E0E0", "fill-rule", "nonzero"], ["d", "M33.1126056,0.081686 C33.4113758,-0.027229 33.7397869,-0.027229 34.0386884,0.081686 L34.0386884,0.081686 L66.276624,11.841474 C66.80216,12.033242 67.151163,12.528284 67.151163,13.082192 L67.151163,13.082192 L67.151163,50.917808 C67.151163,51.471586 66.80216,51.966758 66.276624,52.158526 L66.276624,52.158526 L34.0386884,63.918184 C33.8896967,63.971604 33.7329669,63.9999998 33.5754502,63.9999998 C33.4195074,63.9999998 33.2627776,63.97316 33.1124744,63.918184 L33.1124744,63.918184 L0.874539,52.158526 C0.3490024,51.966758 0,51.471586 0,50.917808 L0,50.917808 L0,13.082192 C0,12.649776 0.2139132,12.244458 0.5728834,11.997196 C0.6673147,11.932107 0.7689595,11.88115 0.8744078,11.842511 L0.8744078,11.842511 L0.8746701,11.841474 L33.1126056,0.081686 Z M64.475871,14.979639 L34.9132273,25.763605 L34.9132273,60.780019 L64.475871,49.996183 L64.475871,14.979639 Z M2.6752918,14.979639 L2.6752918,49.996183 L32.2379355,60.780019 L32.2379355,25.763605 L25.8171302,23.421424 L25.8171302,38.468746 C25.8171302,38.901162 25.603217,39.30635 25.2442468,39.553612 C25.0166935,39.710372 24.7492693,39.79115 24.4792219,39.79115 C24.3232791,39.79115 24.1666805,39.76431 24.0162462,39.709464 L24.0162462,39.709464 L9.5694341,34.439426 C9.0438976,34.247659 8.6948951,33.752487 8.6948951,33.198708 L8.6948951,33.198708 L8.6948951,17.175564 L2.6752918,14.979639 Z M43.980995,53.230297 C44.220762,53.872722 43.92405,54.58113 43.314993,54.875503 L43.189083,54.928715 L42.599937,55.143562 C42.447142,55.199316 42.290674,55.225767 42.136961,55.225767 C41.592669,55.225767 41.081167,54.894874 40.8818116,54.360674 C40.6420445,53.718248 40.9387561,53.00984 41.547813,52.715467 L41.673723,52.662256 L42.26287,52.447279 C42.956022,52.194442 43.725244,52.544913 43.980995,53.230297 Z M61.717821,46.760125 C61.957588,47.40255 61.660992,48.110958 61.05184,48.405438 L60.925909,48.458673 L47.014077,53.533442 C46.861282,53.589066 46.704814,53.615517 46.551101,53.615517 C46.006809,53.615517 45.495437,53.284884 45.295951,52.750554 C45.056184,52.108128 45.352781,51.399607 45.961932,51.105219 L46.087863,51.052006 L59.999695,45.977236 C60.692847,45.724399 61.461938,46.074741 61.717821,46.760125 Z M61.717821,41.371318 C61.957588,42.013744 61.660992,42.722266 61.05184,43.016653 L60.925909,43.069867 L49.931873,47.080256 C49.779079,47.13588 49.622611,47.16233 49.468897,47.16233 C48.924606,47.16233 48.413234,46.831567 48.213748,46.297367 C47.973981,45.654942 48.270578,44.94642 48.879728,44.652033 L49.00566,44.598819 L59.999695,40.58843 C60.692847,40.335852 61.461938,40.686064 61.717821,41.371318 Z M61.717821,36.038525 C61.957588,36.680951 61.660992,37.389359 61.05184,37.683732 L60.925909,37.736944 L49.931873,41.747462 C49.779079,41.803087 49.622611,41.829537 49.468897,41.829537 C48.924606,41.829537 48.413234,41.498774 48.213748,40.964574 C47.973981,40.322027 48.270578,39.613612 48.879728,39.319238 L49.00566,39.266026 L59.999695,35.255637 C60.692847,35.003059 61.461938,35.353142 61.717821,36.038525 Z M11.370187,18.151386 L11.370187,32.276954 L23.1417072,36.57104 L23.1417072,22.445472 L11.370187,18.151386 Z M33.5755814,2.732199 L5.2019855,13.082192 L10.017983,14.838958 L24.0162462,9.732552 C24.3152786,9.623637 24.6436899,9.623637 24.94246,9.732552 L24.94246,9.732552 L39.3894032,15.002459 C39.9149397,15.194227 40.2639421,15.689269 40.2639421,16.243178 C40.2639421,16.796956 39.9149397,17.292128 39.3894032,17.483896 L39.3894032,17.483896 L28.3292657,21.518402 L33.5755814,23.432315 L61.949177,13.082322 L33.5755814,2.732199 Z M24.4793531,12.382935 L13.8967495,16.243307 L24.4793531,20.10355 L35.0619566,16.243307 L24.4793531,12.382935 Z"]], template: function PebProductIcon_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelementStart(1, "g", 1);
        ɵɵelementStart(2, "g", 2);
        ɵɵelement(3, "path", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%] {\n      display: flex;\n      margin: auto;\n    }"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebProductIcon, [{
        type: Component,
        args: [{
                selector: 'peb-icon-product',
                template: `
    <svg width="68px" height="64px" viewBox="0 0 68 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="#E0E0E0" fill-rule="nonzero">
          <path
            d="M33.1126056,0.081686 C33.4113758,-0.027229 33.7397869,-0.027229 34.0386884,0.081686 L34.0386884,0.081686 L66.276624,11.841474 C66.80216,12.033242 67.151163,12.528284 67.151163,13.082192 L67.151163,13.082192 L67.151163,50.917808 C67.151163,51.471586 66.80216,51.966758 66.276624,52.158526 L66.276624,52.158526 L34.0386884,63.918184 C33.8896967,63.971604 33.7329669,63.9999998 33.5754502,63.9999998 C33.4195074,63.9999998 33.2627776,63.97316 33.1124744,63.918184 L33.1124744,63.918184 L0.874539,52.158526 C0.3490024,51.966758 0,51.471586 0,50.917808 L0,50.917808 L0,13.082192 C0,12.649776 0.2139132,12.244458 0.5728834,11.997196 C0.6673147,11.932107 0.7689595,11.88115 0.8744078,11.842511 L0.8744078,11.842511 L0.8746701,11.841474 L33.1126056,0.081686 Z M64.475871,14.979639 L34.9132273,25.763605 L34.9132273,60.780019 L64.475871,49.996183 L64.475871,14.979639 Z M2.6752918,14.979639 L2.6752918,49.996183 L32.2379355,60.780019 L32.2379355,25.763605 L25.8171302,23.421424 L25.8171302,38.468746 C25.8171302,38.901162 25.603217,39.30635 25.2442468,39.553612 C25.0166935,39.710372 24.7492693,39.79115 24.4792219,39.79115 C24.3232791,39.79115 24.1666805,39.76431 24.0162462,39.709464 L24.0162462,39.709464 L9.5694341,34.439426 C9.0438976,34.247659 8.6948951,33.752487 8.6948951,33.198708 L8.6948951,33.198708 L8.6948951,17.175564 L2.6752918,14.979639 Z M43.980995,53.230297 C44.220762,53.872722 43.92405,54.58113 43.314993,54.875503 L43.189083,54.928715 L42.599937,55.143562 C42.447142,55.199316 42.290674,55.225767 42.136961,55.225767 C41.592669,55.225767 41.081167,54.894874 40.8818116,54.360674 C40.6420445,53.718248 40.9387561,53.00984 41.547813,52.715467 L41.673723,52.662256 L42.26287,52.447279 C42.956022,52.194442 43.725244,52.544913 43.980995,53.230297 Z M61.717821,46.760125 C61.957588,47.40255 61.660992,48.110958 61.05184,48.405438 L60.925909,48.458673 L47.014077,53.533442 C46.861282,53.589066 46.704814,53.615517 46.551101,53.615517 C46.006809,53.615517 45.495437,53.284884 45.295951,52.750554 C45.056184,52.108128 45.352781,51.399607 45.961932,51.105219 L46.087863,51.052006 L59.999695,45.977236 C60.692847,45.724399 61.461938,46.074741 61.717821,46.760125 Z M61.717821,41.371318 C61.957588,42.013744 61.660992,42.722266 61.05184,43.016653 L60.925909,43.069867 L49.931873,47.080256 C49.779079,47.13588 49.622611,47.16233 49.468897,47.16233 C48.924606,47.16233 48.413234,46.831567 48.213748,46.297367 C47.973981,45.654942 48.270578,44.94642 48.879728,44.652033 L49.00566,44.598819 L59.999695,40.58843 C60.692847,40.335852 61.461938,40.686064 61.717821,41.371318 Z M61.717821,36.038525 C61.957588,36.680951 61.660992,37.389359 61.05184,37.683732 L60.925909,37.736944 L49.931873,41.747462 C49.779079,41.803087 49.622611,41.829537 49.468897,41.829537 C48.924606,41.829537 48.413234,41.498774 48.213748,40.964574 C47.973981,40.322027 48.270578,39.613612 48.879728,39.319238 L49.00566,39.266026 L59.999695,35.255637 C60.692847,35.003059 61.461938,35.353142 61.717821,36.038525 Z M11.370187,18.151386 L11.370187,32.276954 L23.1417072,36.57104 L23.1417072,22.445472 L11.370187,18.151386 Z M33.5755814,2.732199 L5.2019855,13.082192 L10.017983,14.838958 L24.0162462,9.732552 C24.3152786,9.623637 24.6436899,9.623637 24.94246,9.732552 L24.94246,9.732552 L39.3894032,15.002459 C39.9149397,15.194227 40.2639421,15.689269 40.2639421,16.243178 C40.2639421,16.796956 39.9149397,17.292128 39.3894032,17.483896 L39.3894032,17.483896 L28.3292657,21.518402 L33.5755814,23.432315 L61.949177,13.082322 L33.5755814,2.732199 Z M24.4793531,12.382935 L13.8967495,16.243307 L24.4793531,20.10355 L35.0619566,16.243307 L24.4793531,12.382935 Z">
          </path>
        </g>
      </g>
    </svg>
  `,
                styles: [`
    :host {
      display: flex;
      margin: auto;
    }
  `],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();

class PebButtonElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const styles = this.styles;
        const { scale } = this.options;
        return {
            host: {
                width: styles.width ? +styles.width * scale + 'px' : null,
                position: styles.position || 'relative',
                height: styles.height ? +styles.height * scale + 'px' : null,
                backgroundColor: styles.backgroundColor || null,
                textAlign: styles.textAlign || 'center',
                padding: styles.padding ? +styles.padding * scale + 'px' : null,
                borderRadius: styles.borderRadius ? +styles.borderRadius * scale + 'px' : null,
                paddingRight: styles.paddingRight ? +styles.paddingRight * scale + 'px' : null,
                paddingLeft: styles.paddingLeft ? +styles.paddingLeft * scale + 'px' : null,
                color: styles.color || '#000'
            },
        };
    }
    onClick() {
        this.interact({ type: 'button.click' });
    }
}
PebButtonElement.ɵfac = function PebButtonElement_Factory(t) { return ɵPebButtonElement_BaseFactory(t || PebButtonElement); };
PebButtonElement.ɵcmp = ɵɵdefineComponent({ type: PebButtonElement, selectors: [["peb-element-button"]], hostBindings: function PebButtonElement_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function PebButtonElement_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { element: "element", styles: "styles", options: "options" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 1, template: function PebButtonElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span");
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate(ctx.element.data.name);
    } }, styles: ["[_nghost-%COMP%]{display:inline-block}.wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%}img[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{margin:0}img[_ngcontent-%COMP%]{-webkit-margin-end:.5em;margin-inline-end:.5em}h1[_ngcontent-%COMP%]{font-size:1em;font-weight:inherit;display:inline-block}"], changeDetection: 0 });
const ɵPebButtonElement_BaseFactory = ɵɵgetInheritedFactory(PebButtonElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebButtonElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-button',
                templateUrl: './button.element.html',
                styleUrls: ['./button.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();

class PebImageElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const { scale } = this.options;
        // TODO: Filter out nulls
        return {
            host: {
                position: 'relative',
                color: this.styles.color,
                width: this.styles.width
                    ? (this.styles.width * scale) + 'px'
                    : '100%',
                height: this.styles.height
                    ? (this.styles.height * scale) + 'px'
                    : '100%',
                left: this.styles.left
                    ? (this.styles.left * scale) + 'px'
                    : null,
                right: this.styles.right
                    ? (this.styles.right * scale) + 'px'
                    : null,
                top: this.styles.top
                    ? (this.styles.top * scale) + 'px'
                    : null,
                bottom: this.styles.bottom
                    ? (this.styles.bottom * scale) + 'px'
                    : null,
                border: this.styles.border
                    ? this.styles.border
                    : null,
            }
        };
    }
}
PebImageElement.ɵfac = function PebImageElement_Factory(t) { return ɵPebImageElement_BaseFactory(t || PebImageElement); };
PebImageElement.ɵcmp = ɵɵdefineComponent({ type: PebImageElement, selectors: [["peb-element-image"]], inputs: { element: "element", styles: "styles", options: "options" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "src"]], template: function PebImageElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "img", 0);
    } if (rf & 2) {
        ɵɵproperty("src", ctx.element.data.src, ɵɵsanitizeUrl);
    } }, styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}"], changeDetection: 0 });
const ɵPebImageElement_BaseFactory = ɵɵgetInheritedFactory(PebImageElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebImageElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-image',
                templateUrl: './image.element.html',
                styleUrls: ['./image.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();

function PebVideoElement_source_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "source", 2);
} if (rf & 2) {
    const source_r531 = ctx.$implicit;
    ɵɵproperty("src", source_r531, ɵɵsanitizeUrl);
} }
class PebVideoElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.sources = [];
    }
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const { scale } = this.options;
        return {
            host: {
                position: 'relative',
                color: this.styles.color,
                width: this.styles.width
                    ? (this.styles.width * scale) + 'px'
                    : '100%',
                height: this.styles.height
                    ? (this.styles.height * scale) + 'px'
                    : '100%',
                left: this.styles.left
                    ? (this.styles.left * scale) + 'px'
                    : null,
                right: this.styles.right
                    ? (this.styles.right * scale) + 'px'
                    : null,
                top: this.styles.top
                    ? (this.styles.top * scale) + 'px'
                    : null,
                bottom: this.styles.bottom
                    ? (this.styles.bottom * scale) + 'px'
                    : null,
                border: this.styles.border
                    ? this.styles.border
                    : null,
            }
        };
    }
    ngOnInit() {
        this.videoSettings = this.element.data.settings;
        this.sources = this.element.data.sources;
    }
}
PebVideoElement.ɵfac = function PebVideoElement_Factory(t) { return ɵPebVideoElement_BaseFactory(t || PebVideoElement); };
PebVideoElement.ɵcmp = ɵɵdefineComponent({ type: PebVideoElement, selectors: [["peb-element-video"]], inputs: { element: "element", styles: "styles", options: "options" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [[3, "controls", "autoplay", "loop"], [3, "src", 4, "ngFor", "ngForOf"], [3, "src"]], template: function PebVideoElement_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "video", 0);
        ɵɵtemplate(1, PebVideoElement_source_1_Template, 1, 1, "source", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("controls", ctx.videoSettings.controls)("autoplay", ctx.videoSettings.autoplay)("loop", ctx.videoSettings.loop);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.sources);
    } }, directives: [NgForOf], styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:fill;object-fit:fill}"], changeDetection: 0 });
const ɵPebVideoElement_BaseFactory = ɵɵgetInheritedFactory(PebVideoElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebVideoElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-video',
                templateUrl: './video.element.html',
                styleUrls: ['./video.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();

// import { LineStyles } from './line.constants';
class PebLineElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        // const styles = this.styles as LineStyles;
        // const { scale } = this.options;
        return {
            host: {
                position: 'relative',
                width: this.styles.width ? `${this.styles.width}px` : '60%',
                height: this.styles.height ? `${+this.styles.height}px`
                    : '0.5px',
                backgroundColor: this.styles.backgroundColor ? this.styles.backgroundColor : 'black',
                color: this.styles.color ? this.styles.color : 'white',
                fontSize: this.styles.fontSize + 'px',
                margin: this.styles.margin ? this.styles.margin : '5rem',
                boxShadow: this.styles.boxShadow ? this.styles.boxShadow : null,
                opacity: this.styles.opacity ? this.styles.opacity : null,
                transform: this.styles.transform,
                top: this.styles.top ? this.styles.top : '-25rem',
                float: this.styles.float
            },
        };
    }
    ngOnInit() {
        console.log('I was called');
    }
    ngAfterViewInit() {
        this.applyStyles();
        this.renderChildren();
    }
}
PebLineElement.ɵfac = function PebLineElement_Factory(t) { return ɵPebLineElement_BaseFactory(t || PebLineElement); };
PebLineElement.ɵcmp = ɵɵdefineComponent({ type: PebLineElement, selectors: [["peb-element-line"]], inputs: { element: "element", styles: "styles", options: "options" }, features: [ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function PebLineElement_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", ".line[_ngcontent-%COMP%]{position:relative;top:200px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin:auto}"], changeDetection: 0 });
const ɵPebLineElement_BaseFactory = ɵɵgetInheritedFactory(PebLineElement);
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebLineElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-line',
                templateUrl: './line.element.html',
                styleUrls: ['../../_abstract/abstract.element.scss',
                    './line.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();

const AVAILABLE_ELEMENTS_SET = [
    // General
    PebDocumentElement,
    PebSectionElement,
    PebBlockElement,
    PebTextElement,
    PebGridElement,
    PebButtonElement,
    PebImageElement,
    PebVideoElement,
    PebLineElement,
    // Business
    PebBusinessLogoElement,
    PebNavbarElement,
    // Shop
    PebShopCartElement,
    PebShopCategoryElement,
    PebShopCategoryHeaderElement,
    PebShopCategoryNavbarElement,
    PebShopCategoryFiltersElement,
    PebShopCategoryProductElement,
    PebShopProductElement,
    PebShopProductsElement,
];
const ICONS = [
    PebProductIcon,
    PebPlusIcon,
    PebFiltersIcon,
];
// TODO: Add check for element selectors to be unique
// commented because doesn't work with --prod key
// const AVAILABLE_ELEMENTS_MAP = fromPairs(
//   AVAILABLE_ELEMENTS_SET.map(
//     cmp => [
//       getIvyComponentSelector(cmp).replace('peb-element-', '') as PebElementType,
//       cmp,
//     ]
//   )
// );
const AVAILABLE_ELEMENTS_MAP = {
    document: PebDocumentElement,
    section: PebSectionElement,
    block: PebBlockElement,
    text: PebTextElement,
    line: PebLineElement
    // TODO: add remaining elements
};
class PebRendererModule {
    static forRoot(config) {
        return {
            ngModule: PebRendererModule,
            providers: [
                {
                    provide: 'RENDERER_CONFIG',
                    useValue: config,
                },
            ],
        };
    }
}
PebRendererModule.ɵmod = ɵɵdefineNgModule({ type: PebRendererModule });
PebRendererModule.ɵinj = ɵɵdefineInjector({ factory: function PebRendererModule_Factory(t) { return new (t || PebRendererModule)(); }, providers: [
        {
            provide: ElementComponentsCollection,
            useValue: AVAILABLE_ELEMENTS_MAP,
        },
        {
            provide: 'RENDERER_SETTINGS',
            useValue: {
                dimensions: {
                    desktop: 1280,
                    tablet: 768,
                    mobile: 360,
                }
            }
        }
    ], imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PebRendererModule, { declarations: [PebRendererComponent,
        PebRendererChildrenSlotDirective,
        PebProductIcon,
        PebPlusIcon,
        PebFiltersIcon,
        // General
        PebDocumentElement,
        PebSectionElement,
        PebBlockElement,
        PebTextElement,
        PebGridElement,
        PebButtonElement,
        PebImageElement,
        PebVideoElement,
        PebLineElement,
        // Business
        PebBusinessLogoElement,
        PebNavbarElement,
        // Shop
        PebShopCartElement,
        PebShopCategoryElement,
        PebShopCategoryHeaderElement,
        PebShopCategoryNavbarElement,
        PebShopCategoryFiltersElement,
        PebShopCategoryProductElement,
        PebShopProductElement,
        PebShopProductsElement], imports: [CommonModule], exports: [PebRendererComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PebRendererModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    PebRendererComponent,
                    PebRendererChildrenSlotDirective,
                    ...ICONS,
                    ...AVAILABLE_ELEMENTS_SET,
                ],
                providers: [
                    {
                        provide: ElementComponentsCollection,
                        useValue: AVAILABLE_ELEMENTS_MAP,
                    },
                    {
                        provide: 'RENDERER_SETTINGS',
                        useValue: {
                            dimensions: {
                                desktop: 1280,
                                tablet: 768,
                                mobile: 360,
                            }
                        }
                    }
                ],
                exports: [
                    PebRendererComponent
                ],
            }]
    }], null, null); })();
ɵɵsetComponentScope(PebShopCategoryElement, [PebRendererComponent,
    PebRendererChildrenSlotDirective,
    PebProductIcon,
    PebPlusIcon,
    PebFiltersIcon,
    // General
    PebDocumentElement,
    PebSectionElement,
    PebBlockElement,
    PebTextElement,
    PebGridElement,
    PebButtonElement,
    PebImageElement,
    PebVideoElement,
    PebLineElement,
    // Business
    PebBusinessLogoElement,
    PebNavbarElement,
    // Shop
    PebShopCartElement,
    PebShopCategoryElement,
    PebShopCategoryHeaderElement,
    PebShopCategoryNavbarElement,
    PebShopCategoryFiltersElement,
    PebShopCategoryProductElement,
    PebShopProductElement,
    PebShopProductsElement, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

/*
 * Public API Surface of renderer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AVAILABLE_ELEMENTS_MAP, PebRendererComponent, PebRendererModule };
//# sourceMappingURL=pe-builder-renderer.js.map
