import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
  <div class='row'>
    <app-cart-list></app-cart-list>
  </div>
  <div class='row'>
    <div class='offset-md-6 col-md-6'>
      <app-cart-total></app-cart-total>
    </div>
  </div>
  `
})
export class CartShellComponent {

}
