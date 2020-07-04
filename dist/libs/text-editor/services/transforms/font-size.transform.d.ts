import { Transform } from '../../types/transform';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export declare class FontSizeTransform extends BaseTransform implements Transform {
    private selection;
    constructor(selection: TextEditorSelection);
    set value(value: number);
    get value(): number;
    static ɵfac: i0.ɵɵFactoryDef<FontSizeTransform>;
    static ɵprov: i0.ɵɵInjectableDef<FontSizeTransform>;
}
