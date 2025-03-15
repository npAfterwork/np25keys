import { Component, inject } from '@angular/core';
import { NPAudioService } from '../../../../@np-components/services/np-audio/np-audio.service';
import { CTEXTS } from '../../../@consts/texts.consts';
import {
  IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonRange, IonSelect, IonSelectOption,
} from '@ionic/angular/standalone';
import {
  NPOptionsToggleComponent,
} from '../../../../@np-components/components/np-audio/np-options-toggle/np-options-toggle.component';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-options-audio-panel',
  templateUrl: './audio-options-panel.component.html',
  styleUrls: ['./audio-options-panel.component.scss'],
  imports: [IonList, NPOptionsToggleComponent, FormsModule, AsyncPipe, TranslatePipe, IonItem, IonLabel, IonSelect, IonSelectOption, IonListHeader, IonRange, IonIcon],
})
export class AudioOptionsPanelComponent {
  readonly audio = inject(NPAudioService);

  CTEXTS = CTEXTS;

}
