import { Injectable } from '@angular/core';
import { DBConfig, NgxIndexedDBService } from 'ngx-indexed-db';
import { omit, orderBy } from 'lodash-es';
import {
  PebShop,
  pebCreateShopInitAction,
  pebCompileActions,
  pebGenerateId,
  PebShopThemeSourceEntity,
  PebShopThemeSnapshotEntity,
  PebShopThemeEntity,
  pebActionHandler,
  PebShopThemeVersionEntity,
  PebShopId,
  PebShopThemeVersionId,
  PebShopThemeId,
} from '@pe/builder-core';
import { PebAction } from '../../../../modules/core/src/models/action';

export enum DatabaseEntity {
  ShopTheme = 'shop-theme',
  ShopThemeVersion = 'shop-theme-version',
  ShopThemeSource = 'shop-theme-source',
  ShopThemeSnapshot = 'shop-theme-snapshot',
  Shop = 'shop',
  Page = 'page',
}

export const MockDatabaseConfig: DBConfig  = {
  name: 'Sandbox',
  version: 1,
  objectStoresMeta: [
    //
    //  Editor entities
    //
    {
      store: DatabaseEntity.ShopTheme,
      storeConfig: { keyPath: 'id', autoIncrement: false },
      storeSchema: [
        // { name: 'name', keypath: 'name', options: { unique: false } },
        // { name: 'sourceId', keypath: 'sourceId', options: { unique: false } },
      ],
    },
    {
      store: DatabaseEntity.ShopThemeVersion,
      storeConfig: { keyPath: 'id', autoIncrement: false },
      storeSchema: [],
    },
    {
      store: DatabaseEntity.ShopThemeSource,
      storeConfig: { keyPath: 'id', autoIncrement: false },
      storeSchema: [
        // { name: 'snapshotId', keypath: 'snapshotId', options: { unique: true } },
      ],
    },
    {
      store: DatabaseEntity.ShopThemeSnapshot,
      storeConfig: { keyPath: 'id', autoIncrement: false },
      storeSchema: [],
    },
    //
    //  Client entities
    //
    {
      store: DatabaseEntity.Shop,
      storeConfig: { keyPath: 'id', autoIncrement: false },
      storeSchema: [],
    },
    {
      store: DatabaseEntity.Page,
      storeConfig: { keyPath: 'id', autoIncrement: false },
      storeSchema: [],
    },
  ],
};

export interface AddShopThemeInput {
  name: string;
  content: PebShop;
}

@Injectable({ providedIn: 'root' })
export class SandboxMockBackend {
  constructor(private idb: NgxIndexedDBService) {}

  // TODO: From shop
  async addShopTheme(input: AddShopThemeInput) {
    const actions = [pebCreateShopInitAction(input.content)];
    const snapshot = pebCompileActions(actions);

    const snapshotEntity: PebShopThemeSnapshotEntity = {
      ...snapshot,
      id: pebGenerateId('snapshot'),
    };

    const sourceEntity: PebShopThemeSourceEntity = {
      id: pebGenerateId('source'),
      actions,
      snapshotId: snapshotEntity.id,
    };

    const themeEntity: PebShopThemeEntity = {
      id: pebGenerateId('theme'),
      name: input.name,
      picture: null,
      sourceId: sourceEntity.id,
      versionsIds: [],
      publishedId: null,
    };

    return Promise.all([
      this.idb.add(DatabaseEntity.ShopTheme, themeEntity),
      this.idb.add(DatabaseEntity.ShopThemeSource, sourceEntity),
      this.idb.add(DatabaseEntity.ShopThemeSnapshot, snapshotEntity),
    ]).then(() => themeEntity);
  }

  async getShopThemesList() {
    return this.idb.getAll(DatabaseEntity.ShopTheme);
  }

  async getShopThemeById(id /*, currentPage */) {
    const shopTheme = await this.idb.getByID<PebShopThemeEntity>(
      DatabaseEntity.ShopTheme, id
    );
    const shopSource = await this.idb.getByID<PebShopThemeSourceEntity>(
      DatabaseEntity.ShopThemeSource, shopTheme.sourceId
    );
    const shopSnapshot = await this.idb.getByID<PebShopThemeSnapshotEntity>(
      DatabaseEntity.ShopThemeSnapshot, shopSource.snapshotId
    );

    return {
      ...omit(shopTheme, 'sourceId'),
      source: {
        ...omit(shopSource, 'snapshotId'),
        snapshot: shopSnapshot,
      }
    };
  }

  async addAction(shopId, action) {
    const shopTheme = await this.idb.getByID<PebShopThemeEntity>(
      DatabaseEntity.ShopTheme, shopId
    );
    let shopSource = await this.idb.getByID<PebShopThemeSourceEntity>(
      DatabaseEntity.ShopThemeSource, shopTheme.sourceId
    );
    let shopSnapshot = await this.idb.getByID<PebShopThemeSnapshotEntity>(
      DatabaseEntity.ShopThemeSnapshot, shopSource.snapshotId
    );

    shopSource = {
      ...shopSource,
      actions: [...shopSource.actions, action],
    };

    shopSnapshot = pebActionHandler(shopSnapshot, action);

    return Promise.all([
      this.idb.update(DatabaseEntity.ShopThemeSource, shopSource),
      this.idb.update(DatabaseEntity.ShopThemeSnapshot, shopSnapshot),
    ]).then(() => ({ snapshot: shopSnapshot }));
  }

  async updateReplica(themeId, oldInitAction: PebAction, newInitAction: PebAction) {
    let { source, snapshot } = await this.getAllData(themeId);

    source = {
      ...source,
      actions: source.actions.map(
        a => a.id === oldInitAction.id ? newInitAction : a
      ),
    };

    snapshot = {
      ...pebCompileActions(source.actions),
      id: snapshot.id,
    };

    return Promise.all([
      this.idb.update(DatabaseEntity.ShopThemeSource, source),
      this.idb.update(DatabaseEntity.ShopThemeSnapshot, snapshot),
    ]).then(() => ({ snapshot }));
  }

  async undoAction(themeId) {
    let { source, snapshot } = await this.getAllData(themeId);

    source = {
      ...source,
      actions: source.actions.slice(0, source.actions.length - 1),
    };
    snapshot = {
      ...pebCompileActions(source.actions),
      id: snapshot.id,
    };

    return Promise.all([
      this.idb.update(DatabaseEntity.ShopThemeSource, source),
      this.idb.update(DatabaseEntity.ShopThemeSnapshot, snapshot),
    ]).then(() => ({ snapshot }));
  }

  private async getAllData(themeId: string) {
    const theme = await this.idb.getByID<PebShopThemeEntity>(
      DatabaseEntity.ShopTheme, themeId
    );
    const source = await this.idb.getByID<PebShopThemeSourceEntity>(
      DatabaseEntity.ShopThemeSource, theme.sourceId
    );
    const snapshot = await this.idb.getByID<PebShopThemeSnapshotEntity>(
      DatabaseEntity.ShopThemeSnapshot, source.snapshotId
    );

    return { theme, source, snapshot };
  }

  addPage(input) {
    const entity = {
      id: pebGenerateId('page'),
      ...input
    };

    return this.idb.add(DatabaseEntity.Page, entity)
      .then((themeId) => ({
        id: themeId,
        ...entity,
      }));
  }

  async createShopThemeVersion(shopId: PebShopId, name: string) {
    const shopThemeEntity = await this.idb.getByID<PebShopThemeEntity>(
      DatabaseEntity.ShopTheme, shopId
    );

    const currentSourceEntity = await this.idb.getByID<PebShopThemeSourceEntity>(
      DatabaseEntity.ShopThemeSource, shopThemeEntity.sourceId
    );
    const currentSnapshotEntity = await this.idb.getByID<PebShopThemeSnapshotEntity>(
      DatabaseEntity.ShopThemeSnapshot, currentSourceEntity.snapshotId
    );

    const duplicatedSnapshotEntity: PebShopThemeSnapshotEntity = {
      ...currentSnapshotEntity,
      id: pebGenerateId(),
    };

    const savedSnapshotEntity = await this.idb
      .add(DatabaseEntity.ShopThemeSnapshot, duplicatedSnapshotEntity)
      .then(() => ({...duplicatedSnapshotEntity}));

    const duplicatedSourceEntity: PebShopThemeSourceEntity = {
      ...currentSourceEntity,
      id: pebGenerateId(),
      snapshotId: savedSnapshotEntity.id,
    };

    const savedSourceEntity = await this.idb
      .add(DatabaseEntity.ShopThemeSource, duplicatedSourceEntity)
      .then(() => ({...duplicatedSourceEntity}));

    const versionEntity: PebShopThemeVersionEntity = {
      id: pebGenerateId(),
      name,
      sourceId: savedSourceEntity.id,
      result: null, // will be calculated on publication
      createdAt: new Date(),
    };

    const nextShopThemeEntity: PebShopThemeEntity = {
      ...shopThemeEntity,
      versionsIds: [ ...shopThemeEntity.versionsIds, versionEntity.id ],
    };

    await this.idb.update(DatabaseEntity.ShopTheme, nextShopThemeEntity);

    return this.idb
      .add(DatabaseEntity.ShopThemeVersion, versionEntity)
      .then(() => ({...versionEntity}));
  }

  async deleteShopThemeVersion(shopId: PebShopId, versionId: PebShopThemeVersionId) {
    const shopThemeEntity = await this.idb.getByID<PebShopThemeEntity>(
      DatabaseEntity.ShopTheme, shopId
    );

    if (shopThemeEntity.publishedId === versionId) {
      throw new Error('Can\'t delete published version');
    }

    if (!shopThemeEntity.versionsIds.find(id => id === versionId)) {
      throw new Error('There is no version in theme');
    }

    const versionEntity = await this.idb.getByID<PebShopThemeVersionEntity>(
      DatabaseEntity.ShopThemeVersion, versionId
    );

    const sourceEntity = await this.idb.getByID<PebShopThemeSourceEntity>(
      DatabaseEntity.ShopThemeSource, versionEntity.sourceId
    );

    if (shopThemeEntity.sourceId === sourceEntity.id) {
      throw new Error('Can\'t delete activated version');
    }

    const snapshotEntity = await this.idb.getByID<PebShopThemeSnapshotEntity>(
      DatabaseEntity.ShopThemeSnapshot, sourceEntity.snapshotId
    );

    const shopSource: PebShopThemeEntity = {
      ...shopThemeEntity,
      versionsIds: shopThemeEntity.versionsIds.filter(id => id !== versionId),
    };

    return Promise.all([
      this.idb.delete(DatabaseEntity.ShopThemeVersion, versionEntity.id),
      this.idb.delete(DatabaseEntity.ShopThemeSource, sourceEntity.id),
      this.idb.delete(DatabaseEntity.ShopThemeSnapshot, snapshotEntity.id),
      this.idb.update(DatabaseEntity.ShopTheme, shopSource),
    ]);
  }

  async activateShopThemeVersion(shopId: PebShopId, versionId: PebShopThemeVersionId) {
    const shopThemeEntity = await this.idb.getByID<PebShopThemeEntity>(
      DatabaseEntity.ShopTheme, shopId
    );

    const versionEntity = await this.idb.getByID<PebShopThemeVersionEntity>(
      DatabaseEntity.ShopThemeVersion, versionId
    );

    // TODO: Delete 04.05.20 if not encountered
    if (shopThemeEntity.sourceId === versionEntity.sourceId) {
      throw new Error('Already activated');
    }

    const sourceEntityToDelete = await this.idb
      .getByID<PebShopThemeSourceEntity>(DatabaseEntity.ShopThemeSource, shopThemeEntity.sourceId);
    await this.idb.delete(DatabaseEntity.ShopThemeSource, sourceEntityToDelete.id);
    await this.idb.delete(DatabaseEntity.ShopThemeSnapshot, sourceEntityToDelete.snapshotId);

    const versionSourceEntity = await this.idb
      .getByID<PebShopThemeSourceEntity>(DatabaseEntity.ShopThemeSource, versionEntity.sourceId);

    const versionSnapshotEntity = await this.idb
      .getByID<PebShopThemeSourceEntity>(DatabaseEntity.ShopThemeSnapshot, versionSourceEntity.snapshotId);

    const duplicatedSnapshotEntity: PebShopThemeSourceEntity = {
      ...versionSnapshotEntity,
      id: pebGenerateId(),
    };

    const duplicatedSourceEntity: PebShopThemeSourceEntity = {
      ...versionSourceEntity,
      id: pebGenerateId(),
      snapshotId: duplicatedSnapshotEntity.id,
    };

    const nextShopThemeEntity: PebShopThemeEntity = {
      ...shopThemeEntity,
      sourceId: duplicatedSourceEntity.id,
    };

    return Promise.all([
      this.idb.update(DatabaseEntity.ShopTheme, nextShopThemeEntity),
      this.idb.add(DatabaseEntity.ShopThemeSnapshot, duplicatedSnapshotEntity),
      this.idb.add(DatabaseEntity.ShopThemeSource, duplicatedSourceEntity),
    ]).then((e) => ({
      ...nextShopThemeEntity,
      source: {
        ...duplicatedSourceEntity,
        snapshot: duplicatedSnapshotEntity,
      },
    }));
  }

  async publishShopThemeVersion(shopId: PebShopId, versionId: PebShopThemeVersionId) {
    const shopTheme = await this.idb.getByID<PebShopThemeEntity>(
      DatabaseEntity.ShopTheme, shopId
    );

    if (shopTheme.publishedId === versionId) {
      throw new Error('Already published');
    }

    const version = await this.idb.getByID<PebShopThemeEntity>(
      DatabaseEntity.ShopThemeVersion, versionId
    );

    // TODO: Calculate result for PebShopThemeVersionEntity

    const shopSource = {
      ...shopTheme,
      publishedId: version.id,
    };

    return this.idb.update(DatabaseEntity.ShopTheme, shopSource);
  }

  async getShopThemeVersions(themeId: PebShopThemeId) {
    const shopTheme: PebShopThemeEntity = await this.idb.getByID<PebShopThemeEntity>(
      DatabaseEntity.ShopTheme, themeId
    );

    // https://github.com/w3c/IndexedDB/issues/19
    return Promise.all<PebShopThemeVersionEntity>(
      shopTheme.versionsIds.map(id => this.idb.getByID(DatabaseEntity.ShopThemeVersion, id))
    ).then(versions => orderBy(versions, v => v.createdAt, ['desc']));
  }
}
