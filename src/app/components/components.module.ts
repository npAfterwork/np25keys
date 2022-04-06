import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {NPComponentsModule} from '../../@np-components/np-components.module';
import {LessonNamePipe} from '../pipes/lesson-name.pipe';
import {TranslateTheoryPipe} from '../pipes/translate-theory.pipe';
import {DisplayPanelComponent} from './display-panel/display-panel.component';
import {OptionsPanelComponent} from './options/options-panel/options-panel.component';
import {AudioOptionsPanelComponent} from './options/audio-options-panel/audio-options-panel.component';
import {ExtraOptionsPanelComponent} from './options/extra-options-panel/extra-options-panel.component';
import {RollOptionsPanelComponent} from './options/roll-options-panel/roll-options-panel.component';
import {UIOptionsPanelComponent} from './options/ui-options-panel/ui-options-panel.component';
import {MenuComponent} from './menu/menu.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {PianoRollCoverPanelComponent} from './piano-roll-cover-panel/piano-roll-cover-panel.component';
import {PianoRollDisplayComponent} from './piano-roll-display-panel/piano-roll-display.component';
import {PracticePanelComponent} from './practice-panel/practice-panel.component';


const components = [
  // Pipes
  TranslateTheoryPipe,
  LessonNamePipe,
  // Page Components
  ToolbarComponent,
  MenuComponent,
  // Panels
  DisplayPanelComponent,
  PracticePanelComponent,
  PianoRollCoverPanelComponent,
  PianoRollDisplayComponent,
  // Options
  OptionsPanelComponent,
  UIOptionsPanelComponent,
  RollOptionsPanelComponent,
  AudioOptionsPanelComponent,
  ExtraOptionsPanelComponent
];

@NgModule({
            imports: [
              CommonModule,
              FormsModule,
              IonicModule,
              TranslateModule,
              NPComponentsModule,
            ],
            declarations: [
              components,

            ],
            exports: [
              components,
            ],
            entryComponents: []
          })
export class ComponentsModule {}
