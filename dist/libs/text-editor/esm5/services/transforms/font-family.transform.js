import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
var FontFamilyTransform = /** @class */ (function (_super) {
    __extends(FontFamilyTransform, _super);
    function FontFamilyTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FontFamilyTransform.prototype, "value", {
        get: function () {
            var fontName = document.queryCommandValue(ExecCommand.FontName);
            return fontName ? fontName.replace(/['"]+/g, '') : null;
        },
        set: function (value) {
            this.execCommand(ExecCommand.FontName, value);
        },
        enumerable: true,
        configurable: true
    });
    FontFamilyTransform.ɵfac = function FontFamilyTransform_Factory(t) { return ɵFontFamilyTransform_BaseFactory(t || FontFamilyTransform); };
    FontFamilyTransform.ɵprov = i0.ɵɵdefineInjectable({ token: FontFamilyTransform, factory: FontFamilyTransform.ɵfac });
    return FontFamilyTransform;
}(BaseTransform));
export { FontFamilyTransform };
var ɵFontFamilyTransform_BaseFactory = i0.ɵɵgetInheritedFactory(FontFamilyTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FontFamilyTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1mYW1pbHkudHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItdGV4dC1lZGl0b3IvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90cmFuc2Zvcm1zL2ZvbnQtZmFtaWx5LnRyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVqRDtJQUN5Qyx1Q0FBYTtJQUR0RDs7S0FhQztJQVZDLHNCQUFJLHNDQUFLO2FBSVQ7WUFDRSxJQUFNLFFBQVEsR0FBVyxRQUFRLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFELENBQUM7YUFSRCxVQUFVLEtBQWE7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztPQUFBO3NIQUpVLG1CQUFtQjsrREFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjs4QkFQaEM7Q0FtQkMsQUFiRCxDQUN5QyxhQUFhLEdBWXJEO1NBWlksbUJBQW1CO2dFQUFuQixtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi90eXBlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgQmFzZVRyYW5zZm9ybSB9IGZyb20gJy4vYmFzZS50cmFuc2Zvcm0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9udEZhbWlseVRyYW5zZm9ybSBleHRlbmRzIEJhc2VUcmFuc2Zvcm0gaW1wbGVtZW50cyBUcmFuc2Zvcm0ge1xuXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5Gb250TmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZm9udE5hbWU6IHN0cmluZyA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKEV4ZWNDb21tYW5kLkZvbnROYW1lKTtcblxuICAgIHJldHVybiBmb250TmFtZSA/IGZvbnROYW1lLnJlcGxhY2UoL1snXCJdKy9nLCAnJykgOiBudWxsO1xuICB9XG5cbn1cbiJdfQ==