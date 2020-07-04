import { Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../selectors/children-slot.directive";
function PebBlockElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} }
export class PebBlockElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const styles = this.styles;
        const { scale } = this.options;
        return {
            host: {
                position: styles.position || 'relative',
                width: styles.width ? +styles.width * scale + 'px' : null,
                height: styles.height ? +styles.height * scale + 'px' : null,
                backgroundColor: styles.backgroundColor || null,
            },
        };
    }
}
PebBlockElement.ɵfac = function PebBlockElement_Factory(t) { return ɵPebBlockElement_BaseFactory(t || PebBlockElement); };
PebBlockElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebBlockElement, selectors: [["peb-element-block"]], inputs: { element: "element", styles: "styles", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [["class", "selected", 4, "ngIf"], ["pebRendererChildrenSlot", ""], [1, "selected"]], template: function PebBlockElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PebBlockElement_div_0_Template, 1, 0, "div", 0);
        i0.ɵɵelementContainer(1, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.selected);
    } }, directives: [i1.NgIf, i2.PebRendererChildrenSlotDirective], styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}"] });
const ɵPebBlockElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebBlockElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZ2VuZXJhbC9ibG9jay9ibG9jay5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC9ibG9jay9ibG9jay5lbGVtZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0lDQ3RFLHlCQUE2Qzs7QURXN0MsTUFBTSxPQUFPLGVBQWdCLFNBQVEsa0JBQWtCO0lBS3JELElBQUksUUFBUTtRQUNWLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDekIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBcUIsQ0FBQztRQUMxQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUUvQixPQUFRO1lBQ04sSUFBSSxFQUFFO2dCQUNKLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLFVBQVU7Z0JBQ3ZDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDekQsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUM1RCxlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWUsSUFBSSxJQUFJO2FBQ2hEO1NBQ0YsQ0FBQztJQUNKLENBQUM7O3NHQXZCVSxlQUFlO29EQUFmLGVBQWU7UUNYNUIsZ0VBQXVDO1FBRXZDLDJCQUFxRDs7UUFGaEQsbUNBQWdCOzs4RERXUixlQUFlO2tEQUFmLGVBQWU7Y0FQM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLFNBQVMsRUFBRTtvQkFDVCx1Q0FBdUM7aUJBQ3hDO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBCbG9ja1N0eWxlcyB9IGZyb20gJy4vYmxvY2suY29uc3RhbnRzJztcbmltcG9ydCB7IFBlYlJlbmRlcmVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3JlbmRlcmVyLnR5cGVzJztcbmltcG9ydCB7IFBlYkVsZW1lbnRTdHlsZXMsIFBlYkVsZW1lbnQgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtYmxvY2snLFxuICB0ZW1wbGF0ZVVybDogJy4vYmxvY2suZWxlbWVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50LnNjc3MnLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBlYkJsb2NrRWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCB7XG4gIEBJbnB1dCgpIGVsZW1lbnQ6IFBlYkVsZW1lbnQ7XG4gIEBJbnB1dCgpIHN0eWxlczogUGViRWxlbWVudFN0eWxlcztcbiAgQElucHV0KCkgb3B0aW9uczogUGViUmVuZGVyZXJPcHRpb25zO1xuXG4gIGdldCBlbGVtZW50cygpOiB7IFtrZXk6IHN0cmluZ106IEhUTUxFbGVtZW50IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5zdHlsZXMgYXMgQmxvY2tTdHlsZXM7XG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgcmV0dXJuICB7XG4gICAgICBob3N0OiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdHlsZXMucG9zaXRpb24gfHwgJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHN0eWxlcy53aWR0aCA/ICtzdHlsZXMud2lkdGggKiBzY2FsZSArICdweCcgOiBudWxsLFxuICAgICAgICBoZWlnaHQ6IHN0eWxlcy5oZWlnaHQgPyArc3R5bGVzLmhlaWdodCAqIHNjYWxlICsgJ3B4JyA6IG51bGwsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc3R5bGVzLmJhY2tncm91bmRDb2xvciB8fCBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbn1cbiIsIjwhLS08c3BhbiAqbmdJZj1cImhvdmVyZWRcIiBjbGFzcz1cImVsZW1lbnQtY2FwdGlvblwiPnt7ZWxlbWVudC50eXBlfX08L3NwYW4+LS0+XG5cbjxkaXYgKm5nSWY9XCJzZWxlY3RlZFwiIGNsYXNzPVwic2VsZWN0ZWRcIj48L2Rpdj5cblxuPG5nLWNvbnRhaW5lciBwZWJSZW5kZXJlckNoaWxkcmVuU2xvdD48L25nLWNvbnRhaW5lcj5cbiJdfQ==