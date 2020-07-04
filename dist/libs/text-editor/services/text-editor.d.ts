import { Injector } from '@angular/core';
import { StateService } from './text-editor-state.service';
import { TextEditorSelection } from './selection.service';
import * as i0 from "@angular/core";
export declare class TextEditor {
    blockManager: StateService;
    selection: TextEditorSelection;
    protected injector: Injector;
    constructor(blockManager: StateService, selection: TextEditorSelection, injector: Injector);
    init(): void;
    static ɵfac: i0.ɵɵFactoryDef<TextEditor>;
    static ɵprov: i0.ɵɵInjectableDef<TextEditor>;
}
