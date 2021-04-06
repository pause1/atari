import { Component, OnInit } from '@angular/core';
import { Network } from './../network.service';
import { Router, NavigationEnd } from "@angular/router"

@Component({
    selector: 'app-papers',
    templateUrl: './papers.component.html',
    styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {

    constructor(private service: Network, private router: Router) {
        this.subs = router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.showPapers = false 
                this.npObj = []
                this.ngMyNav()
            }
        })


    }
    subs: any
    showPapers: boolean = false
    home: boolean = false
    npObj: {}
    npName: string
    year: string

    ngMyNav() {
        window.location.pathname == "/" ? null : /^[\/][^\/]{1,}$/.test(window.location.pathname) ? null : /^[\/][^\/]{1,}[\/][^\/]*$/.test(window.location.pathname) ? this.showPapers = true : this.router.navigate(["/"])
            
        if (this.showPapers) {
            this.npName = window.location.pathname.substr(1)
            this.year = this.npName.substr(this.npName.indexOf("/") + 1, this.npName.length - 1)
            this.npName = this.npName.substr(0, this.npName.indexOf("/"))

            this.year = this.year.replace("%20", " ")

            if (this.year == 'nr specjalny') this.year = "nr specjalny";
            if (this.year == 'nr specjalne') this.year = "nr specjalne";
            let string = this.npName + '/*[@rok=\'' + this.year + '\']';
            if (this.year == 'wszystkie') string = this.npName + '/*';

            this.service.getData(string).then(myData => {
                this.npObj = myData
            })
        }
    }

    ngOnInit() { }

    ngOnDestroy() {
        this.subs.unsubscribe()
    }

}
