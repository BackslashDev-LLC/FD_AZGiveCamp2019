import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";

@Injectable()
export class WalkthroughService {
    constructor(public afs: AngularFirestore) {        
    }

    getWalkthroughById(id: string){
       return this.afs.collection("Walkthrough", ref => {
               let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
               return query;
        }).valueChanges();
    }
    
}