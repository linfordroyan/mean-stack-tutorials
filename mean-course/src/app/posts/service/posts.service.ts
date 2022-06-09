import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new BehaviorSubject<Post[]>(this.posts);
  constructor() { }

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postUpdated.asObservable();
  }

  addPosts(title:string, content:string){
    const post:Post = {title,content};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
