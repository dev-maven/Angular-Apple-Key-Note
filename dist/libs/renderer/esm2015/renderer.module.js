import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PebRendererComponent } from './root/renderer.component';
import { PebRendererChildrenSlotDirective } from './selectors/children-slot.directive';
import { PebDocumentElement } from './elements/general/document/document.element';
import { PebSectionElement } from './elements/general/section/section.element';
import { PebBlockElement } from './elements/general/block/block.element';
import { PebTextElement } from './elements/general/text/text.element';
import { ElementComponentsCollection } from './renderer.tokens';
import { PebGridElement } from './elements/general/grid/grid.element';
import { PebBusinessLogoElement } from './elements/company/logo/logo.element';
import { PebShopCartElement } from './elements/shop/cart/cart.element';
import { PebNavbarElement } from './elements/company/navbar/navbar.component';
import { PebShopCategoryElement } from './elements/shop/category/category.element';
import { PebShopProductsElement } from './elements/shop/products/products.element';
import { PebShopProductElement } from './elements/shop/products/product/product.element';
import { PebShopCategoryHeaderElement } from './elements/shop/category/category-header/category-header.element';
import { PebShopCategoryNavbarElement } from './elements/shop/category/category-navbar/category-navbar.element';
import { PebShopCategoryFiltersElement } from './elements/shop/category/category-filters/category-filters.element';
import { PebShopCategoryProductElement } from './elements/shop/category/category-product/category-product.element';
import { PebProductIcon } from './elements/icons/product.icon';
import { PebPlusIcon } from './elements/icons/plus.icon';
import { PebFiltersIcon } from './elements/icons/filters.icon';
import { PebButtonElement } from './elements/general/button/button.element';
import { PebImageElement } from './elements/general/image/image.element';
import { PebVideoElement } from './elements/general/video/video.element';
import { PebLineElement } from './elements/general/line/line.element';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const AVAILABLE_ELEMENTS_SET = [
    // General
    PebDocumentElement,
    PebSectionElement,
    PebBlockElement,
    PebTextElement,
    PebGridElement,
    PebButtonElement,
    PebImageElement,
    PebVideoElement,
    PebLineElement,
    // Business
    PebBusinessLogoElement,
    PebNavbarElement,
    // Shop
    PebShopCartElement,
    PebShopCategoryElement,
    PebShopCategoryHeaderElement,
    PebShopCategoryNavbarElement,
    PebShopCategoryFiltersElement,
    PebShopCategoryProductElement,
    PebShopProductElement,
    PebShopProductsElement,
];
const ICONS = [
    PebProductIcon,
    PebPlusIcon,
    PebFiltersIcon,
];
// TODO: Add check for element selectors to be unique
// commented because doesn't work with --prod key
// const AVAILABLE_ELEMENTS_MAP = fromPairs(
//   AVAILABLE_ELEMENTS_SET.map(
//     cmp => [
//       getIvyComponentSelector(cmp).replace('peb-element-', '') as PebElementType,
//       cmp,
//     ]
//   )
// );
export const AVAILABLE_ELEMENTS_MAP = {
    document: PebDocumentElement,
    section: PebSectionElement,
    block: PebBlockElement,
    text: PebTextElement,
    line: PebLineElement
    // TODO: add remaining elements
};
export class PebRendererModule {
    static forRoot(config) {
        return {
            ngModule: PebRendererModule,
            providers: [
                {
                    provide: 'RENDERER_CONFIG',
                    useValue: config,
                },
            ],
        };
    }
}
PebRendererModule.ɵmod = i0.ɵɵdefineNgModule({ type: PebRendererModule });
PebRendererModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PebRendererModule_Factory(t) { return new (t || PebRendererModule)(); }, providers: [
        {
            provide: ElementComponentsCollection,
            useValue: AVAILABLE_ELEMENTS_MAP,
        },
        {
            provide: 'RENDERER_SETTINGS',
            useValue: {
                dimensions: {
                    desktop: 1280,
                    tablet: 768,
                    mobile: 360,
                }
            }
        }
    ], imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PebRendererModule, { declarations: [PebRendererComponent,
        PebRendererChildrenSlotDirective,
        PebProductIcon,
        PebPlusIcon,
        PebFiltersIcon,
        // General
        PebDocumentElement,
        PebSectionElement,
        PebBlockElement,
        PebTextElement,
        PebGridElement,
        PebButtonElement,
        PebImageElement,
        PebVideoElement,
        PebLineElement,
        // Business
        PebBusinessLogoElement,
        PebNavbarElement,
        // Shop
        PebShopCartElement,
        PebShopCategoryElement,
        PebShopCategoryHeaderElement,
        PebShopCategoryNavbarElement,
        PebShopCategoryFiltersElement,
        PebShopCategoryProductElement,
        PebShopProductElement,
        PebShopProductsElement], imports: [CommonModule], exports: [PebRendererComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PebRendererModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    PebRendererComponent,
                    PebRendererChildrenSlotDirective,
                    ...ICONS,
                    ...AVAILABLE_ELEMENTS_SET,
                ],
                providers: [
                    {
                        provide: ElementComponentsCollection,
                        useValue: AVAILABLE_ELEMENTS_MAP,
                    },
                    {
                        provide: 'RENDERER_SETTINGS',
                        useValue: {
                            dimensions: {
                                desktop: 1280,
                                tablet: 768,
                                mobile: 360,
                            }
                        }
                    }
                ],
                exports: [
                    PebRendererComponent
                ],
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(PebShopCategoryElement, [PebRendererComponent,
    PebRendererChildrenSlotDirective,
    PebProductIcon,
    PebPlusIcon,
    PebFiltersIcon,
    // General
    PebDocumentElement,
    PebSectionElement,
    PebBlockElement,
    PebTextElement,
    PebGridElement,
    PebButtonElement,
    PebImageElement,
    PebVideoElement,
    PebLineElement,
    // Business
    PebBusinessLogoElement,
    PebNavbarElement,
    // Shop
    PebShopCartElement,
    PebShopCategoryElement,
    PebShopCategoryHeaderElement,
    PebShopCategoryNavbarElement,
    PebShopCategoryFiltersElement,
    PebShopCategoryProductElement,
    PebShopProductElement,
    PebShopProductsElement, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJyZW5kZXJlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFdEUsT0FBTyxFQUFFLDJCQUEyQixFQUE2QixNQUFNLG1CQUFtQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNoSCxP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QjtRQUM3Qiw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLHNCQUFzQixhQThCcEIsWUFBWSxhQTBCWixvQkFBb0I7a0RBR1gsaUJBQWlCO2NBL0I3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIsZ0NBQWdDO29CQUVoQyxHQUFHLEtBQUs7b0JBQ1IsR0FBRyxzQkFBc0I7aUJBQzFCO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsMkJBQTJCO3dCQUNwQyxRQUFRLEVBQUUsc0JBQXNCO3FCQUNqQztvQkFDRDt3QkFDRSxPQUFPLEVBQUUsbUJBQW1CO3dCQUM1QixRQUFRLEVBQUU7NEJBQ1IsVUFBVSxFQUFFO2dDQUNWLE9BQU8sRUFBRSxJQUFJO2dDQUNiLE1BQU0sRUFBRSxHQUFHO2dDQUNYLE1BQU0sRUFBRSxHQUFHOzZCQUNaO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7aUJBQ3JCO2FBQ0Y7O3VCQWhFQyxzQkFBc0IsR0F1Q3BCLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUE5QmxDLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQTdCZCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBRWQsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFFaEIsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21QYWlycyB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmltcG9ydCB7IFBlYlJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi9yb290L3JlbmRlcmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZWJSZW5kZXJlckNoaWxkcmVuU2xvdERpcmVjdGl2ZSB9IGZyb20gJy4vc2VsZWN0b3JzL2NoaWxkcmVuLXNsb3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBlYkRvY3VtZW50RWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvZ2VuZXJhbC9kb2N1bWVudC9kb2N1bWVudC5lbGVtZW50JztcbmltcG9ydCB7IFBlYlNlY3Rpb25FbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9nZW5lcmFsL3NlY3Rpb24vc2VjdGlvbi5lbGVtZW50JztcbmltcG9ydCB7IFBlYkJsb2NrRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvZ2VuZXJhbC9ibG9jay9ibG9jay5lbGVtZW50JztcbmltcG9ydCB7IFBlYlRleHRFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9nZW5lcmFsL3RleHQvdGV4dC5lbGVtZW50JztcbmltcG9ydCB7IGdldEl2eUNvbXBvbmVudFNlbGVjdG9yIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBFbGVtZW50Q29tcG9uZW50c0NvbGxlY3Rpb24sIE1ha2VyQ29tcG9uZW50c0NvbGxlY3Rpb24gfSBmcm9tICcuL3JlbmRlcmVyLnRva2Vucyc7XG5pbXBvcnQgeyBQZWJHcmlkRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvZ2VuZXJhbC9ncmlkL2dyaWQuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJCdXNpbmVzc0xvZ29FbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9jb21wYW55L2xvZ28vbG9nby5lbGVtZW50JztcbmltcG9ydCB7IFBlYlNob3BDYXJ0RWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvc2hvcC9jYXJ0L2NhcnQuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJOYXZiYXJFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9jb21wYW55L25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBlYlNob3BDYXRlZ29yeUVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL3Nob3AvY2F0ZWdvcnkvY2F0ZWdvcnkuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJTaG9wUHJvZHVjdHNFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9zaG9wL3Byb2R1Y3RzL3Byb2R1Y3RzLmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViU2hvcFByb2R1Y3RFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9zaG9wL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYlNob3BDYXRlZ29yeUhlYWRlckVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL3Nob3AvY2F0ZWdvcnkvY2F0ZWdvcnktaGVhZGVyL2NhdGVnb3J5LWhlYWRlci5lbGVtZW50JztcbmltcG9ydCB7IFBlYlNob3BDYXRlZ29yeU5hdmJhckVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL3Nob3AvY2F0ZWdvcnkvY2F0ZWdvcnktbmF2YmFyL2NhdGVnb3J5LW5hdmJhci5lbGVtZW50JztcbmltcG9ydCB7IFBlYlNob3BDYXRlZ29yeUZpbHRlcnNFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9zaG9wL2NhdGVnb3J5L2NhdGVnb3J5LWZpbHRlcnMvY2F0ZWdvcnktZmlsdGVycy5lbGVtZW50JztcbmltcG9ydCB7IFBlYlNob3BDYXRlZ29yeVByb2R1Y3RFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9zaG9wL2NhdGVnb3J5L2NhdGVnb3J5LXByb2R1Y3QvY2F0ZWdvcnktcHJvZHVjdC5lbGVtZW50JztcbmltcG9ydCB7IFBlYlByb2R1Y3RJY29uIH0gZnJvbSAnLi9lbGVtZW50cy9pY29ucy9wcm9kdWN0Lmljb24nO1xuaW1wb3J0IHsgUGViUGx1c0ljb24gfSBmcm9tICcuL2VsZW1lbnRzL2ljb25zL3BsdXMuaWNvbic7XG5pbXBvcnQgeyBQZWJGaWx0ZXJzSWNvbiB9IGZyb20gJy4vZWxlbWVudHMvaWNvbnMvZmlsdGVycy5pY29uJztcbmltcG9ydCB7IFBlYkJ1dHRvbkVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL2dlbmVyYWwvYnV0dG9uL2J1dHRvbi5lbGVtZW50JztcbmltcG9ydCB7IFBlYkltYWdlRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvZ2VuZXJhbC9pbWFnZS9pbWFnZS5lbGVtZW50JztcbmltcG9ydCB7IFBlYlZpZGVvRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvZ2VuZXJhbC92aWRlby92aWRlby5lbGVtZW50JztcbmltcG9ydCB7IFBlYkxpbmVFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9nZW5lcmFsL2xpbmUvbGluZS5lbGVtZW50JztcblxuY29uc3QgQVZBSUxBQkxFX0VMRU1FTlRTX1NFVCA9IFtcbiAgLy8gR2VuZXJhbFxuICBQZWJEb2N1bWVudEVsZW1lbnQsXG4gIFBlYlNlY3Rpb25FbGVtZW50LFxuICBQZWJCbG9ja0VsZW1lbnQsXG4gIFBlYlRleHRFbGVtZW50LFxuICBQZWJHcmlkRWxlbWVudCxcbiAgUGViQnV0dG9uRWxlbWVudCxcbiAgUGViSW1hZ2VFbGVtZW50LFxuICBQZWJWaWRlb0VsZW1lbnQsXG4gIFBlYkxpbmVFbGVtZW50LFxuXG4gIC8vIEJ1c2luZXNzXG4gIFBlYkJ1c2luZXNzTG9nb0VsZW1lbnQsXG4gIFBlYk5hdmJhckVsZW1lbnQsXG5cbiAgLy8gU2hvcFxuICBQZWJTaG9wQ2FydEVsZW1lbnQsXG4gIFBlYlNob3BDYXRlZ29yeUVsZW1lbnQsXG4gIFBlYlNob3BDYXRlZ29yeUhlYWRlckVsZW1lbnQsXG4gIFBlYlNob3BDYXRlZ29yeU5hdmJhckVsZW1lbnQsXG4gIFBlYlNob3BDYXRlZ29yeUZpbHRlcnNFbGVtZW50LFxuICBQZWJTaG9wQ2F0ZWdvcnlQcm9kdWN0RWxlbWVudCxcbiAgUGViU2hvcFByb2R1Y3RFbGVtZW50LFxuICBQZWJTaG9wUHJvZHVjdHNFbGVtZW50LFxuXTtcblxuY29uc3QgSUNPTlMgPSBbXG4gIFBlYlByb2R1Y3RJY29uLFxuICBQZWJQbHVzSWNvbixcbiAgUGViRmlsdGVyc0ljb24sXG5dO1xuXG4vLyBUT0RPOiBBZGQgY2hlY2sgZm9yIGVsZW1lbnQgc2VsZWN0b3JzIHRvIGJlIHVuaXF1ZVxuLy8gY29tbWVudGVkIGJlY2F1c2UgZG9lc24ndCB3b3JrIHdpdGggLS1wcm9kIGtleVxuLy8gY29uc3QgQVZBSUxBQkxFX0VMRU1FTlRTX01BUCA9IGZyb21QYWlycyhcbi8vICAgQVZBSUxBQkxFX0VMRU1FTlRTX1NFVC5tYXAoXG4vLyAgICAgY21wID0+IFtcbi8vICAgICAgIGdldEl2eUNvbXBvbmVudFNlbGVjdG9yKGNtcCkucmVwbGFjZSgncGViLWVsZW1lbnQtJywgJycpIGFzIFBlYkVsZW1lbnRUeXBlLFxuLy8gICAgICAgY21wLFxuLy8gICAgIF1cbi8vICAgKVxuLy8gKTtcbmV4cG9ydCBjb25zdCBBVkFJTEFCTEVfRUxFTUVOVFNfTUFQID0ge1xuICBkb2N1bWVudDogUGViRG9jdW1lbnRFbGVtZW50LFxuICBzZWN0aW9uOiBQZWJTZWN0aW9uRWxlbWVudCxcbiAgYmxvY2s6IFBlYkJsb2NrRWxlbWVudCxcbiAgdGV4dDogUGViVGV4dEVsZW1lbnQsXG4gIGxpbmU6IFBlYkxpbmVFbGVtZW50XG4gIC8vIFRPRE86IGFkZCByZW1haW5pbmcgZWxlbWVudHNcbn07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFBlYlJlbmRlcmVyQ29tcG9uZW50LFxuICAgIFBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90RGlyZWN0aXZlLFxuXG4gICAgLi4uSUNPTlMsXG4gICAgLi4uQVZBSUxBQkxFX0VMRU1FTlRTX1NFVCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogRWxlbWVudENvbXBvbmVudHNDb2xsZWN0aW9uLFxuICAgICAgdXNlVmFsdWU6IEFWQUlMQUJMRV9FTEVNRU5UU19NQVAsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiAnUkVOREVSRVJfU0VUVElOR1MnLFxuICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgIGRlc2t0b3A6IDEyODAsXG4gICAgICAgICAgdGFibGV0OiA3NjgsXG4gICAgICAgICAgbW9iaWxlOiAzNjAsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQZWJSZW5kZXJlckNvbXBvbmVudFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQZWJSZW5kZXJlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UGViUmVuZGVyZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFBlYlJlbmRlcmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnUkVOREVSRVJfQ09ORklHJyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=