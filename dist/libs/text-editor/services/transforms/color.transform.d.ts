import { Transform } from '../../types/transform';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export declare class ColorTransform extends BaseTransform implements Transform {
    set value(value: string);
    get value(): string;
    static ɵfac: i0.ɵɵFactoryDef<ColorTransform>;
    static ɵprov: i0.ɵɵInjectableDef<ColorTransform>;
}
