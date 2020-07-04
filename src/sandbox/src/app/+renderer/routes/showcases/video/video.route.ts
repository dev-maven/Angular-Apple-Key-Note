import { Component, ChangeDetectionStrategy } from '@angular/core';
import { pluck, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'peb-video',
  templateUrl: './video.route.html',
  styleUrls: ['./video.route.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SandboxRendererShowcaseGeneralVideoRoute {
  content$ = this.route.data.pipe(
    pluck('content'),
  );

  constructor(private route: ActivatedRoute) {}
}
