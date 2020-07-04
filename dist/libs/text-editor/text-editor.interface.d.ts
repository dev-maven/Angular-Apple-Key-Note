export declare enum ExecCommand {
    CreateLink = "createLink",
    Unlink = "unlink",
    Bold = "bold",
    Italic = "italic",
    Underline = "underline",
    FontName = "fontName",
    FontSize = "fontSize",
    ForeColor = "foreColor",
    InsertHTML = "insertHTML",
    InsertText = "insertText",
    JustifyLeft = "justifyLeft",
    JustifyRight = "justifyRight",
    JustifyCenter = "justifyCenter",
    JustifyFull = "justifyFull",
    InsertOrderedList = "insertOrderedList",
    InsertUnorderedList = "insertUnorderedList"
}
export interface EditorSelection {
    start: number;
    end: number;
    range: Range;
    container: Element;
    parentElement: HTMLElement;
}
