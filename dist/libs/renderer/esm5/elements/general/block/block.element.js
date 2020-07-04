import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../selectors/children-slot.directive";
function PebBlockElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} }
var PebBlockElement = /** @class */ (function (_super) {
    __extends(PebBlockElement, _super);
    function PebBlockElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PebBlockElement.prototype, "elements", {
        get: function () {
            return {
                host: this.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebBlockElement.prototype, "mappedStyles", {
        get: function () {
            var styles = this.styles;
            var scale = this.options.scale;
            return {
                host: {
                    position: styles.position || 'relative',
                    width: styles.width ? +styles.width * scale + 'px' : null,
                    height: styles.height ? +styles.height * scale + 'px' : null,
                    backgroundColor: styles.backgroundColor || null,
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    PebBlockElement.ɵfac = function PebBlockElement_Factory(t) { return ɵPebBlockElement_BaseFactory(t || PebBlockElement); };
    PebBlockElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebBlockElement, selectors: [["peb-element-block"]], inputs: { element: "element", styles: "styles", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [["class", "selected", 4, "ngIf"], ["pebRendererChildrenSlot", ""], [1, "selected"]], template: function PebBlockElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PebBlockElement_div_0_Template, 1, 0, "div", 0);
            i0.ɵɵelementContainer(1, 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.selected);
        } }, directives: [i1.NgIf, i2.PebRendererChildrenSlotDirective], styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}"] });
    return PebBlockElement;
}(PebAbstractElement));
export { PebBlockElement };
var ɵPebBlockElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebBlockElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebBlockElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-block',
                templateUrl: './block.element.html',
                styleUrls: [
                    '../../_abstract/abstract.element.scss',
                ]
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZ2VuZXJhbC9ibG9jay9ibG9jay5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC9ibG9jay9ibG9jay5lbGVtZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7OztJQ0N0RSx5QkFBNkM7O0FESTdDO0lBT3FDLG1DQUFrQjtJQVB2RDs7S0FnQ0M7SUFwQkMsc0JBQUkscUNBQVE7YUFBWjtZQUNFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO2FBQ3pCLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFZO2FBQWhCO1lBQ0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQXFCLENBQUM7WUFDbEMsSUFBQSwwQkFBSyxDQUFrQjtZQUUvQixPQUFRO2dCQUNOLElBQUksRUFBRTtvQkFDSixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsSUFBSSxVQUFVO29CQUN2QyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3pELE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDNUQsZUFBZSxFQUFFLE1BQU0sQ0FBQyxlQUFlLElBQUksSUFBSTtpQkFDaEQ7YUFDRixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7MEdBdkJVLGVBQWU7d0RBQWYsZUFBZTtZQ1g1QixnRUFBdUM7WUFFdkMsMkJBQXFEOztZQUZoRCxtQ0FBZ0I7OzBCREZyQjtDQXNDQyxBQWhDRCxDQU9xQyxrQkFBa0IsR0F5QnREO1NBekJZLGVBQWU7NERBQWYsZUFBZTtrREFBZixlQUFlO2NBUDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsc0JBQXNCO2dCQUNuQyxTQUFTLEVBQUU7b0JBQ1QsdUNBQXVDO2lCQUN4QzthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGViQWJzdHJhY3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgQmxvY2tTdHlsZXMgfSBmcm9tICcuL2Jsb2NrLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBQZWJSZW5kZXJlck9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9yZW5kZXJlci50eXBlcyc7XG5pbXBvcnQgeyBQZWJFbGVtZW50U3R5bGVzLCBQZWJFbGVtZW50IH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1lbGVtZW50LWJsb2NrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jsb2NrLmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudC5zY3NzJyxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQZWJCbG9ja0VsZW1lbnQgZXh0ZW5kcyBQZWJBYnN0cmFjdEVsZW1lbnQge1xuICBASW5wdXQoKSBlbGVtZW50OiBQZWJFbGVtZW50O1xuICBASW5wdXQoKSBzdHlsZXM6IFBlYkVsZW1lbnRTdHlsZXM7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IFBlYlJlbmRlcmVyT3B0aW9ucztcblxuICBnZXQgZWxlbWVudHMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudCB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgIH07XG4gIH1cblxuICBnZXQgbWFwcGVkU3R5bGVzKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuc3R5bGVzIGFzIEJsb2NrU3R5bGVzO1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIHJldHVybiAge1xuICAgICAgaG9zdDoge1xuICAgICAgICBwb3NpdGlvbjogc3R5bGVzLnBvc2l0aW9uIHx8ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiBzdHlsZXMud2lkdGggPyArc3R5bGVzLndpZHRoICogc2NhbGUgKyAncHgnIDogbnVsbCxcbiAgICAgICAgaGVpZ2h0OiBzdHlsZXMuaGVpZ2h0ID8gK3N0eWxlcy5oZWlnaHQgKiBzY2FsZSArICdweCcgOiBudWxsLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0eWxlcy5iYWNrZ3JvdW5kQ29sb3IgfHwgbnVsbCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG59XG4iLCI8IS0tPHNwYW4gKm5nSWY9XCJob3ZlcmVkXCIgY2xhc3M9XCJlbGVtZW50LWNhcHRpb25cIj57e2VsZW1lbnQudHlwZX19PC9zcGFuPi0tPlxuXG48ZGl2ICpuZ0lmPVwic2VsZWN0ZWRcIiBjbGFzcz1cInNlbGVjdGVkXCI+PC9kaXY+XG5cbjxuZy1jb250YWluZXIgcGViUmVuZGVyZXJDaGlsZHJlblNsb3Q+PC9uZy1jb250YWluZXI+XG4iXX0=