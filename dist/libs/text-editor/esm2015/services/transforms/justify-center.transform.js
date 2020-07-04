import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export class JustifyCenterTransform extends BaseTransform {
    justify() {
        this.execCommand(ExecCommand.JustifyCenter);
    }
    get value() {
        if (!this.isSelectionExist) {
            return false;
        }
        return document.queryCommandState(ExecCommand.JustifyCenter);
    }
}
JustifyCenterTransform.ɵfac = function JustifyCenterTransform_Factory(t) { return ɵJustifyCenterTransform_BaseFactory(t || JustifyCenterTransform); };
JustifyCenterTransform.ɵprov = i0.ɵɵdefineInjectable({ token: JustifyCenterTransform, factory: JustifyCenterTransform.ɵfac });
const ɵJustifyCenterTransform_BaseFactory = i0.ɵɵgetInheritedFactory(JustifyCenterTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JustifyCenterTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVzdGlmeS1jZW50ZXIudHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItdGV4dC1lZGl0b3IvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90cmFuc2Zvcm1zL2p1c3RpZnktY2VudGVyLnRyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBR2pELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxhQUFhO0lBQ3ZELE9BQU87UUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxRQUFRLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7OzJIQVhVLHNCQUFzQjs4REFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQjtxRUFBdEIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXhlY0NvbW1hbmQgfSBmcm9tICcuLi8uLi90ZXh0LWVkaXRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEJhc2VUcmFuc2Zvcm0gfSBmcm9tICcuL2Jhc2UudHJhbnNmb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEp1c3RpZnlDZW50ZXJUcmFuc2Zvcm0gZXh0ZW5kcyBCYXNlVHJhbnNmb3JtIGltcGxlbWVudHMgVHJhbnNmb3JtIHtcbiAganVzdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLmV4ZWNDb21tYW5kKEV4ZWNDb21tYW5kLkp1c3RpZnlDZW50ZXIpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5pc1NlbGVjdGlvbkV4aXN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN0YXRlKEV4ZWNDb21tYW5kLkp1c3RpZnlDZW50ZXIpO1xuICB9XG59XG4iXX0=