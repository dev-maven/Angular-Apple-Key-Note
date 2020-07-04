import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SafeHtmlPipe implements PipeTransform {
    private sanitized;
    constructor(sanitized: DomSanitizer);
    transform(value: string): import("@angular/platform-browser").SafeHtml;
    static ɵfac: i0.ɵɵFactoryDef<SafeHtmlPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SafeHtmlPipe, "safeHtml">;
}
