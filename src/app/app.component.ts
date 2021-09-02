import { Component, OnInit } from '@angular/core';
import { Post } from './posts'
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  posts: Post [];

  constructor(private postService: PostsService){
    this.posts = [];
  }

  ngOnInit(): void {
    this.postService.buscarTodosPosts().subscribe(
      dados => this.posts = dados
    );
  }

}
