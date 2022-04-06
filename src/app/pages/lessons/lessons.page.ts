import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CTEXTS} from '../../@consts/texts.consts';
import {ILessonPack, TLessonPack} from '../../@types/app.types';
import {NavigateService} from '../../services/navigate.service';
import {OptionsService} from '../../services/options.service';
import {CLessonBundleIndex} from '../../utils/lesson.factory';

@Component({
  selector: 'app-lessons-page',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {
  CTEXTS = CTEXTS;
  lessonPacks: ILessonPack[] = [];

  tab: TLessonPack | 'none' = 'Notes';
  private routeSub: Subscription;

  constructor(
    public readonly optionsService: OptionsService,
    public readonly navService: NavigateService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.lessonPacks = Object.values(CLessonBundleIndex).filter(bundle => bundle.type !== 'freeplay');
    this.routeSub = this.route.params.subscribe(params => {
      this.tab = params.topic;
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
