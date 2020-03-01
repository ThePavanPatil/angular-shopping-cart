import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';
import { ProductSingleComponent } from './modules/product-single/product-single.component';
import { CartComponent } from './modules/cart/cart.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent},  
  { path: 'products', component: ProductComponent}, 
  { path: 'products/product-single', component: ProductSingleComponent}, 
  { path: 'cart', component: CartComponent}, 
  { path: 'checkout', component: CheckoutComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
