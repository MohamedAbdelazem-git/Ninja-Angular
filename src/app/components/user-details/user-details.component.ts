import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId!: number;
  user!: User;
  posts!: Array<Post>;
  userPosts!: Array<Post>;
  constructor(
    private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((parm) => (this.userId = parm['id']));
    this.userService
      .getUserById(this.userId)
      .subscribe((res) => (this.user = res));
    this.postService.getPost().subscribe((res) => {
      this.userPosts = res.filter((post) => post.userId == this.userId);
    });
  }
}
