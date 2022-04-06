import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {NPComponentsModule} from '../../../@np-components/np-components.module';
import {ComponentsModule} from '../../components/components.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
            imports: [
              IonicModule,
              CommonModule,
              FormsModule,
              HomePageRoutingModule,
              TranslateModule.forChild(),
              NPComponentsModule,
              ComponentsModule
            ],
            declarations: [HomePage]
          })
export class HomePageModule {}
