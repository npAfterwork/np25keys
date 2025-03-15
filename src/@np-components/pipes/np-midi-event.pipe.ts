import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IMidiEvent } from '../@types/np-audio.types';
import { noteIdxToName, noteIdxToOctave } from '../utils/np-audio-utils';

@Pipe({
    name: 'npMidiEvent',
})
export class NPMidiEventPipe implements PipeTransform {
  private readonly translate = inject(TranslateService);


  transform(value: IMidiEvent): any {
    if (!value) {
      return '';
    }
    const noteName = noteIdxToName(this.translate, value.noteIdx, false);
    const octave = noteIdxToOctave(value.noteIdx);
    return `${noteName} ${octave} ${value.velocity} ${value.pressed ? 'on': 'off'} [${value.noteIdx}]`;
  }

}
