import { Component, Input } from '@angular/core';
import { INPPianoRollKey } from '../../../@np-components/@types/np-audio.types';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-piano-roll-cover-panel',
  templateUrl: './piano-roll-cover-panel.component.html',
  styleUrls: ['./piano-roll-cover-panel.component.scss'],
  imports: [NgForOf],
})
export class PianoRollCoverPanelComponent {
  @Input() label = 'np25Keys';
  @Input() keys: INPPianoRollKey[] = [];

}
