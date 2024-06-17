export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
  storeId: number;
  categoryIds: number[];

  constructor(
    id: number,
    name: string,
    price: number,
    description: string,
    imgUrl: string,
    storeId: number,
    categoryIds: number[]
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgUrl = imgUrl;
    this.storeId = storeId;
    this.categoryIds = categoryIds;
  }
}
