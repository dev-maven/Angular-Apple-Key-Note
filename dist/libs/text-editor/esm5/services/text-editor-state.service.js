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
var StateService = /** @class */ (function () {
    function StateService(selection, boldTransform, colorTransform, fontFamilyTransform, fontSizeTransform, italicTransform, linkTransform, externalLinkTransform, underlineTransform, justifyLeftTransform, justifyRightTransform, justifyCenterTransform, justifyFullTransform, unorderedTransform, orderedTransform) {
        var _this = this;
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
        this.bold$ = this.changed$.pipe(map(function () { return _this.bold; }), distinctUntilChanged());
        this.color$ = this.changed$.pipe(map(function () { return _this.color; }), distinctUntilChanged());
        this.fontSize$ = this.changed$.pipe(map(function () { return _this.fontSize; }), distinctUntilChanged());
        this.fontFamily$ = this.changed$.pipe(map(function () { return _this.fontFamily; }), distinctUntilChanged());
        this.italic$ = this.changed$.pipe(map(function () { return _this.italic; }), distinctUntilChanged());
        this.link$ = this.changed$.pipe(map(function () { return _this.link; }), distinctUntilChanged());
        this.externalLink$ = this.changed$.pipe(map(function () { return _this.externalLink; }), distinctUntilChanged());
        this.justifyCenter$ = this.changed$.pipe(map(function () { return _this.justifyCenter; }), distinctUntilChanged());
        this.justifyLeft$ = this.changed$.pipe(map(function () { return _this.justifyLeft; }), distinctUntilChanged());
        this.justifyRight$ = this.changed$.pipe(map(function () { return _this.justifyRight; }), distinctUntilChanged());
        this.justifyFull$ = this.changed$.pipe(map(function () { return _this.justifyFull; }), distinctUntilChanged());
        this.orderedList$ = this.changed$.pipe(map(function () { return _this.orderedList; }), distinctUntilChanged());
        this.underline$ = this.changed$.pipe(map(function () { return _this.underline; }), distinctUntilChanged());
        this.unorderedList$ = this.changed$.pipe(map(function () { return _this.unorderedList; }), distinctUntilChanged());
        this.value$ = this.stateSubject$.asObservable().pipe(distinctUntilChanged());
    }
    Object.defineProperty(StateService.prototype, "value", {
        get: function () {
            return this.stateSubject$.getValue();
        },
        set: function (value) {
            this.stateSubject$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "link", {
        get: function () {
            return this.linkTransform.value;
        },
        set: function (value) {
            this.selection.restore();
            if (this.externalLink) {
                this.externalLinkTransform.value = null;
            }
            this.linkTransform.value = value;
            this.transformationCompletedSubject$.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "externalLink", {
        get: function () {
            return this.externalLinkTransform.value;
        },
        set: function (value) {
            this.selection.restore();
            if (this.link) {
                this.linkTransform.value = null;
            }
            this.externalLinkTransform.value = value;
            this.transformationCompletedSubject$.next();
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleBold = function () {
        this.selection.restore();
        this.boldTransform.toggle();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "bold", {
        get: function () {
            return this.boldTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleItalic = function () {
        this.selection.restore();
        this.italicTransform.toggle();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "italic", {
        get: function () {
            return this.italicTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleUnderline = function () {
        this.selection.restore();
        this.underlineTransform.toggle();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "underline", {
        get: function () {
            return this.underlineTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "fontSize", {
        get: function () {
            var size = this.fontSizeTransform.value;
            return typeof size === 'number' ? size : null;
        },
        set: function (value) {
            this.selection.restore();
            this.fontSizeTransform.value = value;
            this.transformationCompletedSubject$.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "color", {
        get: function () {
            return this.colorTransform.value;
        },
        set: function (value) {
            this.selection.restore();
            this.colorTransform.value = value;
            this.transformationCompletedSubject$.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "fontFamily", {
        get: function () {
            return this.fontFamilyTransform.value;
        },
        set: function (value) {
            this.selection.restore();
            this.fontFamilyTransform.value = value;
            this.transformationCompletedSubject$.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "justifyLeft", {
        get: function () {
            return this.justifyLeftTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleJustifyLeft = function () {
        this.justifyLeftTransform.justify();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "justifyRight", {
        get: function () {
            return this.justifyRightTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleJustifyRight = function () {
        this.justifyRightTransform.justify();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "justifyCenter", {
        get: function () {
            return this.justifyCenterTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleJustifyCenter = function () {
        this.justifyCenterTransform.justify();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "justifyFull", {
        get: function () {
            return this.justifyFullTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleJustifyFull = function () {
        this.justifyFullTransform.justify();
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "unorderedList", {
        get: function () {
            return this.unorderedTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleUnorderedList = function () {
        var newContent = this.unorderedTransform.apply(this.value);
        if (newContent) {
            this.value = newContent;
            this.removeListAlignSubject$.next(newContent);
        }
        else {
            this.removeListAlignSubject$.next(null);
        }
        this.transformationCompletedSubject$.next();
    };
    Object.defineProperty(StateService.prototype, "orderedList", {
        get: function () {
            return this.orderedTransform.value;
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.toggleOrderedList = function () {
        var newContent = this.orderedTransform.apply(this.value);
        if (newContent) {
            this.value = newContent;
            this.removeListAlignSubject$.next(newContent);
        }
        else {
            this.removeListAlignSubject$.next(null);
        }
        this.transformationCompletedSubject$.next();
    };
    StateService.prototype.saveSelection = function (selection) {
        this.selection.saveSelection(selection);
    };
    StateService.prototype.findParentTag = function (tag) {
        return this.selection.findParentTag(tag);
    };
    StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(i0.ɵɵinject(i1.TextEditorSelection), i0.ɵɵinject(i2.BoldTransform), i0.ɵɵinject(i3.ColorTransform), i0.ɵɵinject(i4.FontFamilyTransform), i0.ɵɵinject(i5.FontSizeTransform), i0.ɵɵinject(i6.ItalicTransform), i0.ɵɵinject(i7.LinkTransform), i0.ɵɵinject(i8.ExternalLinkTransform), i0.ɵɵinject(i9.UnderlineTransform), i0.ɵɵinject(i10.JustifyLeftTransform), i0.ɵɵinject(i11.JustifyRightTransform), i0.ɵɵinject(i12.JustifyCenterTransform), i0.ɵɵinject(i13.JustifyFullTransform), i0.ɵɵinject(i14.UnorderedTransform), i0.ɵɵinject(i15.OrderedTransform)); };
    StateService.ɵprov = i0.ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac });
    return StateService;
}());
export { StateService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StateService, [{
        type: Injectable
    }], function () { return [{ type: i1.TextEditorSelection }, { type: i2.BoldTransform }, { type: i3.ColorTransform }, { type: i4.FontFamilyTransform }, { type: i5.FontSizeTransform }, { type: i6.ItalicTransform }, { type: i7.LinkTransform }, { type: i8.ExternalLinkTransform }, { type: i9.UnderlineTransform }, { type: i10.JustifyLeftTransform }, { type: i11.JustifyRightTransform }, { type: i12.JustifyCenterTransform }, { type: i13.JustifyFullTransform }, { type: i14.UnorderedTransform }, { type: i15.OrderedTransform }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3Itc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BwZS9idWlsZGVyLXRleHQtZWRpdG9yLyIsInNvdXJjZXMiOlsic2VydmljZXMvdGV4dC1lZGl0b3Itc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9B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dHNsaW50OmRpc2FibGU6bWVtYmVyLW9yZGVyaW5nICovXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZXh0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdG9yU2VsZWN0aW9uIH0gZnJvbSAnLi4vdGV4dC1lZGl0b3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRleHRFZGl0b3JTZWxlY3Rpb24gfSBmcm9tICcuL3NlbGVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEJvbGRUcmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybXMvYm9sZC50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybXMvY29sb3IudHJhbnNmb3JtJztcbmltcG9ydCB7IEV4dGVybmFsTGlua1RyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9leHRlcm5hbC1saW5rLnRyYW5zZm9ybSc7XG5pbXBvcnQgeyBGb250RmFtaWx5VHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2ZvbnQtZmFtaWx5LnRyYW5zZm9ybSc7XG5pbXBvcnQgeyBGb250U2l6ZVRyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9mb250LXNpemUudHJhbnNmb3JtJztcbmltcG9ydCB7IEl0YWxpY1RyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9pdGFsaWMudHJhbnNmb3JtJztcbmltcG9ydCB7IEp1c3RpZnlDZW50ZXJUcmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybXMvanVzdGlmeS1jZW50ZXIudHJhbnNmb3JtJztcbmltcG9ydCB7IEp1c3RpZnlGdWxsVHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2p1c3RpZnktZnVsbC50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgSnVzdGlmeUxlZnRUcmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybXMvanVzdGlmeS1sZWZ0LnRyYW5zZm9ybSc7XG5pbXBvcnQgeyBKdXN0aWZ5UmlnaHRUcmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybXMvanVzdGlmeS1yaWdodC50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgTGlua1RyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9saW5rLnRyYW5zZm9ybSc7XG5pbXBvcnQgeyBPcmRlcmVkVHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm1zL29yZGVyZWQudHJhbnNmb3JtJztcbmltcG9ydCB7IFVuZGVybGluZVRyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy91bmRlcmxpbmUudHJhbnNmb3JtJztcbmltcG9ydCB7IFVub3JkZXJlZFRyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy91bm9yZGVyZWQudHJhbnNmb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXRlU2VydmljZSB7XG4gIHRleHRFZGl0b3JDb21wb25lbnQ6IFRleHRFZGl0b3JDb21wb25lbnQ7XG4gIGxhc3RDb250ZW50RWRpdGVkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBzdGF0ZVN1YmplY3QkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICByZWFkb25seSByZW1vdmVMaXN0QWxpZ25TdWJqZWN0JCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHRyYW5zZm9ybWF0aW9uQ29tcGxldGVkU3ViamVjdCQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdHJhbnNmb3JtYXRpb25Db21wbGV0ZWQkOiBPYnNlcnZhYmxlPG51bGw+ID0gdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNoYW5nZWQkOiBPYnNlcnZhYmxlPGFueT4gPSBtZXJnZShcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9uQ29tcGxldGVkU3ViamVjdCQsXG4gICAgdGhpcy5zZWxlY3Rpb24uc2F2ZWRWYWx1ZSQsXG4gICkucGlwZShzaGFyZSgpKTtcblxuICBib2xkJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuY2hhbmdlZCQucGlwZShcbiAgICBtYXAoKCkgPT4gdGhpcy5ib2xkKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIGNvbG9yJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5jaGFuZ2VkJC5waXBlKFxuICAgIG1hcCgoKSA9PiB0aGlzLmNvbG9yKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIGZvbnRTaXplJDogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5jaGFuZ2VkJC5waXBlKFxuICAgIG1hcCgoKSA9PiB0aGlzLmZvbnRTaXplKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIGZvbnRGYW1pbHkkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmNoYW5nZWQkLnBpcGUoXG4gICAgbWFwKCgpID0+IHRoaXMuZm9udEZhbWlseSksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgKTtcblxuICBpdGFsaWMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jaGFuZ2VkJC5waXBlKFxuICAgIG1hcCgoKSA9PiB0aGlzLml0YWxpYyksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgKTtcblxuICBsaW5rJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5jaGFuZ2VkJC5waXBlKFxuICAgIG1hcCgoKSA9PiB0aGlzLmxpbmspLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICk7XG5cbiAgZXh0ZXJuYWxMaW5rJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5jaGFuZ2VkJC5waXBlKFxuICAgIG1hcCgoKSA9PiB0aGlzLmV4dGVybmFsTGluayksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgKTtcblxuICBqdXN0aWZ5Q2VudGVyJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuY2hhbmdlZCQucGlwZShcbiAgICBtYXAoKCkgPT4gdGhpcy5qdXN0aWZ5Q2VudGVyKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIGp1c3RpZnlMZWZ0JDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuY2hhbmdlZCQucGlwZShcbiAgICBtYXAoKCkgPT4gdGhpcy5qdXN0aWZ5TGVmdCksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgKTtcblxuICBqdXN0aWZ5UmlnaHQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jaGFuZ2VkJC5waXBlKFxuICAgIG1hcCgoKSA9PiB0aGlzLmp1c3RpZnlSaWdodCksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgKTtcblxuICBqdXN0aWZ5RnVsbCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmNoYW5nZWQkLnBpcGUoXG4gICAgbWFwKCgpID0+IHRoaXMuanVzdGlmeUZ1bGwpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICk7XG5cbiAgb3JkZXJlZExpc3QkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jaGFuZ2VkJC5waXBlKFxuICAgIG1hcCgoKSA9PiB0aGlzLm9yZGVyZWRMaXN0KSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIHVuZGVybGluZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmNoYW5nZWQkLnBpcGUoXG4gICAgbWFwKCgpID0+IHRoaXMudW5kZXJsaW5lKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIHVub3JkZXJlZExpc3QkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jaGFuZ2VkJC5waXBlKFxuICAgIG1hcCgoKSA9PiB0aGlzLnVub3JkZXJlZExpc3QpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICk7XG5cbiAgdmFsdWUkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnN0YXRlU3ViamVjdCQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VsZWN0aW9uOiBUZXh0RWRpdG9yU2VsZWN0aW9uLFxuICAgIHByaXZhdGUgYm9sZFRyYW5zZm9ybTogQm9sZFRyYW5zZm9ybSxcbiAgICBwcml2YXRlIGNvbG9yVHJhbnNmb3JtOiBDb2xvclRyYW5zZm9ybSxcbiAgICBwcml2YXRlIGZvbnRGYW1pbHlUcmFuc2Zvcm06IEZvbnRGYW1pbHlUcmFuc2Zvcm0sXG4gICAgcHJpdmF0ZSBmb250U2l6ZVRyYW5zZm9ybTogRm9udFNpemVUcmFuc2Zvcm0sXG4gICAgcHJpdmF0ZSBpdGFsaWNUcmFuc2Zvcm06IEl0YWxpY1RyYW5zZm9ybSxcbiAgICBwcml2YXRlIGxpbmtUcmFuc2Zvcm06IExpbmtUcmFuc2Zvcm0sXG4gICAgcHJpdmF0ZSBleHRlcm5hbExpbmtUcmFuc2Zvcm06IEV4dGVybmFsTGlua1RyYW5zZm9ybSxcbiAgICBwcml2YXRlIHVuZGVybGluZVRyYW5zZm9ybTogVW5kZXJsaW5lVHJhbnNmb3JtLFxuICAgIHByaXZhdGUganVzdGlmeUxlZnRUcmFuc2Zvcm06IEp1c3RpZnlMZWZ0VHJhbnNmb3JtLFxuICAgIHByaXZhdGUganVzdGlmeVJpZ2h0VHJhbnNmb3JtOiBKdXN0aWZ5UmlnaHRUcmFuc2Zvcm0sXG4gICAgcHJpdmF0ZSBqdXN0aWZ5Q2VudGVyVHJhbnNmb3JtOiBKdXN0aWZ5Q2VudGVyVHJhbnNmb3JtLFxuICAgIHByaXZhdGUganVzdGlmeUZ1bGxUcmFuc2Zvcm06IEp1c3RpZnlGdWxsVHJhbnNmb3JtLFxuICAgIHByaXZhdGUgdW5vcmRlcmVkVHJhbnNmb3JtOiBVbm9yZGVyZWRUcmFuc2Zvcm0sXG4gICAgcHJpdmF0ZSBvcmRlcmVkVHJhbnNmb3JtOiBPcmRlcmVkVHJhbnNmb3JtLFxuICApIHsgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdGF0ZVN1YmplY3QkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVTdWJqZWN0JC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgc2V0IGxpbmsodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2VsZWN0aW9uLnJlc3RvcmUoKTtcblxuICAgIGlmICh0aGlzLmV4dGVybmFsTGluaykge1xuICAgICAgdGhpcy5leHRlcm5hbExpbmtUcmFuc2Zvcm0udmFsdWUgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMubGlua1RyYW5zZm9ybS52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudHJhbnNmb3JtYXRpb25Db21wbGV0ZWRTdWJqZWN0JC5uZXh0KCk7XG4gIH1cblxuICBnZXQgbGluaygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxpbmtUcmFuc2Zvcm0udmFsdWU7XG4gIH1cblxuICBzZXQgZXh0ZXJuYWxMaW5rKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlbGVjdGlvbi5yZXN0b3JlKCk7XG5cbiAgICBpZiAodGhpcy5saW5rKSB7XG4gICAgICB0aGlzLmxpbmtUcmFuc2Zvcm0udmFsdWUgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuZXh0ZXJuYWxMaW5rVHJhbnNmb3JtLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBleHRlcm5hbExpbmsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5leHRlcm5hbExpbmtUcmFuc2Zvcm0udmFsdWU7XG4gIH1cblxuICB0b2dnbGVCb2xkKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uLnJlc3RvcmUoKTtcbiAgICB0aGlzLmJvbGRUcmFuc2Zvcm0udG9nZ2xlKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBib2xkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmJvbGRUcmFuc2Zvcm0udmFsdWU7XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb24ucmVzdG9yZSgpO1xuICAgIHRoaXMuaXRhbGljVHJhbnNmb3JtLnRvZ2dsZSgpO1xuICAgIHRoaXMudHJhbnNmb3JtYXRpb25Db21wbGV0ZWRTdWJqZWN0JC5uZXh0KCk7XG4gIH1cblxuICBnZXQgaXRhbGljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLml0YWxpY1RyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZVVuZGVybGluZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvbi5yZXN0b3JlKCk7XG4gICAgdGhpcy51bmRlcmxpbmVUcmFuc2Zvcm0udG9nZ2xlKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCB1bmRlcmxpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudW5kZXJsaW5lVHJhbnNmb3JtLnZhbHVlO1xuICB9XG5cbiAgc2V0IGZvbnRTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGlvbi5yZXN0b3JlKCk7XG4gICAgdGhpcy5mb250U2l6ZVRyYW5zZm9ybS52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudHJhbnNmb3JtYXRpb25Db21wbGV0ZWRTdWJqZWN0JC5uZXh0KCk7XG4gIH1cblxuICBnZXQgZm9udFNpemUoKTogbnVtYmVyIHtcbiAgICBjb25zdCBzaXplOiBudW1iZXIgPSB0aGlzLmZvbnRTaXplVHJhbnNmb3JtLnZhbHVlO1xuXG4gICAgcmV0dXJuIHR5cGVvZiBzaXplID09PSAnbnVtYmVyJyA/IHNpemUgOiBudWxsO1xuICB9XG5cbiAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlbGVjdGlvbi5yZXN0b3JlKCk7XG4gICAgdGhpcy5jb2xvclRyYW5zZm9ybS52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudHJhbnNmb3JtYXRpb25Db21wbGV0ZWRTdWJqZWN0JC5uZXh0KCk7XG4gIH1cblxuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvclRyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIHNldCBmb250RmFtaWx5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlbGVjdGlvbi5yZXN0b3JlKCk7XG4gICAgdGhpcy5mb250RmFtaWx5VHJhbnNmb3JtLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBmb250RmFtaWx5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9udEZhbWlseVRyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIGdldCBqdXN0aWZ5TGVmdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5qdXN0aWZ5TGVmdFRyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZUp1c3RpZnlMZWZ0KCk6IHZvaWQge1xuICAgIHRoaXMuanVzdGlmeUxlZnRUcmFuc2Zvcm0uanVzdGlmeSgpO1xuICAgIHRoaXMudHJhbnNmb3JtYXRpb25Db21wbGV0ZWRTdWJqZWN0JC5uZXh0KCk7XG4gIH1cblxuICBnZXQganVzdGlmeVJpZ2h0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmp1c3RpZnlSaWdodFRyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZUp1c3RpZnlSaWdodCgpOiB2b2lkIHtcbiAgICB0aGlzLmp1c3RpZnlSaWdodFRyYW5zZm9ybS5qdXN0aWZ5KCk7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBqdXN0aWZ5Q2VudGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmp1c3RpZnlDZW50ZXJUcmFuc2Zvcm0udmFsdWU7XG4gIH1cblxuICB0b2dnbGVKdXN0aWZ5Q2VudGVyKCk6IHZvaWQge1xuICAgIHRoaXMuanVzdGlmeUNlbnRlclRyYW5zZm9ybS5qdXN0aWZ5KCk7XG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbkNvbXBsZXRlZFN1YmplY3QkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBqdXN0aWZ5RnVsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5qdXN0aWZ5RnVsbFRyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZUp1c3RpZnlGdWxsKCk6IHZvaWQge1xuICAgIHRoaXMuanVzdGlmeUZ1bGxUcmFuc2Zvcm0uanVzdGlmeSgpO1xuICAgIHRoaXMudHJhbnNmb3JtYXRpb25Db21wbGV0ZWRTdWJqZWN0JC5uZXh0KCk7XG4gIH1cblxuICBnZXQgdW5vcmRlcmVkTGlzdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51bm9yZGVyZWRUcmFuc2Zvcm0udmFsdWU7XG4gIH1cblxuICB0b2dnbGVVbm9yZGVyZWRMaXN0KCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld0NvbnRlbnQgPSB0aGlzLnVub3JkZXJlZFRyYW5zZm9ybS5hcHBseSh0aGlzLnZhbHVlKTtcblxuICAgIGlmIChuZXdDb250ZW50KSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3Q29udGVudDtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdEFsaWduU3ViamVjdCQubmV4dChuZXdDb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0QWxpZ25TdWJqZWN0JC5uZXh0KG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtYXRpb25Db21wbGV0ZWRTdWJqZWN0JC5uZXh0KCk7XG4gIH1cblxuICBnZXQgb3JkZXJlZExpc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJlZFRyYW5zZm9ybS52YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZU9yZGVyZWRMaXN0KCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld0NvbnRlbnQgPSB0aGlzLm9yZGVyZWRUcmFuc2Zvcm0uYXBwbHkodGhpcy52YWx1ZSk7XG5cbiAgICBpZiAobmV3Q29udGVudCkge1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld0NvbnRlbnQ7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RBbGlnblN1YmplY3QkLm5leHQobmV3Q29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdEFsaWduU3ViamVjdCQubmV4dChudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9uQ29tcGxldGVkU3ViamVjdCQubmV4dCgpO1xuICB9XG5cbiAgc2F2ZVNlbGVjdGlvbihzZWxlY3Rpb246IEVkaXRvclNlbGVjdGlvbik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uLnNhdmVTZWxlY3Rpb24oc2VsZWN0aW9uKTtcbiAgfVxuXG4gIGZpbmRQYXJlbnRUYWcodGFnOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uLmZpbmRQYXJlbnRUYWcodGFnKTtcbiAgfVxuXG59XG4iXX0=