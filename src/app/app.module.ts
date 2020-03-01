import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';
import { ProductSingleComponent } from './modules/product-single/product-single.component';
import { CartComponent } from './modules/cart/cart.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductSingleComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    LayoutModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
