import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputRoutesModule } from "./input-routes.module";
import { InputComponent } from "./input.component";

@NgModule({
  imports: [CommonModule, InputRoutesModule],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class InputModule {}
