import {Component, Input, OnInit} from '@angular/core';

@Component({
             selector:    'np-panel-rack',
             templateUrl: './np-panel-rack.component.html',
             styleUrls:   ['./np-panel-rack.component.scss'],
           })
export class NPPanelRackComponent implements OnInit {

  @Input() toolbar: boolean;

  constructor(
  ) { }


  ngOnInit() {}

}
