// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '@services/category.service';
import { Category } from '@shared/models/classes/category.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss',
})
export class CategoryDetailsComponent implements OnInit {
  category$!: Observable<Category>;

  constructor(
    private _routeActivated: ActivatedRoute,
    private _categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    const categoryId = Number(
      this._routeActivated.snapshot.params['categoryId']
    );

    this.category$ = this._categoryService.getCategoryById$(categoryId);
  }
}
