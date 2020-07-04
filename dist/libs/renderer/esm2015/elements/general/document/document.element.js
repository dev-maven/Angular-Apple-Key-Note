import { Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
import * as i1 from "../../../selectors/children-slot.directive";
export class PebDocumentElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        return { host: {} };
    }
    applyStyles() { }
}
PebDocumentElement.ɵfac = function PebDocumentElement_Factory(t) { return ɵPebDocumentElement_BaseFactory(t || PebDocumentElement); };
PebDocumentElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebDocumentElement, selectors: [["peb-element-document"]], inputs: { element: "element", context: "context", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["pebRendererChildrenSlot", ""]], template: function PebDocumentElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
    } }, directives: [i1.PebRendererChildrenSlotDirective], styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", ""] });
const ɵPebDocumentElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebDocumentElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebDocumentElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-document',
                templateUrl: './document.element.html',
                styleUrls: [
                    '../../_abstract/abstract.element.scss',
                    './document.element.scss'
                ]
            }]
    }], null, { element: [{
            type: Input
        }], context: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZ2VuZXJhbC9kb2N1bWVudC9kb2N1bWVudC5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC9kb2N1bWVudC9kb2N1bWVudC5lbGVtZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7OztBQVl0RSxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsa0JBQWtCO0lBS3hELElBQWMsUUFBUTtRQUNwQixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ3pCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBYyxZQUFZO1FBQ3hCLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVcsS0FBSSxDQUFDOzsrR0FmTCxrQkFBa0I7dURBQWxCLGtCQUFrQjtRQ1gvQiwyQkFBcUQ7O2lFRFd4QyxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQVI5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFO29CQUNULHVDQUF1QztvQkFDdkMseUJBQXlCO2lCQUMxQjthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGViQWJzdHJhY3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViUmVuZGVyZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vcmVuZGVyZXIudHlwZXMnO1xuaW1wb3J0IHsgUGViRWxlbWVudCB9IGZyb20gJ0BwZS9idWlsZGVyLWNvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZWItZWxlbWVudC1kb2N1bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2N1bWVudC5lbGVtZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQuc2NzcycsXG4gICAgJy4vZG9jdW1lbnQuZWxlbWVudC5zY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBlYkRvY3VtZW50RWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCB7XG4gIEBJbnB1dCgpIGVsZW1lbnQ6IFBlYkVsZW1lbnQ7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IG51bGw7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IFBlYlJlbmRlcmVyT3B0aW9ucztcblxuICBwcm90ZWN0ZWQgZ2V0IGVsZW1lbnRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgbWFwcGVkU3R5bGVzKCkge1xuICAgIHJldHVybiB7IGhvc3Q6IHt9IH07XG4gIH1cblxuICBhcHBseVN0eWxlcygpIHt9XG59XG4iLCI8IS0tPHNwYW4gICpuZ0lmPVwiaG92ZXJlZFwiIGNsYXNzPVwiZWxlbWVudC1jYXB0aW9uXCI+e3tlbGVtZW50LnR5cGV9fTwvc3Bhbj4tLT5cblxuPG5nLWNvbnRhaW5lciBwZWJSZW5kZXJlckNoaWxkcmVuU2xvdD48L25nLWNvbnRhaW5lcj5cbiJdfQ==