import { Component, HostListener, input, output } from '@angular/core';
import { ENOTES } from '../../../@consts/np-note.consts';
import { INPPianoRollKey } from '../../../@types/np-audio.types';



@Component({
  selector: 'np-piano-roll',
  templateUrl: './np-piano-roll.component.html',
  styleUrls: ['./np-piano-roll.component.scss'], imports: [],
})
export class NPPianoRollComponent {

  readonly keys = input<INPPianoRollKey[]>([]);
  readonly notes = input(true);
  readonly fingerset = input(true);
  readonly octave = input(true);
  readonly pressedByEvent = input(true);
  readonly lightup = input(true);

  readonly npReleaseNote = output<ENOTES>();
  readonly npPressNote = output<ENOTES>();

  @HostListener('window:mouseup') onMouseUp() {
    if (this.pressedByPointer) {
      this.npReleaseNote.emit(this.pressedByPointer.noteIdx);
      this.pressedByPointer = undefined;
    }
  }

  private pressedByPointer: INPPianoRollKey;

  constructor(
  ) {
  }

  keyPressedByPointer(key: INPPianoRollKey) {
    this.pressedByPointer = key;
    this.npPressNote.emit(key.noteIdx);
  }
}
