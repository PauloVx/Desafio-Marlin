import { Routes, RouterModule } from "@angular/router";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";

const APP_ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "details", component: PostDetailsComponent },
  { path: "create", component: CreatePostComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
