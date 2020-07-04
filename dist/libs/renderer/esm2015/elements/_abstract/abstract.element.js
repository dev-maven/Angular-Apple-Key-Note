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
export class PebAbstractElement {
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
PebAbstractElement.ɵfac = function PebAbstractElement_Factory(t) { return new (t || PebAbstractElement)(i0.ɵɵdirectiveInject(RenderFunction), i0.ɵɵdirectiveInject(RenderChildsFunction), i0.ɵɵdirectiveInject(RendererInteractionEmitter), i0.ɵɵdirectiveInject('STYLESHEET'), i0.ɵɵdirectiveInject('PARENT_ELEMENT'), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PebAbstractElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebAbstractElement, selectors: [["peb-element-abstract"]], viewQuery: function PebAbstractElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PebRendererChildrenSlotDirective, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.childSlots = _t);
    } }, hostVars: 1, hostBindings: function PebAbstractElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("peb-element-id", ctx.attrElementId);
    } }, inputs: { element: "element", styles: "styles", context: "context", options: "options", selected: "selected" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 0, vars: 0, template: function PebAbstractElement_Template(rf, ctx) { }, encapsulation: 2 });
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
const HIDE_WARNINGS = {
    HostBinding,
    HostListener,
    QueryList,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RSxPQUFPLEVBQ1UsaUJBQWlCLEVBQUUsU0FBUyxFQUMzQyxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQ25ELE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUF3QixTQUFTLEVBQ3RDLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsMEJBQTBCLEVBQTZCLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUksT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRMUMsTUFBTSxPQUFnQixrQkFBa0I7SUFldEMsWUFDa0MsYUFBaUMsRUFDM0IsbUJBQTZDLEVBQ3ZDLGtCQUFxQyxFQUNuRCxVQUF5QixFQUNyQixTQUE2QixFQUNyRCxRQUFrQixFQUNwQixVQUFzQixFQUN0QixRQUFtQixFQUNwQixTQUF1QjtJQUU5QixNQUFNO0lBQ0MsR0FBc0I7UUFYRyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFDM0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUEwQjtRQUN2Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ25ELGVBQVUsR0FB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QkFBMEI7O3NCQUNqQyxNQUFNO3VCQUFDLFlBQVk7MEJBQ3lCLGtCQUFrQjtzQkFBOUQsTUFBTTt1QkFBQyxnQkFBZ0I7O2tCQW5CekIsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBR0wsS0FBSzs7a0JBSUwsWUFBWTttQkFBQyxnQ0FBZ0M7O2tCQW1FN0MsV0FBVzttQkFBQyxxQkFBcUI7O0FBTXBDLG9FQUFvRTtBQUNwRSxNQUFNLGFBQWEsR0FBRztJQUNwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyRnVuY3Rpb24sIFJlbmRlckZ1bmN0aW9uVHlwZSB9IGZyb20gJy4vLi4vLi4vcmVuZGVyZXIudG9rZW5zJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJSZW5kZXJlckNoaWxkcmVuU2xvdERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9jaGlsZHJlbi1zbG90LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQYXJlbnRFbGVtZW50Q29tcG9uZW50LCBSZW5kZXJlckludGVyYWN0aW9uRW1pdHRlciwgIFJlbmRlckNoaWxkc0Z1bmN0aW9uVHlwZSwgUmVuZGVyQ2hpbGRzRnVuY3Rpb24gfSBmcm9tICcuLi8uLi9yZW5kZXJlci50b2tlbnMnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGViUmVuZGVyZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vcmVuZGVyZXIudHlwZXMnO1xuaW1wb3J0IHsgUGViRWxlbWVudCwgUGViRWxlbWVudFN0eWxlcywgUGViU3R5bGVzaGVldCwgUGViRWxlbWVudENvbnRleHQgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtYWJzdHJhY3QnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlYkFic3RyYWN0RWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZWxlbWVudDogUGViRWxlbWVudDtcbiAgQElucHV0KCkgc3R5bGVzOiBQZWJFbGVtZW50U3R5bGVzO1xuICBASW5wdXQoKSBjb250ZXh0OiBQZWJFbGVtZW50Q29udGV4dDxhbnk+O1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFBlYlJlbmRlcmVyT3B0aW9ucztcblxuICAvKiogQGRlcHJlY2F0ZWQ6IGRldiBvbmx5LiBkbyBub3QgdXNlIG9yIHJlbHkgb24gKi9cbiAgQElucHV0KCkgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICBkZXN0cm95JDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZHJlbihQZWJSZW5kZXJlckNoaWxkcmVuU2xvdERpcmVjdGl2ZSlcbiAgY2hpbGRTbG90czogUXVlcnlMaXN0PFBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90RGlyZWN0aXZlPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFJlbmRlckZ1bmN0aW9uKSBwcml2YXRlIHJlbmRlckVsZW1lbnQ6IFJlbmRlckZ1bmN0aW9uVHlwZSxcbiAgICBASW5qZWN0KFJlbmRlckNoaWxkc0Z1bmN0aW9uKSBwcml2YXRlIHJlbmRlckVsZW1lbnRDaGlsZHM6IFJlbmRlckNoaWxkc0Z1bmN0aW9uVHlwZSxcbiAgICBASW5qZWN0KFJlbmRlcmVySW50ZXJhY3Rpb25FbWl0dGVyKSBwcml2YXRlIGludGVyYWN0aW9uRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4sXG4gICAgQEluamVjdCgnU1RZTEVTSEVFVCcpIHByaXZhdGUgc3R5bGVzaGVldDogUGViU3R5bGVzaGVldCxcbiAgICBASW5qZWN0KCdQQVJFTlRfRUxFTUVOVCcpIHByaXZhdGUgcGFyZW50Q21wOiBQZWJBYnN0cmFjdEVsZW1lbnQsXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcblxuICAgIC8vIGRldlxuICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oKSB7XG4gICAgdGhpcy5yZW5kZXJFbGVtZW50Q2hpbGRzKHRoaXMpO1xuICB9XG5cbiAgZ2V0IHBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoUGFyZW50RWxlbWVudENvbXBvbmVudCk7XG4gIH1cblxuICBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGVsZW1lbnRzKCk6IHsgW2tleTogc3RyaW5nXTogSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdfTtcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IG1hcHBlZFN0eWxlcygpOiBhbnk7XG5cbiAgYXBwbHlTdHlsZXMoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZWxlbWVudHMpLmZvckVhY2goKFtuYW1lLCBlbGVtZW50XSkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIC8vIFRPRE86IGFkZCBsb2dzIGlmIHRoZXJlIGlzIG5vIG1hcHBlZCBzdHlsZXMgZm9yIGFuIGVsZW1lbnRcbiAgICAgICAgICBjb25zdCBlbGVtZW50U3R5bGVzID0gdGhpcy5tYXBwZWRTdHlsZXMgJiYgdGhpcy5tYXBwZWRTdHlsZXNbbmFtZV0gPyB0aGlzLm1hcHBlZFN0eWxlc1tuYW1lXSA6IHt9O1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnRzQXJyID0gaXNBcnJheShlbGVtZW50KSA/IGVsZW1lbnQgOiBbZWxlbWVudF07XG4gICAgICAgICAgZWxlbWVudHNBcnIuZm9yRWFjaChlbGVtID0+IE9iamVjdC5lbnRyaWVzKGVsZW1lbnRTdHlsZXMpLmZvckVhY2goXG4gICAgICAgICAgICAoW3Byb3AsIHZhbHVlXSkgPT4gdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtLCBwcm9wLCB2YWx1ZSksXG4gICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGludGVyYWN0KHBheWxvYWQpIHtcbiAgICB0aGlzLmludGVyYWN0aW9uRW1pdHRlci5lbWl0KHBheWxvYWQpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnBlYi1lbGVtZW50LWlkJylcbiAgZ2V0IGF0dHJFbGVtZW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5pZDtcbiAgfVxufVxuXG4vLyBGSVhNRShAbmctcGFja2Fnci9uZy1wYWNrYWdyL2lzc3Vlcy83MTApOiBSZW1vdmUgY29tcGlsZSB3YXJuaW5nc1xuY29uc3QgSElERV9XQVJOSU5HUyA9IHtcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgUXVlcnlMaXN0LFxufTtcbiJdfQ==