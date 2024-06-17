import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { CategoryListComponent } from './components/features/category-list/category-list.component';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HomeComponent, CategoryListComponent],
  imports: [CommonModule, LandingRoutingModule, LayoutModule, SharedModule],
})
export class LandingModule {}
