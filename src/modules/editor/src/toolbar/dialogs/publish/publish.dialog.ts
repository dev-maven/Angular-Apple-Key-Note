import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { AbstractComponent, PebApiService, PebShopThemeVersionEntity, PebShopThemeVersionId } from '@pe/builder-core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PebEditorStore } from '../../../services/editor.store';
import { takeUntil, tap, take, switchMap, share } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'peb-editor-publish-dialog',
  templateUrl: 'publish.dialog.html', // TODO: add skeleton
  styleUrls: ['./publish.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebEditorPublishDialogComponent extends AbstractComponent implements OnInit {
  shopName: string;
  versionName: string;

  isVersionCreating: boolean;

  readonly versions$ = new BehaviorSubject<PebShopThemeVersionEntity[]>([]);
  private readonly publishedVersionIdSubject$ = new BehaviorSubject<PebShopThemeVersionId>(null);
  get publishedVersionId$(): Observable<PebShopThemeVersionId> {
    return this.publishedVersionIdSubject$.asObservable().pipe(share());
  }

  private readonly activatedVersionIdSubject$ = new BehaviorSubject<PebShopThemeVersionId>(null);
  get activatedVersionId$(): Observable<PebShopThemeVersionId> {
    return this.activatedVersionIdSubject$.asObservable().pipe(share());
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private store: PebEditorStore,
    private api: PebApiService,
  ) {
    super();
  }

  ngOnInit() {
    this.store.theme$.pipe(
      tap(theme => {
        this.shopName = theme.name;
        this.publishedVersionIdSubject$.next((theme as any).publishedId); // TODO: check it
      }),
      takeUntil(this.destroyed$),
    ).subscribe();

    this.store.theme$.pipe(
      take(1),
      switchMap(theme => this.api.getShopThemeVersions(theme.id)),
      tap(versions => this.versions$.next(versions)),
      takeUntil(this.destroyed$),
    ).subscribe();
  }

  onCreateVersion(name: string) {
    if (this.isVersionCreating) {
      return;
    }

    this.isVersionCreating = true;

    this.store.theme$.pipe(
      take(1),
      switchMap(theme => this.api.createShopThemeVersion(theme.id, name)),
      tap(version => {
        this.versionName = '';
        this.isVersionCreating = false;
        this.versions$.next([version, ...this.versions$.value]);
      }),
      takeUntil(this.destroyed$),
    ).subscribe();
  }

  onSelectVersion(id: PebShopThemeVersionId) {
    this.store.theme$.pipe(
      take(1),
      switchMap(theme => this.api.activateShopThemeVersion(theme.id, id)),
      // tap(c => {
      //   debuggerdd;
      // }),
      switchMap((theme) => this.store.openTheme(theme, null)),

      takeUntil(this.destroyed$),
    ).subscribe();
  }

  onPublishVersion(id: PebShopThemeVersionId) {
    this.store.theme$.pipe(
      take(1),
      switchMap(theme => this.api.publishShopThemeVersion(theme.id, id)),
      tap(() => this.publishedVersionIdSubject$.next(id)),
      takeUntil(this.destroyed$),
    ).subscribe();
  }
  onDeleteVersion(id: PebShopThemeVersionId) {
    this.store.theme$.pipe(
      take(1),
      switchMap(theme => this.api.deleteShopThemeVersion(theme.id, id)),
      tap(() => this.versions$.next(this.versions$.value.filter(v => v.id !== id))),
      takeUntil(this.destroyed$),
    ).subscribe();
  }

  onChangeShopName(name: string) {
    // TODO: Do
  }
}
