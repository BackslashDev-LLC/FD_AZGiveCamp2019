import { Component, OnInit } from "@angular/core";
import { Client } from "../client";
import { SelectionModel } from "@angular/cdk/collections";
import { Router } from "@angular/router";
import { SaveWalkthroughService } from "../services/save-walkthrough.service";
import { FullWalkthrough } from "../models/fullWalkthrough.model";

@Component({
  selector: "fd-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  searchTerm: string;
  searchResults: FullWalkthrough[];
  selectedClient: Client;
  displayedColumns: string[] = ["name", "date", "actions"];
  selection: SelectionModel<Client>;

  constructor(
    private _router: Router,
    public saveWalkthroughService: SaveWalkthroughService
  ) {}

  ngOnInit() {}

  search() {
   this.saveWalkthroughService.getSavedWalkthrough()
     .subscribe(res => {
     var walkthroughs = [];
       console.log(res);
     for(var i =0; i < res.length; i++){
       let walk = res[i] as FullWalkthrough;

       if(walk.key.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1){
         walkthroughs.push(walk);
       }
     }
       this.searchResults = walkthroughs;
   });

    const initialSelection = [];
    const allowMultiSelect = false;
    this.selection = new SelectionModel<Client>(
      allowMultiSelect,
      initialSelection
    );
  }

  goToMoveList() {
    this._router.navigate(["movelist"]);
  }

  goToWalkthrough() {
    this._router.navigate(["walkthrough"]);
  }
}
