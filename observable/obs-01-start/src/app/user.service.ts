import { EventEmitter, Injectable, Output } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class UserService{
  //  activatebtn = new EventEmitter<boolean>();

    activatebtn = new Subject<boolean>();

}