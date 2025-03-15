import { Component, inject } from '@angular/core';
import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonMenu, IonMenuToggle } from '@ionic/angular/standalone';
import { CROUTES } from '../../@consts/app.consts';
import { CTEXTS } from '../../@consts/texts.consts';
import { NavigateService } from '../../services/navigate.service';
import {
  NPPanelRackComponent,
} from '../../../@np-components/components/np-audio/np-panel-rack/np-panel-rack.component';
import { TranslatePipe } from '@ngx-translate/core';
import { OptionsPanelComponent } from '../options/options-panel/options-panel.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonMenu, IonContent, IonItem, IonMenuToggle, IonButton, IonIcon, IonLabel, TranslatePipe, OptionsPanelComponent, NPPanelRackComponent, NgForOf],
})
export class MenuComponent {
  protected readonly navService = inject(NavigateService);
  protected readonly CTEXTS = CTEXTS;
  protected readonly ROUTES = Object.values(CROUTES);
}
