import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent }/*,
  { path: 'customer_detail/:id', component: CustomerDetailComponent },
  { path: 'edit-customer/:id', component: CustomerEditComponent },
  { path: 'add-customer', component: CustomerAddComponent }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
