import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
var PebImageElement = /** @class */ (function (_super) {
    __extends(PebImageElement, _super);
    function PebImageElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PebImageElement.prototype, "elements", {
        get: function () {
            return {
                host: this.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebImageElement.prototype, "mappedStyles", {
        get: function () {
            var scale = this.options.scale;
            // TODO: Filter out nulls
            return {
                host: {
                    position: 'relative',
                    color: this.styles.color,
                    width: this.styles.width
                        ? (this.styles.width * scale) + 'px'
                        : '100%',
                    height: this.styles.height
                        ? (this.styles.height * scale) + 'px'
                        : '100%',
                    left: this.styles.left
                        ? (this.styles.left * scale) + 'px'
                        : null,
                    right: this.styles.right
                        ? (this.styles.right * scale) + 'px'
                        : null,
                    top: this.styles.top
                        ? (this.styles.top * scale) + 'px'
                        : null,
                    bottom: this.styles.bottom
                        ? (this.styles.bottom * scale) + 'px'
                        : null,
                    border: this.styles.border
                        ? this.styles.border
                        : null,
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    PebImageElement.ɵfac = function PebImageElement_Factory(t) { return ɵPebImageElement_BaseFactory(t || PebImageElement); };
    PebImageElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebImageElement, selectors: [["peb-element-image"]], inputs: { element: "element", styles: "styles", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "src"]], template: function PebImageElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "img", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("src", ctx.element.data.src, i0.ɵɵsanitizeUrl);
        } }, styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}"], changeDetection: 0 });
    return PebImageElement;
}(PebAbstractElement));
export { PebImageElement };
var ɵPebImageElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebImageElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebImageElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-image',
                templateUrl: './image.element.html',
                styleUrls: ['./image.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZ2VuZXJhbC9pbWFnZS9pbWFnZS5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC9pbWFnZS9pbWFnZS5lbGVtZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUl0RTtJQU1xQyxtQ0FBa0I7SUFOdkQ7O0tBa0RDO0lBdENDLHNCQUFJLHFDQUFRO2FBQVo7WUFDRSxPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTthQUN6QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBWTthQUFoQjtZQUNVLElBQUEsMEJBQUssQ0FBa0I7WUFFL0IseUJBQXlCO1lBQ3pCLE9BQU87Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLFFBQVEsRUFBRSxVQUFVO29CQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO3dCQUN0QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQWUsR0FBRyxLQUFLLENBQUMsR0FBSSxJQUFJO3dCQUMvQyxDQUFDLENBQUMsTUFBTTtvQkFDVixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO3dCQUN4QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQWdCLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSTt3QkFDL0MsQ0FBQyxDQUFDLE1BQU07b0JBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTt3QkFDcEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFjLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSTt3QkFDN0MsQ0FBQyxDQUFDLElBQUk7b0JBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSzt3QkFDdEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFlLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSTt3QkFDOUMsQ0FBQyxDQUFDLElBQUk7b0JBQ1IsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzt3QkFDbEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSTt3QkFDNUMsQ0FBQyxDQUFDLElBQUk7b0JBQ1IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTt3QkFDeEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFnQixHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUk7d0JBQy9DLENBQUMsQ0FBQyxJQUFJO29CQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07d0JBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07d0JBQ3BCLENBQUMsQ0FBQyxJQUFJO2lCQUNUO2FBQ0YsQ0FBQztRQUNKLENBQUM7OztPQUFBOzBHQTNDVSxlQUFlO3dEQUFmLGVBQWU7WUNYNUIseUJBQ0E7O1lBREssNERBQXdCOzswQkRBN0I7Q0F1REMsQUFsREQsQ0FNcUMsa0JBQWtCLEdBNEN0RDtTQTVDWSxlQUFlOzREQUFmLGVBQWU7a0RBQWYsZUFBZTtjQU4zQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLHNCQUFzQjtnQkFDbkMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ25DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYkVsZW1lbnQsIFBlYkVsZW1lbnRTdHlsZXMgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcbmltcG9ydCB7IFBlYlJlbmRlcmVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3JlbmRlcmVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtaW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UuZWxlbWVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UuZWxlbWVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBlYkltYWdlRWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCB7XG5cbiAgQElucHV0KCkgZWxlbWVudDogUGViRWxlbWVudDtcbiAgQElucHV0KCkgc3R5bGVzOiBQZWJFbGVtZW50U3R5bGVzO1xuICBASW5wdXQoKSBvcHRpb25zOiBQZWJSZW5kZXJlck9wdGlvbnM7XG5cbiAgZ2V0IGVsZW1lbnRzKCk6IHsgW2tleTogc3RyaW5nXTogSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdIH0ge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgLy8gVE9ETzogRmlsdGVyIG91dCBudWxsc1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBjb2xvcjogdGhpcy5zdHlsZXMuY29sb3IsXG4gICAgICAgIHdpZHRoOiB0aGlzLnN0eWxlcy53aWR0aFxuICAgICAgICAgID8gKHRoaXMuc3R5bGVzLndpZHRoIGFzIG51bWJlciAqIHNjYWxlKSAgKyAncHgnXG4gICAgICAgICAgOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogdGhpcy5zdHlsZXMuaGVpZ2h0XG4gICAgICAgICAgPyAodGhpcy5zdHlsZXMuaGVpZ2h0IGFzIG51bWJlciAqIHNjYWxlKSArICdweCdcbiAgICAgICAgICA6ICcxMDAlJyxcbiAgICAgICAgbGVmdDogdGhpcy5zdHlsZXMubGVmdFxuICAgICAgICAgID8gKHRoaXMuc3R5bGVzLmxlZnQgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgcmlnaHQ6IHRoaXMuc3R5bGVzLnJpZ2h0XG4gICAgICAgICAgPyAodGhpcy5zdHlsZXMucmlnaHQgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgdG9wOiB0aGlzLnN0eWxlcy50b3BcbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy50b3AgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm90dG9tOiB0aGlzLnN0eWxlcy5ib3R0b21cbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy5ib3R0b20gYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyOiB0aGlzLnN0eWxlcy5ib3JkZXJcbiAgICAgICAgICA/IHRoaXMuc3R5bGVzLmJvcmRlclxuICAgICAgICAgIDogbnVsbCxcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iLCI8aW1nIFtzcmNdPVwiZWxlbWVudC5kYXRhLnNyY1wiPlxuIl19