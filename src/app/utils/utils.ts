import {TranslateService} from '@ngx-translate/core';
import {ENOTES} from '../../@np-components/@consts/np-note.consts';
import {CTEXTS} from '../@consts/texts.consts';
import {ILesson, ILessonPart} from '../@types/app.types';


export function reduceLessonNotes(notes: ENOTES[][], max = Number.MAX_VALUE): ENOTES[]{
  return notes.reduce((prev, current) =>  prev.concat(current), []).filter((value, idx) => idx < max);
}

export function lessonName(translate:TranslateService, lesson: ILesson, lessonPart: ILessonPart, withName = false) {
  const pname = lessonPart.name ? translate.instant(lessonPart.name) : '';
  const pdir = lessonPart.direction ? translate.instant(CTEXTS.LESSONS.directions + lessonPart.direction) : '';
  const phand = lessonPart.hand ? translate.instant(CTEXTS.LESSONS.hands + lessonPart.hand) : '';
  const pSize = lessonPart.size ? translate.instant(CTEXTS.LESSONS.size + lessonPart.size) : '';
  const attributes = [pname, pdir, phand, pSize].filter(str => !!str.length);
  if (!attributes.length || withName) {
    const lname = translate.instant(lesson.name);
    attributes.unshift(lname);
  }
  return attributes.join(' | ');
}
