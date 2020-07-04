import { PebAction } from '../models/action';
import { PebShopThemeSnapshotEntity } from '../models/database';
export declare function pebActionHandler(input: PebShopThemeSnapshotEntity, action: PebAction): PebShopThemeSnapshotEntity;
export declare const pebCompileActions: (actions: PebAction[]) => PebShopThemeSnapshotEntity;
