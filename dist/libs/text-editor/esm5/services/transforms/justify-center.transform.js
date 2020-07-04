import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
var JustifyCenterTransform = /** @class */ (function (_super) {
    __extends(JustifyCenterTransform, _super);
    function JustifyCenterTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JustifyCenterTransform.prototype.justify = function () {
        this.execCommand(ExecCommand.JustifyCenter);
    };
    Object.defineProperty(JustifyCenterTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.JustifyCenter);
        },
        enumerable: true,
        configurable: true
    });
    JustifyCenterTransform.ɵfac = function JustifyCenterTransform_Factory(t) { return ɵJustifyCenterTransform_BaseFactory(t || JustifyCenterTransform); };
    JustifyCenterTransform.ɵprov = i0.ɵɵdefineInjectable({ token: JustifyCenterTransform, factory: JustifyCenterTransform.ɵfac });
    return JustifyCenterTransform;
}(BaseTransform));
export { JustifyCenterTransform };
var ɵJustifyCenterTransform_BaseFactory = i0.ɵɵgetInheritedFactory(JustifyCenterTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JustifyCenterTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdGlmeS1jZW50ZXIudHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItdGV4dC1lZGl0b3IvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90cmFuc2Zvcm1zL2p1c3RpZnktY2VudGVyLnRyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVqRDtJQUM0QywwQ0FBYTtJQUR6RDs7S0FhQztJQVhDLHdDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsc0JBQUkseUNBQUs7YUFBVDtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0QsQ0FBQzs7O09BQUE7K0hBWFUsc0JBQXNCO2tFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCO2lDQVBuQztDQW1CQyxBQWJELENBQzRDLGFBQWEsR0FZeEQ7U0FaWSxzQkFBc0I7bUVBQXRCLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV4ZWNDb21tYW5kIH0gZnJvbSAnLi4vLi4vdGV4dC1lZGl0b3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uLy4uL3R5cGVzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBCYXNlVHJhbnNmb3JtIH0gZnJvbSAnLi9iYXNlLnRyYW5zZm9ybSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKdXN0aWZ5Q2VudGVyVHJhbnNmb3JtIGV4dGVuZHMgQmFzZVRyYW5zZm9ybSBpbXBsZW1lbnRzIFRyYW5zZm9ybSB7XG4gIGp1c3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5KdXN0aWZ5Q2VudGVyKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaXNTZWxlY3Rpb25FeGlzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShFeGVjQ29tbWFuZC5KdXN0aWZ5Q2VudGVyKTtcbiAgfVxufVxuIl19