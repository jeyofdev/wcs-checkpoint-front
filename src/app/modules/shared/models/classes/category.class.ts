import { Product } from './product.class';

export class Category {
  id: number;
  name: string;
  imgUrl: string;
  products: Product[];

  constructor(id: number, name: string, imgUrl: string, products: Product[]) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.products = products;
  }
}
