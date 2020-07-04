import { __extends } from "tslib";
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
    var cell_r536 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("pebRendererChildrenSlot", cell_r536);
} }
var PebGridElement = /** @class */ (function (_super) {
    __extends(PebGridElement, _super);
    function PebGridElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PebGridElement.prototype, "elements", {
        get: function () {
            return {
                host: this.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebGridElement.prototype, "cells", {
        get: function () {
            return this.styles.cells.split(' ').map(function (cdef) { return cdef.split(':').shift(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebGridElement.prototype, "mappedStyles", {
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
        get: function () {
            var scale = this.options.scale;
            // const thisScreenStyle = (style) => getScreenStyle(style, screen);
            // TODO: Take into account scale
            var cellsDefToGridTemplate = function (def) { return def
                .split(' ')
                .map(function (cDef) { return cDef.split(':').pop(); })
                .join(' '); };
            var transformMargin = function (str) { return ('' + str)
                .split(' ')
                .map(function (part) { return +part * scale + 'px'; })
                .join(' '); };
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
        },
        enumerable: true,
        configurable: true
    });
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
    return PebGridElement;
}(PebAbstractElement));
export { PebGridElement };
var ɵPebGridElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebGridElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9nZW5lcmFsL2dyaWQvZ3JpZC5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC9ncmlkL2dyaWQuZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7O0lDQTlGLDhCQUNFO0lBQUEsMkJBQThEO0lBQ2hFLGlCQUFNOzs7SUFEVSxlQUFnQztJQUFoQyxtREFBZ0M7O0FEVWhEO0lBUW9DLGtDQUFrQjtJQVJ0RDs7S0FzRkM7SUF0RUMsc0JBQUksb0NBQVE7YUFBWjtZQUNFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO2FBQ3pCLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFLO2FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDM0UsQ0FBQzs7O09BQUE7SUFlRCxzQkFBSSx3Q0FBWTtRQWRoQixFQUFFO1FBQ0Ysb0JBQW9CO1FBQ3BCLGtHQUFrRztRQUNsRywwRkFBMEY7UUFDMUYsRUFBRTtRQUNGLGtDQUFrQztRQUNsQyw0Q0FBNEM7UUFDNUMsc0NBQXNDO1FBQ3RDLDJDQUEyQztRQUMzQyxhQUFhO1FBQ2IsMEVBQTBFO1FBQzFFLE1BQU07UUFDTixJQUFJO2FBRUo7WUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNqQyxvRUFBb0U7WUFFcEUsZ0NBQWdDO1lBQ2hDLElBQU0sc0JBQXNCLEdBQUcsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHO2lCQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNWLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQXJCLENBQXFCLENBQUM7aUJBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFINEIsQ0FHNUIsQ0FBQztZQUViLElBQU0sZUFBZSxHQUFHLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO2lCQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNWLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEVBQXBCLENBQW9CLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFIcUIsQ0FHckIsQ0FBQztZQUViLHlCQUF5QjtZQUN6QixPQUFPO2dCQUNMLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsTUFBTTtvQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUN2RSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxZQUFZO3dCQUN6RCxDQUFDLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDcEQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssVUFBVTt3QkFDcEQsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3BELE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87d0JBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSTt3QkFDcEMsQ0FBQyxDQUFDLElBQUk7aUJBa0JUO2FBQ0YsQ0FBQztRQUNKLENBQUM7OztPQUFBO3VHQTdFVSxjQUFjO3VEQUFkLGNBQWM7MkJBTVgsZ0NBQWdDOzs7OztZQ3pCaEQsK0RBQ0U7O1lBREcsbUNBQTBCOzt5QkRGL0I7Q0FtR0MsQUF0RkQsQ0FRb0Msa0JBQWtCLEdBOEVyRDtTQTlFWSxjQUFjOzJEQUFkLGNBQWM7a0RBQWQsY0FBYztjQVIxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHFCQUFxQjtnQkFDbEMsU0FBUyxFQUFFO29CQUNULHVDQUF1QztvQkFDdkMscUJBQXFCO2lCQUN0QjthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxZQUFZO21CQUFDLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGViQWJzdHJhY3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViUmVuZGVyZXJDaGlsZHJlblNsb3REaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9zZWxlY3RvcnMvY2hpbGRyZW4tc2xvdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUGViUmVuZGVyZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vcmVuZGVyZXIudHlwZXMnO1xuaW1wb3J0IHsgUGViRWxlbWVudFN0eWxlcywgUGViRWxlbWVudCB9IGZyb20gJ0BwZS9idWlsZGVyLWNvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRTdHlsZXMgZXh0ZW5kcyBQZWJFbGVtZW50U3R5bGVzIHtcbiAgZGlzcGxheTogJ2hvcml6b250YWwnfCd2ZXJ0aWNhbCc7XG4gIGNlbGxzOiBzdHJpbmc7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgZ3JpZEdhcDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZWItZWxlbWVudC1ncmlkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dyaWQuZWxlbWVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50LnNjc3MnLFxuICAgICcuL2dyaWQuZWxlbWVudC5zY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBlYkdyaWRFbGVtZW50IGV4dGVuZHMgUGViQWJzdHJhY3RFbGVtZW50IHtcbiAgQElucHV0KCkgZWxlbWVudDogUGViRWxlbWVudDtcbiAgQElucHV0KCkgc3R5bGVzOiBHcmlkU3R5bGVzO1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFBlYlJlbmRlcmVyT3B0aW9ucztcblxuICBAVmlld0NoaWxkcmVuKFBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90RGlyZWN0aXZlKSBzbG90czogUGViUmVuZGVyZXJDaGlsZHJlblNsb3REaXJlY3RpdmU7XG5cbiAgZ2V0IGVsZW1lbnRzKCk6IHsgW2tleTogc3RyaW5nXTogSFRNTEVsZW1lbnR9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgIH07XG4gIH1cblxuICBnZXQgY2VsbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGVzLmNlbGxzLnNwbGl0KCcgJykubWFwKGNkZWYgPT4gY2RlZi5zcGxpdCgnOicpLnNoaWZ0KCkpO1xuICB9XG4gIC8vXG4gIC8vIGdldCBjZWxsU3R5bGUoKSB7XG4gIC8vICAgY29uc3QgZGlyZWN0aW9uID0gZ2V0U2NyZWVuU3R5bGUoKHRoaXMuZWxlbWVudC5zdHlsZSBhcyBhbnkpLmRpcmVjdGlvbiwgdGhpcy5vcHRpb25zLnNjcmVlbik7XG4gIC8vICAgY29uc3QgaXRlbXMgPSBnZXRTY3JlZW5TdHlsZSgodGhpcy5lbGVtZW50LnN0eWxlIGFzIGFueSkuaXRlbXMsIHRoaXMub3B0aW9ucy5zY3JlZW4pO1xuICAvL1xuICAvLyAgIGlmIChkaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gIC8vICAgICByZXR1cm4geyBoZWlnaHQ6IDEwMCAvIGl0ZW1zICsgJyUnIH07XG4gIC8vICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gIC8vICAgICByZXR1cm4geyB3aWR0aDogMTAwIC8gaXRlbXMgKyAnJScgfTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXJlcjogdW5zdXBwb3J0ZWQgZGlyZWN0aW9uIGluIEdyaWQgZWxlbWVudCcpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLm9wdGlvbnMuc2NhbGU7XG4gICAgLy8gY29uc3QgdGhpc1NjcmVlblN0eWxlID0gKHN0eWxlKSA9PiBnZXRTY3JlZW5TdHlsZShzdHlsZSwgc2NyZWVuKTtcblxuICAgIC8vIFRPRE86IFRha2UgaW50byBhY2NvdW50IHNjYWxlXG4gICAgY29uc3QgY2VsbHNEZWZUb0dyaWRUZW1wbGF0ZSA9IChkZWYpID0+IGRlZlxuICAgICAgLnNwbGl0KCcgJylcbiAgICAgIC5tYXAoY0RlZiA9PiBjRGVmLnNwbGl0KCc6JykucG9wKCkpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtTWFyZ2luID0gKHN0cikgPT4gKCcnICsgc3RyKVxuICAgICAgLnNwbGl0KCcgJylcbiAgICAgIC5tYXAocGFydCA9PiArcGFydCAqIHNjYWxlICsgJ3B4JylcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICAvLyBUT0RPOiBGaWx0ZXIgb3V0IG51bGxzXG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICBtYXJnaW46IHRoaXMuc3R5bGVzLm1hcmdpbiA/IHRyYW5zZm9ybU1hcmdpbih0aGlzLnN0eWxlcy5tYXJnaW4pIDogbnVsbCxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogdGhpcy5zdHlsZXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgICAgICA/IGNlbGxzRGVmVG9HcmlkVGVtcGxhdGUodGhpcy5zdHlsZXMuY2VsbHMpIDogbnVsbCxcbiAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogdGhpcy5zdHlsZXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnXG4gICAgICAgICAgPyBjZWxsc0RlZlRvR3JpZFRlbXBsYXRlKHRoaXMuc3R5bGVzLmNlbGxzKSA6IG51bGwsXG4gICAgICAgIGdyaWRHYXA6IHRoaXMuc3R5bGVzLmdyaWRHYXBcbiAgICAgICAgICA/IHRoaXMuc3R5bGVzLmdyaWRHYXAgKiBzY2FsZSArICdweCdcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIC8vIGZsZXhEaXJlY3Rpb246IHRoaXNTY3JlZW5TdHlsZSgoc3R5bGUgYXMgYW55KS5kaXJlY3Rpb24pLFxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiBzdHlsZS5iYWNrZ3JvdW5kXG4gICAgICAgIC8vICAgPyB0aGlzU2NyZWVuU3R5bGUoc3R5bGUuYmFja2dyb3VuZClcbiAgICAgICAgLy8gICA6IG51bGwsXG4gICAgICAgIC8vIC8vIFRPRE86IFVzZSBzdHlsaW5nLnV0aWxzIHRvIG5vdCByZXBlYXQgdGhpcyBkZWZpbml0aW9uc1xuICAgICAgICAvLyB3aWR0aDogc3R5bGUud2lkdGhcbiAgICAgICAgLy8gICA/IHNjYWxlICogdGhpc1NjcmVlblN0eWxlKHN0eWxlLndpZHRoKSArICdweCdcbiAgICAgICAgLy8gICA6IG51bGwsXG4gICAgICAgIC8vIGhlaWdodDogc3R5bGUuaGVpZ2h0XG4gICAgICAgIC8vICAgPyBzY2FsZSAqIHRoaXNTY3JlZW5TdHlsZShzdHlsZS5oZWlnaHQpICsgJ3B4J1xuICAgICAgICAvLyAgIDogbnVsbCxcbiAgICAgICAgLy8gdG9wOiBzdHlsZS50b3BcbiAgICAgICAgLy8gICA/IHNjYWxlICogdGhpc1NjcmVlblN0eWxlKHN0eWxlLnRvcCkgKyAncHgnXG4gICAgICAgIC8vICAgOiBudWxsLFxuICAgICAgICAvLyBsZWZ0OiBzdHlsZS5sZWZ0XG4gICAgICAgIC8vICAgPyBzY2FsZSAqIHRoaXNTY3JlZW5TdHlsZShzdHlsZS5sZWZ0KSArICdweCdcbiAgICAgICAgLy8gICA6IG51bGwsXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIiwiPCEtLTxzcGFuICAqbmdJZj1cImhvdmVyZWRcIiBjbGFzcz1cImVsZW1lbnQtY2FwdGlvblwiPnt7ZWxlbWVudC50eXBlfX08L3NwYW4+LS0+XG5cbjxkaXYgKm5nRm9yPVwibGV0IGNlbGwgb2YgY2VsbHNcIiBjbGFzcz1cImdyaWQtY2VsbFwiPlxuICA8bmctY29udGFpbmVyIFtwZWJSZW5kZXJlckNoaWxkcmVuU2xvdF09XCJjZWxsXCI+PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==