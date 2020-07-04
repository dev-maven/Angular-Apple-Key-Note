import { Directive, Input, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
var PebRendererChildrenSlotDirective = /** @class */ (function () {
    function PebRendererChildrenSlotDirective(viewRef) {
        this.viewRef = viewRef;
        this.name = '';
    }
    PebRendererChildrenSlotDirective.ɵfac = function PebRendererChildrenSlotDirective_Factory(t) { return new (t || PebRendererChildrenSlotDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    PebRendererChildrenSlotDirective.ɵdir = i0.ɵɵdefineDirective({ type: PebRendererChildrenSlotDirective, selectors: [["", "pebRendererChildrenSlot", ""]], inputs: { name: ["pebRendererChildrenSlot", "name"] } });
    return PebRendererChildrenSlotDirective;
}());
export { PebRendererChildrenSlotDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebRendererChildrenSlotDirective, [{
        type: Directive,
        args: [{
                selector: '[pebRendererChildrenSlot]'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, { name: [{
            type: Input,
            args: ['pebRendererChildrenSlot']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGRyZW4tc2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci1yZW5kZXJlci8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9jaGlsZHJlbi1zbG90LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFL0U7SUFPRSwwQ0FDUyxPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUhsQyxTQUFJLEdBQUcsRUFBRSxDQUFDO0lBSVAsQ0FBQztvSEFOTyxnQ0FBZ0M7eUVBQWhDLGdDQUFnQzsyQ0FMN0M7Q0FZQyxBQVZELElBVUM7U0FQWSxnQ0FBZ0M7a0RBQWhDLGdDQUFnQztjQUg1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7a0JBRUUsS0FBSzttQkFBQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twZWJSZW5kZXJlckNoaWxkcmVuU2xvdF0nXG59KVxuZXhwb3J0IGNsYXNzIFBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90RGlyZWN0aXZlIHtcbiAgQElucHV0KCdwZWJSZW5kZXJlckNoaWxkcmVuU2xvdCcpXG4gIG5hbWUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgKSB7fVxufVxuIl19