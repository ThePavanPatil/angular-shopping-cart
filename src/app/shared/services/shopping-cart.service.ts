import { Injectable } from '@angular/core';
import * as $ from 'jquery'

  
// export class cartItem {
//   this.categoryid = categoryid;
//   this.sku = sku;
//   this.quantity = quantity * 1;
// }

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartName: 'Town';
  categoryid: any;
  productid: any;
  quantity: number;
  items = [];
  clearCart: boolean;
  deliveryCharge = 5;

  constructor() { 
    this.shoppingCart('Town');
   }

  shoppingCart(cartName) {
    /* jshint validthis: true */
    this.cartName = cartName;
    this.clearCart = false;
    this.items = [];
  
    // load items from local storage when initializing
    this.loadItems();
  
    // save items to local storage when unloading
    var self = this;
    //$(window).unload(function () {
    $(window).on("unload", function() {
        if (self.clearCart) {
            self.clearItems();
        }
        self.saveItems();
        self.clearCart = false;
    });
  
    // re-load items when the local storage changes
    $(window).on('storage', function (e) {
      console.log('local storage changes');
        if (e.originalEvent['key'] === self.cartName + '_cart') {
            self.loadItems();
        }
    });
  }

  cartItem(item, quantity) {
    return {
      categoryid : item.categoryid,
      productid : item.productid,
      name : item.name,
      quantity : quantity * 1,
      image : item.image,
      price : item.price,
      list_price : item.list_price
    }
  }

  loadItems  () {
    // empty list
    this.items.splice(0, this.items.length);
  
    // load from local storage
    var items = localStorage !== null ? localStorage[this.cartName + "_cart"] : null;
    if (items !== null && JSON !== null) {
        try {
            //var items = JSON.parse(items);
            items = JSON.parse(items);
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.categoryid !== null && item.productid !== null && item.quantity !== null) {
                  /*jshint newcap:false*/
                    item = this.cartItem(item, item.quantity);
                    this.items.push(item);
                }
            }
        }
        catch (err) {
            // ignore errors while loading...
        }
    }
  
    // notify listeners of change
    // if (this.itemsChanged) {
    //     this.itemsChanged();
    // }
  };

  saveItems () {
    if (localStorage !== null && JSON !== null) {
        localStorage[this.cartName + "_cart"] = JSON.stringify(this.items);
    }
  };

  getCart() {
    var products = [];
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        //var ctr = i + 1;
        products.push({
            categoryid: item.categoryid,
            productid: item.productid,
            name : item.name,
            quantity: item.quantity,
            image : item.image,
            price : item.price,
            list_price : item.list_price
        });
    }
    return products;
  }

  getSku (){
    var data = {
        products : []
    };
  
    // item data
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        //var ctr = i + 1;
        data.products.push({
            categoryid: item.categoryid,
            productid: item.productid,
            quantity: item.quantity
        });
    }
    return data;
  };

  getItemBysku  (categoryid, productid) {
    var items = this.getSku().products;
    var build = '';
    items.forEach(function (item) {
      if  (item.productid === productid && item.categoryid === categoryid) {
          build = item.quantity;
      }
    });
    return build;
  };
  
  addItem  (itemData, quantity) {
  
    quantity = this.toNumber(quantity);
    if (quantity !== 0) {
  
        // update quantity for existing item
        var found = false;
        for (var i = 0; i < this.items.length && !found; i++) {
            var item = this.items[i];
            if (item.productid === itemData.productid && item.categoryid === itemData.categoryid) {
                found = true;
                item.quantity = this.toNumber(item.quantity + quantity);
                if (item.quantity <= 0) {
                    //this.items.splice(i, 1);
                    item.quantity = this.toNumber(0);
                }
            }
        }
  
        // new item, add now
        if (!found) {
          /*jshint newcap:false*/
            var itemnot = this.cartItem(itemData, quantity);
            this.items.push(itemnot);
        }
  
        // save changes
        this.saveItems();
    }
  };

  addItemreplace  (itemData, quantity) {
    quantity = this.toNumber(quantity);
    if (quantity !== 0) {
  
        // update quantity for existing item
        var found = false;
        for (var i = 0; i < this.items.length && !found; i++) {
            var item = this.items[i];
            if (item.productid === itemData.productid && item.categoryid === itemData.categoryid) {
                found = true;
                item.quantity = this.toNumber(quantity);
                if (item.quantity <= 0) {
                    //this.items.splice(i, 1);
                    item.quantity = this.toNumber(0);
                }
            }
        }
  
        // new item, add now
        if (!found) {
          /*jshint newcap:false*/
            var itemnot = this.cartItem(itemData, quantity);
            this.items.push(itemnot);
        }
  
        // save changes
        this.saveItems();
    }
  };

  clearItems  () {
    this.items = [];
    this.saveItems();
  };
  
  
  logoutclearItems  () {
    this.items = [];
    this.saveItems();
  };
  
  getCartCount () {
    var count = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        count += this.toNumber(item.quantity);
    }
    return count;
  };

  // get the total price for all items in the cart
  getSubTotalPrice () {
    var total = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        total += this.toNumber(item.quantity * item.list_price);
    }
    return total;
  }

  getTotalPrice () {
    var total = 0;
    if(this.deliveryCharge>0){
      total += this.deliveryCharge;
    }
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        total += this.toNumber(item.quantity * item.list_price);
    }
    return total;
  }

  toNumber (value) {
    value = value * 1;
    return isNaN(value) ? 0 : value;
  };
}

declare global { // this is important to access it as global type String
  interface String {

    capitalizeFirstLetter(): string;
  
  }
}

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}


