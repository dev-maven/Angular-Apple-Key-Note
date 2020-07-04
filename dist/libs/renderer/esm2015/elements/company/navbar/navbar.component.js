import { ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["wrapper"];
const _c1 = ["mobileButtonWrapper"];
const _c2 = ["mobileButton"];
const _c3 = ["mobileButtonLine"];
const _c4 = function (a0) { return { route: a0 }; };
function PebNavbarElement_div_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const route_r475 = ctx.$implicit;
    i0.ɵɵnextContext(3);
    const _r470 = i0.ɵɵreference(6);
    const _r468 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", (route_r475 == null ? null : route_r475.children == null ? null : route_r475.children.length) ? _r470 : _r468)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c4, route_r475));
} }
function PebNavbarElement_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, PebNavbarElement_div_0_div_2_ng_container_1_Template, 2, 4, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r473 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r473.element.data.routes);
} }
function PebNavbarElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4, 5);
    i0.ɵɵtemplate(2, PebNavbarElement_div_0_div_2_Template, 2, 1, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r465 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r465.element.data == null ? null : ctx_r465.element.data.routes);
} }
function PebNavbarElement_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r481 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10, 11);
    i0.ɵɵlistener("click", function PebNavbarElement_ng_template_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r481); const ctx_r480 = i0.ɵɵnextContext(); return ctx_r480.openMobileMenu(); });
    i0.ɵɵelementStart(2, "div", 12, 13);
    i0.ɵɵelement(4, "div", 14, 15);
    i0.ɵɵelement(6, "div", 16, 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PebNavbarElement_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r484 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 17);
    i0.ɵɵlistener("click", function PebNavbarElement_ng_template_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r484); const route_r482 = ctx.route; const ctx_r483 = i0.ɵɵnextContext(); return ctx_r483.redirectTo(route_r482.route); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const route_r482 = ctx.route;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", route_r482.title, "");
} }
function PebNavbarElement_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r489 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18, 19);
    i0.ɵɵlistener("click", function PebNavbarElement_ng_template_5_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r489); const route_r485 = ctx.route; const _r487 = i0.ɵɵreference(1); const ctx_r488 = i0.ɵɵnextContext(); return ctx_r488.showDropdown(_r487, route_r485); });
    i0.ɵɵelementStart(2, "a", 20);
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "span", 21);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(5, "svg", 22);
    i0.ɵɵelement(6, "path", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const route_r485 = ctx.route;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", route_r485.title, " ");
} }
export class PebNavbarElement extends PebAbstractElement {
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
PebNavbarElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebNavbarElement, selectors: [["peb-element-navbar"]], viewQuery: function PebNavbarElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(_c2, true);
        i0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.wrapper = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mobileButtonWrapper = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mobileButton = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mobileButtonLines = _t);
    } }, inputs: { element: "element", styles: "styles", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 2, consts: [["class", "navigation", 4, "ngIf", "ngIfElse"], ["hamburger", ""], ["simpleLink", ""], ["parentLink", ""], [1, "navigation"], ["wrapper", ""], ["class", "navigation_routes", 4, "ngIf"], [1, "navigation_routes"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "navigation_hamburger", 3, "click"], ["mobileButtonWrapper", ""], [1, "navigation_hamburger__button"], ["mobileButton", ""], [1, "line", "top"], ["mobileButtonLine", ""], [1, "line", "bottom"], [1, "navigation_routes__element", 3, "click"], [1, "expansion-link", 3, "click"], ["dropdownLink", ""], [1, "navigation_routes__element"], [1, "arrow"], ["width", "10", "height", "5", "viewBox", "-2.5 -5 75 60", "preserveAspectRatio", "none"], ["d", "M0,0 l35,50 l35,-50", "fill", "none", "stroke", "white", "stroke-linecap", "round", "stroke-width", "5"]], template: function PebNavbarElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PebNavbarElement_div_0_Template, 3, 1, "div", 0);
        i0.ɵɵtemplate(1, PebNavbarElement_ng_template_1_Template, 8, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PebNavbarElement_ng_template_3_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, PebNavbarElement_ng_template_5_Template, 7, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r466 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.options.screen !== "mobile")("ngIfElse", _r466);
    } }, directives: [i1.NgIf, i1.NgForOf, i1.NgTemplateOutlet], styles: [".navigation[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:100%;background:inherit}.navigation_hamburger[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;padding:0 10px}.navigation_hamburger__button[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-content:space-around}.navigation_hamburger__button[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%;background-color:#000;border-radius:1em}.navigation_routes[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;width:100%;height:100%;overflow:hidden}.navigation_routes__element[_ngcontent-%COMP%]{text-align:center;color:inherit;margin:0 16px;text-decoration:none;cursor:pointer;font-size:inherit;width:-webkit-max-content;width:-moz-max-content;width:max-content}.navigation_routes__element[_ngcontent-%COMP%]:hover{opacity:.6}.navigation_routes[_ngcontent-%COMP%]   .expansion-link[_ngcontent-%COMP%]{height:100%;-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex}"], changeDetection: 0 });
const ɵPebNavbarElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebNavbarElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebNavbarElement, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY29tcGFueS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsImVsZW1lbnRzL2NvbXBhbnkvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7SUNIbEUsNkJBQ0U7SUFBQSwyQkFHZ0I7SUFDbEIsMEJBQWU7Ozs7OztJQUhYLGVBQXNFO0lBQXRFLGdKQUFzRSxtRUFBQTs7O0lBTDVFLDhCQUdFO0lBQUEsK0ZBQ0U7SUFLSixpQkFBTTs7O0lBTlUsZUFBeUM7SUFBekMsc0RBQXlDOzs7SUFQM0QsaUNBSUU7SUFBQSx1RUFHRTtJQU9KLGlCQUFNOzs7SUFUQyxlQUE0QjtJQUE1QiwwRkFBNEI7Ozs7SUFhakMsbUNBQ0U7SUFEZ0MsbU1BQTBCO0lBQzFELG1DQUNFO0lBQUEsOEJBQThDO0lBQzlDLDhCQUFpRDtJQUNuRCxpQkFBTTtJQUNSLGlCQUFNOzs7O0lBSU4sNkJBR0U7SUFGQywyT0FBaUM7SUFFbEMsWUFBZTtJQUFBLGlCQUFJOzs7SUFBbkIsZUFBZTtJQUFmLGdEQUFlOzs7O0lBSWpCLG1DQUNFO0lBRHdDLGlSQUEyQztJQUNuRiw2QkFDRTtJQUFBLFlBQ0E7SUFBQSxnQ0FDQTtJQUFBLG1CQUNFO0lBREYsK0JBQ0U7SUFBQSwyQkFDRjtJQUFBLGlCQUFNO0lBQ1IsaUJBQU87SUFDUCxpQkFBSTtJQUNOLGlCQUFNOzs7SUFQRixlQUNBO0lBREEsaURBQ0E7O0FEakJOLE1BQU0sT0FB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QUs7O2tCQUNMLFNBQVM7bUJBQUMsU0FBUzs7a0JBQ25CLFNBQVM7bUJBQUMscUJBQXFCOztrQkFDL0IsU0FBUzttQkFBQyxjQUFjOztrQkFDeEIsWUFBWTttQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJSZW5kZXJlck9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9yZW5kZXJlci50eXBlcyc7XG5pbXBvcnQgeyBQZWJFbGVtZW50LCBQZWJFbGVtZW50U3R5bGVzIH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1lbGVtZW50LW5hdmJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXZiYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBlYk5hdmJhckVsZW1lbnQgZXh0ZW5kcyBQZWJBYnN0cmFjdEVsZW1lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgZWxlbWVudDogUGViRWxlbWVudDtcbiAgQElucHV0KCkgc3R5bGVzOiBQZWJFbGVtZW50U3R5bGVzO1xuICBASW5wdXQoKSBvcHRpb25zOiBQZWJSZW5kZXJlck9wdGlvbnM7XG4gIEBWaWV3Q2hpbGQoJ3dyYXBwZXInKSB3cmFwcGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtb2JpbGVCdXR0b25XcmFwcGVyJykgbW9iaWxlQnV0dG9uV3JhcHBlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbW9iaWxlQnV0dG9uJykgbW9iaWxlQnV0dG9uOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkcmVuKCdtb2JpbGVCdXR0b25MaW5lJykgbW9iaWxlQnV0dG9uTGluZXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBnZXQgZWxlbWVudHMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W10gfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICAgIHdyYXBwZXI6IHRoaXMud3JhcHBlciA/IHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50IDogbnVsbCxcbiAgICAgIG1vYmlsZUJ1dHRvbldyYXBwZXI6IHRoaXMubW9iaWxlQnV0dG9uV3JhcHBlciA/IHRoaXMubW9iaWxlQnV0dG9uV3JhcHBlci5uYXRpdmVFbGVtZW50IDogbnVsbCxcbiAgICAgIG1vYmlsZUJ1dHRvbjogdGhpcy5tb2JpbGVCdXR0b24gPyB0aGlzLm1vYmlsZUJ1dHRvbi5uYXRpdmVFbGVtZW50IDogbnVsbCxcbiAgICAgIG1vYmlsZUJ1dHRvbkxpbmU6IHRoaXMubW9iaWxlQnV0dG9uTGluZXNcbiAgICAgICAgPyB0aGlzLm1vYmlsZUJ1dHRvbkxpbmVzLnRvQXJyYXkoKS5tYXAoYSA9PiBhLm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgIDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgY29sb3I6IHRoaXMuc3R5bGVzLmNvbG9yLFxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0eWxlcy5iYWNrZ3JvdW5kLFxuICAgICAgICBmb250U2l6ZTogdGhpcy5zdHlsZXMuZm9udFNpemUgKyAncHgnLFxuICAgICAgfSxcbiAgICAgIHdyYXBwZXI6IHtcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnN0eWxlcy5oZWlnaHQgKyAncHgnLFxuICAgICAgfSxcbiAgICAgIG1vYmlsZUJ1dHRvbldyYXBwZXI6IHtcbiAgICAgICAgd2lkdGg6IHRoaXMuc3R5bGVzLm1vYmlsZUJ1dHRvbldpZHRoICsgJ3B4JyxcbiAgICAgIH0sXG4gICAgICBtb2JpbGVCdXR0b246IHtcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnN0eWxlcy5tb2JpbGVCdXR0b25IZWlnaHQgKyAncHgnLFxuICAgICAgfSxcbiAgICAgIG1vYmlsZUJ1dHRvbkxpbmU6IHtcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnN0eWxlcy5tb2JpbGVCdXR0b25FbGVtZW50SGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0eWxlcy5tb2JpbGVCdXR0b25FbGVtZW50Q29sb3IsXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIG9wZW5Nb2JpbGVNZW51KCkge1xuICAgIHRoaXMuaW50ZXJhY3Qoe1xuICAgICAgdHlwZTogJ25hdmlnYXRpb24uc2hvd01vYmlsZU1lbnUnLFxuICAgICAgcm91dGVzOiB0aGlzLmVsZW1lbnQuZGF0YS5yb3V0ZXMsXG4gICAgfSk7XG4gIH1cblxuICByZWRpcmVjdFRvKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5pbnRlcmFjdCh7dHlwZTogJ25hdmlnYXRlJywgdXJsfSk7XG4gIH1cblxuICBzaG93RHJvcGRvd24oZWxlbWVudCwgcm91dGU6IGFueSkge1xuICAgIHRoaXMuaW50ZXJhY3Qoe1xuICAgICAgdHlwZTogJ25hdmlnYXRpb24uc2hvd0Ryb3Bkb3duJyxcbiAgICAgIHJvdXRlLFxuICAgICAgZWxlbWVudCxcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgI3dyYXBwZXJcbiAgY2xhc3M9XCJuYXZpZ2F0aW9uXCJcbiAgKm5nSWY9XCJvcHRpb25zLnNjcmVlbiAhPT0gJ21vYmlsZSc7IGVsc2UgaGFtYnVyZ2VyXCI+XG4gIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uX3JvdXRlc1wiXG4gICAgICAgKm5nSWY9XCJlbGVtZW50LmRhdGE/LnJvdXRlc1wiXG4gID5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByb3V0ZSBvZiBlbGVtZW50LmRhdGEucm91dGVzXCI+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInJvdXRlPy5jaGlsZHJlbj8ubGVuZ3RoID8gcGFyZW50TGluayA6IHNpbXBsZUxpbmtcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3JvdXRlOnJvdXRlfVwiXG4gICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuPG5nLXRlbXBsYXRlICNoYW1idXJnZXI+XG4gIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uX2hhbWJ1cmdlclwiIChjbGljayk9XCJvcGVuTW9iaWxlTWVudSgpXCIgI21vYmlsZUJ1dHRvbldyYXBwZXI+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb25faGFtYnVyZ2VyX19idXR0b25cIiAjbW9iaWxlQnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cImxpbmUgdG9wXCIgI21vYmlsZUJ1dHRvbkxpbmU+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibGluZSBib3R0b21cIiAjbW9iaWxlQnV0dG9uTGluZT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI3NpbXBsZUxpbmsgbGV0LXJvdXRlPVwicm91dGVcIj5cbiAgPGEgY2xhc3M9XCJuYXZpZ2F0aW9uX3JvdXRlc19fZWxlbWVudFwiXG4gICAgIChjbGljayk9XCJyZWRpcmVjdFRvKHJvdXRlLnJvdXRlKVwiXG4gID5cbiAgICB7e3JvdXRlLnRpdGxlfX08L2E+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI3BhcmVudExpbmsgbGV0LXJvdXRlPVwicm91dGVcIiBsZXQtaW5kZXg9XCJpbmRleFwiPlxuICA8ZGl2IGNsYXNzPVwiZXhwYW5zaW9uLWxpbmtcIiAjZHJvcGRvd25MaW5rIChjbGljayk9XCJzaG93RHJvcGRvd24oZHJvcGRvd25MaW5rLCByb3V0ZSlcIj5cbiAgICA8YSBjbGFzcz1cIm5hdmlnYXRpb25fcm91dGVzX19lbGVtZW50XCI+XG4gICAgICB7e3JvdXRlLnRpdGxlfX1cbiAgICAgIDxzcGFuIGNsYXNzPVwiYXJyb3dcIj5cbiAgICAgIDxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjVcIiB2aWV3Qm94PVwiLTIuNSAtNSA3NSA2MFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMCwwIGwzNSw1MCBsMzUsLTUwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI1XCIvPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICAgIDwvYT5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19