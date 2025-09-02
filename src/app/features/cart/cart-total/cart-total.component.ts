import { Component } from '@angular/core';
import { NgIf, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  standalone: false,
})
export class CartTotalComponent {
  // Just enough here for the template to compile
  cartItems = [];

  subTotal = 100;
  deliveryFee = 20;
  tax = 10;
  totalPrice = this.subTotal + this.deliveryFee + this.tax;

}
