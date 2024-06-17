// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@shared/models/classes/category.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _httpClient: HttpClient) {}

  getAllCategories$(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(
      'http://localhost:8080/api/v1/category'
    );
  }

  getCategoryById$(categoryId: number): Observable<Category> {
    return this._httpClient.get<Category>(
      `http://localhost:8080/api/v1/category/${categoryId}`
    );
  }
}
