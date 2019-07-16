import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { NgModule } from '@angular/core';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

const routes: Routes = [
  { path: '', component: CustomersListComponent },
  { path: 'customer_detail/:id', component: CustomerDetailComponent },
  { path: 'edit-customer/:id', component: CustomerEditComponent },
  { path: 'add-customer', component: CustomerAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
