/* tslint:disable:member-ordering */
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, merge, Subject } from 'rxjs';
import { distinctUntilChanged, map, share } from 'rxjs/operators';
import { TextEditorSelection } from './selection.service';
import { BoldTransform } from './transforms/bold.transform';
import { ColorTransform } from './transforms/color.transform';
import { ExternalLinkTransform } from './transforms/external-link.transform';
import { FontFamilyTransform } from './transforms/font-family.transform';
import { FontSizeTransform } from './transforms/font-size.transform';
import { ItalicTransform } from './transforms/italic.transform';
import { JustifyCenterTransform } from './transforms/justify-center.transform';
import { JustifyFullTransform } from './transforms/justify-full.transform';
import { JustifyLeftTransform } from './transforms/justify-left.transform';
import { JustifyRightTransform } from './transforms/justify-right.transform';
import { LinkTransform } from './transforms/link.transform';
import { OrderedTransform } from './transforms/ordered.transform';
import { UnderlineTransform } from './transforms/underline.transform';
import { UnorderedTransform } from './transforms/unordered.transform';
import * as i0 from "@angular/core";
import * as i1 from "./selection.service";
import * as i2 from "./transforms/bold.transform";
import * as i3 from "./transforms/color.transform";
import * as i4 from "./transforms/font-family.transform";
import * as i5 from "./transforms/font-size.transform";
import * as i6 from "./transforms/italic.transform";
import * as i7 from "./transforms/link.transform";
import * as i8 from "./transforms/external-link.transform";
import * as i9 from "./transforms/underline.transform";
import * as i10 from "./transforms/justify-left.transform";
import * as i11 from "./transforms/justify-right.transform";
import * as i12 from "./transforms/justify-center.transform";
import * as i13 from "./transforms/justify-full.transform";
import * as i14 from "./transforms/unordered.transform";
import * as i15 from "./transforms/ordered.transform";
export class StateService {
    constructor(selection, boldTransform, colorTransform, fontFamilyTransform, fontSizeTransform, italicTransform, linkTransform, externalLinkTransform, underlineTransform, justifyLeftTransform, justifyRightTransform, justifyCenterTransform, justifyFullTransform, unorderedTransform, orderedTransform) {
        this.selection = selection;
        this.boldTransform = boldTransform;
        this.colorTransform = colorTransform;
        this.fontFamilyTransform = fontFamilyTransform;
        this.fontSizeTransform = fontSizeTransform;
        this.italicTransform = italicTransform;
        this.linkTransform = linkTransform;
        this.externalLinkTransform = externalLinkTransform;
        this.underlineTransform = underlineTransform;
        this.justifyLeftTransform = justifyLeftTransform;
        this.justifyRightTransform = justifyRightTransform;
        this.justifyCenterTransform = justifyCenterTransform;
        this.justifyFullTransform = justifyFullTransform;
        this.unorderedTransform = unorderedTransform;
        this.orderedTransform = orderedTransform;
        this.stateSubject$ = new BehaviorSubject(null);
        this.removeListAlignSubject$ = new Subject();
        this.transformationCompletedSubject$ = new EventEmitter();
        this.transformationCompleted$ = this.transformationCompletedSubject$.asObservable();
        this.changed$ = merge(this.transformationCompletedSubject$, this.selection.savedValue$).pipe(share());
        this.bold$ = this.changed$.pipe(map(() => this.bold), distinctUntilChanged());
        this.color$ = this.changed$.pipe(map(() => this.color), distinctUntilChanged());
        this.fontSize$ = this.changed$.pipe(map(() => this.fontSize), distinctUntilChanged());
        this.fontFamily$ = this.changed$.pipe(map(() => this.fontFamily), distinctUntilChanged());
        this.italic$ = this.changed$.pipe(map(() => this.italic), distinctUntilChanged());
        this.link$ = this.changed$.pipe(map(() => this.link), distinctUntilChanged());
        this.externalLink$ = this.changed$.pipe(map(() => this.externalLink), distinctUntilChanged());
        this.justifyCenter$ = this.changed$.pipe(map(() => this.justifyCenter), distinctUntilChanged());
        this.justifyLeft$ = this.changed$.pipe(map(() => this.justifyLeft), distinctUntilChanged());
        this.justifyRight$ = this.changed$.pipe(map(() => this.justifyRight), distinctUntilChanged());
        this.justifyFull$ = this.changed$.pipe(map(() => this.justifyFull), distinctUntilChanged());
        this.orderedList$ = this.changed$.pipe(map(() => this.orderedList), distinctUntilChanged());
        this.underline$ = this.changed$.pipe(map(() => this.underline), distinctUntilChanged());
        this.unorderedList$ = this.changed$.pipe(map(() => this.unorderedList), distinctUntilChanged());
        this.value$ = this.stateSubject$.asObservable().pipe(distinctUntilChanged());
    }
    set value(value) {
        this.stateSubject$.next(value);
    }
    get value() {
        return this.stateSubject$.getValue();
    }
    set link(value) {
        this.selection.restore();
        if (this.externalLink) {
            this.externalLinkTransform.value = null;
        }
        this.linkTransform.value = value;
        this.transformationCompletedSubject$.next();
    }
    get link() {
        return this.linkTransform.value;
    }
    set externalLink(value) {
        this.selection.restore();
        if (this.link) {
            this.linkTransform.value = null;
        }
        this.externalLinkTransform.value = value;
        this.transformationCompletedSubject$.next();
    }
    get externalLink() {
        return this.externalLinkTransform.value;
    }
    toggleBold() {
        this.selection.restore();
        this.boldTransform.toggle();
        this.transformationCompletedSubject$.next();
    }
    get bold() {
        return this.boldTransform.value;
    }
    toggleItalic() {
        this.selection.restore();
        this.italicTransform.toggle();
        this.transformationCompletedSubject$.next();
    }
    get italic() {
        return this.italicTransform.value;
    }
    toggleUnderline() {
        this.selection.restore();
        this.underlineTransform.toggle();
        this.transformationCompletedSubject$.next();
    }
    get underline() {
        return this.underlineTransform.value;
    }
    set fontSize(value) {
        this.selection.restore();
        this.fontSizeTransform.value = value;
        this.transformationCompletedSubject$.next();
    }
    get fontSize() {
        const size = this.fontSizeTransform.value;
        return typeof size === 'number' ? size : null;
    }
    set color(value) {
        this.selection.restore();
        this.colorTransform.value = value;
        this.transformationCompletedSubject$.next();
    }
    get color() {
        return this.colorTransform.value;
    }
    set fontFamily(value) {
        this.selection.restore();
        this.fontFamilyTransform.value = value;
        this.transformationCompletedSubject$.next();
    }
    get fontFamily() {
        return this.fontFamilyTransform.value;
    }
    get justifyLeft() {
        return this.justifyLeftTransform.value;
    }
    toggleJustifyLeft() {
        this.justifyLeftTransform.justify();
        this.transformationCompletedSubject$.next();
    }
    get justifyRight() {
        return this.justifyRightTransform.value;
    }
    toggleJustifyRight() {
        this.justifyRightTransform.justify();
        this.transformationCompletedSubject$.next();
    }
    get justifyCenter() {
        return this.justifyCenterTransform.value;
    }
    toggleJustifyCenter() {
        this.justifyCenterTransform.justify();
        this.transformationCompletedSubject$.next();
    }
    get justifyFull() {
        return this.justifyFullTransform.value;
    }
    toggleJustifyFull() {
        this.justifyFullTransform.justify();
        this.transformationCompletedSubject$.next();
    }
    get unorderedList() {
        return this.unorderedTransform.value;
    }
    toggleUnorderedList() {
        const newContent = this.unorderedTransform.apply(this.value);
        if (newContent) {
            this.value = newContent;
            this.removeListAlignSubject$.next(newContent);
        }
        else {
            this.removeListAlignSubject$.next(null);
        }
        this.transformationCompletedSubject$.next();
    }
    get orderedList() {
        return this.orderedTransform.value;
    }
    toggleOrderedList() {
        const newContent = this.orderedTransform.apply(this.value);
        if (newContent) {
            this.value = newContent;
            this.removeListAlignSubject$.next(newContent);
        }
        else {
            this.removeListAlignSubject$.next(null);
        }
        this.transformationCompletedSubject$.next();
    }
    saveSelection(selection) {
        this.selection.saveSelection(selection);
    }
    findParentTag(tag) {
        return this.selection.findParentTag(tag);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(i0.ɵɵinject(i1.TextEditorSelection), i0.ɵɵinject(i2.BoldTransform), i0.ɵɵinject(i3.ColorTransform), i0.ɵɵinject(i4.FontFamilyTransform), i0.ɵɵinject(i5.FontSizeTransform), i0.ɵɵinject(i6.ItalicTransform), i0.ɵɵinject(i7.LinkTransform), i0.ɵɵinject(i8.ExternalLinkTransform), i0.ɵɵinject(i9.UnderlineTransform), i0.ɵɵinject(i10.JustifyLeftTransform), i0.ɵɵinject(i11.JustifyRightTransform), i0.ɵɵinject(i12.JustifyCenterTransform), i0.ɵɵinject(i13.JustifyFullTransform), i0.ɵɵinject(i14.UnorderedTransform), i0.ɵɵinject(i15.OrderedTransform)); };
StateService.ɵprov = i0.ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StateService, [{
        type: Injectable
    }], function () { return [{ type: i1.TextEditorSelection }, { type: i2.BoldTransform }, { type: i3.ColorTransform }, { type: i4.FontFamilyTransform }, { type: i5.FontSizeTransform }, { type: i6.ItalicTransform }, { type: i7.LinkTransform }, { type: i8.ExternalLinkTransform }, { type: i9.UnderlineTransform }, { type: i10.JustifyLeftTransform }, { type: i11.JustifyRightTransform }, { type: i12.JustifyCenterTransform }, { type: i13.JustifyFullTransform }, { type: i14.UnorderedTransform }, { type: i15.OrderedTransform }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3Itc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsic2VydmljZXMvdGV4dC1lZGl0b3Itc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9B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QkFBaUI7UUFDZixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzRCxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQ3hCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0M7YUFBTTtZQUNMLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUEwQjtRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsYUFBYSxDQUFDLEdBQVc7UUFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOzt3RUE1UlUsWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWTtrREFBWixZQUFZO2NBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptZW1iZXItb3JkZXJpbmcgKi9cbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRleHRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0b3JTZWxlY3Rpb24gfSBmcm9tICcuLi90ZXh0LWVkaXRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGV4dEVkaXRvclNlbGVjdGlvbiB9IGZyb20gJy4vc2VsZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQm9sZFRyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9ib2xkLnRyYW5zZm9ybSc7XG5pbXBvcnQgeyBDb2xvclRyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9jb2xvci50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRXh0ZXJuYWxMaW5rVHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2V4dGVybmFsLWxpbmsudHJhbnNmb3JtJztcbmltcG9ydCB7IEZvbnRGYW1pbHlUcmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybXMvZm9udC1mYW1pbHkudHJhbnNmb3JtJztcbmltcG9ydCB7IEZvbnRTaXplVHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2ZvbnQtc2l6ZS50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgSXRhbGljVHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2l0YWxpYy50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgSnVzdGlmeUNlbnRlclRyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9qdXN0aWZ5LWNlbnRlci50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgSnVzdGlmeUZ1bGxUcmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybXMvanVzdGlmeS1mdWxsLnRyYW5zZm9ybSc7XG5pbXBvcnQgeyBKdXN0aWZ5TGVmdFRyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9qdXN0aWZ5LWxlZnQudHJhbnNmb3JtJztcbmltcG9ydCB7IEp1c3RpZnlSaWdodFRyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9qdXN0aWZ5LXJpZ2h0LnRyYW5zZm9ybSc7XG5pbXBvcnQgeyBMaW5rVHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2xpbmsudHJhbnNmb3JtJztcbmltcG9ydCB7IE9yZGVyZWRUcmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybXMvb3JkZXJlZC50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgVW5kZXJsaW5lVHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm1zL3VuZGVybGluZS50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgVW5vcmRlcmVkVHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm1zL3Vub3JkZXJlZC50cmFuc2Zvcm0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIHtcbiAgdGV4dEVkaXRvckNvbXBvbmVudDogVGV4dEVkaXRvckNvbXBvbmVudDtcbiAgbGFzdENvbnRlbnRFZGl0ZWQ6IHN0cmluZztcblxuICBwcml2YXRlIHJlYWRvbmx5IHN0YXRlU3ViamVjdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG4gIHJlYWRvbmx5IHJlbW92ZUxpc3RBbGlnblN1YmplY3QkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgdHJhbnNmb3JtYXRpb25Db21wbGV0ZWRTdWJqZWN0JCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZCQ6IE9ic2VydmFibGU8bnVsbD4gPSB0aGlzLnRyYW5zZm9ybWF0aW9uQ29tcGxldGVkU3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY2hhbmdlZCQ6IE9ic2VydmFibGU8YW55PiA9IG1lcmdlKFxuICAgIHRoaXMudHJhbnNmb3JtYXRpb25Db21wbGV0ZWRTdWJqZWN0JCxcbiAgICB0aGlzLnNlbGVjdGlvbi5zYXZlZFZhbHVlJCxcbiAgKS5waXBlKHNoYXJlKCkpO1xuXG4gIGJvbGQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jaGFuZ2VkJC5waXBlKFxuICAgIG1hcCgoKSA9PiB0aGlzLmJvbGQpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICk7XG5cbiAgY29sb3IkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmNoYW5nZWQkLnBpcGUoXG4gICAgbWFwKCgpID0+IHRoaXMuY29sb3IpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICk7XG5cbiAgZm9udFNpemUkOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLmNoYW5nZWQkLnBpcGUoXG4gICAgbWFwKCgpID0+IHRoaXMuZm9udFNpemUpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICk7XG5cbiAgZm9udEZhbWlseSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuY2hhbmdlZCQucGlwZShcbiAgICBtYXAoKCkgPT4gdGhpcy5mb250RmFtaWx5KSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIGl0YWxpYyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmNoYW5nZWQkLnBpcGUoXG4gICAgbWFwKCgpID0+IHRoaXMuaXRhbGljKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIGxpbmskOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmNoYW5nZWQkLnBpcGUoXG4gICAgbWFwKCgpID0+IHRoaXMubGluayksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgKTtcblxuICBleHRlcm5hbExpbmskOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmNoYW5nZWQkLnBpcGUoXG4gICAgbWFwKCgpID0+IHRoaXMuZXh0ZXJuYWxMaW5rKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIGp1c3RpZnlDZW50ZXIkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jaGFuZ2VkJC5waXBlKFxuICAgIG1hcCgoKSA9PiB0aGlzLmp1c3RpZnlDZW50ZXIpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICk7XG5cbiAganVzdGlmeUxlZnQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jaGFuZ2VkJC5waXBlKFxuICAgIG1hcCgoKSA9PiB0aGlzLmp1c3RpZnlMZWZ0KSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIGp1c3RpZnlSaWdodCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmNoYW5nZWQkLnBpcGUoXG4gICAgbWFwKCgpID0+IHRoaXMuanVzdGlmeVJpZ2h0KSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIGp1c3RpZnlGdWxsJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuY2hhbmdlZCQucGlwZShcbiAgICBtYXAoKCkgPT4gdGhpcy5qdXN0aWZ5RnVsbCksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgKTtcblxuICBvcmRlcmVkTGlzdCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmNoYW5nZWQkLnBpcGUoXG4gICAgbWFwKCgpID0+IHRoaXMub3JkZXJlZExpc3QpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICk7XG5cbiAgdW5kZXJsaW5lJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuY2hhbmdlZCQucGlwZShcbiAgICBtYXAoKCkgPT4gdGhpcy51bmRlcmxpbmUpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICk7XG5cbiAgdW5vcmRlcmVkTGlzdCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmNoYW5nZWQkLnBpcGUoXG4gICAgbWFwKCgpID0+IHRoaXMudW5vcmRlcmVkTGlzdCksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgKTtcblxuICB2YWx1ZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuc3RhdGVTdWJqZWN0JC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZWxlY3Rpb246IFRleHRFZGl0b3JTZWxlY3Rpb24sXG4gICAgcHJpdmF0ZSBib2xkVHJhbnNmb3JtOiBCb2xkVHJhbnNmb3JtLFxuICAgIHByaXZhdGUgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLFxuICAgIHByaXZhdGUgZm9udEZhbWlseVRyYW5zZm9ybTogRm9udEZhbWlseVRyYW5zZm9ybSxcbiAgICBwcml2YXRlIGZvbnRTaXplVHJhbnNmb3JtOiBGb250U2l6ZVRyYW5zZm9ybSxcbiAgICBwcml2YXRlIGl0YWxpY1RyYW5zZm9ybTogSXRhbGljVHJhbnNmb3JtLFxuICAgIHByaXZhdGUgbGlua1RyYW5zZm9ybTogTGlua1RyYW5zZm9ybSxcbiAgICBwcml2YXRlIGV4dGVybmFsTGlua1RyYW5zZm9ybTogRXh0ZXJuYWxMaW5rVHJhbnNmb3JtLFxuICAgIHByaXZhdGUgdW5kZXJsaW5lVHJhbnNmb3JtOiBVbmRlcmxpbmVUcmFuc2Zvcm0sXG4gICAgcHJpdmF0ZSBqdXN0aWZ5TGVmdFRyYW5zZm9ybTogSnVzdGlmeUxlZnRUcmFuc2Zvcm0sXG4gICAgcHJpdmF0ZSBqdXN0aWZ5UmlnaHRUcmFuc2Zvcm06IEp1c3RpZnlSaWdodFRyYW5zZm9ybSxcbiAgICBwcml2YXRlIGp1c3RpZnlDZW50ZXJUcmFuc2Zvcm06IEp1c3RpZnlDZW50ZXJUcmFuc2Zvcm0sXG4gICAgcHJpdmF0ZSBqdXN0aWZ5RnVsbFRyYW5zZm9ybTogSnVzdGlmeUZ1bGxUcmFuc2Zvcm0sXG4gICAgcHJpdmF0ZSB1bm9yZGVyZWRUcmFuc2Zvcm06IFVub3JkZXJlZFRyYW5zZm9ybSxcbiAgICBwcml2YXRlIG9yZGVyZWRUcmFuc2Zvcm06IE9yZGVyZWRUcmFuc2Zvcm0sXG4gICkgeyB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0YXRlU3ViamVjdCQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVN1YmplY3QkLmdldFZhbHVlKCk7XG4gIH1cblxuICBzZXQgbGluayh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3Rpb24ucmVzdG9yZSgpO1xuXG4gICAgaWYgKHRoaXMuZXh0ZXJuYWxMaW5rKSB7XG4gICAgICB0aGlzLmV4dGVybmFsTGlua1RyYW5zZm9ybS52YWx1ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5saW5rVHJhbnNmb3JtLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBsaW5rKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubGlua1RyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIHNldCBleHRlcm5hbExpbmsodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2VsZWN0aW9uLnJlc3RvcmUoKTtcblxuICAgIGlmICh0aGlzLmxpbmspIHtcbiAgICAgIHRoaXMubGlua1RyYW5zZm9ybS52YWx1ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5leHRlcm5hbExpbmtUcmFuc2Zvcm0udmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9uQ29tcGxldGVkU3ViamVjdCQubmV4dCgpO1xuICB9XG5cbiAgZ2V0IGV4dGVybmFsTGluaygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmV4dGVybmFsTGlua1RyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZUJvbGQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb24ucmVzdG9yZSgpO1xuICAgIHRoaXMuYm9sZFRyYW5zZm9ybS50b2dnbGUoKTtcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9uQ29tcGxldGVkU3ViamVjdCQubmV4dCgpO1xuICB9XG5cbiAgZ2V0IGJvbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYm9sZFRyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZUl0YWxpYygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvbi5yZXN0b3JlKCk7XG4gICAgdGhpcy5pdGFsaWNUcmFuc2Zvcm0udG9nZ2xlKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBpdGFsaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXRhbGljVHJhbnNmb3JtLnZhbHVlO1xuICB9XG5cbiAgdG9nZ2xlVW5kZXJsaW5lKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uLnJlc3RvcmUoKTtcbiAgICB0aGlzLnVuZGVybGluZVRyYW5zZm9ybS50b2dnbGUoKTtcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9uQ29tcGxldGVkU3ViamVjdCQubmV4dCgpO1xuICB9XG5cbiAgZ2V0IHVuZGVybGluZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51bmRlcmxpbmVUcmFuc2Zvcm0udmFsdWU7XG4gIH1cblxuICBzZXQgZm9udFNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0aW9uLnJlc3RvcmUoKTtcbiAgICB0aGlzLmZvbnRTaXplVHJhbnNmb3JtLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBmb250U2l6ZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNpemU6IG51bWJlciA9IHRoaXMuZm9udFNpemVUcmFuc2Zvcm0udmFsdWU7XG5cbiAgICByZXR1cm4gdHlwZW9mIHNpemUgPT09ICdudW1iZXInID8gc2l6ZSA6IG51bGw7XG4gIH1cblxuICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2VsZWN0aW9uLnJlc3RvcmUoKTtcbiAgICB0aGlzLmNvbG9yVHJhbnNmb3JtLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbG9yVHJhbnNmb3JtLnZhbHVlO1xuICB9XG5cbiAgc2V0IGZvbnRGYW1pbHkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2VsZWN0aW9uLnJlc3RvcmUoKTtcbiAgICB0aGlzLmZvbnRGYW1pbHlUcmFuc2Zvcm0udmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9uQ29tcGxldGVkU3ViamVjdCQubmV4dCgpO1xuICB9XG5cbiAgZ2V0IGZvbnRGYW1pbHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb250RmFtaWx5VHJhbnNmb3JtLnZhbHVlO1xuICB9XG5cbiAgZ2V0IGp1c3RpZnlMZWZ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmp1c3RpZnlMZWZ0VHJhbnNmb3JtLnZhbHVlO1xuICB9XG5cbiAgdG9nZ2xlSnVzdGlmeUxlZnQoKTogdm9pZCB7XG4gICAgdGhpcy5qdXN0aWZ5TGVmdFRyYW5zZm9ybS5qdXN0aWZ5KCk7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBqdXN0aWZ5UmlnaHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuanVzdGlmeVJpZ2h0VHJhbnNmb3JtLnZhbHVlO1xuICB9XG5cbiAgdG9nZ2xlSnVzdGlmeVJpZ2h0KCk6IHZvaWQge1xuICAgIHRoaXMuanVzdGlmeVJpZ2h0VHJhbnNmb3JtLmp1c3RpZnkoKTtcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9uQ29tcGxldGVkU3ViamVjdCQubmV4dCgpO1xuICB9XG5cbiAgZ2V0IGp1c3RpZnlDZW50ZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuanVzdGlmeUNlbnRlclRyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZUp1c3RpZnlDZW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5qdXN0aWZ5Q2VudGVyVHJhbnNmb3JtLmp1c3RpZnkoKTtcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9uQ29tcGxldGVkU3ViamVjdCQubmV4dCgpO1xuICB9XG5cbiAgZ2V0IGp1c3RpZnlGdWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmp1c3RpZnlGdWxsVHJhbnNmb3JtLnZhbHVlO1xuICB9XG5cbiAgdG9nZ2xlSnVzdGlmeUZ1bGwoKTogdm9pZCB7XG4gICAgdGhpcy5qdXN0aWZ5RnVsbFRyYW5zZm9ybS5qdXN0aWZ5KCk7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCB1bm9yZGVyZWRMaXN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnVub3JkZXJlZFRyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZVVub3JkZXJlZExpc3QoKTogdm9pZCB7XG4gICAgY29uc3QgbmV3Q29udGVudCA9IHRoaXMudW5vcmRlcmVkVHJhbnNmb3JtLmFwcGx5KHRoaXMudmFsdWUpO1xuXG4gICAgaWYgKG5ld0NvbnRlbnQpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdDb250ZW50O1xuICAgICAgdGhpcy5yZW1vdmVMaXN0QWxpZ25TdWJqZWN0JC5uZXh0KG5ld0NvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RBbGlnblN1YmplY3QkLm5leHQobnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBvcmRlcmVkTGlzdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlcmVkVHJhbnNmb3JtLnZhbHVlO1xuICB9XG5cbiAgdG9nZ2xlT3JkZXJlZExpc3QoKTogdm9pZCB7XG4gICAgY29uc3QgbmV3Q29udGVudCA9IHRoaXMub3JkZXJlZFRyYW5zZm9ybS5hcHBseSh0aGlzLnZhbHVlKTtcblxuICAgIGlmIChuZXdDb250ZW50KSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3Q29udGVudDtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdEFsaWduU3ViamVjdCQubmV4dChuZXdDb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0QWxpZ25TdWJqZWN0JC5uZXh0KG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtYXRpb25Db21wbGV0ZWRTdWJqZWN0JC5uZXh0KCk7XG4gIH1cblxuICBzYXZlU2VsZWN0aW9uKHNlbGVjdGlvbjogRWRpdG9yU2VsZWN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb24uc2F2ZVNlbGVjdGlvbihzZWxlY3Rpb24pO1xuICB9XG5cbiAgZmluZFBhcmVudFRhZyh0YWc6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24uZmluZFBhcmVudFRhZyh0YWcpO1xuICB9XG5cbn1cbiJdfQ==