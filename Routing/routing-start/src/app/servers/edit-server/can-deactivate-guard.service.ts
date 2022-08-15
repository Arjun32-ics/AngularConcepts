import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable  } from "rxjs"

export interface CanComponentDeactivate{
    canDeactivate : () => 
     boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot): 
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDeactivate();
    }
}