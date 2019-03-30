import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ns-docs',
    templateUrl: "./docs.component.html",
    styleUrls: ["./docs.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class DocsComponent implements OnInit {
    constructor(public router: Router) {

    }

    ngOnInit() {
    }
}
