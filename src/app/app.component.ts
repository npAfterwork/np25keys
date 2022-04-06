import {Component} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {Platform} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import {OptionsService} from './services/options.service';

@Component({
             selector:    'app-root',
             templateUrl: 'app.component.html',
             styleUrls:   ['app.component.scss']
           })
export class AppComponent {
  constructor(
    private readonly platform: Platform,
    private readonly splashScreen: SplashScreen,
    private readonly statusBar: StatusBar,
    private readonly translate: TranslateService,
    public readonly options: OptionsService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.options.values.language).subscribe(() => {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    });
  }


}
