import { Injectable } from '@angular/core';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
import * as i1 from "../selection.service";
export class FontSizeTransform extends BaseTransform {
    constructor(selection) {
        super();
        this.selection = selection;
    }
    set value(value) {
        if (!this.selection.savedValue) {
            throw new Error('There is no selection');
        }
        document.execCommand('fontSize', false, '1');
        const fontElements = this.selection.savedValue.container.getElementsByTagName('font');
        Array.from(fontElements).forEach(el => {
            if (el.getAttribute('size') !== '1') {
                return;
            }
            el.removeAttribute('size');
            el.style.fontSize = `${value}px`;
        });
    }
    get value() {
        if (!this.selection.savedValue) {
            return null;
        }
        let parentElement = this.selection.savedValue.parentElement;
        while (parentElement && parentElement.tagName !== 'SPAN' && !parentElement.style.fontSize) {
            parentElement = parentElement.parentElement;
        }
        const size = parentElement ? parentElement.style.fontSize : null;
        return size ? parseInt(size, 10) : null;
    }
}
FontSizeTransform.ɵfac = function FontSizeTransform_Factory(t) { return new (t || FontSizeTransform)(i0.ɵɵinject(i1.TextEditorSelection)); };
FontSizeTransform.ɵprov = i0.ɵɵdefineInjectable({ token: FontSizeTransform, factory: FontSizeTransform.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FontSizeTransform, [{
        type: Injectable
    }], function () { return [{ type: i1.TextEditorSelection }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1zaXplLnRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsic2VydmljZXMvdHJhbnNmb3Jtcy9mb250LXNpemUudHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFHakQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGFBQWE7SUFFbEQsWUFDVSxTQUE4QjtRQUV0QyxLQUFLLEVBQUUsQ0FBQztRQUZBLGNBQVMsR0FBVCxTQUFTLENBQXFCO0lBR3hDLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDMUM7UUFFRCxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRGLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3BDLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ25DLE9BQU87YUFDUjtZQUVELEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksYUFBYSxHQUFnQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDekUsT0FBTyxhQUFhLElBQUksYUFBYSxDQUFDLE9BQU8sS0FBSyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN6RixhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztTQUM3QztRQUVELE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVqRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7O2tGQXZDVSxpQkFBaUI7eURBQWpCLGlCQUFpQixXQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi90eXBlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgVGV4dEVkaXRvclNlbGVjdGlvbiB9IGZyb20gJy4uL3NlbGVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VUcmFuc2Zvcm0gfSBmcm9tICcuL2Jhc2UudHJhbnNmb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvbnRTaXplVHJhbnNmb3JtIGV4dGVuZHMgQmFzZVRyYW5zZm9ybSBpbXBsZW1lbnRzIFRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZWxlY3Rpb246IFRleHRFZGl0b3JTZWxlY3Rpb24sXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5zZWxlY3Rpb24uc2F2ZWRWYWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBubyBzZWxlY3Rpb24nKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9udFNpemUnLCBmYWxzZSwgJzEnKTtcbiAgICBjb25zdCBmb250RWxlbWVudHMgPSB0aGlzLnNlbGVjdGlvbi5zYXZlZFZhbHVlLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9udCcpO1xuXG4gICAgQXJyYXkuZnJvbShmb250RWxlbWVudHMpLmZvckVhY2goZWwgPT4ge1xuICAgICAgaWYgKGVsLmdldEF0dHJpYnV0ZSgnc2l6ZScpICE9PSAnMScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3NpemUnKTtcbiAgICAgIGVsLnN0eWxlLmZvbnRTaXplID0gYCR7dmFsdWV9cHhgO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGlvbi5zYXZlZFZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLnNlbGVjdGlvbi5zYXZlZFZhbHVlLnBhcmVudEVsZW1lbnQ7XG4gICAgd2hpbGUgKHBhcmVudEVsZW1lbnQgJiYgcGFyZW50RWxlbWVudC50YWdOYW1lICE9PSAnU1BBTicgJiYgIXBhcmVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUpIHtcbiAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHBhcmVudEVsZW1lbnQgPyBwYXJlbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplIDogbnVsbDtcblxuICAgIHJldHVybiBzaXplID8gcGFyc2VJbnQoc2l6ZSwgMTApIDogbnVsbDtcbiAgfVxufVxuIl19