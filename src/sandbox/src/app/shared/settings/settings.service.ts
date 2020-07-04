import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SandboxSettingsDialog } from './settings.dialog';

@Injectable({ providedIn: 'root' })
export class SandboxSettingsService {
  constructor(
    private dialog: MatDialog,
  ) {}

  open(): MatDialogRef<SandboxSettingsDialog> {
    return this.dialog.open(SandboxSettingsDialog);
  }
}
