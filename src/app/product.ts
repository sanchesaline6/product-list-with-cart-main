import { ProductImage } from "./product-image";

export interface Product {
  image: ProductImage;
  name: string;
  category: string;
  price: number;
}
