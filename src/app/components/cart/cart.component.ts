import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = [];
  totalCost: number = 0

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartProducts = this.productService.getProductsInCart()

    if (this.cartProducts.length <= 0) {
      alert("Your cart is empty!")
    } else {
      this.computeTotalCost()
    }
  }

  computeTotalCost() {
    this.totalCost = this.productService.getTotalCostOfProductsInCart()
  }

  onQtyChange(product: Product) {
    if (product.quantity == "0") {
      this.cartProducts = this.productService.removeProductFromCart(product)
    } else {
      this.computeTotalCost()
    }
  }
}
