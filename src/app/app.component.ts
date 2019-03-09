import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "fd-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "furnishing-dignity";

  constructor(private _router: Router) {}

  startWalkthrough() {
    this._router.navigate(["walkthrough"]);
  }

  goHome() {
    this._router.navigate([""]);
  }
}
