import { Component, forwardRef, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TTextID } from '../../../@types/np.types';
import { NPBaseValueAccessor } from '../../base/np-base-value-accessor';
import { IonItem, IonLabel, IonToggle } from '@ionic/angular/standalone';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'np-options-toggle',
  templateUrl: './np-options-toggle.component.html',
  styleUrls: ['./np-options-toggle.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NPOptionsToggleComponent), multi: true,
  }], imports: [IonItem, IonLabel, TranslatePipe, IonToggle, FormsModule],
})
export class NPOptionsToggleComponent extends NPBaseValueAccessor<boolean>  {

  readonly label = input<TTextID>(undefined);
  readonly desc = input<TTextID>(undefined);

  constructor() {
    super();
  }


}
