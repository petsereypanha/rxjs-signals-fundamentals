import { NgModule } from '@angular/core';
import {CartTotalModule} from './cart-total/cart-total.module';
import {CartListModule} from './cart-list/cart-list.module';
import {CartItemModule} from './cart-item/cart-item.module';
import {CartShellModule} from './cart-shell/cart-shell.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CartTotalModule,
    CartListModule,
    CartItemModule,
    CartShellModule
  ]
})
export class CartModule { }
