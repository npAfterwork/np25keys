import {Component, OnInit} from '@angular/core';
import {NPAudioService} from '../../../../@np-components/services/np-audio/np-audio.service';
import {CTEXTS} from '../../../@consts/texts.consts';

@Component({
    selector: 'app-options-audio-panel',
    templateUrl: './audio-options-panel.component.html',
    styleUrls: ['./audio-options-panel.component.scss'],
    standalone: false
})
export class AudioOptionsPanelComponent implements OnInit {
  CTEXTS = CTEXTS;

  constructor(
    public readonly audio: NPAudioService,
  ) { }

  ngOnInit() {}

}
