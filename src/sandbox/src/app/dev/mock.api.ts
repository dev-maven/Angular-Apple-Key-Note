import { Injectable } from '@angular/core';
import { SandboxMockBackend } from './mock.backend';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';
import { PebApiService, PebAction, PebShopId, PebShopThemeVersionId } from '@pe/builder-core';

@Injectable()
export class SandboxApiService implements PebApiService {
  constructor(private backend: SandboxMockBackend) {}

  getShopThemesList() {
    return fromPromise(this.backend.getShopThemesList()).pipe(
      delay(50),
    );
  }

  getShopThemeById(shopId: string): Observable<any> {
    return fromPromise(this.backend.getShopThemeById(shopId)).pipe(
      delay(5),
    );
  }

  createShopTheme(input) {
    return fromPromise(this.backend.addShopTheme(input)).pipe(
      delay(300),
    );
  }

  addAction(shopId: string, action: PebAction) {
    return fromPromise(this.backend.addAction(shopId, action)).pipe(
      delay(100),
    );
  }

  updateReplica(themeId: string, oldInitAction: PebAction, newInitAction: PebAction): Observable<any> {
    return fromPromise(this.backend.updateReplica(themeId, oldInitAction, newInitAction)).pipe(
      delay(100),
    );
  };

  undoAction(themeId: string) {
    return fromPromise(this.backend.undoAction(themeId)).pipe(
      delay(100),
    );
  }

  createShopThemeVersion(shopId: PebShopId, name: string) {
    return fromPromise(this.backend.createShopThemeVersion(shopId, name)).pipe(
      delay(300),
    );
  }

  deleteShopThemeVersion(shopId: PebShopId, versionId: PebShopThemeVersionId) {
    return fromPromise(this.backend.deleteShopThemeVersion(shopId, versionId)).pipe(
      delay(300),
    );
  }

  activateShopThemeVersion(shopId: PebShopId, versionId: PebShopThemeVersionId) {
    return fromPromise(this.backend.activateShopThemeVersion(shopId, versionId)).pipe(
      delay(300),
    );
  }

  publishShopThemeVersion(shopId: PebShopId, versionId: PebShopThemeVersionId) {
    return fromPromise(this.backend.publishShopThemeVersion(shopId, versionId)).pipe(
      delay(300),
    );
  }

  getShopThemeVersions(shopId: PebShopId) {
    return fromPromise(this.backend.getShopThemeVersions(shopId)).pipe(
      delay(300),
    );
  }
}
