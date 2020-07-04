import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'sandbox-editor-create-shop-dialog',
  templateUrl: './create-shop.dialog.html',
  styleUrls: ['./create-shop.dialog.scss'],
})
export class SandboxEditorCreateShopDialog {
  name = '';

  constructor(private dialogRef: MatDialogRef<SandboxEditorCreateShopDialog>) {}

  close(name?: string) {
    this.dialogRef.close(name ? { name } : null);
  }
}
