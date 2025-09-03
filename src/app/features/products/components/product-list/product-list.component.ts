import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ProductService} from '../../services/product.service';
import {catchError, EMPTY, Subscription, tap} from 'rxjs';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    standalone: false,
})
export class ProductListComponent {
  // Just enough here for the template to compile
  pageTitle = 'Products';
  errorMessage = '';
  sub!: Subscription;

  private productsService = inject(ProductService);

  readonly products$ = this.productsService.products$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    )


  // Selected product id to highlight the entry
  readonly selectedProductId$ = this.productsService.productSelectedAction$;

  onSelected(productId: number): void {
      this.productsService.selectedProductChanged(productId);
  }
}
//
// export class ProductListComponent implements OnInit, OnDestroy{
//
//   sub!: Subscription;
//   subArray!: Subscription;
//   subFrom!: Subscription;
//   subString!: Subscription;
//   subEvent!: Subscription;
//   subKey!: Subscription;
//   subApps!: Subscription;
//   subFilter!: Subscription;
//   subTimer!: Subscription;
//
//   ngOnInit(): void {
//     this.sub = of(1, 2, 3).subscribe(item => console.log(`Number: ${item}`));
//     this.subArray = of([1, 2, 3]).subscribe(item => console.log(`Array: ${item}`));
//     this.subFrom   = from([1, 2, 3]).subscribe({
//       next: item => console.log(`From: ${item}`),
//       error: err => console.log('From error: ', err),
//       complete: () => console.log('From completed')
//     });
//     this.subString = of('Hello2', 'Hello1').subscribe({
//       next: item => console.log(`String: ${item}`),
//       error: err => console.log('String error: ', err),
//       complete: () => console.log('String completed')
//     });
//     this.subEvent = fromEvent(document, 'click').subscribe({
//       next: ev => console.log(`Event: ${ev.target}`),
//       error: err => console.log('Event error: ', err),
//       complete: () => console.log('Event completed')
//     });
//     const key: string[] = [];
//     this.subKey = fromEvent(document, 'keydown').subscribe(
//       ev => {
//         key.push((ev as KeyboardEvent).key);
//         console.log(`Key: ${key}`);
//       }
//     );
//
//     const apps$ = from([
//       {name: 'App1', version: '1.0.0'},
//       {name: 'App2', version: '1.0.1'},
//       {name: 'App3', version: '1.0.2'},
//     ])
//     this.subApps = apps$
//       .pipe(
//         map(app => ({...app, version: app.version + '.0'})),
//         tap( app => console.log(`App: ${app.name}, Version: ${app.version}`))
//       )
//       .subscribe();
//     this.subFilter = of(2, 3 ,  4, 5, 6).pipe(
//       filter(app => app % 2 === 0),
//       tap(x => console.log(`Filter: ${x}`))
//     ).subscribe();
//
//     this.subTimer = timer(0, 1000)
//       .pipe(
//         take(5)
//       )
//       .subscribe({
//         next: val => console.log(`Timer: ${val}`),
//         error: err => console.log('Timer error: ', err),
//         complete: () => console.log('Timer completed')
//       })
//   }
//
//   ngOnDestroy(): void {
//     this.sub.unsubscribe();
//     this.subArray.unsubscribe();
//     this.subFrom.unsubscribe();
//     this.subString.unsubscribe();
//     this.subEvent.unsubscribe();
//     this.subKey.unsubscribe();
//     this.subApps.unsubscribe();
//     this.subFilter.unsubscribe();
//     this.subTimer.unsubscribe();
//   }
// }
