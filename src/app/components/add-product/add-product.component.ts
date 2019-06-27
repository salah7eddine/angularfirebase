import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  }

  createProduct(f) {

    if (f.valid) {
      console.log(f.value);
      f.value.published = new Date();
      // f.value = { ...f.value };
      this.productService.create(f.value).then(res => {
        this.router.navigate(['/products'])
      }).catch(err => console.log(err));
    }

  }
}