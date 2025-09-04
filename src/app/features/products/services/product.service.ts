import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  filter,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
  tap,
  throwError
} from 'rxjs';
import {Product, Result} from '../product';
import {ProductData} from '../product-data';
import {HttpErrorService} from '../../../utilities/http-error.service';
import {ReviewService} from '../../reviews/review.service';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);
  private reviewService = inject(ReviewService);


  selectedProductId = signal<number | undefined>(undefined);

  private productsResult$ = this.http.get<Product[]>(this.productsUrl)
    .pipe(
      map(p => ({ data: p} as Result<Product[]>)),
      tap(p => console.info(JSON.stringify(p))),
      shareReplay(1),
      catchError(err => of({
        data: [],
        error: this.errorService.formatError(err)
      } as Result<Product[]>))
    );
  private productsResult = toSignal(this.productsResult$, {initialValue: ({data: []} as unknown as Result<Product[]>)});
  products = computed(() => this.productsResult().data);
  productsError = computed(() => this.productsResult().error);

  private foundProduct = computed(() => {
    // Dependent signals
    const p = this.products();
    const id = this.selectedProductId();
    if (p && id) {
      return p.find(product => product.id === id);
    }
    return undefined;
  })

  private productResult$ = toObservable(this.foundProduct)
    .pipe(
      filter(Boolean),
      switchMap(product => this.getProductsWithReviews(product)),
      map(p => ({ data: p } as Result<Product>)),
      catchError(err => of({
        data: undefined,
        error: this.errorService.formatError(err)
      } as Result<Product>))
    );
    private productResult = toSignal(this.productResult$);
    product = computed(() => this.productResult()?.data);
    productError = computed(() => this.productResult()?.error);
  // product$ = combineLatest([
  //   this.productSelectedAction$,
  //   this.products$
  // ]).pipe(
  //   map(([selectedProductId, products]) =>
  //     products.find(product => product.id === selectedProductId)
  //   ),
  //   filter(product => Boolean(product)),
  //   switchMap(product => this.getProductsWithReviews(product as Product)),
  //   catchError(err => this.handleError(err))
  // )

  selectedProductChanged(selectedProductId: number): void {
    this.selectedProductId.set(selectedProductId);
  }

  private getProductsWithReviews(product: Product):  Observable<Product> {
      if (product.hasReviews) {
        return this.http.get<ProductData[]>(this.reviewService.getReviewUrl(product.id))
          .pipe(
            map(reviews => ({...product, reviews} as Product)),
          );
      } else {
        return of(product);
      }
  }

}
