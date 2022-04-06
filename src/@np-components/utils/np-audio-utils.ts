import {TranslateService} from '@ngx-translate/core';
import {CNPAUDIO_TEXTS} from '../@consts/np-audio.consts';
import {ENOTES} from '../@consts/np-note.consts';
import {INPPianoRollKey, TNoteIndex} from '../@types/np-audio.types';

const sharpIdxMods = {1: true, 3: true, 6: true, 8: true, 10: true};

export function noteIdxIsSharp(noteIdx: TNoteIndex) {
  return !!sharpIdxMods[(noteIdx % 12)];
}

export function noteIdxToOctave(idx: TNoteIndex): number {
  return Math.trunc(idx / 12) - 1;
}

export function randomNote(first: TNoteIndex, last: TNoteIndex) {
  return Math.trunc(Math.random() * (last - first + 1)) + first;
}

/**
 * names need to be a translated text array with the 12 key names
 */
export function noteIdxToString(names: string[], idx: TNoteIndex, octave = true): string {
  return (names[idx % 12]) + (octave ? noteIdxToOctave(idx) : '');
}

export function noteIdxToName(translate: TranslateService, noteIdx: TNoteIndex, octave = true, dblspaced = false): string {
  if (!noteIdx) return '';
  const result = noteIdxToString(translate.instant(CNPAUDIO_TEXTS.NOTES.names), noteIdx, octave);
  return (dblspaced && (result.length < 2)) ? result + ' ' : result;
}

export function notesToNames(translate: TranslateService, noteIdxs: TNoteIndex[], octave = false, dblspaced = false) {
  if (!noteIdxs) return '';
  return noteIdxs.map(noteIdx => noteIdxToName(translate, noteIdx, octave, dblspaced)).join(dblspaced ? '- ' : ' - ');
}
export function keysToNames(keys: INPPianoRollKey[], dblspaced = false) {
  if (!keys) return '';
  return keys.map(key => (key.noteName.length === 1) ? key.noteName + '&nbsp;': key.noteName).join(dblspaced ? ' . ' : '| ');
}

export function lessonNotesToNames(translate: TranslateService, lesson: ENOTES[][], octave = false, dblspaced = false) {
  if (!lesson) return '';
  return lesson.map(notes => notes.map(note => noteIdxToName(translate, note, octave, dblspaced)).join('- ')).join('- ');
}
