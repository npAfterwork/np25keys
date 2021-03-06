import {Component, OnInit} from '@angular/core';
import {NPPianoRollService} from '../../../../@np-components/services/np-audio/np-piano-roll.service';
import {CTEXTS} from '../../../@consts/texts.consts';
import {OptionsService} from '../../../services/options.service';
@Component({
             selector:    'app-options-extra-panel',
             templateUrl: './extra-options-panel.component.html',
             styleUrls:   ['./extra-options-panel.component.scss'],
           })
export class ExtraOptionsPanelComponent implements OnInit {
  CTEXTS = CTEXTS;

  constructor(
    public readonly npPianoRoll: NPPianoRollService,
    public readonly options: OptionsService,
  ) { }

  ngOnInit() {
  }

}
