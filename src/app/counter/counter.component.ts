import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
    showSecret = false;
    logs = [];
    dates = [];
    logCountLimit = false;

    constructor() { }

    ngOnInit() {
    }

    countLimit() {
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();

        const newDate = year + ', ' + month;

        this.showSecret = !this.showSecret;
        this.logs.push(this.logs.length + 1);
        // this.dates.push(newDate);
        this.dates.push(new Date());

        if (this.logs.length >= 5) {
            console.log('Z');
            this.logCountLimit = true;
        }

        return this.showSecret;
    }

}
