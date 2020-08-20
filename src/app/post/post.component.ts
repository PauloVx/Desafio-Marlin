import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;

  constructor() {}

  ngOnInit() {}
}
