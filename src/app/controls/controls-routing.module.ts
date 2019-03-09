import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DemoComponent } from "./demo/demo.component";

const routes: Routes = [{ path: "controls-demo", component: DemoComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ControlsRoutingModule {}
