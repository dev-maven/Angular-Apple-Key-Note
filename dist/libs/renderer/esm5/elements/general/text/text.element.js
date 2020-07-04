import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import * as i0 from "@angular/core";
var PebTextElement = /** @class */ (function (_super) {
    __extends(PebTextElement, _super);
    function PebTextElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PebTextElement.prototype, "elements", {
        get: function () {
            return {
                host: this.nativeElement,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PebTextElement.prototype, "mappedStyles", {
        get: function () {
            var styles = this.styles;
            var scale = this.options.scale;
            var transformMargin = function (str) { return ('' + str)
                .split(' ')
                .map(function (part) { return +part * scale + 'px'; })
                .join(' '); };
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
        },
        enumerable: true,
        configurable: true
    });
    PebTextElement.ɵfac = function PebTextElement_Factory(t) { return ɵPebTextElement_BaseFactory(t || PebTextElement); };
    PebTextElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebTextElement, selectors: [["peb-element-text"]], inputs: { element: "element", context: "context", options: "options" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, template: function PebTextElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtext(0);
        } if (rf & 2) {
            i0.ɵɵtextInterpolate1("", ctx.element.data.text, "\n");
        } }, styles: ["[_nghost-%COMP%]{display:block;position:relative}.element-caption[_ngcontent-%COMP%]{position:absolute;padding:4px;font-size:11px;background:#ccc;color:#444;right:0;top:0}.selected[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid rgba(0,128,255,.5)}", ""] });
    return PebTextElement;
}(PebAbstractElement));
export { PebTextElement };
var ɵPebTextElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebTextElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9nZW5lcmFsL3RleHQvdGV4dC5lbGVtZW50LnRzIiwiZWxlbWVudHMvZ2VuZXJhbC90ZXh0L3RleHQuZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFJdEU7SUFRb0Msa0NBQWtCO0lBUnREOztLQStDQztJQWxDQyxzQkFBSSxvQ0FBUTthQUFaO1lBQ0UsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDekIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVk7YUFBaEI7WUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBYSxDQUFDO1lBQzFCLElBQUEsMEJBQUssQ0FBa0I7WUFFL0IsSUFBTSxlQUFlLEdBQUcsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7aUJBQ3hDLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1YsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksRUFBcEIsQ0FBb0IsQ0FBQztpQkFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUhxQixDQUdyQixDQUFDO1lBRWIsT0FBUTtnQkFDTixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO3dCQUNqQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzs0QkFDdkMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLOzRCQUNkLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO3dCQUMvQixDQUFDLENBQUMsSUFBSTtvQkFDUixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUM3RCxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTt3QkFDdkIsQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUk7d0JBQ2hDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSTtvQkFDaEIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO29CQUM3QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7aUJBQzVCO2FBQ0YsQ0FBQztRQUNKLENBQUM7OztPQUFBO3VHQXRDVSxjQUFjO3VEQUFkLGNBQWM7WUNiM0IsWUFDQTs7WUFEQSxzREFDQTs7eUJEREE7Q0FvREMsQUEvQ0QsQ0FRb0Msa0JBQWtCLEdBdUNyRDtTQXZDWSxjQUFjOzJEQUFkLGNBQWM7a0RBQWQsY0FBYztjQVIxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHFCQUFxQjtnQkFDbEMsU0FBUyxFQUFFO29CQUNULHVDQUF1QztvQkFDdkMscUJBQXFCO2lCQUN0QjthQUNGOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGViQWJzdHJhY3RFbGVtZW50IH0gZnJvbSAnLi4vLi4vX2Fic3RyYWN0L2Fic3RyYWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViUmVuZGVyZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vcmVuZGVyZXIudHlwZXMnO1xuaW1wb3J0IHsgUGViRWxlbWVudCwgUGViRWxlbWVudENvbnRleHQgfSBmcm9tICdAcGUvYnVpbGRlci1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtdGV4dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudC5zY3NzJyxcbiAgICAnLi90ZXh0LmVsZW1lbnQuc2NzcydcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQZWJUZXh0RWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCB7XG4gIEBJbnB1dCgpIGVsZW1lbnQ6IFBlYkVsZW1lbnQ7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IFBlYkVsZW1lbnRDb250ZXh0PGFueT47XG4gIEBJbnB1dCgpIG9wdGlvbnM6IFBlYlJlbmRlcmVyT3B0aW9ucztcblxuICBnZXQgZWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3Q6IHRoaXMubmF0aXZlRWxlbWVudCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG1hcHBlZFN0eWxlcygpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLnN0eWxlcyBhcyBhbnk7XG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtTWFyZ2luID0gKHN0cikgPT4gKCcnICsgc3RyKVxuICAgICAgLnNwbGl0KCcgJylcbiAgICAgIC5tYXAocGFydCA9PiArcGFydCAqIHNjYWxlICsgJ3B4JylcbiAgICAgIC5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4gIHtcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgd2lkdGg6IHN0eWxlcy53aWR0aFxuICAgICAgICAgID8gKHN0eWxlcy53aWR0aCkudG9TdHJpbmcoKS5pbmNsdWRlcygnJScpXG4gICAgICAgICAgICA/IHN0eWxlcy53aWR0aFxuICAgICAgICAgICAgOiBzdHlsZXMud2lkdGggKiBzY2FsZSArICdweCdcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWFyZ2luOiBzdHlsZXMubWFyZ2luID8gdHJhbnNmb3JtTWFyZ2luKHN0eWxlcy5tYXJnaW4pIDogbnVsbCxcbiAgICAgICAgY29sb3I6IHN0eWxlcy5jb2xvcixcbiAgICAgICAgZm9udFNpemU6IHN0eWxlcy5mb250U2l6ZVxuICAgICAgICAgID8gc2NhbGUgKiBzdHlsZXMuZm9udFNpemUgKyAncHgnXG4gICAgICAgICAgOiBzY2FsZSArICdlbScsXG4gICAgICAgIGZvbnRXZWlnaHQ6IHN0eWxlcy5mb250V2VpZ2h0LFxuICAgICAgICB0ZXh0QWxpZ246IHN0eWxlcy50ZXh0QWxpZ24sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiIsInt7IGVsZW1lbnQuZGF0YS50ZXh0IH19XG4iXX0=