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
}

export class FullWalkthrough {
  dateTime: any;
  rooms: FullRoom[] ;
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
