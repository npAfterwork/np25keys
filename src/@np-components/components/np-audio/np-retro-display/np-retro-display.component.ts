import { Component, ElementRef, HostBinding, OnInit, inject, input } from '@angular/core';
import { CCSS_VAR_LINE_COUNT, CCSS_VAR_LINE_HEIGHT } from '../../../@consts/np-audio.consts';

@Component({
    selector: 'np-retro-display',
    templateUrl: './np-retro-display.component.html',
    styleUrls: ['./np-retro-display.component.scss'],
})
export class NPRetroDisplayComponent implements OnInit {
  private readonly elementRef = inject(ElementRef);

  readonly multiline = input(false);
  readonly minLines = input(1);
  readonly maxLines = input(10);
  readonly lineHeight = input(25);
  @HostBinding('class.backlight')
readonly backlight = input(true);
  @HostBinding('class.scanlines')
readonly scanlines = input(true);

  ngOnInit() {}

  onResize = ($event) => {
    const relLineHeight = this.lineHeight();
    let lineCount = Math.trunc($event.newHeight / relLineHeight);
    // let relLineHeight = Math.trunc($event.newHeight / this.maxLines);
    // let lineCount = this.maxLines;
    // if the border is reached shrink by one or it does not shrink at all coz no resize events getting triggered anymore
    if (lineCount * relLineHeight === $event.newHeight) {
      lineCount--;
      // relLineHeight--;
    }
    lineCount = Math.min(Math.max(this.minLines(), lineCount), this.maxLines());
    if (this.elementRef && this.elementRef.nativeElement) {
      this.elementRef.nativeElement.style.setProperty(CCSS_VAR_LINE_COUNT, lineCount);
      this.elementRef.nativeElement.style.setProperty(CCSS_VAR_LINE_HEIGHT, relLineHeight + 'px');
    }
  };

}
