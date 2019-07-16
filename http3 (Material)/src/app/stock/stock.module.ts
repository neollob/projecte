import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { ProductOrderComponent } from './product-order/product-order.component';
import { MaterialModule } from '../shared/material/material/material.module';
import { FormsModule } from '@angular/forms';
import { ProductsPipePipe } from '../shared/pipes/products-pipe.pipe';
import { StockOrderComponent } from './stock-order/stock-order.component';

@NgModule({
  declarations: [StockOrderComponent, ProductOrderComponent, ProductsPipePipe],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    MaterialModule
  ],
  exports: [StockOrderComponent, ProductOrderComponent]
})
export class StockModule { }
