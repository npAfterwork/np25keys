import {Injectable} from '@angular/core';
import {CanActivate, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {NPAudioService} from '../../@np-components/services/np-audio/np-audio.service';
import {CINSTRUMENTS, CMETRONOME} from '../@consts/app.consts';

@Injectable({
              providedIn: 'root'
            })
export class AudioContextGuard implements CanActivate {

  constructor(
    private readonly audioService: NPAudioService,
  ) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.audioService.initialize(CINSTRUMENTS.PIANO, CMETRONOME);
  }

}
