import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {WalkthroughService, FullWalkthrough} from "../app/services/walkthrough.services";
import { SaveWalkthroughService } from "./services/save-walkthrough.service";
import {DateAdapter} from "@angular/material";


@Component({
  selector: "fd-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "furnishing-dignity";

  private walk: FullWalkthrough;

  constructor(private _router: Router, public walkthroughService: WalkthroughService, private saveWalkthroughService: SaveWalkthroughService) {}

  startWalkthrough() {
    this._router.navigate(["walkthrough"]);
  }

  goHome() {
    this._router.navigate([""]);
  }
  ngOnInit(){
   var test = this.walkthroughService.getWalkthroughById("1").subscribe(res =>{

     console.log(res);
   });
   this.walk = new FullWalkthrough();
   this.walk.key = "TestKey";
   this.walk.dateTime = "3-9-2019";
   this.walk.rooms =[{
     name: "Test room",
     items: []
   }];

    this.saveWalkthroughService.saveWalkthrough(this.walk);

  }
}
