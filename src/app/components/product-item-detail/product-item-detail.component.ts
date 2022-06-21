import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, QUANTITIES } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  id: number = 0;
  product: Product = new Product();
  quantities: number[] = QUANTITIES;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id") ?? 0);

    this.productService.getProducts().subscribe(res => {
      let products = res;

      let product = this.productService.getProductById(products, this.id);
      if (product != undefined) {
        this.product = product;
        this.product.quantity = 1;
      } else {
        alert("Product not found!");
      }
    });
  }

  onAddToCart() {
    this.productService.addProductToCart(Object.assign({}, this.product))
    this.product.quantity = 1;
    alert("Added to cart")
  }
}
