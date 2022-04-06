import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouteReuseStrategy} from '@angular/router';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {fancyAnimation} from '../@np-components/utils/np-ionic-animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
            declarations:    [AppComponent],
            entryComponents: [],
            imports:         [
              BrowserModule,
              BrowserAnimationsModule,
              HttpClientModule,
              IonicModule.forRoot({
                                    navAnimation: fancyAnimation
                                  }),
              TranslateModule.forRoot({
                                        defaultLanguage: 'en',
                                        loader:          {
                                          provide:    TranslateLoader,
                                          useFactory: HttpLoaderFactory,
                                          deps:       [HttpClient]
                                        }
                                      }),
              ComponentsModule,
              AppRoutingModule,
              // Not yet // TODO: PWA
              // ServiceWorkerModule.register('ngsw-worker.js', {
              //   enabled: environment.production,
              //   // Register the ServiceWorker as soon as the app is stable
              //   // or after 30 seconds (whichever comes first).
              //   registrationStrategy: 'registerWhenStable:30000'
              // }),
            ],
            providers:       [
              StatusBar,
              SplashScreen,
              {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
            ],
            bootstrap:       [AppComponent]
          })
export class AppModule {}
