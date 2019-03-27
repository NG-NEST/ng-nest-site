import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleReuseStrategy } from '../simple-reuse-srategy';

@Component({
    selector: 'ns-home',
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    constructor(public router: Router) {

    }

    ngOnInit() {
        // 删除当前的路由复用
        SimpleReuseStrategy.deleteRouteSnapshot(this.router.url);
    }
}
