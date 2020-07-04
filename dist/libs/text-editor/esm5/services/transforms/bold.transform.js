import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
var BoldTransform = /** @class */ (function (_super) {
    __extends(BoldTransform, _super);
    function BoldTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoldTransform.prototype.toggle = function () {
        this.execCommand(ExecCommand.Bold);
    };
    Object.defineProperty(BoldTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.Bold);
        },
        enumerable: true,
        configurable: true
    });
    BoldTransform.ɵfac = function BoldTransform_Factory(t) { return ɵBoldTransform_BaseFactory(t || BoldTransform); };
    BoldTransform.ɵprov = i0.ɵɵdefineInjectable({ token: BoldTransform, factory: BoldTransform.ɵfac });
    return BoldTransform;
}(BaseTransform));
export { BoldTransform };
var ɵBoldTransform_BaseFactory = i0.ɵɵgetInheritedFactory(BoldTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BoldTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9sZC50cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyYW5zZm9ybXMvYm9sZC50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFakQ7SUFDbUMsaUNBQWE7SUFEaEQ7O0tBZUM7SUFaQyw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHNCQUFJLGdDQUFLO2FBQVQ7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsT0FBTyxRQUFRLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUM7OztPQUFBO29HQVpVLGFBQWE7eURBQWIsYUFBYSxXQUFiLGFBQWE7d0JBUDFCO0NBcUJDLEFBZkQsQ0FDbUMsYUFBYSxHQWMvQztTQWRZLGFBQWE7MERBQWIsYUFBYTtrREFBYixhQUFhO2NBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV4ZWNDb21tYW5kIH0gZnJvbSAnLi4vLi4vdGV4dC1lZGl0b3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uLy4uL3R5cGVzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBCYXNlVHJhbnNmb3JtIH0gZnJvbSAnLi9iYXNlLnRyYW5zZm9ybSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCb2xkVHJhbnNmb3JtIGV4dGVuZHMgQmFzZVRyYW5zZm9ybSBpbXBsZW1lbnRzIFRyYW5zZm9ybSB7XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuZXhlY0NvbW1hbmQoRXhlY0NvbW1hbmQuQm9sZCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzU2VsZWN0aW9uRXhpc3QpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoRXhlY0NvbW1hbmQuQm9sZCk7XG4gIH1cblxufVxuIl19