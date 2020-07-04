import { Injectable, Injector } from '@angular/core';
import { StateService } from './text-editor-state.service';
import { TextEditorSelection } from './selection.service';
import * as i0 from "@angular/core";
import * as i1 from "./text-editor-state.service";
import * as i2 from "./selection.service";
export class TextEditor {
    constructor(blockManager, selection, injector) {
        this.blockManager = blockManager;
        this.selection = selection;
        this.injector = injector;
    }
    init() {
        // super.init();
        // this.injector.get(TextEditorComponent);
        // this.initTransformations();
    }
}
TextEditor.ɵfac = function TextEditor_Factory(t) { return new (t || TextEditor)(i0.ɵɵinject(i1.StateService), i0.ɵɵinject(i2.TextEditorSelection), i0.ɵɵinject(i0.Injector)); };
TextEditor.ɵprov = i0.ɵɵdefineInjectable({ token: TextEditor, factory: TextEditor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextEditor, [{
        type: Injectable
    }], function () { return [{ type: i1.StateService }, { type: i2.TextEditorSelection }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RleHQtZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUcxRCxNQUFNLE9BQU8sVUFBVTtJQUVyQixZQUNTLFlBQTBCLEVBQzFCLFNBQThCLEVBQzNCLFFBQWtCO1FBRnJCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFFOUIsQ0FBQztJQUVELElBQUk7UUFDRixnQkFBZ0I7UUFDaEIsMENBQTBDO1FBQzFDLDhCQUE4QjtJQUNoQyxDQUFDOztvRUFiVSxVQUFVO2tEQUFWLFVBQVUsV0FBVixVQUFVO2tEQUFWLFVBQVU7Y0FEdEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RleHQtZWRpdG9yLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGV4dEVkaXRvclNlbGVjdGlvbiB9IGZyb20gJy4vc2VsZWN0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGV4dEVkaXRvciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGJsb2NrTWFuYWdlcjogU3RhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBzZWxlY3Rpb246IFRleHRFZGl0b3JTZWxlY3Rpb24sXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcixcbiAgKSB7XG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIC8vIHN1cGVyLmluaXQoKTtcbiAgICAvLyB0aGlzLmluamVjdG9yLmdldChUZXh0RWRpdG9yQ29tcG9uZW50KTtcbiAgICAvLyB0aGlzLmluaXRUcmFuc2Zvcm1hdGlvbnMoKTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgaW5pdFRyYW5zZm9ybWF0aW9ucygpIHtcbiAgICAvLyB0aGlzLnRyYW5zZm9ybWF0aW9uUmVnaXN0cnkuc2V0KCdpdGFsaWMnLCBuZXcgSW5saW5lSXRhbGljKCkpO1xuICAvLyB9XG59XG4iXX0=