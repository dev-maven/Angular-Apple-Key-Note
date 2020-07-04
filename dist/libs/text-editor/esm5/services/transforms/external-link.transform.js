import { __extends } from "tslib";
import { Injectable } from '@angular/core';
// import { PebLinkDatasetRouteKey } from '../../text-editor.constants';
import { ExecCommand } from '../../text-editor.interface';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
import * as i1 from "../selection.service";
var ExternalLinkTransform = /** @class */ (function (_super) {
    __extends(ExternalLinkTransform, _super);
    function ExternalLinkTransform(selection) {
        var _this = _super.call(this) || this;
        _this.selection = selection;
        return _this;
    }
    Object.defineProperty(ExternalLinkTransform.prototype, "value", {
        get: function () {
            if (!this.selection.savedValue) {
                return null;
            }
            var parentElement = this.getParentLinkElement();
            return parentElement && parentElement.hasAttribute('href') ? parentElement.getAttribute('href') : null;
        },
        set: function (value) {
            value ? this.link(value) : this.unlink();
        },
        enumerable: true,
        configurable: true
    });
    ExternalLinkTransform.prototype.link = function (link) {
        // const anchorTag = this.selection.findParentTag('A');
        // if (anchorTag) {
        //   this.selection.expandToTag(anchorTag);
        // }
        this.execCommand(ExecCommand.CreateLink, this.getLinkWithHttps(link));
        // Update selection
        this.selection.saveSelection(this.selection.getSelection(this.selection.savedValue.container));
        var parentElement = this.getParentLinkElement();
        parentElement.setAttribute('target', '_blank');
        // this.execCommand(ExecCommand.CreateLink);
    };
    ExternalLinkTransform.prototype.getParentLinkElement = function () {
        var parentElement = this.selection.savedValue.parentElement;
        while (parentElement && parentElement.tagName !== 'A') {
            parentElement = parentElement.parentElement;
        }
        return parentElement;
    };
    ExternalLinkTransform.prototype.getLinkWithHttps = function (link) {
        return ((link.indexOf('://') === -1) && (link.indexOf('mailto:') === -1)) ? "https://" + link : link;
    };
    ExternalLinkTransform.prototype.unlink = function () {
        this.execCommand(ExecCommand.Unlink);
    };
    ExternalLinkTransform.ɵfac = function ExternalLinkTransform_Factory(t) { return new (t || ExternalLinkTransform)(i0.ɵɵinject(i1.TextEditorSelection)); };
    ExternalLinkTransform.ɵprov = i0.ɵɵdefineInjectable({ token: ExternalLinkTransform, factory: ExternalLinkTransform.ɵfac });
    return ExternalLinkTransform;
}(BaseTransform));
export { ExternalLinkTransform };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExternalLinkTransform, [{
        type: Injectable
    }], function () { return [{ type: i1.TextEditorSelection }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay50cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyYW5zZm9ybXMvZXh0ZXJuYWwtbGluay50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0Msd0VBQXdFO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUVqRDtJQUMyQyx5Q0FBYTtJQUV0RCwrQkFDVSxTQUE4QjtRQUR4QyxZQUdFLGlCQUFPLFNBQ1I7UUFIUyxlQUFTLEdBQVQsU0FBUyxDQUFxQjs7SUFHeEMsQ0FBQztJQUVELHNCQUFJLHdDQUFLO2FBSVQ7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUVsRCxPQUFPLGFBQWEsSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekcsQ0FBQzthQVpELFVBQVUsS0FBYTtZQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQVlPLG9DQUFJLEdBQVosVUFBYSxJQUFZO1FBQ3ZCLHVEQUF1RDtRQUN2RCxtQkFBbUI7UUFDbkIsMkNBQTJDO1FBQzNDLElBQUk7UUFFSixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFdEUsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FDakUsQ0FBQztRQUVGLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2xELGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRS9DLDRDQUE0QztJQUM5QyxDQUFDO0lBRUQsb0RBQW9CLEdBQXBCO1FBQ0UsSUFBSSxhQUFhLEdBQWdCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUV6RSxPQUFPLGFBQWEsSUFBSSxhQUFhLENBQUMsT0FBTyxLQUFLLEdBQUcsRUFBRTtZQUNyRCxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztTQUM3QztRQUVELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsYUFBVyxJQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUN2RyxDQUFDO0lBRU8sc0NBQU0sR0FBZDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OEZBekRVLHFCQUFxQjtpRUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjtnQ0FUbEM7Q0FvRUMsQUE1REQsQ0FDMkMsYUFBYSxHQTJEdkQ7U0EzRFkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gaW1wb3J0IHsgUGViTGlua0RhdGFzZXRSb3V0ZUtleSB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi90eXBlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgVGV4dEVkaXRvclNlbGVjdGlvbiB9IGZyb20gJy4uL3NlbGVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VUcmFuc2Zvcm0gfSBmcm9tICcuL2Jhc2UudHJhbnNmb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4dGVybmFsTGlua1RyYW5zZm9ybSBleHRlbmRzIEJhc2VUcmFuc2Zvcm0gaW1wbGVtZW50cyBUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VsZWN0aW9uOiBUZXh0RWRpdG9yU2VsZWN0aW9uLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB2YWx1ZSA/IHRoaXMubGluayh2YWx1ZSkgOiB0aGlzLnVubGluaygpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGlvbi5zYXZlZFZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRMaW5rRWxlbWVudCgpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQgJiYgcGFyZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSA/IHBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBsaW5rKGxpbms6IHN0cmluZykge1xuICAgIC8vIGNvbnN0IGFuY2hvclRhZyA9IHRoaXMuc2VsZWN0aW9uLmZpbmRQYXJlbnRUYWcoJ0EnKTtcbiAgICAvLyBpZiAoYW5jaG9yVGFnKSB7XG4gICAgLy8gICB0aGlzLnNlbGVjdGlvbi5leHBhbmRUb1RhZyhhbmNob3JUYWcpO1xuICAgIC8vIH1cblxuICAgIHRoaXMuZXhlY0NvbW1hbmQoRXhlY0NvbW1hbmQuQ3JlYXRlTGluaywgdGhpcy5nZXRMaW5rV2l0aEh0dHBzKGxpbmspKTtcblxuICAgIC8vIFVwZGF0ZSBzZWxlY3Rpb25cbiAgICB0aGlzLnNlbGVjdGlvbi5zYXZlU2VsZWN0aW9uKFxuICAgICAgdGhpcy5zZWxlY3Rpb24uZ2V0U2VsZWN0aW9uKHRoaXMuc2VsZWN0aW9uLnNhdmVkVmFsdWUuY29udGFpbmVyKVxuICAgICk7XG5cbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRMaW5rRWxlbWVudCgpO1xuICAgIHBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cbiAgICAvLyB0aGlzLmV4ZWNDb21tYW5kKEV4ZWNDb21tYW5kLkNyZWF0ZUxpbmspO1xuICB9XG5cbiAgZ2V0UGFyZW50TGlua0VsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGxldCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuc2VsZWN0aW9uLnNhdmVkVmFsdWUucGFyZW50RWxlbWVudDtcblxuICAgIHdoaWxlIChwYXJlbnRFbGVtZW50ICYmIHBhcmVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ0EnKSB7XG4gICAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0TGlua1dpdGhIdHRwcyhsaW5rOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAoKGxpbmsuaW5kZXhPZignOi8vJykgPT09IC0xKSAmJiAobGluay5pbmRleE9mKCdtYWlsdG86JykgPT09IC0xKSApID8gYGh0dHBzOi8vJHtsaW5rfWAgOiBsaW5rXG4gIH1cblxuICBwcml2YXRlIHVubGluaygpOiB2b2lkIHtcbiAgICB0aGlzLmV4ZWNDb21tYW5kKEV4ZWNDb21tYW5kLlVubGluayk7XG4gIH1cblxufVxuIl19