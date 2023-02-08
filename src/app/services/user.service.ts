import { User } from './../interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getusers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.userUrl);
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }
}
