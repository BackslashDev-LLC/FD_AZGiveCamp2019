import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {WalkthroughService} from "../app/services/walkthrough.services";

@Component({
  selector: "fd-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "furnishing-dignity";

  constructor(private _router: Router, public walkthroughService: WalkthroughService) {}

  startWalkthrough() {
    this._router.navigate(["walkthrough"]);
  }

  goHome() {
    this._router.navigate([""]);
  }
  ngOnInit(){
   this.walkthroughService.getWalkthroughById("Verry2019").subscribe(a => {
     console.log(a);
   })
  }
}
