import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { CategoryListComponent } from './components/features/category-list/category-list.component';
import { LandingRoutingModule } from './landing-routing.module';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LayoutModule,
    SharedModule,
    FormsModule,
  ],
})
export class LandingModule {}
