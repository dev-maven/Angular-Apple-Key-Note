import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'peb-editor-zoom-dialog',
  templateUrl: 'zoom.dialog.html',
  styleUrls: ['./zoom.dialog.scss'],
})
export class PebEditorZoomDialogComponent {
  scales = [33, 50, 75, 100, 150, 200, 300];

  constructor(
    public dialogRef: MatDialogRef<PebEditorZoomDialogComponent>
  ) {}

  setValue(value: number): void {
    this.dialogRef.close(value);
  }
}
