import {Routes} from "@angular/router";
import {MyFirstPageComponent} from "./my-first-page/my-first-page.component";
import {HomeComponent} from "./home/home.component";

export const routerConfig: Routes = [
  {
    path: "myFirstPage",
    component: MyFirstPageComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/home",
    pathMatch: "full"
  }
];
