import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material/material.module';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';

@NgModule({
  declarations: [CustomerDetailComponent, CustomersListComponent, CustomerAddComponent, CustomerEditComponent, AddOrderComponent],
  imports: [
    CommonModule, CustomersRoutingModule, FormsModule, MaterialModule
  ],
  exports: [CustomerDetailComponent, CustomersListComponent, CustomerAddComponent, CustomerEditComponent, AddOrderComponent]
})
export class CustomersModule { }
