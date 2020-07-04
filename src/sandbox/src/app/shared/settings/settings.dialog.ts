import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PebApiService } from '@pe/builder-core';
import { Router } from '@angular/router';

@Component({
  selector: 'sandbox-settings-dialog',
  templateUrl: './settings.dialog.html',
  styleUrls: ['./settings.dialog.scss'],
})
export class SandboxSettingsDialog {
  constructor(
    private dialogRef: MatDialogRef<SandboxSettingsDialog>,
    private apiService: PebApiService,
    private router: Router,
  ) {}

  async onDeleteDB() {
    const dbs = await (window.indexedDB as any).databases();
    dbs.forEach(db => window.indexedDB.deleteDatabase(db.name));
    this.router.navigate(['/']).then(() => location.reload());
  }

  close() {
    this.dialogRef.close();
  }
}
