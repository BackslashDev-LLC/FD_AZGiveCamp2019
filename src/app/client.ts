import {FullWalkthrough} from "./models/fullWalkthrough.model";

export class Client {
    id: string;
    key: string;
    dateTime: Date;


  fromFirebase(id: string, obj: any): Client {
    const w = new Client();

    w.key = obj.key;
    w.id = id;

    const s = obj.dateTime.seconds;
    const d = new Date(0);

    d.setUTCSeconds(s);

    w.dateTime = d;

    return w;
  }
  }
