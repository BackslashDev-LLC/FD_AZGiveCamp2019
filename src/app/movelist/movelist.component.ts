import { Component, OnInit } from "@angular/core";
import { SaveWalkthroughService } from "../services/save-walkthrough.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFirestoreDocument } from "@angular/fire/firestore";
import {FullWalkthrough, MoveListFullWalkthrough} from "../models/fullWalkthrough.model";
import { FullRoom } from "../models/fullRoom.model";
import * as _ from "lodash";


@Component({
  selector: "fd-movelist",
  templateUrl: "./movelist.component.html",
  styleUrls: ["./movelist.component.scss"]
})
export class MovelistComponent implements OnInit {
  deliveryInstruction: string;

  constructor(
    private _router: Router,
    private savedWalkthroughService: SaveWalkthroughService,
    private activatedRoute: ActivatedRoute
  ) {}
  public moveListInput: MoveListFullWalkthrough;
  public furnitureRooms: FullRoom[] = [];
  public smallItemRooms: FullRoom[] = [];
  private walkthroughDoc: AngularFirestoreDocument<FullWalkthrough>;

  ngOnInit() {
    this.walkthroughDoc = this.savedWalkthroughService.getSavedWalkthroughById(
      this.activatedRoute.snapshot.paramMap.get("id")
    );
    this.walkthroughDoc.valueChanges().subscribe(walkthrough => {

      this.moveListInput = MoveListFullWalkthrough.fromObjectMoveList(walkthrough);

      console.log(this.moveListInput);

      this.furnitureRooms = _.filter(this.moveListInput.largeItemRooms, function(o) {return o && o.items && o.items.length > 0});
      this.smallItemRooms = _.filter(this.moveListInput.smallItemRooms, function(o) {return o && o.items && o.items.length > 0});
      console.log(this.smallItemRooms);
      console.log(this.furnitureRooms);
    });
  }

  delete() {
    if (window.confirm("Are you sure you want to delete?")) {
      this.walkthroughDoc.delete();
      this._router.navigate([""]);
    }
  }
}
