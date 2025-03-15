import { inject, Injectable, OnDestroy } from '@angular/core';
import { Howl } from 'howler';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CLS_KEY_OPTIONS_AUDIO } from '../../@consts/np-audio.consts';
import { ENOTES } from '../../@consts/np-note.consts';
import { IMidiEvent, INPInstrument, TNPInstrumentName } from '../../@types/np-audio.types';
import { TFilename } from '../../@types/np.types';
import { NPDataStore } from '../../base/np-data-store';
import { NPMidiService } from './np-midi.service';

@Injectable({
              providedIn: 'root'
            })
export class NPAudioService implements OnDestroy {
  private readonly midiService = inject(NPMidiService);


  private sounds: { [key: number]: Howl } = {};

  private metronome: Howl;
  private metronomeSrc: TFilename;
  private metronomeID: number;

  private instruments: { [key: string]: INPInstrument } = {};
  private evSub: Subscription;

  private dataStore = new NPDataStore({
                                        mute:        new BehaviorSubject<boolean>(false),
                                        volume:      new BehaviorSubject<number>(25), // 0 -100
                                        metroVolume: new BehaviorSubject<number>(25), // 0 -100
                                        metroSpeed:  new BehaviorSubject<number>(80), // BPM
                                        instrument:  new BehaviorSubject<TNPInstrumentName>(''),
                                      }, {
                                        volume:      (vol: number) => {
                                          vol = (Math.min(100, Math.max(0, vol)));
                                          // Adjust sounds
                                          Object.values(this.sounds).forEach(sound => sound.volume(vol / 100));
                                          return vol;
                                        },
                                        metroVolume: (vol: number) => {
                                          vol = (Math.min(100, Math.max(0, vol)));
                                          // Adjust sound
                                          this.metronome.volume(vol / 100);
                                          return vol;
                                        },
                                        instrument:  (instrument: TNPInstrumentName) => {
                                          this.loadInstrument(instrument);
                                        }
                                      }, CLS_KEY_OPTIONS_AUDIO);


  protected readonly options = this.dataStore.value;

  public readonly options$ = this.dataStore.get$;
  public readonly save = this.dataStore.save;

  addInstrument(instrument: INPInstrument) {
    this.instruments[instrument.name] = instrument;
  }

  // Maybe unload sounds before loading new instrument?
  private loadInstrument(name: TNPInstrumentName) {
    const instrument = this.instruments[name];
    if (!instrument) throw new Error('Instrument not found: ' + this.options.instrument);

    const baseName = instrument.path + '/note-';
    // const baseName = 'assets/sounds/' + this.config.instrument + '/note-';
    for (let i = ENOTES.C3; i <= ENOTES.C5; i++) {
      let numStr: number | string = i - ENOTES.C3;
      numStr = numStr <= 9 ? '0' + numStr : '' + numStr;
      this.sounds[i] = new Howl({
                                  src:    [baseName + numStr + '.wav'],
                                  volume: this.options.volume / 100
                                });
    }
  }

  addMetronome(filename: TFilename) {
    this.metronomeSrc = filename;
  }

  private loadMetronome() {
    if (this.metronomeSrc) {
      this.metronome = new Howl({
                                  src:    [this.metronomeSrc],
                                  volume: this.options.metroVolume / 100,
                                });
    }
  }

  private onMidiMessage(ev: IMidiEvent) {
    if (ev.pressed) {
      this.play(ev.noteIdx);
    }
  }

  play(noteIdx: number): void {
    if (!this.options.mute && this.sounds[noteIdx]) {
      this.sounds[noteIdx].play();
    }
  }

  async initialize(instrument: INPInstrument, metronome: TFilename) {
    if (this.evSub) return true;
    try{
      this.evSub = this.midiService.onMessage$.subscribe((ev => this.onMidiMessage(ev)));

      this.addInstrument(instrument);
      this.save.instrument(instrument.name);
      // this.loadInstrument(this.options.instrument); <- save does this...
      this.addMetronome(metronome);
      this.loadMetronome();

      await this.midiService.connect();
    }catch(e){
      console.error(e);
      return false;
    }
    return true;
  }

  ngOnDestroy(): void {
    if (this.evSub) this.evSub.unsubscribe();
  }

  startMetronome() {
    if (!this.metronomeID) {
      const speed = (1000 / (this.options.metroSpeed / 60));
      this.metronomeID = setInterval(() => {
        this.metronome.play();
      }, speed) as unknown as number;
    }
  }

  stopMetronome() {
    if (this.metronomeID) {
      clearInterval(this.metronomeID);
      this.metronomeID = null;
    }
  }


}
