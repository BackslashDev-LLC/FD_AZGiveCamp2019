import { FullRoom, MoveListFullRoom } from "./fullRoom.model";

export class MoveListFullWalkthrough {
  key: string;
  dateTime: any;
  smallItemRooms: MoveListFullRoom[];
  largeItemRooms: MoveListFullRoom[];

  public static fromObjectMoveList(fullWalkthrough: FullWalkthrough): MoveListFullWalkthrough{
    var walk = {
      key: fullWalkthrough.key,
      dateTime: fullWalkthrough.dateTime,
      smallItemRooms: fullWalkthrough.rooms.map(room => MoveListFullRoom.fromObject(room, false)),
      largeItemRooms: fullWalkthrough.rooms.map(room => MoveListFullRoom.fromObject(room, true))
    };

    return walk;
  }
}

export class FullWalkthrough {
  key: string;
  dateTime: any;
  rooms: FullRoom[];

  static fromFirebase(obj: any): FullWalkthrough {
    const w = new FullWalkthrough();
    if (!obj) return w;
    w.key = obj.key;
    w.rooms = obj.rooms.map(room => FullRoom.fromObject(room));

    const s = obj.dateTime.seconds;
    const d = new Date(0);

    d.setUTCSeconds(s);

    w.dateTime = d;

    return w;
  }


  public static fromOjbect(fullWalkthrough: FullWalkthrough) {
    var walk = {
      key: fullWalkthrough.key,
      dateTime: fullWalkthrough.dateTime,
      rooms: fullWalkthrough.rooms.map(room => FullRoom.fromObject(room))
    };

    return walk;
  }

  public static getFirebase(fullWalk: FullWalkthrough) {
    var walk = {
      key: fullWalk.key,
      dateTime: fullWalk.dateTime,
      rooms: FullRoom.getFirebase(fullWalk.rooms)
    };

    return walk;
  }
}
