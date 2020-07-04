import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["imageRef"];
function PebShopCategoryHeaderElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelement(4, "div", 4, 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r495 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r495.context.data.title);
} }
export class PebShopCategoryHeaderElement extends PebAbstractElement {
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
PebShopCategoryHeaderElement.ɵfac = function PebShopCategoryHeaderElement_Factory(t) { return ɵPebShopCategoryHeaderElement_BaseFactory(t || PebShopCategoryHeaderElement); };
PebShopCategoryHeaderElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebShopCategoryHeaderElement, selectors: [["peb-element-shop-category-header"]], viewQuery: function PebShopCategoryHeaderElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.imageRef = _t.first);
    } }, hostVars: 2, hostBindings: function PebShopCategoryHeaderElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.hostClass);
    } }, inputs: { context: "context" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "title"], [1, "image-container"], [1, "image"], ["imageRef", ""]], template: function PebShopCategoryHeaderElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PebShopCategoryHeaderElement_ng_container_1_Template, 6, 1, "ng-container", 1);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.context.state);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase], styles: ["[_nghost-%COMP%]{background-color:#00000005;padding:0 2.18rem;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;overflow:hidden}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:400;text-transform:capitalize}[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;margin-left:auto;width:50%;height:calc(100% - 2rem)}[_nghost-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;height:100%;background-size:contain;background-position:center;background-repeat:no-repeat}"], changeDetection: 0 });
const ɵPebShopCategoryHeaderElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopCategoryHeaderElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebShopCategoryHeaderElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-category-header',
                templateUrl: './category-header.element.html',
                styleUrls: ['./category-header.element.scss'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktaGVhZGVyLmVsZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3Nob3AvY2F0ZWdvcnkvY2F0ZWdvcnktaGVhZGVyL2NhdGVnb3J5LWhlYWRlci5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS1oZWFkZXIvY2F0ZWdvcnktaGVhZGVyLmVsZW1lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFpQixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0lDRnhELDZCQUNFO0lBQUEsOEJBQW1CO0lBQUEsWUFBd0I7SUFBQSxpQkFBTTtJQUNqRCw4QkFDRTtJQUNBLDRCQUFtQztJQUVyQyxpQkFBTTtJQUNSLDBCQUFlOzs7SUFOTSxlQUF3QjtJQUF4QixpREFBd0I7O0FEUy9DLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxrQkFBa0I7SUFOcEU7O1FBV0UsMkJBQXNCLEdBQUcsc0JBQXNCLENBQUM7S0E4QmpEO0lBNUJDLElBQUksUUFBUTs7UUFDVixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ3hCLEtBQUssUUFBRSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxhQUFhO1NBQ3BDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxZQUFZOztRQUNkLE9BQU87WUFDTCxJQUFJLEVBQUU7Z0JBQ0osV0FBVyxRQUFFLElBQUksQ0FBQyxNQUFNLDBDQUFFLFdBQVc7YUFDdEM7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTthQUNsSDtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsa0RBQWtEO0lBQ2xELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQ0ksU0FBUztRQUNYLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7OzZJQWpDVSw0QkFBNEI7aUVBQTVCLDRCQUE0Qjs7Ozs7Ozs7UUNYekMsZ0NBQ0U7UUFBQSwrRkFDRTtRQU9KLDBCQUFlOztRQVRELDRDQUEwQjtRQUN4QixlQUE0QztRQUE1QywrREFBNEM7OzJFRFUvQyw0QkFBNEI7a0RBQTVCLDRCQUE0QjtjQU54QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxLQUFLOztrQkFFTCxTQUFTO21CQUFDLFVBQVU7O2tCQTJCcEIsV0FBVzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IFByb2R1Y3RDb250ZXh0IH0gZnJvbSAnLi4vY2F0ZWdvcnkuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJFbGVtZW50Q29udGV4dFN0YXRlIH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1lbGVtZW50LXNob3AtY2F0ZWdvcnktaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhdGVnb3J5LWhlYWRlci5lbGVtZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXRlZ29yeS1oZWFkZXIuZWxlbWVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBlYlNob3BDYXRlZ29yeUhlYWRlckVsZW1lbnQgZXh0ZW5kcyBQZWJBYnN0cmFjdEVsZW1lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgY29udGV4dDogUHJvZHVjdENvbnRleHQ7XG5cbiAgQFZpZXdDaGlsZCgnaW1hZ2VSZWYnKSBpbWFnZVJlZjogRWxlbWVudFJlZjtcblxuICBQZWJFbGVtZW50Q29udGV4dFN0YXRlID0gUGViRWxlbWVudENvbnRleHRTdGF0ZTtcblxuICBnZXQgZWxlbWVudHMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W119IHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2VSZWY/Lm5hdGl2ZUVsZW1lbnQsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuc3R5bGVzPy5ib3JkZXJDb2xvcixcbiAgICAgIH0sXG4gICAgICBpbWFnZToge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRoaXMuY29udGV4dC5zdGF0ZSA9PT0gUGViRWxlbWVudENvbnRleHRTdGF0ZS5SZWFkeSA/IGB1cmwoJyR7dGhpcy5jb250ZXh0LmRhdGEuaW1hZ2V9JylgIDogbnVsbCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRPRE86IHJldHVybiBhZnRlciBjaGVja2luZyByZW5kZXJlcidzIHN0eWxpbmcuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzcygpIHtcbiAgICByZXR1cm4gJ3NjcmVlbi0nICsgdGhpcy5vcHRpb25zLnNjcmVlbjtcbiAgfVxuXG59XG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb250ZXh0LnN0YXRlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuUmVhZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj57eyBjb250ZXh0LmRhdGEudGl0bGUgfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICA8IS0tICpuZ0lmPVwiY29udGV4dC5kYXRhLmltYWdlIGVsc2UgcHJvZHVjdFByZXZpZXdJY29uXCIgLS0+XG4gICAgICA8ZGl2ICNpbWFnZVJlZiBjbGFzcz1cImltYWdlXCI+PC9kaXY+XG4gICAgPCEtLSBbc3R5bGUuYmFja2dyb3VuZEltYWdlXT1cIid1cmwoJyArIGNvbnRleHQuZGF0YS5pbWFnZSArICcpJ1wiPiAtLT5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==