import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { promise } from "protractor";
import { Observable, observable } from "rxjs";
import { ServersService } from "../servers.service";

interface Server{
    id: number;
    name : string;
    status : string;
}
@Injectable()
export class ServerResolver implements Resolve<Server>{

    constructor(private serverService : ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     Server | Observable<Server> | Promise<Server> {
        return this.serverService.getServer(+route.params['id']);
    }

}