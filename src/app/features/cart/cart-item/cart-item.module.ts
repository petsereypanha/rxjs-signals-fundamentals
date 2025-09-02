import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe, NgFor, NgIf} from '@angular/common';
import {CartItemComponent} from './cart-item.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CurrencyPipe,
    FormsModule,
    NgFor,
    NgIf,
  ],exports: [
    CartItemComponent
  ]
})
export class CartItemModule { }
