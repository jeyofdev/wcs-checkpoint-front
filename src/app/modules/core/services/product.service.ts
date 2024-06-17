import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@shared/models/classes/product.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  getAllProducts$(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(
      'http://localhost:8080/api/v1/product'
    );
  }

  getProductById$(productId: number): Observable<Product> {
    return this._httpClient.get<Product>(
      `http://localhost:8080/api/v1/product/${productId}`
    );
  }
}
