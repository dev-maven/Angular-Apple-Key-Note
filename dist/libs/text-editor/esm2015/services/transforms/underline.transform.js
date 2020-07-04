import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export class UnderlineTransform extends BaseTransform {
    toggle() {
        this.execCommand(ExecCommand.Underline);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.Underline);
    }
}
UnderlineTransform.ɵfac = function UnderlineTransform_Factory(t) { return ɵUnderlineTransform_BaseFactory(t || UnderlineTransform); };
UnderlineTransform.ɵprov = i0.ɵɵdefineInjectable({ token: UnderlineTransform, factory: UnderlineTransform.ɵfac });
const ɵUnderlineTransform_BaseFactory = i0.ɵɵgetInheritedFactory(UnderlineTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UnderlineTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kZXJsaW5lLnRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsic2VydmljZXMvdHJhbnNmb3Jtcy91bmRlcmxpbmUudHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHakQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGFBQWE7SUFFbkQsTUFBTTtRQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7K0dBWlUsa0JBQWtCOzBEQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCO2lFQUFsQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi90eXBlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgQmFzZVRyYW5zZm9ybSB9IGZyb20gJy4vYmFzZS50cmFuc2Zvcm0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVW5kZXJsaW5lVHJhbnNmb3JtIGV4dGVuZHMgQmFzZVRyYW5zZm9ybSBpbXBsZW1lbnRzIFRyYW5zZm9ybSB7XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuZXhlY0NvbW1hbmQoRXhlY0NvbW1hbmQuVW5kZXJsaW5lKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaXNTZWxlY3Rpb25FeGlzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShFeGVjQ29tbWFuZC5VbmRlcmxpbmUpO1xuICB9XG5cbn1cbiJdfQ==