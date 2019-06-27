import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id: string;

  myProduct: Product = {
    title: '',
    description: '',
    price: 0,
    stock: 0,
    active: false,
    published: new Date()
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.editProduct(this.id);
  }

  editProduct(id) {
    this.productService.getOne(id).subscribe((res: Product) => {
      this.myProduct = res;
    });
  }

  upodateProduct(form) {
    if (form.valid) {
      this.productService.update(this.id, this.myProduct).then(res => {
        this.router.navigate(['/products']);
      }).catch(err => console.error(err));
    }
  }

}
