import { Component, OnInit } from '@angular/core';
import { Post } from '../posts'
import { PostsService } from '../posts.service'
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  
  posts$: Observable<Post[]>;
  userId: number;

  constructor(private postService: PostsService) { 
    this.posts$ = of([]);
    this.userId = 1;
  }

  ngOnInit(): void {
    //this.posts$ = this.postService.buscarTodosPosts();
  }

  getPosts(){
    this.posts$ = this.postService.buscarPostPorUserId(this.userId);
  }

}
