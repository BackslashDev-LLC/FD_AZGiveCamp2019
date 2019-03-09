import { Item } from './item.model';

export class FullRoom {
    public constructor(name: string){
      this.name = name;
      this.items = [];
    }
    name: string;
    items: Item[];
    
    public static getFirebase(fullRooms: FullRoom[]){
        var rooms = [];
        for(var i =0; i < fullRooms.length; i ++){
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