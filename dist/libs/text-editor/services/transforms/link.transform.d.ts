import { Transform } from '../../types/transform';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export declare class LinkTransform extends BaseTransform implements Transform {
    private selection;
    constructor(selection: TextEditorSelection);
    set value(value: string);
    get value(): string;
    private link;
    private unlink;
    static ɵfac: i0.ɵɵFactoryDef<LinkTransform>;
    static ɵprov: i0.ɵɵInjectableDef<LinkTransform>;
}
