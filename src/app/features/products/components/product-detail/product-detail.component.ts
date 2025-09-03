import {Component, inject, Input} from '@angular/core';
import {Product} from '../../product';
import {catchError, EMPTY, Subscription} from 'rxjs';
import {ProductService} from '../../services/product.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    standalone: false,
})
export class ProductDetailComponent {
  // Just enough here for the template to compile
  @Input() productId: number = 0;
  errorMessage = '';
  sub!: Subscription;

  private productsService = inject(ProductService);


  // Product to display
  product$ = this.productsService.product$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

  // Set the page title
  pageTitle =  'Product Detail';

  addToCart(product: Product) {
    console.log(`Adding to cart: ${product.productName}`);
  }
}
