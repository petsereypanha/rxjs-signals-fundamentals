import {Component, computed, inject, Input} from '@angular/core';
import {Product} from '../../product';
import {catchError, EMPTY, Subscription} from 'rxjs';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../../cart/cart.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    standalone: false,
})
export class ProductDetailComponent {
  // Just enough here for the template to compile
  @Input() productId: number = 0;

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  // Product to display
  product = this.productService.product;
  errorMessage = this.productService.productError;

  // Set the page title
  pageTitle = computed(() =>
    this.product()
      ? `Product Detail for: ${this.product()?.productName}`
      : 'Product Detail')

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
