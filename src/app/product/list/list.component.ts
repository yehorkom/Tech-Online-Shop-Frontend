import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: "list.component.html",
  styleUrl: "list.component.css"
})
export class ListComponent implements OnInit {

  public products!: Observable<Product[]>;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}

