import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {NPComponentsModule} from '../../../@np-components/np-components.module';
import {ComponentsModule} from '../../components/components.module';

import { PlayPageRoutingModule } from './play-routing.module';

import { PlayPage } from './play.page';

@NgModule({
            imports: [
              CommonModule,
              FormsModule,
              IonicModule,
              TranslateModule,
              PlayPageRoutingModule,
              ComponentsModule,
              NPComponentsModule,
            ],
  declarations: [PlayPage]
})
export class PlayPageModule {}
