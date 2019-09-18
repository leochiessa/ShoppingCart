import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  products: Array<Product> = [];

  constructor() { }

  ngOnInit() { }

  delete(productId) {
    for (let x = 0; x < this.products.length; x++) {
      if (this.products[x].id === productId) {
        this.products.splice(x, 1);
      }
    }
  }
}