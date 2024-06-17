import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'category/:categoryId',
    component: CategoryDetailsComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'product/:productId',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
