import { Observable } from 'rxjs';
import { SelectionHelper } from '../helpers/selection.helper';
import { EditorSelection } from '../text-editor.interface';
import * as i0 from "@angular/core";
export declare class TextEditorSelection {
    private selectionHelper;
    constructor(selectionHelper: SelectionHelper);
    private readonly savedValueSubject;
    savedValue$: Observable<EditorSelection>;
    get savedValue(): EditorSelection;
    set savedValue(selection: EditorSelection);
    saveSelection(selection: EditorSelection): void;
    getSelection(container: Element): EditorSelection;
    restore(): void;
    expandToTag(element: HTMLElement): void;
    findParentTag(tagName: string): HTMLElement | null;
    static ɵfac: i0.ɵɵFactoryDef<TextEditorSelection>;
    static ɵprov: i0.ɵɵInjectableDef<TextEditorSelection>;
}
