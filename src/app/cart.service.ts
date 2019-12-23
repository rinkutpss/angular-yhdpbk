import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items = [];

  addToCart(product) {
    this.items.push(product);
    console.log('items in cart',this.items);
  }

  getItems() {
    console.log('test',this.items);
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}