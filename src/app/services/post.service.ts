import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getPost(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.postUrl);
  }
  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.postUrl}/${id}`);
  }
}
