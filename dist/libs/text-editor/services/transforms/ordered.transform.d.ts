import { Transform } from '../../types/transform';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export declare class OrderedTransform extends BaseTransform implements Transform {
    apply(currentValue: string): string | void;
    get value(): boolean;
    /**
     * Remove ordered list needs to be manually (issue on return to the previous value).
     *
     * @param currentValue Current text widget value.
     */
    removeTransformList(currentValue: string): string;
    static ɵfac: i0.ɵɵFactoryDef<OrderedTransform>;
    static ɵprov: i0.ɵɵInjectableDef<OrderedTransform>;
}
