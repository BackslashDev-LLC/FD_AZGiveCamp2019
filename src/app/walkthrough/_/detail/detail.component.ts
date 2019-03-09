import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Item } from "src/app/models/item.model";

@Component({
  selector: "fd-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  item: Item;

  constructor(
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.item = data.item;
  }

  ngOnInit() {}
  remove() {
    this.item.selected = false;
  }
  close() {
    this.item.selected = true;
  }
}
