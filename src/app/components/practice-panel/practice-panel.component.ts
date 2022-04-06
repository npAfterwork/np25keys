import { Component, OnInit } from '@angular/core';
import {CTEXTS} from '../../@consts/texts.consts';
import {LessonsService} from '../../services/lessons.service';
import {NavigateService} from '../../services/navigate.service';

@Component({
  selector: 'app-practice-panel',
  templateUrl: './practice-panel.component.html',
  styleUrls: ['./practice-panel.component.scss'],
})
export class PracticePanelComponent implements OnInit {
  CTEXTS = CTEXTS;
  constructor(
    public readonly lessonService: LessonsService,
    public readonly navService: NavigateService,
  ) { }

  ngOnInit() {}

}
