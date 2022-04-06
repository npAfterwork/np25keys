import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {CROUTES} from '../../@consts/app.consts';
import {CTEXTS} from '../../@consts/texts.consts';
import {NavigateService} from '../../services/navigate.service';

@Component({
  selector:    'app-menu',
  templateUrl: './menu.component.html',
  styleUrls:   ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  CTEXTS = CTEXTS;
  ROUTES = Object.values(CROUTES);
  showOptions = false;
  constructor(
    public readonly menuController: MenuController,
    public readonly navService: NavigateService,
  ) { }

  ngOnInit() {
    this.menuController.get('options').then(menu => {
      menu.addEventListener('ionWillOpen', (ev) => {
        this.showOptions = true;
      });
      menu.addEventListener('ionDidClose', (ev) => {
        this.showOptions = false;
      });
    })

  }

}
