import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type:'server',name:'Test Server',content:'Just A Server!'
    // ,name:'jhjsh',type:'sjkjks',content:'kjskljs'
  }];
 
  onServerAdded(serverdata :{serverName : string , serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name:serverdata.serverName,
      content: serverdata.serverContent
    });
  }

  onBlueprintAdded(blueprintdata :{serverName : string , serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintdata.serverName,
      content: blueprintdata.serverContent
    });
  }
  
  onServerChange(){
    this.serverElements[0].name ='something';//ngonchange Example
  }
  
  OnServerDestroy(){
    this.serverElements.splice(0,1);
  }

}
