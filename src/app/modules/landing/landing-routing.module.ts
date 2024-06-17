import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from '../product/pages/product-list/product-list.component';
import { ProductDetailsComponent } from '../product/pages/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'category/:categoryId',
    component: CategoryDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
