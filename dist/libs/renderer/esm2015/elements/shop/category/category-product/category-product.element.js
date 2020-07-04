import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["imageRef"];
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
    const ctx_r493 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r493.context.data.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r493.context.data.prices.regular, " ");
} }
export class PebShopCategoryProductElement extends PebAbstractElement {
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
        var _a;
        return {
            host: {
                borderColor: (_a = this.styles) === null || _a === void 0 ? void 0 : _a.borderColor,
            },
            image: {
                backgroundImage: this.context.state === PebElementContextState.Ready ? `url('${this.context.data.image}')` : null,
            },
        };
    }
    // TODO: return after checking renderer's styling.
    ngAfterViewInit() {
        this.applyStyles();
    }
    get hostClass() {
        return 'screen-' + this.options.screen;
    }
}
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
const ɵPebShopCategoryProductElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopCategoryProductElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcHJvZHVjdC5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaG9wL2NhdGVnb3J5L2NhdGVnb3J5LXByb2R1Y3QvY2F0ZWdvcnktcHJvZHVjdC5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS1wcm9kdWN0L2NhdGVnb3J5LXByb2R1Y3QuZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQXFCLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0lDRjNFLDZCQUE2RDtJQUFBLDBCQUFVO0lBQUEsMEJBQWU7OztJQUN0Riw2QkFBMkQ7SUFBQSxxQkFBSztJQUFBLDBCQUFlOzs7SUFDL0UsNkJBQTJEO0lBQUEscUJBQUs7SUFBQSwwQkFBZTs7O0lBQy9FLDZCQUNFO0lBQUEsNEJBQW1DO0lBQ25DLDhCQUNFO0lBQUEsOEJBQW1CO0lBQUEsWUFBd0I7SUFBQSxpQkFBTTtJQUNqRCw4QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsMEJBQWU7OztJQUxRLGVBQXdCO0lBQXhCLGlEQUF3QjtJQUV6QyxlQUNGO0lBREUscUVBQ0Y7O0FER04sTUFBTSxPQUFPLDZCQUE4QixTQUFRLGtCQUFrQjtJQU5yRTs7UUFXRSwyQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztLQThCakQ7SUE1QkMsSUFBSSxRQUFROztRQUNWLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDeEIsS0FBSyxRQUFFLElBQUksQ0FBQyxRQUFRLDBDQUFFLGFBQWE7U0FDcEMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLFlBQVk7O1FBQ2QsT0FBTztZQUNMLElBQUksRUFBRTtnQkFDSixXQUFXLFFBQUUsSUFBSSxDQUFDLE1BQU0sMENBQUUsV0FBVzthQUN0QztZQUNELEtBQUssRUFBRTtnQkFDTCxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQ2xIO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxrREFBa0Q7SUFDbEQsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFDSSxTQUFTO1FBQ1gsT0FBTyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQzs7Z0pBakNVLDZCQUE2QjtrRUFBN0IsNkJBQTZCOzs7Ozs7OztRQ2IxQyxnQ0FDRTtRQUFBLGdHQUE2RDtRQUM3RCxnR0FBMkQ7UUFDM0QsZ0dBQTJEO1FBQzNELGdHQUNFO1FBUUosMEJBQWU7O1FBYkQsNENBQTBCO1FBQ3hCLGVBQThDO1FBQTlDLGlFQUE4QztRQUM5QyxlQUE0QztRQUE1QywrREFBNEM7UUFDNUMsZUFBNEM7UUFBNUMsK0RBQTRDO1FBQzVDLGVBQTRDO1FBQTVDLCtEQUE0Qzs7NEVEUy9DLDZCQUE2QjtrREFBN0IsNkJBQTZCO2NBTnpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztnQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLEtBQUs7O2tCQUVMLFNBQVM7bUJBQUMsVUFBVTs7a0JBMkJwQixXQUFXO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGViQWJzdHJhY3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL3JlbmRlcmVyLnR5cGVzJztcbmltcG9ydCB7IFBlYkVsZW1lbnRDb250ZXh0U3RhdGUsIFBlYkVsZW1lbnRDb250ZXh0IH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbnR5cGUgQ2F0ZWdvcnlQcm9kdWN0Q29udGV4dCA9IFBlYkVsZW1lbnRDb250ZXh0PFByb2R1Y3Q+O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZWItZWxlbWVudC1zaG9wLWNhdGVnb3J5LXByb2R1Y3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2F0ZWdvcnktcHJvZHVjdC5lbGVtZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXRlZ29yeS1wcm9kdWN0LmVsZW1lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQZWJTaG9wQ2F0ZWdvcnlQcm9kdWN0RWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBjb250ZXh0OiBDYXRlZ29yeVByb2R1Y3RDb250ZXh0O1xuXG4gIEBWaWV3Q2hpbGQoJ2ltYWdlUmVmJykgaW1hZ2VSZWY6IEVsZW1lbnRSZWY7XG5cbiAgUGViRWxlbWVudENvbnRleHRTdGF0ZSA9IFBlYkVsZW1lbnRDb250ZXh0U3RhdGU7XG5cbiAgZ2V0IGVsZW1lbnRzKCk6IHsgW2tleTogc3RyaW5nXTogSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICAgIGltYWdlOiB0aGlzLmltYWdlUmVmPy5uYXRpdmVFbGVtZW50LFxuICAgIH07XG4gIH1cblxuICBnZXQgbWFwcGVkU3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGlzLnN0eWxlcz8uYm9yZGVyQ29sb3IsXG4gICAgICB9LFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiB0aGlzLmNvbnRleHQuc3RhdGUgPT09IFBlYkVsZW1lbnRDb250ZXh0U3RhdGUuUmVhZHkgPyBgdXJsKCcke3RoaXMuY29udGV4dC5kYXRhLmltYWdlfScpYCA6IG51bGwsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvLyBUT0RPOiByZXR1cm4gYWZ0ZXIgY2hlY2tpbmcgcmVuZGVyZXIncyBzdHlsaW5nLlxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5hcHBseVN0eWxlcygpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3MoKSB7XG4gICAgcmV0dXJuICdzY3JlZW4tJyArIHRoaXMub3B0aW9ucy5zY3JlZW47XG4gIH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY29udGV4dC5zdGF0ZVwiPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLkxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuRXJyb3JcIj5FcnJvcjwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLkVtcHR5XCI+RW1wdHk8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5SZWFkeVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiICNpbWFnZVJlZj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+e3sgY29udGV4dC5kYXRhLnRpdGxlIH19PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJpY2VcIj5cbiAgICAgICAge3sgY29udGV4dC5kYXRhLnByaWNlcy5yZWd1bGFyIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==