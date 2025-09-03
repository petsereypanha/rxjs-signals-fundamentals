import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  filter,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
  tap,
  throwError
} from 'rxjs';
import {Product} from '../product';
import {ProductData} from '../product-data';
import {HttpErrorService} from '../../../utilities/http-error.service';
import {ReviewService} from '../../reviews/review.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);
  private reviewService = inject(ReviewService);

  private productSelectedSubject = new BehaviorSubject<number | undefined>(undefined);
  readonly productSelectedAction$ = this.productSelectedSubject.asObservable();

  readonly products$ = this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(p => console.info(JSON.stringify(p))),
      shareReplay(1),
      catchError(err => this.handleError(err))
    );

  // readonly product$ = this.productSelectedAction$
  //   .pipe(
  //     filter(Boolean),
  //     switchMap(selectedProductId =>{
  //       const url = `${this.productsUrl}/${selectedProductId}`;
  //       return this.http.get<Product>(url)
  //         .pipe(
  //           switchMap(product => this.getProductsWithReviews(product)),
  //           catchError(err => this.handleError(err))
  //         );
  //     })
  //   );

  product$ = combineLatest([
    this.productSelectedAction$,
    this.products$
  ]).pipe(
    map(([selectedProductId, products]) =>
      products.find(product => product.id === selectedProductId)
    ),
    filter(product => Boolean(product)),
    switchMap(product => this.getProductsWithReviews(product as Product)),
    catchError(err => this.handleError(err))
  )

  selectedProductChanged(selectedProductId: number): void {
    this.productSelectedSubject.next(selectedProductId);
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

  private handleError(err:HttpErrorResponse): Observable<never> {
    const formattedError = this.errorService.formatError(err);
    return throwError(() => formattedError);
  }
}
