import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../icons/plus.icon";
function PebShopCategoryFiltersElement_ng_container_1_div_7_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r506 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function PebShopCategoryFiltersElement_ng_container_1_div_7_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r506); const childFilter_r504 = ctx.$implicit; const ctx_r505 = i0.ɵɵnextContext(3); return ctx_r505.onToggleFilter(childFilter_r504); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childFilter_r504 = ctx.$implicit;
    i0.ɵɵclassProp("filter-child--active", childFilter_r504 == null ? null : childFilter_r504.active);
    i0.ɵɵproperty("disabled", childFilter_r504 == null ? null : childFilter_r504.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(childFilter_r504 == null ? null : childFilter_r504.name);
} }
function PebShopCategoryFiltersElement_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "button", 9);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 10);
    i0.ɵɵelement(5, "peb-icon-plus");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PebShopCategoryFiltersElement_ng_container_1_div_7_button_6_Template, 3, 4, "button", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const parentFilter_r502 = ctx.$implicit;
    const ctx_r501 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("border-color", ctx_r501.styles == null ? null : ctx_r501.styles.borderColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(parentFilter_r502 == null ? null : parentFilter_r502.name);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("filter-icon--expanded", parentFilter_r502 == null ? null : parentFilter_r502.children == null ? null : parentFilter_r502.children.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", parentFilter_r502 == null ? null : parentFilter_r502.children);
} }
function PebShopCategoryFiltersElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r508 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function PebShopCategoryFiltersElement_ng_container_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r508); const ctx_r507 = i0.ɵɵnextContext(); return ctx_r507.onToggleShownFilters(); });
    i0.ɵɵelement(4, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 6);
    i0.ɵɵlistener("click", function PebShopCategoryFiltersElement_ng_container_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r508); const ctx_r509 = i0.ɵɵnextContext(); return ctx_r509.onToggleShownFilters(); });
    i0.ɵɵtext(6, " Done ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, PebShopCategoryFiltersElement_ng_container_1_div_7_Template, 7, 6, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r500 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r500.context.data.filters);
} }
export class PebShopCategoryFiltersElement extends PebAbstractElement {
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
PebShopCategoryFiltersElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebShopCategoryFiltersElement, selectors: [["peb-element-shop-category-filters"]], hostVars: 2, hostBindings: function PebShopCategoryFiltersElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.hostClass);
    } }, inputs: { context: "context" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "container"], [1, "mobile-controls"], [1, "mobile-control", 3, "click"], [1, "close-icon"], [1, "mobile-control", "mobile-control--black", 3, "click"], ["class", "filter-container", 3, "borderColor", 4, "ngFor", "ngForOf"], [1, "filter-container"], [1, "filter-parent"], [1, "filter-icon"], ["class", "filter-child", 3, "filter-child--active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "filter-child", 3, "disabled", "click"]], template: function PebShopCategoryFiltersElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PebShopCategoryFiltersElement_ng_container_1_Template, 8, 1, "ng-container", 1);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.context.state);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgForOf, i2.PebPlusIcon], styles: ["[_nghost-%COMP%]{display:block;position:-webkit-sticky;position:sticky;top:4.5em;width:159px;height:100%;padding:2.18rem}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{-webkit-transition:.2s;transition:.2s}[_nghost-%COMP%]   .filter-container[_ngcontent-%COMP%]{border-bottom:1px solid #d6d6d6}[_nghost-%COMP%]   .filter-parent[_ngcontent-%COMP%]{font-size:inherit;font-weight:500;padding:10px 5px 10px 0;width:100%;text-align:left;border:none;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;outline:0;cursor:pointer;text-transform:capitalize;background-color:transparent;color:unset}[_nghost-%COMP%]   .filter-parent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:8px}[_nghost-%COMP%]   .filter-child[_ngcontent-%COMP%]{font-size:inherit;font-weight:300;border:none;padding:4px 0;width:100%;text-align:left;outline:0;cursor:pointer;text-transform:capitalize;background-color:transparent;margin-bottom:3px;color:unset;white-space:nowrap}[_nghost-%COMP%]   .filter-child[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:8px}[_nghost-%COMP%]   .filter-child--active[_ngcontent-%COMP%]{background-color:#0000000d;color:#008eff}[_nghost-%COMP%]   .filter-child[_ngcontent-%COMP%]:last-of-type{margin-bottom:15px}[_nghost-%COMP%]   .filter-icon--expanded[_ngcontent-%COMP%]{position:relative;left:1px;-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}[_nghost-%COMP%]   .mobile-controls[_ngcontent-%COMP%]{display:none}.screen-mobile[_nghost-%COMP%]{position:fixed;z-index:999;display:block;background-color:#fff;top:0;left:0;width:calc(100vw - 60px);height:calc(100vh - 60px);border:15px solid #888;padding:15px}.screen-mobile[_nghost-%COMP%]   .filter-parent[_ngcontent-%COMP%]{padding:20px 5px 20px 0}.screen-mobile[_nghost-%COMP%]   .filter-child[_ngcontent-%COMP%]{padding:8px 0}.screen-mobile[_nghost-%COMP%]   .filter-child--last[_ngcontent-%COMP%]{margin-bottom:30px}.screen-mobile[_nghost-%COMP%]   .mobile-controls[_ngcontent-%COMP%]{display:block}.screen-mobile[_nghost-%COMP%]   .mobile-control[_ngcontent-%COMP%]{width:100%;background-color:#fff;font-size:17px;border:none;padding:8px 0}.screen-mobile[_nghost-%COMP%]   .mobile-control--black[_ngcontent-%COMP%]{background-color:#000;border-radius:5px;color:#fff;margin-top:15px;margin-bottom:10px}"], changeDetection: 0 });
const ɵPebShopCategoryFiltersElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopCategoryFiltersElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebShopCategoryFiltersElement, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktZmlsdGVycy5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaG9wL2NhdGVnb3J5L2NhdGVnb3J5LWZpbHRlcnMvY2F0ZWdvcnktZmlsdGVycy5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS1maWx0ZXJzL2NhdGVnb3J5LWZpbHRlcnMuZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFpQixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztJQ2lDbEQsa0NBT0U7SUFGQSw0UkFBcUM7SUFFckMsNEJBQU07SUFBQSxZQUF1QjtJQUFBLGlCQUFPO0lBQ3RDLGlCQUFTOzs7SUFMUCxpR0FBa0Q7SUFDbEQsc0ZBQWtDO0lBRzVCLGVBQXVCO0lBQXZCLDZFQUF1Qjs7O0lBdkJqQyw4QkFLRTtJQUFBLGlDQUdFO0lBQUEsNEJBQU07SUFBQSxZQUF3QjtJQUFBLGlCQUFPO0lBQ3JDLCtCQUlFO0lBQUEsZ0NBQStCO0lBQ2pDLGlCQUFNO0lBQ1IsaUJBQVM7SUFDVCwwR0FPRTtJQUVKLGlCQUFNOzs7O0lBdEJKLDRGQUF5QztJQUtqQyxlQUF3QjtJQUF4QiwrRUFBd0I7SUFHNUIsZUFBOEQ7SUFBOUQseUpBQThEO0lBTWhFLGVBQWtEO0lBQWxELHVGQUFrRDs7OztJQXBDMUQsNkJBQ0U7SUFBQSw4QkFFRTtJQUFBLDhCQUNFO0lBQUEsaUNBSUU7SUFGQSwwTkFBZ0M7SUFFaEMsMEJBQWdDO0lBQ2xDLGlCQUFTO0lBRVQsaUNBSUU7SUFGQSwwTkFBZ0M7SUFFaEMsc0JBQ0Y7SUFBQSxpQkFBUztJQUNYLGlCQUFNO0lBRU4sNkZBS0U7SUFxQkosaUJBQU07SUFDUiwwQkFBZTs7O0lBMUJULGVBQWlEO0lBQWpELHVEQUFpRDs7QURWekQsTUFBTSxPQUFPLDZCQUE4QixTQUFRLGtCQUFrQjtJQU5yRTs7UUFTRSwyQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztLQWtDakQ7SUFoQ0MsSUFBSSxRQUFRO1FBQ1YsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTtTQUN6QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksWUFBWTs7UUFDZCxPQUFPO1lBQ0wsSUFBSSxFQUFFO2dCQUNKLFdBQVcsUUFBRSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxXQUFXO2FBQ3RDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjO0lBRWQsQ0FBQztJQUVELG9CQUFvQjtJQUVwQixDQUFDO0lBRUQsa0RBQWtEO0lBQ2xELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQ0ksU0FBUztRQUNYLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7O2dKQW5DVSw2QkFBNkI7a0VBQTdCLDZCQUE2Qjs7O1FDWDFDLGdDQUNFO1FBQUEsZ0dBQ0U7UUE4Q0osMEJBQWU7O1FBaERELDRDQUEwQjtRQUN4QixlQUE0QztRQUE1QywrREFBNEM7OzRFRFUvQyw2QkFBNkI7a0RBQTdCLDZCQUE2QjtjQU56QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7Z0JBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxLQUFLOztrQkErQkwsV0FBVzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEFmdGVyVmlld0luaXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQcm9kdWN0Q29udGV4dCB9IGZyb20gJy4uL2NhdGVnb3J5LmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViRWxlbWVudENvbnRleHRTdGF0ZSB9IGZyb20gJ0BwZS9idWlsZGVyLWNvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZWItZWxlbWVudC1zaG9wLWNhdGVnb3J5LWZpbHRlcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2F0ZWdvcnktZmlsdGVycy5lbGVtZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXRlZ29yeS1maWx0ZXJzLmVsZW1lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQZWJTaG9wQ2F0ZWdvcnlGaWx0ZXJzRWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBjb250ZXh0OiBQcm9kdWN0Q29udGV4dDtcblxuICBQZWJFbGVtZW50Q29udGV4dFN0YXRlID0gUGViRWxlbWVudENvbnRleHRTdGF0ZTtcblxuICBnZXQgZWxlbWVudHMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W119IHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgIH07XG4gIH1cblxuICBnZXQgbWFwcGVkU3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGlzLnN0eWxlcz8uYm9yZGVyQ29sb3IsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBvblRvZ2dsZUZpbHRlcigpOiB2b2lkIHtcblxuICB9XG5cbiAgb25Ub2dnbGVTaG93bkZpbHRlcnMoKTogdm9pZCB7XG5cbiAgfVxuXG4gIC8vIFRPRE86IHJldHVybiBhZnRlciBjaGVja2luZyByZW5kZXJlcidzIHN0eWxpbmcuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzcygpIHtcbiAgICByZXR1cm4gJ3NjcmVlbi0nICsgdGhpcy5vcHRpb25zLnNjcmVlbjtcbiAgfVxuXG59XG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb250ZXh0LnN0YXRlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuUmVhZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtY29udHJvbHNcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwibW9iaWxlLWNvbnRyb2xcIlxuICAgICAgICAgIChjbGljayk9XCJvblRvZ2dsZVNob3duRmlsdGVycygpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwibW9iaWxlLWNvbnRyb2wgbW9iaWxlLWNvbnRyb2wtLWJsYWNrXCJcbiAgICAgICAgICAoY2xpY2spPVwib25Ub2dnbGVTaG93bkZpbHRlcnMoKVwiXG4gICAgICAgID5cbiAgICAgICAgICBEb25lXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nRm9yPVwibGV0IHBhcmVudEZpbHRlciBvZiBjb250ZXh0LmRhdGEuZmlsdGVyc1wiXG4gICAgICAgIGNsYXNzPVwiZmlsdGVyLWNvbnRhaW5lclwiXG4gICAgICAgIFtzdHlsZS5ib3JkZXJDb2xvcl09XCJzdHlsZXM/LmJvcmRlckNvbG9yXCJcbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiZmlsdGVyLXBhcmVudFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj57eyBwYXJlbnRGaWx0ZXI/Lm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJmaWx0ZXItaWNvblwiXG4gICAgICAgICAgICBbY2xhc3MuZmlsdGVyLWljb24tLWV4cGFuZGVkXT1cInBhcmVudEZpbHRlcj8uY2hpbGRyZW4/Lmxlbmd0aFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBlYi1pY29uLXBsdXM+PC9wZWItaWNvbi1wbHVzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjaGlsZEZpbHRlciBvZiBwYXJlbnRGaWx0ZXI/LmNoaWxkcmVuXCJcbiAgICAgICAgICBjbGFzcz1cImZpbHRlci1jaGlsZFwiXG4gICAgICAgICAgW2NsYXNzLmZpbHRlci1jaGlsZC0tYWN0aXZlXT1cImNoaWxkRmlsdGVyPy5hY3RpdmVcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJjaGlsZEZpbHRlcj8uZGlzYWJsZWRcIlxuICAgICAgICAgIChjbGljayk9XCJvblRvZ2dsZUZpbHRlcihjaGlsZEZpbHRlcilcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4+e3sgY2hpbGRGaWx0ZXI/Lm5hbWUgfX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=