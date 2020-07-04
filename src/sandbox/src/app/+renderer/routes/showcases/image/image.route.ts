import { Component, ChangeDetectionStrategy } from '@angular/core';
import { pluck, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'peb-image',
  templateUrl: './image.route.html',
  styleUrls: ['./image.route.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SandboxRendererShowcaseGeneralImageRoute {
  content$ = this.route.data.pipe(
    pluck('content'),
  );

  constructor(private route: ActivatedRoute) {}
}
