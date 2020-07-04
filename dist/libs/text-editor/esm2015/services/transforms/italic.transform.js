import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export class ItalicTransform extends BaseTransform {
    toggle() {
        this.execCommand(ExecCommand.Italic);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.Italic);
    }
}
ItalicTransform.ɵfac = function ItalicTransform_Factory(t) { return ɵItalicTransform_BaseFactory(t || ItalicTransform); };
ItalicTransform.ɵprov = i0.ɵɵdefineInjectable({ token: ItalicTransform, factory: ItalicTransform.ɵfac });
const ɵItalicTransform_BaseFactory = i0.ɵɵgetInheritedFactory(ItalicTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ItalicTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRhbGljLnRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsic2VydmljZXMvdHJhbnNmb3Jtcy9pdGFsaWMudHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHakQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTtJQUVoRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDOztzR0FaVSxlQUFlO3VEQUFmLGVBQWUsV0FBZixlQUFlOzhEQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi90eXBlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgQmFzZVRyYW5zZm9ybSB9IGZyb20gJy4vYmFzZS50cmFuc2Zvcm0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRhbGljVHJhbnNmb3JtIGV4dGVuZHMgQmFzZVRyYW5zZm9ybSBpbXBsZW1lbnRzIFRyYW5zZm9ybSB7XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuZXhlY0NvbW1hbmQoRXhlY0NvbW1hbmQuSXRhbGljKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaXNTZWxlY3Rpb25FeGlzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShFeGVjQ29tbWFuZC5JdGFsaWMpO1xuICB9XG5cbn1cbiJdfQ==