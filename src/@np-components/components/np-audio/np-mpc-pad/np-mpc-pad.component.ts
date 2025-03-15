import { Component, HostBinding, Input } from '@angular/core';
import { TIcon } from '../../../@types/np-ionic.types';
import { IonIcon } from '@ionic/angular/standalone';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'np-mpc-pad',
  templateUrl: './np-mpc-pad.component.html',
  styleUrls: ['./np-mpc-pad.component.scss'], imports: [IonIcon, TranslatePipe],
})
export class NPMpcPadComponent {
  @HostBinding('class.lit') @Input() lightup = false;
  @HostBinding('class.active') @Input() active = false;

  @Input() label: string;
  @Input() subtext: string;
  @Input() icon: TIcon;

}

