import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/product';

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/all`)
      .pipe(map((data) => {
        console.log(data);
        return data;
      }));
  }

  // getAllProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiUrl}/all`);
  // }


  // getProductById(productId: number): Observable<Product> {
  //   return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  // }
  //
  //
  // createProduct(product: Product): Observable<Product> {
  //   return this.http.post<Product>(this.apiUrl, product);
  // }
  //
  //
  // updateProduct(productId: number, product: Product): Observable<Product> {
  //   return this.http.put<Product>(`${this.apiUrl}/${productId}`, product);
  // }
  //
  //
  // deleteProduct(productId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  // }
}
