import {EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import { Product } from '../model/product.model';
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/product';
  productCreated = new EventEmitter<Product>();
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/all`);
  }


  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }


  createProduct(product: ɵTypedOrUntyped<{
    price: FormControl<number | null>;
    description: FormControl<string | null>;
    model: FormControl<string | null>;
    availability: FormControl<boolean | null>
  }, ɵFormGroupValue<{
    price: FormControl<number | null>;
    description: FormControl<string | null>;
    model: FormControl<string | null>;
    availability: FormControl<boolean | null>
  }>, any>): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      tap((newProduct: Product) => {
        this.productCreated.emit(newProduct);
      })
    );
  }


  updateProduct(productId: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${productId}`, product);
  }


  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }
}
