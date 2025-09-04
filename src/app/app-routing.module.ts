import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {PageNotFoundComponent} from './utilities/page-not-found.component';
import {ProductListComponent} from './features/products/components/product-list/product-list.component';
import {CartShellComponent} from './features/cart/cart-shell/cart-shell.component';

const routes: Routes = [
  { path: 'welcome', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartShellComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
