import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
    SafeHtmlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInBpcGVzL3NhZmUtaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRXpEO0lBS0Usc0JBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBRyxDQUFDO0lBQy9DLGdDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDOzRFQUxVLFlBQVk7bUVBQVosWUFBWTt1QkFOekI7Q0FhQyxBQVZELElBVUM7U0FQWSxZQUFZO2tEQUFaLFlBQVk7Y0FIeEIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxVQUFVO2FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3NhZmVIdG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTYWZlSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplZDogRG9tU2FuaXRpemVyKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gIH1cblxufVxuIl19