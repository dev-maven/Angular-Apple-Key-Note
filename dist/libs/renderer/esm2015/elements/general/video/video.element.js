import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PebVideoElement_source_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "source", 2);
} if (rf & 2) {
    const source_r531 = ctx.$implicit;
    i0.ɵɵproperty("src", source_r531, i0.ɵɵsanitizeUrl);
} }
export class PebVideoElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.sources = [];
    }
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const { scale } = this.options;
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
    }
    ngOnInit() {
        this.videoSettings = this.element.data.settings;
        this.sources = this.element.data.sources;
    }
}
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
const ɵPebVideoElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebVideoElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZ2VuZXJhbC92aWRlby92aWRlby5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC92aWRlby92aWRlby5lbGVtZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7SUNBcEUsNEJBQ0Y7OztJQURVLG1EQUFjOztBRFV4QixNQUFNLE9BQU8sZUFBZ0IsU0FBUSxrQkFBa0I7SUFOdkQ7O1FBV0UsWUFBTyxHQUFhLEVBQUUsQ0FBQztLQWtEeEI7SUEzQ0MsSUFBSSxRQUFRO1FBQ1YsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTtTQUN6QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRS9CLE9BQU87WUFDTCxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3RCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBZSxHQUFHLEtBQUssQ0FBQyxHQUFJLElBQUk7b0JBQy9DLENBQUMsQ0FBQyxNQUFNO2dCQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07b0JBQ3hCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBZ0IsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJO29CQUMvQyxDQUFDLENBQUMsTUFBTTtnQkFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO29CQUNwQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQWMsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJO29CQUM3QyxDQUFDLENBQUMsSUFBSTtnQkFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUN0QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQWUsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJO29CQUM5QyxDQUFDLENBQUMsSUFBSTtnQkFDUixHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHO29CQUNsQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQWEsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJO29CQUM1QyxDQUFDLENBQUMsSUFBSTtnQkFDUixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO29CQUN4QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQWdCLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSTtvQkFDL0MsQ0FBQyxDQUFDLElBQUk7Z0JBQ1IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtvQkFDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtvQkFDcEIsQ0FBQyxDQUFDLElBQUk7YUFDVDtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzNDLENBQUM7O3NHQXJEVSxlQUFlO29EQUFmLGVBQWU7UUNYNUIsZ0NBQ0U7UUFBQSxzRUFDRjtRQUFBLGlCQUFROztRQUZELHFEQUFtQyx3Q0FBQSxnQ0FBQTtRQUNqQixlQUE4QjtRQUE5QixxQ0FBOEI7OzhERFUxQyxlQUFlO2tEQUFmLGVBQWU7Y0FOM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUNuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYkVsZW1lbnQsIFBlYkVsZW1lbnRTdHlsZXMgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcbmltcG9ydCB7IFBlYlJlbmRlcmVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3JlbmRlcmVyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtdmlkZW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vdmlkZW8uZWxlbWVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlkZW8uZWxlbWVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBlYlZpZGVvRWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGVsZW1lbnQ6IFBlYkVsZW1lbnQ7XG4gIEBJbnB1dCgpIHN0eWxlczogUGViRWxlbWVudFN0eWxlcztcbiAgQElucHV0KCkgb3B0aW9uczogUGViUmVuZGVyZXJPcHRpb25zO1xuXG4gIHNvdXJjZXM6IHN0cmluZ1tdID0gW107XG4gIHZpZGVvU2V0dGluZ3M6IHtcbiAgICBhdXRvcGxheTogYm9vbGVhbixcbiAgICBjb250cm9sczogYm9vbGVhbixcbiAgICBsb29wOiBib29sZWFuLFxuICB9O1xuXG4gIGdldCBlbGVtZW50cygpOiB7IFtrZXk6IHN0cmluZ106IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgIH07XG4gIH1cblxuICBnZXQgbWFwcGVkU3R5bGVzKCkge1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBjb2xvcjogdGhpcy5zdHlsZXMuY29sb3IsXG4gICAgICAgIHdpZHRoOiB0aGlzLnN0eWxlcy53aWR0aFxuICAgICAgICAgID8gKHRoaXMuc3R5bGVzLndpZHRoIGFzIG51bWJlciAqIHNjYWxlKSAgKyAncHgnXG4gICAgICAgICAgOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogdGhpcy5zdHlsZXMuaGVpZ2h0XG4gICAgICAgICAgPyAodGhpcy5zdHlsZXMuaGVpZ2h0IGFzIG51bWJlciAqIHNjYWxlKSArICdweCdcbiAgICAgICAgICA6ICcxMDAlJyxcbiAgICAgICAgbGVmdDogdGhpcy5zdHlsZXMubGVmdFxuICAgICAgICAgID8gKHRoaXMuc3R5bGVzLmxlZnQgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgcmlnaHQ6IHRoaXMuc3R5bGVzLnJpZ2h0XG4gICAgICAgICAgPyAodGhpcy5zdHlsZXMucmlnaHQgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgdG9wOiB0aGlzLnN0eWxlcy50b3BcbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy50b3AgYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm90dG9tOiB0aGlzLnN0eWxlcy5ib3R0b21cbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy5ib3R0b20gYXMgbnVtYmVyICogc2NhbGUpICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYm9yZGVyOiB0aGlzLnN0eWxlcy5ib3JkZXJcbiAgICAgICAgICA/IHRoaXMuc3R5bGVzLmJvcmRlclxuICAgICAgICAgIDogbnVsbCxcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy52aWRlb1NldHRpbmdzID0gdGhpcy5lbGVtZW50LmRhdGEuc2V0dGluZ3M7XG4gICAgdGhpcy5zb3VyY2VzID0gdGhpcy5lbGVtZW50LmRhdGEuc291cmNlcztcbiAgfVxuXG59XG4iLCI8dmlkZW8gW2NvbnRyb2xzXT1cInZpZGVvU2V0dGluZ3MuY29udHJvbHNcIiBbYXV0b3BsYXldPVwidmlkZW9TZXR0aW5ncy5hdXRvcGxheVwiIFtsb29wXT1cInZpZGVvU2V0dGluZ3MubG9vcFwiPlxuICA8c291cmNlIFtzcmNdPVwic291cmNlXCIgKm5nRm9yPVwibGV0IHNvdXJjZSBvZiBzb3VyY2VzXCI+XG48L3ZpZGVvPlxuIl19