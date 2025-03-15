import { Component, input } from '@angular/core';

@Component({
    selector: 'np-panel-rack',
    templateUrl: './np-panel-rack.component.html',
    styleUrls: ['./np-panel-rack.component.scss'],
})
export class NPPanelRackComponent {

  readonly toolbar = input<boolean>(undefined);

}
