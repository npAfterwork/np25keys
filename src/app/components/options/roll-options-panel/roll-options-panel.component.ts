import {Component, OnInit} from '@angular/core';
import {NPPianoRollService} from '../../../../@np-components/services/np-audio/np-piano-roll.service';
import {CTEXTS} from '../../../@consts/texts.consts';
import {OptionsService} from '../../../services/options.service';
@Component({
             selector:    'app-options-roll-panel',
             templateUrl: './roll-options-panel.component.html',
             styleUrls:   ['./roll-options-panel.component.scss'],
           })
export class RollOptionsPanelComponent implements OnInit {
  CTEXTS = CTEXTS;

  constructor(
    public readonly options: OptionsService,
    public readonly npPianoRollService: NPPianoRollService,
  ) { }

  ngOnInit() {}

}
