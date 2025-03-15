import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ENOTES } from '../../@np-components/@consts/np-note.consts';
import { IMidiEvent, INPPianoRollKey } from '../../@np-components/@types/np-audio.types';
import { NPDataStore } from '../../@np-components/base/np-data-store';
import { NPAudioService } from '../../@np-components/services/np-audio/np-audio.service';
import { NPMidiService } from '../../@np-components/services/np-audio/np-midi.service';
import { NPPianoRollService } from '../../@np-components/services/np-audio/np-piano-roll.service';
import { CLS_KEY_LESSONS } from '../@consts/app.consts';
import { ILesson, ILessonPack, ILessonPart, TInfoDisplayMode, TLoopMode, TMainDisplayMode } from '../@types/app.types';

@Injectable()
export class LessonsDatastore {
  protected readonly translate = inject(TranslateService);
  protected readonly midiService = inject(NPMidiService);
  protected readonly audioService = inject(NPAudioService);
  protected readonly pianoRoll = inject(NPPianoRollService);


  private readonly messageStore = new NPDataStore({
                                           leftInfo:  new BehaviorSubject<string>(''),
                                           rightInfo: new BehaviorSubject<string>(''),
                                           mainInfo:  new BehaviorSubject<string[]>(['']),
                                           mainMode:  new BehaviorSubject<string>(''),
                                         });

  public texts$ = this.messageStore.get$;
  public texts = this.messageStore.next;
  private readonly metronome = new BehaviorSubject<boolean>(false);
  public metronome$ = this.metronome.asObservable();

  private readonly optionsStore = new NPDataStore({
                                           currentBundle:    new BehaviorSubject<number>(-1), // TODO: current progrss
                                           currentLessonIdx: new BehaviorSubject<number>(-1),
                                           loop:             new BehaviorSubject<TLoopMode>('none'),
                                           maindisplaymode:  new BehaviorSubject<TMainDisplayMode>('all'),
                                           leftdisplaymode:  new BehaviorSubject<TInfoDisplayMode>('bundle'),
                                           rightdisplaymode: new BehaviorSubject<TInfoDisplayMode>('lesson'),
                                         }, {}, CLS_KEY_LESSONS);
  public save = this.optionsStore.save;
  public options = this.optionsStore.value;
  public options$ = this.optionsStore.get$;

  private readonly evSub: Subscription;

  protected pack: ILessonPack;
  protected lessonIdx: number;
  protected lessonPartIdx: number;
  protected lessonNoteIdx: number;


  protected played: INPPianoRollKey[] = [];
  protected last: ENOTES[] = [];

  protected pressed: BehaviorSubject<INPPianoRollKey[]> = new BehaviorSubject<INPPianoRollKey[]>([]);
  public readonly pressed$ = this.pressed.asObservable();

  private readonly maxInput = 25;

  protected colors = [
    '#179b29',
    '#165d20',
    '#14411a',
    '#0f3414',
  ];
  protected colors2 = [
    '#9c8617',
    '#5d5116',
    '#403914',
    '#332d0f',
  ];

  constructor() {
    this.evSub = this.midiService.onMessage$.subscribe(ev => this.onMidiMessage(ev));
  }

  protected onMidiMessage(ev: IMidiEvent) {
    let pressed = this.pressed.value;
    if (ev.pressed) {
      const rollKey = this.pianoRoll.key(ev.noteIdx);
      pressed.push(rollKey);
      this.played.unshift(rollKey);
      if (this.played.length >= this.maxInput) {
        this.played.pop();
      }
    } else {
      pressed = pressed.filter(key => key.noteIdx !== ev.noteIdx);
    }
    this.pressed.next(pressed);
  }

  ngOnDestroy(): void {
    this.evSub.unsubscribe();
    this.endLesson();
  }

  //<editor-fold desc="*** Getter and Setter ***">

  get hasPack() {
    return !!this.pack;
  }

  get hasLesson() {
    return this.pack?.bundle.lessons.length > this.lessonIdx;
  }

  get lesson(): ILesson {
    return this.hasLesson ? this.pack.bundle.lessons[this.lessonIdx] : null;
  }

  get lessonPart(): ILessonPart {
    return this.hasLesson ? this.pack.bundle.lessons[this.lessonIdx].parts[this.lessonPartIdx] : null;
  }

  get hasMoreLessons() {
    return (this.pack?.bundle.lessons.length > (this.lessonIdx + 1));
  }

  get hasMoreLessonParts() {
    return this.hasLesson && (this.pack.bundle.lessons[this.lessonIdx].parts.length > (this.lessonPartIdx + 1));
  }
  get hasPrevLessonParts() {
    return this.lessonPartIdx > 0;
  }

  get nextLesson() {
    return this.hasMoreLessons ? this.pack.bundle.lessons[this.lessonIdx + 1] : null;
  }

  get hasPrevLessons() {
    return this.lessonIdx > 0;
  }

  get lastLesson() {
    return this.hasPrevLessons ? this.pack.bundle.lessons[this.lessonIdx - 1] : null;
  }

  get hasNotes() {
    return this.hasLesson && (this.lessonPart.notes.length > this.lessonNoteIdx);
  }

  get notes(): ENOTES[] {
    return this.hasNotes ? this.lessonPart.notes[this.lessonNoteIdx] : null;
  }

  get hasMoreNotes() {
    return this.hasLesson && (this.lessonPart.notes.length > (this.lessonNoteIdx + 1));
  }

  get more() {
    return this.hasMoreNotes ? this.lessonPart.notes[this.lessonNoteIdx + 1] : null;
  }

  get left() {
    return this.lessonPart.notes.slice(this.lessonNoteIdx);
  }

  get isFreeplay() {
    return !this.hasPack || (this.pack.type === 'freeplay');
  }

  get playedNotes() {
    return this.played;
  }

  toggleLoop() {
    let nextLoopModeOnSection: TLoopMode = (this.options.loop === 'section') ? 'none' : 'lesson';
    this.save.loop(this.options.loop === 'lesson' ? 'section' : nextLoopModeOnSection);
  }

  toggleMetronome() {
    this.metronome.next(!this.metronome.value);
    if (this.metronome.value) {
      this.audioService.startMetronome();
    } else {
      this.audioService.stopMetronome();
    }
  }

  //</editor-fold>

  protected endLesson() {
    if (this.evSub) {
      this.evSub.unsubscribe(); // Hmm
    }
  }


}
