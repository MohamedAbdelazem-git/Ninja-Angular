import { Comment } from './../interfaces/comment.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) {}
  getComments(): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(this.commentsUrl);
  }
  getCommentsById(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.commentsUrl}/${id}`);
  }
}
