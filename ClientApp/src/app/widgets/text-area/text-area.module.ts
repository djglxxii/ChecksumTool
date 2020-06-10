import { CommonModule }      from '@angular/common';
import { NgModule }          from '@angular/core';
import { TextAreaDirective } from './text-area.directive';


@NgModule({
  declarations: [
    TextAreaDirective
  ],
  exports: [
    TextAreaDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TextAreaModule {
}
