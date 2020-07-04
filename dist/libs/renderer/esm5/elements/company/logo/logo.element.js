import { __extends } from "tslib";
import { Component, HostListener, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PebBusinessLogoElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Loading...");
    i0.ɵɵelementContainerEnd();
} }
function PebBusinessLogoElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Error");
    i0.ɵɵelementContainerEnd();
} }
function PebBusinessLogoElement_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Empty");
    i0.ɵɵelementContainerEnd();
} }
function PebBusinessLogoElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "img", 3);
    i0.ɵɵelementStart(3, "h1");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r540 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r540.context.data.logoUrl, i0.ɵɵsanitizeUrl)("alt", ctx_r540.context.data.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r540.context.data.name);
} }
var PebBusinessLogoElement = /** @class */ (function (_super) {
    __extends(PebBusinessLogoElement, _super);
    function PebBusinessLogoElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PebElementContextState = PebElementContextState;
        return _this;
    }
    Object.defineProperty(PebBusinessLogoElement.prototype, "elements", {
        get: function () {
            return {
                host: this.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebBusinessLogoElement.prototype, "mappedStyles", {
        get: function () {
            var scale = this.options.scale;
            // TODO: Filter out nulls
            return {
                host: {
                    position: 'relative',
                    color: this.styles.color,
                    fontSize: this.styles.fontSize
                        ? (this.styles.fontSize * scale) + 'px'
                        : null,
                    left: this.styles.left
                        ? (this.styles.left * scale) + 'px'
                        : null,
                    right: this.styles.right
                        ? (this.styles.right * scale) + 'px'
                        : null,
                    top: this.styles.to
                        ? (this.styles.top * scale) + 'px'
                        : null,
                    bottom: this.styles.bottom
                        ? (this.styles.bottom * scale) + 'px'
                        : null,
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    PebBusinessLogoElement.prototype.onClick = function () {
        this.interact({ type: 'logo.click' });
    };
    PebBusinessLogoElement.ɵfac = function PebBusinessLogoElement_Factory(t) { return ɵPebBusinessLogoElement_BaseFactory(t || PebBusinessLogoElement); };
    PebBusinessLogoElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebBusinessLogoElement, selectors: [["peb-element-business-logo"]], hostBindings: function PebBusinessLogoElement_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function PebBusinessLogoElement_click_HostBindingHandler() { return ctx.onClick(); });
        } }, inputs: { element: "element", styles: "styles", context: "context" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "wrapper"], [3, "src", "alt"]], template: function PebBusinessLogoElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, PebBusinessLogoElement_ng_container_1_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(2, PebBusinessLogoElement_ng_container_2_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(3, PebBusinessLogoElement_ng_container_3_Template, 2, 0, "ng-container", 1);
            i0.ɵɵtemplate(4, PebBusinessLogoElement_ng_container_4_Template, 5, 3, "ng-container", 1);
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
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase], styles: ["[_nghost-%COMP%]{display:inline-block}.wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}h1[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{margin:0}img[_ngcontent-%COMP%]{-webkit-margin-end:.5em;margin-inline-end:.5em}h1[_ngcontent-%COMP%]{font-size:1em;font-weight:inherit;display:inline-block}"] });
    return PebBusinessLogoElement;
}(PebAbstractElement));
export { PebBusinessLogoElement };
var ɵPebBusinessLogoElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebBusinessLogoElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebBusinessLogoElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-business-logo',
                templateUrl: './logo.element.html',
                styleUrls: ['./logo.element.scss']
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], context: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9jb21wYW55L2xvZ28vbG9nby5lbGVtZW50LnRzIiwiZWxlbWVudHMvY29tcGFueS9sb2dvL2xvZ28uZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFtRCxzQkFBc0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0lDRHpHLDZCQUE2RDtJQUFBLDBCQUFVO0lBQUEsMEJBQWU7OztJQUN0Riw2QkFBMkQ7SUFBQSxxQkFBSztJQUFBLDBCQUFlOzs7SUFDL0UsNkJBQTJEO0lBQUEscUJBQUs7SUFBQSwwQkFBZTs7O0lBQy9FLDZCQUNFO0lBQUEsOEJBQ0U7SUFBQSx5QkFDQTtJQUFBLDBCQUFJO0lBQUEsWUFBdUI7SUFBQSxpQkFBSztJQUNsQyxpQkFBTTtJQUNSLDBCQUFlOzs7SUFITixlQUE0QjtJQUE1QixxRUFBNEIsbUNBQUE7SUFDN0IsZUFBdUI7SUFBdkIsZ0RBQXVCOztBREVqQztJQUs0QywwQ0FBa0I7SUFMOUQ7UUFBQSxxRUFpREM7UUF2Q0MsNEJBQXNCLEdBQUcsc0JBQXNCLENBQUM7O0tBdUNqRDtJQXJDQyxzQkFBSSw0Q0FBUTthQUFaO1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDekIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0RBQVk7YUFBaEI7WUFDVSxJQUFBLDBCQUFLLENBQWtCO1lBRS9CLHlCQUF5QjtZQUN6QixPQUFPO2dCQUNMLElBQUksRUFBRTtvQkFDSixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTt3QkFDNUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFrQixHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUk7d0JBQ2pELENBQUMsQ0FBQyxJQUFJO29CQUNSLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7d0JBQ3BCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBYyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUk7d0JBQzdDLENBQUMsQ0FBQyxJQUFJO29CQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7d0JBQ3RCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBZSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUk7d0JBQzlDLENBQUMsQ0FBQyxJQUFJO29CQUNSLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQ2pCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBYSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUk7d0JBQzVDLENBQUMsQ0FBQyxJQUFJO29CQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07d0JBQ3hCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBZ0IsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJO3dCQUMvQyxDQUFDLENBQUMsSUFBSTtpQkFDVDthQUNGLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUdELHdDQUFPLEdBRFA7UUFFRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQzsrSEEzQ1Usc0JBQXNCOytEQUF0QixzQkFBc0I7OztZQ2RuQyxnQ0FDRTtZQUFBLHlGQUE2RDtZQUM3RCx5RkFBMkQ7WUFDM0QseUZBQTJEO1lBQzNELHlGQUNFO1lBS0osMEJBQWU7O1lBVkQsNENBQTBCO1lBQ3hCLGVBQThDO1lBQTlDLGlFQUE4QztZQUM5QyxlQUE0QztZQUE1QywrREFBNEM7WUFDNUMsZUFBNEM7WUFBNUMsK0RBQTRDO1lBQzVDLGVBQTRDO1lBQTVDLCtEQUE0Qzs7aUNESjVEO0NBMERDLEFBakRELENBSzRDLGtCQUFrQixHQTRDN0Q7U0E1Q1ksc0JBQXNCO21FQUF0QixzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLHFCQUFxQjtnQkFDbEMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDbkM7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQXFDTCxZQUFZO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYkVsZW1lbnQsIFBlYkVsZW1lbnRTdHlsZXMsIFBlYkVsZW1lbnRDb250ZXh0LCBQZWJFbGVtZW50Q29udGV4dFN0YXRlIH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbmV4cG9ydCB0eXBlIExvZ29Db250ZXh0ID0gUGViRWxlbWVudENvbnRleHQ8e1xuICBsb2dvVXJsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn0+O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZWItZWxlbWVudC1idXNpbmVzcy1sb2dvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ28uZWxlbWVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9nby5lbGVtZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQZWJCdXNpbmVzc0xvZ29FbGVtZW50IGV4dGVuZHMgUGViQWJzdHJhY3RFbGVtZW50IHtcbiAgQElucHV0KCkgZWxlbWVudDogUGViRWxlbWVudDtcbiAgQElucHV0KCkgc3R5bGVzOiBQZWJFbGVtZW50U3R5bGVzO1xuICBASW5wdXQoKSBjb250ZXh0OiBMb2dvQ29udGV4dDtcblxuICBQZWJFbGVtZW50Q29udGV4dFN0YXRlID0gUGViRWxlbWVudENvbnRleHRTdGF0ZTtcblxuICBnZXQgZWxlbWVudHMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudH0ge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgLy8gVE9ETzogRmlsdGVyIG91dCBudWxsc1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBjb2xvcjogdGhpcy5zdHlsZXMuY29sb3IsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnN0eWxlcy5mb250U2l6ZVxuICAgICAgICAgID8gKHRoaXMuc3R5bGVzLmZvbnRTaXplIGFzIG51bWJlciAqIHNjYWxlKSArICdweCdcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGxlZnQ6IHRoaXMuc3R5bGVzLmxlZnRcbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy5sZWZ0IGFzIG51bWJlciAqIHNjYWxlKSArICdweCdcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIHJpZ2h0OiB0aGlzLnN0eWxlcy5yaWdodFxuICAgICAgICAgID8gKHRoaXMuc3R5bGVzLnJpZ2h0IGFzIG51bWJlciAqIHNjYWxlKSArICdweCdcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIHRvcDogdGhpcy5zdHlsZXMudG9cbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy50b3AgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm90dG9tOiB0aGlzLnN0eWxlcy5ib3R0b21cbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy5ib3R0b20gYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuaW50ZXJhY3QoeyB0eXBlOiAnbG9nby5jbGljaycgfSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbnRleHQuc3RhdGVcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5Mb2FkaW5nXCI+TG9hZGluZy4uLjwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLkVycm9yXCI+RXJyb3I8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5FbXB0eVwiPkVtcHR5PC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuUmVhZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgPGltZyBbc3JjXT1cImNvbnRleHQuZGF0YS5sb2dvVXJsXCIgW2FsdF09XCJjb250ZXh0LmRhdGEubmFtZVwiIC8+XG4gICAgICA8aDE+e3sgY29udGV4dC5kYXRhLm5hbWUgfX08L2gxPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuIl19