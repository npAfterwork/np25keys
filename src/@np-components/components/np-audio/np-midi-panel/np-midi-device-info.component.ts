import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CNPAUDIO_TEXTS} from '../../../@consts/np-audio.consts';
import {IMidiEvent} from '../../../@types/np-audio.types';
import {NPMidiService} from '../../../services/np-audio/np-midi.service';

@Component({
    selector: 'np-midi-device-info',
    templateUrl: './np-midi-device-info.component.html',
    styleUrls: ['./np-midi-device-info.component.scss'],
    standalone: false
})
export class NPMidiDeviceInfoComponent implements OnInit, OnDestroy{
  readonly CTEXTS = CNPAUDIO_TEXTS;
  currentDevice: WebMidi.MIDIInput;
  lastEvent: IMidiEvent;

  private conSub: Subscription;
  private evSub: Subscription;

  constructor(
    private readonly midiService: NPMidiService,
    private readonly ngZone: NgZone
  ) {
  }

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
    await this.midiService.connect()
  }
}
