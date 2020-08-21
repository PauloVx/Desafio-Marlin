import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

export interface Post {
  title: string;
  body: string;
}

@Injectable({
  providedIn: "root",
})
export class PostsService {
  private readonly POSTS_ENDPOINT =
    "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  list(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.POSTS_ENDPOINT);
  }

  create(post: Post) {
    return this.http.post(this.POSTS_ENDPOINT, post).pipe(take(1));
  }
}
