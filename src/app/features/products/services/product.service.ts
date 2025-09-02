import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, of, tap, throwError} from 'rxjs';
import {Product} from '../product';
import {ProductData} from '../product-data';
import {HttpErrorService} from '../../../utilities/http-error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(() => console.info('In http.get pipeline')),
        catchError(err => this.handleError(err))
      );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data => console.info('In http.get by id pipeline')),
        catchError(err => this.handleError(err))
      );
  }

  private handleError(err:HttpErrorResponse): Observable<never> {
    const formattedError = this.errorService.formatError(err);
    return throwError(() => formattedError);
  }
}
