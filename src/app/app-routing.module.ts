import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { RouteEnum } from '@shared/models/enums/RouteEnum.enum';

const routes: Routes = [
  {
    path: RouteEnum.HOME,
    loadChildren: () =>
      import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
