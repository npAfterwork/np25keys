import {BehaviorSubject} from 'rxjs';
import {NPDataStore, INPDataStoreModel} from '../../base/np-data-store';

export interface INPPianoRollDataStore extends INPDataStoreModel {
  cover: boolean;
  noteDisplay: 'x' | 'y';
}

export class NPPianoRollDataStore extends NPDataStore<INPPianoRollDataStore> {

  constructor() {
    super({
            cover:       new BehaviorSubject<boolean>(false),
            noteDisplay: new BehaviorSubject<'x' | 'y'>('x'),
          });
  }

}
