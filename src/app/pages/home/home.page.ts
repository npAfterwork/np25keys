import { Component, inject } from '@angular/core';
import { CTEXTS } from 'src/app/@consts/texts.consts';
import { NavigateService } from '../../services/navigate.service';
import { OptionsService } from '../../services/options.service';
import {
  NPPanelRackComponent,
} from '../../../@np-components/components/np-audio/np-panel-rack/np-panel-rack.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { NPMpcPadComponent } from '../../../@np-components/components/np-audio/np-mpc-pad/np-mpc-pad.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], imports: [NPPanelRackComponent, ToolbarComponent, NPMpcPadComponent, TranslatePipe],
})
export class HomePage {
  readonly navService = inject(NavigateService);
  readonly optionsService = inject(OptionsService);

  CTEXTS = CTEXTS;


}
