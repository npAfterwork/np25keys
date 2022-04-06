import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';
import {INPPianoRollKey} from '../../../@np-components/@types/np-audio.types';
import {NPPianoRollService} from '../../../@np-components/services/np-audio/np-piano-roll.service';
import {CTEXTS} from '../../@consts/texts.consts';
import {LessonsService} from '../../services/lessons.service';
import {OptionsService} from '../../services/options.service';
import {CLessonBundleIndex} from '../../utils/lesson.factory';

@Component({
             selector:    'app-play-page',
             templateUrl: './play.page.html',
             styleUrls:   ['./play.page.scss'],
           })
export class PlayPage implements OnInit, OnDestroy {
  CTEXTS = CTEXTS;
  private routeSub: Subscription;
  keys: INPPianoRollKey[] = [];
  private keySub: Subscription;


  constructor(
    private readonly route: ActivatedRoute,
    public readonly lessonService: LessonsService,
    public readonly npPianoRoll: NPPianoRollService,
    public readonly options: OptionsService,
    protected readonly translate: TranslateService,
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      if (params.type === 'free') {
        this.lessonService.startBundle(CLessonBundleIndex.Freeplay);
      }
      if (!this.lessonService.hasLesson) {
        // TODO: start with woot
        this.lessonService.startBundle(CLessonBundleIndex['Scales Minor I'], CLessonBundleIndex['Scales Minor I'].bundle.lessons[0][0]);
      }
    });
    this.keySub = this.npPianoRoll.keys$.subscribe(keys => {
      this.keys = Object.values(keys);
    });
  }

  ngOnDestroy(): void {
    this.keySub.unsubscribe();
    this.routeSub.unsubscribe();
  }

}
