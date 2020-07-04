import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../selectors/children-slot.directive";
const _c0 = ["wrapper"];
function PebSectionElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} }
const SECTION_DESKTOP_WRAPPER_WIDTH = 1024;
export class PebSectionElement extends PebAbstractElement {
    get elements() {
        var _a;
        return {
            host: this.nativeElement,
            wrapper: (_a = this.wrapperEl) === null || _a === void 0 ? void 0 : _a.nativeElement,
        };
    }
    get mappedStyles() {
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
    }
}
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
const ɵPebSectionElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebSectionElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9nZW5lcmFsL3NlY3Rpb24vc2VjdGlvbi5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC9zZWN0aW9uL3NlY3Rpb24uZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7OztJQ0V0RSx5QkFBNkM7O0FEQzdDLE1BQU0sNkJBQTZCLEdBQUcsSUFBSSxDQUFDO0FBVTNDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxrQkFBa0I7SUFNdkQsSUFBSSxRQUFROztRQUNWLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDeEIsT0FBTyxRQUFFLElBQUksQ0FBQyxTQUFTLDBDQUFFLGFBQWE7U0FDdkMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPO1lBQ0wsSUFBSSxFQUFFO2dCQUNKLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2dCQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUMxQixLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO29CQUN4QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJO29CQUNqRCxDQUFDLENBQUMsSUFBSTtnQkFDUix1Q0FBdUM7Z0JBQ3ZDLHNDQUFzQztnQkFDdEMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZTtvQkFDMUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxJQUFJO29CQUM5QyxDQUFDLENBQUMsSUFBSTtnQkFDUixjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO29CQUN4QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO29CQUM1QixDQUFDLENBQUMsSUFBSTtnQkFDUixrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQjtvQkFDaEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCO29CQUNoQyxDQUFDLENBQUMsSUFBSTtnQkFDUixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQjtvQkFDNUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCO29CQUM5QixDQUFDLENBQUMsSUFBSTtnQkFDUixlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlO29CQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlO29CQUM3QixDQUFDLENBQUMsSUFBSTthQUNUO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTO29CQUN0QyxDQUFDLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSTtvQkFDM0QsQ0FBQyxDQUFDLE1BQU07YUFDWDtTQUNGLENBQUM7SUFDSixDQUFDOzs0R0EvQ1UsaUJBQWlCO3NEQUFqQixpQkFBaUI7Ozs7OztRQ1g5QixrRUFBdUM7UUFFdkMsaUNBQ0U7UUFBQSwyQkFBd0Q7UUFDMUQsaUJBQU07O1FBSkQsbUNBQWdCOztnRURXUixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQVI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFO29CQUNULHVDQUF1QztvQkFDdkMsd0JBQXdCO2lCQUN6QjthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxTQUFTO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYkVsZW1lbnQsIFBlYkVsZW1lbnRTdHlsZXMgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcblxuY29uc3QgU0VDVElPTl9ERVNLVE9QX1dSQVBQRVJfV0lEVEggPSAxMDI0O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZWItZWxlbWVudC1zZWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlY3Rpb24uZWxlbWVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50LnNjc3MnLFxuICAgICcuL3NlY3Rpb24uZWxlbWVudC5zY3NzJ1xuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQZWJTZWN0aW9uRWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCB7XG4gIEBJbnB1dCgpIGVsZW1lbnQ6IFBlYkVsZW1lbnQ7XG4gIEBJbnB1dCgpIHN0eWxlczogUGViRWxlbWVudFN0eWxlcztcblxuICBAVmlld0NoaWxkKCd3cmFwcGVyJykgd3JhcHBlckVsOiBFbGVtZW50UmVmO1xuXG4gIGdldCBlbGVtZW50cygpOiB7IFtrZXk6IHN0cmluZ106IEhUTUxFbGVtZW50fSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICAgIHdyYXBwZXI6IHRoaXMud3JhcHBlckVsPy5uYXRpdmVFbGVtZW50LFxuICAgIH07XG4gIH1cblxuICBnZXQgbWFwcGVkU3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBwYWRkaW5nOiB0aGlzLnN0eWxlcy5wYWRkaW5nLFxuICAgICAgICBtYXJnaW46IHRoaXMuc3R5bGVzLm1hcmdpbixcbiAgICAgICAgd2lkdGg6ICcxMDAlJywgLy8gRklYTUU6IGRlcGVuZGluZyBvbiBzY3JlZW5cbiAgICAgICAgaGVpZ2h0OiB0aGlzLnN0eWxlcy5oZWlnaHRcbiAgICAgICAgICA/ICt0aGlzLnN0eWxlcy5oZWlnaHQgKiB0aGlzLm9wdGlvbnMuc2NhbGUgKyAncHgnXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICAvLyBUT0RPOiBUaGluayBhYm91dCBhbGxvd2luZyBzaG9ydGhhbmRcbiAgICAgICAgLy8gYmFja2dyb3VuZDogdGhpcy5zdHlsZXMuYmFja2dyb3VuZCxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiB0aGlzLnN0eWxlcy5iYWNrZ3JvdW5kSW1hZ2VcbiAgICAgICAgICA/ICd1cmwoXCInICsgdGhpcy5zdHlsZXMuYmFja2dyb3VuZEltYWdlICsgJ1wiKSdcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiB0aGlzLnN0eWxlcy5iYWNrZ3JvdW5kU2l6ZVxuICAgICAgICAgID8gdGhpcy5zdHlsZXMuYmFja2dyb3VuZFNpemVcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogdGhpcy5zdHlsZXMuYmFja2dyb3VuZFBvc2l0aW9uXG4gICAgICAgICAgPyB0aGlzLnN0eWxlcy5iYWNrZ3JvdW5kUG9zaXRpb25cbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IHRoaXMuc3R5bGVzLmJhY2tncm91bmRSZXBlYXRcbiAgICAgICAgICA/IHRoaXMuc3R5bGVzLmJhY2tncm91bmRSZXBlYXRcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdHlsZXMuYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgPyB0aGlzLnN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICA6IG51bGwsXG4gICAgICB9LFxuICAgICAgd3JhcHBlcjoge1xuICAgICAgICB3aWR0aDogdGhpcy5vcHRpb25zLnNjcmVlbiA9PT0gJ2Rlc2t0b3AnXG4gICAgICAgICAgPyBTRUNUSU9OX0RFU0tUT1BfV1JBUFBFUl9XSURUSCAqIHRoaXMub3B0aW9ucy5zY2FsZSArICdweCdcbiAgICAgICAgICA6ICcxMDAlJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIiwiPCEtLSBUT0RPOiBSZXR1cm4gdGhpcyAtLT5cbjwhLS08bmctY29udGFpbmVyIHBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90PVwiYWJzb2x1dGVcIj48L25nLWNvbnRhaW5lcj4tLT5cblxuPGRpdiAqbmdJZj1cInNlbGVjdGVkXCIgY2xhc3M9XCJzZWxlY3RlZFwiPjwvZGl2PlxuXG48ZGl2IGlkPVwibWFpbi1zbG90XCIgI3dyYXBwZXI+XG4gIDxuZy1jb250YWluZXIgcGViUmVuZGVyZXJDaGlsZHJlblNsb3Q9XCJcIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19