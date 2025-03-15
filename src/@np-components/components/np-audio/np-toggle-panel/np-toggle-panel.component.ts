import { Component, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TTextID } from '../../../@types/np.types';
import { CAnimations } from '../../../utils/np-animations';
import { preventEvent } from '../../../utils/np-utils';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'np-toggle-panel',
  templateUrl: './np-toggle-panel.component.html',
  styleUrls: ['./np-toggle-panel.component.scss'],
  animations: [CAnimations.collapse.meta],
  imports: [TranslatePipe],
})
export class NPTogglePanelComponent implements OnInit, OnChanges {

  @Input() headline: TTextID;
  @Input() subline: TTextID;
  @Input() compact = false;
  @Input() open = true;
  @Input() slow = false;
  @Input() headerClickOnly: boolean;

  @HostListener('click') onComponentClick() {
    if (!this.headerClickOnly) {
      this.open = !this.open;
    }
  }

  @HostBinding('class.np-clickable') clickable = true;

  constructor() {
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['headerClickOnly'] && this.headerClickOnly) {
      this.clickable = false;
    }
  }

  toggleState($event: MouseEvent) {
    preventEvent($event);
    this.open = !this.open;
  }
}
