import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe, NgFor, NgIf} from '@angular/common';
import {CartTotalComponent} from './cart-total.component';
import {CartModule} from '../cart.module';
import {FormsModule} from '@angular/forms';
import {CartShellModule} from '../cart-shell/cart-shell.module';
import {CartItemModule} from '../cart-item/cart-item.module';


@NgModule({
  declarations: [
    CartTotalComponent
  ],
  imports: [
    CommonModule,
    CurrencyPipe,
    FormsModule,
    NgFor,
    NgIf,
  ],
  exports: [
    CartTotalComponent
  ]
})
export class CartTotalModule { }
