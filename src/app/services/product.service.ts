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

  addToCart(product: Product) {
    let existingProduct = this.cartProducts.find(p => p.id == product.id);
    if (existingProduct != undefined) {
      existingProduct.quantity = existingProduct.quantity + product.quantity;
    } else {
      this.cartProducts.push(product);
    }
  }
}
