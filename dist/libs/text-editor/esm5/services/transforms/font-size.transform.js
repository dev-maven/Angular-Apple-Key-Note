import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
import * as i1 from "../selection.service";
var FontSizeTransform = /** @class */ (function (_super) {
    __extends(FontSizeTransform, _super);
    function FontSizeTransform(selection) {
        var _this = _super.call(this) || this;
        _this.selection = selection;
        return _this;
    }
    Object.defineProperty(FontSizeTransform.prototype, "value", {
        get: function () {
            if (!this.selection.savedValue) {
                return null;
            }
            var parentElement = this.selection.savedValue.parentElement;
            while (parentElement && parentElement.tagName !== 'SPAN' && !parentElement.style.fontSize) {
                parentElement = parentElement.parentElement;
            }
            var size = parentElement ? parentElement.style.fontSize : null;
            return size ? parseInt(size, 10) : null;
        },
        set: function (value) {
            if (!this.selection.savedValue) {
                throw new Error('There is no selection');
            }
            document.execCommand('fontSize', false, '1');
            var fontElements = this.selection.savedValue.container.getElementsByTagName('font');
            Array.from(fontElements).forEach(function (el) {
                if (el.getAttribute('size') !== '1') {
                    return;
                }
                el.removeAttribute('size');
                el.style.fontSize = value + "px";
            });
        },
        enumerable: true,
        configurable: true
    });
    FontSizeTransform.ɵfac = function FontSizeTransform_Factory(t) { return new (t || FontSizeTransform)(i0.ɵɵinject(i1.TextEditorSelection)); };
    FontSizeTransform.ɵprov = i0.ɵɵdefineInjectable({ token: FontSizeTransform, factory: FontSizeTransform.ɵfac });
    return FontSizeTransform;
}(BaseTransform));
export { FontSizeTransform };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FontSizeTransform, [{
        type: Injectable
    }], function () { return [{ type: i1.TextEditorSelection }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1zaXplLnRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsic2VydmljZXMvdHJhbnNmb3Jtcy9mb250LXNpemUudHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRWpEO0lBQ3VDLHFDQUFhO0lBRWxELDJCQUNVLFNBQThCO1FBRHhDLFlBR0UsaUJBQU8sU0FDUjtRQUhTLGVBQVMsR0FBVCxTQUFTLENBQXFCOztJQUd4QyxDQUFDO0lBRUQsc0JBQUksb0NBQUs7YUFrQlQ7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFJLGFBQWEsR0FBZ0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3pFLE9BQU8sYUFBYSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3pGLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO2FBQzdDO1lBRUQsSUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRWpFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUMsQ0FBQzthQS9CRCxVQUFVLEtBQWE7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO2dCQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7YUFDMUM7WUFFRCxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0MsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXRGLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRTtnQkFDakMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDbkMsT0FBTztpQkFDUjtnQkFFRCxFQUFFLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBTSxLQUFLLE9BQUksQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7OztPQUFBO3NGQXhCVSxpQkFBaUI7NkRBQWpCLGlCQUFpQixXQUFqQixpQkFBaUI7NEJBUDlCO0NBK0NDLEFBekNELENBQ3VDLGFBQWEsR0F3Q25EO1NBeENZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uLy4uL3R5cGVzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBUZXh0RWRpdG9yU2VsZWN0aW9uIH0gZnJvbSAnLi4vc2VsZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVRyYW5zZm9ybSB9IGZyb20gJy4vYmFzZS50cmFuc2Zvcm0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9udFNpemVUcmFuc2Zvcm0gZXh0ZW5kcyBCYXNlVHJhbnNmb3JtIGltcGxlbWVudHMgVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlbGVjdGlvbjogVGV4dEVkaXRvclNlbGVjdGlvbixcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGlvbi5zYXZlZFZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIG5vIHNlbGVjdGlvbicpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb250U2l6ZScsIGZhbHNlLCAnMScpO1xuICAgIGNvbnN0IGZvbnRFbGVtZW50cyA9IHRoaXMuc2VsZWN0aW9uLnNhdmVkVmFsdWUuY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb250Jyk7XG5cbiAgICBBcnJheS5mcm9tKGZvbnRFbGVtZW50cykuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCdzaXplJykgIT09ICcxJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnc2l6ZScpO1xuICAgICAgZWwuc3R5bGUuZm9udFNpemUgPSBgJHt2YWx1ZX1weGA7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0aW9uLnNhdmVkVmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuc2VsZWN0aW9uLnNhdmVkVmFsdWUucGFyZW50RWxlbWVudDtcbiAgICB3aGlsZSAocGFyZW50RWxlbWVudCAmJiBwYXJlbnRFbGVtZW50LnRhZ05hbWUgIT09ICdTUEFOJyAmJiAhcGFyZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZSkge1xuICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gcGFyZW50RWxlbWVudCA/IHBhcmVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgOiBudWxsO1xuXG4gICAgcmV0dXJuIHNpemUgPyBwYXJzZUludChzaXplLCAxMCkgOiBudWxsO1xuICB9XG59XG4iXX0=