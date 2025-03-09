import { CMAJORSCALES, EMAJORSCALES, ENOTES } from '../../@np-components/@consts/np-note.consts';
import { noteIdxIsSharp, randomNote } from '../../@np-components/utils/np-audio-utils';
import { environment } from '../../environments/environment';
import { CTEXTS } from '../@consts/texts.consts';
import { ILessonPart, TLessonIndex } from '../@types/app.types';

function getMajorScaleParts(scaleKey: EMAJORSCALES): ILessonPart[] {

  const notes_once = [...CMAJORSCALES[scaleKey].once.notes.map(note => [note])];
  const notes_full = [...CMAJORSCALES[scaleKey].full.notes.map(note => [note])];
  const fingerset_full = [...CMAJORSCALES[scaleKey].full.fs_rh.map(finger => [finger])];
  const fingerset_once = [...CMAJORSCALES[scaleKey].once.fs_rh.map(finger => [finger])];

  // @debug
  if (!environment.production) {
    if (notes_once.length !== fingerset_once.length) {
      throw new Error('Fingerset Error Once on: ' + scaleKey);
    }
    if (notes_full.length !== fingerset_full.length) {
      throw new Error('Fingerset Error Full on: ' + scaleKey);
    }
  }

  return [
    {
      playStyle:  'legato', direction: 'ascending', hand: 'right', size: 'once', type: 'scales',
      notes:      notes_once,
      fingersets: fingerset_once
    },
    {
      playStyle:  'legato', direction: 'descending', hand: 'right', size: 'once', type: 'scales',
      notes:      [...notes_once].reverse(),
      fingersets: [...fingerset_once].reverse(), // hmm i think i need a descending fingerset
    },
    {
      playStyle:  'legato', direction: 'ascending', hand: 'right', size: 'full', type: 'scales',
      notes:      notes_full,
      fingersets: fingerset_full
    },
    {
      playStyle:  'legato', direction: 'descending', hand: 'right', size: 'full', type: 'scales',
      notes:      [...notes_full].reverse(),
      fingersets: [...fingerset_full].reverse(), // hmm i think i need a descending fingerset
    },
  ];
}

function getMajorChordParts(scaleKey: EMAJORSCALES): ILessonPart[] {
  const notes = CMAJORSCALES[scaleKey].full.notes;
  const idx = CMAJORSCALES[scaleKey].full.offset;
  const chords: ENOTES[][] = [];
  const once: ENOTES[][] = [];
  const fs: number[][] = [];
  const fs_once: number[][] = [];
  for (let i = idx; i + 4 < notes.length; i++) {
    const chord = [notes[i], notes[i + 2], notes[i + 4]];
    chords.push(chord);
    if(chords.length <= 4){
      once.push(chord);
      fs_once.push([1, 2, 4]); //hmm fingerset for chords
    }
    fs.push([1, 2, 4]); //hmm fingerset for chords
  }
  return [
    {playStyle: 'staccato', direction: 'ascending', hand: 'right', size: 'once', type: 'chords', notes: once, fingersets: fs_once},
    {playStyle: 'staccato', direction: 'descending', hand: 'right', size: 'once', type: 'chords', notes: [...once].reverse(), fingersets: [...fs_once].reverse()},
    {playStyle: 'staccato', direction: 'ascending', hand: 'right', size: 'full', type: 'chords', notes: chords, fingersets: fs},
    {playStyle: 'staccato', direction: 'descending', hand: 'right', size: 'full', type: 'chords', notes: [...chords].reverse(), fingersets: [...fs].reverse()},
  ];
}

function geRandomNotestParts(wholes: boolean, sharps: boolean, amount = 25, start: ENOTES = ENOTES.C3, end: ENOTES = ENOTES.C5): ILessonPart[] {
  const notes: ENOTES[][] = [];
  const fs: number[][] = [];
  if (!wholes && !sharps) throw Error('Could not generate notes');
  while (notes.length < amount) {
    const newNote = randomNote(start, end);
    const sharp = noteIdxIsSharp(newNote);
    if ((sharps && sharp) || (wholes && !sharp)) {
      notes.push([newNote]);
      fs.push([1]);
    }
  }
  return [
    {name: '25 random keys', notes, playStyle: 'staccato', type: 'notes', fingersets: fs},
  ];
}

export const CLessonBundleIndex: TLessonIndex = {
  'Freeplay':        {
    name:   CTEXTS.LESSONS.FREEPLAY.bundlename,
    sub:    CTEXTS.LESSONS.FREEPLAY.bundlesub,
    pack:   'Freeplay',
    type:   'freeplay',
    bundle: {
      name:    CTEXTS.LESSONS.FREEPLAY.name,
      lessons: [
        {
          name:  CTEXTS.LESSONS.FREEPLAY.name,
          parts: [
            {notes: [], type: 'notes', fingersets: []}
          ]
        }
      ]
    }

  },
  'Notes':           {
    name:   'Notez',
    sub:    'Notez sub',
    pack:   'Notes',
    bundle: {
      name:    'Single Keys',
      lessons: [
        {name: 'White keys', parts: geRandomNotestParts(true, false)},
        {name: 'Black keys', parts: geRandomNotestParts(false, true)},
        {name: 'All keys', parts: geRandomNotestParts(true, true)},
      ]
    },
  },
  'Scales Major I':  {
    name:   'Major Scales',
    sub:    'Scalez sub',
    pack:   'Scales Major I',
    bundle: {
      name:    'Common Major Scales',
      lessons: [
        {name: 'C-Major', parts: getMajorScaleParts(EMAJORSCALES.C)},
        {name: 'D-Major', parts: getMajorScaleParts(EMAJORSCALES.D)},
        {name: 'E-Major', parts: getMajorScaleParts(EMAJORSCALES.E)},
        {name: 'F-Major', parts: getMajorScaleParts(EMAJORSCALES.F)},
        {name: 'G-Major', parts: getMajorScaleParts(EMAJORSCALES.G)},
        {name: 'A-Major', parts: getMajorScaleParts(EMAJORSCALES.A)},
        {name: 'B-Major', parts: getMajorScaleParts(EMAJORSCALES.B)},
      ]
    },
  },
  'Scales Major II': {
    name:   'Major Scales II',
    sub:    'Scalez sub',
    pack:   'Scales Major II',
    bundle: {
      name:    'Less common Major Scales',
      lessons: []
    },

  },
  'Scales Minor I':  {
    name:   'Minor Scales I - Chords',
    sub:    'Scalez sub',
    pack:   'Scales Minor I',
    bundle: {
      name:    'Minor Scales',
      lessons: [
        {name: 'C-Major', parts: getMajorChordParts(EMAJORSCALES.C)},
        {name: 'D-Major', parts: getMajorChordParts(EMAJORSCALES.D)},
        {name: 'E-Major', parts: getMajorChordParts(EMAJORSCALES.E)},
        {name: 'F-Major', parts: getMajorChordParts(EMAJORSCALES.F)},
        {name: 'G-Major', parts: getMajorChordParts(EMAJORSCALES.G)},
        {name: 'A-Major', parts: getMajorChordParts(EMAJORSCALES.A)},
        {name: 'B-Major', parts: getMajorChordParts(EMAJORSCALES.B)},
      ]
    },
  },
};
