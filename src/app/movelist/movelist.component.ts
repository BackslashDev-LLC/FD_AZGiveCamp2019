import { Component, OnInit } from "@angular/core";
import { SaveWalkthroughService } from "../services/save-walkthrough.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "fd-movelist",
  templateUrl: "./movelist.component.html",
  styleUrls: ["./movelist.component.scss"]
})
export class MovelistComponent implements OnInit {
  constructor(private savedWalkthroughService: SaveWalkthroughService, private activatedRoute: ActivatedRoute) {}
  public moveListInput: any = {};

  ngOnInit() {
    this.savedWalkthroughService
    .getSavedWalkthroughById(this.activatedRoute.snapshot.paramMap.get("id"))
    .subscribe(walkthrough => {
      this.moveListInput = walkthrough;
      console.log(this.moveListInput);
    });
  }
}
