import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe, NgFor, NgIf} from '@angular/common';
import {CartListComponent} from './cart-list.component';
import {FormsModule} from '@angular/forms';
import {CartItemModule} from '../cart-item/cart-item.module';



@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    CartItemModule,
    CurrencyPipe,
    FormsModule,
    NgFor,
    NgIf,
  ],
  exports: [
    CartListComponent
  ]
})
export class CartListModule { }
