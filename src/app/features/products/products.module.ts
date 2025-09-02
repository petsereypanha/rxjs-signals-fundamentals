import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe, NgClass, NgFor, NgIf} from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgFor,
    NgIf,
    NgClass,
    CurrencyPipe
  ]
})
export class ProductsModule { }
