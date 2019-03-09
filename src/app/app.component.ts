import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WalkthroughService } from "../app/services/walkthrough.services";
import { SaveWalkthroughService } from "./services/save-walkthrough.service";
import { DateAdapter } from "@angular/material";
import { AuthService } from "../app/auth/auth.service";

@Component({
  selector: "fd-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "furnishing-dignity";

  constructor(
    private _router: Router,
    public authService: AuthService,
    public walkthroughService: WalkthroughService,
    private saveWalkthroughService: SaveWalkthroughService
  ) {}

  startWalkthrough() {
    this._router.navigate(["walkthrough"]);
  }

  goHome() {
    this._router.navigate([""]);
  }

  checkIfOnline() {

  }

  ngOnInit() {
    var test = this.walkthroughService.getWalkthroughSource().then(res => {

    });
  }
}
