import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { OptionsService } from './services/options.service';
import { addIcons } from 'ionicons';
import { APP_ICONS } from './@consts/app.icons';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false
})
export class AppComponent {
  constructor(
    private readonly platform: Platform,
    private readonly translate: TranslateService,
    public readonly options: OptionsService,
  ) {
    addIcons(APP_ICONS)
    this.initializeApp();
  }

  initializeApp() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.options.values.language).subscribe(() => {
      this.platform.ready().then(() => {
      });
    });
  }


}
