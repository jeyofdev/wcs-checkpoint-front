import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  exports: [ButtonModule, MenubarModule, CardModule, InputTextModule],
})
export class PrimengModule {}
