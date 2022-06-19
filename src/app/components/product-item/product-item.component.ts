import { Component, Input, OnInit } from '@angular/core';
import { Product, QUANTITIES } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  quantities: string[] = QUANTITIES;
  quantity: string = "1";

  constructor() {
    this.product = new Product();
  }

  ngOnInit(): void {
  }

  onAddToCart() {
  }
}
