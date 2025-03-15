import { Injectable, OnDestroy } from '@angular/core';
import { IMidiEvent } from '../../@np-components/@types/np-audio.types';
import { THexColor } from '../../@np-components/@types/np.types';
import { keysToNames, lessonNotesToNames, notesToNames } from '../../@np-components/utils/np-audio-utils';
import { CTEXTS } from '../@consts/texts.consts';
import { ILesson, ILessonPack, TInfoDisplayMode } from '../@types/app.types';
import { lessonName, reduceLessonNotes } from '../utils/utils';
import { LessonsDatastore } from './lessons.datastore';

@Injectable({
              providedIn: 'root'
            })
export class LessonsService extends LessonsDatastore implements OnDestroy {

  private update(advanced: boolean) {
    if (!this.hasLesson) return;
    if (this.lessonPart.playStyle === 'staccato') {
      this.pianoRoll.updateFingerSet([this.notes], [this.lessonPart.fingersets[this.lessonNoteIdx]]);
    } else {
      this.pianoRoll.updateFingerSet(this.lessonPart.notes, this.lessonPart.fingersets);
    }
    if (advanced) {
      this.updateTexts(true);
      this.lightUpNextNotes(this.colors2);
    } else {
      this.texts.mainInfo(this.getMainText());
      this.lightUpNextNotes(this.colors);
    }
  }

  private restartLesson(lessonIndex?: number, lessonPart = 0) {
    this.pianoRoll.dimAll();
    this.played = [];
    this.last = [];
    if (typeof lessonIndex === 'number') {
      this.lessonIdx = lessonIndex;
    }
    this.lessonPartIdx = lessonPart;
    this.lessonNoteIdx = 0;
    this.update(true);
  }

  private checkNotes() {
    if (!this.isFreeplay) {
      const pressed = this.pressed.value.map(key => key.noteIdx).sort().join('-');
      const current = this.notes.sort().join('-');
      return pressed == current;
    }
    return false;
  }

  private advanceNotes() {
    let advanced = true;
    this.last.push(...this.notes);
    if (this.hasMoreNotes) {
      this.lessonNoteIdx++;
      advanced = false;
    } else if (this.hasMoreLessonParts || (this.options.loop === 'section')) {
      this.lessonNoteIdx = 0;
      if (this.options.loop !== 'section')
        this.lessonPartIdx++;
    } else if (this.hasMoreLessons || (this.options.loop === 'lesson')) {
      this.lessonPartIdx = 0;
      this.lessonNoteIdx = 0;
      if (this.options.loop !== 'lesson')
        this.lessonIdx++;
    }
    this.update(advanced);
  }

  protected override onMidiMessage(ev: IMidiEvent) {
    super.onMidiMessage(ev);
    if (this.checkNotes()) {
      this.advanceNotes();
    } else if (ev.pressed) this.texts.mainInfo(this.getMainText());
    // TODO: freeplay
    if (this.isFreeplay) {
      this.texts.mainInfo([keysToNames(this.played)]);
    }
  }

  //<editor-fold desc="*** Practice Control ***">

  startBundle(pack: ILessonPack, lesson?: ILesson) {
    this.pack = pack;
    let lessonIdx = 0;
    if (lesson) {
      pack.bundle.lessons.forEach((aLesson, idx) => {
        if (aLesson === lesson) {
          lessonIdx = idx;
        }
      });
    }
    this.restartLesson(lessonIdx);
  }

  previousLesson() {
    if (this.hasPrevLessonParts) {
      this.restartLesson();
    } else if (this.hasPrevLessons) {
      this.restartLesson(this.lessonIdx - 1);
    }
  }

  previousLessonPart() {
    if (this.hasPrevLessonParts) {
      this.restartLesson(this.lessonIdx, this.lessonPartIdx - 1);
    } else if (this.hasPrevLessons) {
      this.restartLesson(this.lessonIdx - 1, this.lastLesson.parts.length - 1);
    }
  }

  restartLessonPart() {
    this.restartLesson(this.lessonIdx, this.lessonPartIdx);
  }

  advanceLessonPart() {
    if (this.hasMoreLessonParts) {
      this.restartLesson(this.lessonIdx, this.lessonPartIdx + 1);
    } else {
      this.advanceLesson();
    }
  }

  advanceLesson() {
    if (this.hasMoreLessons) {
      this.restartLesson(this.lessonIdx + 1);
    }
  }

  //</editor-fold>

  //<editor-fold desc="*** Display *** ">

  toggleMainDisplayMode() {
    switch (this.options.maindisplaymode) {
      case 'playing':
        this.save.maindisplaymode('all');
        break;
      case 'all':
        this.save.maindisplaymode('lesson');
        break;
      case 'lesson':
        this.save.maindisplaymode('playing');
    }
    this.texts.mainInfo(this.getMainText());
  }

  // noinspection JSMethodCanBeStatic
  private toggleInfoDisplayMode(mode: TInfoDisplayMode) {
    switch (mode) {
      case 'part':
        return 'part-compact';
      case 'part-compact':
        return 'lesson';
      case 'lesson':
        return 'lesson-compact';
      case 'lesson-compact':
        return 'bundle';
      case 'bundle':
        return 'bundle-compact';
      case 'bundle-compact':
        return 'part';
    }
  }

  toggleLeftDisplayMode() {
    this.save.leftdisplaymode(this.toggleInfoDisplayMode(this.options.leftdisplaymode));
    this.texts.leftInfo(this.getInfoText(this.options.leftdisplaymode));
  }

  toggleRightDisplayMode() {
    this.save.rightdisplaymode(this.toggleInfoDisplayMode(this.options.rightdisplaymode));
    this.texts.rightInfo(this.getInfoText(this.options.rightdisplaymode));
  }

  protected lightUpNextNotes(colors: THexColor[]) {
    this.pianoRoll.dimAll();
    if (this.lessonPart) {
      if (this.lessonPart.playStyle === 'legato') {
        this.pianoRoll.light(reduceLessonNotes(this.left, colors.length), colors);
      } else {
        this.pianoRoll.light(reduceLessonNotes([this.notes], colors.length), colors);
      }
    }
  }


  protected getInfoText(mode: TInfoDisplayMode) {
    if (!this.hasLesson) return '';
    switch (mode) {
      case 'part':
      case 'part-compact':
        return this.getPartInfoText(mode);
      case 'lesson':
      case 'lesson-compact':
        return this.#getLessonInfoText(mode);
      case 'bundle':
      case 'bundle-compact':
        return this.#getBundleInfoText(mode);
    }
  }

  #getBundleInfoText = (mode: 'bundle' | 'bundle-compact') => {
    const bundle = this.translate.instant(CTEXTS.LESSONS.bundle);
    const bname = this.translate.instant(this.pack.name);
    return (mode === 'bundle' ? bundle : '') + bname;
  };
  #getLessonInfoText = (mode: 'lesson' | 'lesson-compact') => {
    const lesson = this.translate.instant(CTEXTS.LESSONS.lesson);
    const lname = this.translate.instant(this.lesson.name);
    return (mode === 'lesson' ? lesson : '') + lname;
  };
  private getPartInfoText = (mode: 'part' | 'part-compact') => {
    const part = this.translate.instant(CTEXTS.LESSONS.part);
    const pname = lessonName(this.translate, this.lesson, this.lessonPart);
    return (mode === 'part' ? part : '') + pname;
  };

  protected getMainText() {
    if (!this.hasLesson) return [''];
    const bundle = this.translate.instant(CTEXTS.LESSONS.bundle);
    const bname = this.translate.instant(this.pack.name);
    const lesson = this.translate.instant(CTEXTS.LESSONS.lesson);
    const lname = this.translate.instant(this.lesson.name);

    switch (this.options.maindisplaymode) {
      case 'playing':
        return ['Playing: ' + keysToNames(this.playedNotes), '&nbsp;'];
      case 'all':

        return [
          'Next : ' + notesToNames(this.translate, this.notes, false, true),
          'Left : ' + lessonNotesToNames(this.translate, this.left, false, true),
          'Notes: ' + lessonNotesToNames(this.translate, this.lessonPart.notes, false, true),
          lesson + lname,
          bundle + bname,
        ];
      case 'lesson':
        return [lesson + lessonNotesToNames(this.translate, this.lessonPart.notes, false, true), '&nbsp;'];
    }
  }

  protected getMainLessonInfo() {
    if (!this.hasLesson) return ['&nbsp;', '&nbsp;'];
    const bundle = this.translate.instant(CTEXTS.LESSONS.bundle) + this.translate.instant(this.pack.name);
    const lesson = this.translate.instant(CTEXTS.LESSONS.lesson) + this.translate.instant(this.lesson.name);
    const summary = lessonName(this.translate, this.lesson, this.lessonPart, true);
    const part = this.translate.instant(CTEXTS.LESSONS.part) + summary;
    return [
      summary,
      '&nbsp;',
      bundle,
      lesson,
      part,
    ];
  }

  protected updateTexts(showLessonInfo = false) {
    if (showLessonInfo) {
      this.texts.mainInfo(this.getMainLessonInfo());
    } else {
      this.texts.mainInfo(this.getMainText());
    }
    this.texts.leftInfo(this.getInfoText(this.options.leftdisplaymode));
    this.texts.rightInfo(this.getInfoText(this.options.rightdisplaymode));
  }

  //</editor-fold>

}
