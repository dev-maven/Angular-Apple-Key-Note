import { Component } from '@angular/core';
import { PebScreen } from '@pe/builder-core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'peb-editor-screen-dialog',
  templateUrl: 'screen.dialog.html',
  styleUrls: ['./screen.dialog.scss'],
})
export class PebEditorScreenDialogComponent {

  PebScreen = PebScreen;

  constructor(
    public dialogRef: MatDialogRef<PebEditorScreenDialogComponent>
  ) {}

  setScreen(screen: PebScreen) {
    this.dialogRef.close(screen);
  }
}
