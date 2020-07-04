import { Injectable } from '@angular/core';
import { PebLinkDatasetRouteKey } from '../../text-editor.constants';
import { ExecCommand } from '../../text-editor.interface';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
import * as i1 from "../selection.service";
export class LinkTransform extends BaseTransform {
    constructor(selection) {
        super();
        this.selection = selection;
    }
    set value(value) {
        value ? this.link(value) : this.unlink();
    }
    get value() {
        if (!this.selection.savedValue) {
            return null;
        }
        let parentElement = this.selection.savedValue.parentElement;
        while (parentElement && parentElement.tagName !== 'A') {
            parentElement = parentElement.parentElement;
        }
        return parentElement && parentElement.dataset ? parentElement.dataset[PebLinkDatasetRouteKey] : null;
    }
    link(link) {
        const anchorTag = this.selection.findParentTag('A');
        if (anchorTag) {
            this.selection.expandToTag(anchorTag);
        }
        this.execCommand(ExecCommand.CreateLink, '#');
        // Update selection
        this.selection.saveSelection(this.selection.getSelection(this.selection.savedValue.container));
        this.selection.savedValue.parentElement.dataset[PebLinkDatasetRouteKey] = link;
        this.execCommand(ExecCommand.CreateLink);
    }
    unlink() {
        this.execCommand(ExecCommand.Unlink);
    }
}
LinkTransform.ɵfac = function LinkTransform_Factory(t) { return new (t || LinkTransform)(i0.ɵɵinject(i1.TextEditorSelection)); };
LinkTransform.ɵprov = i0.ɵɵdefineInjectable({ token: LinkTransform, factory: LinkTransform.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LinkTransform, [{
        type: Injectable
    }], function () { return [{ type: i1.TextEditorSelection }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay50cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyYW5zZm9ybXMvbGluay50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFHakQsTUFBTSxPQUFPLGFBQWMsU0FBUSxhQUFhO0lBRTlDLFlBQ1UsU0FBOEI7UUFFdEMsS0FBSyxFQUFFLENBQUM7UUFGQSxjQUFTLEdBQVQsU0FBUyxDQUFxQjtJQUd4QyxDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLGFBQWEsR0FBZ0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBRXpFLE9BQU8sYUFBYSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO1lBQ3JELGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1NBQzdDO1FBRUQsT0FBTyxhQUFhLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkcsQ0FBQztJQUVPLElBQUksQ0FBQyxJQUFZO1FBQ3ZCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFOUMsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FDakUsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFL0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLE1BQU07UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzswRUE3Q1UsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYTtrREFBYixhQUFhO2NBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBlYkxpbmtEYXRhc2V0Um91dGVLZXkgfSBmcm9tICcuLi8uLi90ZXh0LWVkaXRvci5jb25zdGFudHMnO1xuaW1wb3J0IHsgRXhlY0NvbW1hbmQgfSBmcm9tICcuLi8uLi90ZXh0LWVkaXRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IFRleHRFZGl0b3JTZWxlY3Rpb24gfSBmcm9tICcuLi9zZWxlY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlVHJhbnNmb3JtIH0gZnJvbSAnLi9iYXNlLnRyYW5zZm9ybSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaW5rVHJhbnNmb3JtIGV4dGVuZHMgQmFzZVRyYW5zZm9ybSBpbXBsZW1lbnRzIFRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZWxlY3Rpb246IFRleHRFZGl0b3JTZWxlY3Rpb24sXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHZhbHVlID8gdGhpcy5saW5rKHZhbHVlKSA6IHRoaXMudW5saW5rKCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0aW9uLnNhdmVkVmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLnNlbGVjdGlvbi5zYXZlZFZhbHVlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50RWxlbWVudCAmJiBwYXJlbnRFbGVtZW50LnRhZ05hbWUgIT09ICdBJykge1xuICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudCAmJiBwYXJlbnRFbGVtZW50LmRhdGFzZXQgPyBwYXJlbnRFbGVtZW50LmRhdGFzZXRbUGViTGlua0RhdGFzZXRSb3V0ZUtleV0gOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBsaW5rKGxpbms6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGFuY2hvclRhZyA9IHRoaXMuc2VsZWN0aW9uLmZpbmRQYXJlbnRUYWcoJ0EnKTtcbiAgICBpZiAoYW5jaG9yVGFnKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbi5leHBhbmRUb1RhZyhhbmNob3JUYWcpO1xuICAgIH1cblxuICAgIHRoaXMuZXhlY0NvbW1hbmQoRXhlY0NvbW1hbmQuQ3JlYXRlTGluaywgJyMnKTtcblxuICAgIC8vIFVwZGF0ZSBzZWxlY3Rpb25cbiAgICB0aGlzLnNlbGVjdGlvbi5zYXZlU2VsZWN0aW9uKFxuICAgICAgdGhpcy5zZWxlY3Rpb24uZ2V0U2VsZWN0aW9uKHRoaXMuc2VsZWN0aW9uLnNhdmVkVmFsdWUuY29udGFpbmVyKSxcbiAgICApO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24uc2F2ZWRWYWx1ZS5wYXJlbnRFbGVtZW50LmRhdGFzZXRbUGViTGlua0RhdGFzZXRSb3V0ZUtleV0gPSBsaW5rO1xuXG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5DcmVhdGVMaW5rKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5saW5rKCk6IHZvaWQge1xuICAgIHRoaXMuZXhlY0NvbW1hbmQoRXhlY0NvbW1hbmQuVW5saW5rKTtcbiAgfVxuXG59XG4iXX0=