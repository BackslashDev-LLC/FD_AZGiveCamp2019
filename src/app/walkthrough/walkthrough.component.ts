import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { MatSnackBar } from "@angular/material";
import { DetailComponent } from "./_/detail/detail.component";
import { WalkthroughService } from "../services/walkthrough.services";
import { FullWalkthrough } from "../models/fullWalkthrough.model";
import { FullRoom } from "../models/fullRoom.model";
import { SaveWalkthroughService } from "../services/save-walkthrough.service";
import { Router } from "@angular/router";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { Item } from "../models/item.model";
import { AngularFirestoreDocument } from "@angular/fire/firestore";

@Component({
  selector: "fd-walkthrough",
  templateUrl: "./walkthrough.component.html",
  styleUrls: ["./walkthrough.component.scss"]
})
export class WalkthroughComponent implements OnInit {
  familyName: string;
  started: boolean;
  private walkthroughDoc: AngularFirestoreDocument<FullWalkthrough>;

  rooms: FullRoom[] = [];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public walkthroughService: WalkthroughService,
    public saveWalkthroughService: SaveWalkthroughService
  ) {}

  ngOnInit() {
    const walkthroughId = this._route.snapshot.params["id"];
    const allPromise: Promise<any>[] = [];
    const mainPromise = new Promise((resolve, reject) => {
      this.walkthroughService
        .getWalkthroughSource()
        .then((result: FullWalkthrough) => {
          this.rooms = result.rooms;
          resolve();
        });
    });
    allPromise.push(mainPromise);
    if (walkthroughId) {
      let newRooms = [];
      const loadPromise = new Promise((resolve, reject) => {
        this.walkthroughDoc = this.saveWalkthroughService.getSavedWalkthroughById(
          walkthroughId
        );
        this.walkthroughDoc.valueChanges().subscribe((next: any) => {
          this.started = true;
          this.familyName = next.key;
          newRooms = next.rooms;
          resolve();
        });
      });
      allPromise.push(loadPromise);
      Promise.all(allPromise).then(() => {
        newRooms.forEach(a => {
          const foundRoom = this.rooms.find(b => b.name === a.name);
          if (!foundRoom) {
            this.rooms.push(a);
            return;
          }
          a.items.forEach(b => {
            const foundItem = foundRoom.items.find(c => b.name === c.name);
            if (foundItem) {
              foundItem.rating = b.rating;
              b.attributes.forEach(c => {
                const foundAttribute = foundItem.attributes.find(
                  d => d.name === c
                );
                if (foundAttribute) {
                  foundAttribute.selected = true;
                }
              });
              foundItem.comments = b.comments;
              foundItem.isRankable = b.isRankable;
              foundItem.rating = b.rating;
              foundItem.selected = true;
            } else {
              foundRoom.items.push(b);
            }
          });
        });
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  openDetail(w: Item) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: "600px",
      data: {
        item: w
      }
    });
  }

  addRoom(room: any) {
    let newRoom = FullRoom.fromObject(JSON.parse(JSON.stringify(room)));
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
        const room = new FullRoom(a.name, a.type);
        room.items = a.items
          .filter(a => a.selected)
          .map(
            a =>
              new Item(
                a.name,
                a.attributes.filter(b => b.selected).map(b => b.name),
                a.isRankable,
                a.comments,
                a.rating
              )
          );
        return room;
      });
    completedWalkthrough.dateTime = new Date();
    console.log(completedWalkthrough);
    if (this.walkthroughDoc) this.walkthroughDoc.delete();
    this.saveWalkthroughService.saveWalkthrough(completedWalkthrough);
    this._router.navigate([""]);
  }
}
