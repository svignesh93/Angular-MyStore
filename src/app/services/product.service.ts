import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartProducts: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>("../assets/data.json");
  }

  getProductById(products: Product[], id: number) {
    return products.find(p => p.id == id);
  }

  getProductsInCart(): Product[] {
    return this.cartProducts;
  }

  getTotalCostOfProductsInCart() {
    let totalCost = 0
    this.cartProducts.forEach(product => {
      totalCost += product.price * Number(product.quantity)
    });
    return totalCost
  }

  addProductToCart(product: Product) {
    let existingProduct = this.cartProducts.find(p => p.id == product.id);
    if (existingProduct != undefined) {
      existingProduct.quantity = existingProduct.quantity + product.quantity;
    } else {
      this.cartProducts.push(product);
    }
  }

  removeProductFromCart(product: Product) {
    this.cartProducts = this.cartProducts.filter(p => p.id !== product.id);
    return this.cartProducts
  }
}
