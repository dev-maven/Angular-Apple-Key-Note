import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export class JustifyLeftTransform extends BaseTransform {
    justify() {
        this.execCommand(ExecCommand.JustifyLeft);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.JustifyLeft);
    }
}
JustifyLeftTransform.ɵfac = function JustifyLeftTransform_Factory(t) { return ɵJustifyLeftTransform_BaseFactory(t || JustifyLeftTransform); };
JustifyLeftTransform.ɵprov = i0.ɵɵdefineInjectable({ token: JustifyLeftTransform, factory: JustifyLeftTransform.ɵfac });
const ɵJustifyLeftTransform_BaseFactory = i0.ɵɵgetInheritedFactory(JustifyLeftTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JustifyLeftTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdGlmeS1sZWZ0LnRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsic2VydmljZXMvdHJhbnNmb3Jtcy9qdXN0aWZ5LWxlZnQudHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHakQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFDckQsT0FBTztRQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7cUhBWFUsb0JBQW9COzREQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CO21FQUFwQixvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi90eXBlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgQmFzZVRyYW5zZm9ybSB9IGZyb20gJy4vYmFzZS50cmFuc2Zvcm0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnVzdGlmeUxlZnRUcmFuc2Zvcm0gZXh0ZW5kcyBCYXNlVHJhbnNmb3JtIGltcGxlbWVudHMgVHJhbnNmb3JtIHtcbiAganVzdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLmV4ZWNDb21tYW5kKEV4ZWNDb21tYW5kLkp1c3RpZnlMZWZ0KTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaXNTZWxlY3Rpb25FeGlzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShFeGVjQ29tbWFuZC5KdXN0aWZ5TGVmdCk7XG4gIH1cbn1cbiJdfQ==