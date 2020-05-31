import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
import { ClipboardService }      from './clipboard.service';
import { EscapeControlCodePipe } from './escape-control-code.pipe';


@NgModule({
  declarations: [
    EscapeControlCodePipe
  ]
  ,
  imports: [
    CommonModule
  ],
  exports: [
    EscapeControlCodePipe
  ],
  providers: [
    ClipboardService
  ]
})
export class SharedModule {
}
