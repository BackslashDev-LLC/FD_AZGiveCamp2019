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
  searchResults: any[];
  selectedClient: Client;
  displayedColumns: string[] = ["name", "date", "actions"];
  selection: SelectionModel<Client>;

  constructor(
    private _router: Router,
    public saveWalkthroughService: SaveWalkthroughService
  ) {}

  ngOnInit() {}

  search() {
    this.saveWalkthroughService
      .getSavedWalkthrough(this.searchTerm)
      .subscribe(res => {
        this.searchResults = res;
        console.log(res);
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
