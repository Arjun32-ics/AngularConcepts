import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
//import { map } from 'rxjs/operator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  private firstObsSubscription : Subscription

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription=interval( 1000).subscribe(count=>{
    //   console.log(count);
    // })

    const customIntervalObervable =  Observable.create(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count===2){observer.complete()}
        if(count > 3){observer.error(new Error('count is greater than 3'))}
        count++;
      },1000)
    });

    // customIntervalObervable.pipe(map((data: number)=>{
    //   return 'Round :' + (data+1);
    // }));

    this.firstObsSubscription = customIntervalObervable.pipe(filter(data=>{
      return data>0;
    })
    ,map((data: number)=>{
      return 'Round :' + (data+1);
    })).subscribe(data=>{console.log(data);},
    error=>{alert(error.message);},()=>{console.log('completed')})
    // this.firstObsSubscription  = customIntervalObervable.subscribe(data=>{
    //   console.log(data);
    // }
  
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
