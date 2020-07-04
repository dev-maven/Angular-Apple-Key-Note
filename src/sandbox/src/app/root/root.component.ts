import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { SandboxSettingsService } from '../shared/settings/settings.service';

@Component({
  selector: 'peb-sandbox-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class SandboxRootComponent {

  constructor(
    public router: Router,
    private settingsService: SandboxSettingsService,
  ) {}

  @HostBinding('class.front-page')
  get classFrontPage() {
    return this.router.url === '/';
  }

  openSettings(): void {
    this.settingsService.open();
  }
}
