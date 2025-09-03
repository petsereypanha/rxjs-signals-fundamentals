import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, Observable, of, shareReplay, switchMap, tap, throwError} from 'rxjs';
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

  readonly product$ = this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(p => console.info(JSON.stringify(p))),
      shareReplay(1),
      catchError(err => this.handleError(err))
    );


  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data => console.info('In http.get by id pipeline')),
        switchMap(product => this.getProductsWithReviews(product)),
        catchError(err => this.handleError(err))
      );
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
