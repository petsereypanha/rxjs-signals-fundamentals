import {Component, inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../product';
import {catchError, EMPTY, Subscription} from 'rxjs';
import {ProductService} from '../../services/product.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    standalone: false,
})
export class ProductDetailComponent implements OnChanges, OnDestroy {
  // Just enough here for the template to compile
  @Input() productId: number = 0;
  errorMessage = '';
  sub!: Subscription;

  private productsService = inject(ProductService);


  // Product to display
  product: Product | null = null;

  // Set the page title
  pageTitle = this.product ? `Product Detail for: ${this.product.productName}` : 'Product Detail';

  addToCart(product: Product) {
  }
  ngOnChanges(changes:SimpleChanges): void {
    const id = changes['productId'].currentValue;
    if (id) {
      this.sub = this.productsService.getProduct(id)
        .pipe(
          catchError(err => {
            this.errorMessage = err;
            return EMPTY;
          })
        )
        .subscribe({
          next: product => {
            this.product = product;
            this.pageTitle = `Product Detail for: ${this.product.productName}`;
        },
      });
    }
  }
  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }

  }
}
