import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DetailComponent } from "./_/detail/detail.component";
import { WalkthroughService } from "../services/walkthrough.services";
import { FullWalkthrough } from "../models/fullWalkthrough.model";
import { FullRoom } from "../models/fullRoom.model";
import { SaveWalkthroughService } from "../services/save-walkthrough.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: "fd-walkthrough",
  templateUrl: "./walkthrough.component.html",
  styleUrls: ["./walkthrough.component.scss"]
})
export class WalkthroughComponent implements OnInit {
  familyName: string;
  started: boolean = false;

  rooms: FullRoom[] = [];
  //   {
  //     name: "Family Room",
  //     items: [
  //       { name: "Loveseat", selected: false },
  //       { name: "Futon", selected: false },
  //       { name: "Side Chair", selected: false },
  //       { name: "Side Table", selected: false },
  //       { name: "Coffee Table", selected: false },
  //       { name: "TV Stand", selected: false },
  //       { name: "Entertainment Center", selected: false }
  //     ]
  //   },
  //   {
  //     name: "Kitchen",
  //     items: [
  //       { name: "Dining Table", selected: false },
  //       { name: "Dining Chairs", selected: false },
  //       { name: "Bar Stools", selected: false }
  //     ]
  //   },
  //   {
  //     name: "Bathroom",
  //     items: [
  //       { name: "Shower Curtain", selected: false },
  //       { name: "Towels", selected: false },
  //       { name: "Rod", selected: false }
  //     ]
  //   }
  // ];

  constructor(
    private dialog: MatDialog,
    public walkthroughService: WalkthroughService,
    public saveWalkthroughService: SaveWalkthroughService
  ) {}

  ngOnInit() {
    this.walkthroughService
      .getWalkthroughSource()
      .then((result: FullWalkthrough) => {
        this.familyName = result.key;
        this.rooms = result.rooms;
      });
  }

  openDetail(w: any) {
    w.selected = true;

    const dialogRef = this.dialog.open(DetailComponent, {
      width: "600px",
      data: {
        item: w
      }
    });
  }

  addRoom(room: any) {
    let newRoom = JSON.parse(JSON.stringify(room));
    newRoom.items.map(item => item.selected = false);
    this.rooms.splice(this.rooms.indexOf(room) + 1, 0, newRoom);
  }

  start() {
    this.started = true;
  }
  complete() {
    var completedWalkthrough = new FullWalkthrough();
    completedWalkthrough.key = this.familyName;
    //     completedWalkthrough.rooms =
    // this.saveWalkthroughService.saveWalkthrough()
  }
}
