import { Observable } from 'rxjs';
import { PebAction } from './models/action';
import { PebShop, PebShopId } from './models/client';
import { PebShopThemeVersionEntity } from './models/database';
import { PebShopThemeId, PebShopThemeVersionId } from './models/editor';
export interface CreateShopThemePayload {
    name: string;
    content: PebShop;
}
export declare type CreateShopThemeDto = any;
export declare abstract class PebApiService {
    abstract getShopThemesList(): Observable<any>;
    abstract getShopThemeById(themeId: PebShopThemeId): Observable<any>;
    abstract createShopTheme(input: CreateShopThemePayload): Observable<CreateShopThemeDto>;
    abstract createShopThemeVersion(shopId: PebShopId, name: string): Observable<PebShopThemeVersionEntity>;
    abstract deleteShopThemeVersion(shopId: PebShopId, versionId: PebShopThemeVersionId): Observable<any>;
    abstract activateShopThemeVersion(shopId: PebShopId, versionId: PebShopThemeVersionId): Observable<CreateShopThemeDto>;
    abstract publishShopThemeVersion(shopId: PebShopId, versionId: PebShopThemeVersionId): Observable<any>;
    abstract addAction(shopId: PebShopId, action: PebAction): Observable<any>;
    abstract getShopThemeVersions(shopId: PebShopId): Observable<PebShopThemeVersionEntity[]>;
    abstract updateReplica(themeId: string, oldInitAction: PebAction, newInitAction: PebAction): Observable<any>;
    abstract undoAction(themeId: string): Observable<any>;
}
