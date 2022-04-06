import {EventEmitter, Injectable} from '@angular/core';
import {IMidiEvent} from '../../@types/np-audio.types';

@Injectable({
              providedIn: 'root'
            })
export class NPMidiService {
  public currentDevice: WebMidi.MIDIInput;
  // @Beware: Out of angular context -> playing sound is faster that way... i think
  public onMessage$: EventEmitter<IMidiEvent> = new EventEmitter<IMidiEvent>();
  public onConnect$: EventEmitter<WebMidi.MIDIInput> = new EventEmitter<WebMidi.MIDIInput>();

  constructor(
  ) {
  }

  sendMessage(noteIdx: number, pressed: boolean, velocity = 64) {
    const msg: IMidiEvent = {
      noteIdx,
      pressed,
      velocity,
    };
    this.onMessage$.emit(msg);
  }

  async connect() {
    if (this.currentDevice) return this.currentDevice;
    if (window.navigator.requestMIDIAccess) {
      const midiAccess = await window.navigator.requestMIDIAccess();
      console.log('MIDI Ready!');
      for (let entry of midiAccess.inputs) {
        this.currentDevice = entry[1];
        console.log('MIDI input device: ' + entry[1].id);
        console.log('MIDI input device: ' + entry[1].manufacturer);
        console.log('MIDI input device: ' + entry[1].version);
        console.log('MIDI input device: ' + entry[1].name);
      }
      if (this.currentDevice) {
        this.currentDevice.onmidimessage = (ev) => this.onMidiMessage(ev);
        this.onConnect$.emit(this.currentDevice);
      }else{
        console.log('no current device');
      }
    } else {
      console.log('WebMIDI is not supported in this device.');
    }
  }

  /**
   *
   * @Beware this is out of the angular cycle (i think)
   */
  private onMidiMessage(midiEvent: WebMidi.MIDIMessageEvent): void {
    const data: Uint8Array = midiEvent.data;
    if (data.length === 3) {
      // status is the first byte.
      const status = data[0];
      // command is the four most significant bits of the status byte.
      const command = status >>> 4;
      // channel 0-15 is the lower four bits.
      // const channel = status & 0xF;

      // just look at note on and note off messages.
      if (command === 0x9 || command === 0x8) {
        const message: IMidiEvent = {
          noteIdx:  data[1], // note number is the second byte.
          pressed:  command === 0x9, // Note on command
          velocity: data[2], // velocity is the third byte.
        };
        this.onMessage$.emit(message);
      }
    }
  }
}
