import { InjectionToken } from '@angular/core';
export var PebPageType;
(function (PebPageType) {
    PebPageType["Master"] = "master";
    PebPageType["Replica"] = "replica";
})(PebPageType || (PebPageType = {}));
export var PebPageVariant;
(function (PebPageVariant) {
    PebPageVariant["Front"] = "front";
    PebPageVariant["Default"] = "default";
    PebPageVariant["Category"] = "category";
    PebPageVariant["Product"] = "product";
})(PebPageVariant || (PebPageVariant = {}));
// TODO: move to a more suitable location
export var ContextService;
(function (ContextService) {
    ContextService["Company"] = "company";
    ContextService["Products"] = "products";
    ContextService["Shipments"] = "shipments";
})(ContextService || (ContextService = {}));
// TODO: move to a more suitable location
export const CONTEXT_SERVICES = {
    [ContextService.Company]: new InjectionToken('ContextServices.Company'),
    [ContextService.Products]: new InjectionToken('ContextServices.Products'),
    [ContextService.Shipments]: new InjectionToken('ContextServices.Shipments'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItY29yZS8iLCJzb3VyY2VzIjpbIm1vZGVscy9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTRCL0MsTUFBTSxDQUFOLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQixnQ0FBaUIsQ0FBQTtJQUNqQixrQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsV0FBVyxLQUFYLFdBQVcsUUFHdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxjQUtYO0FBTEQsV0FBWSxjQUFjO0lBQ3hCLGlDQUFlLENBQUE7SUFDZixxQ0FBbUIsQ0FBQTtJQUNuQix1Q0FBcUIsQ0FBQTtJQUNyQixxQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsY0FBYyxLQUFkLGNBQWMsUUFLekI7QUFxQ0QseUNBQXlDO0FBQ3pDLE1BQU0sQ0FBTixJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDeEIscUNBQW1CLENBQUE7SUFDbkIsdUNBQXFCLENBQUE7SUFDckIseUNBQXVCLENBQUE7QUFDekIsQ0FBQyxFQUpXLGNBQWMsS0FBZCxjQUFjLFFBSXpCO0FBRUQseUNBQXlDO0FBQ3pDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksY0FBYyxDQUFNLHlCQUF5QixDQUFDO0lBQzVFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksY0FBYyxDQUFNLDBCQUEwQixDQUFDO0lBQzlFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksY0FBYyxDQUFNLDJCQUEyQixDQUFDO0NBQ2pGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQZWJBY3Rpb25JZCB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCB7IFBlYkVsZW1lbnQsIFBlYkVsZW1lbnRUeXBlIH0gZnJvbSAnLi9lbGVtZW50JztcblxuZXhwb3J0IHR5cGUgUGViVGVtcGxhdGVJZCA9IHN0cmluZztcbmV4cG9ydCBpbnRlcmZhY2UgUGViVGVtcGxhdGUgZXh0ZW5kcyBQZWJFbGVtZW50IHtcbiAgdHlwZTogUGViRWxlbWVudFR5cGUuRG9jdW1lbnQ7XG59XG5cbmV4cG9ydCB0eXBlIFBlYlN0eWxlc2hlZXRJZCA9IHN0cmluZztcbmV4cG9ydCBpbnRlcmZhY2UgUGViU3R5bGVzaGVldCB7XG4gIFtzZWxlY3Rvcjogc3RyaW5nXTogUGViRWxlbWVudFN0eWxlcztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGViRWxlbWVudFN0eWxlcyB7XG4gIFtzdHlsZTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBQZWJDb250ZXh0U2NoZW1hSWQgPSBzdHJpbmc7XG5leHBvcnQgaW50ZXJmYWNlIENvbnRleHRTY2hlbWFJdGVtIHtcbiAgc2VydmljZTogc3RyaW5nO1xuICBtZXRob2Q6IHN0cmluZztcbiAgcGFyYW1zOiBhbnlbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGViQ29udGV4dFNjaGVtYSB7XG4gIFtrZXk6IHN0cmluZ106IENvbnRleHRTY2hlbWFJdGVtO1xufVxuXG5leHBvcnQgZW51bSBQZWJQYWdlVHlwZSB7XG4gIE1hc3RlciA9ICdtYXN0ZXInLFxuICBSZXBsaWNhID0gJ3JlcGxpY2EnLFxufVxuXG5leHBvcnQgZW51bSBQZWJQYWdlVmFyaWFudCB7XG4gIEZyb250ID0gJ2Zyb250JyxcbiAgRGVmYXVsdCA9ICdkZWZhdWx0JyxcbiAgQ2F0ZWdvcnkgPSAnY2F0ZWdvcnknLFxuICBQcm9kdWN0ID0gJ3Byb2R1Y3QnLFxufVxuXG5leHBvcnQgdHlwZSBQZWJQYWdlSWQgPSBzdHJpbmc7XG5leHBvcnQgaW50ZXJmYWNlIFBlYlBhZ2Uge1xuICBpZDogUGViUGFnZUlkO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhcmlhbnQ6IFBlYlBhZ2VWYXJpYW50O1xuICB0eXBlOiBQZWJQYWdlVHlwZTtcbiAgbWFzdGVyOiBudWxsIHwge1xuICAgIGlkOiBQZWJQYWdlSWQsXG4gICAgbGFzdEFjdGlvbklkOiBQZWJBY3Rpb25JZFxuICB9O1xuICBkYXRhOiB7XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIG1hcms/OiBzdHJpbmc7XG4gICAgcHJldmlldz86IHN0cmluZztcbiAgfTtcbiAgdGVtcGxhdGU6IFBlYlRlbXBsYXRlO1xuICBzdHlsZXNoZWV0czoge1xuICAgIFtzY3JlZW46IHN0cmluZ106IFBlYlN0eWxlc2hlZXQ7XG4gIH07XG4gIGNvbnRleHQ6IFBlYkNvbnRleHRTY2hlbWE7XG59XG5cbmV4cG9ydCB0eXBlIFBlYlNob3BJZCA9IHN0cmluZztcbmV4cG9ydCBpbnRlcmZhY2UgUGViU2hvcCB7XG4gIGlkOiBQZWJTaG9wSWQ7XG4gIGRhdGE6IHtcbiAgICBmcm9udFBhZ2VJZDogUGViUGFnZUlkO1xuICB9O1xuICByb3V0aW5nOiB7XG4gICAgW3VybDogc3RyaW5nXTogUGViUGFnZUlkO1xuICB9O1xuICBjb250ZXh0OiBQZWJDb250ZXh0U2NoZW1hO1xuICBwYWdlczogUGViUGFnZVtdO1xufVxuXG4vLyBUT0RPOiBtb3ZlIHRvIGEgbW9yZSBzdWl0YWJsZSBsb2NhdGlvblxuZXhwb3J0IGVudW0gQ29udGV4dFNlcnZpY2Uge1xuICBDb21wYW55ID0gJ2NvbXBhbnknLFxuICBQcm9kdWN0cyA9ICdwcm9kdWN0cycsXG4gIFNoaXBtZW50cyA9ICdzaGlwbWVudHMnLFxufVxuXG4vLyBUT0RPOiBtb3ZlIHRvIGEgbW9yZSBzdWl0YWJsZSBsb2NhdGlvblxuZXhwb3J0IGNvbnN0IENPTlRFWFRfU0VSVklDRVMgPSB7XG4gIFtDb250ZXh0U2VydmljZS5Db21wYW55XTogbmV3IEluamVjdGlvblRva2VuPGFueT4oJ0NvbnRleHRTZXJ2aWNlcy5Db21wYW55JyksXG4gIFtDb250ZXh0U2VydmljZS5Qcm9kdWN0c106IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdDb250ZXh0U2VydmljZXMuUHJvZHVjdHMnKSxcbiAgW0NvbnRleHRTZXJ2aWNlLlNoaXBtZW50c106IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdDb250ZXh0U2VydmljZXMuU2hpcG1lbnRzJyksXG59O1xuIl19