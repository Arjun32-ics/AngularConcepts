import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
    private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment)
    this.route.queryParams.subscribe(
      (queryparams:Params) => {
        this.allowEdit = queryparams['allowEdit']==='1'?true : false;
      }
      );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    //Subscribe route params to update idif params chamge
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo : this.route})
  }

  canDeactivate
   () : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
     if(!this.allowEdit){
       console.log('this.allowEdit')
            return true
     }
     if((this.serverName !== this.server.name || this.serverStatus !== this.server.status)&&
     !this.changesSaved){
      console.log('this.changesSaved)')
       return confirm('Are you sure you want to discard?')
     }else{
      console.log('else')
       return true;
     }
   }
   
}
