import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Injector, Input, Output, ViewChild, } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { SelectionHelper } from '../helpers/selection.helper';
import { TextEditor } from '../services/text-editor';
import { StateService } from '../services/text-editor-state.service';
import { ExecCommand } from '../text-editor.interface';
import * as i0 from "@angular/core";
import * as i1 from "../helpers/selection.helper";
import * as i2 from "../pipes/safe-html.pipe";
import * as i3 from "@angular/common";
const _c0 = ["textArea"];
export class TextEditorComponent {
    constructor(injector, changeDetectorRef, selectionHelper) {
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.selectionHelper = selectionHelper;
        this.initialValue$ = new BehaviorSubject('');
        this.changes$ = new Subject();
        this.destroy$ = new Subject();
        this.editing = false;
        this.changed = new EventEmitter();
        this.textEditor = this.injector.get(TextEditor);
        this.state = this.injector.get(StateService);
    }
    set value(value) {
        if (!value) {
            return;
        }
        this.initialValue$.next(value);
    }
    get textAreaElement() {
        return this.textArea.nativeElement;
    }
    // init(): void {
    // TODO set state here instead of @input state
    // }
    ngAfterViewInit() {
        this.bindEvents();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    onInput() {
        this.changes$.next(this.textArea.nativeElement.innerHTML);
        this.state.value = this.textArea.nativeElement.innerHTML;
    }
    onBlur() {
        this.state.value = this.textArea.nativeElement.innerHTML;
    }
    onPaste(event) {
        event.preventDefault();
        const strippedText = event.clipboardData.getData('text');
        document.execCommand(ExecCommand.InsertText, false, strippedText);
    }
    bindEvents() {
        this.changes$.pipe(tap(value => this.changed.emit(value)), takeUntil(this.destroy$)).subscribe();
        /**
         * Safari doesn't recognize fromEvent(document, 'selectionchange')
         * probably the reason is Shadow DOM
         */
        merge(fromEvent(this.textArea.nativeElement, 'keyup'), fromEvent(this.textArea.nativeElement, 'click'), fromEvent(this.textArea.nativeElement, 'mousemove'), this.state.transformationCompleted$).pipe(filter(() => this.editing), map(() => this.selectionHelper.get(this.textArea.nativeElement)), filter(selection => !!selection), distinctUntilChanged((prev, next) => JSON.stringify(prev) === JSON.stringify(next)), tap(selection => this.state.saveSelection(selection)), takeUntil(this.destroy$)).subscribe();
    }
}
TextEditorComponent.ɵfac = function TextEditorComponent_Factory(t) { return new (t || TextEditorComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.SelectionHelper)); };
TextEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextEditorComponent, selectors: [["peb-text-editor-new"]], viewQuery: function TextEditorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textArea = _t.first);
    } }, inputs: { value: "value", editing: "editing" }, outputs: { changed: "changed" }, decls: 4, vars: 6, consts: [["id", "text-editor", "data-placeholder", "Text", 3, "innerHtml", "contentEditable", "input", "blur", "paste"], ["textArea", ""]], template: function TextEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("input", function TextEditorComponent_Template_div_input_0_listener() { return ctx.onInput(); })("blur", function TextEditorComponent_Template_div_blur_0_listener() { return ctx.onBlur(); })("paste", function TextEditorComponent_Template_div_paste_0_listener($event) { return ctx.onPaste($event); });
        i0.ɵɵpipe(2, "safeHtml");
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind1(2, 2, i0.ɵɵpipeBind1(3, 4, ctx.initialValue$)), i0.ɵɵsanitizeHtml)("contentEditable", ctx.editing);
    } }, pipes: [i2.SafeHtmlPipe, i3.AsyncPipe], styles: ["#text-editor[_ngcontent-%COMP%]{position:relative;margin:2px;z-index:999;outline:0;word-break:break-word;color:#000;cursor:text;line-height:normal}#text-editor[contenteditable][_ngcontent-%COMP%]{font-weight:350}#text-editor[contenteditable=true][_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:text}#text-editor[contenteditable=false][_ngcontent-%COMP%]{cursor:default}#text-editor[_ngcontent-%COMP%]:empty:before{content:attr(data-placeholder);color:gray}.pe-te-p[_ngcontent-%COMP%]{margin-bottom:1em;margin-top:1em}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextEditorComponent, [{
        type: Component,
        args: [{
                selector: 'peb-text-editor-new',
                templateUrl: './text-editor.component.html',
                styleUrls: ['./text-editor.component.scss'],
            }]
    }], function () { return [{ type: i0.Injector }, { type: i0.ChangeDetectorRef }, { type: i1.SelectionHelper }]; }, { value: [{
            type: Input
        }], editing: [{
            type: Input
        }], changed: [{
            type: Output
        }], textArea: [{
            type: ViewChild,
            args: ['textArea', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItdGV4dC1lZGl0b3IvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RleHQtZWRpdG9yLmNvbXBvbmVudC50cyIsImNvbXBvbmVudHMvdGV4dC1lZGl0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixRQUFRLEVBQ1IsS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7QUFPdkQsTUFBTSxPQUFPLG1CQUFtQjtJQTZCOUIsWUFDUyxRQUFrQixFQUNqQixpQkFBb0MsRUFDcEMsZUFBZ0M7UUFGakMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWxCMUMsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUNoRCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUNqQyxhQUFRLEdB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QUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ25GLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ3JELFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7c0ZBdEZVLG1CQUFtQjt3REFBbkIsbUJBQW1COzs7Ozs7UUN6QmhDLGlDQVNPO1FBSkwsNkZBQVMsYUFBUyxJQUFDLDhFQUNYLFlBQVEsSUFERyxzRkFFVixtQkFBZSxJQUZMOzs7UUFJcEIsaUJBQU07O1FBTkwsNEdBQThDLGdDQUFBOztrRERzQm5DLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7O2tCQUVFLEtBQUs7O2tCQWlCTCxLQUFLOztrQkFHTCxNQUFNOztrQkFHTixTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlbGVjdGlvbkhlbHBlciB9IGZyb20gJy4uL2hlbHBlcnMvc2VsZWN0aW9uLmhlbHBlcic7XG5pbXBvcnQgeyBUZXh0RWRpdG9yIH0gZnJvbSAnLi4vc2VydmljZXMvdGV4dC1lZGl0b3InO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdGV4dC1lZGl0b3Itc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBFeGVjQ29tbWFuZCB9IGZyb20gJy4uL3RleHQtZWRpdG9yLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi10ZXh0LWVkaXRvci1uZXcnLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRleHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxWYWx1ZSQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBnZXQgdGV4dEFyZWFFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy50ZXh0QXJlYS5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgaW5pdGlhbFZhbHVlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gIGNoYW5nZXMkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgZWRpdGluZyA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQFZpZXdDaGlsZCgndGV4dEFyZWEnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICB0ZXh0QXJlYTogRWxlbWVudFJlZjtcbiAgdGV4dEVkaXRvcjogVGV4dEVkaXRvciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFRleHRFZGl0b3IpO1xuICBzdGF0ZTogU3RhdGVTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoU3RhdGVTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgc2VsZWN0aW9uSGVscGVyOiBTZWxlY3Rpb25IZWxwZXIsXG4gICkgeyB9XG5cbiAgLy8gaW5pdCgpOiB2b2lkIHtcbiAgLy8gVE9ETyBzZXQgc3RhdGUgaGVyZSBpbnN0ZWFkIG9mIEBpbnB1dCBzdGF0ZVxuICAvLyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uSW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VzJC5uZXh0KHRoaXMudGV4dEFyZWEubmF0aXZlRWxlbWVudC5pbm5lckhUTUwpO1xuICAgIHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnRleHRBcmVhLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnRleHRBcmVhLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICB9XG5cbiAgb25QYXN0ZShldmVudDogQ2xpcGJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHN0cmlwcGVkVGV4dCA9IGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dCcpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKEV4ZWNDb21tYW5kLkluc2VydFRleHQsIGZhbHNlLCBzdHJpcHBlZFRleHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kRXZlbnRzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlcyQucGlwZShcbiAgICAgIHRhcCh2YWx1ZSA9PiB0aGlzLmNoYW5nZWQuZW1pdCh2YWx1ZSkpLFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICkuc3Vic2NyaWJlKCk7XG5cbiAgICAvKipcbiAgICAgKiBTYWZhcmkgZG9lc24ndCByZWNvZ25pemUgZnJvbUV2ZW50KGRvY3VtZW50LCAnc2VsZWN0aW9uY2hhbmdlJylcbiAgICAgKiBwcm9iYWJseSB0aGUgcmVhc29uIGlzIFNoYWRvdyBET01cbiAgICAgKi9cbiAgICBtZXJnZShcbiAgICAgIGZyb21FdmVudCh0aGlzLnRleHRBcmVhLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpLFxuICAgICAgZnJvbUV2ZW50KHRoaXMudGV4dEFyZWEubmF0aXZlRWxlbWVudCwgJ2NsaWNrJyksXG4gICAgICBmcm9tRXZlbnQodGhpcy50ZXh0QXJlYS5uYXRpdmVFbGVtZW50LCAnbW91c2Vtb3ZlJyksXG4gICAgICB0aGlzLnN0YXRlLnRyYW5zZm9ybWF0aW9uQ29tcGxldGVkJCxcbiAgICApLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5lZGl0aW5nKSxcbiAgICAgIG1hcCgoKSA9PiB0aGlzLnNlbGVjdGlvbkhlbHBlci5nZXQodGhpcy50ZXh0QXJlYS5uYXRpdmVFbGVtZW50KSksXG4gICAgICBmaWx0ZXIoc2VsZWN0aW9uID0+ICEhc2VsZWN0aW9uKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2LCBuZXh0KSA9PiBKU09OLnN0cmluZ2lmeShwcmV2KSA9PT0gSlNPTi5zdHJpbmdpZnkobmV4dCkpLFxuICAgICAgdGFwKHNlbGVjdGlvbiA9PiB0aGlzLnN0YXRlLnNhdmVTZWxlY3Rpb24oc2VsZWN0aW9uKSksXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgKS5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiPGRpdlxuICAjdGV4dEFyZWFcbiAgaWQ9XCJ0ZXh0LWVkaXRvclwiXG4gIFtpbm5lckh0bWxdPVwiaW5pdGlhbFZhbHVlJCB8IGFzeW5jIHwgc2FmZUh0bWxcIlxuICBbY29udGVudEVkaXRhYmxlXT1cImVkaXRpbmdcIlxuICAoaW5wdXQpPVwib25JbnB1dCgpXCJcbiAgKGJsdXIpPVwib25CbHVyKClcIlxuICAocGFzdGUpPVwib25QYXN0ZSgkZXZlbnQpXCJcbiAgZGF0YS1wbGFjZWhvbGRlcj1cIlRleHRcIlxuPjwvZGl2PlxuIl19