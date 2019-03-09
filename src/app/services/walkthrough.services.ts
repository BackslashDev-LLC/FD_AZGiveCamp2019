import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";
import { FullWalkthrough } from '../models/fullWalkthrough.model';
import { Item } from '../models/item.model';
import { FullRoom } from '../models/fullRoom.model';

export interface Walkthrough {
  dateTime: any,
  rooms : DocumentReference[]
}

export interface Room {
  name: string,
  items: DocumentReference[]
}















@Injectable()
export class WalkthroughService {
    constructor(public afs: AngularFirestore) {
    }
public getWalkthroughSource(){
    var wtSource: FullWalkthrough = new FullWalkthrough();
     this.getWalkthroughById('1').subscribe(wt=>{
        Promise.all(wt.rooms.map(r=> {return new Promise((resolve,reject)=>{
            
            this.getRoomById(r.id).subscribe(rm=>{
                var wtRoom: FullRoom = new FullRoom(rm.name);
               Promise.all(rm.items.map(itm=>{
                    return new Promise((itmResolve,itmReject)=>{
                        this.getItemById(itm.id).subscribe((itmVal: Item) =>
                            {
                                itmResolve(itmVal);
                            }                        )
                    }); 
                })).then(resItems=>resItems.forEach(resItem =>
                    {
                        //wtRoom.items.push(new Item(resItem.name, resItem.attributes, resItem.isRateable, resItem.comments))
                    }
                    )

                );
                resolve(wtRoom);
            })
        });}  )).then((allRm: FullRoom[]) =>{
            wtSource.rooms = allRm;
        });
    }
        )
}
    // public searchWalkthrough(name: string){
    //     return this.afs.collection("/Walkthrough", ref => {ref.where(id >= name).})
    // }array
    public getWalkthroughById(id: string) {
      return this.afs.doc<Walkthrough>( "/Walkthrough/" + id)
        .valueChanges();
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
