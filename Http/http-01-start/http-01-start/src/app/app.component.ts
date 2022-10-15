import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'Rxjs'
import {Post} from './post.model'
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts : Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient,
    private post : PostService) {}

  ngOnInit() {
    this.post.error.subscribe(errormsg=>{
      this.error = errormsg;
    })
    this.isFetching= true;
    this.post.fetchPost()
    .subscribe(res=>{
      this.isFetching= false;
      this.loadedPosts = res;
    },error=>{
      this.isFetching= false;
      this.error = error;
    });
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
   this.post.createandstorepost(postData.title,postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching= true;
    this.post.fetchPost()
    .subscribe(res=>{
      this.isFetching= false;
      this.loadedPosts = res;
    },error=>{
      this.isFetching= false;
      this.error = error;
    });
  }

  onClearPosts() {
    // Send Http request
    this.post.deletePost().subscribe(()=>{
      this.loadedPosts=[];
    })
  }

  onRest(){
    this.error=null;
  }
}
