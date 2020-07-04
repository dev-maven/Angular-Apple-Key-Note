import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { PebLinkDatasetRouteKey } from '../../text-editor.constants';
import { ExecCommand } from '../../text-editor.interface';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
import * as i1 from "../selection.service";
var LinkTransform = /** @class */ (function (_super) {
    __extends(LinkTransform, _super);
    function LinkTransform(selection) {
        var _this = _super.call(this) || this;
        _this.selection = selection;
        return _this;
    }
    Object.defineProperty(LinkTransform.prototype, "value", {
        get: function () {
            if (!this.selection.savedValue) {
                return null;
            }
            var parentElement = this.selection.savedValue.parentElement;
            while (parentElement && parentElement.tagName !== 'A') {
                parentElement = parentElement.parentElement;
            }
            return parentElement && parentElement.dataset ? parentElement.dataset[PebLinkDatasetRouteKey] : null;
        },
        set: function (value) {
            value ? this.link(value) : this.unlink();
        },
        enumerable: true,
        configurable: true
    });
    LinkTransform.prototype.link = function (link) {
        var anchorTag = this.selection.findParentTag('A');
        if (anchorTag) {
            this.selection.expandToTag(anchorTag);
        }
        this.execCommand(ExecCommand.CreateLink, '#');
        // Update selection
        this.selection.saveSelection(this.selection.getSelection(this.selection.savedValue.container));
        this.selection.savedValue.parentElement.dataset[PebLinkDatasetRouteKey] = link;
        this.execCommand(ExecCommand.CreateLink);
    };
    LinkTransform.prototype.unlink = function () {
        this.execCommand(ExecCommand.Unlink);
    };
    LinkTransform.ɵfac = function LinkTransform_Factory(t) { return new (t || LinkTransform)(i0.ɵɵinject(i1.TextEditorSelection)); };
    LinkTransform.ɵprov = i0.ɵɵdefineInjectable({ token: LinkTransform, factory: LinkTransform.ɵfac });
    return LinkTransform;
}(BaseTransform));
export { LinkTransform };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LinkTransform, [{
        type: Injectable
    }], function () { return [{ type: i1.TextEditorSelection }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay50cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyYW5zZm9ybXMvbGluay50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRWpEO0lBQ21DLGlDQUFhO0lBRTlDLHVCQUNVLFNBQThCO1FBRHhDLFlBR0UsaUJBQU8sU0FDUjtRQUhTLGVBQVMsR0FBVCxTQUFTLENBQXFCOztJQUd4QyxDQUFDO0lBRUQsc0JBQUksZ0NBQUs7YUFJVDtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtnQkFDOUIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELElBQUksYUFBYSxHQUFnQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFFekUsT0FBTyxhQUFhLElBQUksYUFBYSxDQUFDLE9BQU8sS0FBSyxHQUFHLEVBQUU7Z0JBQ3JELGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO2FBQzdDO1lBRUQsT0FBTyxhQUFhLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkcsQ0FBQzthQWZELFVBQVUsS0FBYTtZQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQWVPLDRCQUFJLEdBQVosVUFBYSxJQUFZO1FBQ3ZCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFOUMsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FDakUsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFL0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLDhCQUFNLEdBQWQ7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzhFQTdDVSxhQUFhO3lEQUFiLGFBQWEsV0FBYixhQUFhO3dCQVQxQjtDQXdEQyxBQWhERCxDQUNtQyxhQUFhLEdBK0MvQztTQS9DWSxhQUFhO2tEQUFiLGFBQWE7Y0FEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGViTGlua0RhdGFzZXRSb3V0ZUtleSB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi90eXBlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgVGV4dEVkaXRvclNlbGVjdGlvbiB9IGZyb20gJy4uL3NlbGVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VUcmFuc2Zvcm0gfSBmcm9tICcuL2Jhc2UudHJhbnNmb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpbmtUcmFuc2Zvcm0gZXh0ZW5kcyBCYXNlVHJhbnNmb3JtIGltcGxlbWVudHMgVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlbGVjdGlvbjogVGV4dEVkaXRvclNlbGVjdGlvbixcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdmFsdWUgPyB0aGlzLmxpbmsodmFsdWUpIDogdGhpcy51bmxpbmsoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5zZWxlY3Rpb24uc2F2ZWRWYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuc2VsZWN0aW9uLnNhdmVkVmFsdWUucGFyZW50RWxlbWVudDtcblxuICAgIHdoaWxlIChwYXJlbnRFbGVtZW50ICYmIHBhcmVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ0EnKSB7XG4gICAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50ICYmIHBhcmVudEVsZW1lbnQuZGF0YXNldCA/IHBhcmVudEVsZW1lbnQuZGF0YXNldFtQZWJMaW5rRGF0YXNldFJvdXRlS2V5XSA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGxpbmsobGluazogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgYW5jaG9yVGFnID0gdGhpcy5zZWxlY3Rpb24uZmluZFBhcmVudFRhZygnQScpO1xuICAgIGlmIChhbmNob3JUYWcpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uLmV4cGFuZFRvVGFnKGFuY2hvclRhZyk7XG4gICAgfVxuXG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5DcmVhdGVMaW5rLCAnIycpO1xuXG4gICAgLy8gVXBkYXRlIHNlbGVjdGlvblxuICAgIHRoaXMuc2VsZWN0aW9uLnNhdmVTZWxlY3Rpb24oXG4gICAgICB0aGlzLnNlbGVjdGlvbi5nZXRTZWxlY3Rpb24odGhpcy5zZWxlY3Rpb24uc2F2ZWRWYWx1ZS5jb250YWluZXIpLFxuICAgICk7XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5zYXZlZFZhbHVlLnBhcmVudEVsZW1lbnQuZGF0YXNldFtQZWJMaW5rRGF0YXNldFJvdXRlS2V5XSA9IGxpbms7XG5cbiAgICB0aGlzLmV4ZWNDb21tYW5kKEV4ZWNDb21tYW5kLkNyZWF0ZUxpbmspO1xuICB9XG5cbiAgcHJpdmF0ZSB1bmxpbmsoKTogdm9pZCB7XG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5VbmxpbmspO1xuICB9XG5cbn1cbiJdfQ==