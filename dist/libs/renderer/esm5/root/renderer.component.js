import { __assign, __extends, __read, __spread } from "tslib";
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
var log = pebCreateLogger('renderer:root');
var PebRendererComponent = /** @class */ (function (_super) {
    __extends(PebRendererComponent, _super);
    function PebRendererComponent(elementRef, injector, cfr, elementsCollection) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.injector = injector;
        _this.cfr = cfr;
        _this.elementsCollection = elementsCollection;
        _this.options = {
            screen: PebScreen.Desktop,
            scale: 1,
            locale: 'en',
        };
        _this.modifiedElement = new BehaviorSubject(null);
        _this.rendered = new EventEmitter();
        _this.interacted = new EventEmitter();
        _this.idsToRender = [];
        _this.registrySlot = new Map();
        _this.registry = new Map();
        _this.registryAbstract = new Map();
        _this.treeVariablesChanges$ = new BehaviorSubject({ previous: {}, current: {} });
        _this.makerId$ = new BehaviorSubject(null);
        _this.screenThresholds = {
            desktop: 1280,
            tablet: 768,
            mobile: 360,
        };
        _this.renderElement = function (elementDef, slotRef, parentCmp) {
            var _a;
            if (_this.registryAbstract.has(elementDef.id)) {
                return;
            }
            _this.idsToRender.push(elementDef.id);
            var elementComponent = _this.elementsCollection[elementDef.type];
            if (!elementComponent) {
                throw new Error("\n        \"" + elementDef.type + "\" element component was not found,\n        make sure you add it to AVAILABLE_ELEMENTS_MAP in renderer.module.ts\n      ");
            }
            // console.log(111, elementDef.type, this.elementsCollection);
            var cmpFactory = _this.cfr.resolveComponentFactory(elementComponent);
            var cmpInjector = Injector.create({
                providers: [
                    {
                        provide: 'STYLESHEET',
                        useValue: _this.stylesheet,
                    },
                    {
                        provide: 'PARENT_ELEMENT',
                        useValue: parentCmp,
                    },
                    {
                        provide: RenderFunction,
                        useValue: _this.renderElement,
                    },
                    {
                        provide: RenderChildsFunction,
                        useValue: _this.renderElementChilds,
                    },
                    {
                        provide: RendererInteractionEmitter,
                        useValue: _this.interacted,
                    }
                ],
                parent: _this.injector,
            });
            var cmpRef = cmpFactory.create(cmpInjector);
            cmpRef.instance.element = elementDef;
            cmpRef.instance.styles = _this.stylesheet[elementDef.id] || {};
            cmpRef.instance.context = cmpFactory.componentType.contextFetcher
                ? cmpFactory.componentType.contextFetcher(_this.context)
                : ((_a = _this.context) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(elementDef.id)) ? _this.context[elementDef.id] : null;
            cmpRef.instance.options = _this.options;
            cmpRef.instance.applyStyles();
            cmpRef.changeDetectorRef.detectChanges();
            _this.registry.set(elementDef.id, cmpRef.instance);
            _this.registryAbstract.set(elementDef.id, cmpRef);
            _this.registrySlot.set(elementDef.id, slotRef);
            if (slotRef) {
                slotRef.insert(cmpRef.hostView);
            }
            _this.idsToRender = _this.idsToRender.filter(function (id) { return id !== elementDef.id; });
            if (_this.idsToRender.length === 0) {
                _this.onRenderingComplete();
            }
        };
        return _this;
    }
    Object.defineProperty(PebRendererComponent.prototype, "setOptionsScale", {
        set: function (scale) {
            this.options = __assign(__assign({}, this.options), { scale: scale });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebRendererComponent.prototype, "setOptionsScreen", {
        set: function (screen) {
            this.options = __assign(__assign({}, this.options), { screen: screen });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebRendererComponent.prototype, "setOptionsLocal", {
        set: function (locale) {
            this.options = __assign(__assign({}, this.options), { locale: locale });
        },
        enumerable: true,
        configurable: true
    });
    PebRendererComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.treeVariablesChanges$
            .pipe(debounceTime(100), tap(function (variables) { return _this.getDifferenceVariables(variables); }), takeUntil(this.destroyed$)).subscribe();
        this.modifiedElement.pipe(tap(function (modified) {
            var _a, _b;
            var selectedMaker = _this.makerId$.getValue();
            var currentElement = _this.treeVariablesChanges$.getValue().current;
            var cmpFactory;
            if (selectedMaker) { // todo: fix
                var makerElement = currentElement[selectedMaker];
                var makerType = makerElement.type;
                var elementComponent = _this.elementsCollection[makerType];
                cmpFactory = _this.cfr.resolveComponentFactory(elementComponent);
                var cmpInjector = Injector.create({
                    providers: [
                        {
                            provide: 'STYLESHEET',
                            useValue: _this.stylesheet,
                        },
                        {
                            provide: 'PARENT_ELEMENT',
                            useValue: null,
                        },
                        {
                            provide: RenderFunction,
                            useValue: _this.renderElement,
                        },
                        {
                            provide: RenderChildsFunction,
                            useValue: _this.renderElementChilds,
                        },
                        {
                            provide: RendererInteractionEmitter,
                            useValue: _this.interacted,
                        }
                    ],
                    parent: _this.injector,
                });
                var cmpRef = cmpFactory.create(cmpInjector);
                cmpRef.instance.element = makerElement;
                cmpRef.instance.styles = _this.stylesheet[makerElement.id] || {};
                cmpRef.instance.context = cmpFactory.componentType.contextFetcher
                    ? cmpFactory.componentType.contextFetcher(_this.context)
                    : ((_a = _this.context) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(makerElement.id)) ? _this.context[makerElement.id] : null;
                cmpRef.instance.options = _this.options;
                cmpRef.instance.applyStyles();
                _this.createSlot(cmpRef, makerElement);
            }
            if (!modified || selectedMaker === modified.id) {
                return;
            }
            var element = currentElement[modified.id];
            modified.cmpRef.instance.element = element;
            modified.cmpRef.instance.styles = _this.stylesheet[element.id] || {};
            modified.cmpRef.instance.context = ((_b = _this.context) === null || _b === void 0 ? void 0 : _b.hasOwnProperty(element.id)) ? _this.context[element.id] : null;
            modified.cmpRef.instance.options = _this.options;
            _this.createSlot(modified.cmpRef, element, true);
        }), takeUntil(this.destroyed$)).subscribe();
    };
    PebRendererComponent.prototype.ngOnChanges = function (changes) {
        this.checkTreeVariables();
    };
    PebRendererComponent.prototype.ngAfterViewInit = function () {
        this.checkTreeVariables();
    };
    Object.defineProperty(PebRendererComponent.prototype, "nativeElement", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    PebRendererComponent.prototype.createSlot = function (cmpRef, element, isMaker) {
        if (isMaker === void 0) { isMaker = false; }
        cmpRef.changeDetectorRef.detectChanges();
        var slotRef = this.registrySlot.get(element.id);
        slotRef.clear();
        this.registrySlot.set(element.id, slotRef);
        slotRef.insert(cmpRef.hostView);
        if (isMaker) {
            this.makerId$.next(element.id);
            return;
        }
        this.makerId$.next(null);
    };
    PebRendererComponent.prototype.getDifferenceVariables = function (variables) {
        var currentVariables = variables.current, previousVariables = variables.previous;
        var keysMergeVariables = union(__spread((keys(currentVariables)), (keys(previousVariables))));
        var differenceVariables = {};
        forEach(keysMergeVariables, function (key) {
            if (previousVariables[key] &&
                currentVariables[key] &&
                currentVariables[key].hashParent !== previousVariables[key].hashParent) {
                return differenceVariables[key] = __assign(__assign({}, currentVariables[key]), { executeType: 'move' });
            }
            if (previousVariables[key] &&
                !currentVariables[key]) {
                return differenceVariables[key] = __assign(__assign({}, previousVariables[key]), { executeType: 'delete' });
            }
            if (!previousVariables[key] &&
                currentVariables[key] &&
                (!differenceVariables[currentVariables[key].parentId])) {
                return differenceVariables[key] = __assign(__assign({}, currentVariables[key]), { executeType: 'create' });
            }
            if (previousVariables[key] &&
                currentVariables[key] &&
                currentVariables[key].hashStyle !== previousVariables[key].hashStyle) {
                return differenceVariables[key] = __assign(__assign({}, currentVariables[key]), { executeType: 'changeStyle' });
            }
        });
        this.render(differenceVariables);
    };
    PebRendererComponent.prototype.generateHash = function (hashedObject) {
        var hash = 0;
        if (hashedObject.length === 0) {
            return hash;
        }
        for (var i = 0; i < hashedObject.length; i++) {
            var char = hashedObject.charCodeAt(i);
            // tslint:disable-next-line:no-bitwise
            hash = ((hash << 5) - hash) + char;
            // tslint:disable-next-line:no-bitwise
            hash = hash & hash;
        }
        return hash;
    };
    PebRendererComponent.prototype.checkTreeVariables = function () {
        var _this = this;
        var placeElement = pebFindElementChildrenWithParent(this.element, function (_) {
            return true;
        }).map(function (v) {
            var hashNode = v;
            var hashParent = v.parentId;
            var hashStyle = _this.stylesheet[v.id] ? _this.stylesheet[v.id] : {};
            return __assign({ hashNode: _this.generateHash(JSON.stringify(hashNode)), hashParent: _this.generateHash(JSON.stringify(hashParent)), hashStyle: _this.generateHash(JSON.stringify(hashStyle)) }, v);
        });
        var currentVariables = this.treeVariablesChanges$.getValue().current;
        var placeElementToObject = keyBy(placeElement, 'id');
        this.treeVariablesChanges$.next({
            previous: currentVariables,
            current: placeElementToObject,
        });
    };
    PebRendererComponent.prototype.render = function (difference) {
        var _this = this;
        log('Rendering started');
        if (!this.mainSlot) {
            log('FIXME: Attempt to render while slot is not created');
            return;
        }
        if (this.element) {
            pebTraverseElementDeep(this.element, function (el) { return _this.idsToRender.push(el.id); });
            this.renderElement(this.element, this.mainSlot, null);
            var currentVariables_1 = this.treeVariablesChanges$.getValue().current;
            forEach(sortBy(difference, [function (v) { return v.priority; }]), function (element) {
                var currentParentId = element.parentId ? element.parentId : null;
                switch (element.executeType) {
                    case 'create':
                        if (_this.registryAbstract.has(currentParentId)) {
                            _this.registryAbstract.get(currentParentId).instance.element = currentVariables_1[currentParentId];
                            _this.updateStylesAndContext(currentParentId);
                            _this.registryAbstract.get(currentParentId).instance.renderChildren();
                        }
                        break;
                    case 'move':
                        _this.registryAbstract.get(element.id).destroy();
                        _this.registryAbstract.delete(element.id);
                        _this.registrySlot.get(element.id).clear();
                        if (_this.registryAbstract.has(currentParentId)) {
                            _this.registryAbstract.get(currentParentId).instance.element = currentVariables_1[currentParentId];
                        }
                        _this.updateStylesAndContext(currentParentId);
                        _this.registryAbstract.get(currentParentId).instance.renderChildren();
                        break;
                    case 'delete':
                        _this.registryAbstract.get(element.id).destroy();
                        _this.registryAbstract.delete(element.id);
                        break;
                    case 'changeStyle':
                        if (_this.registryAbstract.has(element.id)) {
                            _this.updateStylesAndContext(element.id);
                        }
                        break;
                }
            });
        }
    };
    PebRendererComponent.prototype.updateStylesAndContext = function (id) {
        if (this.registryAbstract.has(id)) {
            var widgetInstance = this.registryAbstract.get(id).instance;
            var widgetClass = this.registryAbstract.get(id).componentType;
            widgetInstance.styles = this.stylesheet[id] || {};
            widgetInstance.context = widgetClass.contextFetcher
                ? widgetClass.contextFetcher(this.context)
                : this.context ? this.context[id] : null;
            widgetInstance.applyStyles();
            this.registryAbstract.get(id).changeDetectorRef.detectChanges();
        }
    };
    PebRendererComponent.prototype.renderElementChilds = function (abstractElement) {
        var _this = this;
        if (abstractElement.element.children) {
            abstractElement.childSlots.forEach(function (slot) {
                var slotName = slot.name === '' ? 'main' : slot.name;
                abstractElement.element.children
                    .filter(function (elDef) {
                    var elSlot = (abstractElement.stylesheet[elDef.id] || {}).slot;
                    return (!elSlot && slotName === 'main') || (elSlot === slotName);
                })
                    .forEach(function (elDef) {
                    _this.renderElement(elDef, slot.viewRef, abstractElement);
                });
            });
        }
    };
    PebRendererComponent.prototype.onRenderingComplete = function () {
        log('Rendering complete!');
        this.rendered.emit(this.registry);
    };
    Object.defineProperty(PebRendererComponent.prototype, "stylesWidth", {
        get: function () {
            log(this.screenThresholds);
            log(this.options.screen);
            log(this.options.scale);
            log(this.screenThresholds[this.options.screen] * this.options.scale + 'px');
            return this.screenThresholds[this.options.screen] * this.options.scale + 'px';
        },
        enumerable: true,
        configurable: true
    });
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
    return PebRendererComponent;
}(AbstractComponent));
export { PebRendererComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJyb290L3JlbmRlcmVyLmNvbXBvbmVudC50cyIsInJvb3QvcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULHdCQUF3QixFQUN4QixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFFaEIsVUFBVSxFQUNWLGlCQUFpQixFQUNULFdBQVcsR0FDcEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUVTLFNBQVMsRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQWMsZ0NBQWdDLEVBQy9HLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDBCQUEwQixFQUFFLGNBQWMsRUFBc0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2SixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFckQsSUFBTSxHQUFHLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBTzdDO0lBTzBDLHdDQUFpQjtJQStDekQsOEJBQ1UsVUFBc0IsRUFDdEIsUUFBa0IsRUFDbEIsR0FBNkIsRUFD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QVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7YUFDM0M7O3NCQW9ESSxNQUFNO3VCQUFDLDJCQUEyQjs7a0JBakRwQyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFNTCxLQUFLO21CQUFDLGVBQWU7O2tCQUtyQixLQUFLO21CQUFDLGdCQUFnQjs7a0JBS3RCLEtBQUs7bUJBQUMsZ0JBQWdCOztrQkFLdEIsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBRU4sU0FBUzttQkFBQyxnQ0FBZ0MsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7a0JBK1h0RSxXQUFXO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9uSW5pdCwgSG9zdEJpbmRpbmcsIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBQZWJFbGVtZW50IGFzIFBlYkVsZW1lbnRfT0xELFxuICBQZWJFbGVtZW50SWQsIFBlYlNjcmVlbiwgcGViVHJhdmVyc2VFbGVtZW50RGVlcCwgcGViQ3JlYXRlTG9nZ2VyLCBQZWJFbGVtZW50LCBwZWJGaW5kRWxlbWVudENoaWxkcmVuV2l0aFBhcmVudFxufSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcbmltcG9ydCB7IFBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90RGlyZWN0aXZlIH0gZnJvbSAnLi4vc2VsZWN0b3JzL2NoaWxkcmVuLXNsb3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnRzL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IEVsZW1lbnRDb21wb25lbnRzQ29sbGVjdGlvbiwgUmVuZGVyZXJJbnRlcmFjdGlvbkVtaXR0ZXIsIFJlbmRlckZ1bmN0aW9uLCBSZW5kZXJGdW5jdGlvblR5cGUsIFJlbmRlckNoaWxkc0Z1bmN0aW9uIH0gZnJvbSAnLi4vcmVuZGVyZXIudG9rZW5zJztcbmltcG9ydCB7IFBlYlJlbmRlcmVyT3B0aW9ucyB9IGZyb20gJy4uL3JlbmRlcmVyLnR5cGVzJztcbmltcG9ydCB7IFBlYkNvbnRleHQsIFBlYlN0eWxlc2hlZXQsIFRyZWVWYXJpYWJsZXMgfSBmcm9tICcuLi9jb3JlLnR5cGVzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZm9yRWFjaCwga2V5cywga2V5QnksIHNvcnRCeSwgdW5pb24gfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbmNvbnN0IGxvZyA9IHBlYkNyZWF0ZUxvZ2dlcigncmVuZGVyZXI6cm9vdCcpO1xuXG5pbnRlcmZhY2UgSVRyZWVWYXJpYWJsZXNDaGFuZ2VzIHtcbiAgcHJldmlvdXM6IFRyZWVWYXJpYWJsZXM7XG4gIGN1cnJlbnQ6IFRyZWVWYXJpYWJsZXM7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1yZW5kZXJlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZW5kZXJlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlbmRlcmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb20sXG59KVxuZXhwb3J0IGNsYXNzIFBlYlJlbmRlcmVyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZWxlbWVudDogUGViRWxlbWVudDtcbiAgQElucHV0KCkgc3R5bGVzaGVldDogUGViU3R5bGVzaGVldDtcbiAgQElucHV0KCkgY29udGV4dDogUGViQ29udGV4dDtcbiAgQElucHV0KCkgb3B0aW9uczogUGViUmVuZGVyZXJPcHRpb25zID0ge1xuICAgIHNjcmVlbjogUGViU2NyZWVuLkRlc2t0b3AsXG4gICAgc2NhbGU6IDEsXG4gICAgbG9jYWxlOiAnZW4nLFxuICB9O1xuXG4gIEBJbnB1dCgnb3B0aW9ucy5zY2FsZScpXG4gIHNldCBzZXRPcHRpb25zU2NhbGUoc2NhbGU6IG51bWJlcikge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCBzY2FsZSB9O1xuICB9XG5cbiAgQElucHV0KCdvcHRpb25zLnNjcmVlbicpXG4gIHNldCBzZXRPcHRpb25zU2NyZWVuKHNjcmVlbjogUGViU2NyZWVuKSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi50aGlzLm9wdGlvbnMsIHNjcmVlbiB9O1xuICB9XG5cbiAgQElucHV0KCdvcHRpb25zLmxvY2FsZScpXG4gIHNldCBzZXRPcHRpb25zTG9jYWwobG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLnRoaXMub3B0aW9ucywgbG9jYWxlIH07XG4gIH1cblxuICBASW5wdXQoKSBtb2RpZmllZEVsZW1lbnQ6IEJlaGF2aW9yU3ViamVjdDx7aWQ6IHN0cmluZywgY21wUmVmOiBDb21wb25lbnRSZWY8UGViQWJzdHJhY3RFbGVtZW50Pn0+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgQE91dHB1dCgpIHJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBpbnRlcmFjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZChQZWJSZW5kZXJlckNoaWxkcmVuU2xvdERpcmVjdGl2ZSwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIG1haW5TbG90OiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGlkc1RvUmVuZGVyOiBQZWJFbGVtZW50SWRbXSA9IFtdO1xuICByZWdpc3RyeVNsb3Q6IE1hcDxQZWJFbGVtZW50SWQsIFZpZXdDb250YWluZXJSZWY+ID0gbmV3IE1hcCgpO1xuICByZWdpc3RyeTogTWFwPFBlYkVsZW1lbnRJZCwgUGViQWJzdHJhY3RFbGVtZW50PiA9IG5ldyBNYXAoKTtcbiAgcmVnaXN0cnlBYnN0cmFjdDogTWFwPFBlYkVsZW1lbnRJZCwgQ29tcG9uZW50UmVmPFBlYkFic3RyYWN0RWxlbWVudD4+ID0gbmV3IE1hcCgpO1xuXG4gIHByaXZhdGUgdHJlZVZhcmlhYmxlc0NoYW5nZXMkOiBCZWhhdmlvclN1YmplY3Q8SVRyZWVWYXJpYWJsZXNDaGFuZ2VzPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoeyBwcmV2aW91czoge30sIGN1cnJlbnQ6IHt9IH0pO1xuICBwcml2YXRlIG1ha2VySWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXG4gIHNjcmVlblRocmVzaG9sZHMgPSB7XG4gICAgZGVza3RvcDogMTI4MCxcbiAgICB0YWJsZXQ6IDc2OCxcbiAgICBtb2JpbGU6IDM2MCxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBASW5qZWN0KEVsZW1lbnRDb21wb25lbnRzQ29sbGVjdGlvbikgcHJpdmF0ZSBlbGVtZW50c0NvbGxlY3Rpb246IGFueVtdLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50cmVlVmFyaWFibGVzQ2hhbmdlcyRcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgdGFwKCh2YXJpYWJsZXMpID0+IHRoaXMuZ2V0RGlmZmVyZW5jZVZhcmlhYmxlcyh2YXJpYWJsZXMpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcbiAgICAgICkuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLm1vZGlmaWVkRWxlbWVudC5waXBlKFxuICAgICAgdGFwKChtb2RpZmllZCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTWFrZXIgPSB0aGlzLm1ha2VySWQkLmdldFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY3VycmVudEVsZW1lbnQgfSA9IHRoaXMudHJlZVZhcmlhYmxlc0NoYW5nZXMkLmdldFZhbHVlKCk7XG4gICAgICAgIGxldCBjbXBGYWN0b3J5O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZE1ha2VyKSB7IC8vIHRvZG86IGZpeFxuICAgICAgICAgIGNvbnN0IG1ha2VyRWxlbWVudCA9IGN1cnJlbnRFbGVtZW50W3NlbGVjdGVkTWFrZXJdO1xuICAgICAgICAgIGNvbnN0IG1ha2VyVHlwZSA9IG1ha2VyRWxlbWVudC50eXBlO1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnRDb21wb25lbnQgPSB0aGlzLmVsZW1lbnRzQ29sbGVjdGlvblttYWtlclR5cGVdO1xuICAgICAgICAgIGNtcEZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxQZWJBYnN0cmFjdEVsZW1lbnQ+KGVsZW1lbnRDb21wb25lbnQpO1xuICAgICAgICAgIGNvbnN0IGNtcEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvdmlkZTogJ1NUWUxFU0hFRVQnLFxuICAgICAgICAgICAgICAgIHVzZVZhbHVlOiB0aGlzLnN0eWxlc2hlZXQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm92aWRlOiAnUEFSRU5UX0VMRU1FTlQnLFxuICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvdmlkZTogUmVuZGVyRnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgdXNlVmFsdWU6IHRoaXMucmVuZGVyRWxlbWVudCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3ZpZGU6IFJlbmRlckNoaWxkc0Z1bmN0aW9uLFxuICAgICAgICAgICAgICAgIHVzZVZhbHVlOiB0aGlzLnJlbmRlckVsZW1lbnRDaGlsZHMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm92aWRlOiBSZW5kZXJlckludGVyYWN0aW9uRW1pdHRlcixcbiAgICAgICAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5pbnRlcmFjdGVkLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGNtcFJlZiA9IGNtcEZhY3RvcnkuY3JlYXRlKGNtcEluamVjdG9yKTtcbiAgICAgICAgICBjbXBSZWYuaW5zdGFuY2UuZWxlbWVudCA9IG1ha2VyRWxlbWVudDtcbiAgICAgICAgICBjbXBSZWYuaW5zdGFuY2Uuc3R5bGVzID0gdGhpcy5zdHlsZXNoZWV0W21ha2VyRWxlbWVudC5pZF0gfHwge307XG4gICAgICAgICAgY21wUmVmLmluc3RhbmNlLmNvbnRleHQgPSAoY21wRmFjdG9yeS5jb21wb25lbnRUeXBlIGFzIGFueSkuY29udGV4dEZldGNoZXJcbiAgICAgICAgICAgID8gKGNtcEZhY3RvcnkuY29tcG9uZW50VHlwZSBhcyBhbnkpLmNvbnRleHRGZXRjaGVyKHRoaXMuY29udGV4dClcbiAgICAgICAgICAgIDogdGhpcy5jb250ZXh0Py5oYXNPd25Qcm9wZXJ0eShtYWtlckVsZW1lbnQuaWQpID8gdGhpcy5jb250ZXh0W21ha2VyRWxlbWVudC5pZF0gOiBudWxsO1xuXG4gICAgICAgICAgY21wUmVmLmluc3RhbmNlLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgICAgY21wUmVmLmluc3RhbmNlLmFwcGx5U3R5bGVzKCk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVTbG90KGNtcFJlZiwgbWFrZXJFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbW9kaWZpZWQgfHwgc2VsZWN0ZWRNYWtlciA9PT0gbW9kaWZpZWQuaWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3VycmVudEVsZW1lbnRbbW9kaWZpZWQuaWRdO1xuXG4gICAgICAgIG1vZGlmaWVkLmNtcFJlZi5pbnN0YW5jZS5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgbW9kaWZpZWQuY21wUmVmLmluc3RhbmNlLnN0eWxlcyA9IHRoaXMuc3R5bGVzaGVldFtlbGVtZW50LmlkXSB8fCB7fTtcbiAgICAgICAgbW9kaWZpZWQuY21wUmVmLmluc3RhbmNlLmNvbnRleHQgPSB0aGlzLmNvbnRleHQ/Lmhhc093blByb3BlcnR5KGVsZW1lbnQuaWQpID8gdGhpcy5jb250ZXh0W2VsZW1lbnQuaWRdIDogbnVsbDtcbiAgICAgICAgbW9kaWZpZWQuY21wUmVmLmluc3RhbmNlLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTbG90KG1vZGlmaWVkLmNtcFJlZiwgZWxlbWVudCwgdHJ1ZSk7XG5cbiAgICAgIH0pLFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcbiAgICApLnN1YnNjcmliZSgpO1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5jaGVja1RyZWVWYXJpYWJsZXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNoZWNrVHJlZVZhcmlhYmxlcygpO1xuICB9XG5cblxuICBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVNsb3QoY21wUmVmOiBDb21wb25lbnRSZWY8UGViQWJzdHJhY3RFbGVtZW50PiwgZWxlbWVudDogUGViRWxlbWVudCwgaXNNYWtlciA9IGZhbHNlKSB7XG5cbiAgICBjbXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgY29uc3Qgc2xvdFJlZiA9IHRoaXMucmVnaXN0cnlTbG90LmdldChlbGVtZW50LmlkKTtcbiAgICBzbG90UmVmLmNsZWFyKCk7XG5cbiAgICB0aGlzLnJlZ2lzdHJ5U2xvdC5zZXQoZWxlbWVudC5pZCwgc2xvdFJlZik7XG4gICAgc2xvdFJlZi5pbnNlcnQoY21wUmVmLmhvc3RWaWV3KTtcblxuICAgIGlmIChpc01ha2VyKSB7XG4gICAgICB0aGlzLm1ha2VySWQkLm5leHQoZWxlbWVudC5pZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tYWtlcklkJC5uZXh0KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREaWZmZXJlbmNlVmFyaWFibGVzKHZhcmlhYmxlczogSVRyZWVWYXJpYWJsZXNDaGFuZ2VzKSB7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjdXJyZW50VmFyaWFibGVzLCBwcmV2aW91czogcHJldmlvdXNWYXJpYWJsZXMgfSA9IHZhcmlhYmxlcztcbiAgICBjb25zdCBrZXlzTWVyZ2VWYXJpYWJsZXMgPSB1bmlvbihbLi4uKGtleXMoY3VycmVudFZhcmlhYmxlcykpLCAuLi4oa2V5cyhwcmV2aW91c1ZhcmlhYmxlcykpXSk7XG4gICAgY29uc3QgZGlmZmVyZW5jZVZhcmlhYmxlcyA9IHt9O1xuICAgIGZvckVhY2goa2V5c01lcmdlVmFyaWFibGVzLCAoa2V5KSA9PiB7XG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXNWYXJpYWJsZXNba2V5XSAmJlxuICAgICAgICBjdXJyZW50VmFyaWFibGVzW2tleV0gJiZcbiAgICAgICAgY3VycmVudFZhcmlhYmxlc1trZXldLmhhc2hQYXJlbnQgIT09IHByZXZpb3VzVmFyaWFibGVzW2tleV0uaGFzaFBhcmVudFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBkaWZmZXJlbmNlVmFyaWFibGVzW2tleV0gPSB7IC4uLmN1cnJlbnRWYXJpYWJsZXNba2V5XSwgZXhlY3V0ZVR5cGU6ICdtb3ZlJyB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHByZXZpb3VzVmFyaWFibGVzW2tleV0gJiZcbiAgICAgICAgIWN1cnJlbnRWYXJpYWJsZXNba2V5XVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBkaWZmZXJlbmNlVmFyaWFibGVzW2tleV0gPSB7IC4uLnByZXZpb3VzVmFyaWFibGVzW2tleV0sIGV4ZWN1dGVUeXBlOiAnZGVsZXRlJyB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgICFwcmV2aW91c1ZhcmlhYmxlc1trZXldICYmXG4gICAgICAgIGN1cnJlbnRWYXJpYWJsZXNba2V5XSAmJlxuICAgICAgICAoXG4gICAgICAgICAgIWRpZmZlcmVuY2VWYXJpYWJsZXNbY3VycmVudFZhcmlhYmxlc1trZXldLnBhcmVudElkXVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVuY2VWYXJpYWJsZXNba2V5XSA9IHsgLi4uY3VycmVudFZhcmlhYmxlc1trZXldLCBleGVjdXRlVHlwZTogJ2NyZWF0ZScgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91c1ZhcmlhYmxlc1trZXldICYmXG4gICAgICAgIGN1cnJlbnRWYXJpYWJsZXNba2V5XSAmJlxuICAgICAgICBjdXJyZW50VmFyaWFibGVzW2tleV0uaGFzaFN0eWxlICE9PSBwcmV2aW91c1ZhcmlhYmxlc1trZXldLmhhc2hTdHlsZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBkaWZmZXJlbmNlVmFyaWFibGVzW2tleV0gPSB7IC4uLmN1cnJlbnRWYXJpYWJsZXNba2V5XSwgZXhlY3V0ZVR5cGU6ICdjaGFuZ2VTdHlsZScgfTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXIoZGlmZmVyZW5jZVZhcmlhYmxlcyk7XG4gIH1cblxuXG4gIHByaXZhdGUgZ2VuZXJhdGVIYXNoKGhhc2hlZE9iamVjdCkge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBpZiAoaGFzaGVkT2JqZWN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFzaGVkT2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyID0gaGFzaGVkT2JqZWN0LmNoYXJDb2RlQXQoaSk7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcjtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICBoYXNoID0gaGFzaCAmIGhhc2g7XG4gICAgfVxuICAgIHJldHVybiBoYXNoO1xuICB9XG5cblxuICBwcml2YXRlIGNoZWNrVHJlZVZhcmlhYmxlcygpIHtcbiAgICBjb25zdCBwbGFjZUVsZW1lbnQgPSBwZWJGaW5kRWxlbWVudENoaWxkcmVuV2l0aFBhcmVudCh0aGlzLmVsZW1lbnQsIF8gPT4ge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkubWFwKHYgPT4ge1xuICAgICAgY29uc3QgaGFzaE5vZGUgPSB2O1xuICAgICAgY29uc3QgaGFzaFBhcmVudCA9IHYucGFyZW50SWQ7XG4gICAgICBjb25zdCBoYXNoU3R5bGUgPSB0aGlzLnN0eWxlc2hlZXRbdi5pZF0gPyB0aGlzLnN0eWxlc2hlZXRbdi5pZF0gOiB7fTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc2hOb2RlOiB0aGlzLmdlbmVyYXRlSGFzaChKU09OLnN0cmluZ2lmeShoYXNoTm9kZSkpLFxuICAgICAgICBoYXNoUGFyZW50OiB0aGlzLmdlbmVyYXRlSGFzaChKU09OLnN0cmluZ2lmeShoYXNoUGFyZW50KSksXG4gICAgICAgIGhhc2hTdHlsZTogdGhpcy5nZW5lcmF0ZUhhc2goSlNPTi5zdHJpbmdpZnkoaGFzaFN0eWxlKSksXG4gICAgICAgIC4uLnZcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGN1cnJlbnQ6IGN1cnJlbnRWYXJpYWJsZXMgfSA9IHRoaXMudHJlZVZhcmlhYmxlc0NoYW5nZXMkLmdldFZhbHVlKCk7XG4gICAgY29uc3QgcGxhY2VFbGVtZW50VG9PYmplY3Q6IGFueSB8IFRyZWVWYXJpYWJsZXMgPSBrZXlCeShwbGFjZUVsZW1lbnQsICdpZCcpO1xuICAgIHRoaXMudHJlZVZhcmlhYmxlc0NoYW5nZXMkLm5leHQoe1xuICAgICAgcHJldmlvdXM6IGN1cnJlbnRWYXJpYWJsZXMsXG4gICAgICBjdXJyZW50OiBwbGFjZUVsZW1lbnRUb09iamVjdCxcbiAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSByZW5kZXIoZGlmZmVyZW5jZSkge1xuICAgIGxvZygnUmVuZGVyaW5nIHN0YXJ0ZWQnKTtcbiAgICBpZiAoIXRoaXMubWFpblNsb3QpIHtcbiAgICAgIGxvZygnRklYTUU6IEF0dGVtcHQgdG8gcmVuZGVyIHdoaWxlIHNsb3QgaXMgbm90IGNyZWF0ZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuXG4gICAgICBwZWJUcmF2ZXJzZUVsZW1lbnREZWVwKHRoaXMuZWxlbWVudCBhcyBQZWJFbGVtZW50X09MRCwgKGVsKSA9PiB0aGlzLmlkc1RvUmVuZGVyLnB1c2goZWwuaWQpKTtcbiAgICAgIHRoaXMucmVuZGVyRWxlbWVudCh0aGlzLmVsZW1lbnQgYXMgUGViRWxlbWVudF9PTEQsIHRoaXMubWFpblNsb3QsIG51bGwpO1xuXG4gICAgICBjb25zdCB7IGN1cnJlbnQ6IGN1cnJlbnRWYXJpYWJsZXMgfSA9IHRoaXMudHJlZVZhcmlhYmxlc0NoYW5nZXMkLmdldFZhbHVlKCk7XG4gICAgICBmb3JFYWNoKHNvcnRCeShkaWZmZXJlbmNlLCBbdiA9PiB2LnByaW9yaXR5XSksIChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRJZCA9IGVsZW1lbnQucGFyZW50SWQgPyBlbGVtZW50LnBhcmVudElkIDogbnVsbDtcblxuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQuZXhlY3V0ZVR5cGUpIHtcbiAgICAgICAgICBjYXNlICdjcmVhdGUnOlxuICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0cnlBYnN0cmFjdC5oYXMoY3VycmVudFBhcmVudElkKSkge1xuICAgICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5QWJzdHJhY3QuZ2V0KGN1cnJlbnRQYXJlbnRJZCkuaW5zdGFuY2UuZWxlbWVudCA9IGN1cnJlbnRWYXJpYWJsZXNbY3VycmVudFBhcmVudElkXTtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdHlsZXNBbmRDb250ZXh0KGN1cnJlbnRQYXJlbnRJZCk7XG4gICAgICAgICAgICAgIHRoaXMucmVnaXN0cnlBYnN0cmFjdC5nZXQoY3VycmVudFBhcmVudElkKS5pbnN0YW5jZS5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgIHRoaXMucmVnaXN0cnlBYnN0cmFjdC5nZXQoZWxlbWVudC5pZCkuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RyeUFic3RyYWN0LmRlbGV0ZShlbGVtZW50LmlkKTtcblxuICAgICAgICAgICAgdGhpcy5yZWdpc3RyeVNsb3QuZ2V0KGVsZW1lbnQuaWQpLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lzdHJ5QWJzdHJhY3QuaGFzKGN1cnJlbnRQYXJlbnRJZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWdpc3RyeUFic3RyYWN0LmdldChjdXJyZW50UGFyZW50SWQpLmluc3RhbmNlLmVsZW1lbnQgPSBjdXJyZW50VmFyaWFibGVzW2N1cnJlbnRQYXJlbnRJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlc0FuZENvbnRleHQoY3VycmVudFBhcmVudElkKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0cnlBYnN0cmFjdC5nZXQoY3VycmVudFBhcmVudElkKS5pbnN0YW5jZS5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG5cbiAgICAgICAgICAgIHRoaXMucmVnaXN0cnlBYnN0cmFjdC5nZXQoZWxlbWVudC5pZCkuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RyeUFic3RyYWN0LmRlbGV0ZShlbGVtZW50LmlkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnY2hhbmdlU3R5bGUnOlxuICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0cnlBYnN0cmFjdC5oYXMoZWxlbWVudC5pZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdHlsZXNBbmRDb250ZXh0KGVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3R5bGVzQW5kQ29udGV4dChpZCkge1xuICAgIGlmICh0aGlzLnJlZ2lzdHJ5QWJzdHJhY3QuaGFzKGlkKSkge1xuICAgICAgY29uc3Qgd2lkZ2V0SW5zdGFuY2UgPSB0aGlzLnJlZ2lzdHJ5QWJzdHJhY3QuZ2V0KGlkKS5pbnN0YW5jZTtcbiAgICAgIGNvbnN0IHdpZGdldENsYXNzID0gdGhpcy5yZWdpc3RyeUFic3RyYWN0LmdldChpZCkuY29tcG9uZW50VHlwZSBhcyBhbnk7XG5cbiAgICAgIHdpZGdldEluc3RhbmNlLnN0eWxlcyA9IHRoaXMuc3R5bGVzaGVldFtpZF0gfHwge307XG4gICAgICB3aWRnZXRJbnN0YW5jZS5jb250ZXh0ID0gd2lkZ2V0Q2xhc3MuY29udGV4dEZldGNoZXJcbiAgICAgICAgPyB3aWRnZXRDbGFzcy5jb250ZXh0RmV0Y2hlcih0aGlzLmNvbnRleHQpXG4gICAgICAgIDogdGhpcy5jb250ZXh0ID8gdGhpcy5jb250ZXh0W2lkXSA6IG51bGw7XG4gICAgICB3aWRnZXRJbnN0YW5jZS5hcHBseVN0eWxlcygpO1xuXG4gICAgICB0aGlzLnJlZ2lzdHJ5QWJzdHJhY3QuZ2V0KGlkKS5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJFbGVtZW50Q2hpbGRzKGFic3RyYWN0RWxlbWVudCkge1xuICAgIGlmIChhYnN0cmFjdEVsZW1lbnQuZWxlbWVudC5jaGlsZHJlbikge1xuICAgICAgYWJzdHJhY3RFbGVtZW50LmNoaWxkU2xvdHMuZm9yRWFjaChzbG90ID0+IHtcbiAgICAgICAgY29uc3Qgc2xvdE5hbWUgPSBzbG90Lm5hbWUgPT09ICcnID8gJ21haW4nIDogc2xvdC5uYW1lO1xuICAgICAgICBhYnN0cmFjdEVsZW1lbnQuZWxlbWVudC5jaGlsZHJlblxuICAgICAgICAgIC5maWx0ZXIoZWxEZWYgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxTbG90ID0gKGFic3RyYWN0RWxlbWVudC5zdHlsZXNoZWV0W2VsRGVmLmlkXSB8fCB7fSkuc2xvdDtcblxuICAgICAgICAgICAgcmV0dXJuICghZWxTbG90ICYmIHNsb3ROYW1lID09PSAnbWFpbicpIHx8IChlbFNsb3QgPT09IHNsb3ROYW1lKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5mb3JFYWNoKGVsRGVmID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRWxlbWVudChlbERlZiwgc2xvdC52aWV3UmVmLCBhYnN0cmFjdEVsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckVsZW1lbnQ6IFJlbmRlckZ1bmN0aW9uVHlwZSA9IChcbiAgICBlbGVtZW50RGVmOiBQZWJFbGVtZW50LFxuICAgIHNsb3RSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcGFyZW50Q21wOiBudWxsIHwgUGViQWJzdHJhY3RFbGVtZW50LFxuICApID0+IHtcblxuICAgIGlmICh0aGlzLnJlZ2lzdHJ5QWJzdHJhY3QuaGFzKGVsZW1lbnREZWYuaWQpKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5pZHNUb1JlbmRlci5wdXNoKGVsZW1lbnREZWYuaWQpO1xuICAgIGNvbnN0IGVsZW1lbnRDb21wb25lbnQgPSB0aGlzLmVsZW1lbnRzQ29sbGVjdGlvbltlbGVtZW50RGVmLnR5cGVdO1xuXG4gICAgaWYgKCFlbGVtZW50Q29tcG9uZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgICBcIiR7ZWxlbWVudERlZi50eXBlfVwiIGVsZW1lbnQgY29tcG9uZW50IHdhcyBub3QgZm91bmQsXG4gICAgICAgIG1ha2Ugc3VyZSB5b3UgYWRkIGl0IHRvIEFWQUlMQUJMRV9FTEVNRU5UU19NQVAgaW4gcmVuZGVyZXIubW9kdWxlLnRzXG4gICAgICBgKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygxMTEsIGVsZW1lbnREZWYudHlwZSwgdGhpcy5lbGVtZW50c0NvbGxlY3Rpb24pO1xuXG4gICAgY29uc3QgY21wRmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PFBlYkFic3RyYWN0RWxlbWVudD4oZWxlbWVudENvbXBvbmVudCk7XG4gICAgY29uc3QgY21wSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnU1RZTEVTSEVFVCcsXG4gICAgICAgICAgdXNlVmFsdWU6IHRoaXMuc3R5bGVzaGVldCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdQQVJFTlRfRUxFTUVOVCcsXG4gICAgICAgICAgdXNlVmFsdWU6IHBhcmVudENtcCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFJlbmRlckZ1bmN0aW9uLFxuICAgICAgICAgIHVzZVZhbHVlOiB0aGlzLnJlbmRlckVsZW1lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBSZW5kZXJDaGlsZHNGdW5jdGlvbixcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5yZW5kZXJFbGVtZW50Q2hpbGRzLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUmVuZGVyZXJJbnRlcmFjdGlvbkVtaXR0ZXIsXG4gICAgICAgICAgdXNlVmFsdWU6IHRoaXMuaW50ZXJhY3RlZCxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHBhcmVudDogdGhpcy5pbmplY3RvcixcbiAgICB9KTtcblxuICAgIGNvbnN0IGNtcFJlZiA9IGNtcEZhY3RvcnkuY3JlYXRlKGNtcEluamVjdG9yKTtcbiAgICBjbXBSZWYuaW5zdGFuY2UuZWxlbWVudCA9IGVsZW1lbnREZWY7XG4gICAgY21wUmVmLmluc3RhbmNlLnN0eWxlcyA9IHRoaXMuc3R5bGVzaGVldFtlbGVtZW50RGVmLmlkXSB8fCB7fTtcbiAgICBjbXBSZWYuaW5zdGFuY2UuY29udGV4dCA9IChjbXBGYWN0b3J5LmNvbXBvbmVudFR5cGUgYXMgYW55KS5jb250ZXh0RmV0Y2hlclxuICAgICAgPyAoY21wRmFjdG9yeS5jb21wb25lbnRUeXBlIGFzIGFueSkuY29udGV4dEZldGNoZXIodGhpcy5jb250ZXh0KVxuICAgICAgOiB0aGlzLmNvbnRleHQ/Lmhhc093blByb3BlcnR5KGVsZW1lbnREZWYuaWQpID8gdGhpcy5jb250ZXh0W2VsZW1lbnREZWYuaWRdIDogbnVsbDtcblxuICAgIGNtcFJlZi5pbnN0YW5jZS5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGNtcFJlZi5pbnN0YW5jZS5hcHBseVN0eWxlcygpO1xuICAgIGNtcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5yZWdpc3RyeS5zZXQoZWxlbWVudERlZi5pZCwgY21wUmVmLmluc3RhbmNlKTtcbiAgICB0aGlzLnJlZ2lzdHJ5QWJzdHJhY3Quc2V0KGVsZW1lbnREZWYuaWQsIGNtcFJlZik7XG4gICAgdGhpcy5yZWdpc3RyeVNsb3Quc2V0KGVsZW1lbnREZWYuaWQsIHNsb3RSZWYpO1xuXG4gICAgaWYgKHNsb3RSZWYpIHtcbiAgICAgIHNsb3RSZWYuaW5zZXJ0KGNtcFJlZi5ob3N0Vmlldyk7XG4gICAgfVxuXG4gICAgdGhpcy5pZHNUb1JlbmRlciA9IHRoaXMuaWRzVG9SZW5kZXIuZmlsdGVyKGlkID0+IGlkICE9PSBlbGVtZW50RGVmLmlkKTtcbiAgICBpZiAodGhpcy5pZHNUb1JlbmRlci5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMub25SZW5kZXJpbmdDb21wbGV0ZSgpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBvblJlbmRlcmluZ0NvbXBsZXRlKCkge1xuICAgIGxvZygnUmVuZGVyaW5nIGNvbXBsZXRlIScpO1xuICAgIHRoaXMucmVuZGVyZWQuZW1pdCh0aGlzLnJlZ2lzdHJ5KTtcbiAgfVxuXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gIGdldCBzdHlsZXNXaWR0aCgpIHtcbiAgICBsb2codGhpcy5zY3JlZW5UaHJlc2hvbGRzKTtcbiAgICBsb2codGhpcy5vcHRpb25zLnNjcmVlbik7XG4gICAgbG9nKHRoaXMub3B0aW9ucy5zY2FsZSk7XG4gICAgbG9nKHRoaXMuc2NyZWVuVGhyZXNob2xkc1t0aGlzLm9wdGlvbnMuc2NyZWVuXSAqIHRoaXMub3B0aW9ucy5zY2FsZSArICdweCcpXG4gICAgcmV0dXJuIHRoaXMuc2NyZWVuVGhyZXNob2xkc1t0aGlzLm9wdGlvbnMuc2NyZWVuXSAqIHRoaXMub3B0aW9ucy5zY2FsZSArICdweCc7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgcGViUmVuZGVyZXJDaGlsZHJlblNsb3Q+PC9uZy1jb250YWluZXI+XG5cbiJdfQ==