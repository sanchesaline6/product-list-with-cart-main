import { ProductComponent } from './product/product.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-list-with-cart-main';
}
