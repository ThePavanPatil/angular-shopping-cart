import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hi');
  }

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay: true,
    navText: ['', ''],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    },
    nav: false
  }

  slidesStore = [
    { id: 'slide-1', h1: 'We serve Fresh Vegestables & Fruits', h2:'We deliver organic vegetables & fruits', link: 'products', image: 'assets/images/bg_1.jpg'},
    { id: 'slide-2', h1: '100% Fresh & Organic Foods', h2:'We deliver organic vegetables & fruits', link: 'products', image: 'assets/images/bg_2.jpg'},
  ];

}
