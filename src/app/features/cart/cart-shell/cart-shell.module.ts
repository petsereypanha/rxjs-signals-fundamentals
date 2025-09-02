import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe, NgFor, NgIf} from '@angular/common';
import {CartShellComponent} from './cart-shell.component';
import {FormsModule} from '@angular/forms';
import {CartListComponent} from '../cart-list/cart-list.component';
import {CartTotalModule} from '../cart-total/cart-total.module';
import {CartListModule} from '../cart-list/cart-list.module';



@NgModule({
  declarations: [
    CartShellComponent
  ],
  imports: [
    CommonModule,
    CartListModule,
    CartTotalModule,
    CurrencyPipe,
    FormsModule,
    NgFor,
    NgIf,
  ],
  exports: [
    CartShellComponent
  ]
})
export class CartShellModule { }
