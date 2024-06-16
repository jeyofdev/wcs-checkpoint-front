import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DirectiveModule } from "./modules/directive/directive.module";
import { FormModule } from "./modules/form/form.module";
import { PipeModule } from "./modules/pipe/pipe.module";
import { PrimengModule } from "./modules/primeng/primeng.module";
import { UtilsModule } from "./modules/utils/utils.module";

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
