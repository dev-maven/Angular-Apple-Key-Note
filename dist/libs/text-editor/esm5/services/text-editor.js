import { Injectable, Injector } from '@angular/core';
import { StateService } from './text-editor-state.service';
import { TextEditorSelection } from './selection.service';
import * as i0 from "@angular/core";
import * as i1 from "./text-editor-state.service";
import * as i2 from "./selection.service";
var TextEditor = /** @class */ (function () {
    function TextEditor(blockManager, selection, injector) {
        this.blockManager = blockManager;
        this.selection = selection;
        this.injector = injector;
    }
    TextEditor.prototype.init = function () {
        // super.init();
        // this.injector.get(TextEditorComponent);
        // this.initTransformations();
    };
    TextEditor.ɵfac = function TextEditor_Factory(t) { return new (t || TextEditor)(i0.ɵɵinject(i1.StateService), i0.ɵɵinject(i2.TextEditorSelection), i0.ɵɵinject(i0.Injector)); };
    TextEditor.ɵprov = i0.ɵɵdefineInjectable({ token: TextEditor, factory: TextEditor.ɵfac });
    return TextEditor;
}());
export { TextEditor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextEditor, [{
        type: Injectable
    }], function () { return [{ type: i1.StateService }, { type: i2.TextEditorSelection }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGUvYnVpbGRlci10ZXh0LWVkaXRvci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RleHQtZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUUxRDtJQUdFLG9CQUNTLFlBQTBCLEVBQzFCLFNBQThCLEVBQzNCLFFBQWtCO1FBRnJCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFFOUIsQ0FBQztJQUVELHlCQUFJLEdBQUo7UUFDRSxnQkFBZ0I7UUFDaEIsMENBQTBDO1FBQzFDLDhCQUE4QjtJQUNoQyxDQUFDO3dFQWJVLFVBQVU7c0RBQVYsVUFBVSxXQUFWLFVBQVU7cUJBTHZCO0NBdUJDLEFBbkJELElBbUJDO1NBbEJZLFVBQVU7a0RBQVYsVUFBVTtjQUR0QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gJy4vdGV4dC1lZGl0b3Itc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBUZXh0RWRpdG9yU2VsZWN0aW9uIH0gZnJvbSAnLi9zZWxlY3Rpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZXh0RWRpdG9yIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYmxvY2tNYW5hZ2VyOiBTdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIHNlbGVjdGlvbjogVGV4dEVkaXRvclNlbGVjdGlvbixcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuICApIHtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgLy8gc3VwZXIuaW5pdCgpO1xuICAgIC8vIHRoaXMuaW5qZWN0b3IuZ2V0KFRleHRFZGl0b3JDb21wb25lbnQpO1xuICAgIC8vIHRoaXMuaW5pdFRyYW5zZm9ybWF0aW9ucygpO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBpbml0VHJhbnNmb3JtYXRpb25zKCkge1xuICAgIC8vIHRoaXMudHJhbnNmb3JtYXRpb25SZWdpc3RyeS5zZXQoJ2l0YWxpYycsIG5ldyBJbmxpbmVJdGFsaWMoKSk7XG4gIC8vIH1cbn1cbiJdfQ==