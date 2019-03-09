import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fd-movelist",
  templateUrl: "./movelist.component.html",
  styleUrls: ["./movelist.component.scss"]
})
export class MovelistComponent implements OnInit {
  rooms = [
    {
      name: "Family Room",
      items: ["Sofa", "Side Chair (Overstuffed)", "Cofee Table"]
    },
    {
      name: "Kitchen",
      items: ["Table", "Chairs (4)"]
    },
    {
      name: "Room",
      items: ["Queen Bed Frame", "Queen Mattress", "Night Stand w/Drawers"]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
