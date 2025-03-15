import { Component, Input, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NPPianoRollService } from '../../../../@np-components/services/np-audio/np-piano-roll.service';
import { CTEXTS } from '../../../@consts/texts.consts';
import { TOptionsTabs } from '../../../@types/app.types';
import { DialogsService } from '../../../services/dialogs.service';
import { NavigateService } from '../../../services/navigate.service';
import { OptionsService } from '../../../services/options.service';
import {
  IonIcon, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTabBar, IonTabButton,
} from '@ionic/angular/standalone';
import {
  NPTogglePanelComponent,
} from '../../../../@np-components/components/np-audio/np-toggle-panel/np-toggle-panel.component';
import {
  NPPadPanelComponent,
} from '../../../../@np-components/components/np-audio/np-mpc-pad-panel/np-pad-panel.component';
import { NPMpcPadComponent } from '../../../../@np-components/components/np-audio/np-mpc-pad/np-mpc-pad.component';
import { UIOptionsPanelComponent } from '../ui-options-panel/ui-options-panel.component';
import { RollOptionsPanelComponent } from '../roll-options-panel/roll-options-panel.component';
import { ExtraOptionsPanelComponent } from '../extra-options-panel/extra-options-panel.component';
import { AudioOptionsPanelComponent } from '../audio-options-panel/audio-options-panel.component';
import {
  NPMidiDeviceInfoComponent,
} from '../../../../@np-components/components/np-audio/np-midi-panel/np-midi-device-info.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.scss'],
  imports: [IonTabBar, IonTabButton, IonIcon, IonLabel, TranslatePipe, NPTogglePanelComponent, NPPadPanelComponent, NPMpcPadComponent, UIOptionsPanelComponent, RollOptionsPanelComponent, ExtraOptionsPanelComponent, AudioOptionsPanelComponent, NPMidiDeviceInfoComponent, IonList, IonItem, IonSelect, IonSelectOption, AsyncPipe],
})
export class OptionsPanelComponent implements OnInit {
  CTEXTS = CTEXTS;
  @Input() tab: TOptionsTabs = 'roll';

  constructor(
    private readonly navService: NavigateService,
    private readonly dialogs: DialogsService,
    private readonly translate: TranslateService,
    public readonly npPianoRoll: NPPianoRollService,
    public readonly options: OptionsService,

  ) { }

  ngOnInit() {

  }

  async close() {
    await this.navService.closeOptions();
  }

  changeTab(tab: TOptionsTabs) {
    this.tab = tab;
  }

  async applyPreset(size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl') {
    const toolbarState = this.options.values.toolbar;
    const cover = this.npPianoRoll.cover;
    const display = this.npPianoRoll.display;
    const pianoroll = this.npPianoRoll.pianoroll;
    const options = this.options.save;

    options.toolbar(false);
    options.mpcpads(false);
    options.infodisplays(false);
    cover.visible(false);
    display.visible(false);
    options.fullscreen(false);

    options.maindisplay(true);
    pianoroll.visible(true);

    switch (size) {
      case 'xs':
        options.fullscreen(true);
        break;
      case 's':
        options.mpcpads(true);
        break;
      case 'm':
        options.mpcpads(true);
        options.infodisplays(true);
        break;
      case 'l':
        options.mpcpads(true);
        options.infodisplays(true);
        options.toolbar(true);
        break;
      case 'xl':
        options.mpcpads(true);
        options.infodisplays(true);
        options.toolbar(true);
        cover.visible(true);
        break;
      case 'xxl':
        options.mpcpads(true);
        options.infodisplays(true);
        options.toolbar(true);
        cover.visible(true);
        display.visible(true);
        break;
    }
    // changed from true to false
    if (toolbarState && (toolbarState !== this.options.values.toolbar)) {
      await this.dialogs.presentInfo(CTEXTS.DIALOGS.menuhide);
    }
  }

  async changeLanguage(value: 'en' | 'de') {
    this.options.save.language(value);
    await this.translate.use(value).toPromise();
  }
}
