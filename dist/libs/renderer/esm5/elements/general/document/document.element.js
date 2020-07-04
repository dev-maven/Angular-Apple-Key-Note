import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
import * as i1 from "../../../selectors/children-slot.directive";
var PebDocumentElement = /** @class */ (function (_super) {
    __extends(PebDocumentElement, _super);
    function PebDocumentElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PebDocumentElement.prototype, "elements", {
        get: function () {
            return {
                host: this.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebDocumentElement.prototype, "mappedStyles", {
        get: function () {
            return { host: {} };
        },
        enumerable: true,
        configurable: true
    });
    PebDocumentElement.prototype.applyStyles = function () { };
    PebDocumentElement.ɵfac = function PebDocumentElement_Factory(t) { return ɵPebDocumentElement_BaseFactory(t || PebDocumentElement); };
    PebDocumentElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebDocumentElement, selectors: [["peb-element-document"]], inputs: { element: "element", context: "context", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["pebRendererChildrenSlot", ""]], template: function PebDocumentElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainer(0, 0);
        } }, directives: [i1.PebRendererChildrenSlotDirective], styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", ""] });
    return PebDocumentElement;
}(PebAbstractElement));
export { PebDocumentElement };
var ɵPebDocumentElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebDocumentElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXJlbmRlcmVyLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZ2VuZXJhbC9kb2N1bWVudC9kb2N1bWVudC5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC9kb2N1bWVudC9kb2N1bWVudC5lbGVtZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7QUFJdEU7SUFRd0Msc0NBQWtCO0lBUjFEOztLQXdCQztJQVhDLHNCQUFjLHdDQUFRO2FBQXRCO1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDekIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQWMsNENBQVk7YUFBMUI7WUFDRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsd0NBQVcsR0FBWCxjQUFlLENBQUM7bUhBZkwsa0JBQWtCOzJEQUFsQixrQkFBa0I7WUNYL0IsMkJBQXFEOzs2QkRGckQ7Q0E2QkMsQUF4QkQsQ0FRd0Msa0JBQWtCLEdBZ0J6RDtTQWhCWSxrQkFBa0I7K0RBQWxCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBUjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUU7b0JBQ1QsdUNBQXVDO29CQUN2Qyx5QkFBeUI7aUJBQzFCO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJSZW5kZXJlck9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9yZW5kZXJlci50eXBlcyc7XG5pbXBvcnQgeyBQZWJFbGVtZW50IH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1lbGVtZW50LWRvY3VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvY3VtZW50LmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudC5zY3NzJyxcbiAgICAnLi9kb2N1bWVudC5lbGVtZW50LnNjc3MnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGViRG9jdW1lbnRFbGVtZW50IGV4dGVuZHMgUGViQWJzdHJhY3RFbGVtZW50IHtcbiAgQElucHV0KCkgZWxlbWVudDogUGViRWxlbWVudDtcbiAgQElucHV0KCkgY29udGV4dDogbnVsbDtcbiAgQElucHV0KCkgb3B0aW9uczogUGViUmVuZGVyZXJPcHRpb25zO1xuXG4gIHByb3RlY3RlZCBnZXQgZWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHsgaG9zdDoge30gfTtcbiAgfVxuXG4gIGFwcGx5U3R5bGVzKCkge31cbn1cbiIsIjwhLS08c3BhbiAgKm5nSWY9XCJob3ZlcmVkXCIgY2xhc3M9XCJlbGVtZW50LWNhcHRpb25cIj57e2VsZW1lbnQudHlwZX19PC9zcGFuPi0tPlxuXG48bmctY29udGFpbmVyIHBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90PjwvbmctY29udGFpbmVyPlxuIl19