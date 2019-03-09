import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: 'fd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchTerm: string;
  searchResults: Client[];
  selectedClient: Client;
  displayedColumns: string[] = ["name", "date"];
  selection: SelectionModel<Client>;


  
  constructor() { }
  result1: Client = {
    name: "AbleB",
    walkthroughDate: new Date("2/3/2019")
  };
  result2: Client = {
    name: "AbleC",
    walkthroughDate: new Date("3/10/2019")
  };

  ngOnInit() {
  }

  search() {
    this.searchResults = [this.result1, this.result2];
    const initialSelection = [];
    const allowMultiSelect = false;
    this.selection = new SelectionModel<Client>(allowMultiSelect, initialSelection);
    //console.log(this.searchResults[0].name);
    //console.log(this.searchResults[1].name);
  }

  onSelect(client: Client): void {
    this.selectedClient = client;
    console.log(client.name + "selected");
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.searchResults.length;
    return numSelected == numRows;
  }
  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.searchResults.forEach(row => this.selection.select(row));
  }
}
