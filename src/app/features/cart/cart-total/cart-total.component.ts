import {Component, inject} from '@angular/core';
import { NgIf, CurrencyPipe } from '@angular/common';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  standalone: false,
})
export class CartTotalComponent {
  private cartService = inject(CartService);
  cartItems = this.cartService.cartItems;
  subTotal = this.cartService.subTotal;
  deliveryFee = this.cartService.deliveryFee;
  tax = this.cartService.tax;
  totalPrice = this.cartService.totalPrice;
}
