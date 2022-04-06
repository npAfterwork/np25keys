import {EMAJORSCALES, ENOTES} from '../@consts/np-note.consts';
import {THexColor} from './np.types';

export type TNoteIndex = number;

export interface IMidiEvent {
  noteIdx: number;
  pressed: boolean;
  velocity: number;
}

export type TNPPlayStyle = 'legato' | 'staccato';

export interface INPPianoRollKey extends IMidiEvent {
  noteName: string;
  octave: number;
  sharp: boolean;
  lit: boolean;
  color?: THexColor;
  fingerset?: number;
}

export type TNPInstrumentName = string;

export interface INPInstrument {
  name: TNPInstrumentName;
  path: string
}

export type TPianoRollMode = 'lowerOctave' | 'upperOctave' | 'twentyFiveKeys' | 'custom';

export type TScale = { notes: ENOTES[]; fs_rh: number[]; fs_lh: number[]; offset: number}
export type TScaleBundle = { once: TScale, full: TScale }
export type TMajorScales = { [key in EMAJORSCALES]: TScaleBundle };
