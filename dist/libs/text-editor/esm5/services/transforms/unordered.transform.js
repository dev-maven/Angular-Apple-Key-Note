import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { isSafari } from '../../helpers/selection.helper';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
var UnorderedTransform = /** @class */ (function (_super) {
    __extends(UnorderedTransform, _super);
    function UnorderedTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnorderedTransform.prototype.apply = function (currentValue) {
        if (this.value) {
            return this.removeTransformList(currentValue);
        }
        this.execCommand(ExecCommand.InsertUnorderedList);
    };
    Object.defineProperty(UnorderedTransform.prototype, "value", {
        get: function () {
            return document.queryCommandState(ExecCommand.InsertUnorderedList);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Remove unordered list needs to be manually (issue on return to the previous value).
     *
     * @param currentValue Current text widget value.
     */
    UnorderedTransform.prototype.removeTransformList = function (currentValue) {
        if (!currentValue) {
            return currentValue;
        }
        var ulList = currentValue.indexOf('<ul>');
        var ulListClosed = currentValue.indexOf('</ul>');
        var listContent = currentValue.slice(ulList + 4, ulListClosed);
        var newListContent = listContent.replace(/<li>/g, '').replace(/<\/li>/g, isSafari ? '' : '<br>');
        var firstPart = currentValue.split('<ul>');
        var secondPart = currentValue.split('</ul>');
        return firstPart[0].concat(newListContent).concat(secondPart[1]);
    };
    UnorderedTransform.ɵfac = function UnorderedTransform_Factory(t) { return ɵUnorderedTransform_BaseFactory(t || UnorderedTransform); };
    UnorderedTransform.ɵprov = i0.ɵɵdefineInjectable({ token: UnorderedTransform, factory: UnorderedTransform.ɵfac });
    return UnorderedTransform;
}(BaseTransform));
export { UnorderedTransform };
var ɵUnorderedTransform_BaseFactory = i0.ɵɵgetInheritedFactory(UnorderedTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UnorderedTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5vcmRlcmVkLnRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsic2VydmljZXMvdHJhbnNmb3Jtcy91bm9yZGVyZWQudHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVqRDtJQUN3QyxzQ0FBYTtJQURyRDs7S0FtQ0M7SUFqQ0Msa0NBQUssR0FBTCxVQUFNLFlBQW9CO1FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsc0JBQUkscUNBQUs7YUFBVDtZQUNFLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7OztPQUFBO0lBRUQ7Ozs7T0FJRztJQUNILGdEQUFtQixHQUFuQixVQUFvQixZQUFvQjtRQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsSUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELElBQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVqRSxJQUFNLGNBQWMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuRyxJQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFL0MsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO21IQWpDVSxrQkFBa0I7OERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7NkJBUi9CO0NBMENDLEFBbkNELENBQ3dDLGFBQWEsR0FrQ3BEO1NBbENZLGtCQUFrQjsrREFBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNTYWZhcmkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NlbGVjdGlvbi5oZWxwZXInO1xuaW1wb3J0IHsgRXhlY0NvbW1hbmQgfSBmcm9tICcuLi8uLi90ZXh0LWVkaXRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEJhc2VUcmFuc2Zvcm0gfSBmcm9tICcuL2Jhc2UudHJhbnNmb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVub3JkZXJlZFRyYW5zZm9ybSBleHRlbmRzIEJhc2VUcmFuc2Zvcm0gaW1wbGVtZW50cyBUcmFuc2Zvcm0ge1xuICBhcHBseShjdXJyZW50VmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVUcmFuc2Zvcm1MaXN0KGN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5JbnNlcnRVbm9yZGVyZWRMaXN0KTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoRXhlY0NvbW1hbmQuSW5zZXJ0VW5vcmRlcmVkTGlzdCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHVub3JkZXJlZCBsaXN0IG5lZWRzIHRvIGJlIG1hbnVhbGx5IChpc3N1ZSBvbiByZXR1cm4gdG8gdGhlIHByZXZpb3VzIHZhbHVlKS5cbiAgICpcbiAgICogQHBhcmFtIGN1cnJlbnRWYWx1ZSBDdXJyZW50IHRleHQgd2lkZ2V0IHZhbHVlLlxuICAgKi9cbiAgcmVtb3ZlVHJhbnNmb3JtTGlzdChjdXJyZW50VmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgdWxMaXN0ID0gY3VycmVudFZhbHVlLmluZGV4T2YoJzx1bD4nKTtcbiAgICBjb25zdCB1bExpc3RDbG9zZWQgPSBjdXJyZW50VmFsdWUuaW5kZXhPZignPC91bD4nKTtcbiAgICBjb25zdCBsaXN0Q29udGVudCA9IGN1cnJlbnRWYWx1ZS5zbGljZSh1bExpc3QgKyA0LCB1bExpc3RDbG9zZWQpO1xuXG4gICAgY29uc3QgbmV3TGlzdENvbnRlbnQgPSBsaXN0Q29udGVudC5yZXBsYWNlKC88bGk+L2csICcnKS5yZXBsYWNlKC88XFwvbGk+L2csIGlzU2FmYXJpID8gJycgOiAnPGJyPicpO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gY3VycmVudFZhbHVlLnNwbGl0KCc8dWw+Jyk7XG4gICAgY29uc3Qgc2Vjb25kUGFydCA9IGN1cnJlbnRWYWx1ZS5zcGxpdCgnPC91bD4nKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnRbMF0uY29uY2F0KG5ld0xpc3RDb250ZW50KS5jb25jYXQoc2Vjb25kUGFydFsxXSk7XG4gIH1cbn1cbiJdfQ==