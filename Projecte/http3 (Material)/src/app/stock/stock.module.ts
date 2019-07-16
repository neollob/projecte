import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { MaterialModule } from '../shared/material/material/material.module';

@NgModule({
  declarations: [ProductListComponent, ProductOrderComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    MaterialModule
  ],
  exports: [ProductListComponent, ProductOrderComponent]
})
export class StockModule { }
