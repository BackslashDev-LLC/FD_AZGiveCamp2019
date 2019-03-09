import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { MatSnackBar } from '@angular/material';
import { DetailComponent } from "./_/detail/detail.component";
import { WalkthroughService } from "../services/walkthrough.services";
import { FullWalkthrough } from "../models/fullWalkthrough.model";
import { FullRoom } from "../models/fullRoom.model";
import { SaveWalkthroughService } from "../services/save-walkthrough.service";
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";
import { Item } from "../models/item.model";

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
    private _router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDetail(w: Item) {
    //w.selected = true;

    const dialogRef = this.dialog.open(DetailComponent, {
      width: "600px",
      data: {
        item: w
      }
    });
  }

  addRoom(room: any) {
    let newRoom = JSON.parse(JSON.stringify(room));
    newRoom.items.map(item => (item.selected = false));
    this.rooms.splice(this.rooms.indexOf(room) + 1, 0, newRoom);
    this.openSnackBar(newRoom.name + " Added!", "");
  }

  start() {
    this.started = true;
  }
  complete() {
    const completedWalkthrough = new FullWalkthrough();
    completedWalkthrough.key = this.familyName;
    completedWalkthrough.rooms = this.rooms
      .filter(a => a.items.some(b => b.selected))
      .map(a => {
        const room = new FullRoom(a.name);
        room.items = a.items
          .filter(a => a.selected)
          .map(
            a =>
              new Item(
                a.name,
                a.attributes.filter(b => b.selected).map(b => b.name),
                a.isRankable,
                a.comments
              )
          );
        return room;
      });
    completedWalkthrough.dateTime = new Date();
    console.log(completedWalkthrough);
    this.saveWalkthroughService.saveWalkthrough(completedWalkthrough);
    this._router.navigate(["home"]);
  }
}
