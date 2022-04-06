import {CNPAUDIO_TEXTS} from '../../@np-components/@consts/np-audio.consts';

export const CTEXTS = Object.assign(
  {
    ROUTES:      {
      home:     'ROUTES.home',
      lessons:  'ROUTES.lessons',
      practice: 'ROUTES.practice',
      settings: 'ROUTES.settings',
      freeplay: 'ROUTES.freeplay',
      theory:   'ROUTES.theory'
    },
    PAGES:       {
      home:         'PAGES.home',
      home_sub:     'PAGES.home_sub',
      lessons:      'PAGES.lessons',
      lessons_sub:  'PAGES.lessons_sub',
      practice:     'PAGES.practice',
      practice_sub: 'PAGES.practice_sub',
      freeplay:     'PAGES.freeplay',
      freeplay_sub: 'PAGES.freeplay_sub',
      theory:       'PAGES.theory',
      theory_sub:   'PAGES.theory_sub'
    },
    DISPLAY:     {
      playing: 'DISPLAY.playing'
    },
    DIALOGS:     {
      menuhide: 'DIALOGS.menuhide'
    },
    INSTRUMENTS: {
      piano:  'INSTRUMENTS.piano',
      notyet: 'INSTRUMENTS.notyet',
    },
    LESSONS:     {
      part:   'LESSONS.part',
      lesson:   'LESSONS.lesson',
      bundle:   'LESSONS.bundle',
      directions:   'LESSONS.DIR.',
      DIR: {
        ascending:'LESSONS.DIR.ascending',
        descending:'LESSONS.DIR.descending',
        both:'LESSONS.DIR.both',
      },
      hands:   'LESSONS.HANDS.',
      HANDS: {
        left:'LESSONS.HANDS.left',
        right:'LESSONS.HANDS.right',
        both:'LESSONS.HANDS.both',
      },
      size:   'LESSONS.SIZE.',
      SIZE: {
        once:'LESSONS.SIZE.once',
        full:'LESSONS.SIZE.full',
      },
      FREEPLAY: {
        name:       'LESSONS.FREEPLAY.name',
        bundlename: 'LESSONS.FREEPLAY.bundlename',
        bundlesub:  'LESSONS.FREEPLAY.bundlesub',
      }
    },
    PADS:        {
      restart:      'PADS.restart',
      loop:         'PADS.loop',
      next:         'PADS.next',
      prev:         'PADS.prev',
      metronome:    'PADS.metronome',
      lessons:      'PADS.lessons',
      lessons_sub:  'PADS.lessons_sub',
      options:      'PADS.options',
      options_sub:  'PADS.options_sub',
      theory:       'PADS.theory',
      theory_sub:   'PADS.theory_sub',
      freeplay:     'PADS.freeplay',
      freeplay_sub: 'PADS.freeplay_sub',
      practice:     'PADS.practice',
      practice_sub: 'PADS.practice_sub',
      menu:         'PADS.menu',
      menu_sub:     'PADS.menu_sub',
      home:         'PADS.home',
    },
    OPTIONS:     {
      tabroll:   'OPTIONS.tabroll',
      tabaudio:  'OPTIONS.tabaudio',
      tabcommon: 'OPTIONS.tabcommon',
      COMMON:    {
        title:    'OPTIONS.COMMON.title',
        subtitle: 'OPTIONS.COMMON.subtitle',
        language: 'OPTIONS.COMMON.language',
        lang_en:  'OPTIONS.COMMON.lang_en',
        lang_de:  'OPTIONS.COMMON.lang_de',
      },
      EXTRA:     {
        title:           'OPTIONS.EXTRA.title',
        subtitle:        'OPTIONS.EXTRA.subtitle',
        pianoroll:       'OPTIONS.EXTRA.pianoroll',
        pianoroll_sub:   'OPTIONS.EXTRA.pianoroll_sub',
        fullscreen:      'OPTIONS.EXTRA.fullscreen',
        fullscreen_sub:  'OPTIONS.EXTRA.fullscreen_sub',
        scanlines:       'OPTIONS.EXTRA.scanlines',
        scanlines_sub:   'OPTIONS.EXTRA.scanlines_sub',
        maindisplay:     'OPTIONS.EXTRA.maindisplay',
        maindisplay_sub: 'OPTIONS.EXTRA.maindisplay_sub',
        mpcpadssize:     'OPTIONS.EXTRA.mpcpadssize',
        mpcpadssize_sub: 'OPTIONS.EXTRA.mpcpadssize_sub',
        playing:         'OPTIONS.EXTRA.playing',
        playing_sub:     'OPTIONS.EXTRA.playing_sub',

      },
      UI:        {
        title:            'OPTIONS.UI.title',
        subtitle:         'OPTIONS.UI.subtitle',
        mpcpads:          'OPTIONS.UI.mpcpads',
        toolbar:          'OPTIONS.UI.toolbar',
        toolbar_sub:      'OPTIONS.UI.toolbar_sub',
        mpcpads_sub:      'OPTIONS.UI.mpcpads_sub',
        infodisplays:     'OPTIONS.UI.infodisplays',
        infodisplays_sub: 'OPTIONS.UI.infodisplays_sub',
        cover:            'OPTIONS.UI.cover',
        cover_sub:        'OPTIONS.UI.cover_sub',
        notedisplay:      'OPTIONS.UI.notedisplay',
        notedisplay_sub:  'OPTIONS.UI.notedisplay_sub',
      },
      PIANOROLL: {
        title:          'OPTIONS.PIANOROLL.title',
        subtitle:       'OPTIONS.PIANOROLL.subtitle',
        mode:           'OPTIONS.PIANOROLL.mode',
        lower:          'OPTIONS.PIANOROLL.lower',
        upper:          'OPTIONS.PIANOROLL.upper',
        twentyfive:     'OPTIONS.PIANOROLL.twentyfive',
        notes:          'OPTIONS.PIANOROLL.notes',
        notes_sub:      'OPTIONS.PIANOROLL.notes_sub',
        octave:         'OPTIONS.PIANOROLL.octave',
        octave_sub:     'OPTIONS.PIANOROLL.octave_sub',
        fingerset:      'OPTIONS.PIANOROLL.fingerset',
        fingerset_sub:  'OPTIONS.PIANOROLL.fingerset_sub',
        velocity:       'OPTIONS.PIANOROLL.velocity',
        velocity_sub:   'OPTIONS.PIANOROLL.velocity_sub',
        lesson:         'OPTIONS.PIANOROLL.lesson',
        lesson_sub:     'OPTIONS.PIANOROLL.lesson_sub',
        validation:     'OPTIONS.PIANOROLL.validation',
        validation_sub: 'OPTIONS.PIANOROLL.validation_sub',
      },
      AUDIO:     {
        title:          'OPTIONS.AUDIO.title',
        titlemidi:      'OPTIONS.AUDIO.titlemidi',
        subtitle:       'OPTIONS.AUDIO.subtitle',
        subtitlemidi:   'OPTIONS.AUDIO.subtitlemidi',
        instrument:     'OPTIONS.AUDIO.instrument',
        mute:           'OPTIONS.AUDIO.mute',
        mute_sub:       'OPTIONS.AUDIO.mute_sub',
        midi:           'OPTIONS.AUDIO.midi',
        volume:         'OPTIONS.AUDIO.volume',
        volume_sub:     'OPTIONS.AUDIO.volume_sub',
        metrovol:       'OPTIONS.AUDIO.metrovol',
        metrovol_sub:   'OPTIONS.AUDIO.metrovol_sub',
        metrospeed:     'OPTIONS.AUDIO.metrospeed',
        metrospeed_sub: 'OPTIONS.AUDIO.metrospeed_sub',
      },
    },
  }, CNPAUDIO_TEXTS);