import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from './components/features/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderNavbarComponent } from './components/ui/header-navbar/header-navbar.component';

@NgModule({
  declarations: [LayoutComponent, HeaderNavbarComponent],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
