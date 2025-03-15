import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { TTextID } from '../../../@np-components/@types/np.types';
import { CTEXTS } from '../../@consts/texts.consts';
import { TAppPages } from '../../@types/app.types';
import { NavigateService } from '../../services/navigate.service';
import {
  NPTogglePanelComponent,
} from '../../../@np-components/components/np-audio/np-toggle-panel/np-toggle-panel.component';
import { NPMpcPadComponent } from '../../../@np-components/components/np-audio/np-mpc-pad/np-mpc-pad.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'], imports: [NPTogglePanelComponent, NPMpcPadComponent],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  readonly navService = inject(NavigateService);

  CTEXTS = CTEXTS;

  @Input() headline: TTextID;
  @Input() subline: TTextID;
  @Input() open: boolean = true;
  @Input() currentPage: TAppPages = 'Home';

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
