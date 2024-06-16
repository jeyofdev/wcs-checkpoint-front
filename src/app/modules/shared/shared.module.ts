import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './modules/primeng/primeng.module';
import { DirectiveModule } from './modules/directive/directive.module';
import { PipeModule } from './modules/pipe/pipe.module';
import { UtilsModule } from './modules/utils/utils.module';
import { FormModule } from './modules/form/form.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengModule,
    DirectiveModule,
    PipeModule,
    UtilsModule,
    FormModule,
  ],
  exports: [
    PrimengModule,
    DirectiveModule,
    PipeModule,
    UtilsModule,
    FormModule,
  ],
})
export class SharedModule {}
