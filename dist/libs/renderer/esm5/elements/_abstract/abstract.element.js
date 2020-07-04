import { __read } from "tslib";
import { RenderFunction } from './../../renderer.tokens';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Injector, Input, QueryList, ViewChildren, } from '@angular/core';
import { PebRendererChildrenSlotDirective } from '../../selectors/children-slot.directive';
import { ParentElementComponent, RendererInteractionEmitter, RenderChildsFunction } from '../../renderer.tokens';
import { isArray } from 'lodash-es';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var PebAbstractElement = /** @class */ (function () {
    function PebAbstractElement(renderElement, renderElementChilds, interactionEmitter, stylesheet, parentCmp, injector, elementRef, renderer, sanitizer, 
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
    PebAbstractElement.prototype.ngOnChanges = function () {
        this.applyStyles();
    };
    PebAbstractElement.prototype.ngAfterViewInit = function () {
        this.renderChildren();
        this.applyStyles();
    };
    PebAbstractElement.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    PebAbstractElement.prototype.renderChildren = function () {
        this.renderElementChilds(this);
    };
    Object.defineProperty(PebAbstractElement.prototype, "parent", {
        get: function () {
            return this.injector.get(ParentElementComponent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebAbstractElement.prototype, "nativeElement", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    PebAbstractElement.prototype.applyStyles = function () {
        var _this = this;
        if (this.elements) {
            Object.entries(this.elements).forEach(function (_a) {
                var _b = __read(_a, 2), name = _b[0], element = _b[1];
                if (element) {
                    // TODO: add logs if there is no mapped styles for an element
                    var elementStyles_1 = _this.mappedStyles && _this.mappedStyles[name] ? _this.mappedStyles[name] : {};
                    var elementsArr = isArray(element) ? element : [element];
                    elementsArr.forEach(function (elem) { return Object.entries(elementStyles_1).forEach(function (_a) {
                        var _b = __read(_a, 2), prop = _b[0], value = _b[1];
                        return _this.renderer.setStyle(elem, prop, value);
                    }); });
                }
            });
        }
    };
    PebAbstractElement.prototype.interact = function (payload) {
        this.interactionEmitter.emit(payload);
    };
    Object.defineProperty(PebAbstractElement.prototype, "attrElementId", {
        get: function () {
            return this.element.id;
        },
        enumerable: true,
        configurable: true
    });
    PebAbstractElement.ɵfac = function PebAbstractElement_Factory(t) { return new (t || PebAbstractElement)(i0.ɵɵdirectiveInject(RenderFunction), i0.ɵɵdirectiveInject(RenderChildsFunction), i0.ɵɵdirectiveInject(RendererInteractionEmitter), i0.ɵɵdirectiveInject('STYLESHEET'), i0.ɵɵdirectiveInject('PARENT_ELEMENT'), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    PebAbstractElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebAbstractElement, selectors: [["peb-element-abstract"]], viewQuery: function PebAbstractElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(PebRendererChildrenSlotDirective, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.childSlots = _t);
        } }, hostVars: 1, hostBindings: function PebAbstractElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("peb-element-id", ctx.attrElementId);
        } }, inputs: { element: "element", styles: "styles", context: "context", options: "options", selected: "selected" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 0, vars: 0, template: function PebAbstractElement_Template(rf, ctx) { }, encapsulation: 2 });
    return PebAbstractElement;
}());
export { PebAbstractElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebAbstractElement, [{
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
            }] }, { type: i0.EventEmitter, decorators: [{
                type: Inject,
                args: [RendererInteractionEmitter]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ['STYLESHEET']
            }] }, { type: PebAbstractElement, decorators: [{
                type: Inject,
                args: ['PARENT_ELEMENT']
            }] }, { type: i0.Injector }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.DomSanitizer }, { type: i0.ChangeDetectorRef }]; }, { element: [{
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
var HIDE_WARNINGS = {
    HostBinding: HostBinding,
    HostListener: HostListener,
    QueryList: QueryList,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0seUJBQXlCLENBQUM7QUFDN0UsT0FBTyxFQUNVLGlCQUFpQixFQUFFLFNBQVMsRUFDM0MsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUNuRCxNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFBd0IsU0FBUyxFQUN0QyxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLDBCQUEwQixFQUE2QixvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSTFDO0lBbUJFLDRCQUNrQyxhQUFpQyxFQUMzQixtQkFBNkMsRUFDdkMsa0JBQXFDLEVBQ25ELFVBQXlCLEVBQ3JCLFNBQTZCLEVBQ3JELFFBQWtCLEVBQ3BCLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ3BCLFNBQXVCO0lBRTlCLE1BQU07SUFDQyxHQUFzQjtRQVhHLGtCQUFhLEdBQWIsYUFBYSxDQUFvQjtRQUMzQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTBCO1FBQ3ZDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDbkQsZUFBVSxHQUFWLFVBQVUsQ0FBZTtRQUNy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REFBbEIsa0JBQWtCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsRUFBRTthQUNiOztzQkFpQkksTUFBTTt1QkFBQyxjQUFjOztzQkFDckIsTUFBTTt1QkFBQyxvQkFBb0I7O3NCQUMzQixNQUFNO3VCQUFDLDBCQUEwQjs7c0JBQ2pDLE1BQU07dUJBQUMsWUFBWTswQkFDeUIsa0JBQWtCO3NCQUE5RCxNQUFNO3VCQUFDLGdCQUFnQjs7a0JBbkJ6QixLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFHTCxLQUFLOztrQkFJTCxZQUFZO21CQUFDLGdDQUFnQzs7a0JBbUU3QyxXQUFXO21CQUFDLHFCQUFxQjs7QUFNcEMsb0VBQW9FO0FBQ3BFLElBQU0sYUFBYSxHQUFHO0lBQ3BCLFdBQVcsYUFBQTtJQUNYLFlBQVksY0FBQTtJQUNaLFNBQVMsV0FBQTtDQUNWLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJGdW5jdGlvbiwgUmVuZGVyRnVuY3Rpb25UeXBlIH0gZnJvbSAnLi8uLi8uLi9yZW5kZXJlci50b2tlbnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL2NoaWxkcmVuLXNsb3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBhcmVudEVsZW1lbnRDb21wb25lbnQsIFJlbmRlcmVySW50ZXJhY3Rpb25FbWl0dGVyLCAgUmVuZGVyQ2hpbGRzRnVuY3Rpb25UeXBlLCBSZW5kZXJDaGlsZHNGdW5jdGlvbiB9IGZyb20gJy4uLy4uL3JlbmRlcmVyLnRva2Vucyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJSZW5kZXJlck9wdGlvbnMgfSBmcm9tICcuLi8uLi9yZW5kZXJlci50eXBlcyc7XG5pbXBvcnQgeyBQZWJFbGVtZW50LCBQZWJFbGVtZW50U3R5bGVzLCBQZWJTdHlsZXNoZWV0LCBQZWJFbGVtZW50Q29udGV4dCB9IGZyb20gJ0BwZS9idWlsZGVyLWNvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZWItZWxlbWVudC1hYnN0cmFjdCcsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGViQWJzdHJhY3RFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBlbGVtZW50OiBQZWJFbGVtZW50O1xuICBASW5wdXQoKSBzdHlsZXM6IFBlYkVsZW1lbnRTdHlsZXM7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IFBlYkVsZW1lbnRDb250ZXh0PGFueT47XG5cbiAgQElucHV0KCkgb3B0aW9uczogUGViUmVuZGVyZXJPcHRpb25zO1xuXG4gIC8qKiBAZGVwcmVjYXRlZDogZGV2IG9ubHkuIGRvIG5vdCB1c2Ugb3IgcmVseSBvbiAqL1xuICBASW5wdXQoKSBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIGRlc3Ryb3kkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBAVmlld0NoaWxkcmVuKFBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90RGlyZWN0aXZlKVxuICBjaGlsZFNsb3RzOiBRdWVyeUxpc3Q8UGViUmVuZGVyZXJDaGlsZHJlblNsb3REaXJlY3RpdmU+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUmVuZGVyRnVuY3Rpb24pIHByaXZhdGUgcmVuZGVyRWxlbWVudDogUmVuZGVyRnVuY3Rpb25UeXBlLFxuICAgIEBJbmplY3QoUmVuZGVyQ2hpbGRzRnVuY3Rpb24pIHByaXZhdGUgcmVuZGVyRWxlbWVudENoaWxkczogUmVuZGVyQ2hpbGRzRnVuY3Rpb25UeXBlLFxuICAgIEBJbmplY3QoUmVuZGVyZXJJbnRlcmFjdGlvbkVtaXR0ZXIpIHByaXZhdGUgaW50ZXJhY3Rpb25FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PixcbiAgICBASW5qZWN0KCdTVFlMRVNIRUVUJykgcHJpdmF0ZSBzdHlsZXNoZWV0OiBQZWJTdHlsZXNoZWV0LFxuICAgIEBJbmplY3QoJ1BBUkVOVF9FTEVNRU5UJykgcHJpdmF0ZSBwYXJlbnRDbXA6IFBlYkFic3RyYWN0RWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuXG4gICAgLy8gZGV2XG4gICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICB0aGlzLnJlbmRlckVsZW1lbnRDaGlsZHModGhpcyk7XG4gIH1cblxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChQYXJlbnRFbGVtZW50Q29tcG9uZW50KTtcbiAgfVxuXG4gIGdldCBuYXRpdmVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgZWxlbWVudHMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W119O1xuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgbWFwcGVkU3R5bGVzKCk6IGFueTtcblxuICBhcHBseVN0eWxlcygpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cykge1xuICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5lbGVtZW50cykuZm9yRWFjaCgoW25hbWUsIGVsZW1lbnRdKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgLy8gVE9ETzogYWRkIGxvZ3MgaWYgdGhlcmUgaXMgbm8gbWFwcGVkIHN0eWxlcyBmb3IgYW4gZWxlbWVudFxuICAgICAgICAgIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSB0aGlzLm1hcHBlZFN0eWxlcyAmJiB0aGlzLm1hcHBlZFN0eWxlc1tuYW1lXSA/IHRoaXMubWFwcGVkU3R5bGVzW25hbWVdIDoge307XG4gICAgICAgICAgY29uc3QgZWxlbWVudHNBcnIgPSBpc0FycmF5KGVsZW1lbnQpID8gZWxlbWVudCA6IFtlbGVtZW50XTtcbiAgICAgICAgICBlbGVtZW50c0Fyci5mb3JFYWNoKGVsZW0gPT4gT2JqZWN0LmVudHJpZXMoZWxlbWVudFN0eWxlcykuZm9yRWFjaChcbiAgICAgICAgICAgIChbcHJvcCwgdmFsdWVdKSA9PiB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW0sIHByb3AsIHZhbHVlKSxcbiAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaW50ZXJhY3QocGF5bG9hZCkge1xuICAgIHRoaXMuaW50ZXJhY3Rpb25FbWl0dGVyLmVtaXQocGF5bG9hZCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucGViLWVsZW1lbnQtaWQnKVxuICBnZXQgYXR0ckVsZW1lbnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmlkO1xuICB9XG59XG5cbi8vIEZJWE1FKEBuZy1wYWNrYWdyL25nLXBhY2thZ3IvaXNzdWVzLzcxMCk6IFJlbW92ZSBjb21waWxlIHdhcm5pbmdzXG5jb25zdCBISURFX1dBUk5JTkdTID0ge1xuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBRdWVyeUxpc3QsXG59O1xuIl19