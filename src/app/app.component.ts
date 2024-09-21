import { ProductComponent } from './product/product.component';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from "./cart/cart.component";
import { ProductService } from './product.service';
import { Product } from './product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, CartComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-list-with-cart-main';
  productService: ProductService = inject(ProductService);
  productList: Product[] =[];

  constructor(){
    this.productService.getAllProducts().then((productList: Product[]) => {
      this.productList = productList;
    });
  }
}
