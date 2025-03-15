import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { INPPianoRollKey } from '../../../@np-components/@types/np-audio.types';
import { NPPianoRollService } from '../../../@np-components/services/np-audio/np-piano-roll.service';
import { CTEXTS } from '../../@consts/texts.consts';
import { LessonsService } from '../../services/lessons.service';
import { OptionsService } from '../../services/options.service';
import { CLessonBundleIndex } from '../../utils/lesson.factory';
import {
  NPPanelRackComponent,
} from '../../../@np-components/components/np-audio/np-panel-rack/np-panel-rack.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { DisplayPanelComponent } from '../../components/display-panel/display-panel.component';
import { PracticePanelComponent } from '../../components/practice-panel/practice-panel.component';
import { PianoRollCoverPanelComponent } from '../../components/piano-roll-cover-panel/piano-roll-cover-panel.component';
import { PianoRollDisplayComponent } from '../../components/piano-roll-display-panel/piano-roll-display.component';
import {
  NPPianoRollComponent,
} from '../../../@np-components/components/np-audio/np-piano-roll/np-piano-roll.component';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-play-page',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
  imports: [NPPanelRackComponent, ToolbarComponent, DisplayPanelComponent, PracticePanelComponent, PianoRollCoverPanelComponent, PianoRollDisplayComponent, NPPianoRollComponent, AsyncPipe, TranslatePipe, NgIf],
})
export class PlayPage implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  readonly lessonService = inject(LessonsService);
  readonly npPianoRoll = inject(NPPianoRollService);
  readonly options = inject(OptionsService);
  protected readonly translate = inject(TranslateService);

  CTEXTS = CTEXTS;
  private routeSub: Subscription;
  keys: INPPianoRollKey[] = [];
  private keySub: Subscription;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      if (params['type'] === 'free') {
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
