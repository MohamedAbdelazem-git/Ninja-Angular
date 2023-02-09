import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-user-post-card',
  templateUrl: './user-post-card.component.html',
  styleUrls: ['./user-post-card.component.css'],
})
export class UserPostCardComponent implements OnInit {
  @Input() post!: Post;
  id!: number;

  constructor() {}
  ngOnInit(): void {}
}
