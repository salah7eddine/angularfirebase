import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productCollection: AngularFirestoreCollection

  constructor(private afs: AngularFirestore) {
    this.productCollection = afs.collection('products');
  }

  getAll() {
    return this.productCollection.valueChanges();
  }

}
