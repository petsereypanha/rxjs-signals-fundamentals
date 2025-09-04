import {Component, inject} from '@angular/core';
import {CartService} from './features/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  private cartService = inject(CartService);

  cartCount = this.cartService.cartCount;
}
