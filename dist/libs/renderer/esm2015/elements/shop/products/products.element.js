import { Component, HostBinding, Input, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebShopProductElement } from './product/product.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./product/product.element";
const _c0 = ["productsGridRef"];
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
const _c1 = function (a1) { return { state: "ready", data: a1 }; };
function PebShopProductsElement_ng_container_4_peb_element_shop_product_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "peb-element-shop-product", 6);
} if (rf & 2) {
    const product_r529 = ctx.$implicit;
    const ctx_r528 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("element", ctx_r528.element)("options", ctx_r528.options)("context", i0.ɵɵpureFunction1(3, _c1, product_r529));
} }
function PebShopProductsElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3, 4);
    i0.ɵɵtemplate(3, PebShopProductsElement_ng_container_4_peb_element_shop_product_3_Template, 1, 5, "peb-element-shop-product", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r525 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r525.context == null ? null : ctx_r525.context.data);
} }
function PebShopProductsElement_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 7);
} }
export class PebShopProductsElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    get elements() {
        var _a, _b;
        return {
            host: this.nativeElement,
            productsGrid: (_a = this.productsGridRef) === null || _a === void 0 ? void 0 : _a.nativeElement,
            products: ((_b = this.productElements) === null || _b === void 0 ? void 0 : _b.toArray().map(a => a.nativeElement)) || [],
        };
    }
    get mappedStyles() {
        const { scale } = this.options;
        return {
            host: {
                position: 'relative',
                width: this.context.state === PebElementContextState.Ready ?
                    `${+this.styles.itemWidth * Math.ceil(this.context.data.length / +this.styles.rows) * scale}px` :
                    null,
                height: this.context.state === PebElementContextState.Ready ?
                    `${+this.styles.itemHeight * Math.ceil(this.context.data.length / +this.styles.columns) * scale}px` :
                    null,
                left: this.styles.left
                    ? (this.styles.left * scale) + 'px'
                    : null,
                top: this.styles.to
                    ? (this.styles.top * scale) + 'px'
                    : null,
            },
            products: {
                width: `${+this.styles.itemWidth * scale}px`,
                height: `${+this.styles.itemHeight * scale}px`,
            },
            productsGrid: {
                gridTemplateColumns: `repeat(${this.styles.columns}, minmax(${+this.styles.itemWidth * scale}px, 1fr))`
            },
        };
    }
    addToCart() {
        this.interact({
            type: 'product.add-to-cart',
            product: this.context.data,
        });
    }
    // @HostListener('click')
    // openProductPage() {
    //   if ((this.element as any).variant && this.context.state === 'ready') {
    //     this.interact({
    //       type: 'product.navigate-to-page',
    //       product: (this.context as any).data
    //     });
    //   }
    // }
    get hostClass() {
        var _a;
        return 'state-' + ((_a = this.context) === null || _a === void 0 ? void 0 : _a.state);
    }
    // TODO: clean up after fix
    ngAfterViewInit() {
        this.applyStyles();
    }
}
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
const ɵPebShopProductsElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopProductsElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0cy5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0cy5lbGVtZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFnQyxzQkFBc0IsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0lDSHpHLDZCQUE2RDtJQUFBLDBCQUFVO0lBQUEsMEJBQWU7OztJQUN0Riw2QkFBMkQ7SUFBQSxxQkFBSztJQUFBLDBCQUFlOzs7SUFDL0UsNkJBQTJEO0lBQUEscUJBQUs7SUFBQSwwQkFBZTs7OztJQUczRSw4Q0FLNEI7Ozs7SUFIMUIsMENBQW1CLDZCQUFBLHFEQUFBOzs7SUFKekIsNkJBQ0U7SUFBQSxpQ0FDRTtJQUFBLGdJQUtDO0lBQ0gsaUJBQU07SUFDUiwwQkFBZTs7O0lBTlQsZUFBcUM7SUFBckMsaUZBQXFDOzs7SUFRN0MseUJBQTZDOztBREU3QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsa0JBQWtCO0lBTDlEOztRQWFFLDJCQUFzQixHQUFHLHNCQUFzQixDQUFDO0tBaUVqRDtJQS9EQyxJQUFJLFFBQVE7O1FBQ1YsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTtZQUN4QixZQUFZLFFBQUUsSUFBSSxDQUFDLGVBQWUsMENBQUUsYUFBYTtZQUNqRCxRQUFRLEVBQUUs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UUFTSiwwQkFBZTtRQUNmLHVFQUF1Qzs7UUFmekIsNENBQTBCO1FBQ3hCLGVBQThDO1FBQTlDLGlFQUE4QztRQUM5QyxlQUE0QztRQUE1QywrREFBNEM7UUFDNUMsZUFBNEM7UUFBNUMsK0RBQTRDO1FBQzVDLGVBQTRDO1FBQTVDLCtEQUE0QztRQVd2RCxlQUFnQjtRQUFoQixtQ0FBZ0I7O3FFREVSLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsU0FBUzttQkFBQyxpQkFBaUI7O2tCQUMzQixZQUFZO21CQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7a0JBMER4RCxXQUFXO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGViQWJzdHJhY3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL3JlbmRlcmVyLnR5cGVzJztcbmltcG9ydCB7IFBlYlNob3BQcm9kdWN0RWxlbWVudCB9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViRWxlbWVudCwgUGViRWxlbWVudFN0eWxlcywgUGViRWxlbWVudENvbnRleHRTdGF0ZSwgUGViRWxlbWVudENvbnRleHQgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcblxuaW50ZXJmYWNlIFByb2R1Y3RFbGVtZW50IGV4dGVuZHMgUGViRWxlbWVudCB7XG4gIHZhcmlhbnQ6ICdsaW5rJ3wncHVyY2hhc2UnO1xufVxuXG50eXBlIFByb2R1Y3RzQ29udGV4dCA9IFBlYkVsZW1lbnRDb250ZXh0PFByb2R1Y3RbXT47XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1lbGVtZW50LXNob3AtcHJvZHVjdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdHMuZWxlbWVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdHMuZWxlbWVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGViU2hvcFByb2R1Y3RzRWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBlbGVtZW50OiBQcm9kdWN0RWxlbWVudDtcbiAgQElucHV0KCkgc3R5bGVzOiBQZWJFbGVtZW50U3R5bGVzO1xuICBASW5wdXQoKSBjb250ZXh0OiBQcm9kdWN0c0NvbnRleHQ7XG5cbiAgQFZpZXdDaGlsZCgncHJvZHVjdHNHcmlkUmVmJykgcHJvZHVjdHNHcmlkUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkcmVuKFBlYlNob3BQcm9kdWN0RWxlbWVudCwgeyByZWFkOiBFbGVtZW50UmVmIH0pIHByb2R1Y3RFbGVtZW50czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIFBlYkVsZW1lbnRDb250ZXh0U3RhdGUgPSBQZWJFbGVtZW50Q29udGV4dFN0YXRlO1xuXG4gIGdldCBlbGVtZW50cygpOiB7IFtrZXk6IHN0cmluZ106IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXX0ge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBwcm9kdWN0c0dyaWQ6IHRoaXMucHJvZHVjdHNHcmlkUmVmPy5uYXRpdmVFbGVtZW50LFxuICAgICAgcHJvZHVjdHM6IHRoaXMucHJvZHVjdEVsZW1lbnRzPy50b0FycmF5KCkubWFwKGEgPT4gYS5uYXRpdmVFbGVtZW50KSB8fCBbXSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG1hcHBlZFN0eWxlcygpIHtcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHRoaXMuY29udGV4dC5zdGF0ZSA9PT0gUGViRWxlbWVudENvbnRleHRTdGF0ZS5SZWFkeSA/XG4gICAgICAgICAgYCR7K3RoaXMuc3R5bGVzLml0ZW1XaWR0aCAqIE1hdGguY2VpbCh0aGlzLmNvbnRleHQuZGF0YS5sZW5ndGggLyArdGhpcy5zdHlsZXMucm93cykgKiBzY2FsZX1weGAgOlxuICAgICAgICAgIG51bGwsXG4gICAgICAgIGhlaWdodDogdGhpcy5jb250ZXh0LnN0YXRlID09PSBQZWJFbGVtZW50Q29udGV4dFN0YXRlLlJlYWR5ID9cbiAgICAgICAgICBgJHsrdGhpcy5zdHlsZXMuaXRlbUhlaWdodCAqIE1hdGguY2VpbCh0aGlzLmNvbnRleHQuZGF0YS5sZW5ndGggLyArdGhpcy5zdHlsZXMuY29sdW1ucykgKiBzY2FsZX1weGAgOlxuICAgICAgICAgIG51bGwsXG4gICAgICAgIGxlZnQ6IHRoaXMuc3R5bGVzLmxlZnRcbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy5sZWZ0IGFzIG51bWJlciAqIHNjYWxlKSArICdweCdcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIHRvcDogdGhpcy5zdHlsZXMudG9cbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy50b3AgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBwcm9kdWN0czoge1xuICAgICAgICB3aWR0aDogYCR7K3RoaXMuc3R5bGVzLml0ZW1XaWR0aCAqIHNjYWxlfXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHsrdGhpcy5zdHlsZXMuaXRlbUhlaWdodCAqIHNjYWxlfXB4YCxcbiAgICAgIH0sXG4gICAgICBwcm9kdWN0c0dyaWQ6IHtcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogYHJlcGVhdCgke3RoaXMuc3R5bGVzLmNvbHVtbnN9LCBtaW5tYXgoJHsrdGhpcy5zdHlsZXMuaXRlbVdpZHRoICogc2NhbGV9cHgsIDFmcikpYFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYWRkVG9DYXJ0KCkge1xuICAgIHRoaXMuaW50ZXJhY3Qoe1xuICAgICAgdHlwZTogJ3Byb2R1Y3QuYWRkLXRvLWNhcnQnLFxuICAgICAgcHJvZHVjdDogKHRoaXMuY29udGV4dCBhcyBhbnkpLmRhdGEsXG4gICAgfSk7XG4gIH1cblxuICAvLyBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIC8vIG9wZW5Qcm9kdWN0UGFnZSgpIHtcbiAgLy8gICBpZiAoKHRoaXMuZWxlbWVudCBhcyBhbnkpLnZhcmlhbnQgJiYgdGhpcy5jb250ZXh0LnN0YXRlID09PSAncmVhZHknKSB7XG4gIC8vICAgICB0aGlzLmludGVyYWN0KHtcbiAgLy8gICAgICAgdHlwZTogJ3Byb2R1Y3QubmF2aWdhdGUtdG8tcGFnZScsXG4gIC8vICAgICAgIHByb2R1Y3Q6ICh0aGlzLmNvbnRleHQgYXMgYW55KS5kYXRhXG4gIC8vICAgICB9KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzcygpIHtcbiAgICByZXR1cm4gJ3N0YXRlLScgKyB0aGlzLmNvbnRleHQ/LnN0YXRlO1xuICB9XG5cbiAgLy8gVE9ETzogY2xlYW4gdXAgYWZ0ZXIgZml4XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbnRleHQuc3RhdGVcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5Mb2FkaW5nXCI+TG9hZGluZy4uLjwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLkVycm9yXCI+RXJyb3I8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5FbXB0eVwiPkVtcHR5PC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuUmVhZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdHNcIiAjcHJvZHVjdHNHcmlkUmVmPlxuICAgICAgPHBlYi1lbGVtZW50LXNob3AtcHJvZHVjdFxuICAgICAgICAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBjb250ZXh0Py5kYXRhXCJcbiAgICAgICAgW2VsZW1lbnRdPVwiZWxlbWVudFwiXG4gICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgICAgICBbY29udGV4dF09XCJ7IHN0YXRlOiAncmVhZHknLCBkYXRhOiBwcm9kdWN0IH1cIlxuICAgICAgPjwvcGViLWVsZW1lbnQtc2hvcC1wcm9kdWN0PlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuPGRpdiAqbmdJZj1cInNlbGVjdGVkXCIgY2xhc3M9XCJzZWxlY3RlZFwiPjwvZGl2PlxuIl19