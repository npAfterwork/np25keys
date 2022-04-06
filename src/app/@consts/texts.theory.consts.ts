import {TLessonPack} from '../@types/app.types';

type TLanguages = 'en' | 'de';
type TTheoryIndex = { [key in TLessonPack]: string }

export const CTHEORY_TEXTS: { [key in TLanguages]: TTheoryIndex } = {
  en: {
    'Freeplay':        '',
    'Notes':           `
<h1>ADSR or Attack, Decay, Sustain, Release describes a sound</h1>
When creating artificial waveforms in a synthesizer, changes in the signal amplitude (or frequency) over time are controlled by an ‘envelope generator’ 
which typically has controls to adjust the Attack, Decay, Sustain and Release times, triggered by the pressing and subsequent release of a key on the keyboard.

<h1>Key signatures in music</h1>
Sets the pattern that makes up the harmonic “home” of the song.<br>
The key of a piece of music is determined by a set of sharps or flats (accidentals) called a key signature.<br>
<h1>Intervals</h1>
Intervals in music are the distance between two musical notes.<br>
Each interval has a number that tells you the distance between the two notes.
The number comes from the amount of scale steps away from the starting note and depends on the key signature. <br>
<pre>
    Semitones <-> Interval
    
    0 Unison
    1 Minor 2nd
    2 Major 2nd
    3 Minor 3rd
    4 Major 3rd
    5 Perfect 4th
    6 Augmented 4th / Diminished 5th
    7 Perfect 5th
    8 Minor 6th
    9 Major 6th
    10 Minor 7th
    11 Major 7th
    12 Octave
</pre>
Harmonic Intervals sound at the same time<br>
Melodic Intervals sound next to each other<br>

If the melody rises up from the starting note, you add the direction to the interval’s common name: a major third up.
If it falls down to reach the note you’re comparing it with, it’s the opposite: a perfect fourth down.
`,
    'Scales Major I':  `
The most important scales for musicians are:
The major scale
The minor scales
The pentatonic scales
The blues scales
<h1>Major Scales</h1>
Use the following major scale formula to build the major scales:
<pre>W – W – H – W – W – W – H</pre>

H = half step
W = whole step
<h2>List of all Major Scales</h2>
Major scale with no sharp or flat:
<pre>
  C Major Scale: C – D – E – F – G – A – B – C
  
  Major scales with sharps:
  
  G Major Scale: G – A – B – C – D – E – F♯ – G
  D Major Scale: D – E – F♯ – G – A – B – C♯ – D
  A Major Scale: A – B – C♯ – D – E – F♯ – G♯ – A
  E Major Scale: E – F♯ – G♯ – A – B – C♯ – D♯ – E
  B Major Scale: B – C♯ – D♯ – E – F♯ – G♯ – A♯ – B
  C Sharp Major Scale: C♯ – D♯ – E♯ – F♯ – G♯ – A♯ – B♯ – C♯
  F Sharp Major Scale: F♯ – G♯ – A♯ – B – C♯ – D♯ – E♯ – F♯
  
  Major scales with flats:
  
  F Major Scale: F – G – A – B♭ – C – D – E – F
  B Flat Major Scale: B♭ – C – D – E♭ – F – G – A – B♭
  E Flat Major Scale: E♭ – F – G – A♭ – B♭ – C – D – E♭
  A Flat Major Scale: A♭ – B♭ – C – D♭ – E♭ – F – G – A♭
  D Flat Major Scale: D♭ – E♭ – F – G♭ – A♭ – B♭ – C – D♭
  G Flat Major Scale: G♭ – A♭ – B♭ – C♭ – D♭ – E♭ – F – G♭
  C Flat Major Scale: C♭ – D♭ – E♭ – F♭ – G♭ – A♭ – B♭ – C♭
  
  Enharmonic Major Scales are scales that have the same pitches but have different note names:
  
  B Major Scale: B – C♯ – D♯ – E – F♯ – G♯ – A♯ – B
  C Flat Major Scale: C♭ – D♭ – E♭ – F♭ – G♭ – A♭ – B♭ – C♭
  
  F Sharp Major Scale: F♯ – G♯ – A♯ – B – C♯ – D♯ – E♯ – F♯
  G Flat Major Scale: G♭ – A♭ – B♭ – C♭ – D♭ – E♭ – F – G♭
  
  C Sharp Major Scale: C♯ – D♯ – E♯ – F♯ – G♯ – A♯ – B♯ – C♯
  D Flat Major Scale: D♭ – E♭ – F – G♭ – A♭ – B♭ – C – D♭
</pre>

`,
    'Scales Major II': `
<pre>
    @see also: Harmonic, Melodic, Blues and Pentatonic Scales
    @next Circle of Fifth
</pre>
`,
    'Scales Minor I':  `
<h1>Minor Scales</h1>
Use the following minor scale formula to build the minor scales:
<pre>W – H – W – W – H – W – W</pre>
<h1>Relative Minor</h1>
<pre>
  
  Natural Minor & Major Scale Comparison
  
  A Minor: A B C D E F G
  C Major: C D E F G A B
  
  The relative minor scale is built from the major scale's sixth degree.
  
  @see also: Harmonic, Melodic, Blues and Pentatonic Scales
  @next Circle of Fifth
</pre>
`
  },
  de: {
    'Freeplay':        `Not yet :) see below`,
    'Notes':           ``,
    'Scales Major I':  ``,
    'Scales Major II': ``,
    'Scales Minor I':  ``,
  }
};

CTHEORY_TEXTS.de = CTHEORY_TEXTS.en;
