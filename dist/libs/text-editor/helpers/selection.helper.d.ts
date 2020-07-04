import { EditorSelection } from '../text-editor.interface';
export declare const isSafari: boolean;
export declare class SelectionHelper {
    get(container: Element): EditorSelection;
    restore(savedSelection: EditorSelection): void;
    findParentTag(selection: Selection, tagName?: string, className?: string, searchDepth?: number): HTMLElement | null;
}
