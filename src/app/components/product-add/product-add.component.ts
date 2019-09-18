import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;

  @Input()
  products: Array<Product> = [];

  constructor() { }

  ngOnInit() { }

  add() {
    let p = new Product();
    p.id = this.id;
    p.name = this.name;
    p.description = this.description;
    p.price = this.price;
    p.amount = this.amount;
    this.products.push(p);
  }
}