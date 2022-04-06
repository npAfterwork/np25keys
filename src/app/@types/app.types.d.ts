import {ENOTES} from '../../@np-components/@consts/np-note.consts';
import {TNPPlayStyle} from '../../@np-components/@types/np-audio.types';
import {TTextID} from '../../@np-components/@types/np.types';

export type TLessonType = 'freeplay' | 'practice' | 'simonsays';
export type TLessonPack = 'Freeplay' | 'Notes' | 'Scales Major I' | 'Scales Major II' | 'Scales Minor I';
export type TLessonIndex = { [key in TLessonPack]: ILessonPack }
export type TOptionsTabs = 'roll' | 'audio' | 'common';
export type TAppPages = 'Home' | 'Lessons' | 'Theory' | 'Freeplay' | 'Practice';
export type TMPCPadSizes = 'auto' | 'small' | 'large';
export type TInfoDisplayMode = 'lesson' | 'bundle' | 'part' | 'lesson-compact' | 'bundle-compact' | 'part-compact';
export type TMainDisplayMode = 'playing' | 'all' | 'lesson';
export type TLoopMode = 'none' | 'lesson' | 'section';


export interface ILessonPart {
  notes: ENOTES[][];
  name?: TTextID;
  // good for scales... only? hmm do chords ?!
  playStyle?: TNPPlayStyle;
  fingersets: number[][];
  direction?: 'ascending' | 'descending' | 'both';
  hand?: 'left' | 'right';
  size?: 'once' | 'full';
  type: 'notes' | 'scales' | 'chords';
}

export interface ILesson {
  name: TTextID;
  parts: ILessonPart[];
}

export interface ILessonBundle {
  name: TTextID;
  lessons: ILesson[];
}

export interface ILessonPack {
  name: TTextID;
  pack: TLessonPack;
  sub: TTextID;
  type?: TLessonType;
  bundle: ILessonBundle;
}



