import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject,catchError,throwError, tap } from "rxjs";
import { parseArgs } from "util";
import{Post} from './post.model'

@Injectable({providedIn:'root'})
export class PostService{
    error = new Subject<string>();

    constructor(private http : HttpClient){}
    createandstorepost(title:string,content:string){
        const postData = {title:title,content:content};
        this.http.post<{id : string}>('https://shopp-6e91c-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          observe:'response',
          responseType:'json'
        })
        .subscribe(responsedata=>{
          console.log(responsedata.body);
        },error=>{
            this.error.next(error);
        })
    }

    fetchPost(){
      let searchparams = new HttpParams();
      searchparams = searchparams.append('print','pretty')
      searchparams = searchparams.append('custom','key')
      return  this.http.get<{[key:string]: Post}>(
        'https://shopp-6e91c-default-rtdb.firebaseio.com/posts.json',
        {
           headers: new HttpHeaders({ 'custom-headers':'hello'}),
           params : searchparams
       }
          )
        .pipe(map(responsedata=>{
          const postArray=[];
          for(const key in responsedata){
            if(responsedata.hasOwnProperty(key)){
              postArray.push({...responsedata[key],id:key})
            }
          }
          return postArray;
        }),catchError(errorres=>{
            return throwError(errorres);
        }))
    }

    deletePost(){
        return this.http.delete('https://shopp-6e91c-default-rtdb.firebaseio.com/posts.json' ,{
          observe :'events',
          responseType:'text'
        }).pipe(tap(events=>{
          console.log(events);
          if(events.type==HttpEventType.Response){
            console.log(events)
          }
        }))
       
    }
}