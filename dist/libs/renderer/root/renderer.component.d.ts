import { AfterViewInit, ComponentFactoryResolver, EventEmitter, Injector, OnChanges, ViewContainerRef, ComponentRef, ElementRef, OnInit, SimpleChanges } from '@angular/core';
import { PebElementId, PebScreen, PebElement } from '@pe/builder-core';
import { PebAbstractElement } from '../elements/_abstract/abstract.element';
import { PebRendererOptions } from '../renderer.types';
import { PebContext, PebStylesheet } from '../core.types';
import { BehaviorSubject } from 'rxjs';
import { AbstractComponent } from '@pe/builder-core';
import * as i0 from "@angular/core";
export declare class PebRendererComponent extends AbstractComponent implements OnChanges, AfterViewInit, OnInit {
    private elementRef;
    private injector;
    private cfr;
    private elementsCollection;
    element: PebElement;
    stylesheet: PebStylesheet;
    context: PebContext;
    options: PebRendererOptions;
    set setOptionsScale(scale: number);
    set setOptionsScreen(screen: PebScreen);
    set setOptionsLocal(locale: string);
    modifiedElement: BehaviorSubject<{
        id: string;
        cmpRef: ComponentRef<PebAbstractElement>;
    }>;
    rendered: EventEmitter<any>;
    interacted: EventEmitter<any>;
    mainSlot: ViewContainerRef;
    idsToRender: PebElementId[];
    registrySlot: Map<PebElementId, ViewContainerRef>;
    registry: Map<PebElementId, PebAbstractElement>;
    registryAbstract: Map<PebElementId, ComponentRef<PebAbstractElement>>;
    private treeVariablesChanges$;
    private makerId$;
    screenThresholds: {
        desktop: number;
        tablet: number;
        mobile: number;
    };
    constructor(elementRef: ElementRef, injector: Injector, cfr: ComponentFactoryResolver, elementsCollection: any[]);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    get nativeElement(): any;
    private createSlot;
    private getDifferenceVariables;
    private generateHash;
    private checkTreeVariables;
    private render;
    private updateStylesAndContext;
    private renderElementChilds;
    private renderElement;
    private onRenderingComplete;
    get stylesWidth(): string;
    static ɵfac: i0.ɵɵFactoryDef<PebRendererComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PebRendererComponent, "peb-renderer", never, { "element": "element"; "stylesheet": "stylesheet"; "context": "context"; "options": "options"; "setOptionsScale": "options.scale"; "setOptionsScreen": "options.screen"; "setOptionsLocal": "options.locale"; "modifiedElement": "modifiedElement"; }, { "rendered": "rendered"; "interacted": "interacted"; }, never>;
}
