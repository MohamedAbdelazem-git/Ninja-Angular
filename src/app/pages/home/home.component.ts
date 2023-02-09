import { Post } from './../../interfaces/post.interface';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts!: Array<Post>;
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.postService.getPost().subscribe({
      next: (value) => (this.posts = value),
      error: (error) => console.log(error),
    });
  }

  getSearchData(event: string) {
    console.log(event);
    this.posts = this.posts.filter((val) => val.title.indexOf(event) != -1);
  }
  // posts: Array<Post> = posts;
}
