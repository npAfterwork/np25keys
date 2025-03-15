import { Component, input } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'np-pad-panel',
  templateUrl: './np-pad-panel.component.html',
  styleUrls: ['./np-pad-panel.component.scss'], imports: [TranslatePipe],
})
export class NPPadPanelComponent  {

  readonly label = input<string>(undefined);


}
