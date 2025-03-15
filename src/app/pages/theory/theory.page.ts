import { Component, OnInit } from '@angular/core';
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
import {
  NPTogglePanelComponent,
} from '../../../@np-components/components/np-audio/np-toggle-panel/np-toggle-panel.component';
import {
  NPPadPanelComponent,
} from '../../../@np-components/components/np-audio/np-mpc-pad-panel/np-pad-panel.component';
import { NPMpcPadComponent } from '../../../@np-components/components/np-audio/np-mpc-pad/np-mpc-pad.component';
import { NgForOf } from '@angular/common';
import { TranslateTheoryPipe } from '../../pipes/translate-theory.pipe';


@Component({
  selector: 'app-theory-page',
  templateUrl: './theory.page.html',
  styleUrls: ['./theory.page.scss'],
  imports: [NPPanelRackComponent, ToolbarComponent, NPTogglePanelComponent, NPPadPanelComponent, NPMpcPadComponent, NgForOf, TranslateTheoryPipe],
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
