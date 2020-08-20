import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Post {
  title: string;
  body: string;
}

@Injectable({
  providedIn: "root",
})
export class PostsService {
  private readonly API = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {}

  list(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${this.API}/posts`);
  }
}
