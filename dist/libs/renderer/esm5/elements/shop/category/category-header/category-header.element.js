import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, HostBinding } from '@angular/core';
import { PebAbstractElement } from '../../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["imageRef"];
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
    var ctx_r571 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r571.context.data.title);
} }
var PebShopCategoryHeaderElement = /** @class */ (function (_super) {
    __extends(PebShopCategoryHeaderElement, _super);
    function PebShopCategoryHeaderElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PebElementContextState = PebElementContextState;
        return _this;
    }
    Object.defineProperty(PebShopCategoryHeaderElement.prototype, "elements", {
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
    Object.defineProperty(PebShopCategoryHeaderElement.prototype, "mappedStyles", {
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
    PebShopCategoryHeaderElement.prototype.ngAfterViewInit = function () {
        this.applyStyles();
    };
    Object.defineProperty(PebShopCategoryHeaderElement.prototype, "hostClass", {
        get: function () {
            return 'screen-' + this.options.screen;
        },
        enumerable: true,
        configurable: true
    });
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
    return PebShopCategoryHeaderElement;
}(PebAbstractElement));
export { PebShopCategoryHeaderElement };
var ɵPebShopCategoryHeaderElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopCategoryHeaderElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktaGVhZGVyLmVsZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3Nob3AvY2F0ZWdvcnkvY2F0ZWdvcnktaGVhZGVyL2NhdGVnb3J5LWhlYWRlci5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS1oZWFkZXIvY2F0ZWdvcnktaGVhZGVyLmVsZW1lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBaUIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztJQ0Z4RCw2QkFDRTtJQUFBLDhCQUFtQjtJQUFBLFlBQXdCO0lBQUEsaUJBQU07SUFDakQsOEJBQ0U7SUFDQSw0QkFBbUM7SUFFckMsaUJBQU07SUFDUiwwQkFBZTs7O0lBTk0sZUFBd0I7SUFBeEIsaURBQXdCOztBREcvQztJQU1rRCxnREFBa0I7SUFOcEU7UUFBQSxxRUF5Q0M7UUE5QkMsNEJBQXNCLEdBQUcsc0JBQXNCLENBQUM7O0tBOEJqRDtJQTVCQyxzQkFBSSxrREFBUTthQUFaOztZQUNFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUN4QixLQUFLLFFBQUUsSUFBSSxDQUFDLFFBQVEsMENBQUUsYUFBYTthQUNwQyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzREFBWTthQUFoQjs7WUFDRSxPQUFPO2dCQUNMLElBQUksRUFBRTtvQkFDSixXQUFXLFFBQUUsSUFBSSxDQUFDLE1BQU0sMENBQUUsV0FBVztpQkFDdEM7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQ2xIO2FBQ0YsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsa0RBQWtEO0lBQ2xELHNEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHNCQUNJLG1EQUFTO2FBRGI7WUFFRSxPQUFPLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtpSkFqQ1UsNEJBQTRCO3FFQUE1Qiw0QkFBNEI7Ozs7Ozs7O1lDWHpDLGdDQUNFO1lBQUEsK0ZBQ0U7WUFPSiwwQkFBZTs7WUFURCw0Q0FBMEI7WUFDeEIsZUFBNEM7WUFBNUMsK0RBQTRDOzt1Q0RENUQ7Q0E4Q0MsQUF6Q0QsQ0FNa0Qsa0JBQWtCLEdBbUNuRTtTQW5DWSw0QkFBNEI7eUVBQTVCLDRCQUE0QjtrREFBNUIsNEJBQTRCO2NBTnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLEtBQUs7O2tCQUVMLFNBQVM7bUJBQUMsVUFBVTs7a0JBMkJwQixXQUFXO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGViQWJzdHJhY3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdENvbnRleHQgfSBmcm9tICcuLi9jYXRlZ29yeS5lbGVtZW50JztcbmltcG9ydCB7IFBlYkVsZW1lbnRDb250ZXh0U3RhdGUgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtc2hvcC1jYXRlZ29yeS1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2F0ZWdvcnktaGVhZGVyLmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhdGVnb3J5LWhlYWRlci5lbGVtZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGViU2hvcENhdGVnb3J5SGVhZGVyRWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBjb250ZXh0OiBQcm9kdWN0Q29udGV4dDtcblxuICBAVmlld0NoaWxkKCdpbWFnZVJlZicpIGltYWdlUmVmOiBFbGVtZW50UmVmO1xuXG4gIFBlYkVsZW1lbnRDb250ZXh0U3RhdGUgPSBQZWJFbGVtZW50Q29udGV4dFN0YXRlO1xuXG4gIGdldCBlbGVtZW50cygpOiB7IFtrZXk6IHN0cmluZ106IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXX0ge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbWFnZTogdGhpcy5pbWFnZVJlZj8ubmF0aXZlRWxlbWVudCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG1hcHBlZFN0eWxlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhpcy5zdHlsZXM/LmJvcmRlckNvbG9yLFxuICAgICAgfSxcbiAgICAgIGltYWdlOiB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogdGhpcy5jb250ZXh0LnN0YXRlID09PSBQZWJFbGVtZW50Q29udGV4dFN0YXRlLlJlYWR5ID8gYHVybCgnJHt0aGlzLmNvbnRleHQuZGF0YS5pbWFnZX0nKWAgOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLy8gVE9ETzogcmV0dXJuIGFmdGVyIGNoZWNraW5nIHJlbmRlcmVyJ3Mgc3R5bGluZy5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzKCkge1xuICAgIHJldHVybiAnc2NyZWVuLScgKyB0aGlzLm9wdGlvbnMuc2NyZWVuO1xuICB9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbnRleHQuc3RhdGVcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5SZWFkeVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPnt7IGNvbnRleHQuZGF0YS50aXRsZSB9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgIDwhLS0gKm5nSWY9XCJjb250ZXh0LmRhdGEuaW1hZ2UgZWxzZSBwcm9kdWN0UHJldmlld0ljb25cIiAtLT5cbiAgICAgIDxkaXYgI2ltYWdlUmVmIGNsYXNzPVwiaW1hZ2VcIj48L2Rpdj5cbiAgICA8IS0tIFtzdHlsZS5iYWNrZ3JvdW5kSW1hZ2VdPVwiJ3VybCgnICsgY29udGV4dC5kYXRhLmltYWdlICsgJyknXCI+IC0tPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuIl19