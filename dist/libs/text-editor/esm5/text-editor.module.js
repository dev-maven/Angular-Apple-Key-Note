import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextEditorElementDirective } from './components/editor-element.directive';
import { TextEditorComponent } from './components/text-editor.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { TextEditor } from './services/text-editor';
import { StateService } from './services/text-editor-state.service';
import { TextEditorSelection } from './services/selection.service';
import { BoldTransform } from './services/transforms/bold.transform';
import { ColorTransform } from './services/transforms/color.transform';
import { FontFamilyTransform } from './services/transforms/font-family.transform';
import { FontSizeTransform } from './services/transforms/font-size.transform';
import { ItalicTransform } from './services/transforms/italic.transform';
import { LinkTransform } from './services/transforms/link.transform';
import { ExternalLinkTransform } from './services/transforms/external-link.transform';
import { UnderlineTransform } from './services/transforms/underline.transform';
import { SelectionHelper } from './helpers/selection.helper';
import { JustifyCenterTransform } from './services/transforms/justify-center.transform';
import { JustifyLeftTransform } from './services/transforms/justify-left.transform';
import { JustifyRightTransform } from './services/transforms/justify-right.transform';
import { JustifyFullTransform } from './services/transforms/justify-full.transform';
import { UnorderedTransform } from './services/transforms/unordered.transform';
import { OrderedTransform } from './services/transforms/ordered.transform';
import * as i0 from "@angular/core";
var providers = [
    TextEditor,
    StateService,
    TextEditorSelection,
    BoldTransform,
    ColorTransform,
    FontFamilyTransform,
    FontSizeTransform,
    ItalicTransform,
    LinkTransform,
    ExternalLinkTransform,
    UnderlineTransform,
    JustifyCenterTransform,
    JustifyLeftTransform,
    JustifyRightTransform,
    JustifyFullTransform,
    UnorderedTransform,
    OrderedTransform,
    SelectionHelper,
    TextEditorComponent,
];
var PebTextEditorModule = /** @class */ (function () {
    function PebTextEditorModule() {
    }
    PebTextEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: PebTextEditorModule });
    PebTextEditorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PebTextEditorModule_Factory(t) { return new (t || PebTextEditorModule)(); }, providers: providers, imports: [[
                CommonModule,
            ]] });
    return PebTextEditorModule;
}());
export { PebTextEditorModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PebTextEditorModule, { declarations: [TextEditorComponent,
        TextEditorElementDirective,
        SafeHtmlPipe], imports: [CommonModule], exports: [TextEditorComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebTextEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TextEditorComponent,
                    TextEditorElementDirective,
                    SafeHtmlPipe,
                ],
                imports: [
                    CommonModule,
                ],
                providers: providers,
                exports: [TextEditorComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItdGV4dC1lZGl0b3IvIiwic291cmNlcyI6WyJ0ZXh0LWVkaXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFFM0UsSUFBTSxTQUFTLEdBQUc7SUFDaEIsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3BCLENBQUM7QUFFRjtJQUFBO0tBbUJDOzJEQVBZLG1CQUFtQjt5SEFBbkIsbUJBQW1CLG1CQUg5QixTQUFTLFlBSEE7Z0JBQ1AsWUFBWTthQUNiOzhCQXRESDtDQWlFQyxBQW5CRCxJQW1CQztTQVBZLG1CQUFtQjt3RkFBbkIsbUJBQW1CLG1CQVY1QixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLFlBQVksYUFHWixZQUFZLGFBR0osbUJBQW1CO2tEQUVsQixtQkFBbUI7Y0FaL0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLDBCQUEwQjtvQkFDMUIsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxTQUFTLFdBQUE7Z0JBQ1QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRFZGl0b3JFbGVtZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL2VkaXRvci1lbGVtZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZXh0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYWZlSHRtbFBpcGUgfSBmcm9tICcuL3BpcGVzL3NhZmUtaHRtbC5waXBlJztcbmltcG9ydCB7IFRleHRFZGl0b3IgfSBmcm9tICcuL3NlcnZpY2VzL3RleHQtZWRpdG9yJztcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGV4dC1lZGl0b3Itc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBUZXh0RWRpdG9yU2VsZWN0aW9uIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWxlY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBCb2xkVHJhbnNmb3JtIH0gZnJvbSAnLi9zZXJ2aWNlcy90cmFuc2Zvcm1zL2JvbGQudHJhbnNmb3JtJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtIH0gZnJvbSAnLi9zZXJ2aWNlcy90cmFuc2Zvcm1zL2NvbG9yLnRyYW5zZm9ybSc7XG5pbXBvcnQgeyBGb250RmFtaWx5VHJhbnNmb3JtIH0gZnJvbSAnLi9zZXJ2aWNlcy90cmFuc2Zvcm1zL2ZvbnQtZmFtaWx5LnRyYW5zZm9ybSc7XG5pbXBvcnQgeyBGb250U2l6ZVRyYW5zZm9ybSB9IGZyb20gJy4vc2VydmljZXMvdHJhbnNmb3Jtcy9mb250LXNpemUudHJhbnNmb3JtJztcbmltcG9ydCB7IEl0YWxpY1RyYW5zZm9ybSB9IGZyb20gJy4vc2VydmljZXMvdHJhbnNmb3Jtcy9pdGFsaWMudHJhbnNmb3JtJztcbmltcG9ydCB7IExpbmtUcmFuc2Zvcm0gfSBmcm9tICcuL3NlcnZpY2VzL3RyYW5zZm9ybXMvbGluay50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRXh0ZXJuYWxMaW5rVHJhbnNmb3JtIH0gZnJvbSAnLi9zZXJ2aWNlcy90cmFuc2Zvcm1zL2V4dGVybmFsLWxpbmsudHJhbnNmb3JtJztcbmltcG9ydCB7IFVuZGVybGluZVRyYW5zZm9ybSB9IGZyb20gJy4vc2VydmljZXMvdHJhbnNmb3Jtcy91bmRlcmxpbmUudHJhbnNmb3JtJztcbmltcG9ydCB7IFNlbGVjdGlvbkhlbHBlciB9IGZyb20gJy4vaGVscGVycy9zZWxlY3Rpb24uaGVscGVyJztcbmltcG9ydCB7IEp1c3RpZnlDZW50ZXJUcmFuc2Zvcm0gfSBmcm9tICcuL3NlcnZpY2VzL3RyYW5zZm9ybXMvanVzdGlmeS1jZW50ZXIudHJhbnNmb3JtJztcbmltcG9ydCB7IEp1c3RpZnlMZWZ0VHJhbnNmb3JtIH0gZnJvbSAnLi9zZXJ2aWNlcy90cmFuc2Zvcm1zL2p1c3RpZnktbGVmdC50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgSnVzdGlmeVJpZ2h0VHJhbnNmb3JtIH0gZnJvbSAnLi9zZXJ2aWNlcy90cmFuc2Zvcm1zL2p1c3RpZnktcmlnaHQudHJhbnNmb3JtJztcbmltcG9ydCB7IEp1c3RpZnlGdWxsVHJhbnNmb3JtIH0gZnJvbSAnLi9zZXJ2aWNlcy90cmFuc2Zvcm1zL2p1c3RpZnktZnVsbC50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgVW5vcmRlcmVkVHJhbnNmb3JtIH0gZnJvbSAnLi9zZXJ2aWNlcy90cmFuc2Zvcm1zL3Vub3JkZXJlZC50cmFuc2Zvcm0nO1xuaW1wb3J0IHsgT3JkZXJlZFRyYW5zZm9ybSB9IGZyb20gJy4vc2VydmljZXMvdHJhbnNmb3Jtcy9vcmRlcmVkLnRyYW5zZm9ybSc7XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcbiAgVGV4dEVkaXRvcixcbiAgU3RhdGVTZXJ2aWNlLFxuICBUZXh0RWRpdG9yU2VsZWN0aW9uLFxuICBCb2xkVHJhbnNmb3JtLFxuICBDb2xvclRyYW5zZm9ybSxcbiAgRm9udEZhbWlseVRyYW5zZm9ybSxcbiAgRm9udFNpemVUcmFuc2Zvcm0sXG4gIEl0YWxpY1RyYW5zZm9ybSxcbiAgTGlua1RyYW5zZm9ybSxcbiAgRXh0ZXJuYWxMaW5rVHJhbnNmb3JtLFxuICBVbmRlcmxpbmVUcmFuc2Zvcm0sXG4gIEp1c3RpZnlDZW50ZXJUcmFuc2Zvcm0sXG4gIEp1c3RpZnlMZWZ0VHJhbnNmb3JtLFxuICBKdXN0aWZ5UmlnaHRUcmFuc2Zvcm0sXG4gIEp1c3RpZnlGdWxsVHJhbnNmb3JtLFxuICBVbm9yZGVyZWRUcmFuc2Zvcm0sXG4gIE9yZGVyZWRUcmFuc2Zvcm0sXG4gIFNlbGVjdGlvbkhlbHBlcixcbiAgVGV4dEVkaXRvckNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRleHRFZGl0b3JDb21wb25lbnQsXG4gICAgVGV4dEVkaXRvckVsZW1lbnREaXJlY3RpdmUsXG4gICAgU2FmZUh0bWxQaXBlLFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnMsXG4gIGV4cG9ydHM6IFtUZXh0RWRpdG9yQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQZWJUZXh0RWRpdG9yTW9kdWxlIHtcbiAgLy8gc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIG5nTW9kdWxlOiBQZWJUZXh0RWRpdG9yTW9kdWxlLFxuICAvLyAgICAgcHJvdmlkZXJzLFxuICAvLyAgIH07XG4gIC8vIH1cbn1cbiJdfQ==