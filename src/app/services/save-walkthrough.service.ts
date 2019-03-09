import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import {FullRoom, FullWalkthrough} from './walkthrough.services';

@Injectable({
  providedIn: 'root'
})
export class SaveWalkthroughService {

  constructor(public afs: AngularFirestore) { }

  public saveWalkthrough(walkthrough: FullWalkthrough){
    var walk = FullWalkthrough.getFirebase(walkthrough);
    console.log(walk);

    this.afs.collection("/SavedWalkthrough").add(
      walk
    );
  }
}
