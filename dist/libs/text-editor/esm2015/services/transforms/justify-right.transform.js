import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export class JustifyRightTransform extends BaseTransform {
    justify() {
        this.execCommand(ExecCommand.JustifyRight);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.JustifyRight);
    }
}
JustifyRightTransform.ɵfac = function JustifyRightTransform_Factory(t) { return ɵJustifyRightTransform_BaseFactory(t || JustifyRightTransform); };
JustifyRightTransform.ɵprov = i0.ɵɵdefineInjectable({ token: JustifyRightTransform, factory: JustifyRightTransform.ɵfac });
const ɵJustifyRightTransform_BaseFactory = i0.ɵɵgetInheritedFactory(JustifyRightTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JustifyRightTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdGlmeS1yaWdodC50cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyYW5zZm9ybXMvanVzdGlmeS1yaWdodC50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUdqRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsYUFBYTtJQUN0RCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDOzt3SEFYVSxxQkFBcUI7NkRBQXJCLHFCQUFxQixXQUFyQixxQkFBcUI7b0VBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV4ZWNDb21tYW5kIH0gZnJvbSAnLi4vLi4vdGV4dC1lZGl0b3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uLy4uL3R5cGVzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBCYXNlVHJhbnNmb3JtIH0gZnJvbSAnLi9iYXNlLnRyYW5zZm9ybSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKdXN0aWZ5UmlnaHRUcmFuc2Zvcm0gZXh0ZW5kcyBCYXNlVHJhbnNmb3JtIGltcGxlbWVudHMgVHJhbnNmb3JtIHtcbiAganVzdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLmV4ZWNDb21tYW5kKEV4ZWNDb21tYW5kLkp1c3RpZnlSaWdodCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzU2VsZWN0aW9uRXhpc3QpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoRXhlY0NvbW1hbmQuSnVzdGlmeVJpZ2h0KTtcbiAgfVxufVxuIl19