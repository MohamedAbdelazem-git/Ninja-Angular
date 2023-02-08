import { Post } from './../../interfaces/post.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;
  ngOnInit(): void {}
}
