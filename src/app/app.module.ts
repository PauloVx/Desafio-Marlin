import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostComponent } from "./post/post.component";
import { PostListComponentComponent } from "./post-list-component/post-list-component.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, PostComponent, PostListComponentComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
