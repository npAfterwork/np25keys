import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CTHEORY_TEXTS } from '../@consts/texts.theory.consts';
import { TLessonPack } from '../@types/app.types';

@Pipe({
    name: 'translateTheory',
})
export class TranslateTheoryPipe implements PipeTransform {
  private readonly translate = inject(TranslateService);


  /**
   * Gets the text from the '../@consts/texts.theory.consts'
   */
  transform(value: TLessonPack): any {
    if (!value) {
      return '';
    }
    return CTHEORY_TEXTS[this.translate.currentLang][value];
  }

}
