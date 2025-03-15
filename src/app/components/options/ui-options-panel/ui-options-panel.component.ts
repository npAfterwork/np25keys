import { Component, OnInit, inject } from '@angular/core';
import { NPPianoRollService } from '../../../../@np-components/services/np-audio/np-piano-roll.service';
import { CTEXTS } from '../../../@consts/texts.consts';
import { DialogsService } from '../../../services/dialogs.service';
import { OptionsService } from '../../../services/options.service';
import { IonList } from '@ionic/angular/standalone';
import {
  NPOptionsToggleComponent,
} from '../../../../@np-components/components/np-audio/np-options-toggle/np-options-toggle.component';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-options-ui-panel',
  templateUrl: './ui-options-panel.component.html',
  styleUrls: ['./ui-options-panel.component.scss'], imports: [IonList, NPOptionsToggleComponent, FormsModule, AsyncPipe],
})
export class UIOptionsPanelComponent implements OnInit {
  readonly npPianoRoll = inject(NPPianoRollService);
  readonly options = inject(OptionsService);
  private readonly dialogs = inject(DialogsService);

  CTEXTS = CTEXTS;

  ngOnInit() {
  }

  async changeToolbar(show: boolean) {
    this.options.save.toolbar(show);
    if (!show) {
      await this.dialogs.presentInfo(CTEXTS.DIALOGS.menuhide);
    }
  }
}
