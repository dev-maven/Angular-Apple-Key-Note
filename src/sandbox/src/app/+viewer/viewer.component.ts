import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PebScreen, AbstractComponent, PebElement } from '@pe/builder-core';


import { fromEvent } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

const getScreenFromWidth = (width): PebScreen => {
  if (width <= 500) {
    return PebScreen.Mobile;
  } else if (width < 1024) {
    return PebScreen.Tablet;
  } else {
    return PebScreen.Desktop;
  }
};

@Component({
  selector: 'sandbox-viewer-root',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  providers: []
})
export class SandboxViewerComponent
  extends AbstractComponent
  implements OnInit, AfterViewInit {
  theme: any;

  activePageUrl = '';

  activeScreen = null;

  @ViewChild('content')
  contentElement: ElementRef;

  resizeWindow$ = fromEvent(window, 'resize').pipe(
    map(() => this.contentElement.nativeElement.getBoundingClientRect().width),
  );

  pageContent = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
    super();

    this.theme = (route.data as any).value.theme;
    this.setPage('legal');
  }

  ngOnInit() {
    this.resizeWindow$.pipe(
      tap(width => this.activeScreen = getScreenFromWidth(width)),
      takeUntil(this.destroyed$),
    ).subscribe();
  }

  ngAfterViewInit() {
    this.activeScreen = getScreenFromWidth(
      this.contentElement.nativeElement.getBoundingClientRect().width
    );
    this.cdr.detectChanges();
  }

  setPage(url) {
    this.activePageUrl = url;
    const route = this.theme.routing.find(r => r.url === url);
    this.pageContent = (this.theme.pages as any as PebElement[]).find(page => page.id === route.pageId);
  }
}
