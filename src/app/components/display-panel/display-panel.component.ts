import { Component, inject } from '@angular/core';
import { CTEXTS } from '../../@consts/texts.consts';
import { OptionsService } from '../../services/options.service';
import { LessonsService } from '../../services/lessons.service';
import {
  NPRetroDisplayComponent,
} from '../../../@np-components/components/np-audio/np-retro-display/np-retro-display.component';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-display-panel',
  templateUrl: './display-panel.component.html',
  styleUrls: ['./display-panel.component.scss'],
  imports: [NPRetroDisplayComponent, AsyncPipe, TranslatePipe],
})
export class DisplayPanelComponent {
  readonly lessonsService = inject(LessonsService);
  readonly optionsService = inject(OptionsService);

  CTEXTS = CTEXTS;

}
