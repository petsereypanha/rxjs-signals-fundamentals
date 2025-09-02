import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CartItem } from '../cart';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-list',
  standalone: false,
  templateUrl: 'cart-list.component.html'
})
export class CartListComponent {
  // Just enough here for the template to compile
  pageTitle = 'Cart';

  cartItems: CartItem[] = [];
}
