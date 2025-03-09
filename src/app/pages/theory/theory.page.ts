import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CTEXTS } from '../../@consts/texts.consts';
import { ILessonPack, TLessonPack } from '../../@types/app.types';
import { NavigateService } from '../../services/navigate.service';
import { OptionsService } from '../../services/options.service';
import { CLessonBundleIndex } from '../../utils/lesson.factory';


@Component({
    selector: 'app-theory-page',
    templateUrl: './theory.page.html',
    styleUrls: ['./theory.page.scss'],
    standalone: false
})
export class TheoryPage implements OnInit {
  CTEXTS = CTEXTS;
  tab: TLessonPack = 'Notes';
  lessonBundles: ILessonPack[] = [];
  private routeSub: Subscription;

  constructor(
    public readonly options: OptionsService,
    public readonly navService: NavigateService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.lessonBundles = Object.values(CLessonBundleIndex).filter(bundle => bundle.type !== 'freeplay');

    this.routeSub = this.route.params.subscribe(params => {
      if(params['topic'] !== 'none'){
        this.tab = params['topic'];
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
