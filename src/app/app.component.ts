import { Component, inject } from '@angular/core';

import { IonApp, IonContent, IonRouterOutlet, MenuController, Platform } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';
import { OptionsService } from './services/options.service';
import { addIcons } from 'ionicons';
import { APP_ICONS } from './@consts/app.icons';
import { AsyncPipe } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root', templateUrl: 'app.component.html', styleUrls: ['app.component.scss'],
  imports: [IonApp, MenuComponent, IonContent, IonRouterOutlet, AsyncPipe],
})
export class AppComponent {
  private readonly platform = inject(Platform);
  private readonly translate = inject(TranslateService);
  private readonly menuController = inject(MenuController);
  readonly options = inject(OptionsService);

  constructor() {
    addIcons(APP_ICONS)
    this.initializeApp();
  }

  initializeApp() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.options.values.language).subscribe(() => {
      this.platform.ready().then(() => {
        console.log(this.menuController);
      });
    });
  }


}
