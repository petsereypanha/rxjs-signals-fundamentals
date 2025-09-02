import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Just enough here for the template to compile
  pageTitle = 'Acme Product Management';

  cartCount = 0;
}
