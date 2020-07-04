import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
// import { LineStyles } from './line.constants';
export class PebLineElement extends PebAbstractElement {
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        // const styles = this.styles as LineStyles;
        // const { scale } = this.options;
        return {
            host: {
                position: 'relative',
                width: this.styles.width ? `${this.styles.width}px` : '60%',
                height: this.styles.height ? `${+this.styles.height}px`
                    : '0.5px',
                backgroundColor: this.styles.backgroundColor ? this.styles.backgroundColor : 'black',
                color: this.styles.color ? this.styles.color : 'white',
                fontSize: this.styles.fontSize + 'px',
                margin: this.styles.margin ? this.styles.margin : '5rem',
                boxShadow: this.styles.boxShadow ? this.styles.boxShadow : null,
                opacity: this.styles.opacity ? this.styles.opacity : null,
                transform: this.styles.transform,
                top: this.styles.top ? this.styles.top : '-25rem',
                float: this.styles.float
            },
        };
    }
    ngOnInit() {
        console.log('I was called');
    }
    ngAfterViewInit() {
        this.applyStyles();
        this.renderChildren();
    }
}
PebLineElement.ɵfac = function PebLineElement_Factory(t) { return ɵPebLineElement_BaseFactory(t || PebLineElement); };
PebLineElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebLineElement, selectors: [["peb-element-line"]], inputs: { element: "element", styles: "styles", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function PebLineElement_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", ".line[_ngcontent-%COMP%]{position:relative;top:200px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin:auto}"], changeDetection: 0 });
const ɵPebLineElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebLineElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebLineElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-line',
                templateUrl: './line.element.html',
                styleUrls: ['../../_abstract/abstract.element.scss',
                    './line.element.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9nZW5lcmFsL2xpbmUvbGluZS5lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULEtBQUssRUFNTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFLdEUsaURBQWlEO0FBU2pELE1BQU0sT0FBTyxjQUFlLFNBQVEsa0JBQWtCO0lBUXBELElBQUksUUFBUTtRQUNWLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDekIsQ0FBQztJQUNKLENBQUM7SUFHRCxJQUFJLFlBQVk7UUFDZCw0Q0FBNEM7UUFDNUMsa0NBQWtDO1FBRWxDLE9BQVE7WUFDTixJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO2dCQUMzRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSTtvQkFDckQsQ0FBQyxDQUFDLE9BQU87Z0JBQ1gsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTztnQkFDcEYsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTztnQkFDdEQsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUk7Z0JBQ3JDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07Z0JBQ3hELFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQy9ELE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ3pELFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7Z0JBQ2hDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVE7Z0JBQ2pELEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7YUFFekI7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzttR0EvQ1UsY0FBYzttREFBZCxjQUFjOzZEQUFkLGNBQWM7a0RBQWQsY0FBYztjQVAxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHFCQUFxQjtnQkFDbEMsU0FBUyxFQUFFLENBQUMsdUNBQXVDO29CQUNuRCxxQkFBcUIsQ0FBQztnQkFDdEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgT25Jbml0LFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBlYkFic3RyYWN0RWxlbWVudCB9IGZyb20gJy4uLy4uL19hYnN0cmFjdC9hYnN0cmFjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYkVsZW1lbnQsIFBlYlN0eWxlcyB9IGZyb20gJy4uLy4uLy4uL2NvcmUudHlwZXMnO1xuaW1wb3J0IHsgUGViUmVuZGVyZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vcmVuZGVyZXIudHlwZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIGltcG9ydCB7IExpbmVTdHlsZXMgfSBmcm9tICcuL2xpbmUuY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saW5lLmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudC5zY3NzJyxcbiAgJy4vbGluZS5lbGVtZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBlYkxpbmVFbGVtZW50IGV4dGVuZHMgUGViQWJzdHJhY3RFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoKSBlbGVtZW50OiBQZWJFbGVtZW50O1xuICBASW5wdXQoKSBzdHlsZXM6IFBlYlN0eWxlcztcblxuICBASW5wdXQoKSBvcHRpb25zOiBQZWJSZW5kZXJlck9wdGlvbnM7XG5cblxuICBnZXQgZWxlbWVudHMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MRWxlbWVudCB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgIH07XG4gIH1cblxuXG4gIGdldCBtYXBwZWRTdHlsZXMoKSB7XG4gICAgLy8gY29uc3Qgc3R5bGVzID0gdGhpcy5zdHlsZXMgYXMgTGluZVN0eWxlcztcbiAgICAvLyBjb25zdCB7IHNjYWxlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICByZXR1cm4gIHtcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB0aGlzLnN0eWxlcy53aWR0aCA/IGAke3RoaXMuc3R5bGVzLndpZHRofXB4YCA6ICc2MCUnLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuc3R5bGVzLmhlaWdodCA/IGAkeyt0aGlzLnN0eWxlcy5oZWlnaHR9cHhgXG4gICAgICAgICAgOiAnMC41cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3R5bGVzLmJhY2tncm91bmRDb2xvciA/IHRoaXMuc3R5bGVzLmJhY2tncm91bmRDb2xvciA6ICdibGFjaycsXG4gICAgICAgIGNvbG9yOiB0aGlzLnN0eWxlcy5jb2xvciA/IHRoaXMuc3R5bGVzLmNvbG9yIDogJ3doaXRlJyxcbiAgICAgICAgZm9udFNpemU6IHRoaXMuc3R5bGVzLmZvbnRTaXplICsgJ3B4JyxcbiAgICAgICAgbWFyZ2luOiB0aGlzLnN0eWxlcy5tYXJnaW4gPyB0aGlzLnN0eWxlcy5tYXJnaW4gOiAnNXJlbScsXG4gICAgICAgIGJveFNoYWRvdzogdGhpcy5zdHlsZXMuYm94U2hhZG93ID8gdGhpcy5zdHlsZXMuYm94U2hhZG93IDogbnVsbCxcbiAgICAgICAgb3BhY2l0eTogdGhpcy5zdHlsZXMub3BhY2l0eSA/IHRoaXMuc3R5bGVzLm9wYWNpdHkgOiBudWxsLFxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMuc3R5bGVzLnRyYW5zZm9ybSxcbiAgICAgICAgdG9wOiB0aGlzLnN0eWxlcy50b3AgPyB0aGlzLnN0eWxlcy50b3AgOiAnLTI1cmVtJyxcbiAgICAgICAgZmxvYXQ6IHRoaXMuc3R5bGVzLmZsb2F0XG5cbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdJIHdhcyBjYWxsZWQnKTtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYXBwbHlTdHlsZXMoKTtcbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gIH1cbiAgICAgICAgLy8gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRpc3BsYXlGdWxsRGVzY3JpcHRpb24oKSk7XG5cblxufVxuIl19