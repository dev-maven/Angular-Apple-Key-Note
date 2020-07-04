import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PebVideoElement_source_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "source", 2);
} if (rf & 2) {
    var source_r607 = ctx.$implicit;
    i0.ɵɵproperty("src", source_r607, i0.ɵɵsanitizeUrl);
} }
var PebVideoElement = /** @class */ (function (_super) {
    __extends(PebVideoElement, _super);
    function PebVideoElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sources = [];
        return _this;
    }
    Object.defineProperty(PebVideoElement.prototype, "elements", {
        get: function () {
            return {
                host: this.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebVideoElement.prototype, "mappedStyles", {
        get: function () {
            var scale = this.options.scale;
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
    PebVideoElement.prototype.ngOnInit = function () {
        this.videoSettings = this.element.data.settings;
        this.sources = this.element.data.sources;
    };
    PebVideoElement.ɵfac = function PebVideoElement_Factory(t) { return ɵPebVideoElement_BaseFactory(t || PebVideoElement); };
    PebVideoElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebVideoElement, selectors: [["peb-element-video"]], inputs: { element: "element", styles: "styles", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [[3, "controls", "autoplay", "loop"], [3, "src", 4, "ngFor", "ngForOf"], [3, "src"]], template: function PebVideoElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "video", 0);
            i0.ɵɵtemplate(1, PebVideoElement_source_1_Template, 1, 1, "source", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("controls", ctx.videoSettings.controls)("autoplay", ctx.videoSettings.autoplay)("loop", ctx.videoSettings.loop);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.sources);
        } }, directives: [i1.NgForOf], styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:fill;object-fit:fill}"], changeDetection: 0 });
    return PebVideoElement;
}(PebAbstractElement));
export { PebVideoElement };
var ɵPebVideoElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebVideoElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebVideoElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-video',
                templateUrl: './video.element.html',
                styleUrls: ['./video.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZ2VuZXJhbC92aWRlby92aWRlby5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC92aWRlby92aWRlby5lbGVtZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7O0lDQXBFLDRCQUNGOzs7SUFEVSxtREFBYzs7QURJeEI7SUFNcUMsbUNBQWtCO0lBTnZEO1FBQUEscUVBNkRDO1FBbERDLGFBQU8sR0FBYSxFQUFFLENBQUM7O0tBa0R4QjtJQTNDQyxzQkFBSSxxQ0FBUTthQUFaO1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDekIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQVk7YUFBaEI7WUFDVSxJQUFBLDBCQUFLLENBQWtCO1lBRS9CLE9BQU87Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLFFBQVEsRUFBRSxVQUFVO29CQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO3dCQUN0QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQWUsR0FBRyxLQUFLLENBQUMsR0FBSSxJQUFJO3dCQUMvQyxDQUFDLENBQUMsTUFBTTtvQkFDVixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO3dCQUN4QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQWdCLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSTt3QkFDL0MsQ0FBQyxDQUFDLE1BQU07b0JBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTt3QkFDcEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFjLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSTt3QkFDN0MsQ0FBQyxDQUFDLElBQUk7b0JBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSzt3QkFDdEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFlLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSTt3QkFDOUMsQ0FBQyxDQUFDLElBQUk7b0JBQ1IsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzt3QkFDbEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSTt3QkFDNUMsQ0FBQyxDQUFDLElBQUk7b0JBQ1IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTt3QkFDeEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFnQixHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUk7d0JBQy9DLENBQUMsQ0FBQyxJQUFJO29CQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07d0JBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07d0JBQ3BCLENBQUMsQ0FBQyxJQUFJO2lCQUNUO2FBQ0YsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzNDLENBQUM7MEdBckRVLGVBQWU7d0RBQWYsZUFBZTtZQ1g1QixnQ0FDRTtZQUFBLHNFQUNGO1lBQUEsaUJBQVE7O1lBRkQscURBQW1DLHdDQUFBLGdDQUFBO1lBQ2pCLGVBQThCO1lBQTlCLHFDQUE4Qjs7MEJERHZEO0NBa0VDLEFBN0RELENBTXFDLGtCQUFrQixHQXVEdEQ7U0F2RFksZUFBZTs0REFBZixlQUFlO2tEQUFmLGVBQWU7Y0FOM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUNuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYkVsZW1lbnQsIFBlYkVsZW1lbnRTdHlsZXMgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcbmltcG9ydCB7IFBlYlJlbmRlcmVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3JlbmRlcmVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtdmlkZW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vdmlkZW8uZWxlbWVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlkZW8uZWxlbWVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBlYlZpZGVvRWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGVsZW1lbnQ6IFBlYkVsZW1lbnQ7XG4gIEBJbnB1dCgpIHN0eWxlczogUGViRWxlbWVudFN0eWxlcztcbiAgQElucHV0KCkgb3B0aW9uczogUGViUmVuZGVyZXJPcHRpb25zO1xuXG4gIHNvdXJjZXM6IHN0cmluZ1tdID0gW107XG4gIHZpZGVvU2V0dGluZ3M6IHtcbiAgICBhdXRvcGxheTogYm9vbGVhbixcbiAgICBjb250cm9sczogYm9vbGVhbixcbiAgICBsb29wOiBib29sZWFuLFxuICB9O1xuXG4gIGdldCBlbGVtZW50cygpOiB7IFtrZXk6IHN0cmluZ106IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgIH07XG4gIH1cblxuICBnZXQgbWFwcGVkU3R5bGVzKCkge1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBjb2xvcjogdGhpcy5zdHlsZXMuY29sb3IsXG4gICAgICAgIHdpZHRoOiB0aGlzLnN0eWxlcy53aWR0aFxuICAgICAgICAgID8gKHRoaXMuc3R5bGVzLndpZHRoIGFzIG51bWJlciAqIHNjYWxlKSAgKyAncHgnXG4gICAgICAgICAgOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogdGhpcy5zdHlsZXMuaGVpZ2h0XG4gICAgICAgICAgPyAodGhpcy5zdHlsZXMuaGVpZ2h0IGFzIG51bWJlciAqIHNjYWxlKSArICdweCdcbiAgICAgICAgICA6ICcxMDAlJyxcbiAgICAgICAgbGVmdDogdGhpcy5zdHlsZXMubGVmdFxuICAgICAgICAgID8gKHRoaXMuc3R5bGVzLmxlZnQgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgcmlnaHQ6IHRoaXMuc3R5bGVzLnJpZ2h0XG4gICAgICAgICAgPyAodGhpcy5zdHlsZXMucmlnaHQgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgdG9wOiB0aGlzLnN0eWxlcy50b3BcbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy50b3AgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm90dG9tOiB0aGlzLnN0eWxlcy5ib3R0b21cbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy5ib3R0b20gYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyOiB0aGlzLnN0eWxlcy5ib3JkZXJcbiAgICAgICAgICA/IHRoaXMuc3R5bGVzLmJvcmRlclxuICAgICAgICAgIDogbnVsbCxcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy52aWRlb1NldHRpbmdzID0gdGhpcy5lbGVtZW50LmRhdGEuc2V0dGluZ3M7XG4gICAgdGhpcy5zb3VyY2VzID0gdGhpcy5lbGVtZW50LmRhdGEuc291cmNlcztcbiAgfVxuXG59XG4iLCI8dmlkZW8gW2NvbnRyb2xzXT1cInZpZGVvU2V0dGluZ3MuY29udHJvbHNcIiBbYXV0b3BsYXldPVwidmlkZW9TZXR0aW5ncy5hdXRvcGxheVwiIFtsb29wXT1cInZpZGVvU2V0dGluZ3MubG9vcFwiPlxuICA8c291cmNlIFtzcmNdPVwic291cmNlXCIgKm5nRm9yPVwibGV0IHNvdXJjZSBvZiBzb3VyY2VzXCI+XG48L3ZpZGVvPlxuIl19