import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";

export interface Walkthrough {
  dateTime: any,
  rooms : DocumentReference[]
}

export interface Room {
  name: string,
  items: DocumentReference[]
}

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

export class FullWalkthrough {
  dateTime: any;
  key: string;
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

export class Item {
  public constructor(name: string, attributes:string[], isRateable:boolean, comments: string){
    this.name = name;
    this.attributes = attributes;
    this.isRateable = isRateable;
    this.comments = comments;
  }
  name: string;
  attributes: string[];
  isRateable: boolean;
  comments: string;
  rating: number;

  public static getFireBase(fullItems: Item[]){
    var items = [];
    for(var i = 0; i < fullItems.length; i++){
      var tempItem = fullItems[i];
      var item = {
        name: tempItem.name,
        attributes: tempItem.attributes,
        isRateable: tempItem.isRateable,
        rating: tempItem.rating
      }
      items.push(item);
    }

    return items;
  }
}



@Injectable()
export class WalkthroughService {
    constructor(public afs: AngularFirestore) {
    }

    public getWalkthroughById(id: string) {
      return this.afs.doc<Walkthrough>("/Walkthrough/" + id)
        .valueChanges()
    }

    public getRoomById(id: string){
      return this.afs.doc<Room>("/Room/" + id)
        .valueChanges()
    }

  public getItemById(id: string){
    return this.afs.doc<Item>("/Items/" + id)
      .valueChanges()
  }



}
