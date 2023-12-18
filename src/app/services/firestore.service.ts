import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) {


  }

  getAll(): Observable<any> {
    console.log("llamando a firebase")
    return this.afs.collection('Notas').valueChanges();

  }
}
