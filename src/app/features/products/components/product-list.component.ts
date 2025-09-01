import {Component, OnDestroy, OnInit} from '@angular/core';
import {from, fromEvent, of, Subscription} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: false,
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, OnDestroy{

    sub!: Subscription;
    subArray!: Subscription;
    subFrom!: Subscription;
    subString!: Subscription;
    subEvent!: Subscription;
    subKey!: Subscription;

  ngOnInit(): void {
    // this.sub = of(1, 2, 3).subscribe(item => console.log(`Number: ${item}`));
    // this.subArray = of([1, 2, 3]).subscribe(item => console.log(`Array: ${item}`));
    // this.subFrom   = from([1, 2, 3]).subscribe({
    //   next: item => console.log(`From: ${item}`),
    //   error: err => console.log('From error: ', err),
    //   complete: () => console.log('From completed')
    // });
    // this.subString = of('Hello2', 'Hello1').subscribe({
    //   next: item => console.log(`String: ${item}`),
    //   error: err => console.log('String error: ', err),
    //   complete: () => console.log('String completed')
    // });
    this.subEvent = fromEvent(document, 'click').subscribe({
      next: ev => console.log(`Event: ${ev.target}`),
      error: err => console.log('Event error: ', err),
      complete: () => console.log('Event completed')
    });
    const key: string[] = [];
    this.subKey = fromEvent(document, 'keydown').subscribe(
      ev => {
        key.push((ev as KeyboardEvent).key);
        console.log(`Key: ${key}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subArray.unsubscribe();
    this.subFrom.unsubscribe();
    this.subString.unsubscribe();
    this.subEvent.unsubscribe();
  }
}
