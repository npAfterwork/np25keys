import {Component} from '@angular/core';
import { CTEXTS } from 'src/app/@consts/texts.consts';
import {NavigateService} from '../../services/navigate.service';
import {OptionsService} from '../../services/options.service';

@Component({
  selector:    'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls:   ['home.page.scss']
})
export class HomePage {
  CTEXTS = CTEXTS;

  constructor(
    public readonly navService: NavigateService,
    public readonly optionsService: OptionsService,
  ) { }


}
