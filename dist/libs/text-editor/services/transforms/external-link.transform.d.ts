import { Transform } from '../../types/transform';
import { TextEditorSelection } from '../selection.service';
import { BaseTransform } from './base.transform';
import * as i0 from "@angular/core";
export declare class ExternalLinkTransform extends BaseTransform implements Transform {
    private selection;
    constructor(selection: TextEditorSelection);
    set value(value: string);
    get value(): string;
    private link;
    getParentLinkElement(): HTMLElement;
    getLinkWithHttps(link: string): string;
    private unlink;
    static ɵfac: i0.ɵɵFactoryDef<ExternalLinkTransform>;
    static ɵprov: i0.ɵɵInjectableDef<ExternalLinkTransform>;
}
