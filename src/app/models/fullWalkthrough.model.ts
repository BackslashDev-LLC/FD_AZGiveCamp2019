import { FullRoom } from "./fullRoom.model";

export class FullWalkthrough {
  key: string;
  dateTime: any;
  rooms: FullRoom[];

  fromFirebase(obj: any): FullWalkthrough {
    const w = new FullWalkthrough();

    w.key = obj.key;
    w.rooms = obj.rooms;

    const s = obj.dateTime.seconds;
    const d = new Date(0);

    d.setUTCSeconds(s);

    w.dateTime = d;

    return w;
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
