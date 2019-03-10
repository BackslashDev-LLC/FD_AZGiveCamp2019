import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WalkthroughService } from "../app/services/walkthrough.services";
import { SaveWalkthroughService } from "./services/save-walkthrough.service";
import { AuthService } from "../app/auth/auth.service";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "fd-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "furnishing-dignity";

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(["(max-width: 700px)"])
    .pipe(map(result => result.matches));

  constructor(
    private _router: Router,
    public authService: AuthService,
    public walkthroughService: WalkthroughService,
    private saveWalkthroughService: SaveWalkthroughService,
    private breakpointObserver: BreakpointObserver
  ) {}

  startWalkthrough() {
    this._router.navigate(["walkthrough"]);
  }

  goHome() {
    this._router.navigate([""]);
  }

  checkIfOnline() {}

  ngOnInit() {
    var test = this.walkthroughService.getWalkthroughSource().then(res => {});
  }
}
