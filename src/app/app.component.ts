import { Component } from '@angular/core';
import { Network } from './network.service';
import { Router, NavigationEnd } from "@angular/router"


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    home: boolean = false
    routerSubscription: any
    constructor(private service: Network, private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                window.location.pathname == "/" ? this.home = true : /^[\/][^\/]{1,}$/.test(window.location.pathname) ? this.home = false : /^[\/][^\/]{1,}[\/][^\/]*$/.test(window.location.pathname) ? this.home = false : this.router.navigate(["/"])
                this.ngMyInit()
            }
        });
    }
    items: Object;


    selectNewspaper = (data) => {
        this.home = false
        this.router.navigate([data])

    }

    ngOnInit() { }
    ngMyInit() {
        if (this.home)
            this.service.getData('zmienne').then(myData => {
                const output = Object.values(myData[0]).map(function (obj) {
                    return Object.keys(obj).sort().map(function (key) {
                        return obj[key];
                    });
                });
                this.items = output;
            })
    }
}
