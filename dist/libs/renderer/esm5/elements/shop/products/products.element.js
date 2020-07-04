import { __extends } from "tslib";
import { Component, HostBinding, Input, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebShopProductElement } from './product/product.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./product/product.element";
var _c0 = ["productsGridRef"];
function PebShopProductsElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Loading...");
    i0.ɵɵelementContainerEnd();
} }
function PebShopProductsElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Error");
    i0.ɵɵelementContainerEnd();
} }
function PebShopProductsElement_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Empty");
    i0.ɵɵelementContainerEnd();
} }
var _c1 = function (a1) { return { state: "ready", data: a1 }; };
function PebShopProductsElement_ng_container_4_peb_element_shop_product_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "peb-element-shop-product", 6);
} if (rf & 2) {
    var product_r605 = ctx.$implicit;
    var ctx_r604 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("element", ctx_r604.element)("options", ctx_r604.options)("context", i0.ɵɵpureFunction1(3, _c1, product_r605));
} }
function PebShopProductsElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3, 4);
    i0.ɵɵtemplate(3, PebShopProductsElement_ng_container_4_peb_element_shop_product_3_Template, 1, 5, "peb-element-shop-product", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r601 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r601.context == null ? null : ctx_r601.context.data);
} }
function PebShopProductsElement_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 7);
} }
var PebShopProductsElement = /** @class */ (function (_super) {
    __extends(PebShopProductsElement, _super);
    function PebShopProductsElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PebElementContextState = PebElementContextState;
        return _this;
    }
    Object.defineProperty(PebShopProductsElement.prototype, "elements", {
        get: function () {
            var _a, _b;
            return {
                host: this.nativeElement,
                productsGrid: (_a = this.productsGridRef) === null || _a === void 0 ? void 0 : _a.nativeElement,
                products: ((_b = this.productElements) === null || _b === void 0 ? void 0 : _b.toArray().map(function (a) { return a.nativeElement; })) || [],
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebShopProductsElement.prototype, "mappedStyles", {
        get: function () {
            var scale = this.options.scale;
            return {
                host: {
                    position: 'relative',
                    width: this.context.state === PebElementContextState.Ready ?
                        +this.styles.itemWidth * Math.ceil(this.context.data.length / +this.styles.rows) * scale + "px" :
                        null,
                    height: this.context.state === PebElementContextState.Ready ?
                        +this.styles.itemHeight * Math.ceil(this.context.data.length / +this.styles.columns) * scale + "px" :
                        null,
                    left: this.styles.left
                        ? (this.styles.left * scale) + 'px'
                        : null,
                    top: this.styles.to
                        ? (this.styles.top * scale) + 'px'
                        : null,
                },
                products: {
                    width: +this.styles.itemWidth * scale + "px",
                    height: +this.styles.itemHeight * scale + "px",
                },
                productsGrid: {
                    gridTemplateColumns: "repeat(" + this.styles.columns + ", minmax(" + +this.styles.itemWidth * scale + "px, 1fr))"
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    PebShopProductsElement.prototype.addToCart = function () {
        this.interact({
            type: 'product.add-to-cart',
            product: this.context.data,
        });
    };
    Object.defineProperty(PebShopProductsElement.prototype, "hostClass", {
        // @HostListener('click')
        // openProductPage() {
        //   if ((this.element as any).variant && this.context.state === 'ready') {
        //     this.interact({
        //       type: 'product.navigate-to-page',
        //       product: (this.context as any).data
        //     });
        //   }
        // }
        get: function () {
            var _a;
            return 'state-' + ((_a = this.context) === null || _a === void 0 ? void 0 : _a.state);
        },
        enumerable: true,
        configurable: true
    });
    // TODO: clean up after fix
    PebShopProductsElement.prototype.ngAfterViewInit = function () {
        this.applyStyles();
    };
    PebShopProductsElement.ɵfac = function PebShopProductsElement_Factory(t) { return ɵPebShopProductsElement_BaseFactory(t || PebShopProductsElement); };
    PebShopProductsElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebShopProductsElement, selectors: [["peb-element-shop-products"]], viewQuery: function PebShopProductsElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(PebShopProductElement, true, ElementRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.productsGridRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.productElements = _t);
        } }, hostVars: 2, hostBindings: function PebShopProductsElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.hostClass);
        } }, inputs: { element: "element", styles: "styles", context: "context" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "selected", 4, "ngIf"], [1, "products"], ["productsGridRef", ""], [3, "element", "options", "context", 4, "ngFor", "ngForOf"], [3, "element", "options", "context"], [1, "selected"]], template: function PebShopProductsElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, PebShopProductsElement_ng_container_1_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(2, PebShopProductsElement_ng_container_2_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(3, PebShopProductsElement_ng_container_3_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(4, PebShopProductsElement_ng_container_4_Template, 4, 1, "ng-container", 1);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(5, PebShopProductsElement_div_5_Template, 1, 0, "div", 2);
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
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.selected);
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgIf, i1.NgForOf, i2.PebShopProductElement], styles: ["[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:16px;position:relative}.state-loading[_nghost-%COMP%]{-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.products[_ngcontent-%COMP%]{display:-ms-grid;display:grid;width:100%;height:100%}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}.product[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;height:100%;cursor:pointer}.product__image[_ngcontent-%COMP%]{position:relative;width:calc(100% - 1.5em);min-height:calc(100% - 4.5em);background-size:100% 100%;background-repeat:no-repeat;background-position:center center;margin:0 auto}.product__content[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;flex-shrink:0;padding:10px;color:rgba(17,17,17,.6);display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:justify;justify-content:space-between;flex-wrap:wrap;height:4.5em;font-size:inherit;max-width:100%}.product__title[_ngcontent-%COMP%]{font-weight:600;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-box-flex:1;flex:1 1}.product__price[_ngcontent-%COMP%]{font-weight:300;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-box-flex:1;flex:1 1}.product__sale-price[_ngcontent-%COMP%]{position:absolute;left:0;bottom:1em;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#ce3535;background-color:#fff;font-weight:700}"] });
    return PebShopProductsElement;
}(PebAbstractElement));
export { PebShopProductsElement };
var ɵPebShopProductsElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopProductsElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebShopProductsElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-products',
                templateUrl: './products.element.html',
                styleUrls: ['./products.element.scss']
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], context: [{
            type: Input
        }], productsGridRef: [{
            type: ViewChild,
            args: ['productsGridRef']
        }], productElements: [{
            type: ViewChildren,
            args: [PebShopProductElement, { read: ElementRef }]
        }], hostClass: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0cy5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0cy5lbGVtZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBZ0Msc0JBQXNCLEVBQXFCLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztJQ0h6Ryw2QkFBNkQ7SUFBQSwwQkFBVTtJQUFBLDBCQUFlOzs7SUFDdEYsNkJBQTJEO0lBQUEscUJBQUs7SUFBQSwwQkFBZTs7O0lBQy9FLDZCQUEyRDtJQUFBLHFCQUFLO0lBQUEsMEJBQWU7Ozs7SUFHM0UsOENBSzRCOzs7O0lBSDFCLDBDQUFtQiw2QkFBQSxxREFBQTs7O0lBSnpCLDZCQUNFO0lBQUEsaUNBQ0U7SUFBQSxnSUFLQztJQUNILGlCQUFNO0lBQ1IsMEJBQWU7OztJQU5ULGVBQXFDO0lBQXJDLGlGQUFxQzs7O0lBUTdDLHlCQUE2Qzs7QURIN0M7SUFLNEMsMENBQWtCO0lBTDlEO1FBQUEscUVBOEVDO1FBakVDLDRCQUFzQixHQUFHLHNCQUFzQixDQUFDOztLQWlFakQ7SUEvREMsc0JBQUksNENBQVE7YUFBWjs7WUFDRSxPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDeEIsWUFBWSxRQUFFLElBQUksQ0FBQyxlQUFlLDBDQUFFLGFBQWE7Z0JBQ2pELFFB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QUMzRCx5RkFBMkQ7WUFDM0QseUZBQ0U7WUFTSiwwQkFBZTtZQUNmLHVFQUF1Qzs7WUFmekIsNENBQTBCO1lBQ3hCLGVBQThDO1lBQTlDLGlFQUE4QztZQUM5QyxlQUE0QztZQUE1QywrREFBNEM7WUFDNUMsZUFBNEM7WUFBNUMsK0RBQTRDO1lBQzVDLGVBQTRDO1lBQTVDLCtEQUE0QztZQVd2RCxlQUFnQjtZQUFoQixtQ0FBZ0I7O2lDRGZyQjtDQTBGQyxBQTlFRCxDQUs0QyxrQkFBa0IsR0F5RTdEO1NBekVZLHNCQUFzQjttRUFBdEIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxTQUFTO21CQUFDLGlCQUFpQjs7a0JBQzNCLFlBQVk7bUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOztrQkEwRHhELFdBQVc7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vcmVuZGVyZXIudHlwZXMnO1xuaW1wb3J0IHsgUGViU2hvcFByb2R1Y3RFbGVtZW50IH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJFbGVtZW50LCBQZWJFbGVtZW50U3R5bGVzLCBQZWJFbGVtZW50Q29udGV4dFN0YXRlLCBQZWJFbGVtZW50Q29udGV4dCB9IGZyb20gJ0BwZS9idWlsZGVyLWNvcmUnO1xuXG5pbnRlcmZhY2UgUHJvZHVjdEVsZW1lbnQgZXh0ZW5kcyBQZWJFbGVtZW50IHtcbiAgdmFyaWFudDogJ2xpbmsnfCdwdXJjaGFzZSc7XG59XG5cbnR5cGUgUHJvZHVjdHNDb250ZXh0ID0gUGViRWxlbWVudENvbnRleHQ8UHJvZHVjdFtdPjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtc2hvcC1wcm9kdWN0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0cy5lbGVtZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0cy5lbGVtZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQZWJTaG9wUHJvZHVjdHNFbGVtZW50IGV4dGVuZHMgUGViQWJzdHJhY3RFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGVsZW1lbnQ6IFByb2R1Y3RFbGVtZW50O1xuICBASW5wdXQoKSBzdHlsZXM6IFBlYkVsZW1lbnRTdHlsZXM7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IFByb2R1Y3RzQ29udGV4dDtcblxuICBAVmlld0NoaWxkKCdwcm9kdWN0c0dyaWRSZWYnKSBwcm9kdWN0c0dyaWRSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGRyZW4oUGViU2hvcFByb2R1Y3RFbGVtZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcHJvZHVjdEVsZW1lbnRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgUGViRWxlbWVudENvbnRleHRTdGF0ZSA9IFBlYkVsZW1lbnRDb250ZXh0U3RhdGU7XG5cbiAgZ2V0IGVsZW1lbnRzKCk6IHsgW2tleTogc3RyaW5nXTogSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICAgIHByb2R1Y3RzR3JpZDogdGhpcy5wcm9kdWN0c0dyaWRSZWY/Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICBwcm9kdWN0czogdGhpcy5wcm9kdWN0RWxlbWVudHM/LnRvQXJyYXkoKS5tYXAoYSA9PiBhLm5hdGl2ZUVsZW1lbnQpIHx8IFtdLFxuICAgIH07XG4gIH1cblxuICBnZXQgbWFwcGVkU3R5bGVzKCkge1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogdGhpcy5jb250ZXh0LnN0YXRlID09PSBQZWJFbGVtZW50Q29udGV4dFN0YXRlLlJlYWR5ID9cbiAgICAgICAgICBgJHsrdGhpcy5zdHlsZXMuaXRlbVdpZHRoICogTWF0aC5jZWlsKHRoaXMuY29udGV4dC5kYXRhLmxlbmd0aCAvICt0aGlzLnN0eWxlcy5yb3dzKSAqIHNjYWxlfXB4YCA6XG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbnRleHQuc3RhdGUgPT09IFBlYkVsZW1lbnRDb250ZXh0U3RhdGUuUmVhZHkgP1xuICAgICAgICAgIGAkeyt0aGlzLnN0eWxlcy5pdGVtSGVpZ2h0ICogTWF0aC5jZWlsKHRoaXMuY29udGV4dC5kYXRhLmxlbmd0aCAvICt0aGlzLnN0eWxlcy5jb2x1bW5zKSAqIHNjYWxlfXB4YCA6XG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgbGVmdDogdGhpcy5zdHlsZXMubGVmdFxuICAgICAgICAgID8gKHRoaXMuc3R5bGVzLmxlZnQgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgdG9wOiB0aGlzLnN0eWxlcy50b1xuICAgICAgICAgID8gKHRoaXMuc3R5bGVzLnRvcCBhcyBudW1iZXIgKiBzY2FsZSkgKyAncHgnXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgfSxcbiAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgIHdpZHRoOiBgJHsrdGhpcy5zdHlsZXMuaXRlbVdpZHRoICogc2NhbGV9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAkeyt0aGlzLnN0eWxlcy5pdGVtSGVpZ2h0ICogc2NhbGV9cHhgLFxuICAgICAgfSxcbiAgICAgIHByb2R1Y3RzR3JpZDoge1xuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KCR7dGhpcy5zdHlsZXMuY29sdW1uc30sIG1pbm1heCgkeyt0aGlzLnN0eWxlcy5pdGVtV2lkdGggKiBzY2FsZX1weCwgMWZyKSlgXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBhZGRUb0NhcnQoKSB7XG4gICAgdGhpcy5pbnRlcmFjdCh7XG4gICAgICB0eXBlOiAncHJvZHVjdC5hZGQtdG8tY2FydCcsXG4gICAgICBwcm9kdWN0OiAodGhpcy5jb250ZXh0IGFzIGFueSkuZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgLy8gb3BlblByb2R1Y3RQYWdlKCkge1xuICAvLyAgIGlmICgodGhpcy5lbGVtZW50IGFzIGFueSkudmFyaWFudCAmJiB0aGlzLmNvbnRleHQuc3RhdGUgPT09ICdyZWFkeScpIHtcbiAgLy8gICAgIHRoaXMuaW50ZXJhY3Qoe1xuICAvLyAgICAgICB0eXBlOiAncHJvZHVjdC5uYXZpZ2F0ZS10by1wYWdlJyxcbiAgLy8gICAgICAgcHJvZHVjdDogKHRoaXMuY29udGV4dCBhcyBhbnkpLmRhdGFcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzKCkge1xuICAgIHJldHVybiAnc3RhdGUtJyArIHRoaXMuY29udGV4dD8uc3RhdGU7XG4gIH1cblxuICAvLyBUT0RPOiBjbGVhbiB1cCBhZnRlciBmaXhcbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY29udGV4dC5zdGF0ZVwiPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLkxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuRXJyb3JcIj5FcnJvcjwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLkVtcHR5XCI+RW1wdHk8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5SZWFkeVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0c1wiICNwcm9kdWN0c0dyaWRSZWY+XG4gICAgICA8cGViLWVsZW1lbnQtc2hvcC1wcm9kdWN0XG4gICAgICAgICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIGNvbnRleHQ/LmRhdGFcIlxuICAgICAgICBbZWxlbWVudF09XCJlbGVtZW50XCJcbiAgICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAgIFtjb250ZXh0XT1cInsgc3RhdGU6ICdyZWFkeScsIGRhdGE6IHByb2R1Y3QgfVwiXG4gICAgICA+PC9wZWItZWxlbWVudC1zaG9wLXByb2R1Y3Q+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG48ZGl2ICpuZ0lmPVwic2VsZWN0ZWRcIiBjbGFzcz1cInNlbGVjdGVkXCI+PC9kaXY+XG4iXX0=