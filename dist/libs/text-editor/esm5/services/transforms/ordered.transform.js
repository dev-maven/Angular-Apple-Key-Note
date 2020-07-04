import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { isSafari } from '../../helpers/selection.helper';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
var OrderedTransform = /** @class */ (function (_super) {
    __extends(OrderedTransform, _super);
    function OrderedTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderedTransform.prototype.apply = function (currentValue) {
        if (this.value) {
            return this.removeTransformList(currentValue);
        }
        this.execCommand(ExecCommand.InsertOrderedList);
    };
    Object.defineProperty(OrderedTransform.prototype, "value", {
        get: function () {
            return document.queryCommandState(ExecCommand.InsertOrderedList);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Remove ordered list needs to be manually (issue on return to the previous value).
     *
     * @param currentValue Current text widget value.
     */
    OrderedTransform.prototype.removeTransformList = function (currentValue) {
        if (!currentValue) {
            return currentValue;
        }
        var olList = currentValue.indexOf('<ol>');
        var olListClosed = currentValue.indexOf('</ol>');
        var listContent = currentValue.slice(olList + 4, olListClosed);
        var newListContent = listContent.replace(/<li>/g, '').replace(/<\/li>/g, isSafari ? '' : '<br>');
        var firstPart = currentValue.split('<ol>');
        var secondPart = currentValue.split('</ol>');
        return firstPart[0].concat(newListContent).concat(secondPart[1]);
    };
    OrderedTransform.ɵfac = function OrderedTransform_Factory(t) { return ɵOrderedTransform_BaseFactory(t || OrderedTransform); };
    OrderedTransform.ɵprov = i0.ɵɵdefineInjectable({ token: OrderedTransform, factory: OrderedTransform.ɵfac });
    return OrderedTransform;
}(BaseTransform));
export { OrderedTransform };
var ɵOrderedTransform_BaseFactory = i0.ɵɵgetInheritedFactory(OrderedTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OrderedTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJlZC50cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyYW5zZm9ybXMvb3JkZXJlZC50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRWpEO0lBQ3NDLG9DQUFhO0lBRG5EOztLQW1DQztJQWpDQyxnQ0FBSyxHQUFMLFVBQU0sWUFBb0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQkFBSSxtQ0FBSzthQUFUO1lBQ0UsT0FBTyxRQUFRLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkUsQ0FBQzs7O09BQUE7SUFFRDs7OztPQUlHO0lBQ0gsOENBQW1CLEdBQW5CLFVBQW9CLFlBQW9CO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFFRCxJQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRWpFLElBQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5HLElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUvQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7NkdBakNVLGdCQUFnQjs0REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjsyQkFSN0I7Q0EwQ0MsQUFuQ0QsQ0FDc0MsYUFBYSxHQWtDbEQ7U0FsQ1ksZ0JBQWdCOzZEQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc1NhZmFyaSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2VsZWN0aW9uLmhlbHBlcic7XG5pbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi90eXBlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgQmFzZVRyYW5zZm9ybSB9IGZyb20gJy4vYmFzZS50cmFuc2Zvcm0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJlZFRyYW5zZm9ybSBleHRlbmRzIEJhc2VUcmFuc2Zvcm0gaW1wbGVtZW50cyBUcmFuc2Zvcm0ge1xuICBhcHBseShjdXJyZW50VmFsdWU6IHN0cmluZyk6IHN0cmluZyB8IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVUcmFuc2Zvcm1MaXN0KGN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5JbnNlcnRPcmRlcmVkTGlzdCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKEV4ZWNDb21tYW5kLkluc2VydE9yZGVyZWRMaXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgb3JkZXJlZCBsaXN0IG5lZWRzIHRvIGJlIG1hbnVhbGx5IChpc3N1ZSBvbiByZXR1cm4gdG8gdGhlIHByZXZpb3VzIHZhbHVlKS5cbiAgICpcbiAgICogQHBhcmFtIGN1cnJlbnRWYWx1ZSBDdXJyZW50IHRleHQgd2lkZ2V0IHZhbHVlLlxuICAgKi9cbiAgcmVtb3ZlVHJhbnNmb3JtTGlzdChjdXJyZW50VmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgb2xMaXN0ID0gY3VycmVudFZhbHVlLmluZGV4T2YoJzxvbD4nKTtcbiAgICBjb25zdCBvbExpc3RDbG9zZWQgPSBjdXJyZW50VmFsdWUuaW5kZXhPZignPC9vbD4nKTtcbiAgICBjb25zdCBsaXN0Q29udGVudCA9IGN1cnJlbnRWYWx1ZS5zbGljZShvbExpc3QgKyA0LCBvbExpc3RDbG9zZWQpO1xuXG4gICAgY29uc3QgbmV3TGlzdENvbnRlbnQgPSBsaXN0Q29udGVudC5yZXBsYWNlKC88bGk+L2csICcnKS5yZXBsYWNlKC88XFwvbGk+L2csIGlzU2FmYXJpID8gJycgOiAnPGJyPicpO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gY3VycmVudFZhbHVlLnNwbGl0KCc8b2w+Jyk7XG4gICAgY29uc3Qgc2Vjb25kUGFydCA9IGN1cnJlbnRWYWx1ZS5zcGxpdCgnPC9vbD4nKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnRbMF0uY29uY2F0KG5ld0xpc3RDb250ZW50KS5jb25jYXQoc2Vjb25kUGFydFsxXSk7XG4gIH1cbn1cbiJdfQ==