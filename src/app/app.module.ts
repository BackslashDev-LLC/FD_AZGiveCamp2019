import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app-material.module";
import { WalkthroughComponent } from "./walkthrough/walkthrough.component";
import { MovelistComponent } from "./movelist/movelist.component";
import { HomeComponent } from "./home/home.component";
import { ControlsModule } from "./controls/controls.module";
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WalkthroughComponent,
    MovelistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    AppMaterialModule,
    ControlsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
