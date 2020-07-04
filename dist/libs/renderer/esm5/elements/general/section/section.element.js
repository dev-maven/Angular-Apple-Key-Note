import { __extends } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../selectors/children-slot.directive";
var _c0 = ["wrapper"];
function PebSectionElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} }
var SECTION_DESKTOP_WRAPPER_WIDTH = 1024;
var PebSectionElement = /** @class */ (function (_super) {
    __extends(PebSectionElement, _super);
    function PebSectionElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PebSectionElement.prototype, "elements", {
        get: function () {
            var _a;
            return {
                host: this.nativeElement,
                wrapper: (_a = this.wrapperEl) === null || _a === void 0 ? void 0 : _a.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebSectionElement.prototype, "mappedStyles", {
        get: function () {
            return {
                host: {
                    position: 'relative',
                    padding: this.styles.padding,
                    margin: this.styles.margin,
                    width: '100%',
                    height: this.styles.height
                        ? +this.styles.height * this.options.scale + 'px'
                        : null,
                    // TODO: Think about allowing shorthand
                    // background: this.styles.background,
                    backgroundImage: this.styles.backgroundImage
                        ? 'url("' + this.styles.backgroundImage + '")'
                        : null,
                    backgroundSize: this.styles.backgroundSize
                        ? this.styles.backgroundSize
                        : null,
                    backgroundPosition: this.styles.backgroundPosition
                        ? this.styles.backgroundPosition
                        : null,
                    backgroundRepeat: this.styles.backgroundRepeat
                        ? this.styles.backgroundRepeat
                        : null,
                    backgroundColor: this.styles.backgroundColor
                        ? this.styles.backgroundColor
                        : null,
                },
                wrapper: {
                    width: this.options.screen === 'desktop'
                        ? SECTION_DESKTOP_WRAPPER_WIDTH * this.options.scale + 'px'
                        : '100%',
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    PebSectionElement.ɵfac = function PebSectionElement_Factory(t) { return ɵPebSectionElement_BaseFactory(t || PebSectionElement); };
    PebSectionElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebSectionElement, selectors: [["peb-element-section"]], viewQuery: function PebSectionElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.wrapperEl = _t.first);
        } }, inputs: { element: "element", styles: "styles" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 1, consts: [["class", "selected", 4, "ngIf"], ["id", "main-slot"], ["wrapper", ""], ["pebRendererChildrenSlot", ""], [1, "selected"]], template: function PebSectionElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PebSectionElement_div_0_Template, 1, 0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1, 2);
            i0.ɵɵelementContainer(3, 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.selected);
        } }, directives: [i1.NgIf, i2.PebRendererChildrenSlotDirective], styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", "[_nghost-%COMP%]{position:relative}#main-slot[_ngcontent-%COMP%]{position:relative;height:100%;margin:0 auto}"] });
    return PebSectionElement;
}(PebAbstractElement));
export { PebSectionElement };
var ɵPebSectionElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebSectionElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebSectionElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-section',
                templateUrl: './section.element.html',
                styleUrls: [
                    '../../_abstract/abstract.element.scss',
                    './section.element.scss'
                ],
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], wrapperEl: [{
            type: ViewChild,
            args: ['wrapper']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9nZW5lcmFsL3NlY3Rpb24vc2VjdGlvbi5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC9zZWN0aW9uL3NlY3Rpb24uZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7SUNFdEUseUJBQTZDOztBREM3QyxJQUFNLDZCQUE2QixHQUFHLElBQUksQ0FBQztBQUUzQztJQVF1QyxxQ0FBa0I7SUFSekQ7O0tBd0RDO0lBMUNDLHNCQUFJLHVDQUFRO2FBQVo7O1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ3hCLE9BQU8sUUFBRSxJQUFJLENBQUMsU0FBUywwQ0FBRSxhQUFhO2FBQ3ZDLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFZO2FBQWhCO1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUU7b0JBQ0osUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87b0JBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07b0JBQzFCLEtBQUssRUFBRSxNQUFNO29CQUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07d0JBQ3hCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUk7d0JBQ2pELENBQUMsQ0FBQyxJQUFJO29CQUNSLHVDQUF1QztvQkFDdkMsc0NBQXNDO29CQUN0QyxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlO3dCQUMxQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLElBQUk7d0JBQzlDLENBQUMsQ0FBQyxJQUFJO29CQUNSLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7d0JBQ3hDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7d0JBQzVCLENBQUMsQ0FBQyxJQUFJO29CQUNSLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCO3dCQUNoRCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0I7d0JBQ2hDLENBQUMsQ0FBQyxJQUFJO29CQUNSLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCO3dCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0I7d0JBQzlCLENBQUMsQ0FBQyxJQUFJO29CQUNSLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWU7d0JBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWU7d0JBQzdCLENBQUMsQ0FBQyxJQUFJO2lCQUNUO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUzt3QkFDdEMsQ0FBQyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUk7d0JBQzNELENBQUMsQ0FBQyxNQUFNO2lCQUNYO2FBQ0YsQ0FBQztRQUNKLENBQUM7OztPQUFBO2dIQS9DVSxpQkFBaUI7MERBQWpCLGlCQUFpQjs7Ozs7O1lDWDlCLGtFQUF1QztZQUV2QyxpQ0FDRTtZQUFBLDJCQUF3RDtZQUMxRCxpQkFBTTs7WUFKRCxtQ0FBZ0I7OzRCREhyQjtDQThEQyxBQXhERCxDQVF1QyxrQkFBa0IsR0FnRHhEO1NBaERZLGlCQUFpQjs4REFBakIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FSN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDVCx1Q0FBdUM7b0JBQ3ZDLHdCQUF3QjtpQkFDekI7YUFDRjs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsU0FBUzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJFbGVtZW50LCBQZWJFbGVtZW50U3R5bGVzIH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbmNvbnN0IFNFQ1RJT05fREVTS1RPUF9XUkFQUEVSX1dJRFRIID0gMTAyNDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtc2VjdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWN0aW9uLmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudC5zY3NzJyxcbiAgICAnLi9zZWN0aW9uLmVsZW1lbnQuc2NzcydcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGViU2VjdGlvbkVsZW1lbnQgZXh0ZW5kcyBQZWJBYnN0cmFjdEVsZW1lbnQge1xuICBASW5wdXQoKSBlbGVtZW50OiBQZWJFbGVtZW50O1xuICBASW5wdXQoKSBzdHlsZXM6IFBlYkVsZW1lbnRTdHlsZXM7XG5cbiAgQFZpZXdDaGlsZCgnd3JhcHBlcicpIHdyYXBwZXJFbDogRWxlbWVudFJlZjtcblxuICBnZXQgZWxlbWVudHMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudH0ge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB3cmFwcGVyOiB0aGlzLndyYXBwZXJFbD8ubmF0aXZlRWxlbWVudCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG1hcHBlZFN0eWxlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgcGFkZGluZzogdGhpcy5zdHlsZXMucGFkZGluZyxcbiAgICAgICAgbWFyZ2luOiB0aGlzLnN0eWxlcy5tYXJnaW4sXG4gICAgICAgIHdpZHRoOiAnMTAwJScsIC8vIEZJWE1FOiBkZXBlbmRpbmcgb24gc2NyZWVuXG4gICAgICAgIGhlaWdodDogdGhpcy5zdHlsZXMuaGVpZ2h0XG4gICAgICAgICAgPyArdGhpcy5zdHlsZXMuaGVpZ2h0ICogdGhpcy5vcHRpb25zLnNjYWxlICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgLy8gVE9ETzogVGhpbmsgYWJvdXQgYWxsb3dpbmcgc2hvcnRoYW5kXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHRoaXMuc3R5bGVzLmJhY2tncm91bmQsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogdGhpcy5zdHlsZXMuYmFja2dyb3VuZEltYWdlXG4gICAgICAgICAgPyAndXJsKFwiJyArIHRoaXMuc3R5bGVzLmJhY2tncm91bmRJbWFnZSArICdcIiknXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogdGhpcy5zdHlsZXMuYmFja2dyb3VuZFNpemVcbiAgICAgICAgICA/IHRoaXMuc3R5bGVzLmJhY2tncm91bmRTaXplXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHRoaXMuc3R5bGVzLmJhY2tncm91bmRQb3NpdGlvblxuICAgICAgICAgID8gdGhpcy5zdHlsZXMuYmFja2dyb3VuZFBvc2l0aW9uXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiB0aGlzLnN0eWxlcy5iYWNrZ3JvdW5kUmVwZWF0XG4gICAgICAgICAgPyB0aGlzLnN0eWxlcy5iYWNrZ3JvdW5kUmVwZWF0XG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3R5bGVzLmJhY2tncm91bmRDb2xvclxuICAgICAgICAgID8gdGhpcy5zdHlsZXMuYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgfSxcbiAgICAgIHdyYXBwZXI6IHtcbiAgICAgICAgd2lkdGg6IHRoaXMub3B0aW9ucy5zY3JlZW4gPT09ICdkZXNrdG9wJ1xuICAgICAgICAgID8gU0VDVElPTl9ERVNLVE9QX1dSQVBQRVJfV0lEVEggKiB0aGlzLm9wdGlvbnMuc2NhbGUgKyAncHgnXG4gICAgICAgICAgOiAnMTAwJScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiIsIjwhLS0gVE9ETzogUmV0dXJuIHRoaXMgLS0+XG48IS0tPG5nLWNvbnRhaW5lciBwZWJSZW5kZXJlckNoaWxkcmVuU2xvdD1cImFic29sdXRlXCI+PC9uZy1jb250YWluZXI+LS0+XG5cbjxkaXYgKm5nSWY9XCJzZWxlY3RlZFwiIGNsYXNzPVwic2VsZWN0ZWRcIj48L2Rpdj5cblxuPGRpdiBpZD1cIm1haW4tc2xvdFwiICN3cmFwcGVyPlxuICA8bmctY29udGFpbmVyIHBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90PVwiXCI+PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==