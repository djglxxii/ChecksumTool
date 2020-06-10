import { CommonModule }        from '@angular/common';
import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule }        from '../shared/shared.module';
import { ButtonModule }        from '../widgets/button/button.module';
import { FocusedModule }       from '../widgets/focused/focused.module';
import { TableModule }         from '../widgets/table/table.module';
import { TextAreaModule }      from '../widgets/text-area/text-area.module';

import { AstmRoutingModule } from './astm-routing.module';
import { AstmComponent }     from './astm.component';
import { TableComponent }    from './table/table.component';


@NgModule({
  declarations: [
    AstmComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AstmRoutingModule,
    SharedModule,

    ButtonModule,
    FocusedModule,
    TableModule,
    TextAreaModule
  ]
})
export class AstmModule {
}
