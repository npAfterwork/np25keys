import {Component, Input, OnInit} from '@angular/core';

@Component({
             selector:    'np-pad-panel',
             templateUrl: './np-pad-panel.component.html',
             styleUrls:   ['./np-pad-panel.component.scss'],
           })
export class NPPadPanelComponent implements OnInit {

  @Input() label: string;

  constructor(
  ) { }


  ngOnInit() {}

}
