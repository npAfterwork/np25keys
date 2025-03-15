import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ENOTES } from '../../../@consts/np-note.consts';
import { INPPianoRollKey } from '../../../@types/np-audio.types';
import { NgForOf, NgIf } from '@angular/common';


@Component({
  selector: 'np-piano-roll',
  templateUrl: './np-piano-roll.component.html',
  styleUrls: ['./np-piano-roll.component.scss'], imports: [NgForOf, NgIf],
})
export class NPPianoRollComponent {

  @Input() keys: INPPianoRollKey[] = [];
  @Input() notes = true;
  @Input() fingerset = true;
  @Input() octave = true;
  @Input() pressedByEvent = true;
  @Input() lightup = true;

  @Output() npReleaseNote: EventEmitter<ENOTES> = new EventEmitter<ENOTES>();
  @Output() npPressNote: EventEmitter<ENOTES> = new EventEmitter<ENOTES>();

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
