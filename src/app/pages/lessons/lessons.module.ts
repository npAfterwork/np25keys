import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {NPComponentsModule} from '../../../@np-components/np-components.module';
import {ComponentsModule} from '../../components/components.module';

import { LessonsPageRoutingModule } from './lessons-routing.module';

import { LessonsPage } from './lessons.page';

@NgModule({
            imports: [
              CommonModule,
              FormsModule,
              IonicModule,
              LessonsPageRoutingModule,
              ComponentsModule,
              NPComponentsModule,
              TranslateModule
            ],
  declarations: [LessonsPage]
})
export class LessonsPageModule {}
