// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { CategoryService } from '@services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent implements OnInit {
  categories$: any;

  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories$ = this._categoryService.getAllCategories();
  }
}
