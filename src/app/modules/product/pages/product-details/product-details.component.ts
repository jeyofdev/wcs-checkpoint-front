import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@services/product.service';
import { Product } from '@shared/models/classes/product.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  product$!: Observable<Product>;

  constructor(
    private _routeActivated: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = Number(this._routeActivated.snapshot.params['productId']);

    this.product$ = this._productService.getProductById$(productId);
  }
}
