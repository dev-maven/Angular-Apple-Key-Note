import { Injectable } from '@angular/core';
// import { PebLinkDatasetRouteKey } from '../../text-editor.constants';
import { ExecCommand } from '../../text-editor.interface';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
import * as i1 from "../selection.service";
export class ExternalLinkTransform extends BaseTransform {
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
        const parentElement = this.getParentLinkElement();
        return parentElement && parentElement.hasAttribute('href') ? parentElement.getAttribute('href') : null;
    }
    link(link) {
        // const anchorTag = this.selection.findParentTag('A');
        // if (anchorTag) {
        //   this.selection.expandToTag(anchorTag);
        // }
        this.execCommand(ExecCommand.CreateLink, this.getLinkWithHttps(link));
        // Update selection
        this.selection.saveSelection(this.selection.getSelection(this.selection.savedValue.container));
        const parentElement = this.getParentLinkElement();
        parentElement.setAttribute('target', '_blank');
        // this.execCommand(ExecCommand.CreateLink);
    }
    getParentLinkElement() {
        let parentElement = this.selection.savedValue.parentElement;
        while (parentElement && parentElement.tagName !== 'A') {
            parentElement = parentElement.parentElement;
        }
        return parentElement;
    }
    getLinkWithHttps(link) {
        return ((link.indexOf('://') === -1) && (link.indexOf('mailto:') === -1)) ? `https://${link}` : link;
    }
    unlink() {
        this.execCommand(ExecCommand.Unlink);
    }
}
ExternalLinkTransform.ɵfac = function ExternalLinkTransform_Factory(t) { return new (t || ExternalLinkTransform)(i0.ɵɵinject(i1.TextEditorSelection)); };
ExternalLinkTransform.ɵprov = i0.ɵɵdefineInjectable({ token: ExternalLinkTransform, factory: ExternalLinkTransform.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExternalLinkTransform, [{
        type: Injectable
    }], function () { return [{ type: i1.TextEditorSelection }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay50cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyYW5zZm9ybXMvZXh0ZXJuYWwtbGluay50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyx3RUFBd0U7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBR2pELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxhQUFhO0lBRXRELFlBQ1UsU0FBOEI7UUFFdEMsS0FBSyxFQUFFLENBQUM7UUFGQSxjQUFTLEdBQVQsU0FBUyxDQUFxQjtJQUd4QyxDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUVsRCxPQUFPLGFBQWEsSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekcsQ0FBQztJQUVPLElBQUksQ0FBQyxJQUFZO1FBQ3ZCLHVEQUF1RDtRQUN2RCxtQkFBbUI7UUFDbkIsMkNBQTJDO1FBQzNDLElBQUk7UUFFSixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFdEUsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FDakUsQ0FBQztRQUVGLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2xELGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRS9DLDRDQUE0QztJQUM5QyxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksYUFBYSxHQUFnQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFFekUsT0FBTyxhQUFhLElBQUksYUFBYSxDQUFDLE9BQU8sS0FBSyxHQUFHLEVBQUU7WUFDckQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7U0FDN0M7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUMzQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO0lBQ3ZHLENBQUM7SUFFTyxNQUFNO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7MEZBekRVLHFCQUFxQjs2REFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGltcG9ydCB7IFBlYkxpbmtEYXRhc2V0Um91dGVLZXkgfSBmcm9tICcuLi8uLi90ZXh0LWVkaXRvci5jb25zdGFudHMnO1xuaW1wb3J0IHsgRXhlY0NvbW1hbmQgfSBmcm9tICcuLi8uLi90ZXh0LWVkaXRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IFRleHRFZGl0b3JTZWxlY3Rpb24gfSBmcm9tICcuLi9zZWxlY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlVHJhbnNmb3JtIH0gZnJvbSAnLi9iYXNlLnRyYW5zZm9ybSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbExpbmtUcmFuc2Zvcm0gZXh0ZW5kcyBCYXNlVHJhbnNmb3JtIGltcGxlbWVudHMgVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlbGVjdGlvbjogVGV4dEVkaXRvclNlbGVjdGlvbixcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdmFsdWUgPyB0aGlzLmxpbmsodmFsdWUpIDogdGhpcy51bmxpbmsoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5zZWxlY3Rpb24uc2F2ZWRWYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50TGlua0VsZW1lbnQoKTtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50ICYmIHBhcmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKCdocmVmJykgPyBwYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgbGluayhsaW5rOiBzdHJpbmcpIHtcbiAgICAvLyBjb25zdCBhbmNob3JUYWcgPSB0aGlzLnNlbGVjdGlvbi5maW5kUGFyZW50VGFnKCdBJyk7XG4gICAgLy8gaWYgKGFuY2hvclRhZykge1xuICAgIC8vICAgdGhpcy5zZWxlY3Rpb24uZXhwYW5kVG9UYWcoYW5jaG9yVGFnKTtcbiAgICAvLyB9XG5cbiAgICB0aGlzLmV4ZWNDb21tYW5kKEV4ZWNDb21tYW5kLkNyZWF0ZUxpbmssIHRoaXMuZ2V0TGlua1dpdGhIdHRwcyhsaW5rKSk7XG5cbiAgICAvLyBVcGRhdGUgc2VsZWN0aW9uXG4gICAgdGhpcy5zZWxlY3Rpb24uc2F2ZVNlbGVjdGlvbihcbiAgICAgIHRoaXMuc2VsZWN0aW9uLmdldFNlbGVjdGlvbih0aGlzLnNlbGVjdGlvbi5zYXZlZFZhbHVlLmNvbnRhaW5lcilcbiAgICApO1xuXG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50TGlua0VsZW1lbnQoKTtcbiAgICBwYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXG4gICAgLy8gdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5DcmVhdGVMaW5rKTtcbiAgfVxuXG4gIGdldFBhcmVudExpbmtFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBsZXQgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLnNlbGVjdGlvbi5zYXZlZFZhbHVlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50RWxlbWVudCAmJiBwYXJlbnRFbGVtZW50LnRhZ05hbWUgIT09ICdBJykge1xuICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldExpbmtXaXRoSHR0cHMobGluazogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKChsaW5rLmluZGV4T2YoJzovLycpID09PSAtMSkgJiYgKGxpbmsuaW5kZXhPZignbWFpbHRvOicpID09PSAtMSkgKSA/IGBodHRwczovLyR7bGlua31gIDogbGlua1xuICB9XG5cbiAgcHJpdmF0ZSB1bmxpbmsoKTogdm9pZCB7XG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5VbmxpbmspO1xuICB9XG5cbn1cbiJdfQ==