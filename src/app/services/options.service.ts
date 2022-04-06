import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NPDataStore} from '../../@np-components/base/np-data-store';
import {CLS_KEY_OPTIONS} from '../@consts/app.consts';
import {TMPCPadSizes} from '../@types/app.types';

@Injectable({
              providedIn: 'root'
            })
export class OptionsService {

  private optionStore = new NPDataStore({
                                          language:         new BehaviorSubject<'en' | 'de'>('en'),
                                          fullscreen:       new BehaviorSubject<boolean>(false),
                                          toolbar:          new BehaviorSubject<boolean>(true),
                                          mpcpads:          new BehaviorSubject<boolean>(true),
                                          maindisplay:      new BehaviorSubject<boolean>(true),
                                          infodisplays:     new BehaviorSubject<boolean>(true),
                                          scanlines:        new BehaviorSubject<boolean>(true),
                                          validation:       new BehaviorSubject<boolean>(true),
                                          mpcpadssize:      new BehaviorSubject<TMPCPadSizes>('small'),
                                        }, {}, CLS_KEY_OPTIONS);

  public readonly get$ = this.optionStore.get$;
  public readonly save = this.optionStore.save;
  public readonly values = this.optionStore.value;

  constructor() {
  }

}

