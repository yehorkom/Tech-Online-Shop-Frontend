import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './product.add.component.html',
  styleUrl: './product.add.component.scss'
})
export class ProductAddComponent {
  productForm = new FormGroup({
    model: new FormControl('', Validators.required),
    description: new FormControl(''),
    price: new FormControl(null, [Validators.required, Validators.min(0.01)]),
    availability: new FormControl(true),
    image: new FormControl(''),
    brandId: new FormControl(null),
    typeId: new FormControl(null)
  });


  constructor(private productService: ProductService, private router: Router) {
    this.productService.productCreated.subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.createProduct(this.productForm.value).subscribe(
        (newProduct) => {
          console.log('Товар успешно добавлен', newProduct);
        },
        (error) => {
          console.error('Произошла ошибка при добавлении товара', error);
        }
      );
    }
  }
}
