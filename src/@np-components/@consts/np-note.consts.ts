// https://en.scratch-wiki.info/wiki/MIDI_Notes || https://newt.phys.unsw.edu.au/jw/notes.html
import {TMajorScales} from '../@types/np-audio.types';

export enum ENOTES {
  C3 = 48,
  Cs3,
  Db3 = 49,
  D3,
  Ds3,
  Eb3 = 51,
  E3,
  Es3,
  Fb3 = 52,
  F3 = 53,
  Fs3,
  Gb3 = 54,
  G3,
  Gs3,
  Ab3 = 56,
  A3,
  As3,
  Bb3 = 58,
  B3,
  Bs3,
  Cb4 = 59,
  C4 = 60,
  Cs4,
  Db4 = 61,
  D4,
  Ds4,
  Eb4 = 63,
  E4,
  Es4,
  Fb4 = 64,
  F4 = 65,
  Fs4,
  Gb4 = 66,
  G4,
  Gs4,
  Ab4 = 68,
  A4,
  As4,
  Bb4 = 70,
  B4,
  Bs4,
  Cb5 = 71,
  C5 = 72,
}

export enum EMAJORSCALES {
  // C Sharp Major Scale: C♯ – D♯ – E♯ – F♯ – G♯ – A♯ – B♯ – C♯ (E# = F and B# = C)
  Cs = 'C-Sharp-Major',
  // F Sharp Major Scale: F♯ – G♯ – A♯ – B – C♯ – D♯ – E♯ – F♯ (E# = F)
  Fs = 'F-Sharp-Major',
  // B Major Scale: B – C♯ – D♯ – E – F♯ – G♯ – A♯ – B
  B = 'B-Major',
  // E Major Scale: E – F♯ – G♯ – A – B – C♯ – D♯ – E
  E = 'E-Major',
  // A Major Scale: A – B – C♯ – D – E – F♯ – G♯ – A
  A = 'A-Major',
  // D Major Scale: D – E – F♯ – G – A – B – C♯ – D
  D = 'D-Major',
  // G Major Scale: G – A – B – C – D – E – F♯ – G
  G = 'G-Major',
  // C Major Scale: C – D – E – F – G – A – B – C
  C = 'C-Major',
  // Major scales with flats:
  // F Major Scale: F – G – A – B♭ – C – D – E – F (Bb = A#)
  F = 'F-Major',
  // B Flat Major Scale: B♭ – C – D – E♭ – F – G – A – B♭ (Bb = A# und Eb = D#)
  Bb = 'B-Flat-Major',
  // E Flat Major Scale: E♭ – F – G – A♭ – B♭ – C – D – E♭ (Eb = D# Ab = G# Bb = A#)
  Eb = 'E-Flat-Major',
  // A Flat Major Scale: A♭ – B♭ – C – D♭ – E♭ – F – G – A♭
  Ab = 'A-Flat-Major',
  // D Flat Major Scale: D♭ – E♭ – F – G♭ – A♭ – B♭ – C – D♭
  Db = 'D-Flat-Major',
  // G Flat Major Scale: G♭ – A♭ – B♭ – C♭ – D♭ – E♭ – F – G♭
  Gb = 'G-Flat-Major',
  // C Flat Major Scale: C♭ – D♭ – E♭ – F♭ – G♭ – A♭ – B♭ – C♭ = B Major B – C♯ – D♯ – E – F♯ – G♯ – A♯ – B hmm ?!!
  Cb = 'C-Flat-Major'
}

// In the order of the circle of fifth
export const CMAJORSCALES: TMajorScales = {
  // Major scales with sharps:
  // C Sharp Major Scale: C♯ – D♯ – E♯ – F♯ – G♯ – A♯ – B♯ – C♯ (E# = F and B# = C)
  [EMAJORSCALES.Cs]: {
    once: {
      notes: [ENOTES.Cs3, ENOTES.Ds3, ENOTES.Es3, ENOTES.Fs3, ENOTES.Gs3, ENOTES.As3, ENOTES.Bs3, ENOTES.Cs4],
      offset: 0,
      fs_rh: [],
      fs_lh: [],
    },
    full: {
      notes: [ENOTES.Cs3, ENOTES.Ds3, ENOTES.Es3, ENOTES.Fs3, ENOTES.Gs3, ENOTES.As3, ENOTES.Bs3, ENOTES.Cs4, ENOTES.Ds4, ENOTES.Es4, ENOTES.Fs4, ENOTES.Gs4, ENOTES.As4, ENOTES.Bs4],
      offset: 0,
      fs_rh: [],
      fs_lh: [],
    },
  },
  // F Sharp Major Scale: F♯ – G♯ – A♯ – B – C♯ – D♯ – E♯ – F♯ (E# = F)
  [EMAJORSCALES.Fs]: {
    once: {
      notes: [ENOTES.Fs3, ENOTES.Gs3, ENOTES.As3, ENOTES.B3, ENOTES.Cs4, ENOTES.Ds4, ENOTES.Es4, ENOTES.Fs4],
      offset: 0,
      fs_rh: [],
      fs_lh: [],
    },
    full: {
      notes: [ENOTES.Cs3, ENOTES.Ds3, ENOTES.Es3, ENOTES.Fs3, ENOTES.Gs3, ENOTES.As3, ENOTES.B3, ENOTES.Cs4, ENOTES.Ds4, ENOTES.Es4, ENOTES.Fs4, ENOTES.Gs4, ENOTES.As4, ENOTES.B4],
      offset: 3,
      fs_rh: [],
      fs_lh: [],
    },
  },
  // B Major Scale: B – C♯ – D♯ – E – F♯ – G♯ – A♯ – B
  // RH 1 2 3 1 2 3 4 1 2 3 1 2 3 4 5
  // LH 4 3 2 1 4 3 2 1 3 2 1 4 3 2 1
  [EMAJORSCALES.B]: {
    once: {
      notes: [ENOTES.B3, ENOTES.Cs4, ENOTES.Ds4, ENOTES.E4, ENOTES.Fs4, ENOTES.Gs4, ENOTES.As4, ENOTES.B4],
      offset: 0,
      fs_rh: [1, 2, 3, 1, 2, 3, 4, 5],
      fs_lh: [4, 3, 2, 1, 3, 2, 1, 4],
    },
    full: {
      notes: [ENOTES.Cs3, ENOTES.Ds3, ENOTES.E3, ENOTES.Fs3, ENOTES.Gs3, ENOTES.As3, ENOTES.B3, ENOTES.Cs4, ENOTES.Ds4, ENOTES.E4, ENOTES.Fs4, ENOTES.Gs4, ENOTES.As4, ENOTES.B4],
      offset: 6,
      fs_rh: [2, 3, 1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4, 5],
      fs_lh: [3, 2, 1, 4, 3, 2, 1, 3, 2, 1, 4, 3, 2, 1],
    },
  },
  // E Major Scale: E – F♯ – G♯ – A – B – C♯ – D♯ – E
  // RH 1 2 3 1 2 3 4 1 2 3 1 2 3 4 5
  // LH 5 4 3 2 1 3 2 1 4 3 2 1 3 2 1
  [EMAJORSCALES.E]: {
    once: {
      notes: [ENOTES.E3, ENOTES.Fs3, ENOTES.Gs3, ENOTES.A3, ENOTES.B3, ENOTES.Cs4, ENOTES.Ds4, ENOTES.E4],
      offset: 0,
      fs_rh: [1, 2, 3, 1, 2, 3, 4, 5],
      fs_lh: [5, 4, 3, 2, 1, 3, 2, 1,],
    },
    full: {
      notes: [ENOTES.Cs3, ENOTES.Ds3, ENOTES.E3, ENOTES.Fs3, ENOTES.Gs3, ENOTES.A3, ENOTES.B3, ENOTES.Cs4, ENOTES.Ds4, ENOTES.E4, ENOTES.Fs4, ENOTES.Gs4, ENOTES.A4, ENOTES.B4],
      offset: 2,
      fs_rh: [4, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 1, 2, 3], // this is wrong todo: wrong fingerset
      fs_lh: [1, 4, 3, 2, 1, 3, 2, 1, 4, 3, 2, 1, 3, 4],
    },
  },
  // A Major Scale: A – B – C♯ – D – E – F♯ – G♯ – A
  // RH 1 2 3 1 2 3 4 1 2 3 1 2 3 4 5
  // LH 5 4 3 2 1 3 2 1 4 3 2 1 3 2 1
  [EMAJORSCALES.A]: {
    once: {
      notes: [ENOTES.A3, ENOTES.B3, ENOTES.Cs4, ENOTES.D4, ENOTES.E4, ENOTES.Fs4, ENOTES.Gs4, ENOTES.A4],
      offset: 0,
      fs_rh: [1, 2, 3, 1, 2, 3, 4, 5],
      fs_lh: [5, 4, 3, 2, 1, 3, 2, 1,],
    },
    full: {
      notes: [ENOTES.Cs3, ENOTES.D3, ENOTES.E3, ENOTES.Fs3, ENOTES.Gs3, ENOTES.A3, ENOTES.B3, ENOTES.Cs4, ENOTES.D4, ENOTES.E4, ENOTES.Fs4, ENOTES.Gs4, ENOTES.A4, ENOTES.B4],
      offset: 5,
      fs_rh: [3, 1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4, 5, 1], // hmm this one is right i think
      fs_lh: [3, 2, 1, 3, 2, 1, 4, 3, 2, 1, 3, 2, 1, 4],
    },
  },
  // D Major Scale: D – E – F♯ – G – A – B – C♯ – D
  // Fingerset: Ascending
  // RH 1 2 3 1 2 3 4 1 2 3 1 2 3 4 5
  // LH 5 4 3 2 1 3 2 1 4 3 2 1 3 2 1
  [EMAJORSCALES.D]: {
    once: {
      notes: [ENOTES.D3, ENOTES.E3, ENOTES.Fs3, ENOTES.G3, ENOTES.A3, ENOTES.B3, ENOTES.Cs4, ENOTES.D4],
      offset: 0,
      fs_rh: [1, 2, 3, 1, 2, 3, 4, 5],
      fs_lh: [5, 4, 3, 2, 1, 3, 2, 1],
    },
    full: {
      notes: [ENOTES.Cs3, ENOTES.D3, ENOTES.E3, ENOTES.Fs3, ENOTES.G3, ENOTES.A3, ENOTES.B3, ENOTES.Cs4, ENOTES.D4, ENOTES.E4, ENOTES.Fs4, ENOTES.G4, ENOTES.A4, ENOTES.B4],
      offset: 1,
      fs_rh: [2, 3, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5],// 5 or 1 hmm hmm
      fs_lh: [5, 4, 3, 2, 1, 3, 2, 1, 4, 3, 2, 1, 3, 2] // 5 or 1 hmm
    },
  },
  // G Major Scale: G – A – B – C – D – E – F♯ – G
  // RH 1 2 3 1 2 3 4 1 2 3 1 2 3 4 5
  // LH 5 4 3 2 1 3 2 1 4 3 2 1 3 2 1
  [EMAJORSCALES.G]: {
    once: {
      notes: [ENOTES.G3, ENOTES.A3, ENOTES.B3, ENOTES.C4, ENOTES.D4, ENOTES.E4, ENOTES.Fs4, ENOTES.G4],
      offset: 0,
      fs_rh: [1, 2, 3, 1, 2, 3, 4, 5],
      fs_lh: [5, 4, 3, 2, 1, 3, 2, 1],
    },
    full: {
      notes: [ENOTES.C3, ENOTES.D3, ENOTES.E3, ENOTES.Fs3, ENOTES.G3, ENOTES.A3, ENOTES.B3, ENOTES.C4, ENOTES.D4, ENOTES.E4, ENOTES.Fs4, ENOTES.G4, ENOTES.A4, ENOTES.B4, ENOTES.C5],
      offset: 4,
      fs_rh: [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4],
      fs_lh: [5, 4, 3, 2, 1, 3, 2, 1, 4, 3, 2, 1, 3, 2, 1],
    },
  },
  // C Major Scale: C – D – E – F – G – A – B – C
  // Fingerset: Ascending
  // RH 1 2 3 1 2 3 4 1 2 3 1 2 3 4 5
  // LH 5 4 3 2 1 3 2 1 4 3 2 1 3 2 1
  [EMAJORSCALES.C]: {
    once: {
      notes: [ENOTES.C3, ENOTES.D3, ENOTES.E3, ENOTES.F3, ENOTES.G3, ENOTES.A3, ENOTES.B3, ENOTES.C4],
      offset: 0,
      fs_rh: [1, 2, 3, 1, 2, 3, 4, 5],
      fs_lh: [5, 4, 3, 2, 1, 3, 2, 1],
    },
    full: {
      notes: [ENOTES.C3, ENOTES.D3, ENOTES.E3, ENOTES.F3, ENOTES.G3, ENOTES.A3, ENOTES.B3, ENOTES.C4, ENOTES.D4, ENOTES.E4, ENOTES.F4, ENOTES.G4, ENOTES.A4, ENOTES.B4, ENOTES.C5],
      offset: 0,
      fs_rh: [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4, 5],
      fs_lh: [5, 4, 3, 2, 1, 3, 2, 1, 4, 3, 2, 1, 3, 2, 1]
    },
  },
  // Major scales with flats:
  // F Major Scale: F – G – A – B♭ – C – D – E – F (Bb = A#)
  // RH 1 2 3 4 1 2 3 1 2 3 4 1 2 3 4
  // LH 5 4 3 2 1 3 2 1 4 3 2 1 3 2 1
  [EMAJORSCALES.F]: {
    once: {
      notes: [ENOTES.F3, ENOTES.G3, ENOTES.A3, ENOTES.Bb3, ENOTES.C4, ENOTES.D4, ENOTES.E4, ENOTES.F4],
      offset: 0,
      fs_rh: [1, 2, 3, 4, 1, 2, 3, 4],
      fs_lh: [5, 4, 3, 2, 1, 3, 2, 1],
    },
    full: {
      notes: [ENOTES.C3, ENOTES.D3, ENOTES.E3, ENOTES.F3, ENOTES.G3, ENOTES.A3, ENOTES.Bb3, ENOTES.C4, ENOTES.D4, ENOTES.E4, ENOTES.F4, ENOTES.G4, ENOTES.A4, ENOTES.Bb4, ENOTES.C5,],
      offset: 3,
      fs_rh: [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4], // hmm move around?
      fs_lh: [5, 4, 3, 2, 1, 3, 2, 1, 4, 3, 2, 1, 3, 2, 1],
    },
  },
  // B Flat Major Scale: B♭ – C – D – E♭ – F – G – A – B♭ (Bb = A# und Eb = D#)
  [EMAJORSCALES.Bb]: {
    once: {
      notes: [ENOTES.Bb3, ENOTES.C4, ENOTES.D4, ENOTES.Eb4, ENOTES.F4, ENOTES.G4, ENOTES.A4, ENOTES.Bb4],
      offset: 0,
      fs_rh: [],
      fs_lh: [],
    },
    full: {
      notes: [ENOTES.C3, ENOTES.D3, ENOTES.Eb3, ENOTES.F3, ENOTES.G3, ENOTES.A3, ENOTES.Bb3, ENOTES.C4, ENOTES.D4, ENOTES.Eb4, ENOTES.F4, ENOTES.G4, ENOTES.A4, ENOTES.Bb4, ENOTES.C5],
      offset: 6,
      fs_rh: [],
      fs_lh: [],
    },
  },
  // E Flat Major Scale: E♭ – F – G – A♭ – B♭ – C – D – E♭ (Eb = D# Ab = G# Bb = A#)
  [EMAJORSCALES.Eb]: {
    once: {
      notes: [ENOTES.Eb3, ENOTES.F3, ENOTES.G3, ENOTES.Ab3, ENOTES.Bb3, ENOTES.C4, ENOTES.D4, ENOTES.Eb4],
      offset: 0,
      fs_rh: [],
      fs_lh: [],
    },
    full: {
      notes: [ENOTES.C3, ENOTES.D3, ENOTES.Eb3, ENOTES.F3, ENOTES.G3, ENOTES.Ab3, ENOTES.Bb3, ENOTES.C4, ENOTES.D4, ENOTES.Eb4, ENOTES.F4, ENOTES.G4, ENOTES.Ab4, ENOTES.Bb4, ENOTES.C5],
      offset: 2,
      fs_rh: [],
      fs_lh: [],
    },
  },
  // A Flat Major Scale: A♭ – B♭ – C – D♭ – E♭ – F – G – A♭
  [EMAJORSCALES.Ab]: {
    once: {
      notes: [ENOTES.Ab3, ENOTES.Bb3, ENOTES.C4, ENOTES.Db4, ENOTES.Eb4, ENOTES.F4, ENOTES.G4, ENOTES.Ab4],
      offset: 0,
      fs_rh: [],
      fs_lh: [],
    },
    full: {
      notes: [ENOTES.C3, ENOTES.Db3, ENOTES.Eb3, ENOTES.F3, ENOTES.G3, ENOTES.Ab3, ENOTES.Bb3, ENOTES.C4, ENOTES.Db4, ENOTES.Eb4, ENOTES.F4, ENOTES.G4, ENOTES.Ab4, ENOTES.Bb4, ENOTES.C5],
      offset: 5,
      fs_rh: [],
      fs_lh: [],
    },
  },
  // D Flat Major Scale: D♭ – E♭ – F – G♭ – A♭ – B♭ – C – D♭
  [EMAJORSCALES.Db]: {
    once: {
      notes: [ENOTES.Db3, ENOTES.Eb3, ENOTES.F3, ENOTES.Gb3, ENOTES.Ab3, ENOTES.Bb3, ENOTES.C4, ENOTES.Db4],
      offset: 0,
      fs_rh: [],
      fs_lh: [],
    },
    full: {
      notes: [ENOTES.C3, ENOTES.Db3, ENOTES.Eb3, ENOTES.F3, ENOTES.Gb3, ENOTES.Ab3, ENOTES.Bb3, ENOTES.C4, ENOTES.Db4, ENOTES.Eb4, ENOTES.F4, ENOTES.Gb4, ENOTES.Ab4, ENOTES.Bb4, ENOTES.C5],
      offset: 1,
      fs_rh: [],
      fs_lh: [],
    },
  },
  // G Flat Major Scale: G♭ – A♭ – B♭ – C♭ – D♭ – E♭ – F – G♭
  [EMAJORSCALES.Gb]: {
    once: {
      notes: [ENOTES.Gb3, ENOTES.Ab3, ENOTES.Bb3, ENOTES.Cb4, ENOTES.Db4, ENOTES.Eb4, ENOTES.F4, ENOTES.Gb4],
      offset: 0,
      fs_rh: [],
      fs_lh: [],
    },
    full: {
      notes: [ENOTES.Db3, ENOTES.Eb3, ENOTES.F3, ENOTES.Gb3, ENOTES.Ab3, ENOTES.Bb3, ENOTES.Cb4, ENOTES.Db4, ENOTES.Eb4, ENOTES.F4, ENOTES.Gb4, ENOTES.Ab4, ENOTES.Bb4, ENOTES.Cb5],
      offset: 3,
      fs_rh: [],
      fs_lh: [],
    },
  },
  // C Flat Major Scale: C♭ – D♭ – E♭ – F♭ – G♭ – A♭ – B♭ – C♭
  [EMAJORSCALES.Cb]: {
    once: {
      notes: [ENOTES.Cb4, ENOTES.Db4, ENOTES.Eb4, ENOTES.Fb4, ENOTES.Gb4, ENOTES.Ab4, ENOTES.Bb4, ENOTES.Cb5],
      offset: 0,
      fs_rh: [],
      fs_lh: [],
    },
    full: {
      notes: [ENOTES.Db3, ENOTES.Eb3, ENOTES.Fb3, ENOTES.Gb3, ENOTES.Ab3, ENOTES.Bb3, ENOTES.Cb4, ENOTES.Db4, ENOTES.Eb4, ENOTES.Fb4, ENOTES.Gb4, ENOTES.Ab4, ENOTES.Bb4, ENOTES.Cb5],
      offset: 6,
      fs_rh: [],
      fs_lh: [],
    },
  },

};
