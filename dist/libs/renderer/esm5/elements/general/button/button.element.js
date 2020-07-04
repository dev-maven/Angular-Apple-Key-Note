import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
var PebButtonElement = /** @class */ (function (_super) {
    __extends(PebButtonElement, _super);
    function PebButtonElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PebButtonElement.prototype, "elements", {
        get: function () {
            return {
                host: this.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebButtonElement.prototype, "mappedStyles", {
        get: function () {
            var styles = this.styles;
            var scale = this.options.scale;
            return {
                host: {
                    width: styles.width ? +styles.width * scale + 'px' : null,
                    position: styles.position || 'relative',
                    height: styles.height ? +styles.height * scale + 'px' : null,
                    backgroundColor: styles.backgroundColor || null,
                    textAlign: styles.textAlign || 'center',
                    padding: styles.padding ? +styles.padding * scale + 'px' : null,
                    borderRadius: styles.borderRadius ? +styles.borderRadius * scale + 'px' : null,
                    paddingRight: styles.paddingRight ? +styles.paddingRight * scale + 'px' : null,
                    paddingLeft: styles.paddingLeft ? +styles.paddingLeft * scale + 'px' : null,
                    color: styles.color || '#000'
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    PebButtonElement.prototype.onClick = function () {
        this.interact({ type: 'button.click' });
    };
    PebButtonElement.ɵfac = function PebButtonElement_Factory(t) { return ɵPebButtonElement_BaseFactory(t || PebButtonElement); };
    PebButtonElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebButtonElement, selectors: [["peb-element-button"]], hostBindings: function PebButtonElement_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function PebButtonElement_click_HostBindingHandler() { return ctx.onClick(); });
        } }, inputs: { element: "element", styles: "styles", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, template: function PebButtonElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.element.data.name);
        } }, styles: ["[_nghost-%COMP%]{display:inline-block}.wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%}img[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{margin:0}img[_ngcontent-%COMP%]{-webkit-margin-end:.5em;margin-inline-end:.5em}h1[_ngcontent-%COMP%]{font-size:1em;font-weight:inherit;display:inline-block}"], changeDetection: 0 });
    return PebButtonElement;
}(PebAbstractElement));
export { PebButtonElement };
var ɵPebButtonElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebButtonElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebButtonElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-button',
                templateUrl: './button.element.html',
                styleUrls: ['./button.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmVsZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2dlbmVyYWwvYnV0dG9uL2J1dHRvbi5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC9idXR0b24vYnV0dG9uLmVsZW1lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUl0RTtJQU1zQyxvQ0FBa0I7SUFOeEQ7O0tBd0NDO0lBOUJDLHNCQUFJLHNDQUFRO2FBQVo7WUFDRSxPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTthQUN6QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSwwQ0FBWTthQUFoQjtZQUNFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkIsSUFBQSwwQkFBSyxDQUFrQjtZQUUvQixPQUFRO2dCQUNOLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3pELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLFVBQVU7b0JBQ3ZDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDNUQsZUFBZSxFQUFFLE1BQU0sQ0FBQyxlQUFlLElBQUksSUFBSTtvQkFDL0MsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUTtvQkFDdkMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUMvRCxZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBRSxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ2hGLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFFLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxHQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDakYsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUM5RSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNO2lCQUM5QjthQUNGLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUdELGtDQUFPLEdBRFA7UUFFRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs2R0FoQ1UsZ0JBQWdCO3lEQUFoQixnQkFBZ0I7OztZQ1g3Qiw0QkFBTTtZQUFBLFlBQXVCO1lBQUEsaUJBQU87O1lBQTlCLGVBQXVCO1lBQXZCLDJDQUF1Qjs7MkJEQTdCO0NBNkNDLEFBeENELENBTXNDLGtCQUFrQixHQWtDdkQ7U0FsQ1ksZ0JBQWdCOzZEQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQU41QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkEwQkwsWUFBWTttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGViQWJzdHJhY3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViUmVuZGVyZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vcmVuZGVyZXIudHlwZXMnO1xuaW1wb3J0IHsgUGViRWxlbWVudCwgUGViRWxlbWVudFN0eWxlcyB9IGZyb20gJ0BwZS9idWlsZGVyLWNvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZWItZWxlbWVudC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5lbGVtZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGViQnV0dG9uRWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCB7XG4gIEBJbnB1dCgpIGVsZW1lbnQ6IFBlYkVsZW1lbnQ7XG4gIEBJbnB1dCgpIHN0eWxlczogUGViRWxlbWVudFN0eWxlcztcbiAgQElucHV0KCkgb3B0aW9uczogUGViUmVuZGVyZXJPcHRpb25zO1xuICBnZXQgZWxlbWVudHMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudCB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgIH07XG4gIH1cbiAgZ2V0IG1hcHBlZFN0eWxlcygpOiBhbnkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuc3R5bGVzO1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIHJldHVybiAge1xuICAgICAgaG9zdDoge1xuICAgICAgICB3aWR0aDogc3R5bGVzLndpZHRoID8gK3N0eWxlcy53aWR0aCAqIHNjYWxlICsgJ3B4JyA6IG51bGwsXG4gICAgICAgIHBvc2l0aW9uOiBzdHlsZXMucG9zaXRpb24gfHwgJ3JlbGF0aXZlJyxcbiAgICAgICAgaGVpZ2h0OiBzdHlsZXMuaGVpZ2h0ID8gK3N0eWxlcy5oZWlnaHQgKiBzY2FsZSArICdweCcgOiBudWxsLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0eWxlcy5iYWNrZ3JvdW5kQ29sb3IgfHwgbnVsbCxcbiAgICAgICAgdGV4dEFsaWduOiBzdHlsZXMudGV4dEFsaWduIHx8ICdjZW50ZXInLFxuICAgICAgICBwYWRkaW5nOiBzdHlsZXMucGFkZGluZyA/ICtzdHlsZXMucGFkZGluZyAqIHNjYWxlICsgJ3B4JyA6IG51bGwsXG4gICAgICAgIGJvcmRlclJhZGl1czogc3R5bGVzLmJvcmRlclJhZGl1cyA/ICsgc3R5bGVzLmJvcmRlclJhZGl1cyAqIHNjYWxlICArICdweCcgOiBudWxsLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHN0eWxlcy5wYWRkaW5nUmlnaHQgPyArIHN0eWxlcy5wYWRkaW5nUmlnaHQgKiBzY2FsZSAgICsgJ3B4JyA6IG51bGwsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBzdHlsZXMucGFkZGluZ0xlZnQgPyArIHN0eWxlcy5wYWRkaW5nTGVmdCAqIHNjYWxlICAgKyAncHgnIDogbnVsbCxcbiAgICAgICAgY29sb3I6IHN0eWxlcy5jb2xvciB8fCAnIzAwMCdcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmludGVyYWN0KHsgdHlwZTogJ2J1dHRvbi5jbGljaycgfSk7XG4gIH1cblxufVxuIiwiPHNwYW4+e3sgZWxlbWVudC5kYXRhLm5hbWUgfX08L3NwYW4+XG4iXX0=