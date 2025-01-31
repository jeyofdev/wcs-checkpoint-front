import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectiveModule } from './modules/directive/directive.module';
import { FormModule } from './modules/form/form.module';
import { PipeModule } from './modules/pipe/pipe.module';
import { PrimengModule } from './modules/primeng/primeng.module';
import { UtilsModule } from './modules/utils/utils.module';
import { ItemCardComponent } from './components/item-card/item-card.component';

@NgModule({
  declarations: [ItemCardComponent],
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
    ItemCardComponent,
  ],
})
export class SharedModule {}
