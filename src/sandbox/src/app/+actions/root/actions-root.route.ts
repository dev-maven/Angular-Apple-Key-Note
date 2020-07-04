// import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { map, pluck, tap } from 'rxjs/operators';
// import { pebCreateLogger } from '../../../../../modules/core/src';
// // import { pebCompileActions, snapshotToSource } from '../algorythm/main';
// import { PebAction } from '../algorythm/source.interfaces';
// import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
// import { merge } from 'lodash-es';
//
// const log = pebCreateLogger('sandbox:actions');
//
// @Component({
//   selector: 'sandbox-actions-root-route',
//   templateUrl: './actions-root.route.html',
//   styleUrls: ['./actions-root.route.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class SandboxActionsRootRoute implements OnInit {
//   merge = merge;
//
//   mode: 'preview'|'source' = 'source';
//
//   lastActionIndex$ = new BehaviorSubject(0);
//
//   selectedPageId$ = new BehaviorSubject('front');
//
//   actions$ = this.route.data.pipe(
//     pluck('actions'),
//   ) as Observable<PebAction[]>;
//
//   result$ = of();
//   // TODO: Import this from core
//   // result$ = this.lastActionIndex$.pipe(
//   //   map(i => snapshotToSource(pebCompileActions(this.actions.slice(0, i + 1)))),
//   // );
//
//   activePage$ = combineLatest([
//     this.selectedPageId$,
//     this.result$,
//   ]).pipe(
//     map(([selPageId, shop]) => {
//       return shop.pages.find(p => p.id === selPageId) || null
//     })
//   );
//
//   constructor(private route: ActivatedRoute) {
//     (window as any).sandboxActionsRoute = this;
//   }
//
//   get actions(): PebAction[] {
//     return (this.route.data as any).value.actions;
//   }
//
//   ngOnInit() {
//     this.route.data.pipe(
//       pluck('actions'),
//       tap((actions) => {
//         const snapshot = pebCompileActions([ actions[0] ]);
//         console.log(snapshot);
//       }),
//     ).subscribe();
//   }
//
//   @HostListener('window:keydown.alt.ArrowUp')
//   onUndo(evt) {
//     log('onUndo', evt);
//     if (this.lastActionIndex$.value > 0) {
//       this.lastActionIndex$.next(this.lastActionIndex$.value - 1);
//     }
//   }
//
//   @HostListener('window:keydown.alt.ArrowDown')
//   onRedo() {
//     log('onRedo');
//     if (this.lastActionIndex$.value < this.actions.length) {
//       this.lastActionIndex$.next(this.lastActionIndex$.value + 1);
//     }
//   }
// }
