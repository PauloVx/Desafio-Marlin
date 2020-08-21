import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Location } from "@angular/common";
import { PostsService, Post } from "../services/posts.service";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  constructor(private service: PostsService, private location: Location) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    let post: Post = {
      title: form.value.title,
      body: form.value.content,
    };

    this.service.create(post).subscribe(
      () => {
        alert("Post Criado!");
        this.location.back();
      },
      (error) => console.error("Erro: " + error)
    );
  }
}
