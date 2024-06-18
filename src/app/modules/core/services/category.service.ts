import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@shared/models/classes/category.class';
import { NewCategoryForm } from '@shared/models/classes/new-category-form.class';
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

  postNewCategory$(newCategory: NewCategoryForm): Observable<Category> {
    return this._httpClient.post<Category>(
      `http://localhost:8080/api/v1/category`,
      newCategory
    );
  }

  deleteCategoryById$(categoryId: number): Observable<void> {
    return this._httpClient.delete<void>(
      `http://localhost:8080/api/v1/category/${categoryId}`
    );
  }
}
