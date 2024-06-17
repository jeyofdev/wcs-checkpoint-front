import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [CommonModule, ProductRoutingModule, SharedModule, LayoutModule],
})
export class ProductModule {}
