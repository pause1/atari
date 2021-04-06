import { Component, OnInit } from '@angular/core';
import { Network } from './../network.service';
import { Router, NavigationEnd } from "@angular/router"

@Component({
    selector: 'app-handler',
    templateUrl: './handler.component.html',
    styleUrls: ['./handler.component.css']
})
export class HandlerComponent implements OnInit {
    constructor(private service: Network, private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.years = []
                this.ngMyInit()
            }
        })
    }

    address: string
    years: any

    npShowPages(data) {
        this.router.navigate([this.address, data])
    }

    ngMyInit() {
        if (/^[\/][^\/]{1,}[\/][^\/]*$/.test(window.location.pathname)) {
            this.address = window.location.pathname.substr(1)
            this.address = this.address.substr(0, this.address.indexOf("/"))
        } else this.address = window.location.pathname.substr(1)
        if (this.address) {
            this.service.getData('lata//' + this.address).then(myData => {

                try {
                    this.years = myData[0][0].split(',');
                    this.years.push("wszystkie")
                }
                catch (err) { }


                if (!this.years || this.years.length <= 0)
                    this.router.navigate(["/"])
            })
        }
    }

    ngOnInit() { }

}
