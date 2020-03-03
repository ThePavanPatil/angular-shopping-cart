import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  products = [
    { id: '1', disc: '30', price:'120', list_price: '80', image: 'product-1.jpg', name: 'Bell Pepper'},
    { id: '2', disc: '0', price:'120', list_price: '120', image: 'product-2.jpg', name: 'Strawberry'},
    { id: '3', disc: '0', price:'120', list_price: '120', image: 'product-3.jpg', name: 'Green Beans'},
    { id: '4', disc: '0', price:'80', list_price: '80', image: 'product-4.jpg', name: 'Purple Cabbage'},
    { id: '5', disc: '30', price:'120', list_price: '80', image: 'product-5.jpg', name: 'Tomatoe'},
    { id: '6', disc: '0', price:'150', list_price: '150', image: 'product-6.jpg', name: 'Brocolli'},
    { id: '7', disc: '40', price:'100', list_price: '60', image: 'product-7.jpg', name: 'Carrots'},
    { id: '8', disc: '0', price:'90', list_price: '90', image: 'product-8.jpg', name: 'Fruit Juice'},
    { id: '9', disc: '20', price:'200', list_price: '160', image: 'product-9.jpg', name: 'Onion'},
    { id: '10', disc: '0', price:'250', list_price: '250', image: 'product-10.jpg', name: 'Apple'},
    { id: '11', disc: '0', price:'60', list_price: '60', image: 'product-11.jpg', name: 'Garlic'},
    { id: '12', disc: '0', price:'130', list_price: '130', image: 'product-12.jpg', name: 'Chilli'},
  ];
}
