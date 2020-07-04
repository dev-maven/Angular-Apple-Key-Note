import { Injectable } from '@angular/core';
import { ExecCommand } from '../../text-editor.interface';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export class ColorTransform extends BaseTransform {
    set value(value) {
        this.execCommand(ExecCommand.ForeColor, value);
    }
    get value() {
        return document.queryCommandValue(ExecCommand.ForeColor);
    }
}
ColorTransform.ɵfac = function ColorTransform_Factory(t) { return ɵColorTransform_BaseFactory(t || ColorTransform); };
ColorTransform.ɵprov = i0.ɵɵdefineInjectable({ token: ColorTransform, factory: ColorTransform.ɵfac });
const ɵColorTransform_BaseFactory = i0.ɵɵgetInheritedFactory(ColorTransform);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ColorTransform, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IudHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItdGV4dC1lZGl0b3IvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90cmFuc2Zvcm1zL2NvbG9yLnRyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBR2pELE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQUUvQyxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxRQUFRLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7O21HQVJVLGNBQWM7c0RBQWQsY0FBYyxXQUFkLGNBQWM7NkRBQWQsY0FBYztrREFBZCxjQUFjO2NBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV4ZWNDb21tYW5kIH0gZnJvbSAnLi4vLi4vdGV4dC1lZGl0b3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uLy4uL3R5cGVzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBCYXNlVHJhbnNmb3JtIH0gZnJvbSAnLi9iYXNlLnRyYW5zZm9ybSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2xvclRyYW5zZm9ybSBleHRlbmRzIEJhc2VUcmFuc2Zvcm0gaW1wbGVtZW50cyBUcmFuc2Zvcm0ge1xuXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5leGVjQ29tbWFuZChFeGVjQ29tbWFuZC5Gb3JlQ29sb3IsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeUNvbW1hbmRWYWx1ZShFeGVjQ29tbWFuZC5Gb3JlQ29sb3IpO1xuICB9XG5cbn1cbiJdfQ==