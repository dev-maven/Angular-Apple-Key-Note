import { Component, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
export class PebButtonElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const styles = this.styles;
        const { scale } = this.options;
        return {
            host: {
                width: styles.width ? +styles.width * scale + 'px' : null,
                position: styles.position || 'relative',
                height: styles.height ? +styles.height * scale + 'px' : null,
                backgroundColor: styles.backgroundColor || null,
                textAlign: styles.textAlign || 'center',
                padding: styles.padding ? +styles.padding * scale + 'px' : null,
                borderRadius: styles.borderRadius ? +styles.borderRadius * scale + 'px' : null,
                paddingRight: styles.paddingRight ? +styles.paddingRight * scale + 'px' : null,
                paddingLeft: styles.paddingLeft ? +styles.paddingLeft * scale + 'px' : null,
                color: styles.color || '#000'
            },
        };
    }
    onClick() {
        this.interact({ type: 'button.click' });
    }
}
PebButtonElement.ɵfac = function PebButtonElement_Factory(t) { return ɵPebButtonElement_BaseFactory(t || PebButtonElement); };
PebButtonElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebButtonElement, selectors: [["peb-element-button"]], hostBindings: function PebButtonElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function PebButtonElement_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { element: "element", styles: "styles", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, template: function PebButtonElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.element.data.name);
    } }, styles: ["[_nghost-%COMP%]{display:inline-block}.wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%}img[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{margin:0}img[_ngcontent-%COMP%]{-webkit-margin-end:.5em;margin-inline-end:.5em}h1[_ngcontent-%COMP%]{font-size:1em;font-weight:inherit;display:inline-block}"], changeDetection: 0 });
const ɵPebButtonElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebButtonElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebButtonElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-button',
                templateUrl: './button.element.html',
                styleUrls: ['./button.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmVsZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci1yZW5kZXJlci8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2dlbmVyYWwvYnV0dG9uL2J1dHRvbi5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC9idXR0b24vYnV0dG9uLmVsZW1lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBVXRFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxrQkFBa0I7SUFJdEQsSUFBSSxRQUFRO1FBQ1YsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTtTQUN6QixDQUFDO0lBQ0osQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFL0IsT0FBUTtZQUNOLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ3pELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLFVBQVU7Z0JBQ3ZDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDNUQsZUFBZSxFQUFFLE1BQU0sQ0FBQyxlQUFlLElBQUksSUFBSTtnQkFDL0MsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUTtnQkFDdkMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUMvRCxZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBRSxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ2hGLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFFLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxHQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDakYsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUM5RSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNO2FBQzlCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFHRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O3lHQWhDVSxnQkFBZ0I7cURBQWhCLGdCQUFnQjs7O1FDWDdCLDRCQUFNO1FBQUEsWUFBdUI7UUFBQSxpQkFBTzs7UUFBOUIsZUFBdUI7UUFBdkIsMkNBQXVCOzsrRERXaEIsZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FONUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBMEJMLFlBQVk7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYlJlbmRlcmVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3JlbmRlcmVyLnR5cGVzJztcbmltcG9ydCB7IFBlYkVsZW1lbnQsIFBlYkVsZW1lbnRTdHlsZXMgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5lbGVtZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uZWxlbWVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBlYkJ1dHRvbkVsZW1lbnQgZXh0ZW5kcyBQZWJBYnN0cmFjdEVsZW1lbnQge1xuICBASW5wdXQoKSBlbGVtZW50OiBQZWJFbGVtZW50O1xuICBASW5wdXQoKSBzdHlsZXM6IFBlYkVsZW1lbnRTdHlsZXM7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IFBlYlJlbmRlcmVyT3B0aW9ucztcbiAgZ2V0IGVsZW1lbnRzKCk6IHsgW2tleTogc3RyaW5nXTogSFRNTEVsZW1lbnQgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICB9O1xuICB9XG4gIGdldCBtYXBwZWRTdHlsZXMoKTogYW55IHtcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLnN0eWxlcztcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICByZXR1cm4gIHtcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgd2lkdGg6IHN0eWxlcy53aWR0aCA/ICtzdHlsZXMud2lkdGggKiBzY2FsZSArICdweCcgOiBudWxsLFxuICAgICAgICBwb3NpdGlvbjogc3R5bGVzLnBvc2l0aW9uIHx8ICdyZWxhdGl2ZScsXG4gICAgICAgIGhlaWdodDogc3R5bGVzLmhlaWdodCA/ICtzdHlsZXMuaGVpZ2h0ICogc2NhbGUgKyAncHgnIDogbnVsbCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdHlsZXMuYmFja2dyb3VuZENvbG9yIHx8IG51bGwsXG4gICAgICAgIHRleHRBbGlnbjogc3R5bGVzLnRleHRBbGlnbiB8fCAnY2VudGVyJyxcbiAgICAgICAgcGFkZGluZzogc3R5bGVzLnBhZGRpbmcgPyArc3R5bGVzLnBhZGRpbmcgKiBzY2FsZSArICdweCcgOiBudWxsLFxuICAgICAgICBib3JkZXJSYWRpdXM6IHN0eWxlcy5ib3JkZXJSYWRpdXMgPyArIHN0eWxlcy5ib3JkZXJSYWRpdXMgKiBzY2FsZSAgKyAncHgnIDogbnVsbCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzdHlsZXMucGFkZGluZ1JpZ2h0ID8gKyBzdHlsZXMucGFkZGluZ1JpZ2h0ICogc2NhbGUgICArICdweCcgOiBudWxsLFxuICAgICAgICBwYWRkaW5nTGVmdDogc3R5bGVzLnBhZGRpbmdMZWZ0ID8gKyBzdHlsZXMucGFkZGluZ0xlZnQgKiBzY2FsZSAgICsgJ3B4JyA6IG51bGwsXG4gICAgICAgIGNvbG9yOiBzdHlsZXMuY29sb3IgfHwgJyMwMDAnXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5pbnRlcmFjdCh7IHR5cGU6ICdidXR0b24uY2xpY2snIH0pO1xuICB9XG5cbn1cbiIsIjxzcGFuPnt7IGVsZW1lbnQuZGF0YS5uYW1lIH19PC9zcGFuPlxuIl19