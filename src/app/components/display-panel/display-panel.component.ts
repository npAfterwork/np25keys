import {Component, OnInit} from '@angular/core';
import {CTEXTS} from '../../@consts/texts.consts';
import {OptionsService} from '../../services/options.service';
import {LessonsService} from '../../services/lessons.service';
@Component({
             selector:    'app-display-panel',
             templateUrl: './display-panel.component.html',
             styleUrls:   ['./display-panel.component.scss'],
           })
export class DisplayPanelComponent implements OnInit {
  CTEXTS = CTEXTS;
  constructor(
    public readonly lessonsService: LessonsService,
    public readonly optionsService: OptionsService,
  ) { }

  ngOnInit() {}

}
