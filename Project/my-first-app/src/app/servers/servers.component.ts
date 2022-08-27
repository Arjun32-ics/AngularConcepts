import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverName='';
ServCreaStat = false;
servers = ['TestServer','TestServer2'];

serverCreationStatus = 'no Server was Created!'
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onServerCreation(){
    this.ServCreaStat = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Was Created! name is'+ this.serverName
  }

  onUpdateServer(event:Event){
   console.log(event);
   this.serverName = (<HTMLInputElement>event.target).value;
  }
}
