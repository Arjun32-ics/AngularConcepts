import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errormessage: string;

  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    //this.errormessage = this.router.snapshot.data['message']
    this.router.data.subscribe(
      (data : Data)=>{
        this.errormessage= data['message']
      }
    )
  }


}
