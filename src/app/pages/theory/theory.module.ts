import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {NPComponentsModule} from '../../../@np-components/np-components.module';
import {ComponentsModule} from '../../components/components.module';

import { TheoryPageRoutingModule } from './theory-routing.module';

import { TheoryPage } from './theory.page';

@NgModule({
            imports: [
              CommonModule,
              FormsModule,
              IonicModule,
              TranslateModule,
              TheoryPageRoutingModule,
              ComponentsModule,
              NPComponentsModule
            ],
  declarations: [TheoryPage]
})
export class TheoryPageModule {}
