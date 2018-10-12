import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   {title: 'First Post', content: 'This is the 1st post\'s content'},
  //   {title: 'Second Post', content: 'This is the 2nd post\'s content'},
  //   {title: 'Third Post', content: 'This is the 3rd post\'s content'},
  // ];

  @Input() posts: Post[] = [];

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

}
