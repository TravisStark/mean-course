import { Component, Input } from '@angular/core';
import { Post } from '../post.model';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  // posts = [
  //   {title: 'First Post', content: 'This is the 1st post\'s content'},
  //   {title: 'Second Post', content: 'This is the 2nd post\'s content'},
  //   {title: 'Third Post', content: 'This is the 3rd post\'s content'},
  // ];

  @Input() posts: Post[] = [];

}
