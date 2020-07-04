import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["imageRef"];
function PebShopProductElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Loading...");
    i0.ɵɵelementContainerEnd();
} }
function PebShopProductElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Error");
    i0.ɵɵelementContainerEnd();
} }
function PebShopProductElement_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Empty");
    i0.ɵɵelementContainerEnd();
} }
function PebShopProductElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "div", 3, 4);
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵelementStart(8, "div", 8);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r596 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r596.context == null ? null : ctx_r596.context.data.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", ctx_r596.context == null ? null : ctx_r596.context.data.prices == null ? null : ctx_r596.context.data.prices.regular, "");
} }
var PebShopProductElement = /** @class */ (function (_super) {
    __extends(PebShopProductElement, _super);
    function PebShopProductElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PebElementContextState = PebElementContextState;
        return _this;
    }
    Object.defineProperty(PebShopProductElement.prototype, "elements", {
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
    Object.defineProperty(PebShopProductElement.prototype, "mappedStyles", {
        get: function () {
            return {
                host: {},
                image: {
                    backgroundImage: this.context.state === PebElementContextState.Ready ? "url('" + this.context.data.image + "')" : null,
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    PebShopProductElement.prototype.ngAfterViewInit = function () {
        this.applyStyles();
    };
    PebShopProductElement.ɵfac = function PebShopProductElement_Factory(t) { return ɵPebShopProductElement_BaseFactory(t || PebShopProductElement); };
    PebShopProductElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebShopProductElement, selectors: [["peb-element-shop-product"]], viewQuery: function PebShopProductElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.imageRef = _t.first);
        } }, inputs: { context: "context" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "product"], [1, "product__image"], ["imageRef", ""], [1, "product__content"], [1, "product__title"], [1, "product__price-container"], [1, "product__price"]], template: function PebShopProductElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, PebShopProductElement_ng_container_1_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(2, PebShopProductElement_ng_container_2_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(3, PebShopProductElement_ng_container_3_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(4, PebShopProductElement_ng_container_4_Template, 10, 2, "ng-container", 1);
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
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase], styles: ["[_nghost-%COMP%]{margin:auto}.product[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;height:100%;cursor:pointer}.product__image[_ngcontent-%COMP%]{position:relative;width:calc(100% - 1.5em);min-height:calc(100% - 4.5em);background-size:100% 100%;background-repeat:no-repeat;background-position:center center;margin:0 auto}.product__content[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;flex-shrink:0;padding:10px;color:rgba(17,17,17,.6);display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:justify;justify-content:space-between;flex-wrap:wrap;height:4.5em;font-size:inherit;max-width:100%}.product__title[_ngcontent-%COMP%]{font-weight:600;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-box-flex:1;flex:1 1}.product__price[_ngcontent-%COMP%]{font-weight:300;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-box-flex:1;flex:1 1}.product__sale-price[_ngcontent-%COMP%]{position:absolute;left:0;bottom:1em;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#ce3535;background-color:#fff;font-weight:700}"], changeDetection: 0 });
    return PebShopProductElement;
}(PebAbstractElement));
export { PebShopProductElement };
var ɵPebShopProductElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopProductElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebShopProductElement, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaG9wL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0L3Byb2R1Y3QuZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVoSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQXFCLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0lDRjNFLDZCQUE2RDtJQUFBLDBCQUFVO0lBQUEsMEJBQWU7OztJQUN0Riw2QkFBMkQ7SUFBQSxxQkFBSztJQUFBLDBCQUFlOzs7SUFDL0UsNkJBQTJEO0lBQUEscUJBQUs7SUFBQSwwQkFBZTs7O0lBQy9FLDZCQUNFO0lBQUEsOEJBQ0U7SUFBQSw0QkFBNEM7SUFDNUMsOEJBQ0U7SUFBQSw4QkFBNEI7SUFBQSxZQUF5QjtJQUFBLGlCQUFNO0lBQzNELDhCQUNFO0lBQUEsOEJBQTRCO0lBQUEsWUFBb0M7SUFBQSxpQkFBTTtJQUN4RSxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFDUiwwQkFBZTs7O0lBTm1CLGVBQXlCO0lBQXpCLG1GQUF5QjtJQUV2QixlQUFvQztJQUFwQyxvSkFBb0M7O0FESDFFO0lBTTJDLHlDQUFrQjtJQU43RDtRQUFBLHFFQWlDQztRQXRCQyw0QkFBc0IsR0FBRyxzQkFBc0IsQ0FBQzs7S0FzQmpEO0lBcEJDLHNCQUFJLDJDQUFRO2FBQVo7O1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ3hCLEtBQUssUUFBRSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxhQUFhO2FBQ3BDLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFZO2FBQWhCO1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsRUFBRTtnQkFDUixLQUFLLEVBQUU7b0JBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDbEg7YUFDRixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCwrQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7NEhBekJVLHFCQUFxQjs4REFBckIscUJBQXFCOzs7Ozs7WUNibEMsZ0NBQ0U7WUFBQSx3RkFBNkQ7WUFDN0Qsd0ZBQTJEO1lBQzNELHdGQUEyRDtZQUMzRCx5RkFDRTtZQVVKLDBCQUFlOztZQWZELDRDQUEwQjtZQUN4QixlQUE4QztZQUE5QyxpRUFBOEM7WUFDOUMsZUFBNEM7WUFBNUMsK0RBQTRDO1lBQzVDLGVBQTRDO1lBQTVDLCtEQUE0QztZQUM1QyxlQUE0QztZQUE1QywrREFBNEM7O2dDREo1RDtDQXdDQyxBQWpDRCxDQU0yQyxrQkFBa0IsR0EyQjVEO1NBM0JZLHFCQUFxQjtrRUFBckIscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBRUwsU0FBUzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL3JlbmRlcmVyLnR5cGVzJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYkVsZW1lbnRDb250ZXh0U3RhdGUsIFBlYkVsZW1lbnRDb250ZXh0IH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbnR5cGUgUHJvZHVjdENvbnRleHQgPSBQZWJFbGVtZW50Q29udGV4dDxQcm9kdWN0PjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtc2hvcC1wcm9kdWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QuZWxlbWVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC5lbGVtZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGViU2hvcFByb2R1Y3RFbGVtZW50IGV4dGVuZHMgUGViQWJzdHJhY3RFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IFByb2R1Y3RDb250ZXh0O1xuXG4gIEBWaWV3Q2hpbGQoJ2ltYWdlUmVmJykgaW1hZ2VSZWY6IEVsZW1lbnRSZWY7XG5cbiAgUGViRWxlbWVudENvbnRleHRTdGF0ZSA9IFBlYkVsZW1lbnRDb250ZXh0U3RhdGU7XG5cbiAgZ2V0IGVsZW1lbnRzKCk6IHsgW2tleTogc3RyaW5nXTogSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICAgIGltYWdlOiB0aGlzLmltYWdlUmVmPy5uYXRpdmVFbGVtZW50LFxuICAgIH07XG4gIH1cblxuICBnZXQgbWFwcGVkU3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB7fSxcbiAgICAgIGltYWdlOiB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogdGhpcy5jb250ZXh0LnN0YXRlID09PSBQZWJFbGVtZW50Q29udGV4dFN0YXRlLlJlYWR5ID8gYHVybCgnJHt0aGlzLmNvbnRleHQuZGF0YS5pbWFnZX0nKWAgOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgfVxuXG59XG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb250ZXh0LnN0YXRlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuTG9hZGluZ1wiPkxvYWRpbmcuLi48L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5FcnJvclwiPkVycm9yPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuRW1wdHlcIj5FbXB0eTwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLlJlYWR5XCI+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3RcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19pbWFnZVwiICNpbWFnZVJlZj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X190aXRsZVwiPnt7IGNvbnRleHQ/LmRhdGEudGl0bGUgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RfX3ByaWNlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19wcmljZVwiPiR7eyBjb250ZXh0Py5kYXRhLnByaWNlcz8ucmVndWxhciB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuIl19