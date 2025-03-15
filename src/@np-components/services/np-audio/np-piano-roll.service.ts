import {DOCUMENT} from '@angular/common';
import { Injectable, NgZone, OnDestroy, inject } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {CCSS_VAR_WHITE_KEY_COUNT, CLS_KEY_OPTIONS_AUDIO_COVER, CLS_KEY_OPTIONS_AUDIO_DISPLAY, CLS_KEY_OPTIONS_AUDIO_PIANO_ROLL} from '../../@consts/np-audio.consts';
import {ENOTES} from '../../@consts/np-note.consts';
import {IMidiEvent, INPPianoRollKey, TNoteIndex, TPianoRollMode} from '../../@types/np-audio.types';
import {THexColor} from '../../@types/np.types';
import {noteIdxIsSharp, noteIdxToName, noteIdxToOctave} from '../../utils/np-audio-utils';
import {NPDataStore} from '../../base/np-data-store';
import {NPMidiService} from './np-midi.service';

@Injectable({
              providedIn: 'root',
              deps:       [DOCUMENT]
            })
export class NPPianoRollService implements OnDestroy {
  protected document = inject<Document>(DOCUMENT);
  protected readonly translate = inject(TranslateService);
  protected readonly midiService = inject(NPMidiService);
  private readonly ngZone = inject(NgZone);


  private evSub: Subscription;
  private langSub: Subscription;

  private coverStore = new NPDataStore({
                                         visible: new BehaviorSubject<boolean>(true),
                                         notes:   new BehaviorSubject<boolean>(true),
                                       }, {}, CLS_KEY_OPTIONS_AUDIO_COVER);
  private displayStore = new NPDataStore({
                                           visible:    new BehaviorSubject<boolean>(true),
                                           notes:      new BehaviorSubject<boolean>(true),
                                           octave:     new BehaviorSubject<boolean>(true),
                                           fingerset:  new BehaviorSubject<boolean>(true),
                                           playing:    new BehaviorSubject<boolean>(true),
                                           velocity:   new BehaviorSubject<boolean>(true),
                                           lightup:    new BehaviorSubject<boolean>(true),
                                           validation: new BehaviorSubject<boolean>(true),
                                         }, {}, CLS_KEY_OPTIONS_AUDIO_DISPLAY);
  private pianorollStore = new NPDataStore({
                                             visible:    new BehaviorSubject<boolean>(true),
                                             notes:      new BehaviorSubject<boolean>(true),
                                             octave:     new BehaviorSubject<boolean>(true),
                                             fingerset:  new BehaviorSubject<boolean>(true),
                                             playing:    new BehaviorSubject<boolean>(true),
                                             velocity:   new BehaviorSubject<boolean>(true),
                                             lightup:    new BehaviorSubject<boolean>(true),
                                             validation: new BehaviorSubject<boolean>(true),
                                             mode:       new BehaviorSubject<TPianoRollMode>('twentyFiveKeys'),
                                             _start:     new BehaviorSubject<ENOTES>(ENOTES.C3),
                                             _end:       new BehaviorSubject<ENOTES>(ENOTES.C5)
                                           }, {
                                             mode:      (mode: TPianoRollMode, store) => {
                                               switch (mode) {
                                                 case 'lowerOctave':
                                                   this.pianoroll._start(ENOTES.C3);
                                                   this.pianoroll._end(ENOTES.C4);
                                                   break;
                                                 case 'upperOctave':
                                                   this.pianoroll._start(ENOTES.C4);
                                                   this.pianoroll._end(ENOTES.C5);
                                                   break;
                                                 case 'twentyFiveKeys':
                                                   this.pianoroll._start(ENOTES.C3);
                                                   this.pianoroll._end(ENOTES.C5);
                                                   break;
                                               }
                                               this.updateKeys();
                                             },
                                           }, CLS_KEY_OPTIONS_AUDIO_PIANO_ROLL);

  private keys: BehaviorSubject<{ [key: number]: INPPianoRollKey }> = new BehaviorSubject<{ [p: number]: INPPianoRollKey }>({});
  public readonly keys$: Observable<{ [key: number]: INPPianoRollKey }> = this.keys.asObservable();

  public readonly display$ = this.displayStore.get$;
  public readonly display = this.displayStore.save;
  public readonly cover$ = this.coverStore.get$;
  public readonly cover = this.coverStore.save;
  public readonly pianoroll$ = this.pianorollStore.get$;
  public readonly pianoroll = this.pianorollStore.save;
  protected readonly options = {
    display:   this.displayStore.value,
    cover:     this.coverStore.value,
    pianoroll: this.pianorollStore.value
  };


  constructor() {
    this.evSub = this.midiService.onMessage$.subscribe((ev => this.onMidiMessage(ev)));
    this.langSub = this.translate.onLangChange.subscribe(ev => this.updateKeys());
  }

  ngOnDestroy(): void {
    this.evSub.unsubscribe();
    this.langSub.unsubscribe();
  }

  private updateKeys() {
    let whiteKeyCount = 0;
    const keys: { [key: number]: INPPianoRollKey } = {};
    const colors = [
      '#b8b511',
      '#c2a557',
      '#1ca612',
      '#6d139d',
      '#941369',
      '#8b1321',
      '#13ceb2',
      '#c4a12e',
      '#45ea41',
      '#2d9bc9',
      '#50e34c',
    ];

    for (let i = this.pianorollStore.value._start; i <= this.pianorollStore.value._end; i++) {
      const isSharp = noteIdxIsSharp(i);
      if (!isSharp) {
        whiteKeyCount++;
      }
      keys[i] = {
        noteIdx:   i,
        octave:    noteIdxToOctave(i),
        sharp:     isSharp,
        noteName:  noteIdxToName(this.translate, i, false),
        pressed:   false,
        fingerset: -1,
        velocity:  0,
        lit:       false,
        color:     colors[i % colors.length]
      };
    }
    this.document.body.style.setProperty(CCSS_VAR_WHITE_KEY_COUNT, whiteKeyCount.toString(10));
    this.keys.next(keys);
  }

  private onMidiMessage(ev: IMidiEvent) {
    if (this.keys.value[ev.noteIdx]) {
      this.ngZone.run(() => {
        this.keys.value[ev.noteIdx].velocity = ev.velocity;
        this.keys.value[ev.noteIdx].pressed = ev.pressed;
      });
    }
  }

  // pressed by user (via touch on screen) => simulate midi event
  pressNote(idx: number) {
    this.midiService.sendMessage(idx, true);
  }

  // released by user (via touch on screen) => simulate midi event
  releaseNote(idx: TNoteIndex) {
    this.midiService.sendMessage(idx, false);
  }

  private updateLit(noteIdx: TNoteIndex | TNoteIndex[], color?: THexColor | THexColor[], dim = false) {
    if (Array.isArray(noteIdx) && Array.isArray(color) && (noteIdx.length <= color.length)) {
      noteIdx.forEach((note, idx) => {
        if (color) this.keys.value[note].color = color[idx];
        this.keys.value[note].lit = !dim;
      });
    } else if (Array.isArray(noteIdx) && !Array.isArray(color)) {
      noteIdx.forEach(idx => {
        if (color) this.keys.value[idx].color = color;
        this.keys.value[idx].lit = !dim;
      });
    } else if (!Array.isArray(noteIdx) && !Array.isArray(color)) {
      if (color) this.keys.value[noteIdx].color = color;
      this.keys.value[noteIdx].lit = !dim;
    } else {
      throw Error('misconfiguration in updateLit');
    }
  }

  dim(noteIdx: TNoteIndex | TNoteIndex[]) {
    this.updateLit(noteIdx, undefined, true);
  }

  dimAll() {
    Object.values(this.keys.value).forEach(key => key.lit = false);
  }

  light(noteIdx: TNoteIndex | TNoteIndex[], color?: THexColor | THexColor[]) {
    this.updateLit(noteIdx, color);
  }

  // Hmm opens access to concurrent because the single keys are not push notify...
  key(noteIdx: TNoteIndex) {
    return this.keys.value[noteIdx];
  }


  updateFingerSet(allnotes: ENOTES[][], fingersets: number[][]) {
    Object.values(this.keys.value).forEach(key => key.fingerset = undefined);
    if (!allnotes || !fingersets) return;
    if (fingersets.length !== allnotes.length) {
      console.error('Fingerset Setup is Wrong', fingersets, allnotes); return;
    }
    allnotes.forEach((notes, idx) => {
      notes.forEach((note, noteidx) => {
        this.key(note).fingerset = fingersets[idx][noteidx];
      })
    });
  }
}
