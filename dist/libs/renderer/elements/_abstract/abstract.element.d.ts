import { RenderFunctionType } from './../../renderer.tokens';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, Injector, OnChanges, OnDestroy, QueryList } from '@angular/core';
import { PebRendererChildrenSlotDirective } from '../../selectors/children-slot.directive';
import { RenderChildsFunctionType } from '../../renderer.tokens';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';
import { PebRendererOptions } from '../../renderer.types';
import { PebElement, PebElementStyles, PebStylesheet, PebElementContext } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare abstract class PebAbstractElement implements AfterViewInit, OnChanges, OnDestroy {
    private renderElement;
    private renderElementChilds;
    private interactionEmitter;
    private stylesheet;
    private parentCmp;
    protected injector: Injector;
    private elementRef;
    private renderer;
    sanitizer: DomSanitizer;
    cdr: ChangeDetectorRef;
    element: PebElement;
    styles: PebElementStyles;
    context: PebElementContext<any>;
    options: PebRendererOptions;
    /** @deprecated: dev only. do not use or rely on */
    selected: boolean;
    destroy$: Subject<boolean>;
    childSlots: QueryList<PebRendererChildrenSlotDirective>;
    constructor(renderElement: RenderFunctionType, renderElementChilds: RenderChildsFunctionType, interactionEmitter: EventEmitter<any>, stylesheet: PebStylesheet, parentCmp: PebAbstractElement, injector: Injector, elementRef: ElementRef, renderer: Renderer2, sanitizer: DomSanitizer, cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    renderChildren(): void;
    get parent(): any;
    get nativeElement(): any;
    protected abstract get elements(): {
        [key: string]: HTMLElement | HTMLElement[];
    };
    protected abstract get mappedStyles(): any;
    applyStyles(): void;
    interact(payload: any): void;
    get attrElementId(): string;
    static ɵfac: i0.ɵɵFactoryDef<PebAbstractElement>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebAbstractElement, "peb-element-abstract", never, { "element": "element"; "styles": "styles"; "context": "context"; "options": "options"; "selected": "selected"; }, {}, never>;
}
