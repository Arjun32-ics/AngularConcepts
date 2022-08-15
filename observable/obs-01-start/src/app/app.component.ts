import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  isitActivated: boolean = false;
 private firstSub : Subscription;

  constructor(private userSvc : UserService) {}

  ngOnInit() {
    this.firstSub=this.userSvc.activatebtn.subscribe(didActivate=>{
      this.isitActivated = didActivate;
    })
  }

  ngOnDestroy(): void {
    this.firstSub.unsubscribe();
  }
}
