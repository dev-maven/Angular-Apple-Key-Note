import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export class AbstractComponent {
    constructor() {
        this.destroyed$ = new ReplaySubject();
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
AbstractComponent.ɵfac = function AbstractComponent_Factory(t) { return new (t || AbstractComponent)(); };
AbstractComponent.ɵdir = i0.ɵɵdefineDirective({ type: AbstractComponent });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBlL2J1aWxkZXItY29yZS8iLCJzb3VyY2VzIjpbInNoYXJlZC9hYnN0cmFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFckMsTUFBTSxPQUFnQixpQkFBaUI7SUFBdkM7UUFFWSxlQUFVLEdBQUcsSUFBSSxhQUFhLEVBQVcsQ0FBQztLQU1yRDtJQUpDLFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7O2tGQVBtQixpQkFBaUI7c0RBQWpCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHByb3RlY3RlZCBkZXN0cm95ZWQkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19