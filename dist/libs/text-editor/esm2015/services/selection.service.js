/* tslint:disable:member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { SelectionHelper } from '../helpers/selection.helper';
import * as i0 from "@angular/core";
import * as i1 from "../helpers/selection.helper";
export class TextEditorSelection {
    constructor(selectionHelper) {
        this.selectionHelper = selectionHelper;
        this.savedValueSubject = new BehaviorSubject(null);
        this.savedValue$ = this.savedValueSubject.asObservable().pipe(share());
    }
    get savedValue() {
        return this.savedValueSubject.value;
    }
    set savedValue(selection) {
        this.savedValueSubject.next(selection);
    }
    saveSelection(selection) {
        this.savedValue = selection;
    }
    getSelection(container) {
        return this.selectionHelper.get(container);
    }
    restore() {
        this.selectionHelper.restore(this.savedValue);
    }
    expandToTag(element) {
        // const selection = this.savedValue.data;
        // selection.removeAllRanges();
        // const range = document.createRange();
        // range.selectNodeContents(element);
        // selection.addRange(range);
    }
    findParentTag(tagName) {
        if (!this.savedValue) {
            return null;
        }
        let parentElement = this.savedValue.range.endContainer.parentElement;
        while (parentElement && parentElement.tagName !== tagName && parentElement.tagName !== 'DIV') {
            parentElement = parentElement.parentElement;
        }
        return parentElement;
    }
}
TextEditorSelection.ɵfac = function TextEditorSelection_Factory(t) { return new (t || TextEditorSelection)(i0.ɵɵinject(i1.SelectionHelper)); };
TextEditorSelection.ɵprov = i0.ɵɵdefineInjectable({ token: TextEditorSelection, factory: TextEditorSelection.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextEditorSelection, [{
        type: Injectable
    }], function () { return [{ type: i1.SelectionHelper }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlbGVjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBSTlELE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsWUFDVSxlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFHekIsc0JBQWlCLEdBQUcsSUFBSSxlQUFlLENBQWtCLElBQUksQ0FBQyxDQUFDO1FBRWhGLGdCQUFXLEdBQWdDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ25GLEtBQUssRUFBRSxDQUNSLENBQUM7SUFOQyxDQUFDO0lBUUosSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxTQUEwQjtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxhQUFhLENBQUMsU0FBMEI7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUFrQjtRQUM3QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBb0I7UUFDOUIsMENBQTBDO1FBRTFDLCtCQUErQjtRQUMvQix3Q0FBd0M7UUFFeEMscUNBQXFDO1FBQ3JDLDZCQUE2QjtJQUMvQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksYUFBYSxHQUFnQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ2xGLE9BQU8sYUFBYSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQzVGLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1NBQzdDO1FBRUQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7c0ZBckRVLG1CQUFtQjsyREFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptZW1iZXItb3JkZXJpbmcgKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlbGVjdGlvbkhlbHBlciB9IGZyb20gJy4uL2hlbHBlcnMvc2VsZWN0aW9uLmhlbHBlcic7XG5pbXBvcnQgeyBFZGl0b3JTZWxlY3Rpb24gfSBmcm9tICcuLi90ZXh0LWVkaXRvci5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGV4dEVkaXRvclNlbGVjdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZWxlY3Rpb25IZWxwZXI6IFNlbGVjdGlvbkhlbHBlcixcbiAgKSB7fVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgc2F2ZWRWYWx1ZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEVkaXRvclNlbGVjdGlvbj4obnVsbCk7XG5cbiAgc2F2ZWRWYWx1ZSQ6IE9ic2VydmFibGU8RWRpdG9yU2VsZWN0aW9uPiA9IHRoaXMuc2F2ZWRWYWx1ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICBzaGFyZSgpLFxuICApO1xuXG4gIGdldCBzYXZlZFZhbHVlKCk6IEVkaXRvclNlbGVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZWRWYWx1ZVN1YmplY3QudmFsdWU7XG4gIH1cblxuICBzZXQgc2F2ZWRWYWx1ZShzZWxlY3Rpb246IEVkaXRvclNlbGVjdGlvbikge1xuICAgIHRoaXMuc2F2ZWRWYWx1ZVN1YmplY3QubmV4dChzZWxlY3Rpb24pO1xuICB9XG5cbiAgc2F2ZVNlbGVjdGlvbihzZWxlY3Rpb246IEVkaXRvclNlbGVjdGlvbik6IHZvaWQge1xuICAgIHRoaXMuc2F2ZWRWYWx1ZSA9IHNlbGVjdGlvbjtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbihjb250YWluZXI6IEVsZW1lbnQpOiBFZGl0b3JTZWxlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbkhlbHBlci5nZXQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHJlc3RvcmUoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25IZWxwZXIucmVzdG9yZSh0aGlzLnNhdmVkVmFsdWUpO1xuICB9XG5cbiAgZXhwYW5kVG9UYWcoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAvLyBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnNhdmVkVmFsdWUuZGF0YTtcblxuICAgIC8vIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAvLyBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAvLyByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XG4gICAgLy8gc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgfVxuXG4gIGZpbmRQYXJlbnRUYWcodGFnTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBpZiAoIXRoaXMuc2F2ZWRWYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5zYXZlZFZhbHVlLnJhbmdlLmVuZENvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xuICAgIHdoaWxlIChwYXJlbnRFbGVtZW50ICYmIHBhcmVudEVsZW1lbnQudGFnTmFtZSAhPT0gdGFnTmFtZSAmJiBwYXJlbnRFbGVtZW50LnRhZ05hbWUgIT09ICdESVYnKSB7XG4gICAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBnZXQgc2VsZWN0aW9uKCk6IFNlbGVjdGlvbiB7XG4gIC8vICAgcmV0dXJuIHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgLy8gfVxuXG59XG4iXX0=