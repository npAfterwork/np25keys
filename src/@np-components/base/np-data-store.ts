import {BehaviorSubject, Observable} from 'rxjs';

type TNPDataStoreEntry<T> = BehaviorSubject<T>;
type TNPDataStoreSetter<T extends INPDataStoreModel, key extends keyof T> = (value: T[key], store: NPDataStore<T>) => T[key] | void;

export interface INPDataStoreModel {[key: string]: unknown}

type TNPDataStoreValue<T extends INPDataStoreModel, key extends keyof T> = {
  get$: Observable<T[key]>;
  value: T[key];
  next: (value: T[key]) => void;
  save: (value: T[key]) => void;
}
type TNPDataStore<T extends INPDataStoreModel> = {
  [key in keyof T]: TNPDataStoreValue<T, key>
}

export class NPDataStore<T extends INPDataStoreModel, K extends T = T> {
  store: TNPDataStore<T> = {} as TNPDataStore<T>;

  get$: { [key in keyof T]: Observable<T[key]> } = (() => {
    let result = {} as { [key in keyof T]: Observable<T[key]> };
    (Object.keys(this.dataStore) as [keyof T]).map(akey => {
      // @ts-ignore - create base as empty object
      this.store[akey] = this.store[akey] || {};
      result[akey] = this.store[akey].get$ = this.dataStore[akey].asObservable();
    });
    return result;
  })();

  value: { [key in keyof T]: T[key] } = (() => {
    let result = {};
    Object.keys(this.dataStore).map(key => {
      result[key] = this.store[key].value = this.dataStore[key].value;
    });
    return result as { [key in keyof T]: T[key] };
  })();

  next: { [key in keyof T]: (value: T[key], initial?: boolean) => void } = ((self = this) => {
    let result = {} as { [key in keyof T]: (value: T[key]) => void };
    (Object.keys(this.dataStore) as [keyof T]).map(key => {
      result[key] = this.store[key].next = (value, initial = false) => {
        if (!initial && this.beforeNext && this.beforeNext[key]) {
          // @ts-ignore
          const next = this.beforeNext[key](value, self);
          if (next) {
            value = next;
          }
        }
        this.value[key] = value;
        this.dataStore[key].next(value);
      };
    });
    return result;
  })();

  save: { [key in keyof T]: (value: T[key]) => void } = (() => {
      let result = {};
      Object.keys(this.dataStore).map(key => {
        result[key] = this.store[key].save = (value) => {
          this.next[key](value);
          this.writeToStorage();
        };
      });
      return result as { [key in keyof T]: (value: T[key]) => void };
    }
  )();

  private writeToStorage() {
    if (this.storageKey && this.autoUpdate) {
      let data: { [key in keyof T]: T[key] } = {} as { [key in keyof T]: T[key] };
      for (const key in this.dataStore) {
        if (this.dataStore.hasOwnProperty(key)) {
          data[key] = this.dataStore[key].value;
        }
      }
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
  }

  private load() {
    if (this.storageKey && this.autoUpdate) {
      let data: any = this.storageKey ? localStorage.getItem(this.storageKey) : null;
      if (data) {
        data = JSON.parse(data) as { [key in keyof T]: T[key] };
        for (const key in this.dataStore) {
          if (this.dataStore.hasOwnProperty(key)) {
            if (typeof data[key] !== undefined)
              this.next[key](data[key], true);
          }
        }
      }
    }
  }

  constructor(
    protected dataStore: { [key in keyof T]: TNPDataStoreEntry<T[key]> },
    protected beforeNext?: { [key in keyof K]?: TNPDataStoreSetter<K, key> },
    public readonly storageKey?: string,
    public autoUpdate = true
  ) {
    this.load();
  }

}
