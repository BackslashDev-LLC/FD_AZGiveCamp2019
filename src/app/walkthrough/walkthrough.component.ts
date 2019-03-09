import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DetailComponent } from "./_/detail/detail.component";

@Component({
  selector: "fd-walkthrough",
  templateUrl: "./walkthrough.component.html",
  styleUrls: ["./walkthrough.component.scss"]
})
export class WalkthroughComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openDetail() {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: "400px",
      data: {}
    });
  }
}
