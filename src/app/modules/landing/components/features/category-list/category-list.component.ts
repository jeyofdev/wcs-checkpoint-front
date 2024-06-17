import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '@services/category.service';
import { Category } from '@shared/models/classes/category.class';
import { NewCategoryForm } from '@shared/models/classes/new-category-form.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent implements OnInit {
  categoryList$!: Observable<Category[]>;
  newCategoryFrom: NewCategoryForm = new NewCategoryForm('', '');

  constructor(
    private _categoryService: CategoryService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.categoryList$ = this._categoryService.getAllCategories$();
  }

  onSubmit(): void {
    this._categoryService
      .postNewCategory$(this.newCategoryFrom)
      .subscribe(() => {
        this.refreshCategoryList();
      });
  }

  private refreshCategoryList(): void {
    this.categoryList$ = this._categoryService.getAllCategories$();
  }
}
