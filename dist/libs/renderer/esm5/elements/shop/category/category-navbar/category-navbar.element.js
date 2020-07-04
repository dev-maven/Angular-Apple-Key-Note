import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../icons/filters.icon";
var _c0 = ["imageRef"];
function PebShopCategoryNavbarElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r575 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵlistener("click", function PebShopCategoryNavbarElement_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r575); var ctx_r574 = i0.ɵɵnextContext(); return ctx_r574.onToggleShownFilters(); });
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
var PebShopCategoryNavbarElement = /** @class */ (function (_super) {
    __extends(PebShopCategoryNavbarElement, _super);
    function PebShopCategoryNavbarElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PebElementContextState = PebElementContextState;
        return _this;
    }
    Object.defineProperty(PebShopCategoryNavbarElement.prototype, "elements", {
        get: function () {
            return {
                host: this.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebShopCategoryNavbarElement.prototype, "mappedStyles", {
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
    PebShopCategoryNavbarElement.prototype.onToggleShownFilters = function () {
    };
    // TODO: return after checking renderer's styling.
    PebShopCategoryNavbarElement.prototype.ngAfterViewInit = function () {
        this.applyStyles();
    };
    Object.defineProperty(PebShopCategoryNavbarElement.prototype, "hostClass", {
        get: function () {
            return 'screen-' + this.options.screen;
        },
        enumerable: true,
        configurable: true
    });
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
    return PebShopCategoryNavbarElement;
}(PebAbstractElement));
export { PebShopCategoryNavbarElement };
var ɵPebShopCategoryNavbarElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopCategoryNavbarElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2YmFyLmVsZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3Nob3AvY2F0ZWdvcnkvY2F0ZWdvcnktbmF2YmFyL2NhdGVnb3J5LW5hdmJhci5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS1uYXZiYXIvY2F0ZWdvcnktbmF2YmFyLmVsZW1lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBaUIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7O0lDRnhELDZCQUNFO0lBQUEsOEJBQ0U7SUFEeUIsb05BQWdDO0lBQ3pELDhCQUNFO0lBQUEsbUNBQXFDO0lBQ3ZDLGlCQUFNO0lBQ04sOEJBQWtDO0lBQUEsc0JBQU07SUFBQSxpQkFBTTtJQUNoRCxpQkFBTTtJQUNOLGdDQUNFO0lBQUEsNEJBQU07SUFBQSx3QkFBUTtJQUFBLGlCQUFPO0lBQ3JCLGlDQUNFO0lBQUEsK0JBQVE7SUFBQSxtQ0FBa0I7SUFBQSxpQkFBUztJQUNuQywrQkFBUTtJQUFBLG1DQUFrQjtJQUFBLGlCQUFTO0lBQ3JDLGlCQUFTO0lBQ1gsaUJBQVE7SUFDViwwQkFBZTs7QURWakI7SUFNa0QsZ0RBQWtCO0lBTnBFO1FBQUEscUVBeUNDO1FBOUJDLDRCQUFzQixHQUFHLHNCQUFzQixDQUFDOztLQThCakQ7SUE1QkMsc0JBQUksa0RBQVE7YUFBWjtZQUNFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO2FBQ3pCLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNEQUFZO2FBQWhCOztZQUNFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLFdBQVcsUUFBRSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxXQUFXO2lCQUN0QzthQUNGLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELDJEQUFvQixHQUFwQjtJQUVBLENBQUM7SUFFRCxrREFBa0Q7SUFDbEQsc0RBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQ0ksbURBQVM7YUFEYjtZQUVFLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO2lKQWpDVSw0QkFBNEI7cUVBQTVCLDRCQUE0Qjs7Ozs7Ozs7WUNYekMsZ0NBQ0U7WUFBQSxnR0FDRTtZQWNKLDBCQUFlOztZQWhCRCw0Q0FBMEI7WUFDeEIsZUFBNEM7WUFBNUMsK0RBQTRDOzt1Q0RENUQ7Q0E4Q0MsQUF6Q0QsQ0FNa0Qsa0JBQWtCLEdBbUNuRTtTQW5DWSw0QkFBNEI7eUVBQTVCLDRCQUE0QjtrREFBNUIsNEJBQTRCO2NBTnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLEtBQUs7O2tCQUVMLFNBQVM7bUJBQUMsVUFBVTs7a0JBMkJwQixXQUFXO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGViQWJzdHJhY3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdENvbnRleHQgfSBmcm9tICcuLi9jYXRlZ29yeS5lbGVtZW50JztcbmltcG9ydCB7IFBlYkVsZW1lbnRDb250ZXh0U3RhdGUgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtc2hvcC1jYXRlZ29yeS1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2F0ZWdvcnktbmF2YmFyLmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhdGVnb3J5LW5hdmJhci5lbGVtZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGViU2hvcENhdGVnb3J5TmF2YmFyRWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBjb250ZXh0OiBQcm9kdWN0Q29udGV4dDtcblxuICBAVmlld0NoaWxkKCdpbWFnZVJlZicpIGltYWdlUmVmOiBFbGVtZW50UmVmO1xuXG4gIFBlYkVsZW1lbnRDb250ZXh0U3RhdGUgPSBQZWJFbGVtZW50Q29udGV4dFN0YXRlO1xuXG4gIGdldCBlbGVtZW50cygpOiB7IFtrZXk6IHN0cmluZ106IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXX0ge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuc3R5bGVzPy5ib3JkZXJDb2xvcixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIG9uVG9nZ2xlU2hvd25GaWx0ZXJzKCk6IHZvaWQge1xuXG4gIH1cblxuICAvLyBUT0RPOiByZXR1cm4gYWZ0ZXIgY2hlY2tpbmcgcmVuZGVyZXIncyBzdHlsaW5nLlxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3MoKSB7XG4gICAgcmV0dXJuICdzY3JlZW4tJyArIHRoaXMub3B0aW9ucy5zY3JlZW47XG4gIH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY29udGV4dC5zdGF0ZVwiPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLlJlYWR5XCI+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhci1idXR0b25cIiAoY2xpY2spPVwib25Ub2dnbGVTaG93bkZpbHRlcnMoKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1idXR0b25fX2ljb25cIj5cbiAgICAgICAgPHBlYi1pY29uLWZpbHRlcnM+PC9wZWItaWNvbi1maWx0ZXJzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWJ1dHRvbl9fbGFiZWxcIj5GaWx0ZXI8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bGFiZWwgY2xhc3M9XCJuYXZiYXItYnV0dG9uIG5hdmJhci1idXR0b24tLXJpZ2h0XCI+XG4gICAgICA8c3Bhbj5Tb3J0IGJ5Ojwvc3Bhbj5cbiAgICAgIDxzZWxlY3QgY2xhc3M9XCJuYXZiYXItc2VsZWN0XCI+XG4gICAgICAgIDxvcHRpb24+UHJpY2U6IExvdyB0byBIaWdoPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24+UHJpY2U6IEhpZ2ggdG8gTG93PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2xhYmVsPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuIl19