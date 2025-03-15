import { Component, input } from '@angular/core';
import { INPPianoRollKey } from '../../../@np-components/@types/np-audio.types';


@Component({
  selector: 'app-piano-roll-cover-panel',
  templateUrl: './piano-roll-cover-panel.component.html',
  styleUrls: ['./piano-roll-cover-panel.component.scss'],
  imports: [],
})
export class PianoRollCoverPanelComponent {
  readonly label = input('np25Keys');
  readonly keys = input<INPPianoRollKey[]>([]);

}
