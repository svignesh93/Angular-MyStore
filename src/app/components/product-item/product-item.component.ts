import { Component, Input, OnInit } from '@angular/core';
import { Product, QUANTITIES } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  quantities: string[] = QUANTITIES;

  constructor(private productService: ProductService) {
    this.product = new Product();
  }

  ngOnInit(): void {
    this.product.quantity = "1"
  }

  onAddToCart() {
    this.productService.addProductToCart(Object.assign({}, this.product))
    this.product.quantity = "1";
    alert("Added to cart")
  }
}
