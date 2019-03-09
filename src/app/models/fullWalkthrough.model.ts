import { FullRoom } from './fullRoom.model';

export class FullWalkthrough {
    key: string;
    dateTime: any;
    rooms: FullRoom[] ;
    public static getFirebase(fullWalk: FullWalkthrough){
        var walk = {
          key: fullWalk.key,
          dateTime: fullWalk.dateTime,
          rooms: FullRoom.getFirebase(fullWalk.rooms)
        };
    
        return walk;
      }
  }