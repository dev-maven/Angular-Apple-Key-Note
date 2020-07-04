import { Component, HostListener, Input } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElementContextState } from '@pe/builder-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PebBusinessLogoElement_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Loading...");
    i0.ɵɵelementContainerEnd();
} }
function PebBusinessLogoElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Error");
    i0.ɵɵelementContainerEnd();
} }
function PebBusinessLogoElement_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Empty");
    i0.ɵɵelementContainerEnd();
} }
function PebBusinessLogoElement_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "img", 3);
    i0.ɵɵelementStart(3, "h1");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r464 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r464.context.data.logoUrl, i0.ɵɵsanitizeUrl)("alt", ctx_r464.context.data.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r464.context.data.name);
} }
export class PebBusinessLogoElement extends PebAbstractElement {
    constructor() {
        super(...arguments);
        this.PebElementContextState = PebElementContextState;
    }
    get elements() {
        return {
            host: this.nativeElement,
        };
    }
    get mappedStyles() {
        const { scale } = this.options;
        // TODO: Filter out nulls
        return {
            host: {
                position: 'relative',
                color: this.styles.color,
                fontSize: this.styles.fontSize
                    ? (this.styles.fontSize * scale) + 'px'
                    : null,
                left: this.styles.left
                    ? (this.styles.left * scale) + 'px'
                    : null,
                right: this.styles.right
                    ? (this.styles.right * scale) + 'px'
                    : null,
                top: this.styles.to
                    ? (this.styles.top * scale) + 'px'
                    : null,
                bottom: this.styles.bottom
                    ? (this.styles.bottom * scale) + 'px'
                    : null,
            }
        };
    }
    onClick() {
        this.interact({ type: 'logo.click' });
    }
}
PebBusinessLogoElement.ɵfac = function PebBusinessLogoElement_Factory(t) { return ɵPebBusinessLogoElement_BaseFactory(t || PebBusinessLogoElement); };
PebBusinessLogoElement.ɵcmp = i0.ɵɵdefineComponent({ type: PebBusinessLogoElement, selectors: [["peb-element-business-logo"]], hostBindings: function PebBusinessLogoElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function PebBusinessLogoElement_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { element: "element", styles: "styles", context: "context" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "wrapper"], [3, "src", "alt"]], template: function PebBusinessLogoElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, PebBusinessLogoElement_ng_container_1_Template, 2, 0, "ng-container", 1);
        i0.ɵɵtemplate(2, PebBusinessLogoElement_ng_container_2_Template, 2, 0, "ng-container", 1);
        i0.ɵɵtemplate(3, PebBusinessLogoElement_ng_container_3_Template, 2, 0, "ng-container", 1);
        i0.ɵɵtemplate(4, PebBusinessLogoElement_ng_container_4_Template, 5, 3, "ng-container", 1);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.context.state);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Error);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Empty);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.PebElementContextState.Ready);
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase], styles: ["[_nghost-%COMP%]{display:inline-block}.wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}h1[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{margin:0}img[_ngcontent-%COMP%]{-webkit-margin-end:.5em;margin-inline-end:.5em}h1[_ngcontent-%COMP%]{font-size:1em;font-weight:inherit;display:inline-block}"] });
const ɵPebBusinessLogoElement_BaseFactory = i0.ɵɵgetInheritedFactory(PebBusinessLogoElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebBusinessLogoElement, [{
        type: Component,
        args: [{
                selector: 'peb-element-business-logo',
                templateUrl: './logo.element.html',
                styleUrls: ['./logo.element.scss']
            }]
    }], null, { element: [{
            type: Input
        }], styles: [{
            type: Input
        }], context: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJlbGVtZW50cy9jb21wYW55L2xvZ28vbG9nby5lbGVtZW50LnRzIiwiZWxlbWVudHMvY29tcGFueS9sb2dvL2xvZ28uZWxlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQW1ELHNCQUFzQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7SUNEekcsNkJBQTZEO0lBQUEsMEJBQVU7SUFBQSwwQkFBZTs7O0lBQ3RGLDZCQUEyRDtJQUFBLHFCQUFLO0lBQUEsMEJBQWU7OztJQUMvRSw2QkFBMkQ7SUFBQSxxQkFBSztJQUFBLDBCQUFlOzs7SUFDL0UsNkJBQ0U7SUFBQSw4QkFDRTtJQUFBLHlCQUNBO0lBQUEsMEJBQUk7SUFBQSxZQUF1QjtJQUFBLGlCQUFLO0lBQ2xDLGlCQUFNO0lBQ1IsMEJBQWU7OztJQUhOLGVBQTRCO0lBQTVCLHFFQUE0QixtQ0FBQTtJQUM3QixlQUF1QjtJQUF2QixnREFBdUI7O0FET2pDLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxrQkFBa0I7SUFMOUQ7O1FBVUUsMkJBQXNCLEdBQUcsc0JBQXNCLENBQUM7S0F1Q2pEO0lBckNDLElBQUksUUFBUTtRQUNWLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDekIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUUvQix5QkFBeUI7UUFDekIsT0FBTztZQUNMLElBQUksRUFBRTtnQkFDSixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtvQkFDNUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFrQixHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUk7b0JBQ2pELENBQUMsQ0FBQyxJQUFJO2dCQUNSLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7b0JBQ3BCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBYyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUk7b0JBQzdDLENBQUMsQ0FBQyxJQUFJO2dCQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3RCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBZSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUk7b0JBQzlDLENBQUMsQ0FBQyxJQUFJO2dCQUNSLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ2pCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBYSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUk7b0JBQzVDLENBQUMsQ0FBQyxJQUFJO2dCQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07b0JBQ3hCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBZ0IsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJO29CQUMvQyxDQUFDLENBQUMsSUFBSTthQUNUO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFHRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OzJIQTNDVSxzQkFBc0I7MkRBQXRCLHNCQUFzQjs7O1FDZG5DLGdDQUNFO1FBQUEseUZBQTZEO1FBQzdELHlGQUEyRDtRQUMzRCx5RkFBMkQ7UUFDM0QseUZBQ0U7UUFLSiwwQkFBZTs7UUFWRCw0Q0FBMEI7UUFDeEIsZUFBOEM7UUFBOUMsaUVBQThDO1FBQzlDLGVBQTRDO1FBQTVDLCtEQUE0QztRQUM1QyxlQUE0QztRQUE1QywrREFBNEM7UUFDNUMsZUFBNEM7UUFBNUMsK0RBQTRDOztxRURVL0Msc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxxQkFBcUI7Z0JBQ2xDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ25DOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFxQ0wsWUFBWTttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZWJBYnN0cmFjdEVsZW1lbnQgfSBmcm9tICcuLi8uLi9fYWJzdHJhY3QvYWJzdHJhY3QuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJFbGVtZW50LCBQZWJFbGVtZW50U3R5bGVzLCBQZWJFbGVtZW50Q29udGV4dCwgUGViRWxlbWVudENvbnRleHRTdGF0ZSB9IGZyb20gJ0BwZS9idWlsZGVyLWNvcmUnO1xuXG5leHBvcnQgdHlwZSBMb2dvQ29udGV4dCA9IFBlYkVsZW1lbnRDb250ZXh0PHtcbiAgbG9nb1VybDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59PjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGViLWVsZW1lbnQtYnVzaW5lc3MtbG9nbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dvLmVsZW1lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ28uZWxlbWVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGViQnVzaW5lc3NMb2dvRWxlbWVudCBleHRlbmRzIFBlYkFic3RyYWN0RWxlbWVudCB7XG4gIEBJbnB1dCgpIGVsZW1lbnQ6IFBlYkVsZW1lbnQ7XG4gIEBJbnB1dCgpIHN0eWxlczogUGViRWxlbWVudFN0eWxlcztcbiAgQElucHV0KCkgY29udGV4dDogTG9nb0NvbnRleHQ7XG5cbiAgUGViRWxlbWVudENvbnRleHRTdGF0ZSA9IFBlYkVsZW1lbnRDb250ZXh0U3RhdGU7XG5cbiAgZ2V0IGVsZW1lbnRzKCk6IHsgW2tleTogc3RyaW5nXTogSFRNTEVsZW1lbnR9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDogdGhpcy5uYXRpdmVFbGVtZW50LFxuICAgIH07XG4gIH1cblxuICBnZXQgbWFwcGVkU3R5bGVzKCkge1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIC8vIFRPRE86IEZpbHRlciBvdXQgbnVsbHNcbiAgICByZXR1cm4ge1xuICAgICAgaG9zdDoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgY29sb3I6IHRoaXMuc3R5bGVzLmNvbG9yLFxuICAgICAgICBmb250U2l6ZTogdGhpcy5zdHlsZXMuZm9udFNpemVcbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy5mb250U2l6ZSBhcyBudW1iZXIgKiBzY2FsZSkgKyAncHgnXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBsZWZ0OiB0aGlzLnN0eWxlcy5sZWZ0XG4gICAgICAgICAgPyAodGhpcy5zdHlsZXMubGVmdCBhcyBudW1iZXIgKiBzY2FsZSkgKyAncHgnXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICByaWdodDogdGhpcy5zdHlsZXMucmlnaHRcbiAgICAgICAgICA/ICh0aGlzLnN0eWxlcy5yaWdodCBhcyBudW1iZXIgKiBzY2FsZSkgKyAncHgnXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICB0b3A6IHRoaXMuc3R5bGVzLnRvXG4gICAgICAgICAgPyAodGhpcy5zdHlsZXMudG9wIGFzIG51bWJlciAqIHNjYWxlKSArICdweCdcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJvdHRvbTogdGhpcy5zdHlsZXMuYm90dG9tXG4gICAgICAgICAgPyAodGhpcy5zdHlsZXMuYm90dG9tIGFzIG51bWJlciAqIHNjYWxlKSArICdweCdcbiAgICAgICAgICA6IG51bGwsXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmludGVyYWN0KHsgdHlwZTogJ2xvZ28uY2xpY2snIH0pO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb250ZXh0LnN0YXRlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuTG9hZGluZ1wiPkxvYWRpbmcuLi48L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiUGViRWxlbWVudENvbnRleHRTdGF0ZS5FcnJvclwiPkVycm9yPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlBlYkVsZW1lbnRDb250ZXh0U3RhdGUuRW1wdHlcIj5FbXB0eTwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJQZWJFbGVtZW50Q29udGV4dFN0YXRlLlJlYWR5XCI+XG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgIDxpbWcgW3NyY109XCJjb250ZXh0LmRhdGEubG9nb1VybFwiIFthbHRdPVwiY29udGV4dC5kYXRhLm5hbWVcIiAvPlxuICAgICAgPGgxPnt7IGNvbnRleHQuZGF0YS5uYW1lIH19PC9oMT5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==