import { Component } from '@angular/core';
import { IPost } from '../../interfaces/post';
import posts from '../../../assets/posts.json';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  posts: Array<IPost> = posts;
}
