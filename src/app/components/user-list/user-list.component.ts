import { ActivatedRoute } from '@angular/router';
import { User } from './../../interfaces/user.interface';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: Array<User>;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getusers().subscribe((res) => (this.users = res));
  }
}
