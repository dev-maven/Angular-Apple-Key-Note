import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share, switchMap } from 'rxjs/operators';
import { SandboxSettingsService } from '../shared/settings/settings.service';
import { PebApiService } from '@pe/builder-core';


@Component({
  selector: 'peb-sandbox-root',
  templateUrl: './front.route.html',
  styleUrls: ['./front.route.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SandboxFrontRoute {
  refresh$ = new BehaviorSubject<boolean>(true);

  shops$: Observable<any> = this.refresh$.pipe(
    switchMap(() => this.api.getShopThemesList()),
    share(),
  );

  trackShopFn = (e) => e.id;

  constructor(
    @Inject(PebApiService) private api: PebApiService,
    private settingsService: SandboxSettingsService,
  ) {}

  openSettings(): void {
    this.settingsService.open();
  }

}
