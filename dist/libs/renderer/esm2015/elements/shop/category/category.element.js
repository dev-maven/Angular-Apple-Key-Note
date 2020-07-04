import { Component, HostBinding, Input, ViewChild, ElementRef, ChangeDetectionStrategy, ViewChildren, QueryList } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebShopCategoryProductElement } from './category-product/category-product.element';
import { PebShopCategoryHeaderElement } from './category-header/category-header.element';
import { PebShopCategoryNavbarElement } from './category-navbar/category-navbar.element';
import { PebShopCategoryFiltersElement } from './category-filters/category-filters.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
const _c0 = ["productsGridRef"];
function PebShopCategoryElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Loading...");
    i0.ɵɵelementContainerEnd();
} }
function PebShopCategoryElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Error");
    i0.ɵɵelementContainerEnd();
} }
function PebShopCategoryElement_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Empty");
    i0.ɵɵelementContainerEnd();
} }
const _c1 = function (a0, a1) { return { state: a0, data: a1 }; };
function PebShopCategoryElement_ng_container_4_peb_element_shop_category_product_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "peb-element-shop-category-product", 2);
} if (rf & 2) {
    const product_r516 = ctx.$implicit;
    const ctx_r515 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("context", i0.ɵɵpureFunction2(3, _c1, ctx_r515.PebElementContextState.Ready, product_r516))("options", ctx_r515.options)("styles", ctx_r515.styles);
} }
function PebShopCategoryElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "peb-element-shop-category-header", 2);
    i0.ɵɵelement(2, "peb-element-shop-category-navbar", 2);
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelement(4, "peb-element-shop-category-filters", 2);
    i0.ɵɵelementStart(5, "div", 4, 5);
    i0.ɵɵtemplate(7, PebShopCategoryElement_ng_container_4_peb_element_shop_category_product_7_Template, 1, 6, "peb-element-shop-category-product", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r513 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("context", ctx_r513.context)("options", ctx_r513.options)("styles", ctx_r513.styles);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("context", ctx_r513.context)("options", ctx_r513.options)("styles", ctx_r513.styles);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("context", ctx_r513.context)("options", ctx_r513.options)("styles", ctx_r513.styles);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r513.context.data.products);
} }
const HEADER_STYLES = {
    height: {
        desktop: 225,
        tablet: 225,
        mobile: 225,
    },
    fontSize: {
        desktop: 40,
        tablet: 40,
        mobile: 40,
    },
};
const NAVBAR_STYLES = {
    height: {
        desktop: 60,
        tablet: 60,
        mobile: 60,
    },
    fontSize: {
        desktop: 12,
        tablet: 12,
        mobile: 12,
    },
};
const FILTERS_STYLES = {
    fontSize: {
        desktop: 14,
        tablet: 14,
        mobile: 14,
    },
};
const PRODUCT_STYLES = {
    height: {
        desktop: 500,
        tablet: 500,
        mobile: 500,
    },
    fontSize: {
        desktop: 17,
        tablet: 16,
        mobile: 14,
    },
};
const COLUMNS = 3;
export class PebShopCategoryElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    onToggleShownFilters() {
        this.interact({ type: 'category.toggle-filters' });
    }
    onToggleFilter(value) {
        this.interact({ type: 'category.toggle-filter', value });
    }
    onProductClick() {
    }
    get elements() {
        var _a, _b, _c, _d, _e;
        return {
            host: this.nativeElement,
            header: (_a = this.headerRef) === null || _a === void 0 ? void 0 : _a.nativeElement,
            navbar: (_b = this.navbarRef) === null || _b === void 0 ? void 0 : _b.nativeElement,
            filters: (_c = this.filtersRef) === null || _c === void 0 ? void 0 : _c.nativeElement,
            productsGrid: (_d = this.productsGridRef) === null || _d === void 0 ? void 0 : _d.nativeElement,
            products: ((_e = this.productElements) === null || _e === void 0 ? void 0 : _e.toArray().map(a => a.nativeElement)) || [],
        };
    }
    get mappedStyles() {
        var _a, _b, _c, _d, _e, _f;
        const { screen, scale } = this.options;
        return {
            host: {
                position: 'relative',
                width: this.styles.width
                    ? `${+this.styles.width * scale}px`
                    : `${100 * scale}%`,
                height: this.styles.height
                    ? `${+this.styles.height * scale}px`
                    : null,
                left: this.styles.left
                    ? `${+this.styles.left * scale}px`
                    : null,
                top: this.styles.top
                    ? `${+this.styles.top * scale}px`
                    : null,
                background: ((_a = this.styles) === null || _a === void 0 ? void 0 : _a.mode) === 'dark' ? '#333' : '#fff',
                color: ((_b = this.styles) === null || _b === void 0 ? void 0 : _b.mode) === 'dark' ? '#fff' : '#333',
            },
            header: {
                height: `${HEADER_STYLES.height[screen] * scale}px`,
                fontSize: `${HEADER_STYLES.fontSize[screen] * scale}px`
            },
            navbar: {
                background: ((_c = this.styles) === null || _c === void 0 ? void 0 : _c.mode) === 'dark' ? '#333' : '#fff',
                borderColor: (_d = this.styles) === null || _d === void 0 ? void 0 : _d.borderColor,
                height: `${NAVBAR_STYLES.height[screen] * scale}px`,
                fontSize: `${NAVBAR_STYLES.fontSize[screen] * scale}px`,
            },
            filters: {
                display: this.context.state === PebElementContextState.Ready && this.context.data.shownFilters ? 'block' : 'none',
                fontSize: `${FILTERS_STYLES.fontSize[screen] * scale}px`,
            },
            productsGrid: {
                gridTemplateColumns: `repeat(${((_e = this.styles) === null || _e === void 0 ? void 0 : _e.columns) || COLUMNS}, 1fr)`,
                boxShadow: `inset 1px 0 0 0 ${((_f = this.styles) === null || _f === void 0 ? void 0 : _f.borderColor) || '#d6d6d6'}`,
            },
            products: {
                height: `${PRODUCT_STYLES.height[screen] * scale}px`,
                fontSize: `${PRODUCT_STYLES.fontSize[screen] * scale}px`,
            }
        };
    }
    get hostClass() {
        var _a;
        return 'screen-' + ((_a = this.options) === null || _a === void 0 ? void 0 : _a.screen);
    }
    // TODO: clean up after fix
    ngAfterViewInit() {
        this.applyStyles();
    }
}
PebShopCategoryElement.ɵfac = function PebShopCategoryElement_Factory(t) { return ɵPebShopCategoryElement_BaseFactory(t || PebShopCategoryElement); };
PebShopCategoryElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebShopCategoryElement, selectors: [["peb-element-shop-category"]], viewQuery: function PebShopCategoryElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PebShopCategoryHeaderElement, true, ElementRef);
        i0.ɵɵviewQuery(PebShopCategoryNavbarElement, true, ElementRef);
        i0.ɵɵviewQuery(PebShopCategoryFiltersElement, true, ElementRef);
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(PebShopCategoryProductElement, true, ElementRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navbarRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.filtersRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.productsGridRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.productElements = _t);
    } }, hostVars: 2, hostBindings: function PebShopCategoryElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.hostClass);
    } }, inputs: { element: "element", styles: "styles", context: "context" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [3, "context", "options", "styles"], [1, "category-content"], [1, "category-products"], ["productsGridRef", ""], [3, "context", "options", "styles", 4, "ngFor", "ngForOf"]], template: function PebShopCategoryElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PebShopCategoryElement_ng_container_1_Template, 2, 0, "ng-container", 1);
        i0.ɵɵtemplate(2, PebShopCategoryElement_ng_container_2_Template, 2, 0, "ng-container", 1);
        i0.ɵɵtemplate(3, PebShopCategoryElement_ng_container_3_Template, 2, 0, "ng-container", 1);
        i0.ɵɵtemplate(4, PebShopCategoryElement_ng_container_4_Template, 8, 10, "ng-container", 1);
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
    } }, styles: ["[_nghost-%COMP%]{width:100%;background-color:#fff;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:block}.category-content[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:flex}.category-products[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr);margin-left:auto;width:100%;-webkit-transition:.2s;transition:.2s;box-shadow:inset 1px 0 0 0 #d6d6d6}"], changeDetection: 0 });
const ɵPebShopCategoryElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopCategoryElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebShopCategoryElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-category',
                templateUrl: './category.element.html',
                styleUrls: ['./category.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], context: [{
            type: Input
        }], headerRef: [{
            type: ViewChild,
            args: [PebShopCategoryHeaderElement, { read: ElementRef }]
        }], navbarRef: [{
            type: ViewChild,
            args: [PebShopCategoryNavbarElement, { read: ElementRef }]
        }], filtersRef: [{
            type: ViewChild,
            args: [PebShopCategoryFiltersElement, { read: ElementRef }]
        }], productsGridRef: [{
            type: ViewChild,
            args: ['productsGridRef']
        }], productElements: [{
            type: ViewChildren,
            args: [PebShopCategoryProductElement, { read: ElementRef }]
        }], hostClass: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS5lbGVtZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdEosT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFdEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUYsT0FBTyxFQUFtRCxzQkFBc0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0lDTnpHLDZCQUE2RDtJQUFBLDBCQUFVO0lBQUEsMEJBQWU7OztJQUN0Riw2QkFBMkQ7SUFBQSxxQkFBSztJQUFBLDBCQUFlOzs7SUFDL0UsNkJBQTJEO0lBQUEscUJBQUs7SUFBQSwwQkFBZTs7OztJQW1CekUsdURBS3FDOzs7O0lBSG5DLHlHQUFrRSw2QkFBQSwyQkFBQTs7O0lBcEIxRSw2QkFDRTtJQUFBLHNEQUlvQztJQUNwQyxzREFJb0M7SUFDcEMsOEJBQ0U7SUFBQSx1REFJcUM7SUFDckMsaUNBQ0U7SUFBQSxrSkFLQztJQUNILGlCQUFNO0lBQ1IsaUJBQU07SUFDUiwwQkFBZTs7O0lBeEJYLGVBQW1CO0lBQW5CLDBDQUFtQiw2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RTlDLDZCQUE2QixRQUFVLFVBQVU7Ozs7Ozs7Ozs7O1FDOUZqRSxnQ0FDRTtRQUFBLHlGQUE2RDtRQUM3RCx5RkFBMkQ7UUFDM0QseUZBQTJEO1FBQzNELDBGQUNFO1FBMEJKLDBCQUFlOztRQS9CRCw0Q0FBMEI7UUFDeEIsZUFBOEM7UUFBOUMsaUVBQThDO1FBQzlDLGVBQTRDO1FBQTVDLCtEQUE0QztRQUM1QyxlQUE0QztRQUE1QywrREFBNEM7UUFDNUMsZUFBNEM7UUFBNUMsK0RBQTRDOztxRURpRi9DLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLFNBQVM7bUJBQUMsNEJBQTRCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOztrQkFDNUQsU0FBUzttQkFBQyw0QkFBNEIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O2tCQUM1RCxTQUFTO21CQUFDLDZCQUE2QixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7a0JBQzdELFNBQVM7bUJBQUMsaUJBQWlCOztrQkFDM0IsWUFBWTttQkFBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O2tCQXdFaEUsV0FBVzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vcmVuZGVyZXIudHlwZXMnO1xuaW1wb3J0IHsgUGViU2hvcENhdGVnb3J5UHJvZHVjdEVsZW1lbnQgfSBmcm9tICcuL2NhdGVnb3J5LXByb2R1Y3QvY2F0ZWdvcnktcHJvZHVjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYlNob3BDYXRlZ29yeUhlYWRlckVsZW1lbnQgfSBmcm9tICcuL2NhdGVnb3J5LWhlYWRlci9jYXRlZ29yeS1oZWFkZXIuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJTaG9wQ2F0ZWdvcnlOYXZiYXJFbGVtZW50IH0gZnJvbSAnLi9jYXRlZ29yeS1uYXZiYXIvY2F0ZWdvcnktbmF2YmFyLmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViU2hvcENhdGVnb3J5RmlsdGVyc0VsZW1lbnQgfSBmcm9tICcuL2NhdGVnb3J5LWZpbHRlcnMvY2F0ZWdvcnktZmlsdGVycy5lbGVtZW50JztcbmltcG9ydCB7IFBlYkVsZW1lbnRTdHlsZXMsIFBlYkVsZW1lbnQsIFBlYkVsZW1lbnRDb250ZXh0LCBQZWJFbGVtZW50Q29udGV4dFN0YXRlIH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbmludGVyZmFjZSBTaG9wQ2F0ZWdvcnkgZXh0ZW5kcyBQZWJFbGVtZW50IHtcbiAgdmFyaWFudDogJ2xpbmsnfCdwdXJjaGFzZSc7XG59XG5cbmludGVyZmFjZSBTaG9wQ2F0ZWdvcnlGaWx0ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIGNoaWxkcmVuOiBTaG9wQ2F0ZWdvcnlGaWx0ZXJbXTtcbn1cblxuaW50ZXJmYWNlIFByb2R1Y3RFbGVtZW50RGF0YSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIHNob3duRmlsdGVyczogYm9vbGVhbjtcbiAgZmlsdGVyczogU2hvcENhdGVnb3J5RmlsdGVyW107XG4gIHByb2R1Y3RzOiBQcm9kdWN0W107XG59XG5cbmV4cG9ydCB0eXBlIFByb2R1Y3RDb250ZXh0ID0gUGViRWxlbWVudENvbnRleHQ8UHJvZHVjdEVsZW1lbnREYXRhPjtcblxuY29uc3QgSEVBREVSX1NUWUxFUyA9IHtcbiAgaGVpZ2h0OiB7XG4gICAgZGVza3RvcDogMjI1LFxuICAgIHRhYmxldDogMjI1LFxuICAgIG1vYmlsZTogMjI1LFxuICB9LFxuICBmb250U2l6ZToge1xuICAgIGRlc2t0b3A6IDQwLFxuICAgIHRhYmxldDogNDAsXG4gICAgbW9iaWxlOiA0MCxcbiAgfSxcbn07XG5cbmNvbnN0IE5BVkJBUl9TVFlMRVMgPSB7XG4gIGhlaWdodDoge1xuICAgIGRlc2t0b3A6IDYwLFxuICAgIHRhYmxldDogNjAsXG4gICAgbW9iaWxlOiA2MCxcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICBkZXNrdG9wOiAxMixcbiAgICB0YWJsZXQ6IDEyLFxuICAgIG1vYmlsZTogMTIsXG4gIH0sXG59O1xuXG5jb25zdCBGSUxURVJTX1NUWUxFUyA9IHtcbiAgZm9udFNpemU6IHtcbiAgICBkZXNrdG9wOiAxNCxcbiAgICB0YWJsZXQ6IDE0LFxuICAgIG1vYmlsZTogMTQsXG4gIH0sXG59O1xuXG5jb25zdCBQUk9EVUNUX1NUWUxFUyA9IHtcbiAgaGVpZ2h0OiB7XG4gICAgZGVza3RvcDogNTAwLFxuICAgIHRhYmxldDogNTAwLFxuICAgIG1vYmlsZTogNTAwLFxuICB9LFxuICBmb250U2l6ZToge1xuICAgIGRlc2t0b3A6IDE3LFxuICAgIHRhYmxldDogMTYsXG4gICAgbW9iaWxlOiAxNCxcbiAgfSxcbn07XG5cbmNvbnN0IENPTFVNTlMgPSAzO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZWItZWxlbWVudC1zaG9wLWNhdGVnb3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhdGVnb3J5LmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhdGVnb3J5LmVsZW1lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGViU2hvcENhdGVnb3J5RWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBlbGVtZW50OiBTaG9wQ2F0ZWdvcnk7XG4gIEBJbnB1dCgpIHN0eWxlczogUGViRWxlbWVudFN0eWxlcztcbiAgQElucHV0KCkgY29udGV4dDogUHJvZHVjdENvbnRleHQ7XG5cbiAgQFZpZXdDaGlsZChQZWJTaG9wQ2F0ZWdvcnlIZWFkZXJFbGVtZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaGVhZGVyUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFBlYlNob3BDYXRlZ29yeU5hdmJhckVsZW1lbnQsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBuYXZiYXJSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoUGViU2hvcENhdGVnb3J5RmlsdGVyc0VsZW1lbnQsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBmaWx0ZXJzUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdwcm9kdWN0c0dyaWRSZWYnKSBwcm9kdWN0c0dyaWRSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGRyZW4oUGViU2hvcENhdGVnb3J5UHJvZHVjdEVsZW1lbnQsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwcm9kdWN0RWxlbWVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBQZWJFbGVtZW50Q29udGV4dFN0YXRlID0gUGViRWxlbWVudENvbnRleHRTdGF0ZTtcblxuICBvblRvZ2dsZVNob3duRmlsdGVycygpOiB2b2lkIHtcbiAgICB0aGlzLmludGVyYWN0KHt0eXBlOiAnY2F0ZWdvcnkudG9nZ2xlLWZpbHRlcnMnfSk7XG4gIH1cblxuICBvblRvZ2dsZUZpbHRlcih2YWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJhY3Qoe3R5cGU6ICdjYXRlZ29yeS50b2dnbGUtZmlsdGVyJywgdmFsdWV9KTtcbiAgfVxuXG4gIG9uUHJvZHVjdENsaWNrKCk6IHZvaWQge1xuICB9XG5cbiAgZ2V0IGVsZW1lbnRzKCk6IHsgW2tleTogc3RyaW5nXTogSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICAgIGhlYWRlcjogdGhpcy5oZWFkZXJSZWY/Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICBuYXZiYXI6IHRoaXMubmF2YmFyUmVmPy5uYXRpdmVFbGVtZW50LFxuICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzUmVmPy5uYXRpdmVFbGVtZW50LFxuICAgICAgcHJvZHVjdHNHcmlkOiB0aGlzLnByb2R1Y3RzR3JpZFJlZj8ubmF0aXZlRWxlbWVudCxcbiAgICAgIHByb2R1Y3RzOiB0aGlzLnByb2R1Y3RFbGVtZW50cz8udG9BcnJheSgpLm1hcChhID0+IGEubmF0aXZlRWxlbWVudCkgfHwgW10sXG4gICAgfTtcbiAgfVxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgY29uc3QgeyBzY3JlZW4sIHNjYWxlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHRoaXMuc3R5bGVzLndpZHRoXG4gICAgICAgICAgPyBgJHsrdGhpcy5zdHlsZXMud2lkdGggKiBzY2FsZX1weGBcbiAgICAgICAgICA6IGAkezEwMCAqIHNjYWxlfSVgLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuc3R5bGVzLmhlaWdodFxuICAgICAgICAgID8gYCR7K3RoaXMuc3R5bGVzLmhlaWdodCAqIHNjYWxlfXB4YFxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgbGVmdDogdGhpcy5zdHlsZXMubGVmdFxuICAgICAgICAgID8gYCR7K3RoaXMuc3R5bGVzLmxlZnQgKiBzY2FsZX1weGBcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIHRvcDogdGhpcy5zdHlsZXMudG9wXG4gICAgICAgICAgPyBgJHsrdGhpcy5zdHlsZXMudG9wICogc2NhbGV9cHhgXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0eWxlcz8ubW9kZSA9PT0gJ2RhcmsnID8gJyMzMzMnIDogJyNmZmYnLFxuICAgICAgICBjb2xvcjogdGhpcy5zdHlsZXM/Lm1vZGUgPT09ICdkYXJrJyA/ICcjZmZmJyA6ICcjMzMzJyxcbiAgICAgIH0sXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgaGVpZ2h0OiBgJHtIRUFERVJfU1RZTEVTLmhlaWdodFtzY3JlZW5dICogc2NhbGV9cHhgLFxuICAgICAgICBmb250U2l6ZTogYCR7SEVBREVSX1NUWUxFUy5mb250U2l6ZVtzY3JlZW5dICogc2NhbGV9cHhgXG4gICAgICB9LFxuICAgICAgbmF2YmFyOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoaXMuc3R5bGVzPy5tb2RlID09PSAnZGFyaycgPyAnIzMzMycgOiAnI2ZmZicsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGlzLnN0eWxlcz8uYm9yZGVyQ29sb3IsXG4gICAgICAgIGhlaWdodDogYCR7TkFWQkFSX1NUWUxFUy5oZWlnaHRbc2NyZWVuXSAqIHNjYWxlfXB4YCxcbiAgICAgICAgZm9udFNpemU6IGAke05BVkJBUl9TVFlMRVMuZm9udFNpemVbc2NyZWVuXSAqIHNjYWxlfXB4YCxcbiAgICAgIH0sXG4gICAgICBmaWx0ZXJzOiB7XG4gICAgICAgIGRpc3BsYXk6IHRoaXMuY29udGV4dC5zdGF0ZSA9PT0gUGViRWxlbWVudENvbnRleHRTdGF0ZS5SZWFkeSAmJiB0aGlzLmNvbnRleHQuZGF0YS5zaG93bkZpbHRlcnMgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICBmb250U2l6ZTogYCR7RklMVEVSU19TVFlMRVMuZm9udFNpemVbc2NyZWVuXSAqIHNjYWxlfXB4YCxcbiAgICAgIH0sXG4gICAgICBwcm9kdWN0c0dyaWQ6IHtcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogYHJlcGVhdCgke3RoaXMuc3R5bGVzPy5jb2x1bW5zIHx8IENPTFVNTlN9LCAxZnIpYCxcbiAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMXB4IDAgMCAwICR7dGhpcy5zdHlsZXM/LmJvcmRlckNvbG9yIHx8ICcjZDZkNmQ2J31gLFxuICAgICAgfSxcbiAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgIGhlaWdodDogYCR7UFJPRFVDVF9TVFlMRVMuaGVpZ2h0W3NjcmVlbl0gKiBzY2FsZX1weGAsXG4gICAgICAgIGZvbnRTaXplOiBgJHtQUk9EVUNUX1NUWUxFUy5mb250U2l6ZVtzY3JlZW5dICogc2NhbGV9cHhgLFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzcygpIHtcbiAgICByZXR1cm4gJ3NjcmVlbi0nICsgdGhpcy5vcHRpb25zPy5zY3JlZW47XG4gIH1cblxuICAgIC8vIFRPRE86IGNsZWFuIHVwIGFmdGVyIGZpeFxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb250ZXh0LnN0YXRlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuTG9hZGluZ1wiPkxvYWRpbmcuLi48L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5FcnJvclwiPkVycm9yPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuRW1wdHlcIj5FbXB0eTwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLlJlYWR5XCI+XG4gICAgPHBlYi1lbGVtZW50LXNob3AtY2F0ZWdvcnktaGVhZGVyXG4gICAgICBbY29udGV4dF09XCJjb250ZXh0XCJcbiAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxuICAgID48L3BlYi1lbGVtZW50LXNob3AtY2F0ZWdvcnktaGVhZGVyPlxuICAgIDxwZWItZWxlbWVudC1zaG9wLWNhdGVnb3J5LW5hdmJhclxuICAgICAgW2NvbnRleHRdPVwiY29udGV4dFwiXG4gICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcbiAgICA+PC9wZWItZWxlbWVudC1zaG9wLWNhdGVnb3J5LW5hdmJhcj5cbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktY29udGVudFwiPlxuICAgICAgPHBlYi1lbGVtZW50LXNob3AtY2F0ZWdvcnktZmlsdGVyc1xuICAgICAgICBbY29udGV4dF09XCJjb250ZXh0XCJcbiAgICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAgIFtzdHlsZXNdPVwic3R5bGVzXCJcbiAgICAgID48L3BlYi1lbGVtZW50LXNob3AtY2F0ZWdvcnktZmlsdGVycz5cbiAgICAgIDxkaXYgI3Byb2R1Y3RzR3JpZFJlZiBjbGFzcz1cImNhdGVnb3J5LXByb2R1Y3RzXCI+XG4gICAgICAgIDxwZWItZWxlbWVudC1zaG9wLWNhdGVnb3J5LXByb2R1Y3RcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBjb250ZXh0LmRhdGEucHJvZHVjdHNcIlxuICAgICAgICAgIFtjb250ZXh0XT1cInsgc3RhdGU6IFBlYkVsZW1lbnRDb250ZXh0U3RhdGUuUmVhZHksIGRhdGE6IHByb2R1Y3QgfVwiXG4gICAgICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAgICAgW3N0eWxlc109XCJzdHlsZXNcIlxuICAgICAgICA+PC9wZWItZWxlbWVudC1zaG9wLWNhdGVnb3J5LXByb2R1Y3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==