import {Component, OnInit} from '@angular/core';
import {Input} from "postcss";
import {Product} from "../../model/product.model";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './product.item.component.html',
  styleUrl: './product.item.component.scss'
})

export class ProductItemComponent implements OnInit {
  product: Product | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (history.state.product) {
      this.product = history.state.product as Product;
      console.log(this.product);
    }

  }
}
