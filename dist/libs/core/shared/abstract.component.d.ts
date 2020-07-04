import { OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class AbstractComponent implements OnDestroy {
    protected destroyed$: ReplaySubject<boolean>;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<AbstractComponent>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AbstractComponent, never, never, {}, {}, never>;
}
