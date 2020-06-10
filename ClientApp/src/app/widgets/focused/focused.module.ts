import { CommonModule }     from '@angular/common';
import { NgModule }         from '@angular/core';
import { FocusedDirective } from './focused.directive';


@NgModule({
  declarations: [
    FocusedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FocusedDirective
  ]
})
export class FocusedModule {
}
