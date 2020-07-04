import { Component, Input, ViewChildren } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererChildrenSlotDirective } from '../../../selectors/children-slot.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../selectors/children-slot.directive";
function PebGridElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementContainer(1, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r460 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("pebRendererChildrenSlot", cell_r460);
} }
export class PebGridElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get cells() {
        return this.styles.cells.split(' ').map(cdef => cdef.split(':').shift());
    }
    //
    // get cellStyle() {
    //   const direction = getScreenStyle((this.element.style as any).direction, this.options.screen);
    //   const items = getScreenStyle((this.element.style as any).items, this.options.screen);
    //
    //   if (direction === 'column') {
    //     return { height: 100 / items + '%' };
    //   } else if (direction === 'row') {
    //     return { width: 100 / items + '%' };
    //   } else {
    //     throw new Error('Renderer: unsupported direction in Grid element');
    //   }
    // }
    get mappedStyles() {
        const scale = this.options.scale;
        // const thisScreenStyle = (style) => getScreenStyle(style, screen);
        // TODO: Take into account scale
        const cellsDefToGridTemplate = (def) => def
            .split(' ')
            .map(cDef => cDef.split(':').pop())
            .join(' ');
        const transformMargin = (str) => ('' + str)
            .split(' ')
            .map(part => +part * scale + 'px')
            .join(' ');
        // TODO: Filter out nulls
        return {
            host: {
                display: 'grid',
                margin: this.styles.margin ? transformMargin(this.styles.margin) : null,
                gridTemplateColumns: this.styles.direction === 'horizontal'
                    ? cellsDefToGridTemplate(this.styles.cells) : null,
                gridTemplateRows: this.styles.direction === 'vertical'
                    ? cellsDefToGridTemplate(this.styles.cells) : null,
                gridGap: this.styles.gridGap
                    ? this.styles.gridGap * scale + 'px'
                    : null,
            }
        };
    }
}
PebGridElement.ɵfac = function PebGridElement_Factory(t) { return ɵPebGridElement_BaseFactory(t || PebGridElement); };
PebGridElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebGridElement, selectors: [["peb-element-grid"]], viewQuery: function PebGridElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PebRendererChildrenSlotDirective, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slots = _t);
    } }, inputs: { element: "element", styles: "styles", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "grid-cell", 4, "ngFor", "ngForOf"], [1, "grid-cell"], [3, "pebRendererChildrenSlot"]], template: function PebGridElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PebGridElement_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.cells);
    } }, directives: [i1.NgForOf, i2.PebRendererChildrenSlotDirective], styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", ".grid-cell[_ngcontent-%COMP%]{position:relative}"] });
const ɵPebGridElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebGridElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebGridElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-grid',
                templateUrl: './grid.element.html',
                styleUrls: [
                    '../../_abstract/abstract.element.scss',
                    './grid.element.scss'
                ]
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }], slots: [{
            type: ViewChildren,
            args: [PebRendererChildrenSlotDirective]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9nZW5lcmFsL2dyaWQvZ3JpZC5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC9ncmlkL2dyaWQuZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7SUNBOUYsOEJBQ0U7SUFBQSwyQkFBOEQ7SUFDaEUsaUJBQU07OztJQURVLGVBQWdDO0lBQWhDLG1EQUFnQzs7QURrQmhELE1BQU0sT0FBTyxjQUFlLFNBQVEsa0JBQWtCO0lBUXBELElBQUksUUFBUTtRQUNWLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDekIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELEVBQUU7SUFDRixvQkFBb0I7SUFDcEIsa0dBQWtHO0lBQ2xHLDBGQUEwRjtJQUMxRixFQUFFO0lBQ0Ysa0NBQWtDO0lBQ2xDLDRDQUE0QztJQUM1QyxzQ0FBc0M7SUFDdEMsMkNBQTJDO0lBQzNDLGFBQWE7SUFDYiwwRUFBMEU7SUFDMUUsTUFBTTtJQUNOLElBQUk7SUFFSixJQUFJLFlBQVk7UUFDZCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNqQyxvRUFBb0U7UUFFcEUsZ0NBQWdDO1FBQ2hDLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUc7YUFDeEMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWIsTUFBTSxlQUFlLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQzthQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFYix5QkFBeUI7UUFDekIsT0FBTztZQUNMLElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsTUFBTTtnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUN2RSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxZQUFZO29CQUN6RCxDQUFDLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDcEQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssVUFBVTtvQkFDcEQsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ3BELE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87b0JBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSTtvQkFDcEMsQ0FBQyxDQUFDLElBQUk7YUFrQlQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7bUdBN0VVLGNBQWM7bURBQWQsY0FBYzt1QkFNWCxnQ0FBZ0M7Ozs7O1FDekJoRCwrREFDRTs7UUFERyxtQ0FBMEI7OzZERG1CbEIsY0FBYztrREFBZCxjQUFjO2NBUjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUscUJBQXFCO2dCQUNsQyxTQUFTLEVBQUU7b0JBQ1QsdUNBQXVDO29CQUN2QyxxQkFBcUI7aUJBQ3RCO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLFlBQVk7bUJBQUMsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJSZW5kZXJlckNoaWxkcmVuU2xvdERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL3NlbGVjdG9ycy9jaGlsZHJlbi1zbG90LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQZWJSZW5kZXJlck9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9yZW5kZXJlci50eXBlcyc7XG5pbXBvcnQgeyBQZWJFbGVtZW50U3R5bGVzLCBQZWJFbGVtZW50IH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JpZFN0eWxlcyBleHRlbmRzIFBlYkVsZW1lbnRTdHlsZXMge1xuICBkaXNwbGF5OiAnaG9yaXpvbnRhbCd8J3ZlcnRpY2FsJztcbiAgY2VsbHM6IHN0cmluZztcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBncmlkR2FwOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1lbGVtZW50LWdyaWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC5lbGVtZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQuc2NzcycsXG4gICAgJy4vZ3JpZC5lbGVtZW50LnNjc3MnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGViR3JpZEVsZW1lbnQgZXh0ZW5kcyBQZWJBYnN0cmFjdEVsZW1lbnQge1xuICBASW5wdXQoKSBlbGVtZW50OiBQZWJFbGVtZW50O1xuICBASW5wdXQoKSBzdHlsZXM6IEdyaWRTdHlsZXM7XG5cbiAgQElucHV0KCkgb3B0aW9uczogUGViUmVuZGVyZXJPcHRpb25zO1xuXG4gIEBWaWV3Q2hpbGRyZW4oUGViUmVuZGVyZXJDaGlsZHJlblNsb3REaXJlY3RpdmUpIHNsb3RzOiBQZWJSZW5kZXJlckNoaWxkcmVuU2xvdERpcmVjdGl2ZTtcblxuICBnZXQgZWxlbWVudHMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudH0ge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBjZWxscygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZXMuY2VsbHMuc3BsaXQoJyAnKS5tYXAoY2RlZiA9PiBjZGVmLnNwbGl0KCc6Jykuc2hpZnQoKSk7XG4gIH1cbiAgLy9cbiAgLy8gZ2V0IGNlbGxTdHlsZSgpIHtcbiAgLy8gICBjb25zdCBkaXJlY3Rpb24gPSBnZXRTY3JlZW5TdHlsZSgodGhpcy5lbGVtZW50LnN0eWxlIGFzIGFueSkuZGlyZWN0aW9uLCB0aGlzLm9wdGlvbnMuc2NyZWVuKTtcbiAgLy8gICBjb25zdCBpdGVtcyA9IGdldFNjcmVlblN0eWxlKCh0aGlzLmVsZW1lbnQuc3R5bGUgYXMgYW55KS5pdGVtcywgdGhpcy5vcHRpb25zLnNjcmVlbik7XG4gIC8vXG4gIC8vICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2NvbHVtbicpIHtcbiAgLy8gICAgIHJldHVybiB7IGhlaWdodDogMTAwIC8gaXRlbXMgKyAnJScgfTtcbiAgLy8gICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3JvdycpIHtcbiAgLy8gICAgIHJldHVybiB7IHdpZHRoOiAxMDAgLyBpdGVtcyArICclJyB9O1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbmRlcmVyOiB1bnN1cHBvcnRlZCBkaXJlY3Rpb24gaW4gR3JpZCBlbGVtZW50Jyk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgZ2V0IG1hcHBlZFN0eWxlcygpIHtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMub3B0aW9ucy5zY2FsZTtcbiAgICAvLyBjb25zdCB0aGlzU2NyZWVuU3R5bGUgPSAoc3R5bGUpID0+IGdldFNjcmVlblN0eWxlKHN0eWxlLCBzY3JlZW4pO1xuXG4gICAgLy8gVE9ETzogVGFrZSBpbnRvIGFjY291bnQgc2NhbGVcbiAgICBjb25zdCBjZWxsc0RlZlRvR3JpZFRlbXBsYXRlID0gKGRlZikgPT4gZGVmXG4gICAgICAuc3BsaXQoJyAnKVxuICAgICAgLm1hcChjRGVmID0+IGNEZWYuc3BsaXQoJzonKS5wb3AoKSlcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1NYXJnaW4gPSAoc3RyKSA9PiAoJycgKyBzdHIpXG4gICAgICAuc3BsaXQoJyAnKVxuICAgICAgLm1hcChwYXJ0ID0+ICtwYXJ0ICogc2NhbGUgKyAncHgnKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICAgIC8vIFRPRE86IEZpbHRlciBvdXQgbnVsbHNcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDoge1xuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgIG1hcmdpbjogdGhpcy5zdHlsZXMubWFyZ2luID8gdHJhbnNmb3JtTWFyZ2luKHRoaXMuc3R5bGVzLm1hcmdpbikgOiBudWxsLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiB0aGlzLnN0eWxlcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgICAgID8gY2VsbHNEZWZUb0dyaWRUZW1wbGF0ZSh0aGlzLnN0eWxlcy5jZWxscykgOiBudWxsLFxuICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiB0aGlzLnN0eWxlcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCdcbiAgICAgICAgICA/IGNlbGxzRGVmVG9HcmlkVGVtcGxhdGUodGhpcy5zdHlsZXMuY2VsbHMpIDogbnVsbCxcbiAgICAgICAgZ3JpZEdhcDogdGhpcy5zdHlsZXMuZ3JpZEdhcFxuICAgICAgICAgID8gdGhpcy5zdHlsZXMuZ3JpZEdhcCAqIHNjYWxlICsgJ3B4J1xuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgLy8gZmxleERpcmVjdGlvbjogdGhpc1NjcmVlblN0eWxlKChzdHlsZSBhcyBhbnkpLmRpcmVjdGlvbiksXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHN0eWxlLmJhY2tncm91bmRcbiAgICAgICAgLy8gICA/IHRoaXNTY3JlZW5TdHlsZShzdHlsZS5iYWNrZ3JvdW5kKVxuICAgICAgICAvLyAgIDogbnVsbCxcbiAgICAgICAgLy8gLy8gVE9ETzogVXNlIHN0eWxpbmcudXRpbHMgdG8gbm90IHJlcGVhdCB0aGlzIGRlZmluaXRpb25zXG4gICAgICAgIC8vIHdpZHRoOiBzdHlsZS53aWR0aFxuICAgICAgICAvLyAgID8gc2NhbGUgKiB0aGlzU2NyZWVuU3R5bGUoc3R5bGUud2lkdGgpICsgJ3B4J1xuICAgICAgICAvLyAgIDogbnVsbCxcbiAgICAgICAgLy8gaGVpZ2h0OiBzdHlsZS5oZWlnaHRcbiAgICAgICAgLy8gICA/IHNjYWxlICogdGhpc1NjcmVlblN0eWxlKHN0eWxlLmhlaWdodCkgKyAncHgnXG4gICAgICAgIC8vICAgOiBudWxsLFxuICAgICAgICAvLyB0b3A6IHN0eWxlLnRvcFxuICAgICAgICAvLyAgID8gc2NhbGUgKiB0aGlzU2NyZWVuU3R5bGUoc3R5bGUudG9wKSArICdweCdcbiAgICAgICAgLy8gICA6IG51bGwsXG4gICAgICAgIC8vIGxlZnQ6IHN0eWxlLmxlZnRcbiAgICAgICAgLy8gICA/IHNjYWxlICogdGhpc1NjcmVlblN0eWxlKHN0eWxlLmxlZnQpICsgJ3B4J1xuICAgICAgICAvLyAgIDogbnVsbCxcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iLCI8IS0tPHNwYW4gICpuZ0lmPVwiaG92ZXJlZFwiIGNsYXNzPVwiZWxlbWVudC1jYXB0aW9uXCI+e3tlbGVtZW50LnR5cGV9fTwvc3Bhbj4tLT5cblxuPGRpdiAqbmdGb3I9XCJsZXQgY2VsbCBvZiBjZWxsc1wiIGNsYXNzPVwiZ3JpZC1jZWxsXCI+XG4gIDxuZy1jb250YWluZXIgW3BlYlJlbmRlcmVyQ2hpbGRyZW5TbG90XT1cImNlbGxcIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19