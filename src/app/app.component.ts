import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {WalkthroughService} from "../app/services/walkthrough.services";
import {DateAdapter} from "@angular/material";


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
   var test = this.walkthroughService.getWalkthroughById("1").subscribe(res =>{

     console.log(res);
   })

    var more = this.walkthroughService.getEntireWalkthrough("1");
   console.log(more);
  }
}
