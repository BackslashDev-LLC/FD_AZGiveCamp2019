import { Item } from "./item.model";
import * as _ from "lodash";

export class MoveListFullRoom {
  constructor(name: string, type:string, isFurnitureRoom: boolean){
    this.name = name;
    this.type = type;
    this.isFurnitureRoom = isFurnitureRoom;
  }
  name: string;
  items: Item[];
  type: string;
  isFurnitureRoom: boolean;

  public static fromObject(obj: any, largeItem: boolean): MoveListFullRoom {
    const fr = new MoveListFullRoom(obj.name, obj.type, largeItem);
    console.log(obj);

    const items = _.filter(obj.items, function(o){return (o.isFurniture && largeItem) || (!o.isFurniture && !largeItem)});
    console.log(items);

    if (!items || items.length <= 0) return;

    fr.items = _.map(items, (i: any) => {
      return new Item(
        i.name,
        _.map(i.attributes, (a: any) => {
          return a.name || a;
        }),
        i.isRankable,
        i.comments,
        i.rating,
        i.isFurniture
      );
    });


    return fr;
  }
}

export class FullRoom {
  public constructor(name: string, type: string) {
    this.type = type;
    this.name = name;
    this.items = [];
  }
  name: string;
  items: Item[];
  type: string;

  public static fromObject(obj: any): FullRoom {
    const fr = new FullRoom(obj.name, obj.type);

    fr.items = _.map(obj.items, (i: any) => {
      return new Item(
        i.name,
        _.map(i.attributes, (a: any) => {
          return a.name || a;
        }),
        i.isRankable,
        i.comments,
        i.rating,
        i.isFurniture
      );
    });

    return fr;
  }

  public static getFirebase(fullRooms: FullRoom[]) {
    var rooms = [];
    for (var i = 0; i < fullRooms.length; i++) {
      let tempRoom = fullRooms[i];
      var mapRoom = {
        name: tempRoom.name,
        type: tempRoom.type,
        items: Item.getFireBase(tempRoom.items)
      };
      rooms.push(mapRoom);
    }

    return rooms;
  }
}
