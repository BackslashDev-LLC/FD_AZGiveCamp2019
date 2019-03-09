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

  rooms2 = [
    {
      name: "Mom Bedroom",
      items: ["Queen bed sheets", "Queen comfortor", "Table lamp"]
    },
    {
      name: "Girls (8 and 5) Bedroom",
      items: ["Cute Girlie Rug", "Has Comforters"]
    },
    {
      name: "Bathroom",
      items: ["Towel for 4", "2 Shower Curtains"]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
