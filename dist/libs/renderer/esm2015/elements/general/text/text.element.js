import { Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
export class PebTextElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const styles = this.styles;
        const { scale } = this.options;
        const transformMargin = (str) => ('' + str)
            .split(' ')
            .map(part => +part * scale + 'px')
            .join(' ');
        return {
            host: {
                width: styles.width
                    ? (styles.width).toString().includes('%')
                        ? styles.width
                        : styles.width * scale + 'px'
                    : null,
                position: 'relative',
                display: 'inline-block',
                margin: styles.margin ? transformMargin(styles.margin) : null,
                color: styles.color,
                fontSize: styles.fontSize
                    ? scale * styles.fontSize + 'px'
                    : scale + 'em',
                fontWeight: styles.fontWeight,
                textAlign: styles.textAlign,
            },
        };
    }
}
PebTextElement.ɵfac = function PebTextElement_Factory(t) { return ɵPebTextElement_BaseFactory(t || PebTextElement); };
PebTextElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebTextElement, selectors: [["peb-element-text"]], inputs: { element: "element", context: "context", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, template: function PebTextElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
    } if (rf & 2) {
        i0.ɵɵtextInterpolate1("", ctx.element.data.text, "\n");
    } }, styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", ""] });
const ɵPebTextElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebTextElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebTextElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-text',
                templateUrl: './text.element.html',
                styleUrls: [
                    '../../_abstract/abstract.element.scss',
                    './text.element.scss'
                ]
            }]
    }], null, { element: [{
            type: Input
        }], context: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9nZW5lcmFsL3RleHQvdGV4dC5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC90ZXh0L3RleHQuZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQVl0RSxNQUFNLE9BQU8sY0FBZSxTQUFRLGtCQUFrQjtJQUtwRCxJQUFJLFFBQVE7UUFDVixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ3pCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQWEsQ0FBQztRQUNsQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUUvQixNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQ3hDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUViLE9BQVE7WUFDTixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO29CQUNqQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzt3QkFDdkMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO3dCQUNkLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO29CQUMvQixDQUFDLENBQUMsSUFBSTtnQkFDUixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUM3RCxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7Z0JBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtvQkFDdkIsQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUk7b0JBQ2hDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSTtnQkFDaEIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO2dCQUM3QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7YUFDNUI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7bUdBdENVLGNBQWM7bURBQWQsY0FBYztRQ2IzQixZQUNBOztRQURBLHNEQUNBOzs2RERZYSxjQUFjO2tEQUFkLGNBQWM7Y0FSMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxxQkFBcUI7Z0JBQ2xDLFNBQVMsRUFBRTtvQkFDVCx1Q0FBdUM7b0JBQ3ZDLHFCQUFxQjtpQkFDdEI7YUFDRjs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYlJlbmRlcmVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3JlbmRlcmVyLnR5cGVzJztcbmltcG9ydCB7IFBlYkVsZW1lbnQsIFBlYkVsZW1lbnRDb250ZXh0IH0gZnJvbSAnQHBlL2J1aWxkZXItY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlYi1lbGVtZW50LXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC5lbGVtZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQuc2NzcycsXG4gICAgJy4vdGV4dC5lbGVtZW50LnNjc3MnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGViVGV4dEVsZW1lbnQgZXh0ZW5kcyBQZWJBYnN0cmFjdEVsZW1lbnQge1xuICBASW5wdXQoKSBlbGVtZW50OiBQZWJFbGVtZW50O1xuICBASW5wdXQoKSBjb250ZXh0OiBQZWJFbGVtZW50Q29udGV4dDxhbnk+O1xuICBASW5wdXQoKSBvcHRpb25zOiBQZWJSZW5kZXJlck9wdGlvbnM7XG5cbiAgZ2V0IGVsZW1lbnRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiB0aGlzLm5hdGl2ZUVsZW1lbnQsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5zdHlsZXMgYXMgYW55O1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGNvbnN0IHRyYW5zZm9ybU1hcmdpbiA9IChzdHIpID0+ICgnJyArIHN0cilcbiAgICAgIC5zcGxpdCgnICcpXG4gICAgICAubWFwKHBhcnQgPT4gK3BhcnQgKiBzY2FsZSArICdweCcpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgcmV0dXJuICB7XG4gICAgICBob3N0OiB7XG4gICAgICAgIHdpZHRoOiBzdHlsZXMud2lkdGhcbiAgICAgICAgICA/IChzdHlsZXMud2lkdGgpLnRvU3RyaW5nKCkuaW5jbHVkZXMoJyUnKVxuICAgICAgICAgICAgPyBzdHlsZXMud2lkdGhcbiAgICAgICAgICAgIDogc3R5bGVzLndpZHRoICogc2NhbGUgKyAncHgnXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbjogc3R5bGVzLm1hcmdpbiA/IHRyYW5zZm9ybU1hcmdpbihzdHlsZXMubWFyZ2luKSA6IG51bGwsXG4gICAgICAgIGNvbG9yOiBzdHlsZXMuY29sb3IsXG4gICAgICAgIGZvbnRTaXplOiBzdHlsZXMuZm9udFNpemVcbiAgICAgICAgICA/IHNjYWxlICogc3R5bGVzLmZvbnRTaXplICsgJ3B4J1xuICAgICAgICAgIDogc2NhbGUgKyAnZW0nLFxuICAgICAgICBmb250V2VpZ2h0OiBzdHlsZXMuZm9udFdlaWdodCxcbiAgICAgICAgdGV4dEFsaWduOiBzdHlsZXMudGV4dEFsaWduLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iLCJ7eyBlbGVtZW50LmRhdGEudGV4dCB9fVxuIl19