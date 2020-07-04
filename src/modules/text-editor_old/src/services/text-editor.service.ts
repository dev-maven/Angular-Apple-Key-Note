import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ExecuteCommandAction, ToggleToolbarAction } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TextEditorService {
  triggerCommand$: Subject<ExecuteCommandAction> = new Subject();
  toggleToolbarAction$: Subject<ToggleToolbarAction> = new Subject();

}
