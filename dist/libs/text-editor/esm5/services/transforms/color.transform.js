import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
var ColorTransform = /** @class */ (function (_super) {
    __extends(ColorTransform, _super);
    function ColorTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ColorTransform.prototype, "value", {
        get: function () {
            return document.queryCommandValue(ExecCommand.ForeColor);
        },
        set: function (value) {
            this.execCommand(ExecCommand.ForeColor, value);
        },
        enumerable: true,
        configurable: true
    });
    ColorTransform.ɵfac = function ColorTransform_Factory(t) { return ɵColorTransform_BaseFactory(t || ColorTransform); };
    ColorTransform.ɵprov = i0.ɵɵdefineInjectable({ token: ColorTransform, factory: ColorTransform.ɵfac });
    return ColorTransform;
}(BaseTransform));
export { ColorTransform };
var ɵColorTransform_BaseFactory = i0.ɵɵgetInheritedFactory(ColorTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ColorTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IudHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItdGV4dC1lZGl0b3IvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90cmFuc2Zvcm1zL2NvbG9yLnRyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVqRDtJQUNvQyxrQ0FBYTtJQURqRDs7S0FXQztJQVJDLHNCQUFJLGlDQUFLO2FBSVQ7WUFDRSxPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsQ0FBQzthQU5ELFVBQVUsS0FBYTtZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7dUdBSlUsY0FBYzswREFBZCxjQUFjLFdBQWQsY0FBYzt5QkFQM0I7Q0FpQkMsQUFYRCxDQUNvQyxhQUFhLEdBVWhEO1NBVlksY0FBYzsyREFBZCxjQUFjO2tEQUFkLGNBQWM7Y0FEMUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXhlY0NvbW1hbmQgfSBmcm9tICcuLi8uLi90ZXh0LWVkaXRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEJhc2VUcmFuc2Zvcm0gfSBmcm9tICcuL2Jhc2UudHJhbnNmb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbG9yVHJhbnNmb3JtIGV4dGVuZHMgQmFzZVRyYW5zZm9ybSBpbXBsZW1lbnRzIFRyYW5zZm9ybSB7XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmV4ZWNDb21tYW5kKEV4ZWNDb21tYW5kLkZvcmVDb2xvciwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKEV4ZWNDb21tYW5kLkZvcmVDb2xvcik7XG4gIH1cblxufVxuIl19