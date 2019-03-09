import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import {FullRoom, FullWalkthrough} from './walkthrough.services';

@Injectable({
  providedIn: 'root'
})
export class SaveWalkthroughService {
  private  savedWalkthrough = "/SavedWalkthrough";

  constructor(public afs: AngularFirestore) { }

  public saveWalkthrough(walkthrough: FullWalkthrough){
    var walk = FullWalkthrough.getFirebase(walkthrough);
    console.log(walk);

    this.afs.collection(this.savedWalkthrough).add(
      walk
    );
  }

  public getSavedWalkthrough(key: string){
    this.afs.collection(this.savedWalkthrough, ref => {
      ref.where("key", '==',  key )
    });
  }
}
