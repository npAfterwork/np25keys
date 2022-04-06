import {Component, Input} from '@angular/core';
import {INPPianoRollKey} from '../../../@np-components/@types/np-audio.types';

@Component({
             selector:    'np-piano-roll-display',
             templateUrl: './piano-roll-display.component.html',
             styleUrls:   ['./piano-roll-display.component.scss'],
           })
export class PianoRollDisplayComponent {
  @Input() keys: INPPianoRollKey[] = [];
}
