import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["imageRef"];
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
    const ctx_r520 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r520.context == null ? null : ctx_r520.context.data.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", ctx_r520.context == null ? null : ctx_r520.context.data.prices == null ? null : ctx_r520.context.data.prices.regular, "");
} }
export class PebShopProductElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    get elements() {
        var _a;
        return {
            host: this.nativeElement,
            image: (_a = this.imageRef) === null || _a === void 0 ? void 0 : _a.nativeElement,
        };
    }
    get mappedStyles() {
        return {
            host: {},
            image: {
                backgroundImage: this.context.state === PebElementContextState.Ready ? `url('${this.context.data.image}')` : null,
            },
        };
    }
    ngAfterViewInit() {
        this.applyStyles();
    }
}
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
const ɵPebShopProductElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopProductElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaG9wL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0L3Byb2R1Y3QuZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRWhILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7SUNGM0UsNkJBQTZEO0lBQUEsMEJBQVU7SUFBQSwwQkFBZTs7O0lBQ3RGLDZCQUEyRDtJQUFBLHFCQUFLO0lBQUEsMEJBQWU7OztJQUMvRSw2QkFBMkQ7SUFBQSxxQkFBSztJQUFBLDBCQUFlOzs7SUFDL0UsNkJBQ0U7SUFBQSw4QkFDRTtJQUFBLDRCQUE0QztJQUM1Qyw4QkFDRTtJQUFBLDhCQUE0QjtJQUFBLFlBQXlCO0lBQUEsaUJBQU07SUFDM0QsOEJBQ0U7SUFBQSw4QkFBNEI7SUFBQSxZQUFvQztJQUFBLGlCQUFNO0lBQ3hFLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTtJQUNSLDBCQUFlOzs7SUFObUIsZUFBeUI7SUFBekIsbUZBQXlCO0lBRXZCLGVBQW9DO0lBQXBDLG9KQUFvQzs7QURHMUUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGtCQUFrQjtJQU43RDs7UUFXRSwyQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztLQXNCakQ7SUFwQkMsSUFBSSxRQUFROztRQUNWLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDeEIsS0FBSyxRQUFFLElBQUksQ0FBQyxRQUFRLDBDQUFFLGFBQWE7U0FDcEMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPO1lBQ0wsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUU7Z0JBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTthQUNsSDtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzt3SEF6QlUscUJBQXFCOzBEQUFyQixxQkFBcUI7Ozs7OztRQ2JsQyxnQ0FDRTtRQUFBLHdGQUE2RDtRQUM3RCx3RkFBMkQ7UUFDM0Qsd0ZBQTJEO1FBQzNELHlGQUNFO1FBVUosMEJBQWU7O1FBZkQsNENBQTBCO1FBQ3hCLGVBQThDO1FBQTlDLGlFQUE4QztRQUM5QyxlQUE0QztRQUE1QywrREFBNEM7UUFDNUMsZUFBNEM7UUFBNUMsK0RBQTRDO1FBQzVDLGVBQTRDO1FBQTVDLCtEQUE0Qzs7b0VEUy9DLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLEtBQUs7O2tCQUVMLFNBQVM7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi8uLi9yZW5kZXJlci50eXBlcyc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJFbGVtZW50Q29udGV4dFN0YXRlLCBQZWJFbGVtZW50Q29udGV4dCB9IGZyb20gJ0BwZS9idWlsZGVyLWNvcmUnO1xuXG50eXBlIFByb2R1Y3RDb250ZXh0ID0gUGViRWxlbWVudENvbnRleHQ8UHJvZHVjdD47XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1lbGVtZW50LXNob3AtcHJvZHVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QuZWxlbWVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBlYlNob3BQcm9kdWN0RWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBjb250ZXh0OiBQcm9kdWN0Q29udGV4dDtcblxuICBAVmlld0NoaWxkKCdpbWFnZVJlZicpIGltYWdlUmVmOiBFbGVtZW50UmVmO1xuXG4gIFBlYkVsZW1lbnRDb250ZXh0U3RhdGUgPSBQZWJFbGVtZW50Q29udGV4dFN0YXRlO1xuXG4gIGdldCBlbGVtZW50cygpOiB7IFtrZXk6IHN0cmluZ106IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXX0ge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbWFnZTogdGhpcy5pbWFnZVJlZj8ubmF0aXZlRWxlbWVudCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG1hcHBlZFN0eWxlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDoge30sXG4gICAgICBpbWFnZToge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRoaXMuY29udGV4dC5zdGF0ZSA9PT0gUGViRWxlbWVudENvbnRleHRTdGF0ZS5SZWFkeSA/IGB1cmwoJyR7dGhpcy5jb250ZXh0LmRhdGEuaW1hZ2V9JylgIDogbnVsbCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gIH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY29udGV4dC5zdGF0ZVwiPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLkxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuRXJyb3JcIj5FcnJvcjwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLkVtcHR5XCI+RW1wdHk8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5SZWFkeVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9faW1hZ2VcIiAjaW1hZ2VSZWY+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9fY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9fdGl0bGVcIj57eyBjb250ZXh0Py5kYXRhLnRpdGxlIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X19wcmljZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9fcHJpY2VcIj4ke3sgY29udGV4dD8uZGF0YS5wcmljZXM/LnJlZ3VsYXIgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==