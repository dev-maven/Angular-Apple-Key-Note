import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
var JustifyRightTransform = /** @class */ (function (_super) {
    __extends(JustifyRightTransform, _super);
    function JustifyRightTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JustifyRightTransform.prototype.justify = function () {
        this.execCommand(ExecCommand.JustifyRight);
    };
    Object.defineProperty(JustifyRightTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.JustifyRight);
        },
        enumerable: true,
        configurable: true
    });
    JustifyRightTransform.ɵfac = function JustifyRightTransform_Factory(t) { return ɵJustifyRightTransform_BaseFactory(t || JustifyRightTransform); };
    JustifyRightTransform.ɵprov = i0.ɵɵdefineInjectable({ token: JustifyRightTransform, factory: JustifyRightTransform.ɵfac });
    return JustifyRightTransform;
}(BaseTransform));
export { JustifyRightTransform };
var ɵJustifyRightTransform_BaseFactory = i0.ɵɵgetInheritedFactory(JustifyRightTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JustifyRightTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdGlmeS1yaWdodC50cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyYW5zZm9ybXMvanVzdGlmeS1yaWdodC50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFakQ7SUFDMkMseUNBQWE7SUFEeEQ7O0tBYUM7SUFYQyx1Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHNCQUFJLHdDQUFLO2FBQVQ7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsT0FBTyxRQUFRLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUFBOzRIQVhVLHFCQUFxQjtpRUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjtnQ0FQbEM7Q0FtQkMsQUFiRCxDQUMyQyxhQUFhLEdBWXZEO1NBWlkscUJBQXFCO2tFQUFyQixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi90eXBlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgQmFzZVRyYW5zZm9ybSB9IGZyb20gJy4vYmFzZS50cmFuc2Zvcm0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnVzdGlmeVJpZ2h0VHJhbnNmb3JtIGV4dGVuZHMgQmFzZVRyYW5zZm9ybSBpbXBsZW1lbnRzIFRyYW5zZm9ybSB7XG4gIGp1c3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5KdXN0aWZ5UmlnaHQpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5pc1NlbGVjdGlvbkV4aXN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKEV4ZWNDb21tYW5kLkp1c3RpZnlSaWdodCk7XG4gIH1cbn1cbiJdfQ==