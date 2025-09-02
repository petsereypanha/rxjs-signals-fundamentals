import {importProvidersFrom, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsModule} from './features/products/products.module';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppData} from './app-data';
import {CartModule} from './features/cart/cart.module';
import { provideHttpClient} from '@angular/common/http';

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
    CartModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
