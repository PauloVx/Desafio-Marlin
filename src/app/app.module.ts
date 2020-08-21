import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostComponent } from "./post/post.component";
import { PostListComponentComponent } from "./post-list-component/post-list-component.component";
import { HttpClientModule } from "@angular/common/http";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { routing } from "./app.routing";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponentComponent,
    PostDetailsComponent,
    CreatePostComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
