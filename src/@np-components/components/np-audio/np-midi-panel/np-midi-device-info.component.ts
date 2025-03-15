import { Component, NgZone, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CNPAUDIO_TEXTS } from '../../../@consts/np-audio.consts';
import { IMidiEvent } from '../../../@types/np-audio.types';
import { NPMidiService } from '../../../services/np-audio/np-midi.service';
import { TranslatePipe } from '@ngx-translate/core';
import { IonButton, IonCol, IonGrid, IonList, IonRow } from '@ionic/angular/standalone';
import { NPMidiEventPipe } from '../../../pipes/np-midi-event.pipe';


@Component({
  selector: 'np-midi-device-info',
  templateUrl: './np-midi-device-info.component.html',
  styleUrls: ['./np-midi-device-info.component.scss'],
  imports: [TranslatePipe, IonList, IonGrid, IonRow, IonCol, NPMidiEventPipe, IonButton],
})
export class NPMidiDeviceInfoComponent implements OnInit, OnDestroy {
  private readonly midiService = inject(NPMidiService);
  private readonly ngZone = inject(NgZone);

  readonly CTEXTS = CNPAUDIO_TEXTS;
  currentDevice: WebMidi.MIDIInput;
  lastEvent: IMidiEvent;

  private conSub: Subscription;
  private evSub: Subscription;

  ngOnInit() {
    this.currentDevice = this.midiService.currentDevice;
    this.conSub = this.midiService.onConnect$.subscribe(device => this.currentDevice = device);
    this.evSub = this.midiService.onMessage$.subscribe((event) => this.ngZone.run(() => this.lastEvent = event));
  }

  ngOnDestroy(): void {
    this.conSub.unsubscribe();
    this.evSub.unsubscribe();
  }

  async connect() {
    await this.midiService.connect();
  }
}
