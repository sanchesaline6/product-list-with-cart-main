import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product!: Product;
  quantity: number = 0;
  isAddedToCart: boolean = false;
  isButtonDisabled: boolean = false;

  incrementQuantity() {
    if(this.quantity < 11){
      this.quantity++;
    }
  }
  decrementQuantity() {
    if(this.quantity > 1) {
      this.quantity--;
    }
    else{
      this.isAddedToCart = false;
    }
  }

  addToCart() {
    this.isAddedToCart = true;
    this.quantity = 1;
  }
}
