import {Component, Input} from '@angular/core';
import {INPPianoRollKey} from '../../../@np-components/@types/np-audio.types';

@Component({
    selector: 'app-piano-roll-cover-panel',
    templateUrl: './piano-roll-cover-panel.component.html',
    styleUrls: ['./piano-roll-cover-panel.component.scss'],
    standalone: false
})
export class PianoRollCoverPanelComponent {
  @Input() label = 'np25Keys';
  @Input() keys: INPPianoRollKey[] = [];

}
