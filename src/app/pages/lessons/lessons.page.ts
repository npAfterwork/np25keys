import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CTEXTS } from '../../@consts/texts.consts';
import { ILessonPack, TLessonPack } from '../../@types/app.types';
import { NavigateService } from '../../services/navigate.service';
import { OptionsService } from '../../services/options.service';
import { CLessonBundleIndex } from '../../utils/lesson.factory';
import {
  NPPanelRackComponent,
} from '../../../@np-components/components/np-audio/np-panel-rack/np-panel-rack.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { TranslatePipe } from '@ngx-translate/core';
import {
  NPTogglePanelComponent,
} from '../../../@np-components/components/np-audio/np-toggle-panel/np-toggle-panel.component';
import {
  NPPadPanelComponent,
} from '../../../@np-components/components/np-audio/np-mpc-pad-panel/np-pad-panel.component';
import { NPMpcPadComponent } from '../../../@np-components/components/np-audio/np-mpc-pad/np-mpc-pad.component';
import { NgForOf } from '@angular/common';
import { LessonNamePipe } from '../../pipes/lesson-name.pipe';

@Component({
  selector: 'app-lessons-page',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
  imports: [NPPanelRackComponent, ToolbarComponent, TranslatePipe, NPTogglePanelComponent, NPPadPanelComponent, NPMpcPadComponent, NgForOf, LessonNamePipe],
})
export class LessonsPage implements OnInit {
  readonly optionsService = inject(OptionsService);
  readonly navService = inject(NavigateService);
  private readonly route = inject(ActivatedRoute);

  CTEXTS = CTEXTS;
  lessonPacks: ILessonPack[] = [];

  tab: TLessonPack | 'none' = 'Notes';
  private routeSub: Subscription;

  ngOnInit() {
    this.lessonPacks = Object.values(CLessonBundleIndex).filter(bundle => bundle.type !== 'freeplay');
    this.routeSub = this.route.params.subscribe(params => {
      this.tab = params['topic'];
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
