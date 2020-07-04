import { __read, __spread } from "tslib";
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
var AVAILABLE_ELEMENTS_SET = [
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
var ICONS = [
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
export var AVAILABLE_ELEMENTS_MAP = {
    document: PebDocumentElement,
    section: PebSectionElement,
    block: PebBlockElement,
    text: PebTextElement,
    line: PebLineElement
    // TODO: add remaining elements
};
var PebRendererModule = /** @class */ (function () {
    function PebRendererModule() {
    }
    PebRendererModule.forRoot = function (config) {
        return {
            ngModule: PebRendererModule,
            providers: [
                {
                    provide: 'RENDERER_CONFIG',
                    useValue: config,
                },
            ],
        };
    };
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
    return PebRendererModule;
}());
export { PebRendererModule };
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
                declarations: __spread([
                    PebRendererComponent,
                    PebRendererChildrenSlotDirective
                ], ICONS, AVAILABLE_ELEMENTS_SET),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItcmVuZGVyZXIvIiwic291cmNlcyI6WyJyZW5kZXJlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSwyQkFBMkIsRUFBNkIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDaEgs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NEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLHFCQUFxQjtRQUNyQixzQkFBc0IsYUE4QnBCLFlBQVksYUEwQlosb0JBQW9CO2tEQUdYLGlCQUFpQjtjQS9CN0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVk7b0JBQ1Ysb0JBQW9CO29CQUNwQixnQ0FBZ0M7bUJBRTdCLEtBQUssRUFDTCxzQkFBc0IsQ0FDMUI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSwyQkFBMkI7d0JBQ3BDLFFBQVEsRUFBRSxzQkFBc0I7cUJBQ2pDO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxtQkFBbUI7d0JBQzVCLFFBQVEsRUFBRTs0QkFDUixVQUFVLEVBQUU7Z0NBQ1YsT0FBTyxFQUFFLElBQUk7Z0NBQ2IsTUFBTSxFQUFFLEdBQUc7Z0NBQ1gsTUFBTSxFQUFFLEdBQUc7NkJBQ1o7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtpQkFDckI7YUFDRjs7dUJBaEVDLHNCQUFzQixHQXVDcEIsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQTlCbEMsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0lBN0JkLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFFZCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUVoQixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbVBhaXJzIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuaW1wb3J0IHsgUGViUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuL3Jvb3QvcmVuZGVyZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBlYlJlbmRlcmVyQ2hpbGRyZW5TbG90RGlyZWN0aXZlIH0gZnJvbSAnLi9zZWxlY3RvcnMvY2hpbGRyZW4tc2xvdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUGViRG9jdW1lbnRFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9nZW5lcmFsL2RvY3VtZW50L2RvY3VtZW50LmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViU2VjdGlvbkVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL2dlbmVyYWwvc2VjdGlvbi9zZWN0aW9uLmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViQmxvY2tFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9nZW5lcmFsL2Jsb2NrL2Jsb2NrLmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViVGV4dEVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL2dlbmVyYWwvdGV4dC90ZXh0LmVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0SXZ5Q29tcG9uZW50U2VsZWN0b3IgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEVsZW1lbnRDb21wb25lbnRzQ29sbGVjdGlvbiwgTWFrZXJDb21wb25lbnRzQ29sbGVjdGlvbiB9IGZyb20gJy4vcmVuZGVyZXIudG9rZW5zJztcbmltcG9ydCB7IFBlYkdyaWRFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9nZW5lcmFsL2dyaWQvZ3JpZC5lbGVtZW50JztcbmltcG9ydCB7IFBlYkJ1c2luZXNzTG9nb0VsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL2NvbXBhbnkvbG9nby9sb2dvLmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViU2hvcENhcnRFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9zaG9wL2NhcnQvY2FydC5lbGVtZW50JztcbmltcG9ydCB7IFBlYk5hdmJhckVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL2NvbXBhbnkvbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGViU2hvcENhdGVnb3J5RWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS5lbGVtZW50JztcbmltcG9ydCB7IFBlYlNob3BQcm9kdWN0c0VsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL3Nob3AvcHJvZHVjdHMvcHJvZHVjdHMuZWxlbWVudCc7XG5pbXBvcnQgeyBQZWJTaG9wUHJvZHVjdEVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL3Nob3AvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViU2hvcENhdGVnb3J5SGVhZGVyRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS1oZWFkZXIvY2F0ZWdvcnktaGVhZGVyLmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViU2hvcENhdGVnb3J5TmF2YmFyRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvc2hvcC9jYXRlZ29yeS9jYXRlZ29yeS1uYXZiYXIvY2F0ZWdvcnktbmF2YmFyLmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViU2hvcENhdGVnb3J5RmlsdGVyc0VsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL3Nob3AvY2F0ZWdvcnkvY2F0ZWdvcnktZmlsdGVycy9jYXRlZ29yeS1maWx0ZXJzLmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViU2hvcENhdGVnb3J5UHJvZHVjdEVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL3Nob3AvY2F0ZWdvcnkvY2F0ZWdvcnktcHJvZHVjdC9jYXRlZ29yeS1wcm9kdWN0LmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViUHJvZHVjdEljb24gfSBmcm9tICcuL2VsZW1lbnRzL2ljb25zL3Byb2R1Y3QuaWNvbic7XG5pbXBvcnQgeyBQZWJQbHVzSWNvbiB9IGZyb20gJy4vZWxlbWVudHMvaWNvbnMvcGx1cy5pY29uJztcbmltcG9ydCB7IFBlYkZpbHRlcnNJY29uIH0gZnJvbSAnLi9lbGVtZW50cy9pY29ucy9maWx0ZXJzLmljb24nO1xuaW1wb3J0IHsgUGViQnV0dG9uRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvZ2VuZXJhbC9idXR0b24vYnV0dG9uLmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViSW1hZ2VFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9nZW5lcmFsL2ltYWdlL2ltYWdlLmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViVmlkZW9FbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9nZW5lcmFsL3ZpZGVvL3ZpZGVvLmVsZW1lbnQnO1xuaW1wb3J0IHsgUGViTGluZUVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL2dlbmVyYWwvbGluZS9saW5lLmVsZW1lbnQnO1xuXG5jb25zdCBBVkFJTEFCTEVfRUxFTUVOVFNfU0VUID0gW1xuICAvLyBHZW5lcmFsXG4gIFBlYkRvY3VtZW50RWxlbWVudCxcbiAgUGViU2VjdGlvbkVsZW1lbnQsXG4gIFBlYkJsb2NrRWxlbWVudCxcbiAgUGViVGV4dEVsZW1lbnQsXG4gIFBlYkdyaWRFbGVtZW50LFxuICBQZWJCdXR0b25FbGVtZW50LFxuICBQZWJJbWFnZUVsZW1lbnQsXG4gIFBlYlZpZGVvRWxlbWVudCxcbiAgUGViTGluZUVsZW1lbnQsXG5cbiAgLy8gQnVzaW5lc3NcbiAgUGViQnVzaW5lc3NMb2dvRWxlbWVudCxcbiAgUGViTmF2YmFyRWxlbWVudCxcblxuICAvLyBTaG9wXG4gIFBlYlNob3BDYXJ0RWxlbWVudCxcbiAgUGViU2hvcENhdGVnb3J5RWxlbWVudCxcbiAgUGViU2hvcENhdGVnb3J5SGVhZGVyRWxlbWVudCxcbiAgUGViU2hvcENhdGVnb3J5TmF2YmFyRWxlbWVudCxcbiAgUGViU2hvcENhdGVnb3J5RmlsdGVyc0VsZW1lbnQsXG4gIFBlYlNob3BDYXRlZ29yeVByb2R1Y3RFbGVtZW50LFxuICBQZWJTaG9wUHJvZHVjdEVsZW1lbnQsXG4gIFBlYlNob3BQcm9kdWN0c0VsZW1lbnQsXG5dO1xuXG5jb25zdCBJQ09OUyA9IFtcbiAgUGViUHJvZHVjdEljb24sXG4gIFBlYlBsdXNJY29uLFxuICBQZWJGaWx0ZXJzSWNvbixcbl07XG5cbi8vIFRPRE86IEFkZCBjaGVjayBmb3IgZWxlbWVudCBzZWxlY3RvcnMgdG8gYmUgdW5pcXVlXG4vLyBjb21tZW50ZWQgYmVjYXVzZSBkb2Vzbid0IHdvcmsgd2l0aCAtLXByb2Qga2V5XG4vLyBjb25zdCBBVkFJTEFCTEVfRUxFTUVOVFNfTUFQID0gZnJvbVBhaXJzKFxuLy8gICBBVkFJTEFCTEVfRUxFTUVOVFNfU0VULm1hcChcbi8vICAgICBjbXAgPT4gW1xuLy8gICAgICAgZ2V0SXZ5Q29tcG9uZW50U2VsZWN0b3IoY21wKS5yZXBsYWNlKCdwZWItZWxlbWVudC0nLCAnJykgYXMgUGViRWxlbWVudFR5cGUsXG4vLyAgICAgICBjbXAsXG4vLyAgICAgXVxuLy8gICApXG4vLyApO1xuZXhwb3J0IGNvbnN0IEFWQUlMQUJMRV9FTEVNRU5UU19NQVAgPSB7XG4gIGRvY3VtZW50OiBQZWJEb2N1bWVudEVsZW1lbnQsXG4gIHNlY3Rpb246IFBlYlNlY3Rpb25FbGVtZW50LFxuICBibG9jazogUGViQmxvY2tFbGVtZW50LFxuICB0ZXh0OiBQZWJUZXh0RWxlbWVudCxcbiAgbGluZTogUGViTGluZUVsZW1lbnRcbiAgLy8gVE9ETzogYWRkIHJlbWFpbmluZyBlbGVtZW50c1xufTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGViUmVuZGVyZXJDb21wb25lbnQsXG4gICAgUGViUmVuZGVyZXJDaGlsZHJlblNsb3REaXJlY3RpdmUsXG5cbiAgICAuLi5JQ09OUyxcbiAgICAuLi5BVkFJTEFCTEVfRUxFTUVOVFNfU0VULFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBFbGVtZW50Q29tcG9uZW50c0NvbGxlY3Rpb24sXG4gICAgICB1c2VWYWx1ZTogQVZBSUxBQkxFX0VMRU1FTlRTX01BUCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6ICdSRU5ERVJFUl9TRVRUSU5HUycsXG4gICAgICB1c2VWYWx1ZToge1xuICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgZGVza3RvcDogMTI4MCxcbiAgICAgICAgICB0YWJsZXQ6IDc2OCxcbiAgICAgICAgICBtb2JpbGU6IDM2MCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFBlYlJlbmRlcmVyQ29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBlYlJlbmRlcmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxQZWJSZW5kZXJlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUGViUmVuZGVyZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdSRU5ERVJFUl9DT05GSUcnLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==