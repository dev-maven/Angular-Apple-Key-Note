import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface PebEditorConfig {
  behaviours: any[]; // TODO: Add proper type
  makers: any[]; // TODO: Add proper type
}

export const EDITOR_CONFIG = new InjectionToken<PebEditorConfig>('EDITOR_CONFIG');

export interface PebEditorBehaviourAbstract {
  init(): Observable<any>;
}
