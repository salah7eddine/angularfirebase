import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productCollection: AngularFirestoreCollection

  constructor(private afs: AngularFirestore) {
    this.productCollection = afs.collection('products');
  }

  // getAll() {
  //   return this.productCollection.valueChanges();
  // }
  getAll() {
    return this.productCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }




  create(product) {
    return this.productCollection.add(product)
  }


  getOne(id) {
    return this.productCollection.doc(id).valueChanges();
  }

  update(id, product) {
    return this.productCollection.doc(id).update(product);
  }

  delete(id) {
    return this.productCollection.doc(id).delete();
  }

  activeProduct(product) {
    return this.productCollection.doc(product.id).update({
      active: !product.active
    });
  }
}
