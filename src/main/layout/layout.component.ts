import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MediaMatcher, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'ns-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  constructor(private mediaMatcher: MediaMatcher) { }

  toXSmall: MediaQueryList;

  ngOnInit() {
    this.toXSmall = this.mediaMatcher.matchMedia(Breakpoints.XSmall);
    this.toXSmall.addListener(this.toXSmallListener)
  }

  toXSmallListener(event: MediaQueryListEvent) {
    console.log(event.matches ? 'match' : 'no match')
  }

}
