import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {TIcon} from '../../../@types/np-ionic.types';

@Component({
    selector: 'np-mpc-pad',
    templateUrl: './np-mpc-pad.component.html',
    styleUrls: ['./np-mpc-pad.component.scss'],
    standalone: false
})
export class NPMpcPadComponent implements OnInit {
  @HostBinding('class.lit') @Input() lightup = false;
  @HostBinding('class.active') @Input() active = false;

  @Input() label: string;
  @Input() subtext: string;
  @Input() icon: TIcon;

  constructor() { }

  ngOnInit() {}

}

