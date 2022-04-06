import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {TTextID} from '../../../@types/np.types';
import {NPBaseValueAccessor} from '../../base/np-base-value-accessor';

@Component({
             selector:    'np-options-toggle',
             templateUrl: './np-options-toggle.component.html',
             styleUrls:   ['./np-options-toggle.component.scss'],
             providers:   [
               {
                 provide:     NG_VALUE_ACCESSOR,
                 useExisting: forwardRef(() => NPOptionsToggleComponent),
                 multi:       true
               }
             ]
           })
export class NPOptionsToggleComponent extends NPBaseValueAccessor<boolean> implements OnInit {

  @Input() label: TTextID;
  @Input() desc: TTextID;

  constructor() {
    super();
  }

  ngOnInit() {}

}
