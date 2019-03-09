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
  searchResults: Client[];
  selectedClient: any;
  displayedColumns: string[] = ["name", "date", "actions"];
  selection: SelectionModel<Client>;

  constructor(
    private _router: Router,
    public saveWalkthroughService: SaveWalkthroughService
  ) {}

  ngOnInit() {}

  public selectClient(client){
    this.selectedClient = client;
  }

  search() {
    this.saveWalkthroughService.getSavedWalkthrough().subscribe(res => {
      const walkthroughs = [];
      res.forEach(action => {
        var data = action.payload.doc.data();

        if(data.key.indexOf(this.searchTerm)){
          var client = new Client().fromFirebase(action.payload.doc.id, data);

          walkthroughs.push(client);
        }

      });
      this.searchResults = walkthroughs;
    });

    const initialSelection = [];
    const allowMultiSelect = false;
    this.selection = new SelectionModel<Client>(
      allowMultiSelect,
      initialSelection
    );
  }

  goToMoveList(client) {
    debugger;
    this._router.navigate(["movelist/" + client.id]);
  }

  goToWalkthrough() {
    this._router.navigate(["walkthrough"]);
  }
}
