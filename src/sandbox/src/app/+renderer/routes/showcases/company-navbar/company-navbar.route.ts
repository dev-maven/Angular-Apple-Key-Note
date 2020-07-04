import { Component } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sandbox-renderer-navbar-component-showcase',
  templateUrl: './company-navbar.route.html',
  styleUrls: ['./company-navbar.route.scss'],
})
export class SandboxRendererShowcaseCompanyNavbarRoute {
  content$ = this.route.data.pipe(
    pluck('content')
  );

  constructor(private route: ActivatedRoute) {}
}
