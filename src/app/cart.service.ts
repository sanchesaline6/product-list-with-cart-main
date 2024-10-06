import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cart.find(item => item.name === product.name)

    if(existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem:CartItem = {name: product.name, price: product.price, quantity: quantity, totalPrice:quantity * product.price};
      this.cart.push(newItem);
    }

    console.log(`Added ${quantity} ${product.name}(s) to the cart`)
  }

  decrementQuantity(product: Product): void {
    const existingItem = this.cart.find(item => item.name === product.name)

    if(existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
    }
  }

  incrementQuantity(product: Product): void {
    const existingItem = this.cart.find(item => item.name === product.name)

    if(existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
    }
  }

  constructor() { }
}
