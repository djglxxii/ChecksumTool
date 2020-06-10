import { NgModule }      from '@angular/core';
import {
  RouterModule,
  Routes
}                        from '@angular/router';
import { AstmComponent } from './astm.component';


const routes: Routes = [
  {path: 'astm', component: AstmComponent},
  {path: '', redirectTo: 'astm', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstmRoutingModule {
}
