import { Component } from '@angular/core';
import { ProductService } from '@services/product.service';
import { Product } from '@shared/models/classes/product.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  productList$!: Observable<Product[]>;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.productList$ = this._productService.getAllProducts$();
  }
}
