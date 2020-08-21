import { Component, OnInit, Input } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate() {
    let params: NavigationExtras = {
      queryParams: {
        title: this.title,
        body: this.body,
      },
    };
    this.router.navigate(["details"], params);
  }
}
