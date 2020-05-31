import { CommonModule }    from '@angular/common';
import { NgModule }        from '@angular/core';
import { ButtonDirective } from './button.directive';


@NgModule({
  declarations: [
    ButtonDirective
  ],
  exports: [
    ButtonDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ButtonModule {
}
