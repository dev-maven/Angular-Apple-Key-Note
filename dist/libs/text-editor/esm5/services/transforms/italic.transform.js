import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
var ItalicTransform = /** @class */ (function (_super) {
    __extends(ItalicTransform, _super);
    function ItalicTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItalicTransform.prototype.toggle = function () {
        this.execCommand(ExecCommand.Italic);
    };
    Object.defineProperty(ItalicTransform.prototype, "value", {
        get: function () {
            if (!this.isSelectionExist) {
                return false;
            }
            return document.queryCommandState(ExecCommand.Italic);
        },
        enumerable: true,
        configurable: true
    });
    ItalicTransform.ɵfac = function ItalicTransform_Factory(t) { return ɵItalicTransform_BaseFactory(t || ItalicTransform); };
    ItalicTransform.ɵprov = i0.ɵɵdefineInjectable({ token: ItalicTransform, factory: ItalicTransform.ɵfac });
    return ItalicTransform;
}(BaseTransform));
export { ItalicTransform };
var ɵItalicTransform_BaseFactory = i0.ɵɵgetInheritedFactory(ItalicTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ItalicTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRhbGljLnRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsic2VydmljZXMvdHJhbnNmb3Jtcy9pdGFsaWMudHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRWpEO0lBQ3FDLG1DQUFhO0lBRGxEOztLQWVDO0lBWkMsZ0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQkFBSSxrQ0FBSzthQUFUO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELE9BQU8sUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxDQUFDOzs7T0FBQTswR0FaVSxlQUFlOzJEQUFmLGVBQWUsV0FBZixlQUFlOzBCQVA1QjtDQXFCQyxBQWZELENBQ3FDLGFBQWEsR0FjakQ7U0FkWSxlQUFlOzREQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi90eXBlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgQmFzZVRyYW5zZm9ybSB9IGZyb20gJy4vYmFzZS50cmFuc2Zvcm0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRhbGljVHJhbnNmb3JtIGV4dGVuZHMgQmFzZVRyYW5zZm9ybSBpbXBsZW1lbnRzIFRyYW5zZm9ybSB7XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuZXhlY0NvbW1hbmQoRXhlY0NvbW1hbmQuSXRhbGljKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaXNTZWxlY3Rpb25FeGlzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShFeGVjQ29tbWFuZC5JdGFsaWMpO1xuICB9XG5cbn1cbiJdfQ==