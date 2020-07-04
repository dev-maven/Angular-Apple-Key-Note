import { Directive, Input, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class PebRendererChildrenSlotDirective {
    constructor(viewRef) {
        this.viewRef = viewRef;
        this.name = '';
    }
}
PebRendererChildrenSlotDirective.ɵfac = function PebRendererChildrenSlotDirective_Factory(t) { return new (t || PebRendererChildrenSlotDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
PebRendererChildrenSlotDirective.ɵdir = i0.ɵɵdefineDirective({ type: PebRendererChildrenSlotDirective, selectors: [["", "pebRendererChildrenSlot", ""]], inputs: { name: ["pebRendererChildrenSlot", "name"] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebRendererChildrenSlotDirective, [{
        type: Directive,
        args: [{
                selector: '[pebRendererChildrenSlot]'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, { name: [{
            type: Input,
            args: ['pebRendererChildrenSlot']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGRyZW4tc2xvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci1yZW5kZXJlci8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9jaGlsZHJlbi1zbG90LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLL0UsTUFBTSxPQUFPLGdDQUFnQztJQUkzQyxZQUNTLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBSGxDLFNBQUksR0FBRyxFQUFFLENBQUM7SUFJUCxDQUFDOztnSEFOTyxnQ0FBZ0M7cUVBQWhDLGdDQUFnQztrREFBaEMsZ0NBQWdDO2NBSDVDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOztrQkFFRSxLQUFLO21CQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3BlYlJlbmRlcmVyQ2hpbGRyZW5TbG90XSdcbn0pXG5leHBvcnQgY2xhc3MgUGViUmVuZGVyZXJDaGlsZHJlblNsb3REaXJlY3RpdmUge1xuICBASW5wdXQoJ3BlYlJlbmRlcmVyQ2hpbGRyZW5TbG90JylcbiAgbmFtZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICApIHt9XG59XG4iXX0=