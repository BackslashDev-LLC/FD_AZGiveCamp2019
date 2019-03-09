import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { WalkthroughComponent } from "./walkthrough/walkthrough.component";
import { MovelistComponent } from "./movelist/movelist.component";
import { HomeComponent } from "./home/home.component";
import { AppGuard } from "./app.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "walkthrough",
    component: WalkthroughComponent,
    canActivate: [AppGuard]
  },
  {
    path: "walkthrough/:id",
    component: WalkthroughComponent,
    canActivate: [AppGuard]
  },
  { path: "movelist", component: MovelistComponent, canActivate: [AppGuard] },
  { path: "", component: HomeComponent, canActivate: [AppGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
