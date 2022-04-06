import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TTextID} from '../../../@np-components/@types/np.types';
import {CTEXTS} from '../../@consts/texts.consts';
import {TAppPages} from '../../@types/app.types';
import {NavigateService} from '../../services/navigate.service';

@Component({
             selector:    'app-toolbar',
             templateUrl: './toolbar.component.html',
             styleUrls:   ['./toolbar.component.scss'],
           })
export class ToolbarComponent implements OnInit, OnDestroy {
  CTEXTS = CTEXTS;

  @Input() headline: TTextID;
  @Input() subline: TTextID;
  @Input() open: boolean = true;
  @Input() currentPage: TAppPages = 'Home';

  constructor(
    public readonly navService: NavigateService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
