import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["imageRef"];
function PebShopCategoryProductElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Loading...");
    i0.ɵɵelementContainerEnd();
} }
function PebShopCategoryProductElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Error");
    i0.ɵɵelementContainerEnd();
} }
function PebShopCategoryProductElement_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Empty");
    i0.ɵɵelementContainerEnd();
} }
function PebShopCategoryProductElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 2, 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r569 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r569.context.data.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r569.context.data.prices.regular, " ");
} }
var PebShopCategoryProductElement = /** @class */ (function (_super) {
    __extends(PebShopCategoryProductElement, _super);
    function PebShopCategoryProductElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PebElementContextState = PebElementContextState;
        return _this;
    }
    Object.defineProperty(PebShopCategoryProductElement.prototype, "elements", {
        get: function () {
            var _a;
            return {
                host: this.nativeElement,
                image: (_a = this.imageRef) === null || _a === void 0 ? void 0 : _a.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebShopCategoryProductElement.prototype, "mappedStyles", {
        get: function () {
            var _a;
            return {
                host: {
                    borderColor: (_a = this.styles) === null || _a === void 0 ? void 0 : _a.borderColor,
                },
                image: {
                    backgroundImage: this.context.state === PebElementContextState.Ready ? "url('" + this.context.data.image + "')" : null,
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    // TODO: return after checking renderer's styling.
    PebShopCategoryProductElement.prototype.ngAfterViewInit = function () {
        this.applyStyles();
    };
    Object.defineProperty(PebShopCategoryProductElement.prototype, "hostClass", {
        get: function () {
            return 'screen-' + this.options.screen;
        },
        enumerable: true,
        configurable: true
    });
    PebShopCategoryProductElement.ɵfac = function PebShopCategoryProductElement_Factory(t) { return ɵPebShopCategoryProductElement_BaseFactory(t || PebShopCategoryProductElement); };
    PebShopCategoryProductElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebShopCategoryProductElement, selectors: [["peb-element-shop-category-product"]], viewQuery: function PebShopCategoryProductElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.imageRef = _t.first);
        } }, hostVars: 2, hostBindings: function PebShopCategoryProductElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.hostClass);
        } }, inputs: { context: "context" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "image"], ["imageRef", ""], [1, "info"], [1, "title"], [1, "price"]], template: function PebShopCategoryProductElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, PebShopCategoryProductElement_ng_container_1_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(2, PebShopCategoryProductElement_ng_container_2_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(3, PebShopCategoryProductElement_ng_container_3_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(4, PebShopCategoryProductElement_ng_container_4_Template, 8, 2, "ng-container", 1);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.context.state);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Error);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Empty);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase], styles: ["[_nghost-%COMP%]{height:500px;border-bottom:1px solid #d6d6d6;border-right:1px solid #d6d6d6;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;cursor:pointer}[_nghost-%COMP%]   .screen-mobile[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:175px}[_nghost-%COMP%]   .price[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:300;width:100%;text-align:center}[_nghost-%COMP%]   .price[_ngcontent-%COMP%]{padding-top:10px}[_nghost-%COMP%]   .image[_ngcontent-%COMP%]{height:60%;background-position:center;background-size:contain;background-repeat:no-repeat}[_nghost-%COMP%]   .image[_ngcontent-%COMP%], [_nghost-%COMP%]   .info[_ngcontent-%COMP%]{width:90%}"], changeDetection: 0 });
    return PebShopCategoryProductElement;
}(PebAbstractElement));
export { PebShopCategoryProductElement };
var ɵPebShopCategoryProductElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopCategoryProductElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebShopCategoryProductElement, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcHJvZHVjdC5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaG9wL2NhdGVnb3J5L2NhdGVnb3J5LXByb2R1Y3QvY2F0ZWdvcnktcHJvZHVjdC5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS1wcm9kdWN0L2NhdGVnb3J5LXByb2R1Y3QuZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFpQixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFekUsT0FBTyxFQUFFLHNCQUFzQixFQUFxQixNQUFNLGtCQUFrQixDQUFDOzs7OztJQ0YzRSw2QkFBNkQ7SUFBQSwwQkFBVTtJQUFBLDBCQUFlOzs7SUFDdEYsNkJBQTJEO0lBQUEscUJBQUs7SUFBQSwwQkFBZTs7O0lBQy9FLDZCQUEyRDtJQUFBLHFCQUFLO0lBQUEsMEJBQWU7OztJQUMvRSw2QkFDRTtJQUFBLDRCQUFtQztJQUNuQyw4QkFDRTtJQUFBLDhCQUFtQjtJQUFBLFlBQXdCO0lBQUEsaUJBQU07SUFDakQsOEJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQU07SUFDUixpQkFBTTtJQUNSLDBCQUFlOzs7SUFMUSxlQUF3QjtJQUF4QixpREFBd0I7SUFFekMsZUFDRjtJQURFLHFFQUNGOztBREhOO0lBTW1ELGlEQUFrQjtJQU5yRTtRQUFBLHFFQXlDQztRQTlCQyw0QkFBc0IsR0FBRyxzQkFBc0IsQ0FBQzs7S0E4QmpEO0lBNUJDLHNCQUFJLG1EQUFRO2FBQVo7O1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ3hCLEtBQUssUUFBRSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxhQUFhO2FBQ3BDLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVEQUFZO2FBQWhCOztZQUNFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLFdBQVcsUUFBRSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxXQUFXO2lCQUN0QztnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDbEg7YUFDRixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxrREFBa0Q7SUFDbEQsdURBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQ0ksb0RBQVM7YUFEYjtZQUVFLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO29KQWpDVSw2QkFBNkI7c0VBQTdCLDZCQUE2Qjs7Ozs7Ozs7WUNiMUMsZ0NBQ0U7WUFBQSxnR0FBNkQ7WUFDN0QsZ0dBQTJEO1lBQzNELGdHQUEyRDtZQUMzRCxnR0FDRTtZQVFKLDBCQUFlOztZQWJELDRDQUEwQjtZQUN4QixlQUE4QztZQUE5QyxpRUFBOEM7WUFDOUMsZUFBNEM7WUFBNUMsK0RBQTRDO1lBQzVDLGVBQTRDO1lBQTVDLCtEQUE0QztZQUM1QyxlQUE0QztZQUE1QywrREFBNEM7O3dDREo1RDtDQWdEQyxBQXpDRCxDQU1tRCxrQkFBa0IsR0FtQ3BFO1NBbkNZLDZCQUE2QjswRUFBN0IsNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FOekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2dCQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBRUwsU0FBUzttQkFBQyxVQUFVOztrQkEyQnBCLFdBQVc7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVuZGVyZXIudHlwZXMnO1xuaW1wb3J0IHsgUGViRWxlbWVudENvbnRleHRTdGF0ZSwgUGViRWxlbWVudENvbnRleHQgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcblxudHlwZSBDYXRlZ29yeVByb2R1Y3RDb250ZXh0ID0gUGViRWxlbWVudENvbnRleHQ8UHJvZHVjdD47XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1lbGVtZW50LXNob3AtY2F0ZWdvcnktcHJvZHVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXRlZ29yeS1wcm9kdWN0LmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhdGVnb3J5LXByb2R1Y3QuZWxlbWVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBlYlNob3BDYXRlZ29yeVByb2R1Y3RFbGVtZW50IGV4dGVuZHMgUGViQWJzdHJhY3RFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IENhdGVnb3J5UHJvZHVjdENvbnRleHQ7XG5cbiAgQFZpZXdDaGlsZCgnaW1hZ2VSZWYnKSBpbWFnZVJlZjogRWxlbWVudFJlZjtcblxuICBQZWJFbGVtZW50Q29udGV4dFN0YXRlID0gUGViRWxlbWVudENvbnRleHRTdGF0ZTtcblxuICBnZXQgZWxlbWVudHMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W119IHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2VSZWY/Lm5hdGl2ZUVsZW1lbnQsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuc3R5bGVzPy5ib3JkZXJDb2xvcixcbiAgICAgIH0sXG4gICAgICBpbWFnZToge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRoaXMuY29udGV4dC5zdGF0ZSA9PT0gUGViRWxlbWVudENvbnRleHRTdGF0ZS5SZWFkeSA/IGB1cmwoJyR7dGhpcy5jb250ZXh0LmRhdGEuaW1hZ2V9JylgIDogbnVsbCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRPRE86IHJldHVybiBhZnRlciBjaGVja2luZyByZW5kZXJlcidzIHN0eWxpbmcuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzcygpIHtcbiAgICByZXR1cm4gJ3NjcmVlbi0nICsgdGhpcy5vcHRpb25zLnNjcmVlbjtcbiAgfVxuXG59XG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb250ZXh0LnN0YXRlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuTG9hZGluZ1wiPkxvYWRpbmcuLi48L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5FcnJvclwiPkVycm9yPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuRW1wdHlcIj5FbXB0eTwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLlJlYWR5XCI+XG4gICAgPGRpdiBjbGFzcz1cImltYWdlXCIgI2ltYWdlUmVmPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj57eyBjb250ZXh0LmRhdGEudGl0bGUgfX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcmljZVwiPlxuICAgICAgICB7eyBjb250ZXh0LmRhdGEucHJpY2VzLnJlZ3VsYXIgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuIl19