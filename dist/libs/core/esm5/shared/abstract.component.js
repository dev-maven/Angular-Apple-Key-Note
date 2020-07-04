import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
var AbstractComponent = /** @class */ (function () {
    function AbstractComponent() {
        this.destroyed$ = new ReplaySubject();
    }
    AbstractComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    AbstractComponent.ɵfac = function AbstractComponent_Factory(t) { return new (t || AbstractComponent)(); };
    AbstractComponent.ɵdir = i0.ɵɵdefineDirective({ type: AbstractComponent });
    return AbstractComponent;
}());
export { AbstractComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItY29yZS8iLCJzb3VyY2VzIjpbInNoYXJlZC9hYnN0cmFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFckM7SUFBQTtRQUVZLGVBQVUsR0FBRyxJQUFJLGFBQWEsRUFBVyxDQUFDO0tBTXJEO0lBSkMsdUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztzRkFQbUIsaUJBQWlCOzBEQUFqQixpQkFBaUI7NEJBSHZDO0NBV0MsQUFSRCxJQVFDO1NBUnFCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHByb3RlY3RlZCBkZXN0cm95ZWQkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19