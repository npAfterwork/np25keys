import {INPInstrument} from '../../@np-components/@types/np-audio.types';
import {TLessonPack} from '../@types/app.types';
import {CTEXTS} from './texts.consts';

export const CLS_KEY_OPTIONS = 'np-25keys-options';
export const CLS_KEY_LESSONS = 'np-25keys-lessons';

export const CMETRONOME = 'assets/sounds/metronome.wav';
export const CINSTRUMENTS: { [key in 'PIANO']: INPInstrument } = {
  PIANO: {name: CTEXTS.INSTRUMENTS.piano, path: 'assets/sounds/piano'}
};

const CFRAGMENTS = {
  ROOT:    '/',
  HOME:    'home',
  PLAY:    'play',
  THEORY:  'theory',
  LESSONS: 'lessons',
  // urls that do not match the fragment
  PLAY_URL:    'play/:type',
  THEORY_URL:  'theory/:topic',
  LESSONS_URL: 'lessons/:topic',
};
export const CROUTES = {
  HOME:     {LABEL: CTEXTS.ROUTES.home, URL: CFRAGMENTS.HOME, ICON: 'home-sharp', ROUTE: [CFRAGMENTS.ROOT, CFRAGMENTS.HOME], COLOR: 'green'},
  PRACTICE: {LABEL: CTEXTS.ROUTES.practice, ICON: 'musical-note-sharp', ROUTE: [CFRAGMENTS.ROOT, CFRAGMENTS.PLAY, 'lesson'], COLOR: 'red'},
  PLAY:     {LABEL: CTEXTS.ROUTES.freeplay, URL: CFRAGMENTS.PLAY_URL, ICON: 'play-sharp', ROUTE: [CFRAGMENTS.ROOT, CFRAGMENTS.PLAY, 'free'], COLOR: 'orange'},
  THEORY:   {
    LABEL:  CTEXTS.ROUTES.theory, URL: CFRAGMENTS.THEORY_URL, ICON: 'newspaper-sharp', ROUTE: [CFRAGMENTS.ROOT, CFRAGMENTS.THEORY, 'none'], COLOR: 'teal',
    ROUTES: (topic?: TLessonPack) => [CFRAGMENTS.ROOT, CFRAGMENTS.THEORY, topic || 'none'],
  },
  LESSONS:  {
    LABEL:  CTEXTS.ROUTES.lessons, URL: CFRAGMENTS.LESSONS_URL, ICON: 'ribbon-sharp', ROUTE: [CFRAGMENTS.ROOT, CFRAGMENTS.LESSONS, 'none'], COLOR: 'blue',
    ROUTES: (topic?: TLessonPack) => [CFRAGMENTS.ROOT, CFRAGMENTS.LESSONS, topic || 'none'],
  },
};
