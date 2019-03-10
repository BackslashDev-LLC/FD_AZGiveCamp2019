import { Item } from "./item.model";
import * as _ from "lodash";

export class FullRoom {
  public constructor(name: string) {
    this.name = name;
    this.items = [];
  }
  name: string;
  items: Item[];

  public static fromObject(obj: any): FullRoom {
    const fr = new FullRoom(obj.name);

    fr.items = _.map(obj.items, (i: any) => {
      return new Item(i.name, i.attributes, i.isRankable, i.comments, i.rating);
    });

    return fr;
  }

  public static getFirebase(fullRooms: FullRoom[]) {
    var rooms = [];
    for (var i = 0; i < fullRooms.length; i++) {
      let tempRoom = fullRooms[i];
      var mapRoom = {
        name: tempRoom.name,
        items: Item.getFireBase(tempRoom.items)
      };
      rooms.push(mapRoom);
    }

    return rooms;
  }
}
