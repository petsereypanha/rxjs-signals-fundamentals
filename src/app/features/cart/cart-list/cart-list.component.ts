import {Component, inject} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CartItem } from '../cart';
import { CartItemComponent } from '../cart-item/cart-item.component';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart-list',
  standalone: false,
  templateUrl: 'cart-list.component.html'
})
export class CartListComponent {
  pageTitle = 'Cart';

  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;
}
