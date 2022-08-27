import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl : './server.component.html',
    styles : [`
    .online{
        color : white
    }
    `]
})

export class ServerComponent{
serverID : number = 10;
serverStatus : string = 'offline';

constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'Offline':'Online'
}

getServerStatus(){
    return this.serverStatus;
}

getcolor(){
    return this.serverStatus === 'Online' ? 'green':'red'
}
}