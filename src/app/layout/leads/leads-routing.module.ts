import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadsComponent } from './leads.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers'
  },
  {
      path: 'customers',
      component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
