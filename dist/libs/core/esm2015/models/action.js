export var PebEffectTarget;
(function (PebEffectTarget) {
    PebEffectTarget["Shop"] = "shop";
    PebEffectTarget["Pages"] = "pages";
    PebEffectTarget["Templates"] = "templates";
    PebEffectTarget["Stylesheets"] = "stylesheets";
    PebEffectTarget["ContextSchemas"] = "contextSchemas";
})(PebEffectTarget || (PebEffectTarget = {}));
export var PebShopEffect;
(function (PebShopEffect) {
    PebShopEffect["Init"] = "shop:init";
    PebShopEffect["UpdateData"] = "shop:update-data";
    PebShopEffect["UpdatePages"] = "shop:update-pages";
    PebShopEffect["AppendPage"] = "shop:append-page";
    PebShopEffect["DeletePage"] = "shop:delete-page";
})(PebShopEffect || (PebShopEffect = {}));
export var PebPageEffect;
(function (PebPageEffect) {
    PebPageEffect["Create"] = "page:init";
    PebPageEffect["UpdateData"] = "page:update-data";
    PebPageEffect["Delete"] = "page:delete";
})(PebPageEffect || (PebPageEffect = {}));
export var PebTemplateEffect;
(function (PebTemplateEffect) {
    PebTemplateEffect["Init"] = "template:init";
    PebTemplateEffect["Destroy"] = "template:destroy";
    PebTemplateEffect["AppendElement"] = "template:append-element";
    PebTemplateEffect["UpdateElement"] = "template:update-element";
    PebTemplateEffect["RelocateElement"] = "template:relocate-element";
    PebTemplateEffect["DeleteElement"] = "template:delete-element";
})(PebTemplateEffect || (PebTemplateEffect = {}));
export var PebStylesheetEffect;
(function (PebStylesheetEffect) {
    PebStylesheetEffect["Init"] = "stylesheet:init";
    PebStylesheetEffect["Update"] = "stylesheet:update";
    PebStylesheetEffect["Delete"] = "stylesheet:delete";
})(PebStylesheetEffect || (PebStylesheetEffect = {}));
export var PebContextSchemaEffect;
(function (PebContextSchemaEffect) {
    PebContextSchemaEffect["Init"] = "context-schema:init";
    PebContextSchemaEffect["Update"] = "context-schema:update";
    PebContextSchemaEffect["Delete"] = "context-schema:delete";
})(PebContextSchemaEffect || (PebContextSchemaEffect = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItY29yZS8iLCJzb3VyY2VzIjpbIm1vZGVscy9hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBLE1BQU0sQ0FBTixJQUFZLGVBTVg7QUFORCxXQUFZLGVBQWU7SUFDekIsZ0NBQWEsQ0FBQTtJQUNiLGtDQUFlLENBQUE7SUFDZiwwQ0FBdUIsQ0FBQTtJQUN2Qiw4Q0FBMkIsQ0FBQTtJQUMzQixvREFBaUMsQ0FBQTtBQUNuQyxDQUFDLEVBTlcsZUFBZSxLQUFmLGVBQWUsUUFNMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxhQU1YO0FBTkQsV0FBWSxhQUFhO0lBQ3ZCLG1DQUFrQixDQUFBO0lBQ2xCLGdEQUErQixDQUFBO0lBQy9CLGtEQUFpQyxDQUFBO0lBQ2pDLGdEQUErQixDQUFBO0lBQy9CLGdEQUErQixDQUFBO0FBQ2pDLENBQUMsRUFOVyxhQUFhLEtBQWIsYUFBYSxRQU14QjtBQUVELE1BQU0sQ0FBTixJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIscUNBQW9CLENBQUE7SUFDcEIsZ0RBQStCLENBQUE7SUFDL0IsdUNBQXNCLENBQUE7QUFDeEIsQ0FBQyxFQUpXLGFBQWEsS0FBYixhQUFhLFFBSXhCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBT1g7QUFQRCxXQUFZLGlCQUFpQjtJQUMzQiwyQ0FBbUMsQ0FBQTtJQUNuQyxpREFBc0MsQ0FBQTtJQUN0Qyw4REFBNkMsQ0FBQTtJQUM3Qyw4REFBNkMsQ0FBQTtJQUM3QyxrRUFBK0MsQ0FBQTtJQUMvQyw4REFBNkMsQ0FBQTtBQUMvQyxDQUFDLEVBUFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQU81QjtBQUVELE1BQU0sQ0FBTixJQUFZLG1CQUlYO0FBSkQsV0FBWSxtQkFBbUI7SUFDN0IsK0NBQXdCLENBQUE7SUFDeEIsbURBQTRCLENBQUE7SUFDNUIsbURBQTRCLENBQUE7QUFDOUIsQ0FBQyxFQUpXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFJOUI7QUFFRCxNQUFNLENBQU4sSUFBWSxzQkFJWDtBQUpELFdBQVksc0JBQXNCO0lBQ2hDLHNEQUE0QixDQUFBO0lBQzVCLDBEQUFnQyxDQUFBO0lBQ2hDLDBEQUFnQyxDQUFBO0FBQ2xDLENBQUMsRUFKVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBSWpDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgUGViQWN0aW9uSWQgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGViQWN0aW9uIHtcbiAgaWQ6IFBlYkFjdGlvbklkO1xuICAvLyBUT0RPOiBhZGQgbmFtZVxuICBlZmZlY3RzOiBQZWJFZmZlY3RbXTtcbiAgY3JlYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBlYkVmZmVjdCB7XG4gIHR5cGU6IFBlYlNob3BFZmZlY3RcbiAgICB8IFBlYlBhZ2VFZmZlY3RcbiAgICB8IFBlYlRlbXBsYXRlRWZmZWN0XG4gICAgfCBQZWJTdHlsZXNoZWV0RWZmZWN0XG4gICAgfCBQZWJDb250ZXh0U2NoZW1hRWZmZWN0O1xuICB0YXJnZXQ6IHN0cmluZzsgLy8gZm9ybWF0OiBlbnRpdHlUeXBlOmVudGl0eUlkXG4gIHBheWxvYWQ6IGFueTtcbn1cblxuZXhwb3J0IGVudW0gUGViRWZmZWN0VGFyZ2V0IHtcbiAgU2hvcCA9ICdzaG9wJyxcbiAgUGFnZXMgPSAncGFnZXMnLFxuICBUZW1wbGF0ZXMgPSAndGVtcGxhdGVzJyxcbiAgU3R5bGVzaGVldHMgPSAnc3R5bGVzaGVldHMnLFxuICBDb250ZXh0U2NoZW1hcyA9ICdjb250ZXh0U2NoZW1hcycsXG59XG5cbmV4cG9ydCBlbnVtIFBlYlNob3BFZmZlY3Qge1xuICBJbml0ID0gJ3Nob3A6aW5pdCcsXG4gIFVwZGF0ZURhdGEgPSAnc2hvcDp1cGRhdGUtZGF0YScsXG4gIFVwZGF0ZVBhZ2VzID0gJ3Nob3A6dXBkYXRlLXBhZ2VzJyxcbiAgQXBwZW5kUGFnZSA9ICdzaG9wOmFwcGVuZC1wYWdlJyxcbiAgRGVsZXRlUGFnZSA9ICdzaG9wOmRlbGV0ZS1wYWdlJyxcbn1cblxuZXhwb3J0IGVudW0gUGViUGFnZUVmZmVjdCB7XG4gIENyZWF0ZSA9ICdwYWdlOmluaXQnLFxuICBVcGRhdGVEYXRhID0gJ3BhZ2U6dXBkYXRlLWRhdGEnLFxuICBEZWxldGUgPSAncGFnZTpkZWxldGUnLFxufVxuXG5leHBvcnQgZW51bSBQZWJUZW1wbGF0ZUVmZmVjdCB7XG4gIEluaXQgICAgICAgICAgICAgID0gJ3RlbXBsYXRlOmluaXQnLFxuICBEZXN0cm95ICAgICAgICAgICA9ICd0ZW1wbGF0ZTpkZXN0cm95JyxcbiAgQXBwZW5kRWxlbWVudCAgICAgPSAndGVtcGxhdGU6YXBwZW5kLWVsZW1lbnQnLFxuICBVcGRhdGVFbGVtZW50ICAgICA9ICd0ZW1wbGF0ZTp1cGRhdGUtZWxlbWVudCcsXG4gIFJlbG9jYXRlRWxlbWVudCAgID0gJ3RlbXBsYXRlOnJlbG9jYXRlLWVsZW1lbnQnLFxuICBEZWxldGVFbGVtZW50ICAgICA9ICd0ZW1wbGF0ZTpkZWxldGUtZWxlbWVudCcsXG59XG5cbmV4cG9ydCBlbnVtIFBlYlN0eWxlc2hlZXRFZmZlY3Qge1xuICBJbml0ID0gJ3N0eWxlc2hlZXQ6aW5pdCcsXG4gIFVwZGF0ZSA9ICdzdHlsZXNoZWV0OnVwZGF0ZScsXG4gIERlbGV0ZSA9ICdzdHlsZXNoZWV0OmRlbGV0ZScsXG59XG5cbmV4cG9ydCBlbnVtIFBlYkNvbnRleHRTY2hlbWFFZmZlY3Qge1xuICBJbml0ID0gJ2NvbnRleHQtc2NoZW1hOmluaXQnLFxuICBVcGRhdGUgPSAnY29udGV4dC1zY2hlbWE6dXBkYXRlJyxcbiAgRGVsZXRlID0gJ2NvbnRleHQtc2NoZW1hOmRlbGV0ZScsXG59XG4iXX0=