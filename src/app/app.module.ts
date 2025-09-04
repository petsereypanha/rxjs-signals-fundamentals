import {importProvidersFrom, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsModule} from './features/products/products.module';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppData} from './app-data';
import { provideHttpClient} from '@angular/common/http';
import {CartShellModule} from './features/cart/cart-shell/cart-shell.module';
import {CartTotalModule} from './features/cart/cart-total/cart-total.module';
import {CartListModule} from './features/cart/cart-list/cart-list.module';
import {CartItemModule} from './features/cart/cart-item/cart-item.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    FormsModule,
    CartShellModule,
    CartTotalModule,
    CartListModule,
    CartItemModule
  ],
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      FormsModule,
      InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
