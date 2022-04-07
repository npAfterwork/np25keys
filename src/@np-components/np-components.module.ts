import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {AngularResizeEventModule} from 'angular-resize-event';
import {NPMidiDeviceInfoComponent} from './components/np-audio/np-midi-panel/np-midi-device-info.component';
import {NPOptionsToggleComponent} from './components/np-audio/np-options-toggle/np-options-toggle.component';
import {NPTogglePanelComponent} from './components/np-audio/np-toggle-panel/np-toggle-panel.component';
import {NPPadPanelComponent} from './components/np-audio/np-mpc-pad-panel/np-pad-panel.component';
import {NPPanelRackComponent} from './components/np-audio/np-panel-rack/np-panel-rack.component';
import {NPPianoRollComponent} from './components/np-audio/np-piano-roll/np-piano-roll.component';
import {NPRetroDisplayComponent} from './components/np-audio/np-retro-display/np-retro-display.component';
import {NPMpcPadComponent} from './components/np-audio/np-mpc-pad/np-mpc-pad.component';
import {NPMidiEventPipe} from './pipes/np-midi-event.pipe';

const components = [
  // Pipes
  NPMidiEventPipe,
  // Components
  NPMidiDeviceInfoComponent,
  NPOptionsToggleComponent,
  NPMpcPadComponent,
  NPRetroDisplayComponent,
  NPPianoRollComponent,
  NPPanelRackComponent,
  NPTogglePanelComponent,
  NPPadPanelComponent,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule.forChild(),
        AngularResizeEventModule
    ],
    declarations: [
        components
    ],
    exports: [
        components
    ]
})
export class NPComponentsModule {}
