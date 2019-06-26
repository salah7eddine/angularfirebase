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

}
