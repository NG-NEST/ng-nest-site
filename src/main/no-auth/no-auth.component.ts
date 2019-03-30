import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleReuseStrategy } from '../simple-reuse-srategy';

@Component({
    selector: 'no-auth',
    template: ``,
    encapsulation: ViewEncapsulation.None
})
export class NoAuthComponent implements OnInit {
    constructor(public router: Router) {

    }

    ngOnInit() {
    }
}
