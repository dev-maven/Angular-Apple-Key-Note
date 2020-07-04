import { Injectable } from '@angular/core';
import { isSafari } from '../../helpers/selection.helper';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export class OrderedTransform extends BaseTransform {
    apply(currentValue) {
        if (this.value) {
            return this.removeTransformList(currentValue);
        }
        this.execCommand(ExecCommand.InsertOrderedList);
    }
    get value() {
        return document.queryCommandState(ExecCommand.InsertOrderedList);
    }
    /**
     * Remove ordered list needs to be manually (issue on return to the previous value).
     *
     * @param currentValue Current text widget value.
     */
    removeTransformList(currentValue) {
        if (!currentValue) {
            return currentValue;
        }
        const olList = currentValue.indexOf('<ol>');
        const olListClosed = currentValue.indexOf('</ol>');
        const listContent = currentValue.slice(olList + 4, olListClosed);
        const newListContent = listContent.replace(/<li>/g, '').replace(/<\/li>/g, isSafari ? '' : '<br>');
        const firstPart = currentValue.split('<ol>');
        const secondPart = currentValue.split('</ol>');
        return firstPart[0].concat(newListContent).concat(secondPart[1]);
    }
}
OrderedTransform.ɵfac = function OrderedTransform_Factory(t) { return ɵOrderedTransform_BaseFactory(t || OrderedTransform); };
OrderedTransform.ɵprov = i0.ɵɵdefineInjectable({ token: OrderedTransform, factory: OrderedTransform.ɵfac });
const ɵOrderedTransform_BaseFactory = i0.ɵɵgetInheritedFactory(OrderedTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OrderedTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJlZC50cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyYW5zZm9ybXMvb3JkZXJlZC50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHakQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGFBQWE7SUFDakQsS0FBSyxDQUFDLFlBQW9CO1FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxRQUFRLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQkFBbUIsQ0FBQyxZQUFvQjtRQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVqRSxNQUFNLGNBQWMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuRyxNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFL0MsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzt5R0FqQ1UsZ0JBQWdCO3dEQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCOytEQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc1NhZmFyaSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2VsZWN0aW9uLmhlbHBlcic7XG5pbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uLy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi90eXBlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgQmFzZVRyYW5zZm9ybSB9IGZyb20gJy4vYmFzZS50cmFuc2Zvcm0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJlZFRyYW5zZm9ybSBleHRlbmRzIEJhc2VUcmFuc2Zvcm0gaW1wbGVtZW50cyBUcmFuc2Zvcm0ge1xuICBhcHBseShjdXJyZW50VmFsdWU6IHN0cmluZyk6IHN0cmluZyB8IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVUcmFuc2Zvcm1MaXN0KGN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5JbnNlcnRPcmRlcmVkTGlzdCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKEV4ZWNDb21tYW5kLkluc2VydE9yZGVyZWRMaXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgb3JkZXJlZCBsaXN0IG5lZWRzIHRvIGJlIG1hbnVhbGx5IChpc3N1ZSBvbiByZXR1cm4gdG8gdGhlIHByZXZpb3VzIHZhbHVlKS5cbiAgICpcbiAgICogQHBhcmFtIGN1cnJlbnRWYWx1ZSBDdXJyZW50IHRleHQgd2lkZ2V0IHZhbHVlLlxuICAgKi9cbiAgcmVtb3ZlVHJhbnNmb3JtTGlzdChjdXJyZW50VmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgb2xMaXN0ID0gY3VycmVudFZhbHVlLmluZGV4T2YoJzxvbD4nKTtcbiAgICBjb25zdCBvbExpc3RDbG9zZWQgPSBjdXJyZW50VmFsdWUuaW5kZXhPZignPC9vbD4nKTtcbiAgICBjb25zdCBsaXN0Q29udGVudCA9IGN1cnJlbnRWYWx1ZS5zbGljZShvbExpc3QgKyA0LCBvbExpc3RDbG9zZWQpO1xuXG4gICAgY29uc3QgbmV3TGlzdENvbnRlbnQgPSBsaXN0Q29udGVudC5yZXBsYWNlKC88bGk+L2csICcnKS5yZXBsYWNlKC88XFwvbGk+L2csIGlzU2FmYXJpID8gJycgOiAnPGJyPicpO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gY3VycmVudFZhbHVlLnNwbGl0KCc8b2w+Jyk7XG4gICAgY29uc3Qgc2Vjb25kUGFydCA9IGN1cnJlbnRWYWx1ZS5zcGxpdCgnPC9vbD4nKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnRbMF0uY29uY2F0KG5ld0xpc3RDb250ZW50KS5jb25jYXQoc2Vjb25kUGFydFsxXSk7XG4gIH1cbn1cbiJdfQ==