import { Component, OnInit } from '@angular/core';
import { CTEXTS } from '../../@consts/texts.consts';
import { LessonsService } from '../../services/lessons.service';
import { NavigateService } from '../../services/navigate.service';
import {
  NPPadPanelComponent,
} from '../../../@np-components/components/np-audio/np-mpc-pad-panel/np-pad-panel.component';
import { NPMpcPadComponent } from '../../../@np-components/components/np-audio/np-mpc-pad/np-mpc-pad.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-practice-panel',
  templateUrl: './practice-panel.component.html',
  styleUrls: ['./practice-panel.component.scss'], imports: [NPPadPanelComponent, NPMpcPadComponent, AsyncPipe],
})
export class PracticePanelComponent implements OnInit {
  CTEXTS = CTEXTS;
  constructor(
    public readonly lessonService: LessonsService,
    public readonly navService: NavigateService,
  ) { }

  ngOnInit() {}

}
