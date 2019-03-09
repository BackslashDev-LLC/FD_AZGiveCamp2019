import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WalkthroughComponent } from "./walkthrough/walkthrough.component";
import { MovelistComponent } from "./movelist/movelist.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "walkthrough", component: WalkthroughComponent },
  { path: "movelist", component: MovelistComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
