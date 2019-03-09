import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DetailComponent } from "./_/detail/detail.component";

@Component({
  selector: "fd-walkthrough",
  templateUrl: "./walkthrough.component.html",
  styleUrls: ["./walkthrough.component.scss"]
})
export class WalkthroughComponent implements OnInit {
  familyName: string;
  started: boolean = false;

  rooms: any[] = [
    {
      name: "Family Room",
      items: [
        { name: "Loveseat", selected: false },
        { name: "Futon", selected: false },
        { name: "Side Chair", selected: false },
        { name: "Side Table", selected: false },
        { name: "Coffee Table", selected: false },
        { name: "TV Stand", selected: false },
        { name: "Entertainment Center", selected: false }
      ]
    },
    {
      name: "Kitchen",
      items: [
        { name: "Dining Table", selected: false },
        { name: "Dining Chairs", selected: false },
        { name: "Bar Stools", selected: false }
      ]
    },
    {
      name: "Bathroom",
      items: [
        { name: "Shower Curtain", selected: false },
        { name: "Towels", selected: false },
        { name: "Rod", selected: false }
      ]
    }
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openDetail(w: any) {
    w.selected = true;

    const dialogRef = this.dialog.open(DetailComponent, {
      width: "600px",
      data: {
        item: w
      }
    });
  }

  start() {
    this.started = true;
  }
}
