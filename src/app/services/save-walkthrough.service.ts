import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  DocumentReference
} from "@angular/fire/firestore";
import { FullWalkthrough } from "../models/fullWalkthrough.model";

@Injectable({
  providedIn: "root"
})
export class SaveWalkthroughService {
  private savedWalkthrough = "/SavedWalkthrough";

  constructor(public afs: AngularFirestore) {}

  public saveWalkthrough(walkthrough: FullWalkthrough) {
    var walk = FullWalkthrough.getFirebase(walkthrough);
    console.log(walk);

    this.afs.collection(this.savedWalkthrough).add(walk);
  }

  public getSavedWalkthrough() {
    return this.afs.collection(this.savedWalkthrough).valueChanges();
  }

  public getSavedWalkthroughById(id: string) {
    return this.afs.doc(this.savedWalkthrough + "/" + id).valueChanges();
  }
}
