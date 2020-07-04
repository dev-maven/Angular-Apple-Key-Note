import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../icons/plus.icon";
function PebShopCategoryFiltersElement_ng_container_1_div_7_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r582 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function PebShopCategoryFiltersElement_ng_container_1_div_7_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r582); var childFilter_r580 = ctx.$implicit; var ctx_r581 = i0.ɵɵnextContext(3); return ctx_r581.onToggleFilter(childFilter_r580); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var childFilter_r580 = ctx.$implicit;
    i0.ɵɵclassProp("filter-child--active", childFilter_r580 == null ? null : childFilter_r580.active);
    i0.ɵɵproperty("disabled", childFilter_r580 == null ? null : childFilter_r580.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(childFilter_r580 == null ? null : childFilter_r580.name);
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
    var parentFilter_r578 = ctx.$implicit;
    var ctx_r577 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("border-color", ctx_r577.styles == null ? null : ctx_r577.styles.borderColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(parentFilter_r578 == null ? null : parentFilter_r578.name);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("filter-icon--expanded", parentFilter_r578 == null ? null : parentFilter_r578.children == null ? null : parentFilter_r578.children.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", parentFilter_r578 == null ? null : parentFilter_r578.children);
} }
function PebShopCategoryFiltersElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r584 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function PebShopCategoryFiltersElement_ng_container_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r584); var ctx_r583 = i0.ɵɵnextContext(); return ctx_r583.onToggleShownFilters(); });
    i0.ɵɵelement(4, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 6);
    i0.ɵɵlistener("click", function PebShopCategoryFiltersElement_ng_container_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r584); var ctx_r585 = i0.ɵɵnextContext(); return ctx_r585.onToggleShownFilters(); });
    i0.ɵɵtext(6, " Done ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, PebShopCategoryFiltersElement_ng_container_1_div_7_Template, 7, 6, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r576 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r576.context.data.filters);
} }
var PebShopCategoryFiltersElement = /** @class */ (function (_super) {
    __extends(PebShopCategoryFiltersElement, _super);
    function PebShopCategoryFiltersElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PebElementContextState = PebElementContextState;
        return _this;
    }
    Object.defineProperty(PebShopCategoryFiltersElement.prototype, "elements", {
        get: function () {
            return {
                host: this.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebShopCategoryFiltersElement.prototype, "mappedStyles", {
        get: function () {
            var _a;
            return {
                host: {
                    borderColor: (_a = this.styles) === null || _a === void 0 ? void 0 : _a.borderColor,
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    PebShopCategoryFiltersElement.prototype.onToggleFilter = function () {
    };
    PebShopCategoryFiltersElement.prototype.onToggleShownFilters = function () {
    };
    // TODO: return after checking renderer's styling.
    PebShopCategoryFiltersElement.prototype.ngAfterViewInit = function () {
        this.applyStyles();
    };
    Object.defineProperty(PebShopCategoryFiltersElement.prototype, "hostClass", {
        get: function () {
            return 'screen-' + this.options.screen;
        },
        enumerable: true,
        configurable: true
    });
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
    return PebShopCategoryFiltersElement;
}(PebAbstractElement));
export { PebShopCategoryFiltersElement };
var ɵPebShopCategoryFiltersElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopCategoryFiltersElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktZmlsdGVycy5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaG9wL2NhdGVnb3J5L2NhdGVnb3J5LWZpbHRlcnMvY2F0ZWdvcnktZmlsdGVycy5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS1maWx0ZXJzL2NhdGVnb3J5LWZpbHRlcnMuZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBaUIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7SUNpQ2xELGtDQU9FO0lBRkEsd1JBQXFDO0lBRXJDLDRCQUFNO0lBQUEsWUFBdUI7SUFBQSxpQkFBTztJQUN0QyxpQkFBUzs7O0lBTFAsaUdBQWtEO0lBQ2xELHNGQUFrQztJQUc1QixlQUF1QjtJQUF2Qiw2RUFBdUI7OztJQXZCakMsOEJBS0U7SUFBQSxpQ0FHRTtJQUFBLDRCQUFNO0lBQUEsWUFBd0I7SUFBQSxpQkFBTztJQUNyQywrQkFJRTtJQUFBLGdDQUErQjtJQUNqQyxpQkFBTTtJQUNSLGlCQUFTO0lBQ1QsMEdBT0U7SUFFSixpQkFBTTs7OztJQXRCSiw0RkFBeUM7SUFLakMsZUFBd0I7SUFBeEIsK0VBQXdCO0lBRzVCLGVBQThEO0lBQTlELHlKQUE4RDtJQU1oRSxlQUFrRDtJQUFsRCx1RkFBa0Q7Ozs7SUFwQzFELDZCQUNFO0lBQUEsOEJBRUU7SUFBQSw4QkFDRTtJQUFBLGlDQUlFO0lBRkEsd05BQWdDO0lBRWhDLDBCQUFnQztJQUNsQyxpQkFBUztJQUVULGlDQUlFO0lBRkEsd05BQWdDO0lBRWhDLHNCQUNGO0lBQUEsaUJBQVM7SUFDWCxpQkFBTTtJQUVOLDZGQUtFO0lBcUJKLGlCQUFNO0lBQ1IsMEJBQWU7OztJQTFCVCxlQUFpRDtJQUFqRCx1REFBaUQ7O0FEaEJ6RDtJQU1tRCxpREFBa0I7SUFOckU7UUFBQSxxRUEyQ0M7UUFsQ0MsNEJBQXNCLEdBQUcsc0JBQXNCLENBQUM7O0tBa0NqRDtJQWhDQyxzQkFBSSxtREFBUTthQUFaO1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDekIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdURBQVk7YUFBaEI7O1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUU7b0JBQ0osV0FBVyxRQUFFLElBQUksQ0FBQyxNQUFNLDBDQUFFLFdBQVc7aUJBQ3RDO2FBQ0YsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0RBQWMsR0FBZDtJQUVBLENBQUM7SUFFRCw0REFBb0IsR0FBcEI7SUFFQSxDQUFDO0lBRUQsa0RBQWtEO0lBQ2xELHVEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHNCQUNJLG9EQUFTO2FBRGI7WUFFRSxPQUFPLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtvSkFuQ1UsNkJBQTZCO3NFQUE3Qiw2QkFBNkI7OztZQ1gxQyxnQ0FDRTtZQUFBLGdHQUNFO1lBOENKLDBCQUFlOztZQWhERCw0Q0FBMEI7WUFDeEIsZUFBNEM7WUFBNUMsK0RBQTRDOzt3Q0RENUQ7Q0FnREMsQUEzQ0QsQ0FNbUQsa0JBQWtCLEdBcUNwRTtTQXJDWSw2QkFBNkI7MEVBQTdCLDZCQUE2QjtrREFBN0IsNkJBQTZCO2NBTnpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztnQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLEtBQUs7O2tCQStCTCxXQUFXO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IFByb2R1Y3RDb250ZXh0IH0gZnJvbSAnLi4vY2F0ZWdvcnkuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJFbGVtZW50Q29udGV4dFN0YXRlIH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1lbGVtZW50LXNob3AtY2F0ZWdvcnktZmlsdGVycycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXRlZ29yeS1maWx0ZXJzLmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhdGVnb3J5LWZpbHRlcnMuZWxlbWVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBlYlNob3BDYXRlZ29yeUZpbHRlcnNFbGVtZW50IGV4dGVuZHMgUGViQWJzdHJhY3RFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IFByb2R1Y3RDb250ZXh0O1xuXG4gIFBlYkVsZW1lbnRDb250ZXh0U3RhdGUgPSBQZWJFbGVtZW50Q29udGV4dFN0YXRlO1xuXG4gIGdldCBlbGVtZW50cygpOiB7IFtrZXk6IHN0cmluZ106IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXX0ge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuc3R5bGVzPy5ib3JkZXJDb2xvcixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIG9uVG9nZ2xlRmlsdGVyKCk6IHZvaWQge1xuXG4gIH1cblxuICBvblRvZ2dsZVNob3duRmlsdGVycygpOiB2b2lkIHtcblxuICB9XG5cbiAgLy8gVE9ETzogcmV0dXJuIGFmdGVyIGNoZWNraW5nIHJlbmRlcmVyJ3Mgc3R5bGluZy5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzKCkge1xuICAgIHJldHVybiAnc2NyZWVuLScgKyB0aGlzLm9wdGlvbnMuc2NyZWVuO1xuICB9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbnRleHQuc3RhdGVcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5SZWFkeVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1vYmlsZS1jb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJtb2JpbGUtY29udHJvbFwiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uVG9nZ2xlU2hvd25GaWx0ZXJzKClcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZS1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJtb2JpbGUtY29udHJvbCBtb2JpbGUtY29udHJvbC0tYmxhY2tcIlxuICAgICAgICAgIChjbGljayk9XCJvblRvZ2dsZVNob3duRmlsdGVycygpXCJcbiAgICAgICAgPlxuICAgICAgICAgIERvbmVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICAqbmdGb3I9XCJsZXQgcGFyZW50RmlsdGVyIG9mIGNvbnRleHQuZGF0YS5maWx0ZXJzXCJcbiAgICAgICAgY2xhc3M9XCJmaWx0ZXItY29udGFpbmVyXCJcbiAgICAgICAgW3N0eWxlLmJvcmRlckNvbG9yXT1cInN0eWxlcz8uYm9yZGVyQ29sb3JcIlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJmaWx0ZXItcGFyZW50XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPnt7IHBhcmVudEZpbHRlcj8ubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImZpbHRlci1pY29uXCJcbiAgICAgICAgICAgIFtjbGFzcy5maWx0ZXItaWNvbi0tZXhwYW5kZWRdPVwicGFyZW50RmlsdGVyPy5jaGlsZHJlbj8ubGVuZ3RoXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGViLWljb24tcGx1cz48L3BlYi1pY29uLXBsdXM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNoaWxkRmlsdGVyIG9mIHBhcmVudEZpbHRlcj8uY2hpbGRyZW5cIlxuICAgICAgICAgIGNsYXNzPVwiZmlsdGVyLWNoaWxkXCJcbiAgICAgICAgICBbY2xhc3MuZmlsdGVyLWNoaWxkLS1hY3RpdmVdPVwiY2hpbGRGaWx0ZXI/LmFjdGl2ZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImNoaWxkRmlsdGVyPy5kaXNhYmxlZFwiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uVG9nZ2xlRmlsdGVyKGNoaWxkRmlsdGVyKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj57eyBjaGlsZEZpbHRlcj8ubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==