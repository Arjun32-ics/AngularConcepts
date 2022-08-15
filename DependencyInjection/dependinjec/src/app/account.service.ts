import { Injectable,EventEmitter } from "@angular/core";
// import { EventEmitter } from "stream";
import { LoggingService } from "./logging.service";
@Injectable()
export class AccountService{

    constructor(private loggingService : LoggingService){}
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      addAccount(name:string , status: string){
        this.accounts.push({name:name , status: status});
        this.loggingService.statusChanges(status)
      }

      updateStatus(id:number , status : string){
        this.accounts[id].status = status;
        this.loggingService.statusChanges(status)
      }
}