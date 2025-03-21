import { Component, OnInit, inject } from '@angular/core';
import { NPPianoRollService } from '../../../../@np-components/services/np-audio/np-piano-roll.service';
import { CTEXTS } from '../../../@consts/texts.consts';
import { OptionsService } from '../../../services/options.service';
import { IonList } from '@ionic/angular/standalone';
import {
  NPOptionsToggleComponent,
} from '../../../../@np-components/components/np-audio/np-options-toggle/np-options-toggle.component';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-options-roll-panel',
  templateUrl: './roll-options-panel.component.html',
  styleUrls: ['./roll-options-panel.component.scss'],
  imports: [IonList, NPOptionsToggleComponent, FormsModule, AsyncPipe],
})
export class RollOptionsPanelComponent implements OnInit {
  readonly options = inject(OptionsService);
  readonly npPianoRollService = inject(NPPianoRollService);

  CTEXTS = CTEXTS;

  ngOnInit() {}

}
