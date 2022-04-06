import {Component, OnInit} from '@angular/core';
import {NPPianoRollService} from '../../../../@np-components/services/np-audio/np-piano-roll.service';
import {CTEXTS} from '../../../@consts/texts.consts';
import {DialogsService} from '../../../services/dialogs.service';
import {OptionsService} from '../../../services/options.service';
@Component({
             selector:    'app-options-ui-panel',
             templateUrl: './ui-options-panel.component.html',
             styleUrls:   ['./ui-options-panel.component.scss'],
           })
export class UIOptionsPanelComponent implements OnInit {
  CTEXTS = CTEXTS;

  constructor(
    public readonly npPianoRoll: NPPianoRollService,
    public readonly options: OptionsService,
    private readonly dialogs: DialogsService
  ) { }

  ngOnInit() {
  }

  async changeToolbar(show: boolean) {
    this.options.save.toolbar(show);
    if (!show) {
      await this.dialogs.presentInfo(CTEXTS.DIALOGS.menuhide);
    }
  }
}
