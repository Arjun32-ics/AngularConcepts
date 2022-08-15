import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router,private authservice : AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id : number){
   //Complex Code
   this.route.navigate(['/servers' , id,'edit'],
   {queryParams:{allowEdit : '1'},
  fragment: 'loading'})
  }

  onLogin(){
    this.authservice.login()
  }

  onLogout(){
    this.authservice.logout()
  }
}
