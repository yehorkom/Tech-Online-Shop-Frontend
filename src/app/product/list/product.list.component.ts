import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: "product.list.component.html",
  styleUrl: "product.list.component.scss"
})
export class ProductListComponent implements OnInit {

  products: Product[] | null = null;
  selectedProductIndex: number | null = null;

  constructor(private productService: ProductService) {
    this.productService.productCreated.subscribe(() => {
      this.loadProducts();
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Произошла ошибка при получении списка товаров', error);
      }
    });
  }
  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        console.log('Product deleted successfully');
        this.loadProducts();
      },
      error => console.error(error)
    );
  }
}
