import { Component, OnInit } from "@angular/core";
import { SaveWalkthroughService } from "../services/save-walkthrough.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFirestoreDocument } from "@angular/fire/firestore";
import { FullWalkthrough } from "../models/fullWalkthrough.model";

@Component({
  selector: "fd-movelist",
  templateUrl: "./movelist.component.html",
  styleUrls: ["./movelist.component.scss"]
})
export class MovelistComponent implements OnInit {
  constructor(
    private _router: Router,
    private savedWalkthroughService: SaveWalkthroughService,
    private activatedRoute: ActivatedRoute
  ) {}
  public moveListInput: FullWalkthrough;
  private walkthroughDoc: AngularFirestoreDocument<FullWalkthrough>;

  ngOnInit() {
    this.walkthroughDoc = this.savedWalkthroughService.getSavedWalkthroughById(
      this.activatedRoute.snapshot.paramMap.get("id")
    );
    this.walkthroughDoc.valueChanges().subscribe(walkthrough => {
      this.moveListInput = FullWalkthrough.fromOjbect(walkthrough);    });
    });
  }

  delete() {
    if (window.confirm("Are you sure you want to delete?")) {
      this.walkthroughDoc.delete();
      this._router.navigate([""]);
    }
  }
}
