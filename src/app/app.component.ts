import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
<<<<<<< HEAD
import {WalkthroughService, FullWalkthrough} from "../app/services/walkthrough.services";
import { SaveWalkthroughService } from "./services/save-walkthrough.service";
import {DateAdapter} from "@angular/material";

=======
import { AuthService } from "../app/auth/auth.service";
import { WalkthroughService } from "../app/services/walkthrough.services";
import { DateAdapter } from "@angular/material";
>>>>>>> 471f4bffd14012b24255586ab75d653ceb93138f

@Component({
  selector: "fd-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "furnishing-dignity";

  private walk: FullWalkthrough;

  constructor(private _router: Router, public walkthroughService: WalkthroughService, private saveWalkthroughService: SaveWalkthroughService) {}
  constructor(
    private _router: Router,
    public authService: AuthService,
    public walkthroughService: WalkthroughService
  ) {}


  startWalkthrough() {
    this._router.navigate(["walkthrough"]);
  }

  goHome() {
    this._router.navigate([""]);
  }
  ngOnInit() {
    var test = this.walkthroughService
      .getWalkthroughById("1")
      .subscribe(res => {
        console.log(res);
      });

  }

}
