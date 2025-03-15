import { Component, HostBinding, input } from '@angular/core';
import { TIcon } from '../../../@types/np-ionic.types';
import { IonIcon } from '@ionic/angular/standalone';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'np-mpc-pad',
  templateUrl: './np-mpc-pad.component.html',
  styleUrls: ['./np-mpc-pad.component.scss'], imports: [IonIcon, TranslatePipe],
})
export class NPMpcPadComponent {
  @HostBinding('class.lit')
readonly lightup = input(false);
  @HostBinding('class.active')
readonly active = input(false);

  readonly label = input<string>(undefined);
  readonly subtext = input<string>(undefined);
  readonly icon = input<TIcon>(undefined);

}

