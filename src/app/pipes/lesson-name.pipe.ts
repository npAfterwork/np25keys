import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ILesson, ILessonPart } from '../@types/app.types';
import { lessonName } from '../utils/utils';

@Pipe({
    name: 'lessonName',
})
export class LessonNamePipe implements PipeTransform {

  constructor(
    private readonly translate: TranslateService
  ) {}


  transform(value: ILesson, part: ILessonPart, withName = true): any {
    if (!value || !part) {
      return '';
    }
    return lessonName(this.translate, value, part, withName);
  }

}
