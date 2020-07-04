import { Transform } from '../../types/transform';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export declare class UnorderedTransform extends BaseTransform implements Transform {
    apply(currentValue: string): string;
    get value(): boolean;
    /**
     * Remove unordered list needs to be manually (issue on return to the previous value).
     *
     * @param currentValue Current text widget value.
     */
    removeTransformList(currentValue: string): string;
    static ɵfac: i0.ɵɵFactoryDef<UnorderedTransform>;
    static ɵprov: i0.ɵɵInjectableDef<UnorderedTransform>;
}
