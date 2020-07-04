import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
var JustifyLeftTransform = /** @class */ (function (_super) {
    __extends(JustifyLeftTransform, _super);
    function JustifyLeftTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JustifyLeftTransform.prototype.justify = function () {
        this.execCommand(ExecCommand.JustifyLeft);
    };
    Object.defineProperty(JustifyLeftTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.JustifyLeft);
        },
        enumerable: true,
        configurable: true
    });
    JustifyLeftTransform.ɵfac = function JustifyLeftTransform_Factory(t) { return ɵJustifyLeftTransform_BaseFactory(t || JustifyLeftTransform); };
    JustifyLeftTransform.ɵprov = i0.ɵɵdefineInjectable({ token: JustifyLeftTransform, factory: JustifyLeftTransform.ɵfac });
    return JustifyLeftTransform;
}(BaseTransform));
export { JustifyLeftTransform };
var ɵJustifyLeftTransform_BaseFactory = i0.ɵɵgetInheritedFactory(JustifyLeftTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JustifyLeftTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdGlmeS1sZWZ0LnRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsic2VydmljZXMvdHJhbnNmb3Jtcy9qdXN0aWZ5LWxlZnQudHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRWpEO0lBQzBDLHdDQUFhO0lBRHZEOztLQWFDO0lBWEMsc0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxzQkFBSSx1Q0FBSzthQUFUO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELE9BQU8sUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTt5SEFYVSxvQkFBb0I7Z0VBQXBCLG9CQUFvQixXQUFwQixvQkFBb0I7K0JBUGpDO0NBbUJDLEFBYkQsQ0FDMEMsYUFBYSxHQVl0RDtTQVpZLG9CQUFvQjtpRUFBcEIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXhlY0NvbW1hbmQgfSBmcm9tICcuLi8uLi90ZXh0LWVkaXRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEJhc2VUcmFuc2Zvcm0gfSBmcm9tICcuL2Jhc2UudHJhbnNmb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEp1c3RpZnlMZWZ0VHJhbnNmb3JtIGV4dGVuZHMgQmFzZVRyYW5zZm9ybSBpbXBsZW1lbnRzIFRyYW5zZm9ybSB7XG4gIGp1c3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5KdXN0aWZ5TGVmdCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzU2VsZWN0aW9uRXhpc3QpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoRXhlY0NvbW1hbmQuSnVzdGlmeUxlZnQpO1xuICB9XG59XG4iXX0=