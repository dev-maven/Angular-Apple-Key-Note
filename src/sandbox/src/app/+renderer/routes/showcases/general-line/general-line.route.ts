import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'sandbox-renderer-line-showcase-route',
  templateUrl: './general-line.route.html',
  styleUrls: ['./general-line.route.scss'],
})
export class SandboxRendererShowcaseLineRoute {
  content$ = this.route.data.pipe(
    pluck('content')
  );

  constructor(private route: ActivatedRoute) {}
}
