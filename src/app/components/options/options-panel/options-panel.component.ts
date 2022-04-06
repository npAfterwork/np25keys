import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NPPianoRollService} from '../../../../@np-components/services/np-audio/np-piano-roll.service';
import {CTEXTS} from '../../../@consts/texts.consts';
import {TOptionsTabs} from '../../../@types/app.types';
import {DialogsService} from '../../../services/dialogs.service';
import {NavigateService} from '../../../services/navigate.service';
import {OptionsService} from '../../../services/options.service';

@Component({
             selector:    'app-options-panel',
             templateUrl: './options-panel.component.html',
             styleUrls:   ['./options-panel.component.scss'],
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
