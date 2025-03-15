import { Component, Input } from '@angular/core';
import { INPPianoRollKey } from '../../../@np-components/@types/np-audio.types';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'np-piano-roll-display',
  templateUrl: './piano-roll-display.component.html',
  styleUrls: ['./piano-roll-display.component.scss'],
  imports: [NgForOf],
})
export class PianoRollDisplayComponent {
  @Input() keys: INPPianoRollKey[] = [];
}
