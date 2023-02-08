import { Post } from './../../interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  id!: number;
  post!: Post;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((parm) => (this.id = parm['id']));
    this.postService.getPostById(this.id).subscribe((res) => (this.post = res));
  }
}
