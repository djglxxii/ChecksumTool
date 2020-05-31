import { CommonModule }   from '@angular/common';
import { NgModule }       from '@angular/core';
import { TableDirective } from './table.directive';


@NgModule({
  declarations: [
    TableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableDirective
  ]
})
export class TableModule {
}
