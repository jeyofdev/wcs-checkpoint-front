// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _httpClient: HttpClient) {}

  getAllCategories() {
    return this._httpClient.get('http://localhost:8080/api/v1/category');
  }
}
