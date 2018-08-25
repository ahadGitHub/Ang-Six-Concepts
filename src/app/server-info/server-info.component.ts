import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server-info',
    templateUrl: './server-info.component.html',
    styleUrls: ['./server-info.component.css']
})
export class ServerInfoComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No Server is Created.';
    clusterName = 'Watson-Health-Cluster';
    newServerName = '';
    serverStatus = 'offline';
    // servers = [
    //     'Dev',
    //     'QA',
    //     'Model',
    //     'Production'
    // ];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 5000);

        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    ngOnInit() {
    }

    onCreateServer() {
        // this.servers.push(this.newServerName);
        this.serverCreationStatus = this.newServerName + ' Server Created';
    }

    onUpdateServerName(event: any) {
        console.log(event);
        // this.newServerName = (<HTMLInputElement>event.target).value;
        this.newServerName = event.target.value;
    }

    getColor() {
        // triple equal sign means ' if '
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
