import { Component, OnInit } from "@angular/core";
import { PostsService, Post } from "../services/posts.service";

@Component({
  selector: "app-post-list-component",
  templateUrl: "./post-list-component.component.html",
  styleUrls: ["./post-list-component.component.scss"],
})
export class PostListComponentComponent implements OnInit {
  public posts: Array<Post>;

  constructor(private service: PostsService) {}

  ngOnInit() {
    this.service.list().subscribe((data) => (this.posts = data));
  }
}
