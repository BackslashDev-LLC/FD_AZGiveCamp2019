import { FullRoom } from "./fullRoom.model";


export class FullWalkthrough {
  key: string;
  dateTime: any;
  rooms: FullRoom[];

  static fromFirebase(obj: any): FullWalkthrough {
    const w = new FullWalkthrough();

    w.key = obj.key;
    w.rooms = obj.rooms.map(room => FullRoom.fromObject(room));

    const s = obj.dateTime.seconds;
    const d = new Date(0);

    d.setUTCSeconds(s);

    w.dateTime = d;

    return w;
  }

  public static getFirebase(fullWalkthrough: FullWalkthrough) {
    var walk = {
      key: fullWalkthrough.key,
      dateTime: fullWalkthrough.dateTime,
      rooms: fullWalkthrough.rooms.map(room => FullRoom.fromObject(room))
    };

    return walk;
  }
}
