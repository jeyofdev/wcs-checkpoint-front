import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@services/category.service';
import { Category } from '@shared/models/classes/category.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent implements OnInit {
  categoryList$!: Observable<Category[]>;

  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryList$ = this._categoryService.getAllCategories$();
  }
}
