import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe((res: any[]) => {
      this.products = res;
      console.log(res);
    })
  }


  deleteProduct(id) {
    // console.log("----" + id);
    this.productService.delete(id).then(() => {
      alert('success');
    }).catch(err => console.log(err.message));
  }

  // changeEtatProduct(product) {
  //   this.productService.activeProduct(product).then(() => { }).catch(err => console.error(err));
  // }

  changeEtatProduct(product) {
    this.productService.update(product.id, {
      active: !product.active
    }).then(() => { }).catch(err => console.error(err));
  }

}
