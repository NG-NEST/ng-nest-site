import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ns-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  list = [
    { name: 'Home', page: './home' },
    { name: 'Demo', page: './demo' },
    { name: 'Docs', page: './docs' },
    { name: 'News', page: './news' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
