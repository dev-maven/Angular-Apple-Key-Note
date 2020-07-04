import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
var UnderlineTransform = /** @class */ (function (_super) {
    __extends(UnderlineTransform, _super);
    function UnderlineTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnderlineTransform.prototype.toggle = function () {
        this.execCommand(ExecCommand.Underline);
    };
    Object.defineProperty(UnderlineTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.Underline);
        },
        enumerable: true,
        configurable: true
    });
    UnderlineTransform.ɵfac = function UnderlineTransform_Factory(t) { return ɵUnderlineTransform_BaseFactory(t || UnderlineTransform); };
    UnderlineTransform.ɵprov = i0.ɵɵdefineInjectable({ token: UnderlineTransform, factory: UnderlineTransform.ɵfac });
    return UnderlineTransform;
}(BaseTransform));
export { UnderlineTransform };
var ɵUnderlineTransform_BaseFactory = i0.ɵɵgetInheritedFactory(UnderlineTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UnderlineTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kZXJsaW5lLnRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsic2VydmljZXMvdHJhbnNmb3Jtcy91bmRlcmxpbmUudHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRWpEO0lBQ3dDLHNDQUFhO0lBRHJEOztLQWVDO0lBWkMsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQkFBSSxxQ0FBSzthQUFUO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELE9BQU8sUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTttSEFaVSxrQkFBa0I7OERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7NkJBUC9CO0NBcUJDLEFBZkQsQ0FDd0MsYUFBYSxHQWNwRDtTQWRZLGtCQUFrQjsrREFBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXhlY0NvbW1hbmQgfSBmcm9tICcuLi8uLi90ZXh0LWVkaXRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEJhc2VUcmFuc2Zvcm0gfSBmcm9tICcuL2Jhc2UudHJhbnNmb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVuZGVybGluZVRyYW5zZm9ybSBleHRlbmRzIEJhc2VUcmFuc2Zvcm0gaW1wbGVtZW50cyBUcmFuc2Zvcm0ge1xuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmV4ZWNDb21tYW5kKEV4ZWNDb21tYW5kLlVuZGVybGluZSk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzU2VsZWN0aW9uRXhpc3QpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoRXhlY0NvbW1hbmQuVW5kZXJsaW5lKTtcbiAgfVxuXG59XG4iXX0=