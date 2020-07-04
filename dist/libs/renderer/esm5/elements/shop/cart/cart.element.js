import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { sum } from 'lodash-es';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
var PebShopCartElement = /** @class */ (function (_super) {
    __extends(PebShopCartElement, _super);
    function PebShopCartElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PebElementContextState = PebElementContextState;
        return _this;
    }
    // TODO: --prod build doesn't work
    // static contextFetcher = ctx => ctx['@cart'];
    PebShopCartElement.prototype.onOpenCart = function () {
        this.interact({ type: 'cart.click' });
    };
    Object.defineProperty(PebShopCartElement.prototype, "elements", {
        get: function () {
            return {
                host: this.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebShopCartElement.prototype, "mappedStyles", {
        get: function () {
            var scale = this.options.scale;
            // TODO: Filter out nulls
            return {
                host: {
                    // position: 'absolute',
                    color: this.styles.color,
                    fontSize: this.styles.fontSize
                        ? (this.styles.fontSize * scale) + 'px'
                        : null,
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebShopCartElement.prototype, "totalItems", {
        get: function () {
            if (this.context.state !== this.PebElementContextState.Ready) {
                return;
            }
            return sum(this.context.data.map(function (i) { return i.count; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebShopCartElement.prototype, "totalAmount", {
        get: function () {
            if (this.context.state !== this.PebElementContextState.Ready) {
                return;
            }
            return sum(this.context.data.map(function (i) { return i.count * (i.product.prices.sale || i.product.prices.regular); }));
        },
        enumerable: true,
        configurable: true
    });
    PebShopCartElement.ɵfac = function PebShopCartElement_Factory(t) { return ɵPebShopCartElement_BaseFactory(t || PebShopCartElement); };
    PebShopCartElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebShopCartElement, selectors: [["peb-element-shop-cart"]], inputs: { element: "element", styles: "styles", context: "context" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "wrapper", 3, "click"], ["src", "https://www.apple.com/ac/globalnav/5/en_US/images/globalnav/bag/image_large.svg"]], template: function PebShopCartElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function PebShopCartElement_Template_div_click_0_listener() { return ctx.onOpenCart(); });
            i0.ɵɵelement(1, "img", 1);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2(" ", ctx.totalItems, " items / ", ctx.totalAmount, " $ ");
        } }, styles: ["[_nghost-%COMP%]{display:inline-block}.wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;cursor:pointer}img[_ngcontent-%COMP%]{width:1em;height:2.5em;-webkit-margin-end:.5em;margin-inline-end:.5em}"] });
    return PebShopCartElement;
}(PebAbstractElement));
export { PebShopCartElement };
var ɵPebShopCartElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebShopCartElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebShopCartElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-shop-cart',
                templateUrl: './cart.element.html',
                styleUrls: ['./cart.element.scss']
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], context: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaG9wL2NhcnQvY2FydC5lbGVtZW50LnRzIiwiZWxlbWVudHMvc2hvcC9jYXJ0L2NhcnQuZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWhDLE9BQU8sRUFBbUQsc0JBQXNCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFPM0c7SUFLd0Msc0NBQWtCO0lBTDFEO1FBQUEscUVBdUVDO1FBN0RDLDRCQUFzQixHQUFHLHNCQUFzQixDQUFDOztLQTZEakQ7SUEzREMsa0NBQWtDO0lBQ2xDLCtDQUErQztJQUUvQyx1Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxzQkFBSSx3Q0FBUTthQUFaO1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDekIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQVk7YUFBaEI7WUFDVSxJQUFBLDBCQUFLLENBQWtCO1lBRS9CLHlCQUF5QjtZQUN6QixPQUFPO2dCQUNMLElBQUksRUFBRTtvQkFDSix3QkFBd0I7b0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7d0JBQzVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBa0IsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJO3dCQUNqRCxDQUFDLENBQUMsSUFBSTtpQkFhVDthQUNGLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFVO2FBQWQ7WUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUU7Z0JBQzVELE9BQU87YUFDUjtZQUVELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFXO2FBQWY7WUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUU7Z0JBQzVELE9BQU87YUFDUjtZQUVELE9BQU8sR0FBRyxDQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbkIsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUE3RCxDQUE2RCxDQUNuRSxDQUNGLENBQUM7UUFDSixDQUFDOzs7T0FBQTttSEFqRVUsa0JBQWtCOzJEQUFsQixrQkFBa0I7WUNoQi9CLDhCQUNFO1lBRG1CLDRGQUFTLGdCQUFZLElBQUM7WUFDekMseUJBQ0E7WUFBQSw0QkFDRTtZQUFBLFlBQ0Y7WUFBQSxpQkFBTztZQUNULGlCQUFNOztZQUZGLGVBQ0Y7WUFERSwrRUFDRjs7NkJESkY7Q0FrRkMsQUF2RUQsQ0FLd0Msa0JBQWtCLEdBa0V6RDtTQWxFWSxrQkFBa0I7K0RBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUscUJBQXFCO2dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNuQzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IHN1bSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vcmVuZGVyZXIudHlwZXMnO1xuaW1wb3J0IHsgUGViRWxlbWVudCwgUGViRWxlbWVudFN0eWxlcywgUGViRWxlbWVudENvbnRleHQsIFBlYkVsZW1lbnRDb250ZXh0U3RhdGUgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcblxudHlwZSBDYXJ0Q29udGV4dCA9IFBlYkVsZW1lbnRDb250ZXh0PHtcbiAgY291bnQ6IG51bWJlcjtcbiAgcHJvZHVjdDogUHJvZHVjdDtcbn1bXT47XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1lbGVtZW50LXNob3AtY2FydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcnQuZWxlbWVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGViU2hvcENhcnRFbGVtZW50IGV4dGVuZHMgUGViQWJzdHJhY3RFbGVtZW50IHtcbiAgQElucHV0KCkgZWxlbWVudDogUGViRWxlbWVudDtcbiAgQElucHV0KCkgc3R5bGVzOiBQZWJFbGVtZW50U3R5bGVzO1xuICBASW5wdXQoKSBjb250ZXh0OiBDYXJ0Q29udGV4dDtcblxuICBQZWJFbGVtZW50Q29udGV4dFN0YXRlID0gUGViRWxlbWVudENvbnRleHRTdGF0ZTtcblxuICAvLyBUT0RPOiAtLXByb2QgYnVpbGQgZG9lc24ndCB3b3JrXG4gIC8vIHN0YXRpYyBjb250ZXh0RmV0Y2hlciA9IGN0eCA9PiBjdHhbJ0BjYXJ0J107XG5cbiAgb25PcGVuQ2FydCgpOiB2b2lkIHtcbiAgICB0aGlzLmludGVyYWN0KHt0eXBlOiAnY2FydC5jbGljayd9KTtcbiAgfVxuXG4gIGdldCBlbGVtZW50cygpOiB7IFtrZXk6IHN0cmluZ106IEhUTUxFbGVtZW50fSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG1hcHBlZFN0eWxlcygpIHtcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAvLyBUT0RPOiBGaWx0ZXIgb3V0IG51bGxzXG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGNvbG9yOiB0aGlzLnN0eWxlcy5jb2xvcixcbiAgICAgICAgZm9udFNpemU6IHRoaXMuc3R5bGVzLmZvbnRTaXplXG4gICAgICAgICAgPyAodGhpcy5zdHlsZXMuZm9udFNpemUgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgLy8gbGVmdDogdGhpcy5zdHlsZXMubGVmdFxuICAgICAgICAvLyAgID8gKHRoaXMuc3R5bGVzLmxlZnQgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAvLyAgIDogbnVsbCxcbiAgICAgICAgLy8gcmlnaHQ6IHRoaXMuc3R5bGVzLnJpZ2h0XG4gICAgICAgIC8vICAgPyAodGhpcy5zdHlsZXMucmlnaHQgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAvLyAgIDogbnVsbCxcbiAgICAgICAgLy8gdG9wOiB0aGlzLnN0eWxlcy50b1xuICAgICAgICAvLyAgID8gKHRoaXMuc3R5bGVzLnRvcCBhcyBudW1iZXIgKiBzY2FsZSkgKyAncHgnXG4gICAgICAgIC8vICAgOiBudWxsLFxuICAgICAgICAvLyBib3R0b206IHRoaXMuc3R5bGVzLmJvdHRvbVxuICAgICAgICAvLyAgID8gKHRoaXMuc3R5bGVzLmJvdHRvbSBhcyBudW1iZXIgKiBzY2FsZSkgKyAncHgnXG4gICAgICAgIC8vICAgOiBudWxsLFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBnZXQgdG90YWxJdGVtcygpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0LnN0YXRlICE9PSB0aGlzLlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuUmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VtKHRoaXMuY29udGV4dC5kYXRhLm1hcChpID0+IGkuY291bnQpKTtcbiAgfVxuXG4gIGdldCB0b3RhbEFtb3VudCgpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0LnN0YXRlICE9PSB0aGlzLlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuUmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VtKFxuICAgICAgdGhpcy5jb250ZXh0LmRhdGEubWFwKFxuICAgICAgICBpID0+IGkuY291bnQgKiAoaS5wcm9kdWN0LnByaWNlcy5zYWxlIHx8IGkucHJvZHVjdC5wcmljZXMucmVndWxhcilcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwid3JhcHBlclwiIChjbGljayk9XCJvbk9wZW5DYXJ0KClcIj5cbiAgPGltZyBzcmM9XCJodHRwczovL3d3dy5hcHBsZS5jb20vYWMvZ2xvYmFsbmF2LzUvZW5fVVMvaW1hZ2VzL2dsb2JhbG5hdi9iYWcvaW1hZ2VfbGFyZ2Uuc3ZnXCI+XG4gIDxzcGFuPlxuICAgIHt7dG90YWxJdGVtc319IGl0ZW1zIC8ge3sgdG90YWxBbW91bnR9fSAkXG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19