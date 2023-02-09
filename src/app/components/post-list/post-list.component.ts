import { CommentsService } from './../../services/comments.service';
import { Comment } from './../../interfaces/comment.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  id!: number;
  post!: Post;
  comments!: Array<Comment>;

  constructor(
    private postService: PostService,
    private commentService: CommentsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((parm) => (this.id = parm['id']));
    this.postService.getPostById(this.id).subscribe((res) => (this.post = res));
    // this.commentService
    //   .getCommentsById(this.id)
    //   .subscribe((res) => (this.comments = res));
    // console.log(this.comments);
    // this.commentService
    //   .getCommentsById(this.id)
    //   .subscribe((res) => {
    //     this.userComments= res.filter((comments) => post.userId == this.userId);
    //   }
    this.commentService.getComments().subscribe((res) => {
      this.comments = res.filter((comments) => comments.postId == this.id);
    });
  }
}
