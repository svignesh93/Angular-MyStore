import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = [];
  totalCost: string = "0"

  fullName: string = ""
  address: string = ""
  creditCardNum: string = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

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
      alert("Removed from cart!")
    } else {
      this.computeTotalCost()
    }
  }

  onSubmitForm() {
    this.router.navigate(
      ["checkout-confirmation"],
      { relativeTo: this.route,
        queryParams: {fullName: this.fullName, totalCost: this.totalCost}
      }
    );
  }
}
