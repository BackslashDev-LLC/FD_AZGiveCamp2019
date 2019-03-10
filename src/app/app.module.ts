import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatTableModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from "@angular/material";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app-material.module";
import { LoginComponent } from "./login/login.component";
import { WalkthroughComponent } from "./walkthrough/walkthrough.component";
import { MovelistComponent } from "./movelist/movelist.component";
import { HomeComponent } from "./home/home.component";
import { ControlsModule } from "./controls/controls.module";

import { FormsModule } from "@angular/forms";

import { DetailComponent } from "./walkthrough/_/detail/detail.component";
import { WalkthroughService } from "./services/walkthrough.services";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AuthService } from "./auth/auth.service";
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WalkthroughComponent,
    MovelistComponent,
    HomeComponent,
    DetailComponent,
    AppLayoutComponent
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
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [WalkthroughService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [DetailComponent]
})
export class AppModule {}
