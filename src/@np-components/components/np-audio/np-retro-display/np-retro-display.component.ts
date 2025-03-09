import {Component, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {CCSS_VAR_LINE_COUNT, CCSS_VAR_LINE_HEIGHT} from '../../../@consts/np-audio.consts';

@Component({
    selector: 'np-retro-display',
    templateUrl: './np-retro-display.component.html',
    styleUrls: ['./np-retro-display.component.scss'],
    standalone: false
})
export class NPRetroDisplayComponent implements OnInit {
  @Input() multiline = false;
  @Input() minLines = 1;
  @Input() maxLines = 10;
  @Input() lineHeight = 25;
  @HostBinding('class.backlight') @Input() backlight = true;
  @HostBinding('class.scanlines') @Input() scanlines = true;

  constructor(
    private readonly elementRef: ElementRef
  ) { }

  ngOnInit() {}

  onResize = ($event) => {
    const relLineHeight = this.lineHeight;
    let lineCount = Math.trunc($event.newHeight / relLineHeight);
    // let relLineHeight = Math.trunc($event.newHeight / this.maxLines);
    // let lineCount = this.maxLines;
    // if the border is reached shrink by one or it does not shrink at all coz no resize events getting triggered anymore
    if (lineCount * relLineHeight === $event.newHeight) {
      lineCount--;
      // relLineHeight--;
    }
    lineCount = Math.min(Math.max(this.minLines, lineCount), this.maxLines);
    if (this.elementRef && this.elementRef.nativeElement) {
      this.elementRef.nativeElement.style.setProperty(CCSS_VAR_LINE_COUNT, lineCount);
      this.elementRef.nativeElement.style.setProperty(CCSS_VAR_LINE_HEIGHT, relLineHeight + 'px');
    }
  };

}
