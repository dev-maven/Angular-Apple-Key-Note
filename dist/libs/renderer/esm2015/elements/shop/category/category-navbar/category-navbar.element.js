import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../icons/filters.icon";
const _c0 = ["imageRef"];
function PebShopCategoryNavbarElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r499 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵlistener("click", function PebShopCategoryNavbarElement_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r499); const ctx_r498 = i0.ɵɵnextContext(); return ctx_r498.onToggleShownFilters(); });
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelement(3, "peb-icon-filters");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵtext(5, "Filter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label", 5);
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "Sort by:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "select", 6);
    i0.ɵɵelementStart(10, "option");
    i0.ɵɵtext(11, "Price: Low to High");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option");
    i0.ɵɵtext(13, "Price: High to Low");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
export class PebShopCategoryNavbarElement extends PebAbstractElement {
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
PebShopCategoryNavbarElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebShopCategoryNavbarElement, selectors: [["peb-element-shop-category-navbar"]], viewQuery: function PebShopCategoryNavbarElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.imageRef = _t.first);
    } }, hostVars: 2, hostBindings: function PebShopCategoryNavbarElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.hostClass);
    } }, inputs: { context: "context" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "navbar-button", 3, "click"], [1, "navbar-button__icon"], [1, "navbar-button__label"], [1, "navbar-button", "navbar-button--right"], [1, "navbar-select"]], template: function PebShopCategoryNavbarElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PebShopCategoryNavbarElement_ng_container_1_Template, 14, 0, "ng-container", 1);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.context.state);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i2.PebFiltersIcon], styles: ["[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;border-top:1px solid #d6d6d6;border-bottom:1px solid #d6d6d6;padding:0 2.18rem;position:-webkit-sticky;position:sticky;top:0;background-color:transparent;z-index:100;overflow:hidden}.navbar-button[_ngcontent-%COMP%]{display:-webkit-box;display:flex;font-size:inherit;font-weight:400;cursor:pointer;color:unset;padding:20px 0;-webkit-box-align:center;align-items:center}.navbar-button--right[_ngcontent-%COMP%]{margin-left:auto}.navbar-button--right[_ngcontent-%COMP%]   .navbar-button__label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.navbar-button--right[_ngcontent-%COMP%]   .navbar-button__label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#888}.navbar-button--right[_ngcontent-%COMP%]   .navbar-button__icon[_ngcontent-%COMP%]{width:10px}.navbar-button__label[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-left:5px}.navbar-button__icon[_ngcontent-%COMP%]{width:1em;height:1em}.navbar-select[_ngcontent-%COMP%]{background-color:transparent;border:none;color:unset;font-size:inherit;height:15px}.close-icon[_ngcontent-%COMP%]{display:block;width:30px;height:30px;cursor:pointer}.close-icon[_ngcontent-%COMP%]::before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close-icon[_ngcontent-%COMP%]::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.close-icon[_ngcontent-%COMP%]::after, .close-icon[_ngcontent-%COMP%]::before{position:absolute;left:15px;content:\" \";height:33px;width:2px;background-color:#888}"], changeDetection: 0 });
const ɵPebShopCategoryNavbarElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopCategoryNavbarElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebShopCategoryNavbarElement, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2YmFyLmVsZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3Nob3AvY2F0ZWdvcnkvY2F0ZWdvcnktbmF2YmFyL2NhdGVnb3J5LW5hdmJhci5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS1uYXZiYXIvY2F0ZWdvcnktbmF2YmFyLmVsZW1lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFpQixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7SUNGeEQsNkJBQ0U7SUFBQSw4QkFDRTtJQUR5QixzTkFBZ0M7SUFDekQsOEJBQ0U7SUFBQSxtQ0FBcUM7SUFDdkMsaUJBQU07SUFDTiw4QkFBa0M7SUFBQSxzQkFBTTtJQUFBLGlCQUFNO0lBQ2hELGlCQUFNO0lBQ04sZ0NBQ0U7SUFBQSw0QkFBTTtJQUFBLHdCQUFRO0lBQUEsaUJBQU87SUFDckIsaUNBQ0U7SUFBQSwrQkFBUTtJQUFBLG1DQUFrQjtJQUFBLGlCQUFTO0lBQ25DLCtCQUFRO0lBQUEsbUNBQWtCO0lBQUEsaUJBQVM7SUFDckMsaUJBQVM7SUFDWCxpQkFBUTtJQUNWLDBCQUFlOztBREpqQixNQUFNLE9BQU8sNEJBQTZCLFNBQVEsa0JBQWtCO0lBTnBFOztRQVdFLDJCQUFzQixHQUFHLHNCQUFzQixDQUFDO0tBOEJqRDtJQTVCQyxJQUFJLFFBQVE7UUFDVixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ3pCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxZQUFZOztRQUNkLE9BQU87WUFDTCxJQUFJLEVBQUU7Z0JBQ0osV0FBVyxRQUFFLElBQUksQ0FBQyxNQUFNLDBDQUFFLFdBQVc7YUFDdEM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELG9CQUFvQjtJQUVwQixDQUFDO0lBRUQsa0RBQWtEO0lBQ2xELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQ0ksU0FBUztRQUNYLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7OzZJQWpDVSw0QkFBNEI7aUVBQTVCLDRCQUE0Qjs7Ozs7Ozs7UUNYekMsZ0NBQ0U7UUFBQSxnR0FDRTtRQWNKLDBCQUFlOztRQWhCRCw0Q0FBMEI7UUFDeEIsZUFBNEM7UUFBNUMsK0RBQTRDOzsyRURVL0MsNEJBQTRCO2tEQUE1Qiw0QkFBNEI7Y0FOeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBRUwsU0FBUzttQkFBQyxVQUFVOztrQkEyQnBCLFdBQVc7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQcm9kdWN0Q29udGV4dCB9IGZyb20gJy4uL2NhdGVnb3J5LmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViRWxlbWVudENvbnRleHRTdGF0ZSB9IGZyb20gJ0BwZS9idWlsZGVyLWNvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZWItZWxlbWVudC1zaG9wLWNhdGVnb3J5LW5hdmJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXRlZ29yeS1uYXZiYXIuZWxlbWVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2F0ZWdvcnktbmF2YmFyLmVsZW1lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQZWJTaG9wQ2F0ZWdvcnlOYXZiYXJFbGVtZW50IGV4dGVuZHMgUGViQWJzdHJhY3RFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IFByb2R1Y3RDb250ZXh0O1xuXG4gIEBWaWV3Q2hpbGQoJ2ltYWdlUmVmJykgaW1hZ2VSZWY6IEVsZW1lbnRSZWY7XG5cbiAgUGViRWxlbWVudENvbnRleHRTdGF0ZSA9IFBlYkVsZW1lbnRDb250ZXh0U3RhdGU7XG5cbiAgZ2V0IGVsZW1lbnRzKCk6IHsgW2tleTogc3RyaW5nXTogSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG1hcHBlZFN0eWxlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhpcy5zdHlsZXM/LmJvcmRlckNvbG9yLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgb25Ub2dnbGVTaG93bkZpbHRlcnMoKTogdm9pZCB7XG5cbiAgfVxuXG4gIC8vIFRPRE86IHJldHVybiBhZnRlciBjaGVja2luZyByZW5kZXJlcidzIHN0eWxpbmcuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzcygpIHtcbiAgICByZXR1cm4gJ3NjcmVlbi0nICsgdGhpcy5vcHRpb25zLnNjcmVlbjtcbiAgfVxuXG59XG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb250ZXh0LnN0YXRlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuUmVhZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWJ1dHRvblwiIChjbGljayk9XCJvblRvZ2dsZVNob3duRmlsdGVycygpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWJ1dHRvbl9faWNvblwiPlxuICAgICAgICA8cGViLWljb24tZmlsdGVycz48L3BlYi1pY29uLWZpbHRlcnM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItYnV0dG9uX19sYWJlbFwiPkZpbHRlcjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxsYWJlbCBjbGFzcz1cIm5hdmJhci1idXR0b24gbmF2YmFyLWJ1dHRvbi0tcmlnaHRcIj5cbiAgICAgIDxzcGFuPlNvcnQgYnk6PC9zcGFuPlxuICAgICAgPHNlbGVjdCBjbGFzcz1cIm5hdmJhci1zZWxlY3RcIj5cbiAgICAgICAgPG9wdGlvbj5QcmljZTogTG93IHRvIEhpZ2g8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbj5QcmljZTogSGlnaCB0byBMb3c8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvbGFiZWw+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=